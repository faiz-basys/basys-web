"use server";

import { sendWhitepaperRequestEmail } from "@/lib/email/sendWhitepaperRequest";
import { isWhitepaperMailConfigured } from "@/lib/email/transport";

export type WhitepaperFormState = {
    ok: boolean;
    message?: string;
    fieldErrors?: Partial<
        Record<"name" | "email" | "organization", string>
    >;
};

function trimStr(v: FormDataEntryValue | null): string {
    if (typeof v !== "string") return "";
    return v.trim();
}

export async function submitWhitepaperRequest(
    _prevState: WhitepaperFormState,
    formData: FormData,
): Promise<WhitepaperFormState> {
    const name = trimStr(formData.get("name"));
    const email = trimStr(formData.get("email"));
    const organization = trimStr(formData.get("organization"));

    const fieldErrors: WhitepaperFormState["fieldErrors"] = {};

    if (!name || name.length < 2) {
        fieldErrors.name = "Please enter your name.";
    }

    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(fieldErrors).length > 0) {
        return { ok: false, fieldErrors };
    }

    if (!isWhitepaperMailConfigured()) {
        console.warn(
            "[white-paper] SMTP not configured: set SMTP_HOST and CAREERS_TO or WHITEPAPER_TO (see .env.example).",
        );
        return {
            ok: false,
            message:
                "This form is not configured to send email yet. Please try again later.",
        };
    }

    try {
        await sendWhitepaperRequestEmail({
            name,
            email,
            organization,
        });
    } catch (err) {
        console.error("[white-paper] nodemailer failed:", err);
        return {
            ok: false,
            message:
                "We couldn’t send your request. Please try again in a few minutes.",
        };
    }

    console.info("[white-paper] email sent", { email });

    return {
        ok: true,
        message:
            "Thank you — we received your request. Our team will follow up with the white paper.",
    };
}
