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

    const html = `
<p><strong>New contact form submission</strong></p>
<ul>
  <li><strong>Name:</strong> ${escapeHtml(payload.name)}</li>
  <li><strong>Email:</strong> ${escapeHtml(payload.email)}</li>
  ${payload.organization.trim() ? `<li><strong>Organization:</strong> ${escapeHtml(payload.organization.trim())}</li>` : "<li><em>No organization provided.</em></li>"}
</ul>
<p><strong>Message</strong></p>
<p>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
`.trim();

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
