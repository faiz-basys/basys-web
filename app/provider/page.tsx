import { AgenticWorkflowCard } from "@/components/AgenticWorkflowCard";
import { EhrSyncFeed } from "@/components/EhrSyncFeed";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const successMetrics = [
    {
        value: "9x",
        label: "Reduction in Documentation Time",
    },
    {
        value: "95%",
        label: "Faster Turnaround Time",
    },
    {
        value: "2.5x",
        label: "Lower Appeal Rate",
    },
];

const aiCopilotSteps = [
    {
        icon: "policy",
        title: "AI Assistant Surfaces Requirements",
        description:
            "Our intelligent system analyzes payer policies and patient conditions to identify exactly what documentation is needed for approval.",
    },
    {
        icon: "verified",
        title: "Fewer Denials Through Accuracy",
        description:
            "Improved submission quality leads to higher approval rates, reducing time spent on appeals and resubmissions.",
    },
    {
        icon: "supervised_user_circle",
        title: "Human Oversight Ensures Quality",
        description:
            "Providers maintain full control and oversight, with AI serving as a supportive copilot rather than replacement.",
    },
];

const providerSuccessPillars = [
    {
        icon: "gavel",
        title: "Compliance",
        description:
            "Ensure that all submissions adhere to regulatory requirements and payer guidelines, maintaining the highest standards of data security and patient privacy.",
    },
    {
        icon: "handshake",
        title: "Trust",
        description:
            "Our AI Assistant enhances accuracy by reducing errors in prior authorization submissions, fostering trust between providers and patients through reliable and consistent processes.",
    },
    {
        icon: "bolt",
        title: "Efficiency",
        description:
            "Accelerate the identification of required documentation and streamline workflows, minimizing administrative burdens and allowing providers to focus more on patient care.",
    },
    {
        icon: "medical_services",
        title: "Medical Necessity",
        description:
            "Ensure that every service provided meets established medical necessity criteria, supporting appropriate, evidence-based care decisions that align with payer guidelines and improve patient outcomes.",
    },
];

