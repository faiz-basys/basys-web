import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

const FWA_DETECTION_YOUTUBE_EMBED_ID = "THJxe_vXZ50";

const capabilities = [
    {
        icon: "hub",
        title: "Intelligent pattern detection",
        description:
            "Surfaces anomalous billing sequences, frequency outliers, and clinically inconsistent treatment paths across claims and authorization contexts—prioritized for investigator review rather than silent auto-action.",
    },
    {
        icon: "speed",
        title: "Real-time risk scoring",
        description:
            "Continuously refreshed scores as new claims, amendments, and PA decisions arrive, so SIU and payment integrity teams can intervene earlier in emerging schemes without batch-only lag.",
    },
    {
        icon: "gavel",
        title: "Policy-aware analysis",
        description:
            "Cross-checks activity against benefit rules, coverage criteria, and policy constructs your organization maintains—so alerts reflect how your plan defines abuse versus aggressive but permitted utilization.",
    },
    {
        icon: "lightbulb",
        title: "Automated insights & explanations",
        description:
            "Digestible rationales and feature attributions suitable for triage meetings, escalations, and documentation—not a black box score tied only to a numeric threshold.",
    },
];

export default function FwaDetectionProductPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-highest px-3 py-1">
                            <span className="material-symbols-outlined text-sm">
                                radar
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-on-secondary-container uppercase">
                                Claims &amp; PA integrity
                            </span>
                        </div>

                        <h1 className="max-w-xl text-4xl leading-tight font-bold text-primary sm:text-5xl">
                            AI-Powered Fraud, Waste &amp; Abuse (FWA) Detection
                        </h1>
                        <p className="max-w-xl text-lg font-medium leading-relaxed text-on-surface">
                            Basys.ai&apos;s FWA solution leverages advanced AI
                            to proactively identify potential fraud, waste, and
                            abuse in healthcare claims and prior authorization
                            workflows. By analyzing patient data, policy
                            criteria, and treatment patterns in real time, the
                            system helps payers and providers reduce risk,
                            improve compliance, and make faster, more accurate
                            decisions.
                        </p>
                        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                            Built for payment integrity, special investigation
                            units, and compliance partners who need scalable
                            surveillance without drowning analysts in false
                            positives. Outputs are designed to feed existing
                            case management and appeals processes—with
                            configurable sensitivity, policy versioning, and
                            human sign-off on consequential actions.
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
                                title="Fraud and payment integrity analytics"
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${FWA_DETECTION_YOUTUBE_EMBED_ID}`}
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
                            Core detection and decision-support pillars for
                            claims and prior authorization surveillance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                        Health plan SIU and payment integrity teams, delegated
                        vendor partners, and enterprise provider organizations
                        that need consistent surveillance across claims and
                        authorization touchpoints. Ideal when you want AI to
                        narrow the funnel of suspicious activity while your
                        staff retains ownership of final fraud determinations
                        and regulatory reporting obligations.
                    </p>
                </article>
            </section>

            <FinalCtaSection />
        </main>
    );
}
