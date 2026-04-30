import { escapeHtml } from "@/lib/email/transport";

/** Aligns with app/globals.css theme (basys landing). */
const C = {
    pageBg: "#f7f9fc",
    surface: "#ffffff",
    primary: "#000000",
    onPrimary: "#ffffff",
    onSurface: "#191c1e",
    onSurfaceVariant: "#45464d",
    muted: "#858382",
    outline: "#eceef1",
    pillBg: "#f2f4f7",
} as const;

const FONT =
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

type BasysEmailOptions = {
    badgeLabel: string;
    title: string;
    subtitle?: string;
    contentHtml: string;
    footerNote?: string;
};

/**
 * Table-based, inline-styled HTML for broad mail client support (Outlook, Gmail, etc.).
 */
export function basysEmailDocument(opts: BasysEmailOptions): string {
    const subtitleBlock = opts.subtitle
        ? `<p style="margin:0 0 24px;font-size:14px;line-height:1.55;color:${C.onSurfaceVariant};">${opts.subtitle}</p>`
        : "";

    const footer =
        opts.footerNote ??
        "Reply to this email to reach the submitter (Reply-To is set). Sent from a form on basys.ai.";

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${escapeHtml(opts.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.pageBg};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${C.pageBg};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${C.surface};border-radius:24px;border:1px solid ${C.outline};overflow:hidden;font-family:${FONT};">
        <tr>
          <td style="background:${C.primary};padding:22px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="color:${C.onPrimary};font-size:20px;font-weight:700;letter-spacing:-0.02em;">basys.ai</td>
                <td align="right" style="color:rgba(255,255,255,0.88);font-size:10px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;">${escapeHtml(opts.badgeLabel)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 28px 8px;">
            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:${C.onSurface};letter-spacing:-0.02em;line-height:1.25;">${escapeHtml(opts.title)}</h1>
            ${subtitleBlock}
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px;color:${C.onSurface};font-size:14px;line-height:1.55;">
            ${opts.contentHtml}
          </td>
        </tr>
        <tr>
          <td style="padding:18px 28px;background:${C.pillBg};border-top:1px solid ${C.outline};font-size:12px;line-height:1.5;color:${C.onSurfaceVariant};">
            ${escapeHtml(footer)}
          </td>
        </tr>
      </table>
      <p style="margin:20px 0 0;font-size:11px;color:${C.muted};text-align:center;font-family:${FONT};">basys.ai</p>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function emailDetailRows(
    rows: { label: string; valueHtml: string }[],
): string {
    const inner = rows
        .map(
            (r) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${C.outline};vertical-align:top;width:36%;">
        <span style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${C.muted};">${escapeHtml(r.label)}</span>
      </td>
      <td style="padding:14px 0 14px 16px;border-bottom:1px solid ${C.outline};color:${C.onSurface};font-size:14px;line-height:1.45;">
        ${r.valueHtml}
      </td>
    </tr>`,
        )
        .join("");

    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0;">${inner}</table>`;
}

export function emailPlainTextBlock(title: string, body: string): string {
    const inner = escapeHtml(body).replace(/\n/g, "<br/>");
    return `
<div style="margin-top:22px;">
  <p style="margin:0 0 10px;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${C.muted};">${escapeHtml(title)}</p>
  <div style="background:${C.pageBg};border-radius:16px;border:1px solid ${C.outline};padding:18px 20px;color:${C.onSurface};font-size:14px;line-height:1.55;">
    ${inner}
  </div>
</div>`;
}

export function emailMutedNote(text: string): string {
    return `<p style="margin:16px 0 0;font-size:13px;font-style:italic;color:${C.onSurfaceVariant};">${escapeHtml(text)}</p>`;
}

export function emailMailtoLink(email: string): string {
    const safe = encodeURIComponent(email.trim());
    return `<a href="mailto:${safe}" style="color:${C.primary};font-weight:600;text-decoration:underline;">${escapeHtml(email)}</a>`;
}

export function emailExternalLink(url: string, label?: string): string {
    const display = label ?? url;
    return `<a href="${escapeHtml(url)}" style="color:${C.primary};font-weight:600;text-decoration:underline;">${escapeHtml(display)}</a>`;
}
