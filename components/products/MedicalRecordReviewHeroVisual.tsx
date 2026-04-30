"use client";

import { useEffect, useState } from "react";

/**
 * Hero illustration: stacked record + scanning highlight + validation strip.
 * Deliberately not a grid or orbit — vertical scan + lateral validation cues.
 */
export function MedicalRecordReviewHeroVisual() {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return (
        <div
            aria-hidden
            className="relative isolate h-[400px] w-full overflow-hidden rounded-4xl border border-outline/10 bg-surface-container-lowest shadow-sm"
        >
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-pill bg-primary/6 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-pill bg-primary/4 blur-3xl" />

            {/* Back document layer */}
            <div
                className={`absolute left-8 top-[14%] h-[62%] w-[46%] rounded-2xl border border-outline/15 bg-surface-container-high shadow-md ${reduceMotion ? "" : "animate-mrr-stack-shift"}`}
            />

            {/* Front document */}
            <div className="absolute left-10 top-[18%] flex h-[58%] w-[50%] flex-col rounded-2xl border border-outline/20 bg-surface-container-lowest shadow-lg">
                <div className="flex items-center justify-between border-b border-outline/10 px-4 py-3">
                    <span className="h-2 w-20 rounded-pill bg-outline/25" />
                    <span className="material-symbols-outlined text-lg text-primary/50">
                        picture_as_pdf
                    </span>
                </div>
                <div className="relative flex-1 space-y-2.5 overflow-hidden p-4">
                    <span className="block h-2 w-full rounded-pill bg-outline/15" />
                    <span className="block h-2 w-[88%] rounded-pill bg-outline/15" />
                    <span className="block h-2 w-[72%] rounded-pill bg-outline/15" />
                    <span className="block h-2 w-[94%] rounded-pill bg-outline/15" />
                    <span className="block h-2 w-[60%] rounded-pill bg-outline/15" />

                    {!reduceMotion && (
                        <div className="animate-mrr-scan-line pointer-events-none absolute inset-x-3 top-0 h-14 bg-linear-to-b from-primary/25 via-primary/10 to-transparent" />
                    )}
                </div>
            </div>

            {/* Validation rail */}
            <div className="absolute right-5 top-1/2 flex w-[38%] -translate-y-1/2 flex-col gap-2.5">
                <ValidationChip
                    animated={!reduceMotion}
                    delayMs={0}
                    icon="done_all"
                    label="Cover sheet match"
                    sub="Identity & attestation"
                />
                <ValidationChip
                    animated={!reduceMotion}
                    delayMs={1500}
                    icon="data_object"
                    label="ICD-10 pathways"
                    sub="Structured extraction"
                />
                <ValidationChip
                    animated={!reduceMotion}
                    delayMs={3000}
                    icon="analytics"
                    label="HCC v28 / RAF"
                    sub="Risk-adjusted output"
                />
            </div>

            <div className="absolute bottom-4 left-10 right-10 flex items-center justify-between rounded-2xl border border-outline/10 bg-surface-container/80 px-4 py-2.5 text-[11px] backdrop-blur-sm">
                <span className="font-mono text-on-surface-variant">
                    OCR → validate → code
                </span>
                <span className="flex items-center gap-1.5 text-primary">
                    <span
                        className={`h-1.5 w-1.5 rounded-pill bg-primary ${reduceMotion ? "" : "animate-mrr-pulse-dot"}`}
                    />
                    In review
                </span>
            </div>
        </div>
    );
}

function ValidationChip({
    icon,
    label,
    sub,
    animated,
    delayMs,
}: {
    icon: string;
    label: string;
    sub: string;
    animated: boolean;
    delayMs: number;
}) {
    return (
        <div
            className={`rounded-2xl border border-outline/15 bg-surface-container-lowest/95 px-3 py-2.5 shadow-sm backdrop-blur-sm ${animated ? "animate-mrr-chip-wave" : ""}`}
            style={
                animated
                    ? { animationDelay: `${delayMs}ms` }
                    : undefined
            }
        >
            <div className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-primary">
                    {icon}
                </span>
                <div className="min-w-0">
                    <p className="text-xs font-semibold text-primary">{label}</p>
                    <p className="text-[10px] leading-tight text-on-surface-variant">
                        {sub}
                    </p>
                </div>
            </div>
        </div>
    );
}
