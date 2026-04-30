"use server";

import {
    careersEmailConfigured,
    sendCareersApplicationEmail,
} from "@/lib/email/sendCareersApplication";
import {
    GENERAL_APPLICATION_SLUG,
    getJobBySlug,
    jobRoles,
} from "@/lib/career/jobs";

export type ApplicationFormState = {
    ok: boolean;
    message?: string;
    fieldErrors?: Partial<
        Record<
            | "name"
            | "email"
            | "phone"
            | "linkedin"
            | "coverLetter"
            | "resume"
            | "role",
            string
        >
    >;
};

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isAllowedResume(file: File): boolean {
    if (file.size === 0) return false;
    if (file.size > MAX_RESUME_BYTES) return false;
    return ALLOWED_RESUME_TYPES.has(file.type);
}

function trimStr(v: FormDataEntryValue | null): string {
    if (typeof v !== "string") return "";
    return v.trim();
}

export async function submitJobApplication(
    _prevState: ApplicationFormState,
    formData: FormData,
): Promise<ApplicationFormState> {
    const roleSlug = trimStr(formData.get("roleSlug"));
    const job = roleSlug ? getJobBySlug(roleSlug) : undefined;

    if (!job) {
        return {
            ok: false,
            message: "This role is not available.",
            fieldErrors: { role: "Invalid role selected." },
        };
    }

    if (job.slug !== GENERAL_APPLICATION_SLUG && jobRoles.length === 0) {
        return {
            ok: false,
            message:
                "There are no listed openings right now. Use the general application instead.",
        };
    }

    const name = trimStr(formData.get("name"));
    const email = trimStr(formData.get("email"));
    const phone = trimStr(formData.get("phone"));
    const linkedin = trimStr(formData.get("linkedin"));
    const coverLetter = trimStr(formData.get("coverLetter"));
    const resume = formData.get("resume");

    const fieldErrors: ApplicationFormState["fieldErrors"] = {};

    if (!name || name.length < 2) {
        fieldErrors.name = "Please enter your full name.";
    }

    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
    }

    if (linkedin && !/^https?:\/\//i.test(linkedin)) {
        fieldErrors.linkedin = "Use a full URL (https://…).";
    }

    if (!(resume instanceof File)) {
        fieldErrors.resume = "Please attach your resume.";
    } else if (!isAllowedResume(resume)) {
        fieldErrors.resume =
            "Upload a PDF or Word file under 5 MB.";
    }

    if (Object.keys(fieldErrors).length > 0) {
        return { ok: false, fieldErrors };
    }

    if (!careersEmailConfigured()) {
        console.warn(
            "[careers:apply] SMTP not configured: set SMTP_HOST and CAREERS_TO (see .env.example).",
        );
        return {
            ok: false,
            message:
                "Application email is not configured on the server. Please try again later or contact us using the email on our careers page.",
        };
    }

    try {
        await sendCareersApplicationEmail({
            roleSlug: job.slug,
            roleTitle: job.title,
            applicantName: name,
            applicantEmail: email,
            phone: phone || undefined,
            linkedin: linkedin || undefined,
            coverLetter,
            resume: resume as File,
        });
    } catch (err) {
        console.error("[careers:apply] nodemailer failed:", err);
        return {
            ok: false,
            message:
                "We couldn’t deliver your application. Please try again in a few minutes or email your resume to our HR or communications address.",
        };
    }

    console.info("[careers:apply] email sent", {
        roleSlug: job.slug,
        roleTitle: job.title,
        applicantEmail: email,
    });

    return {
        ok: true,
        message:
            "Thank you — your application was received. Our recruiting team will follow up by email.",
    };
}
