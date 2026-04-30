import {
    basysEmailDocument,
    emailDetailRows,
    emailMailtoLink,
    emailMutedNote,
} from "@/lib/email/htmlTemplate";
import {
    createSmtpTransport,
    escapeHtml,
    getMailFromAddress,
    getWhitepaperRecipient,
} from "@/lib/email/transport";

export type WhitepaperRequestPayload = {
    name: string;
    email: string;
    organization: string;
};

export async function sendWhitepaperRequestEmail(
    payload: WhitepaperRequestPayload,
): Promise<void> {
    const to = getWhitepaperRecipient();
    if (!process.env.SMTP_HOST?.trim() || !to) {
        throw new Error("White paper email (SMTP) is not configured.");
    }

    const from = getMailFromAddress(to);
    const replyTo = payload.email;

    const text = [
        `White paper access request (basys.ai /white-paper-preview)`,
        ``,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.organization.trim()
            ? `Organization: ${payload.organization.trim()}`
            : `(No organization provided)`,
        ``,
        `Follow up with the PDF or download link as per your process.`,
    ].join("\n");

    const rows: { label: string; valueHtml: string }[] = [
        { label: "Name", valueHtml: escapeHtml(payload.name) },
        {
            label: "Email",
            valueHtml: emailMailtoLink(payload.email),
        },
        {
            label: "Organization",
            valueHtml: payload.organization.trim()
                ? escapeHtml(payload.organization.trim())
                : `<span style="color:#858382;font-size:13px;font-style:italic;">Not provided</span>`,
        },
    ];

    const contentHtml = `
${emailDetailRows(rows)}
${emailMutedNote("Requested from /white-paper-preview · Follow up with the full white paper or download link.")}
`.trim();

    const html = basysEmailDocument({
        badgeLabel: "White paper",
        title: "Access request",
        subtitle:
            "Someone requested the prior authorization white paper on basys.ai.",
        contentHtml,
        footerNote:
            "Reply to this email to reach the requester. Send the asset your team uses for this campaign.",
    });

    const transporter = createSmtpTransport();

    await transporter.sendMail({
        from,
        to,
        replyTo,
        subject: `[White paper] ${payload.name} — prior authorization`,
        text,
        html,
    });
}
