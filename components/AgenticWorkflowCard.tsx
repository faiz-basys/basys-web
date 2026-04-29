"use client";

import { useEffect, useState } from "react";

const STEPS = [
    {
        icon: "ecg" as const,
        title: "EHR Syncing",
        filledSurface: true,
    },
    {
        icon: "verified" as const,
        title: "Clinical Policy Alignment Verified",
        filledSurface: false,
    },
    {
        icon: "auto_awesome" as const,
        title: "Instant determination generated...",
        filledSurface: false,
        italic: true,
    },
];

const STEP_DURATION_MS = 2000;
const STEP_GAP_MS = 400;
const LOOP_PAUSE_MS = 1400;

export function AgenticWorkflowCard() {
    const [progresses, setProgresses] = useState([0, 0, 0]);

    useEffect(() => {
        let cancelled = false;
        let rafId = 0;
        const timeoutIds: number[] = [];

        function animateStep(index: number): Promise<void> {
            return new Promise((resolve) => {
                const start = performance.now();
                const tick = (now: number) => {
                    if (cancelled) return;
                    const t = Math.min(1, (now - start) / STEP_DURATION_MS);
                    setProgresses((prev) => {
                        const next = [...prev];
                        next[index] = t * 100;
                        return next;
                    });
                    if (t < 1) {
                        rafId = requestAnimationFrame(tick);
                    } else {
                        resolve();
                    }
                };
                rafId = requestAnimationFrame(tick);
            });
        }

        async function runLoop() {
            while (!cancelled) {
                setProgresses([0, 0, 0]);
                if (cancelled) break;

                for (let i = 0; i < STEPS.length; i++) {
                    await animateStep(i);
                    if (cancelled) return;
                    await new Promise<void>((r) => {
                        const id = window.setTimeout(() => {
                            if (!cancelled) r();
                        }, STEP_GAP_MS);
                        timeoutIds.push(id);
                    });
                }

                await new Promise<void>((r) => {
                    const id = window.setTimeout(() => {
                        if (!cancelled) r();
                    }, LOOP_PAUSE_MS);
                    timeoutIds.push(id);
                });
            }
        }

        runLoop();

        return () => {
            cancelled = true;
            cancelAnimationFrame(rafId);
            timeoutIds.forEach((id) => clearTimeout(id));
        };
    }, []);

    return (
        <div className="group relative">
            <div className="overflow-hidden rounded-4xl border border-outline/10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between bg-primary px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-pill bg-green-500" />
                        <span className="text-xs tracking-widest text-on-primary/80 uppercase">
                            Agentic Workflow: ACTIVE
                        </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-primary">
                        terminal
                    </span>
                </div>

                <div className="space-y-4 bg-surface-container-lowest p-6">
                    <div className="flex items-start justify-between border-b border-outline/5 pb-4">
                        <div>
                            <p className="text-xs text-on-surface-variant uppercase">
                                Current Protocol
                            </p>
                            <p className="text-xl font-semibold text-primary">
                                Prior Auth Determination
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-on-surface-variant uppercase">
                                Latency
                            </p>
                            <p className="text-sm font-bold text-primary">
                                142ms
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {STEPS.map((step, index) => {
                            const pct = progresses[index];
                            const isComplete = pct >= 100;
                            const isActive = pct > 0 && pct < 100;

                            const rowClass = step.filledSurface
                                ? "rounded-2xl bg-surface-container-low p-3"
                                : `rounded-2xl border border-outline/10 p-3 transition-colors duration-300 ${
                                      isComplete || isActive
                                          ? "bg-surface-container-low/80"
                                          : ""
                                  }`;

                            const pctDisplay = Math.min(
                                100,
                                Math.max(0, Math.round(pct)),
                            );

                            return (
                                <div
                                    key={step.title}
                                    className={`flex items-center gap-4 ${rowClass}`}
                                >
                                    <span
                                        className={`material-symbols-outlined text-primary transition-opacity duration-300 ${
                                            isComplete
                                                ? "opacity-100"
                                                : "opacity-70"
                                        }`}
                                    >
                                        {step.icon}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p
                                            className={`text-xs ${
                                                step.filledSurface
                                                    ? "font-semibold text-primary"
                                                    : `text-on-surface-variant${step.italic ? " italic" : ""}`
                                            }`}
                                        >
                                            {step.title}
                                        </p>
                                        <div className="mt-1 h-1 w-full overflow-hidden rounded-pill bg-outline/10">
                                            <div
                                                className="h-full origin-left rounded-pill bg-primary"
                                                style={{
                                                    width: `${pct}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="shrink-0 tabular-nums text-xs font-semibold text-primary min-w-11 text-right"
                                        aria-live="polite"
                                    >
                                        {pctDisplay}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-pill bg-secondary-container/30 blur-3xl" />
        </div>
    );
}
