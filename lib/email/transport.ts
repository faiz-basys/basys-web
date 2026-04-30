import nodemailer from "nodemailer";

export function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export function createSmtpTransport() {
    const host = process.env.SMTP_HOST?.trim();
    if (!host) {
        throw new Error("SMTP_HOST is not set.");
    }

    const port = Number.parseInt(process.env.SMTP_PORT ?? "587", 10);
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth:
            user && pass
                ? {
                      user,
                      pass,
                  }
                : undefined,
    });
}

/** From header for transactional mail (must be allowed by your SMTP provider). */
export function getMailFromAddress(fallbackTo: string): string {
    return (
        process.env.CAREERS_FROM?.trim() ||
        process.env.SMTP_USER?.trim() ||
        fallbackTo
    );
}

export function getCareersRecipient(): string | undefined {
    return process.env.CAREERS_TO?.trim();
}

/** Contact form: CONTACT_TO, or same inbox as careers. */
export function getContactRecipient(): string | undefined {
    return (
        process.env.CONTACT_TO?.trim() || process.env.CAREERS_TO?.trim()
    );
}

/** White paper requests: WHITEPAPER_TO, or same as careers. */
export function getWhitepaperRecipient(): string | undefined {
    return (
        process.env.WHITEPAPER_TO?.trim() || process.env.CAREERS_TO?.trim()
    );
}

/** Internal alert when someone joins a Sendy list from the site. NEWSLETTER_NOTIFY_TO, or same as contact/communications. */
export function getNewsletterSubscriberNotifyRecipient(): string | undefined {
    return (
        process.env.NEWSLETTER_NOTIFY_TO?.trim() || getContactRecipient()
    );
}

export function isCareersMailConfigured(): boolean {
    return Boolean(
        process.env.SMTP_HOST?.trim() && getCareersRecipient(),
    );
}

export function isContactMailConfigured(): boolean {
    return Boolean(
        process.env.SMTP_HOST?.trim() && getContactRecipient(),
    );
}

export function isWhitepaperMailConfigured(): boolean {
    return Boolean(
        process.env.SMTP_HOST?.trim() && getWhitepaperRecipient(),
    );
}

export function isNewsletterNotifyMailConfigured(): boolean {
    return Boolean(
        process.env.SMTP_HOST?.trim() &&
            getNewsletterSubscriberNotifyRecipient(),
    );
}
