import { Button } from "@/components/ui/Button";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Badge from "@/components/ui/Badge";
import { PayerPaPipelineCard } from "@/components/PayerPaPipelineCard";
import { LiveDecisionStream } from "@/components/LiveDecisionStream";

const kpiItems = [
    { value: "5x", label: "Lower Administrative Cost" },
    { value: "95%", label: "Faster Turnaround Time" },
    { value: "93%", label: "Automated Approvals" },
];

const careManagementItems = [
    {
        icon: "route",
        title: "Intelligent Care Pathways",
        description:
            "Every decision drives the next step, without delays or gaps.",
    },
    {
        icon: "clinical_notes",
        title: "Integrated Medical Reviews",
        description:
            "Authorization and care planning in one seamless, connected workflow.",
    },
    {
        icon: "hub",
        title: "Insight-First Automation",
        description:
            "Smart routing, fewer handoffs, and faster decisions at every step.",
    },
];

const riskAdjustmentItems = [
    {
        icon: "speed",
        title: "90% Faster, More Complete Coding",
        description:
            "Reviews 100% of member charts in 3 minutes vs 30 minutes manually. Identifies missed HCC codes.",
    },
    {
        icon: "verified_user",
        title: "Automated CMS Compliance",
        description:
            "Validates every code against current regulations. Creates complete audit documentation. Reduces compliance risk and penalties.",
    },
    {
        icon: "warning",
        title: "Early Gap Detection",
        description:
            "Identifies undocumented conditions before deadlines. Alerts providers at point of care. Improves RAF score accuracy.",
    },
];

const payerSuccessItems = [
    {
        title: "Compliance",
        description:
            "Ensure all authorizations meet regulatory and internal policy standards, with built-in audit trails and rigorous data security.",
    },
    {
        title: "Trust",
        description:
            "Boost provider confidence with consistent, criteria-based decisions - building stronger relationships through transparency and predictability.",
    },
    {
        title: "Efficiency",
        description:
            "Reduce turnaround times and manual reviews with intelligent workflows - freeing up teams to focus on high-value clinical work.",
    },
    {
        title: "Member Experience",
        description:
            "Minimize care delays and denials, supporting timely access and higher member satisfaction across the care journey.",
    },
];

const intelligentPipelinePhases = [
    {
        step: "1",
        label: "Input",
        title: "PA request",
        subtitle: "Document intake",
        body: "PA requests flow into the basys engine. Multiple prior authorization requests processed simultaneously.",
        bullets: [
            "EHR integration",
            "Fax & portal intake",
            "Multi-format processing",
        ],
    },
    {
        step: "2",
        label: "Processing",
        title: "Basys agentic AI",
        subtitle: "Real-time processing · medical necessity matching",
        body: "PA requests matched against patient charts and policy requirements.",
        bullets: [
            "Policy criteria extraction",
            "Patient chart analysis",
            "Evidence correlation",
        ],
    },
    {
        step: "3",
        label: "Output",
        title: "Decisions",
        subtitle: "Instant decision output · matched criteria results",
        body: "Automated decisions with complete audit trails and reasoning.",
        bullets: [
            "Approval / denial decision",
            "Evidence documentation",
            "Compliance audit trail",
        ],
    },
];

const decisionStream = [
    {
        id: "pa-882193",
        icon: "task_alt",
        iconClassName: "text-green-400",
        status: "PA-882193 · Approved",
        detail: "Criteria matched",
    },
    {
        id: "pa-882194",
        icon: "description",
        iconClassName: "text-cyan-300",
        status: "PA-882194 · Evidence logged",
        detail: "Documentation complete",
    },
    {
        id: "pa-882195",
        icon: "shield_lock",
        iconClassName: "text-emerald-300",
        status: "PA-882195 · Audit trail",
        detail: "Compliance verified",
        className: "opacity-50",
    },
    {
        id: "pa-882196",
        icon: "schedule",
        iconClassName: "text-amber-300",
        status: "PA-882196 · In review",
        detail: "Policy criteria check",
    },
    {
        id: "pa-882197",
        icon: "task_alt",
        iconClassName: "text-green-400",
        status: "PA-882197 · Approved",
        detail: "Medical necessity met",
    },
    {
        id: "pa-882198",
        icon: "sync",
        iconClassName: "text-sky-300",
        status: "PA-882198 · Synced EHR",
        detail: "Chart correlation",
    },
    {
        id: "pa-882199",
        icon: "gavel",
        iconClassName: "text-orange-300",
        status: "PA-882199 · Peer queue",
        detail: "Escalation ready",
    },
    {
        id: "pa-882200",
        icon: "task_alt",
        iconClassName: "text-green-400",
        status: "PA-882200 · Approved",
        detail: "Auto-adjudicated",
    },
];

