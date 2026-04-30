"use client";

import type { ContactFormState } from "@/app/contact-us/actions";
import { submitContactForm } from "@/app/contact-us/actions";
import { Button } from "@/components/ui/Button";
import { useActionState } from "react";

const initialState: ContactFormState = {
    ok: false,
};

export function ContactForm() {
    const [state, formAction, pending] = useActionState(
        submitContactForm,
        initialState,
    );

    if (state.ok && state.message) {
        return (
            <div className="rounded-4xl border border-outline/15 bg-surface-container-low px-6 py-12 text-center">
                <span className="material-symbols-outlined mb-4 inline-block text-5xl text-primary">
                    check_circle
                </span>
                <p className="text-lg font-semibold text-primary">{state.message}</p>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-6">
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
                        htmlFor="contact-name"
                    >
                        Name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        autoComplete="name"
                        required
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                        aria-invalid={Boolean(state.fieldErrors?.name)}
                        aria-describedby={
                            state.fieldErrors?.name ? "contact-name-err" : undefined
                        }
                    />
                    {state.fieldErrors?.name ? (
                        <p id="contact-name-err" className="px-1 text-xs text-red-700">
                            {state.fieldErrors.name}
                        </p>
                    ) : null}
                </div>
                <div className="space-y-2">
                    <label
                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                        htmlFor="contact-email"
                    >
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="jane@organization.com"
                        autoComplete="email"
                        required
                        className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                        aria-invalid={Boolean(state.fieldErrors?.email)}
                        aria-describedby={
                            state.fieldErrors?.email ? "contact-email-err" : undefined
                        }
                    />
                    {state.fieldErrors?.email ? (
                        <p id="contact-email-err" className="px-1 text-xs text-red-700">
                            {state.fieldErrors.email}
                        </p>
                    ) : null}
                </div>
            </div>
            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="contact-org"
                >
                    Org
                </label>
                <input
                    id="contact-org"
                    name="organization"
                    type="text"
                    placeholder="Health System or Payer Name"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(state.fieldErrors?.organization)}
                    aria-describedby={
                        state.fieldErrors?.organization
                            ? "contact-org-err"
                            : undefined
                    }
                />
                {state.fieldErrors?.organization ? (
                    <p id="contact-org-err" className="px-1 text-xs text-red-700">
                        {state.fieldErrors.organization}
                    </p>
                ) : null}
            </div>
            <div className="space-y-2">
                <label
                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                    htmlFor="contact-message"
                >
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your current challenges..."
                    required
                    className="w-full resize-none rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(state.fieldErrors?.message)}
                    aria-describedby={
                        state.fieldErrors?.message ? "contact-msg-err" : undefined
                    }
                />
                {state.fieldErrors?.message ? (
                    <p id="contact-msg-err" className="px-1 text-xs text-red-700">
                        {state.fieldErrors.message}
                    </p>
                ) : null}
            </div>
            <Button
                type="submit"
                className="w-full py-4 text-sm font-semibold active:scale-95 disabled:opacity-60"
                size="lg"
                disabled={pending}
            >
                {pending ? "Sending…" : "Inquiry Submission"}
            </Button>
        </form>
    );
}
