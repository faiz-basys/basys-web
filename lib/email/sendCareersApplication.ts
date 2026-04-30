import {
    basysEmailDocument,
    emailDetailRows,
    emailExternalLink,
    emailMailtoLink,
    emailMutedNote,
    emailPlainTextBlock,
} from "@/lib/email/htmlTemplate";
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
        ``,
        `Resume attached: ${resumeName}`,
    ].filter(Boolean);

    const rows: { label: string; valueHtml: string }[] = [
        {
            label: "Role",
            valueHtml: `<strong style="font-weight:600;">${escapeHtml(payload.roleTitle)}</strong><span style="color:#858382;font-size:12px;display:block;margin-top:4px;">${escapeHtml(payload.roleSlug)}</span>`,
        },
        { label: "Name", valueHtml: escapeHtml(payload.applicantName) },
        {
            label: "Email",
            valueHtml: emailMailtoLink(payload.applicantEmail),
        },
    ];

    if (payload.phone) {
        rows.push({
            label: "Phone",
            valueHtml: escapeHtml(payload.phone),
        });
    }

    if (payload.linkedin) {
        rows.push({
            label: "LinkedIn",
            valueHtml: emailExternalLink(payload.linkedin),
        });
    }

    const attachmentNote = `<p style="margin:20px 0 0;font-size:13px;color:#45464d;line-height:1.5;">Resume is attached to this message as <strong>${escapeHtml(resumeName)}</strong>.</p>`;

    const coverBlock = payload.coverLetter.trim()
        ? emailPlainTextBlock("Cover letter", payload.coverLetter.trim())
        : emailMutedNote("No cover letter provided.");

    const contentHtml = `
${emailDetailRows(rows)}
${attachmentNote}
${coverBlock}
`.trim();

    const html = basysEmailDocument({
        badgeLabel: "Careers",
        title: "New application",
        subtitle: "Someone applied through the careers form on basys.ai.",
        contentHtml,
        footerNote:
            "Please do not reply to this email. This is an automated message.",
    });

    const transporter = createSmtpTransport();

    await transporter.sendMail({
        from,
        to,
        replyTo,
        subject: `[Careers] ${payload.roleTitle} — ${payload.applicantName}`,
        text: textLines.join("\n"),
        html,
        attachments: [
            {
                filename: resumeName,
                content: resumeBuf,
                contentType: payload.resume.type || undefined,
            },
        ],
    });
}
