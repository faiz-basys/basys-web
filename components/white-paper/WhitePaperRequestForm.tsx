"use client";

import type { WhitepaperFormState } from "@/app/white-papers/actions";
import { submitWhitepaperRequest } from "@/app/white-papers/actions";
import { Button } from "@/components/ui/Button";
import { WHITE_PAPER_FORM_OPTIONS } from "@/components/white-paper/white-paper-data";
import { useActionState } from "react";

const initialState: WhitepaperFormState = {
    ok: false,
};

export function WhitePaperRequestForm() {
    const [state, formAction, pending] = useActionState(
        submitWhitepaperRequest,
        initialState,
    );

    if (state.ok && state.message) {
        return (
            <div className="rounded-4xl border border-outline/15 bg-surface-container-lowest px-6 py-12 text-center">
                <span className="material-symbols-outlined mb-4 inline-block text-5xl text-primary">
                    check_circle
                </span>
                <p className="text-lg font-semibold text-primary">
                    {state.message}
                </p>
            </div>
        );
    }

    return (
        <form
            action={formAction}
            className="mt-10 space-y-6 rounded-4xl border border-outline/10 bg-surface-container-lowest p-8"
        >
            {state.message && !state.ok ? (
                <p
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                    role="alert"
                >
                    {state.message}
                </p>
            ) : null}

            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="wp-name"
                >
                    Name
                </label>
                <input
                    id="wp-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(state.fieldErrors?.name)}
                    aria-describedby={
                        state.fieldErrors?.name ? "wp-name-err" : undefined
                    }
                />
                {state.fieldErrors?.name ? (
                    <p id="wp-name-err" className="px-1 text-xs text-red-700">
                        {state.fieldErrors.name}
                    </p>
                ) : null}
            </div>
            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="wp-email"
                >
                    Email address
                </label>
                <input
                    id="wp-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@website.com"
                    required
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(state.fieldErrors?.email)}
                    aria-describedby={
                        state.fieldErrors?.email ? "wp-email-err" : undefined
                    }
                />
                {state.fieldErrors?.email ? (
                    <p id="wp-email-err" className="px-1 text-xs text-red-700">
                        {state.fieldErrors.email}
                    </p>
                ) : null}
            </div>
            <fieldset
                className="space-y-3"
                aria-describedby={
                    state.fieldErrors?.whitepapers
                        ? "wp-whitepapers-err"
                        : undefined
                }
            >
                <legend className="block px-1 text-xs font-semibold tracking-wider text-on-surface">
                    Which whitepaper(s) do you need?
                </legend>
                <div className="space-y-2">
                    {WHITE_PAPER_FORM_OPTIONS.map((option) => (
                        <label
                            key={option.id}
                            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 transition-colors has-checked:border-primary has-checked:bg-surface-container-low has-checked:ring-2 has-checked:ring-primary"
                        >
                            <input
                                type="checkbox"
                                name="whitepapers"
                                value={option.id}
                                className="mt-0.5 size-4 shrink-0 accent-primary"
                            />
                            <span className="min-w-0">
                                <span className="block text-sm font-semibold text-primary">
                                    {option.label}
                                </span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-on-surface-variant">
                                    {option.description}
                                </span>
                            </span>
                        </label>
                    ))}
                </div>
                {state.fieldErrors?.whitepapers ? (
                    <p
                        id="wp-whitepapers-err"
                        className="px-1 text-xs text-red-700"
                        role="alert"
                    >
                        {state.fieldErrors.whitepapers}
                    </p>
                ) : null}
            </fieldset>

            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="wp-org"
                >
                    Organization (Optional)
                </label>
                <input
                    id="wp-org"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    placeholder="Health plan or organization"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(state.fieldErrors?.organization)}
                    aria-describedby={
                        state.fieldErrors?.organization
                            ? "wp-org-err"
                            : undefined
                    }
                />
                {state.fieldErrors?.organization ? (
                    <p id="wp-org-err" className="px-1 text-xs text-red-700">
                        {state.fieldErrors.organization}
                    </p>
                ) : null}
            </div>
            <Button
                type="submit"
                className="w-full py-4 text-sm font-semibold active:scale-95 disabled:opacity-60"
                size="lg"
                disabled={pending}
            >
                {pending ? "Sending…" : "Get Access to White Paper"}
            </Button>
        </form>
    );
}
