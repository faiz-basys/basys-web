"use client";

import { useEffect, useState } from "react";

export type TechPillar = {
    id: string;
    icon: string;
    title: string;
    summary: string;
    bullets: string[];
};

type Props = {
    pillars: TechPillar[];
};

const INTERVAL_MS = 5200;

export function TechnologyCapabilityExplorer({ pillars }: Props) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (pillars.length <= 1) return;
        const id = window.setInterval(() => {
            setActive((i) => (i + 1) % pillars.length);
        }, INTERVAL_MS);
        return () => clearInterval(id);
    }, [pillars.length]);

    const current = pillars[active] ?? pillars[0];

    return (
        <div className="flex flex-col lg:col-span-7">
            <div
                key={current?.id}
                className="animate-tech-pillar-fade flex flex-1 flex-col rounded-4xl border border-outline/15 bg-surface-container-lowest p-6 sm:p-8"
            >
                <div className="mb-6 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
                        <span className="material-symbols-outlined text-2xl">
                            {current?.icon}
                        </span>
                    </span>
                    <div>
                        <h3 className="text-2xl font-semibold text-primary">
                            {current?.title}
                        </h3>
                        <p className="mt-2 text-sm text-on-surface-variant">
                            {current?.summary}
                        </p>
                    </div>
                </div>
                <ul className="space-y-3 border-t border-outline/10 pt-6">
                    {current?.bullets.map((line) => (
                        <li
                            key={line}
                            className="flex gap-3 text-sm text-on-surface-variant"
                        >
                            <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-pill bg-primary"
                                aria-hidden
                            />
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="mt-6 flex flex-wrap gap-2"
                role="tablist"
                aria-label="Technology pillars"
            >
                {pillars.map((p, i) => (
                    <button
                        key={p.id}
                        type="button"
                        role="tab"
                        aria-selected={active === i}
                        onClick={() => setActive(i)}
                        className={`rounded-pill cursor-pointer border px-3 py-1.5 text-xs font-semibold transition-colors ${
                            active === i
                                ? "border-primary bg-primary text-on-primary"
                                : "border-outline/20 bg-white text-on-surface-variant hover:border-outline/40"
                        }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
