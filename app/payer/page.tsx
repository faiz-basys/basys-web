import { Button } from "@/components/ui/Button";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Badge from "@/components/ui/Badge";

const kpiItems = [
    { value: "5x", label: "LOWER ADMIN COSTS" },
    { value: "93%", label: "AUTOMATED APPROVALS" },
    { value: "<15ms", label: "ADJUDICATION LATENCY" },
];

const capabilityItems = [
    {
        icon: "settings_input_component",
        title: "Interoperability",
        description:
            "Native FHIR integration across 350+ EMR ecosystems for zero-lag data ingestion.",
    },
    {
        icon: "balance",
        title: "Policy Governance",
        description:
            "Automatic updates to local and national coverage determinations (LCD/NCD).",
    },
    {
        icon: "query_stats",
        title: "Predictive Integrity",
        description:
            "Anticipate provider billing patterns to reduce appeals and administrative friction.",
    },
];

const paymentIntegrityItems = [
    {
        title: "DRG Validation",
        description:
            "AI-assisted review of clinical charts to ensure accurate coding and reimbursement.",
    },
    {
        title: "Provider Profiling",
        description:
            "Dynamic scoring of clinical quality vs. cost of care for intelligent network management.",
    },
    {
        title: "Subrogation Analysis",
        description:
            "Automated recovery identification across complex tertiary liability landscapes.",
    },
];

const claimStream = [
    {
        icon: "task_alt",
        iconClassName: "text-green-400",
        status: "Claim #882193 - Approved",
        amount: "$12,440.00",
    },
    {
        icon: "warning",
        iconClassName: "text-yellow-400",
        status: "Claim #882194 - Pended",
        amount: "$1,200.00",
    },
    {
        icon: "task_alt",
        iconClassName: "text-green-400",
        status: "Claim #882195 - Approved",
        amount: "$450.00",
        className: "opacity-50",
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
                            title="PAYER INFRASTRUCTURE 2.0"
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
                            <Button size="lg">Explore Platform</Button>
                            <Button size="lg" variant="outline">
                                View Case Studies
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-surface-container" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Payer analytics dashboard"
                            className="h-[400px] w-full rounded-4xl border border-outline/10 object-cover shadow-sm"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgN5l1kaWwjv9byscN4W4iEssfbpc1W57pZXicv47Ra27TD51ME31HzkhazKL1Daa3EwcLw3_DKPDEkaHqJTwZffMyN6kh9Z64hK0al8OXXLEPuItW3nS-44C2K67Np2BbdhFMljcAmu5UD76CFBGyXnA1vqLjSw8I5BkFanjhv693AynyJRchspxvEqcWapd5ZLscPCAtK9WHA-vvAlDQK4HPP3yBz2YrZbL87-2s3cha2OAgiaLh8AAbUxp1rHxBXg6ZGhXers"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-16">
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
                        Multi-Agent Clinical Intelligence
                    </h2>
                    <p className="mt-2 text-sm text-on-surface-variant">
                        Invisible strength governing every transaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    <div className="overflow-hidden rounded-4xl border border-outline/10 bg-surface-container-lowest md:col-span-8">
                        <div className="flex items-center justify-between bg-primary px-6 py-4">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-pill bg-green-500" />
                                <span className="text-xs font-semibold tracking-widest text-on-primary uppercase">
                                    Agent Console: Medical Necessity Adjudicator
                                </span>
                            </div>
                            <span className="font-mono text-xs text-on-primary/60">
                                ST-4492-ONLINE
                            </span>
                        </div>

                        <div className="space-y-6 p-6">
                            <div className="flex items-start gap-4 rounded-4xl bg-surface-container p-4">
                                <span className="material-symbols-outlined text-primary">
                                    clinical_notes
                                </span>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                                        Ingesting Clinical Documentation...
                                    </p>
                                    <p className="text-sm text-on-surface-variant">
                                        Reviewing MCG 27th Edition guidelines
                                        against patient electronic health record
                                        (EHR).
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-4xl border border-outline/10 p-4">
                                    <span className="mb-1 block text-xs text-on-surface-variant">
                                        Evidence Score
                                    </span>
                                    <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-container">
                                        <div className="h-full w-[98%] bg-primary" />
                                    </div>
                                </div>
                                <div className="rounded-4xl border border-outline/10 p-4">
                                    <span className="mb-1 block text-xs text-on-surface-variant">
                                        Policy Alignment
                                    </span>
                                    <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-container">
                                        <div className="h-full w-[95%] bg-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-4xl border border-outline/10 bg-secondary-container/30 p-6 md:col-span-4">
                        <div>
                            <span className="material-symbols-outlined mb-4 text-primary">
                                shield_person
                            </span>
                            <h3 className="text-2xl font-semibold text-primary">
                                FWA Detection
                            </h3>
                            <p className="mt-2 text-sm text-on-secondary-container">
                                Autonomous fraud, waste, and abuse agents
                                monitoring claims in real-time before payment.
                            </p>
                        </div>

                        <button className="group mt-8 flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase">
                            Configure Thresholds
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </button>
                    </div>

                    {capabilityItems.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-4xl border border-outline/10 bg-white p-6 md:col-span-4"
                        >
                            <span className="material-symbols-outlined mb-4 text-primary">
                                {item.icon}
                            </span>
                            <h4 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                                {item.title}
                            </h4>
                            <p className="text-sm text-on-surface-variant">
                                {item.description}
                            </p>
                        </article>
                    ))}
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
                        <h2 className="mb-8 text-4xl font-bold">
                            Clinical-First Payment Integrity.
                        </h2>
                        <ul className="space-y-6">
                            {paymentIntegrityItems.map((item) => (
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

                    <div className="rounded-4xl border border-white/10 bg-surface-container-lowest/5 p-6 backdrop-blur-lg">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-xs font-semibold tracking-widest text-on-primary/60 uppercase">
                                Live Transaction Stream
                            </span>
                            <span className="font-mono text-xs text-on-primary/40">
                                SECURED_HL7_V2
                            </span>
                        </div>

                        <div className="space-y-3">
                            {claimStream.map((claim) => (
                                <article
                                    key={claim.status}
                                    className={`flex items-center justify-between rounded-4xl border border-white/5 bg-white/5 p-4 ${claim.className ?? ""}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`material-symbols-outlined text-sm ${claim.iconClassName}`}
                                        >
                                            {claim.icon}
                                        </span>
                                        <span className="text-xs font-semibold tracking-wider">
                                            {claim.status}
                                        </span>
                                    </div>
                                    <span className="text-xs font-semibold text-on-primary/50">
                                        {claim.amount}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
