"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(cb: () => void) {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
    return false;
}

const MODELS = [
    {
        id: "gpt",
        label: "GPT 4o",
        color: "#2D98B5",
        criteria: 71,
        accuracy: 67,
    },
    {
        id: "claude",
        label: "Claude",
        color: "#5DA2A9",
        criteria: 73,
        accuracy: 53,
    },
    {
        id: "gemini",
        label: "Gemini 2.5 Pro",
        color: "#4E73F8",
        criteria: 49,
        accuracy: 51,
    },
    {
        id: "llama",
        label: "Llama 3.1 70B",
        color: "#38B0FF",
        criteria: 65,
        accuracy: 59,
    },
    {
        id: "basys",
        label: "Basys Engine",
        color: "#FF9944",
        criteria: 98,
        accuracy: 95,
    },
] as const;

const Y_TICKS = [100, 80, 60, 40, 20, 0];

function BarGroup({
    title,
    getValue,
    visible,
}: {
    title: string;
    getValue: (m: (typeof MODELS)[number]) => number;
    visible: boolean;
}) {
    return (
        <div className="flex min-w-0 flex-1 flex-col">
            {/* items-stretch + full-height column so % bar heights resolve against the fixed chart height.
                items-end on the row made columns shrink-wrap; % height then collapsed (bars stuck at baseline). */}
            <div className="relative flex h-[220px] items-stretch gap-1 sm:h-[260px] sm:gap-1.5 md:gap-2">
                {MODELS.map((m) => {
                    const pct = getValue(m);
                    const isBasys = m.id === "basys";
                    const h = visible ? pct : 0;
                    return (
                        <div
                            key={`${title}-${m.id}`}
                            className="flex min-h-0 min-w-0 flex-1 flex-col justify-end"
                            title={`${m.label}: ${pct}`}
                        >
                            <div
                                className={`w-full rounded-t-md transition-[height] duration-1000 ease-out motion-reduce:transition-none ${
                                    isBasys
                                        ? "shadow-[0_0_0_1px_rgba(255,153,68,0.35)]"
                                        : ""
                                }`}
                                style={{
                                    height: `${h}%`,
                                    minHeight: visible ? 2 : 0,
                                    backgroundColor: m.color,
                                }}
                                aria-hidden
                            />
                        </div>
                    );
                })}
            </div>
            <p className="mt-4 text-center text-xs font-bold tracking-tight text-primary sm:text-sm">
                {title}
            </p>
        </div>
    );
}

export function BenchmarkChart() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const reducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot,
    );
    const barsVisible = inView || reducedMotion;

    useEffect(() => {
        if (reducedMotion) return;

        const el = rootRef.current;
        if (!el) return;

        const activate = () => {
            setInView(true);
        };

        const obs = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    activate();
                    obs.disconnect();
                }
            },
            { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
        );
        obs.observe(el);

        // If already in view (e.g. above-the-fold), observer may delay; sync check once.
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.top < vh * 0.92 && rect.bottom > vh * 0.08) {
            activate();
            obs.disconnect();
        }

        return () => obs.disconnect();
    }, [reducedMotion]);

    return (
        <div
            ref={rootRef}
            className="w-full rounded-4xl border border-outline/10 bg-white p-6 shadow-sm sm:p-8 md:p-10 max-w-4xl mx-auto"
            role="img"
            aria-label="Grouped bar chart comparing five models on criteria extraction and decision accuracy. Basys Engine scores highest on both metrics."
        >
            <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {MODELS.map((m) => (
                    <div
                        key={m.id}
                        className="flex items-center gap-2 text-xs font-semibold text-primary sm:text-sm"
                    >
                        <span
                            className="h-2.5 w-2.5 shrink-0 rounded-pill"
                            style={{ backgroundColor: m.color }}
                            aria-hidden
                        />
                        <span>{m.label}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-3 sm:gap-4">
                <div
                    className="flex h-[220px] w-8 shrink-0 flex-col justify-between text-right text-[10px] font-medium tabular-nums text-on-surface-variant sm:h-[260px] sm:w-9 sm:text-xs"
                    aria-hidden
                >
                    {Y_TICKS.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

                <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
                    <BarGroup
                        title="Criteria Extraction"
                        getValue={(m) => m.criteria}
                        visible={barsVisible}
                    />
                    <BarGroup
                        title="Decision Accuracy"
                        getValue={(m) => m.accuracy}
                        visible={barsVisible}
                    />
                </div>
            </div>
        </div>
    );
}
