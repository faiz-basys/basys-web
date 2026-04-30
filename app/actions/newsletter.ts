"use server";

import { sendNewsletterSubscriberNotification } from "@/lib/email/sendNewsletterSubscriberNotification";
import {
    isNewsletterNotifyMailConfigured,
} from "@/lib/email/transport";
import {
    isSendySubscribeSuccess,
    sendySubscribeRequest,
} from "@/lib/sendy/subscribeRequest";
import { headers } from "next/headers";

export type NewsletterSignupState = {
    ok: boolean;
    message?: string;
    fieldErrors?: Partial<Record<"email", string>>;
};

function trimStr(v: FormDataEntryValue | null): string {
    if (typeof v !== "string") return "";
    return v.trim();
}

async function getClientIpAndReferer(): Promise<{
    ip?: string;
    referer?: string;
}> {
    const h = await headers();
    const xff = h.get("x-forwarded-for");
    const ip =
        xff?.split(",")[0]?.trim() || h.get("x-real-ip") || undefined;
    const referer = h.get("referer") || undefined;
    return { ip, referer };
}

type SubscribeKind = "career" | "general";

async function runNewsletterSubscribe(
    formData: FormData,
    options: {
        listId: string | undefined;
        envHint: string;
        alreadyMessage: string;
        notifyKind: SubscribeKind;
        logPrefix: string;
    },
): Promise<NewsletterSignupState> {
    const email = trimStr(formData.get("email"));

    if (!email) {
        return {
            ok: false,
            fieldErrors: { email: "Email is required." },
        };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            ok: false,
            fieldErrors: { email: "Enter a valid email address." },
        };
    }

    const baseUrl = process.env.SENDY_BASE_URL?.replace(/\/$/, "");
    const apiKey = process.env.SENDY_API_KEY?.trim();
    const listId = options.listId?.trim();

    if (!baseUrl || !apiKey || !listId) {
        console.warn(
            `${options.logPrefix} Sendy not configured: set SENDY_BASE_URL, SENDY_API_KEY, ${options.envHint}.`,
        );
        return {
            ok: false,
            message:
                "Newsletter signup is not available right now. Please try again later.",
        };
    }

    const { ip, referer } = await getClientIpAndReferer();
    const result = await sendySubscribeRequest({
        email,
        listId,
        referer,
        ip,
    });

    if (!result.ok) {
        console.error(`${options.logPrefix} Sendy request failed (network).`);
        return {
            ok: false,
            message:
                "Could not reach the newsletter service. Please try again in a few minutes.",
        };
    }

    const text = result.body;

    if (isSendySubscribeSuccess(text)) {
        if (isNewsletterNotifyMailConfigured()) {
            try {
                await sendNewsletterSubscriberNotification({
                    subscriberEmail: email,
                    signUpPage: referer,
                    listKind: options.notifyKind,
                });
            } catch (err) {
                console.error(
                    `${options.logPrefix} internal notify email failed:`,
                    err,
                );
            }
        } else {
            console.warn(
                `${options.logPrefix} internal notify skipped: set SMTP_HOST and CONTACT_TO (or NEWSLETTER_NOTIFY_TO).`,
            );
        }
        return {
            ok: true,
            message:
                "Thanks! Check your inbox to confirm your subscription.",
        };
    }
    if (/already subscribed/i.test(text)) {
        return {
            ok: true,
            message: options.alreadyMessage,
        };
    }

    return {
        ok: false,
        message: text || "Subscription failed. Please try again.",
    };
}

export async function subscribeCareerNewsletter(
    _prevState: NewsletterSignupState,
    formData: FormData,
): Promise<NewsletterSignupState> {
    return runNewsletterSubscribe(formData, {
        listId: process.env.SENDY_JOB_LIST_ID,
        envHint: "SENDY_JOB_LIST_ID",
        alreadyMessage:
            "You're already subscribed — we'll keep you posted on new roles.",
        notifyKind: "career",
        logPrefix: "[career newsletter]",
    });
}

export async function subscribeGeneralNewsletter(
    _prevState: NewsletterSignupState,
    formData: FormData,
): Promise<NewsletterSignupState> {
    return runNewsletterSubscribe(formData, {
        listId: process.env.SENDY_GENERAL_LIST_ID,
        envHint: "SENDY_GENERAL_LIST_ID",
        alreadyMessage:
            "You're already on our list — we'll share news and insights.",
        notifyKind: "general",
        logPrefix: "[general newsletter]",
    });
}
