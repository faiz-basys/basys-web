import Badge from "@/components/ui/Badge";
import { SmoothScrollButton } from "@/components/white-paper/SmoothScrollButton";
import { WHITE_PAPERS } from "@/components/white-paper/white-paper-data";

export function WhitePapersOverview() {
    return (
        <section
            id="whitepapers-overview"
            className="scroll-mt-28 border-b border-outline/10 px-6 py-16 md:px-8 md:py-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <Badge icon="menu_book" title="WHITE PAPERS" />
                    <h1 className="mt-6 text-4xl font-bold leading-tight text-balance text-primary md:text-5xl">
                        Research &amp; Insights for Health Plans
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
                        Preview our latest whitepapers on payment integrity,
                        fraud waste &amp; abuse, and agentic prior
                        authorization. Scroll through each report section by
                        section, or jump straight to the topics that matter
                        most to your team.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {WHITE_PAPERS.map((paper, index) => (
                        <article
                            key={paper.id}
                            className="flex flex-col rounded-4xl border border-outline/10 bg-surface-container-lowest p-8 shadow-sm"
                        >
                            <p className="text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                                Whitepaper {index + 1} of {WHITE_PAPERS.length}
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold text-balance text-primary">
                                {paper.title}
                            </h2>
                            <p className="mt-2 text-sm font-semibold text-primary">
                                {paper.subtitle}
                            </p>
                            <p className="mt-4 flex-1 text-sm leading-relaxed text-on-surface-variant">
                                {paper.description}
                            </p>
                            <div className="mt-6">
                                <SmoothScrollButton
                                    href={`#${paper.id}`}
                                    size="md"
                                    variant={index === 0 ? "primary" : "outline"}
                                >
                                    Explore whitepaper
                                </SmoothScrollButton>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                    <SmoothScrollButton href={`#${WHITE_PAPERS[0].id}`} size="lg">
                        Start reading
                    </SmoothScrollButton>
                    <SmoothScrollButton
                        href="#whitepaper-form"
                        variant="outline"
                        size="lg"
                    >
                        Request full access
                    </SmoothScrollButton>
                </div>
            </div>
        </section>
    );
}
