"use client";

import { useEffect, useState } from "react";

const RUNTIME_CHECKS = [
    { icon: "link" as const, label: "HL7 FHIR · API-first" },
    { icon: "encrypted" as const, label: "HIPAA-aligned controls" },
    { icon: "visibility" as const, label: "Explainable decision paths" },
] as const;

const PILLAR_DOTS = [
    "Compliance",
    "Transparency",
    "Interop",
    "Copilot",
    "Localization",
] as const;

const EQ_BARS = 11;

export function TechnologyNetworkHero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => {
            setActive((i) => (i + 1) % PILLAR_DOTS.length);
        }, 1800);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-4xl border border-outline/15 bg-surface-container-lowest shadow-[0_12px_48px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between border-b border-outline/10 bg-primary px-5 py-3">
                    <div className="flex min-w-0 items-center gap-2">
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-pill bg-emerald-400" />
                        <span className="truncate text-[10px] font-semibold tracking-widest text-on-primary/95 uppercase sm:text-xs">
                            Platform runtime · live
                        </span>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-on-primary/50 sm:text-xs">
                        v4.2 · stable
                    </span>
                </div>

                <div className="relative bg-linear-to-b from-surface-container-low/90 to-white px-5 py-8 sm:px-8 sm:py-10">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.45]"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, var(--color-outline) 1px, transparent 1px),
                linear-gradient(to bottom, var(--color-outline) 1px, transparent 1px)
              `,
                            backgroundSize: "24px 24px",
                        }}
                        aria-hidden
                    />

                    <div className="relative mx-auto max-w-sm">
                        <div className="relative overflow-hidden rounded-3xl border border-outline/10 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
                            <div className="absolute -top-12 left-1/2 h-24 w-40 -translate-x-1/2 rounded-pill bg-primary/[0.07] blur-2xl" />
                            <p className="relative text-sm font-semibold tracking-tight text-primary sm:text-base">
                                basys.ai
                            </p>
                            <p className="relative mt-1 text-[11px] text-on-surface-variant sm:text-xs">
                                Enterprise inference &amp; orchestration
                            </p>

                            <div
                                className="relative mt-6 flex items-center justify-center gap-2 sm:gap-3"
                                role="status"
                                aria-label="Active capability focus"
                            >
                                <span className="sr-only">
                                    Current focus: {PILLAR_DOTS[active]}
                                </span>
                                {PILLAR_DOTS.map((name, i) => (
                                    <div
                                        key={name}
                                        className="flex flex-col items-center gap-1.5"
                                    >
                                        <span
                                            className={`h-2.5 w-2.5 rounded-pill transition-all duration-500 ${
                                                active === i
                                                    ? "scale-110 bg-primary shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                                                    : "bg-outline/30"
                                            }`}
                                        />
                                        <span
                                            className={`hidden text-center text-[10px] font-medium leading-tight sm:block ${
                                                active === i
                                                    ? "text-primary"
                                                    : "text-on-surface-variant/80"
                                            }`}
                                        >
                                            {name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative mt-8 flex h-16 items-end justify-center gap-1.5 sm:gap-2"
                        aria-hidden
                    >
                        {Array.from({ length: EQ_BARS }, (_, i) => (
                            <div
                                key={i}
                                className="h-14 w-1.5 origin-bottom rounded-full bg-primary/30 sm:h-16 sm:w-2 animate-agent-eq-bar"
                                style={{ animationDelay: `${i * 0.09}s` }}
                            />
                        ))}
                    </div>

                    <ul className="relative mt-8 space-y-2.5 border-t border-outline/10 pt-6">
                        {RUNTIME_CHECKS.map((row) => (
                            <li
                                key={row.label}
                                className="flex items-center gap-3 text-xs text-on-surface-variant sm:text-sm"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-surface-container-low text-primary">
                                    <span className="material-symbols-outlined text-[18px]">
                                        {row.icon}
                                    </span>
                                </span>
                                <span className="font-medium leading-snug">
                                    {row.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-pill bg-primary/10 blur-3xl" />
        </div>
    );
}