const providerFeatures = [
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

export default function ProviderPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-8 py-24 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                    <Badge icon="bolt" title="FOR HEALTHCARE PROVIDERS" />
                    <h1 className="max-w-xl text-5xl leading-tight font-bold text-primary">
                        Transparency and Faster Patient Care.
                    </h1>
                    <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
                        Eliminate the friction of administrative hurdles.
                        basys.ai automates the prior authorization lifecycle
                        with surgical precision, allowing you to focus on what
                        matters most: the patient.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button size="lg">Request Demo</Button>
                    </div>
                </div>

                <AgenticWorkflowCard />
            </section>

            <section className="bg-surface-container-low px-8 py-16">
                <div className="mx-auto max-w-7xl space-y-4 text-center">
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">
                        Success Metrics
                    </h2>
                </div>
                <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
                    {successMetrics.map((metric) => (
                        <article
                            key={metric.label}
                            className="flex flex-col items-center rounded-4xl border border-outline/5 bg-white p-8 text-center shadow-[0_0_20px_rgba(0,0,0,0.03)]"
                        >
                            <span className="text-5xl font-bold text-primary">
                                {metric.value}
                            </span>
                            <p className="mt-3 max-w-xs text-sm font-medium text-on-surface-variant">
                                {metric.label}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-outline/5 bg-surface-container-lowest px-8 py-24">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-semibold text-primary">
                            Built for Physician Efficiency
                        </h2>
                        <p className="text-sm text-on-surface-variant">
                            Engineered to restore the joy of practicing medicine
                            by removing administrative burnout.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                        <article className="flex flex-col justify-between rounded-4xl border border-outline/5 bg-surface p-8 transition-all hover:border-outline/20 md:col-span-8">
                            <div>
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-pill bg-primary text-on-primary">
                                    <span className="material-symbols-outlined">
                                        flash_on
                                    </span>
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Instant Prior Auth Determinations
                                </h3>
                                <p className="max-w-lg text-sm text-on-surface-variant">
                                    Move from days to milliseconds. Our engine
                                    evaluates clinical criteria in real-time,
                                    delivering immediate approvals for
                                    standard-of-care treatments and complex
                                    procedures alike.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4 overflow-hidden">
                                <div className="whitespace-nowrap rounded-pill border border-outline/10 bg-white px-4 py-2 text-xs font-semibold">
                                    98% Faster Approval
                                </div>
                                <div className="whitespace-nowrap rounded-pill border border-outline/10 bg-white px-4 py-2 text-xs font-semibold">
                                    Zero Manual Entry
                                </div>
                            </div>
                        </article>

                        <article className="flex flex-col items-center space-y-4 rounded-4xl border border-outline/5 bg-[#f6f4f1] p-8 text-center md:col-span-4">
                            <h3 className="text-2xl font-semibold">
                                Deep EHR Integration
                            </h3>
                            <p className="text-sm text-on-surface-variant">
                                Works natively within Epic, Cerner, and
                                AthenaHealth. No toggling required.
                            </p>
                            <EhrSyncFeed />
                        </article>

                        <article className="flex flex-col justify-center space-y-4 rounded-4xl border border-outline/5 bg-white p-8 md:col-span-4">
                            <span className="material-symbols-outlined text-4xl text-primary">
                                psychology_alt
                            </span>
                            <h3 className="text-2xl font-semibold">
                                Reduce Burnout
                            </h3>
                            <p className="text-sm text-on-surface-variant">
                                Automated logic handles the paperwork so your
                                clinical staff can return to patient care.
                            </p>
                        </article>

                        <article className="flex flex-col items-center gap-6 overflow-hidden rounded-4xl bg-primary p-8 text-on-primary md:col-span-8 md:flex-row">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-semibold">
                                    Radical Transparency
                                </h3>
                                <p className="text-sm text-on-primary/70">
                                    Every decision comes with a clear, auditable
                                    clinical rationale. No &quot;black box&quot;
                                    algorithms-just verifiable healthcare
                                    intelligence.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-xs font-semibold">
                                        <span className="material-symbols-outlined text-[16px]">
                                            check_circle
                                        </span>
                                        Traceable Policy Logic
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-semibold">
                                        <span className="material-symbols-outlined text-[16px]">
                                            check_circle
                                        </span>
                                        Direct Payer Policy Sync
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full rounded-2xl border border-on-primary/10 bg-on-primary/10 p-4 backdrop-blur-sm md:w-1/3">
                                <div className="text-[48px] leading-none font-black tracking-tight">
                                    85%
                                </div>
                                <div className="mt-2 text-xs tracking-widest opacity-60 uppercase">
                                    Decrease in Admin Overload
                                </div>
                            </div>
                        </article>

                        {providerFeatures.map((feature) => (
                            <article
                                key={feature.title}
                                className="rounded-4xl border border-outline/10 bg-white p-6 md:col-span-4"
                            >
                                <span className="material-symbols-outlined mb-4 text-primary">
                                    {feature.icon}
                                </span>
                                <h4 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-on-surface-variant">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-outline/5 bg-surface-container-low px-8 py-24">
                <div className="mx-auto max-w-7xl space-y-10">
                    <div className="space-y-3 text-center">
                        <h2 className="text-3xl font-semibold text-primary">
                            How Your AI Copilot Works
                        </h2>
                        <p className="mx-auto max-w-2xl text-sm text-on-surface-variant">
                            Smart guidance for seamless, confident prior
                            authorization.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {aiCopilotSteps.map((step) => (
                            <article
                                key={step.title}
                                className="rounded-4xl border border-outline/10 bg-white p-8 transition-all hover:border-outline/20"
                            >
                                <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                                    {step.icon}
                                </span>
                                <h3 className="mb-3 text-xl font-semibold text-primary">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-on-surface-variant">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-lowest px-8 py-24">
                <div className="mx-auto max-w-7xl space-y-10">
                    <div className="space-y-3 text-center">
                        <h2 className="text-3xl font-semibold text-primary">
                            Built for Provider Success
                        </h2>
                        <p className="mx-auto max-w-2xl text-sm text-on-surface-variant">
                            Our AI Copilot enables transparent, supported prior
                            authorizations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {providerSuccessPillars.map((pillar) => (
                            <article
                                key={pillar.title}
                                className="rounded-4xl border border-outline/10 bg-white p-8"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-[24px]">
                                            {pillar.icon}
                                        </span>
                                    </span>
                                    <h3 className="text-xl font-semibold text-primary">
                                        {pillar.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-on-surface-variant">
                                    {pillar.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-8 py-24">
                <div className="flex flex-col items-center gap-8 rounded-4xl border border-outline/10 bg-white p-8 md:flex-row">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-semibold text-primary">
                            The New Standard of Care Speed
                        </h2>
                        <p className="text-sm leading-relaxed text-on-surface-variant">
                            By integrating directly with your hospital system,
                            we remove the waiting room for approvals. Patients
                            start treatment days earlier, improving outcomes and
                            physician satisfaction.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="rounded-2xl bg-surface-container-low p-4">
                                <p className="text-xs text-on-surface-variant uppercase">
                                    Traditional
                                </p>
                                <p className="text-xl font-semibold">
                                    7-14 Days
                                </p>
                            </div>
                            <div className="rounded-2xl bg-primary p-4 text-on-primary">
                                <p className="text-xs opacity-60 uppercase">
                                    With basys.ai
                                </p>
                                <p className="text-xl font-semibold">Instant</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-4xl border border-outline/5 bg-surface-container md:w-1/3">
                        { }
                        <Image
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMDGr4gh9NtLMsRFzdJFY4fxr-fQfmbpV9udQxANYKHYQDfyODzq2kiHqn9tmx_Fl9UrKLiGPf--wbLpwOh15w6F3ZQ7PCm-n1bHJiQ4MgJnjPL7cCQmWKnvheS7H2G1CtutwlVXpXp_6DcyfIKgk1Ct9Bzu9K2OaMgdknImQ_k6QS7SRI9F2stdt2RRdVzkt1-7gm729KU6-KZwPcZWTJg0Bx_aES0HqjeDJMNpqxFkMM6wkOJXo9FMTrxOk-ktKcge_Sf977gBg"
                            alt="High-tech medical hallway representing precision and speed."
                            width={1000}
                            height={1000}
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </div>
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
