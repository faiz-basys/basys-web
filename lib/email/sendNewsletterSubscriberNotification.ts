import {
    basysEmailDocument,
    emailDetailRows,
    emailExternalLink,
    emailMailtoLink,
} from "@/lib/email/htmlTemplate";
import {
    createSmtpTransport,
    escapeHtml,
    getMailFromAddress,
    getNewsletterSubscriberNotifyRecipient,
} from "@/lib/email/transport";

export type NewsletterListKind = "career" | "general";

export type NewsletterSubscriberNotificationPayload = {
    subscriberEmail: string;
    signUpPage?: string;
    /** Which Sendy list / site section the signup came from. */
    listKind: NewsletterListKind;
};

/**
 * Notifies the communications inbox that a new address was added to the Sendy list
 * (only called after Sendy returns success, not for “already subscribed”).
 */
export async function sendNewsletterSubscriberNotification(
    payload: NewsletterSubscriberNotificationPayload,
): Promise<void> {
    const to = getNewsletterSubscriberNotifyRecipient();
    if (!process.env.SMTP_HOST?.trim() || !to) {
        throw new Error("Newsletter notify email (SMTP) is not configured.");
    }

    const from = getMailFromAddress(to);

    const listLabel =
        payload.listKind === "career"
            ? "Career / hiring updates list"
            : "General newsletter list";

    const textLines = [
        `New newsletter subscriber (basys.ai)`,
        ``,
        `List: ${listLabel}`,
        `Email: ${payload.subscriberEmail}`,
    ];
    if (payload.signUpPage) {
        textLines.push(`Page: ${payload.signUpPage}`);
    }
    const text = textLines.join("\n");

    const rows: { label: string; valueHtml: string }[] = [
        {
            label: "List",
            valueHtml: escapeHtml(listLabel),
        },
        {
            label: "Subscriber email",
            valueHtml: emailMailtoLink(payload.subscriberEmail),
        },
    ];
    if (payload.signUpPage) {
        rows.push({
            label: "Signed up from",
            valueHtml: emailExternalLink(payload.signUpPage),
        });
    }

    const contentHtml = emailDetailRows(rows);

    const html = basysEmailDocument({
        badgeLabel: "Newsletter",
        title: "New subscriber",
        subtitle: `Someone joined the ${payload.listKind === "career" ? "career" : "general"} newsletter list on basys.ai (Sendy).`,
        contentHtml,
        footerNote:
            "This is an automated internal notice. Do not reply to this message.",
    });

    const transporter = createSmtpTransport();

    await transporter.sendMail({
        from,
        to,
        subject:
            payload.listKind === "career"
                ? `[Newsletter] New career subscriber — basys.ai`
                : `[Newsletter] New general subscriber — basys.ai`,
        text,
        html,
    });
}
