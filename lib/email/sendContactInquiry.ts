import {
    basysEmailDocument,
    emailDetailRows,
    emailMailtoLink,
    emailPlainTextBlock,
} from "@/lib/email/htmlTemplate";
import {
    createSmtpTransport,
    escapeHtml,
    getContactRecipient,
    getMailFromAddress,
} from "@/lib/email/transport";

export type ContactInquiryPayload = {
    name: string;
    email: string;
    organization: string;
    message: string;
};

export async function sendContactInquiryEmail(
    payload: ContactInquiryPayload,
): Promise<void> {
    const to = getContactRecipient();
    if (!process.env.SMTP_HOST?.trim() || !to) {
        throw new Error("Contact email (SMTP) is not configured.");
    }

    const from = getMailFromAddress(to);
    const replyTo = payload.email;

    const text = [
        `New contact form submission (basys.ai)`,
        ``,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.organization.trim()
            ? `Organization: ${payload.organization.trim()}`
            : `(No organization provided)`,
        ``,
        `Message:`,
        payload.message.trim() || `(empty)`,
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
${emailPlainTextBlock("Message", payload.message.trim() || "(empty)")}
`.trim();

    const html = basysEmailDocument({
        badgeLabel: "Contact",
        title: "New inquiry",
        subtitle:
            "Someone submitted the Get in touch form on basys.ai/contact-us.",
        contentHtml,
        footerNote:
            "Please do not reply to this email. This is an automated message.",
    });

    const transporter = createSmtpTransport();

    await transporter.sendMail({
        from,
        to,
        replyTo,
        subject: `[Contact] ${payload.name} — basys.ai inquiry`,
        text,
        html,
    });
}
