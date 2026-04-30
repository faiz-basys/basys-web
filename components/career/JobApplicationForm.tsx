"use client";

import { submitJobApplication } from "@/app/career/apply/actions";
import type { ApplicationFormState } from "@/app/career/apply/actions";
import { Button } from "@/components/ui/Button";
import { useActionState } from "react";

const initialState: ApplicationFormState = {
    ok: false,
};

type Props = {
    roleSlug: string;
    roleTitle: string;
};

export function JobApplicationForm({ roleSlug, roleTitle }: Props) {
    const [state, formAction, pending] = useActionState(
        submitJobApplication,
        initialState,
    );

    if (state.ok && state.message) {
        return (
            <div className="rounded-4xl border border-outline/15 bg-surface-container-lowest px-8 py-12 text-center shadow-sm">
                <span className="material-symbols-outlined mb-4 inline-block text-5xl text-primary">
                    check_circle
                </span>
                <h2 className="text-2xl font-semibold text-primary">
                    Application received
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-on-surface-variant">
                    {state.message}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button href="/career" variant="outline">
                        Back to careers
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-6">
            <input name="roleSlug" type="hidden" value={roleSlug} />

            <div className="rounded-3xl border border-outline/10 bg-surface-container-lowest px-6 py-5">
                <p className="text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                    Applying for
                </p>
                <p className="mt-1 text-lg font-semibold text-primary">
                    {roleTitle}
                </p>
            </div>

            {state.message && !state.ok ? (
                <p
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                    role="alert"
                >
                    {state.message}
                </p>
            ) : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label
                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                        htmlFor="apply-name"
                    >
                        Full name
                    </label>
                    <input
                        id="apply-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                        aria-invalid={Boolean(state.fieldErrors?.name)}
                        aria-describedby={
                            state.fieldErrors?.name
                                ? "apply-name-error"
                                : undefined
                        }
                    />
                    {state.fieldErrors?.name ? (
                        <p
                            id="apply-name-error"
                            className="px-1 text-xs text-red-700"
                        >
                            {state.fieldErrors.name}
                        </p>
                    ) : null}
                </div>

                <div className="space-y-2">
                    <label
                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                        htmlFor="apply-email"
                    >
                        Email
                    </label>
                    <input
                        id="apply-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@email.com"
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                        aria-invalid={Boolean(state.fieldErrors?.email)}
                        aria-describedby={
                            state.fieldErrors?.email
                                ? "apply-email-error"
                                : undefined
                        }
                    />
                    {state.fieldErrors?.email ? (
                        <p
                            id="apply-email-error"
                            className="px-1 text-xs text-red-700"
                        >
                            {state.fieldErrors.email}
                        </p>
                    ) : null}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label
                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                        htmlFor="apply-phone"
                    >
                        Phone{" "}
                        <span className="font-normal text-on-surface-variant">
                            (optional)
                        </span>
                    </label>
                    <input
                        id="apply-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 …"
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                        htmlFor="apply-linkedin"
                    >
                        LinkedIn profile{" "}
                        <span className="font-normal text-on-surface-variant">
                            (optional)
                        </span>
                    </label>
                    <input
                        id="apply-linkedin"
                        name="linkedin"
                        type="url"
                        autoComplete="url"
                        placeholder="https://www.linkedin.com/in/…"
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                        aria-invalid={Boolean(state.fieldErrors?.linkedin)}
                        aria-describedby={
                            state.fieldErrors?.linkedin
                                ? "apply-linkedin-error"
                                : undefined
                        }
                    />
                    {state.fieldErrors?.linkedin ? (
                        <p
                            id="apply-linkedin-error"
                            className="px-1 text-xs text-red-700"
                        >
                            {state.fieldErrors.linkedin}
                        </p>
                    ) : null}
                </div>
            </div>

            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="apply-resume"
                >
                    Resume / CV (PDF or Word, max 5 MB)
                </label>
                <input
                    id="apply-resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="w-full cursor-pointer rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 text-sm file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-on-primary"
                    aria-invalid={Boolean(state.fieldErrors?.resume)}
                    aria-describedby={
                        state.fieldErrors?.resume
                            ? "apply-resume-error"
                            : undefined
                    }
                />
                {state.fieldErrors?.resume ? (
                    <p
                        id="apply-resume-error"
                        className="px-1 text-xs text-red-700"
                    >
                        {state.fieldErrors.resume}
                    </p>
                ) : null}
            </div>

            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="apply-cover"
                >
                    Cover letter{" "}
                    <span className="font-normal text-on-surface-variant">
                        (optional)
                    </span>
                </label>
                <textarea
                    id="apply-cover"
                    name="coverLetter"
                    rows={6}
                    placeholder="Tell us why you're excited about healthcare AI at basys.ai…"
                    className="w-full resize-y rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-on-surface-variant">
                    By submitting, you agree that we may contact you about this
                    application.
                </p>
                <Button
                    type="submit"
                    size="lg"
                    className="shrink-0 uppercase"
                    disabled={pending}
                >
                    {pending ? "Submitting…" : "Submit application"}
                </Button>
            </div>
        </form>
    );
}
