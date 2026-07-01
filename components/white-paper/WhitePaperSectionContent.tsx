import { SmoothScrollButton } from "@/components/white-paper/SmoothScrollButton";
import { BenchmarkChart } from "@/components/white-paper/BenchmarkChart";
import type { WhitePaperSection } from "@/components/white-paper/white-paper-data";

export function WhitePaperSectionContent({
    section,
    paperIndex,
}: {
    section: WhitePaperSection;
    paperIndex: number;
}) {
    switch (section.type) {
        case "stats":
            return (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {section.stats.map((item) => (
                        <article
                            key={item.label}
                            className="flex flex-col rounded-4xl border border-outline/10 bg-white p-8 text-center shadow-sm"
                        >
                            <span
                                className={`text-4xl font-bold sm:text-5xl ${
                                    item.accent
                                        ? "text-[#c2410c]"
                                        : "text-primary"
                                }`}
                            >
                                {item.value}
                            </span>
                            <span className="mt-3 text-sm font-medium leading-snug text-on-surface-variant">
                                {item.label}
                            </span>
                        </article>
                    ))}
                </div>
            );

        case "cards":
            return (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {section.cards.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-4xl border border-outline/10 bg-surface-container-low p-8"
                        >
                            <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                                {item.icon}
                            </span>
                            <h3 className="text-lg font-semibold text-primary">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                                {item.body}
                            </p>
                        </article>
                    ))}
                </div>
            );

        case "metrics-features":
            return (
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="grid grid-cols-2 gap-5">
                        {section.metrics.map((item) => (
                            <article
                                key={item.label}
                                className="flex flex-col items-center justify-center rounded-4xl border border-outline/10 bg-white p-8 text-center shadow-sm"
                            >
                                <span className="text-4xl font-bold text-primary sm:text-5xl">
                                    {item.value}
                                </span>
                                <span className="mt-2 text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                                    {item.label}
                                </span>
                            </article>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center gap-6 rounded-4xl border border-outline/10 bg-white p-8 shadow-sm">
                        {section.features.map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <span className="material-symbols-outlined mt-0.5 text-primary">
                                    {item.icon}
                                </span>
                                <div>
                                    <h3 className="font-semibold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-on-surface-variant">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case "benchmark":
            return (
                <div className="space-y-8">
                    <BenchmarkChart />
                    <div className="flex justify-center">
                        <SmoothScrollButton href="#whitepaper-form" size="lg">
                            Get Access to White Paper
                        </SmoothScrollButton>
                    </div>
                </div>
            );

        case "bullets":
            return (
                <div className="space-y-4">
                    {section.bullets.map((item, i) => (
                        <article
                            key={item.title}
                            className="flex gap-5 rounded-4xl border border-outline/10 bg-white p-6 shadow-sm sm:p-8"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-sm font-bold text-primary">
                                {i + 1}
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                                    {item.body}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            );

        case "cta":
            return (
                <div className="rounded-4xl border border-outline/10 bg-surface-container-low p-8 sm:p-10">
                    <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
                        {section.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <SmoothScrollButton href="#whitepaper-form" size="lg">
                            {paperIndex === 0
                                ? "Get Access to White Paper"
                                : "Request This Whitepaper"}
                        </SmoothScrollButton>
                        {paperIndex === 0 && (
                            <SmoothScrollButton
                                href="#agentic-prior-auth"
                                variant="outline"
                                size="lg"
                            >
                                Next whitepaper
                            </SmoothScrollButton>
                        )}
                    </div>
                </div>
            );

        default:
            return null;
    }
}
