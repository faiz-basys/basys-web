"use client";

import { useEffect, useState } from "react";

export type DecisionStreamItem = {
    id: string;
    icon: string;
    iconClassName: string;
    status: string;
    detail: string;
    className?: string;
};

const VISIBLE_ROWS = 3;
const ROW_MIN_H = "min-h-14";

function StreamRow({ row }: { row: DecisionStreamItem }) {
    return (
        <article
            className={`flex ${ROW_MIN_H} shrink-0 items-center justify-between rounded-4xl border border-white/5 bg-white/5 px-4 py-3 ${row.className ?? ""}`}
        >
            <div className="flex min-w-0 items-center gap-3">
                <span
                    className={`material-symbols-outlined shrink-0 text-sm ${row.iconClassName}`}
                >
                    {row.icon}
                </span>
                <span className="truncate text-xs font-semibold tracking-wider">
                    {row.status}
                </span>
            </div>
            <span className="shrink-0 pl-2 text-xs font-semibold text-on-primary/50">
                {row.detail}
            </span>
        </article>
    );
}

export function LiveDecisionStream({ items }: { items: DecisionStreamItem[] }) {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const shouldScroll = items.length > VISIBLE_ROWS && !reduceMotion;
    const staticItems = reduceMotion
        ? items.slice(0, VISIBLE_ROWS)
        : shouldScroll
          ? items
          : items;

    const durationSec = Math.max(items.length * 2.4, 16);

    return (
        <div className="rounded-4xl border border-white/10 bg-surface-container-lowest/5 p-6 backdrop-blur-lg">
            <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-on-primary/60 uppercase">
                    Live Decision Stream
                </span>
                <span className="font-mono text-xs text-on-primary/40">
                    UM_PIPELINE_SECURED
                </span>
            </div>

            {shouldScroll ? (
                <div
                    className="relative h-48 overflow-hidden"
                    aria-label="Scrolling list of recent authorization decisions"
                >
                    <div
                        className="animate-decision-stream flex flex-col gap-3 will-change-transform"
                        style={{
                            animationDuration: `${durationSec}s`,
                        }}
                    >
                        {[...items, ...items].map((row, i) => (
                            <StreamRow
                                key={`${row.id}-${i}`}
                                row={row}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    {staticItems.map((row) => (
                        <StreamRow key={row.id} row={row} />
                    ))}
                </div>
            )}
        </div>
    );
}
