"use server";

import { sendContactInquiryEmail } from "@/lib/email/sendContactInquiry";
import { isContactMailConfigured } from "@/lib/email/transport";

export type ContactFormState = {
    ok: boolean;
    message?: string;
    fieldErrors?: Partial<
        Record<"name" | "email" | "organization" | "message", string>
    >;
};

function trimStr(v: FormDataEntryValue | null): string {
    if (typeof v !== "string") return "";
    return v.trim();
}

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData,
): Promise<ContactFormState> {
    const name = trimStr(formData.get("name"));
    const email = trimStr(formData.get("email"));
    const organization = trimStr(formData.get("organization"));
    const message = trimStr(formData.get("message"));

    const fieldErrors: ContactFormState["fieldErrors"] = {};

    if (!name || name.length < 2) {
        fieldErrors.name = "Please enter your name.";
    }

    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
    }

    if (!message || message.length < 10) {
        fieldErrors.message =
            "Please enter a message (at least a few sentences).";
    }

    if (Object.keys(fieldErrors).length > 0) {
        return { ok: false, fieldErrors };
    }

    if (!isContactMailConfigured()) {
        console.warn(
            "[contact-us] SMTP not configured: set SMTP_HOST and CAREERS_TO or CONTACT_TO (see .env.example).",
        );
        return {
            ok: false,
            message:
                "This form is not configured to send email yet. Please try again later or reach us using the address on this page.",
        };
    }

    try {
        await sendContactInquiryEmail({
            name,
            email,
            organization,
            message,
        });
    } catch (err) {
        console.error("[contact-us] nodemailer failed:", err);
        return {
            ok: false,
            message:
                "We couldn’t send your message. Please try again in a few minutes.",
        };
    }

    console.info("[contact-us] email sent", { email });

    return {
        ok: true,
        message:
            "Thank you — your message was sent. A specialist will reach out shortly.",
    };
}
