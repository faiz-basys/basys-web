"use client";

import { useEffect, useState } from "react";

const INTAKE_CHANNELS = [
    { icon: "sync_alt" as const, label: "EHR Integration" },
    { icon: "fax" as const, label: "Fax Intake" },
    { icon: "language" as const, label: "Portal Intake" },
];

const PROCESSING_SUBSTEPS = [
    "Policy criteria extraction",
    "Patient chart analysis",
    "Evidence correlation",
];

const DECISION_SNIPPETS = [
    { status: "Approved" as const, id: "PA-48192" },
    { status: "Criteria met" as const, id: "PA-48193" },
    { status: "Audit ready" as const, id: "PA-48194" },
];

const PHASE_MS = 3200;
const SUBSTEP_MS = 1100;

type Phase = 0 | 1 | 2;

export function PayerPaPipelineCard() {
    const [phase, setPhase] = useState<Phase>(0);
    const [subIndex, setSubIndex] = useState(0);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => {
            setPhase((p) => ((p + 1) % 3) as Phase);
            setTick((t) => t + 1);
        }, PHASE_MS);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const id = window.setInterval(() => {
            setSubIndex((i) => (i + 1) % PROCESSING_SUBSTEPS.length);
        }, SUBSTEP_MS);
        return () => clearInterval(id);
    }, []);

    const decision = DECISION_SNIPPETS[tick % DECISION_SNIPPETS.length];

    return (
        <div className="group relative">
            <div className="overflow-hidden rounded-4xl border border-outline/10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between bg-primary px-5 py-3.5 sm:px-6">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <div className="h-2 w-2 shrink-0 animate-pulse rounded-pill bg-emerald-400" />
                        <span className="truncate text-[10px] tracking-widest text-on-primary/90 uppercase sm:text-xs">
                            UM pipeline · live
                        </span>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-on-primary/60 sm:text-xs">
                        multi-format
                    </span>
                </div>

                <div className="relative bg-linear-to-b from-surface-container-lowest to-surface-container-low/80 p-4 sm:p-6">
                    <p className="mb-4 text-center text-[11px] text-on-surface-variant sm:text-xs">
                        PA requests flow into the basys engine — matched to
                        charts, policy, and evidence in real time.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
                        <div
                            className={`rounded-2xl border p-3 transition-all duration-500 sm:p-4 ${
                                phase === 0
                                    ? "border-primary/35 bg-primary/6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                                    : "border-outline/10 bg-white/80"
                            }`}
                        >
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
                                    Input
                                </span>
                                <span className="rounded-pill bg-surface-container px-2 py-0.5 font-mono text-[10px] text-on-surface-variant">
                                    1
                                </span>
                            </div>
                            <p className="mb-3 text-xs font-semibold text-primary">
                                PA request · document intake
                            </p>
                            <div className="space-y-1.5">
                                {INTAKE_CHANNELS.map((ch) => (
                                    <div
                                        key={ch.label}
                                        className="flex items-center gap-2 rounded-lg border border-outline/5 bg-surface-container-low/50 px-2 py-1.5"
                                    >
                                        <span className="material-symbols-outlined text-[16px] text-primary">
                                            {ch.icon}
                                        </span>
                                        <span className="text-[10px] font-medium text-on-surface-variant">
                                            {ch.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-2 text-[10px] leading-snug text-on-surface-variant">
                                Multiple PAs processed simultaneously.
                            </p>
                        </div>

                        <div
                            className={`rounded-2xl border p-3 transition-all duration-500 sm:p-4 ${
                                phase === 1
                                    ? "border-primary/35 bg-primary/6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                                    : "border-outline/10 bg-white/80"
                            }`}
                        >
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
                                    Processing
                                </span>
                                <span className="rounded-pill bg-surface-container px-2 py-0.5 font-mono text-[10px] text-on-surface-variant">
                                    2
                                </span>
                            </div>
                            <p className="mb-1 text-xs font-semibold text-primary">
                                Basys agentic AI
                            </p>
                            <p className="mb-3 text-[10px] text-on-surface-variant">
                                Medical necessity matching vs. charts &amp;
                                policy.
                            </p>
                            <div className="rounded-xl border border-outline/10 bg-surface-container-low/80 p-2.5">
                                <p className="mb-1.5 text-[9px] font-semibold tracking-wide text-on-surface-variant uppercase">
                                    Active step
                                </p>
                                <p
                                    key={subIndex}
                                    className="min-h-10 text-[11px] font-medium leading-snug text-primary animate-payer-pipeline-substep"
                                >
                                    {PROCESSING_SUBSTEPS[subIndex]}
                                </p>
                                <div className="mt-2 h-1 w-full overflow-hidden rounded-pill bg-outline/15">
                                    <div
                                        className="h-full rounded-pill bg-primary transition-[width] duration-300 ease-out"
                                        style={{
                                            width: `${((subIndex + 1) / PROCESSING_SUBSTEPS.length) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={`rounded-2xl border p-3 transition-all duration-500 sm:p-4 ${
                                phase === 2
                                    ? "border-emerald-600/30 bg-emerald-500/7 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.12)]"
                                    : "border-outline/10 bg-white/80"
                            }`}
                        >
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
                                    Output
                                </span>
                                <span className="rounded-pill bg-surface-container px-2 py-0.5 font-mono text-[10px] text-on-surface-variant">
                                    3
                                </span>
                            </div>
                            <p className="mb-3 text-xs font-semibold text-primary">
                                Decisions · instant output
                            </p>
                            <div className="space-y-2 rounded-xl border border-outline/10 bg-surface-container-low/60 p-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[10px] text-on-surface-variant">
                                        {decision.id}
                                    </span>
                                    <span
                                        className={`rounded-pill px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase ${
                                            decision.status === "Approved"
                                                ? "bg-emerald-500/15 text-emerald-800"
                                                : "bg-surface-container text-on-surface-variant"
                                        }`}
                                    >
                                        {decision.status}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="rounded-md bg-white/80 px-1.5 py-0.5 text-[9px] text-on-surface-variant">
                                        Matched criteria
                                    </span>
                                    <span className="rounded-md bg-white/80 px-1.5 py-0.5 text-[9px] text-on-surface-variant">
                                        Evidence log
                                    </span>
                                    <span className="rounded-md bg-white/80 px-1.5 py-0.5 text-[9px] text-on-surface-variant">
                                        Compliance trail
                                    </span>
                                </div>
                            </div>
                            <p className="mt-2 text-[10px] leading-snug text-on-surface-variant">
                                Automated reasoning with full audit trail.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -left-6 -bottom-6 -z-10 h-28 w-28 rounded-pill bg-primary/10 blur-3xl" />
        </div>
    );
}
