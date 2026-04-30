import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
    TechnologyCapabilityExplorer,
    type TechPillar,
} from "@/components/TechnologyCapabilityExplorer";
import { TechnologyNetworkHero } from "@/components/TechnologyNetworkHero";

const commitmentPillars = [
    {
        icon: "encrypted" as const,
        title: "Secure & Compliant",
        highlight: "HIPAA certified",
        description:
            "Security and compliance built into how we process, store, and audit every interaction.",
    },
    {
        icon: "sync_alt" as const,
        title: "Interoperable",
        highlight: "Seamlessly works with other platforms",
        description:
            "Fits your existing tools and data flows so teams adopt without rip-and-replace projects.",
    },
    {
        icon: "lab_profile" as const,
        title: "Transparent",
        highlight: "Explainable AI decisions",
        description:
            "Clear reasoning and evidence trails so clinicians and compliance teams can trust the output.",
    },
];

const techPillars: TechPillar[] = [
    {
        id: "compliance",
        icon: "shield_lock",
        title: "Compliance First",
        summary: "Security and compliance at every layer.",
        bullets: [
            "HIPAA certified",
            "Complete audit trails for every action",
            "End-to-end encryption with role-based access",
        ],
    },
    {
        id: "transparency",
        icon: "visibility",
        title: "Full Transparency",
        summary: "Every AI decision is explainable and auditable.",
        bullets: [
            "Explainable AI with clear reasoning",
            "No ‘black box’ algorithms",
            "Detailed clinical evidence trails",
        ],
    },
    {
        id: "interop",
        icon: "hub",
        title: "True Interoperability",
        summary: "Integration with your existing healthcare ecosystem.",
        bullets: [
            "Seamlessly works with other platforms",
            "HL7 FHIR compliant with API-first architecture",
            "Cloud deployment options",
        ],
    },
    {
        id: "copilot",
        icon: "psychology",
        title: "Learning Copilot Agents",
        summary: "AI that clinicians can understand and trust.",
        bullets: [
            "Evidence-based recommendations with human oversight",
            "Continuous learning and improvement",
            "Clinical workflow integration",
        ],
    },
    {
        id: "localization",
        icon: "dns",
        title: "Advanced Localization",
        summary:
            "Not just a pass-through wrapper. Intelligent orchestration beyond LLMs.",
        bullets: [
            "Secure, containerized for data privacy",
            "Strict version control, insulated from LLM updates",
            "Ability to run agentic AI locally for data sovereignty.",
        ],
    },
];

export default function TechnologyPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-20 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 space-y-6 lg:order-1">
                        <Badge
                            icon="memory"
                            title="OUR COMMITMENT TO HEALTHCARE EXCELLENCE"
                        />
                        <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl">
                            Enterprise-Grade Healthcare Technology
                        </h1>
                        <p className="max-w-lg text-lg text-on-surface-variant">
                            The basys.ai engine powers five critical
                            capabilities that deliver enterprise grade
                            performance for scalability, security, transparency,
                            and adaptability.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {techPillars.map((p) => (
                                <span
                                    key={p.id}
                                    className="rounded-pill border border-outline/15 bg-surface-container-low px-3 py-1 text-xs font-semibold text-primary"
                                >
                                    {p.title}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button size="lg" href="/contact-us">
                                Request Demo
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <TechnologyNetworkHero />
                    </div>
                </div>
            </section>

            <section className="border-y border-outline/10 bg-surface-container-low px-8 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <h2 className="text-3xl font-semibold text-primary">
                            Our Commitment to Healthcare Excellence
                        </h2>
                        <p className="mt-3 text-sm text-on-surface-variant">
                            Secure, connected, and understandable by design - so
                            you can deploy AI where clinical risk is highest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {commitmentPillars.map((item) => (
                            <article
                                key={item.title}
                                className="flex flex-col rounded-4xl border border-outline/10 bg-surface-container-lowest p-8 shadow-[0_0_24px_rgba(0,0,0,0.04)]"
                            >
                                <span className="material-symbols-outlined mb-5 text-3xl text-primary">
                                    {item.icon}
                                </span>
                                <h3 className="text-xl font-semibold text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm font-semibold text-primary/90">
                                    {item.highlight}
                                </p>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface-variant">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-20 lg:py-24">
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl font-semibold text-primary">
                        Detailed Technology Capabilities
                    </h2>
                    <p className="mt-3 text-sm text-on-surface-variant">
                        Explore the core tech pillars that make basys.ai a
                        trusted partner for healthcare.
                    </p>
                </div>

                <TechnologyCapabilityExplorer pillars={techPillars} />
            </section>

            <section className="relative overflow-hidden bg-primary py-20 text-on-primary">
                <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-pill bg-white/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight">
                                Built for regulated healthcare environments
                            </h2>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-on-primary/75">
                                From HIPAA-aligned controls to FHIR-native
                                integration and explainable outputs, the
                                platform is designed so security,
                                interoperability, and trust reinforce each other
                                - not trade off.
                            </p>
                        </div>
                        <ul className="space-y-4 text-sm text-on-primary/85">
                            <li className="flex gap-3">
                                <span
                                    className="material-symbols-outlined shrink-0 text-on-primary"
                                    aria-hidden
                                >
                                    verified_user
                                </span>
                                <span>
                                    <strong className="text-on-primary">
                                        Compliance first:
                                    </strong>{" "}
                                    audit-ready trails and role-based access
                                    across the stack.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="material-symbols-outlined shrink-0 text-on-primary"
                                    aria-hidden
                                >
                                    device_hub
                                </span>
                                <span>
                                    <strong className="text-on-primary">
                                        True interoperability:
                                    </strong>{" "}
                                    API-first FHIR patterns that meet your
                                    deployment model.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="material-symbols-outlined shrink-0 text-on-primary"
                                    aria-hidden
                                >
                                    policy
                                </span>
                                <span>
                                    <strong className="text-on-primary">
                                        Full transparency:
                                    </strong>{" "}
                                    reasoning and evidence clinicians can review
                                    - no black-box automation.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
