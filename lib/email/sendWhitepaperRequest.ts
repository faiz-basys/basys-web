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

    const html = `
<p><strong>White paper access request</strong></p>
<p><em>Page: /white-paper-preview</em></p>
<ul>
  <li><strong>Name:</strong> ${escapeHtml(payload.name)}</li>
  <li><strong>Email:</strong> ${escapeHtml(payload.email)}</li>
  ${payload.organization.trim() ? `<li><strong>Organization:</strong> ${escapeHtml(payload.organization.trim())}</li>` : "<li><em>No organization provided.</em></li>"}
</ul>
`.trim();

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
