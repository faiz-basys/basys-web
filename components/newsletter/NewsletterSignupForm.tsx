"use client";

import type { NewsletterSignupState } from "@/app/actions/newsletter";
import {
    subscribeCareerNewsletter,
    subscribeGeneralNewsletter,
} from "@/app/actions/newsletter";
import { Button } from "@/components/ui/Button";
import { useActionState } from "react";

const initialState: NewsletterSignupState = {
    ok: false,
};

export type NewsletterSignupVariant = "career" | "general";

const actions: Record<
    NewsletterSignupVariant,
    (
        state: NewsletterSignupState,
        data: FormData,
    ) => Promise<NewsletterSignupState>
> = {
    career: subscribeCareerNewsletter,
    general: subscribeGeneralNewsletter,
};

type NewsletterSignupFormProps = {
    variant: NewsletterSignupVariant;
    className?: string;
};

export function NewsletterSignupForm({
    variant,
    className = "",
}: NewsletterSignupFormProps) {
    const [state, formAction, pending] = useActionState(
        actions[variant],
        initialState,
    );

    const inputId = `newsletter-email-${variant}`;

    if (state.ok && state.message) {
        return (
            <div
                className={`mx-auto mt-8 max-w-md rounded-3xl border border-outline/15 bg-white/60 px-6 py-8 text-center backdrop-blur-sm ${className}`}
            >
                <span className="material-symbols-outlined mb-3 inline-block text-4xl text-primary">
                    mark_email_read
                </span>
                <p className="text-sm font-semibold text-on-surface">
                    {state.message}
                </p>
            </div>
        );
    }

    return (
        <form
            action={formAction}
            className={`mx-auto mt-8 w-full max-w-md space-y-3 ${className}`}
        >
            {state.message && !state.ok ? (
                <p
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-left text-sm text-red-900"
                    role="alert"
                >
                    {state.message}
                </p>
            ) : null}

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <label className="sr-only" htmlFor={inputId}>
                    Email address
                </label>
                <input
                    id={inputId}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Email Address"
                    disabled={pending}
                    className="grow rounded-pill border border-outline/20 bg-white px-6 py-3 text-sm text-on-surface focus:ring-0 disabled:opacity-60"
                    aria-invalid={Boolean(state.fieldErrors?.email)}
                    aria-describedby={
                        state.fieldErrors?.email
                            ? `${inputId}-err`
                            : undefined
                    }
                />
                <Button
                    type="submit"
                    className="shrink-0 px-8 py-3 uppercase"
                    disabled={pending}
                >
                    {pending ? "…" : "Subscribe"}
                </Button>
            </div>
            {state.fieldErrors?.email ? (
                <p
                    id={`${inputId}-err`}
                    className="text-left text-sm text-red-700"
                >
                    {state.fieldErrors.email}
                </p>
            ) : null}
        </form>
    );
}
