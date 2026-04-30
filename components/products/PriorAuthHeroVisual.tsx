"use client";

import { useEffect, useState } from "react";

const STEPS = [
    { id: "intake", label: "Intake", icon: "inbox" },
    { id: "clinical", label: "Clinical", icon: "stethoscope" },
    { id: "policy", label: "Policy", icon: "policy" },
    { id: "outcome", label: "Outcome", icon: "task_alt" },
] as const;

/**
 * Hero illustration: single-track PA lifecycle with a traveling emphasis orb.
 * Not a grid, scrolling stream, or orbit — horizontal pipeline only.
 */
export function PriorAuthHeroVisual() {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (reduceMotion) return;
        const id = window.setInterval(() => {
            setPhase((p) => (p + 1) % STEPS.length);
        }, 1600);
        return () => window.clearInterval(id);
    }, [reduceMotion]);

    const active = reduceMotion ? 1 : phase;

    return (
        <div
            aria-hidden
            className="relative isolate flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-4xl border border-outline/10 bg-surface-container-lowest p-6 shadow-sm"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[120%] -translate-x-1/2 bg-linear-to-b from-primary/7 to-transparent" />

            <div className="relative z-10 flex items-start justify-between gap-2">
                <div>
                    <p className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                        Prior authorization
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary">
                        Request lifecycle
                    </p>
                </div>
                <div className="rounded-pill border border-outline/15 bg-surface-container-high px-3 py-1 text-[10px] font-medium text-on-surface-variant">
                    Multi-stakeholder
                </div>
            </div>

            {/* Curved connector SVG — flow between nodes */}
            <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col justify-center">
                <svg
                    className="pointer-events-none absolute inset-x-4 top-[22%] z-0 h-24 w-[calc(100%-2rem)] text-outline/25"
                    viewBox="0 0 400 64"
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    <path
                        d="M 24 32 Q 100 8 200 32 T 376 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    {!reduceMotion && (
                        <path
                            d="M 24 32 Q 100 8 200 32 T 376 32"
                            fill="none"
                            stroke="currentColor"
                            className="text-primary/55 animate-pa-flow-stroke"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="52 380"
                            vectorEffect="non-scaling-stroke"
                        />
                    )}
                </svg>

                <div className="relative z-20 flex justify-between px-1">
                    {STEPS.map((step, i) => {
                        const isActive = i === active;
                        return (
                            <div
                                key={step.id}
                                className="relative z-20 flex w-[22%] flex-col items-center text-center"
                            >
                                <div
                                    className={`relative z-20 mb-2 flex h-12 w-12 items-center bg-surface-container-high justify-center rounded-2xl border-2 transition-colors duration-500 ${
                                        isActive
                                            ? "border-primary shadow-md"
                                            : "border-outline/20 "
                                    }`}
                                >
                                    <span
                                        className={`material-symbols-outlined text-xl ${
                                            isActive
                                                ? "text-primary"
                                                : "text-on-surface-variant"
                                        }`}
                                    >
                                        {step.icon}
                                    </span>
                                </div>
                                <span
                                    className={`text-[11px] font-semibold ${
                                        isActive
                                            ? "text-primary"
                                            : "text-on-surface-variant"
                                    }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Status strip — mirrors UM outcomes */}
            <div className="relative z-10 mt-auto space-y-2 rounded-2xl border border-outline/10 bg-surface-container/90 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-[11px]">
                    <span className="text-on-surface-variant">
                        Latest batch
                    </span>
                    <span className="font-mono text-on-surface-variant/80">
                        PA_OUTCOME_STREAM
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { t: "Approved", tone: "text-emerald-700" },
                        { t: "Pending clinical", tone: "text-amber-700" },
                        { t: "MI requested", tone: "text-sky-800" },
                    ].map((row, i) => (
                        <span
                            key={row.t}
                            className={`inline-flex items-center gap-1.5 rounded-pill border border-outline/15 bg-surface-container-lowest px-2.5 py-1 text-[10px] font-medium ${row.tone} ${reduceMotion ? "" : "animate-pa-batch-pill"}`}
                            style={
                                reduceMotion
                                    ? undefined
                                    : { animationDelay: `${i * 0.35}s` }
                            }
                        >
                            <span
                                className={`h-1.5 w-1.5 rounded-pill bg-current opacity-80 ${reduceMotion ? "" : "animate-mrr-pulse-dot"}`}
                            />
                            {row.t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
