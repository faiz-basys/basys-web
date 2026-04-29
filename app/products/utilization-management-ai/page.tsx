import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

const UM_AI_YOUTUBE_EMBED_ID = "KooUnlz5dkk";

const capabilities = [
    {
        icon: "pending_actions",
        title: "Concurrent review automation",
        description:
            "AI-assisted queues that surface evolving clinical context during an episode—highlighting pathway deviations, escalation candidates, and documentation gaps before they drive unnecessary denials or delays.",
    },
    {
        icon: "outbound",
        title: "Discharge planning assistance",
        description:
            "Surfaces barriers to discharge, disposition readiness, and follow-up gaps so case managers can align next steps with benefit design, medical policy, and patient safety—without replacing clinician judgment.",
    },
    {
        icon: "timelapse",
        title: "Length-of-stay optimization",
        description:
            "Cohort- and trend-aware signals that help teams distinguish appropriate stays from outliers earlier in the episode, supporting conversations with physicians and bed management before length drives avoidable friction.",
    },
    {
        icon: "history",
        title: "Retrospective audit support",
        description:
            "Batch-friendly replay across encounters with rationale-oriented summaries suitable for internal QA, appeals preparation, and payer–provider collaboration after care has been delivered.",
    },
    {
        icon: "visibility",
        title: "Explainability and oversight",
        description:
            "Role-aware workflows with traceable recommendations and audit-friendly outputs so UM committees, medical directors, and compliance stakeholders can see what the model emphasized and why.",
    },
];

export default function UtilizationManagementAiProductPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-highest px-3 py-1">
                            <span className="material-symbols-outlined text-sm">
                                monitor_heart
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-on-secondary-container uppercase">
                                Concurrent &amp; retrospective
                            </span>
                        </div>

                        <h1 className="max-w-xl text-5xl leading-tight font-bold text-primary">
                            Utilization Management AI
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                            AI-assisted concurrent and retrospective UM for
                            plans and partners—clinical context plus policy,
                            explainable outputs, and integrations fit for
                            enterprise UM, appeals, and human-owned
                            determinations.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">Request Access</Button>
                            <Button size="lg" variant="outline">
                                Contact Sales
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-surface-container" />
                        <div className="aspect-video w-full overflow-hidden rounded-4xl border border-outline/10 shadow-sm">
                            <iframe
                                title="Utilization management and care coordination"
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${UM_AI_YOUTUBE_EMBED_ID}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="mb-4 text-3xl font-semibold text-primary">
                            Capabilities
                        </h2>
                        <p className="text-sm text-on-surface-variant">
                            Focus areas for concurrent stewardship, discharge
                            readiness, stay efficiency, and retrospective
                            assurance—aligned to how UM teams actually operate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((item) => (
                            <article
                                key={item.title}
                                className="flex flex-col rounded-4xl border border-outline/10 bg-surface-container-lowest p-8 transition-colors hover:border-primary/20"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-pill bg-primary/5">
                                    <span className="material-symbols-outlined text-primary">
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-6 text-on-surface-variant">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-24">
                <article className="rounded-4xl border border-outline/10 bg-surface-container-lowest p-10 md:p-12">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Who it&apos;s for
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant">
                        Health plan utilization management, concurrent review,
                        and care management leaders—plus hospital partners where
                        joint operating models apply. Best suited to
                        organizations that want AI to compress review cycle time
                        and improve consistency while keeping physicians and UM
                        nurses accountable for coverage decisions your policies
                        require.
                    </p>
                </article>
            </section>

            <FinalCtaSection />
        </main>
    );
}
