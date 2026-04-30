import {
    createSmtpTransport,
    escapeHtml,
    getCareersRecipient,
    getMailFromAddress,
    isCareersMailConfigured,
} from "@/lib/email/transport";

export function careersEmailConfigured(): boolean {
    return isCareersMailConfigured();
}

export type CareersApplicationPayload = {
    roleTitle: string;
    roleSlug: string;
    applicantName: string;
    applicantEmail: string;
    phone?: string;
    linkedin?: string;
    coverLetter: string;
    resume: File;
};

export async function sendCareersApplicationEmail(
    payload: CareersApplicationPayload,
): Promise<void> {
    const to = getCareersRecipient();
    if (!process.env.SMTP_HOST?.trim() || !to) {
        throw new Error("Careers email (SMTP) is not configured.");
    }

    const from = getMailFromAddress(to);

    const replyTo = payload.applicantEmail;
    const resumeBuf = Buffer.from(await payload.resume.arrayBuffer());
    const resumeName =
        payload.resume.name.trim() || "resume attachment";

    const textLines = [
        `New careers application`,
        ``,
        `Role: ${payload.roleTitle} (${payload.roleSlug})`,
        `Name: ${payload.applicantName}`,
        `Email: ${payload.applicantEmail}`,
        payload.phone ? `Phone: ${payload.phone}` : null,
        payload.linkedin ? `LinkedIn: ${payload.linkedin}` : null,
        ``,
        payload.coverLetter.trim()
            ? `Cover letter:\n${payload.coverLetter.trim()}`
            : `(No cover letter provided)`,
    ].filter(Boolean);

    const htmlBody = `
<p><strong>New careers application</strong></p>
<ul>
  <li><strong>Role:</strong> ${escapeHtml(payload.roleTitle)} (${escapeHtml(payload.roleSlug)})</li>
  <li><strong>Name:</strong> ${escapeHtml(payload.applicantName)}</li>
  <li><strong>Email:</strong> ${escapeHtml(payload.applicantEmail)}</li>
  ${payload.phone ? `<li><strong>Phone:</strong> ${escapeHtml(payload.phone)}</li>` : ""}
  ${payload.linkedin ? `<li><strong>LinkedIn:</strong> ${escapeHtml(payload.linkedin)}</li>` : ""}
</ul>
${payload.coverLetter.trim() ? `<p><strong>Cover letter</strong></p><p>${escapeHtml(payload.coverLetter).replace(/\n/g, "<br/>")}</p>` : "<p><em>No cover letter provided.</em></p>"}
`.trim();

    const transporter = createSmtpTransport();

    await transporter.sendMail({
        from,
        to,
        replyTo,
        subject: `[Careers] ${payload.roleTitle} — ${payload.applicantName}`,
        text: textLines.join("\n"),
        html: htmlBody,
        attachments: [
            {
                filename: resumeName,
                content: resumeBuf,
                contentType: payload.resume.type || undefined,
            },
        ],
    });
}