export default function PayerPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <Badge
                            icon="verified"
                            title="PRIOR AUTHORIZATION · AI-NATIVE"
                        />

                        <h1 className="max-w-xl text-5xl leading-tight font-bold text-primary">
                            Autonomous Medical Necessity &amp; Payment
                            Integrity.
                        </h1>
                        <p className="max-w-lg text-lg text-on-surface-variant">
                            Streamline utilization management and eliminate
                            waste with multi-agent AI designed for complex
                            clinical adjudication.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" href="/contact-us">
                                Request Demo
                            </Button>
                        </div>
                    </div>

                    <PayerPaPipelineCard />
                </div>
            </section>

            <section className="border-t border-outline/10 bg-surface-container-lowest px-8 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                            Intelligent Processing Pipeline
                        </h2>
                        <p className="mt-4 text-lg text-on-surface-variant">
                            Watch how our AI transforms complex medical requests
                            into instant decisions
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {intelligentPipelinePhases.map((phase) => (
                            <article
                                key={phase.step}
                                className="flex flex-col rounded-4xl border border-outline/10 bg-white p-6 md:p-8"
                            >
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                        {phase.label}
                                    </span>
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-primary/10 font-mono text-sm font-semibold text-primary">
                                        {phase.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-primary">
                                    {phase.title}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-primary/90">
                                    {phase.subtitle}
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                                    {phase.body}
                                </p>
                                <ul className="mt-6 space-y-2 border-t border-outline/10 pt-6">
                                    {phase.bullets.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-2 text-sm text-on-surface-variant"
                                        >
                                            <span
                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-primary"
                                                aria-hidden
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-16">
                <div className="mx-auto mb-10 max-w-7xl text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-primary">
                        Success Metrics
                    </h2>
                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
                    {kpiItems.map((kpi) => (
                        <article
                            key={kpi.label}
                            className="flex flex-col items-center rounded-4xl border border-outline/5 bg-white p-6 text-center"
                        >
                            <span className="text-5xl font-bold text-primary">
                                {kpi.value}
                            </span>
                            <span className="mt-2 text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                                {kpi.label}
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-primary">
                        Additional Capabilities
                    </h2>
                    <p className="mt-2 text-sm text-on-surface-variant">
                        Medical necessity, care management, and risk adjustment
                        in one connected platform.
                    </p>
                </div>

                <div className="mb-14">
                    <h3 className="mb-6 text-xs font-semibold tracking-widest text-primary uppercase">
                        Medical Necessity / Care Management
                    </h3>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {careManagementItems.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-4xl border border-outline/10 bg-white p-6"
                            >
                                <span className="material-symbols-outlined mb-4 text-primary">
                                    {item.icon}
                                </span>
                                <h4 className="mb-2 text-sm font-semibold text-primary">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-on-surface-variant">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-xs font-semibold tracking-widest text-primary uppercase">
                        Risk Adjustment
                    </h3>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {riskAdjustmentItems.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-4xl border border-outline/10 bg-surface-container-lowest p-6"
                            >
                                <span className="material-symbols-outlined mb-4 text-primary">
                                    {item.icon}
                                </span>
                                <h4 className="mb-2 text-sm font-semibold text-primary">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-on-surface-variant">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-primary py-24 text-on-primary">
                <div className="absolute top-0 right-0 opacity-10">
                    <span className="material-symbols-outlined text-[400px]">
                        analytics
                    </span>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-3 text-4xl font-bold">
                            Built for Payer Success
                        </h2>
                        <p className="mb-8 max-w-lg text-sm text-on-primary/75">
                            Leverage AI-driven support for faster, more
                            transparent approvals
                        </p>
                        <ul className="space-y-6">
                            {payerSuccessItems.map((item) => (
                                <li key={item.title} className="flex gap-4">
                                    <span className="material-symbols-outlined text-white">
                                        check_circle
                                    </span>
                                    <div>
                                        <span className="block text-xl font-semibold">
                                            {item.title}
                                        </span>
                                        <p className="mt-1 text-sm text-on-primary/70">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <LiveDecisionStream items={decisionStream} />
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
