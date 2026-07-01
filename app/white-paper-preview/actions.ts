"use server";

import { WHITE_PAPERS } from "@/components/white-paper/white-paper-data";
import { sendWhitepaperRequestEmail } from "@/lib/email/sendWhitepaperRequest";
import { isWhitepaperMailConfigured } from "@/lib/email/transport";

const VALID_WHITEPAPER_IDS = new Set(WHITE_PAPERS.map((paper) => paper.id));

export type WhitepaperFormState = {
    ok: boolean;
    message?: string;
    fieldErrors?: Partial<
        Record<"name" | "email" | "organization" | "whitepapers", string>
    >;
};

function trimStr(v: FormDataEntryValue | null): string {
    if (typeof v !== "string") return "";
    return v.trim();
}

function parseSelectedWhitepapers(formData: FormData): string[] {
    const selected = formData
        .getAll("whitepapers")
        .filter((value): value is string => typeof value === "string")
        .filter((id) => VALID_WHITEPAPER_IDS.has(id));

    return [...new Set(selected)];
}

export async function submitWhitepaperRequest(
    _prevState: WhitepaperFormState,
    formData: FormData,
): Promise<WhitepaperFormState> {
    const name = trimStr(formData.get("name"));
    const email = trimStr(formData.get("email"));
    const organization = trimStr(formData.get("organization"));
    const whitepapers = parseSelectedWhitepapers(formData);

    const fieldErrors: WhitepaperFormState["fieldErrors"] = {};

    if (!name || name.length < 2) {
        fieldErrors.name = "Please enter your name.";
    }

    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
    }

    if (whitepapers.length === 0) {
        fieldErrors.whitepapers = "Select at least one whitepaper.";
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
            whitepapers,
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
