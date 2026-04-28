import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

const orchestrationMetrics = [
    { value: "99.8%", label: "ROUTING ACCURACY" },
    { value: "<200ms", label: "LATENCY OVERHEAD" },
    { value: "Multi-LLM", label: "AGNOSTIC STACK" },
];

const complianceItems = [
    "HIPAA Compliance",
    "Zero-Persistence Cache",
    "SOC2 Type II Framework",
];

const systemSpecs = [
    {
        title: "ORCHESTRATION MODEL",
        description:
            "Proprietary Directed Acyclic Graph (DAG) routing system for multi-agent synchronization.",
    },
    {
        title: "LLM STACK",
        description:
            "Compatible with GPT-4, Claude 3, and localized open-source models like Llama 3 for on-premise deployments.",
    },
    {
        title: "API INTEGRATION",
        description:
            "Full FHIR R4 compliance with RESTful hooks and GraphQL subscription layers.",
    },
    {
        title: "AUDITABILITY",
        description:
            "Immutable ledger of all AI reasoning paths for full regulatory transparency and clinician review.",
    },
];

export default function TechnologyPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <div>
                        <span className="mb-6 inline-block rounded-pill bg-secondary-container px-4 py-1 text-xs font-semibold tracking-wider text-on-secondary-container">
                            CORE ARCHITECTURE
                        </span>
                        <h1 className="mb-6 text-5xl leading-tight font-bold">
                            The Basys Engine: Localized Intelligence for
                            Healthcare.
                        </h1>
                        <p className="mb-8 max-w-lg text-lg text-on-surface-variant">
                            Our Agentic AI orchestration layer enables
                            autonomous clinical workflows while maintaining
                            strict data sovereignty and absolute reasoning
                            transparency.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">Explore Architecture</Button>
                            <Button size="lg" variant="outline">
                                Technical Whitepaper
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-highest">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyqg5H_fmDsgXXm-TE1iAoPM7n0u8TkAnyHFKcKbhyfr35k6JBdVZP8cFqiLOliWy0BG5tYaISr8-ommLC6xalSqmwmRwTMiCqXWKpZ8FvHBKkYJ2iMW0M-E3NZYy253u-ChuOSRAswfZ7AHibIQACvOsHbrMRnwC5XZc1UeJnV-SN1l2wEDE6OlhV0DUarV-Eferr2i9yvCLF_X1hnqThb2t5wJUJX6wUlQ_u2-ObYTox_bRxRHlk374yYgsqiHehTEI6k0nMB5k"
                                alt="Abstract data nodes connected by architectural lines."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16">
                        <h2 className="mb-4 text-3xl font-semibold">
                            Three Pillars of Autonomous Integrity
                        </h2>
                        <p className="text-sm text-on-surface-variant">
                            The Basys Engine is engineered for the high-stakes
                            requirements of clinical data processing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                        <article className="flex flex-col justify-between rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-8 md:col-span-8">
                            <div>
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary">
                                    <span className="material-symbols-outlined text-on-primary">
                                        hub
                                    </span>
                                </div>
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Localized AI Orchestration
                                </h3>
                                <p className="max-w-xl text-sm text-on-surface-variant">
                                    A decentralized agentic layer that routes
                                    tasks between specialized clinical LLMs.
                                    Each agent is tuned for specific medical
                                    domains, ensuring high-fidelity outputs
                                    without the latency of centralized models.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-surface-variant pt-6 sm:grid-cols-3">
                                {orchestrationMetrics.map((metric) => (
                                    <div key={metric.label}>
                                        <span className="block text-xl font-semibold text-primary">
                                            {metric.value}
                                        </span>
                                        <span className="text-xs text-on-surface-variant">
                                            {metric.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="flex flex-col rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-4">
                            <div className="mb-8">
                                <span
                                    className="material-symbols-outlined text-4xl"
                                    style={{
                                        fontVariationSettings: '"FILL" 1',
                                    }}
                                >
                                    security
                                </span>
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold text-white">
                                Data Sovereignty Containers
                            </h3>
                            <p className="text-sm text-on-primary-container opacity-90">
                                Localized data stays local. Our architecture
                                ensures that PHI never leaves your secure
                                environment. AI processing happens within
                                dedicated ephemeral containers that dissolve
                                post-inference.
                            </p>
                            <ul className="mt-auto space-y-2 pt-8">
                                {complianceItems.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 text-xs font-semibold"
                                    >
                                        <span className="material-symbols-outlined text-sm">
                                            check_circle
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[2rem] border border-outline-variant bg-secondary-container p-8 md:col-span-12">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        &apos;Explainable AI&apos; Reasoning
                                        Paths
                                    </h3>
                                    <p className="mb-6 text-sm text-on-surface-variant">
                                        Every decision the Basys Engine makes is
                                        accompanied by a literal thought trace.
                                        We provide clear clinical reasoning
                                        paths that cite specific patient data
                                        points and medical literature,
                                        eliminating the black box of traditional
                                        AI.
                                    </p>
                                    <Button>View Sample Path</Button>
                                </div>

                                <div className="overflow-hidden rounded-[1rem] border border-outline-variant bg-surface-container-lowest p-4 font-mono text-[11px] text-on-surface">
                                    <div className="mb-2 flex justify-between border-b border-surface-variant pb-2 font-bold text-on-surface-variant">
                                        <span>
                                            AGENT_TRACE: DIAGNOSIS_VALIDATOR
                                        </span>
                                        <span>0x45FC2</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-secondary">
                                            <span className="font-bold text-primary">
                                                [14:02:11]
                                            </span>{" "}
                                            FETCHING_PATIENT_HISTORY: ID_99212
                                        </p>
                                        <p className="text-secondary">
                                            <span className="font-bold text-primary">
                                                [14:02:12]
                                            </span>{" "}
                                            ANALYZING_LABS: A1C_LEVEL(8.2),
                                            GLUCOSE_FASTING(142)
                                        </p>
                                        <p className="text-secondary">
                                            <span className="font-bold text-primary">
                                                [14:02:14]
                                            </span>{" "}
                                            CROSS_REF:
                                            MCG_CLINICAL_GUIDELINES_V26
                                        </p>
                                        <p className="rounded bg-secondary-container p-1">
                                            <span className="font-bold text-primary">
                                                REASONING:
                                            </span>{" "}
                                            Patient exhibits sustained glycemic
                                            elevation (&gt;126 mg/dL). Baseline
                                            supports progression to specialized
                                            care. Confidence: 0.98.
                                        </p>
                                        <p className="text-secondary">
                                            <span className="font-bold text-primary">
                                                [14:02:15]
                                            </span>{" "}
                                            ACTION:
                                            RECOMMEND_AUTHORIZATION_APPROVAL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-semibold">
                        Autonomous Clinical Governance
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm text-on-surface-variant">
                        Basys does not just process data; it orchestrates a
                        fleet of specialized agents that audit each other&apos;s
                        reasoning in real-time.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container">
                    <div className="flex items-center justify-between bg-primary px-6 py-4">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-pill bg-error" />
                                <div className="h-3 w-3 rounded-pill bg-secondary-fixed" />
                                <div className="h-3 w-3 rounded-pill bg-on-primary-container" />
                            </div>
                            <span className="text-xs tracking-widest text-white/80 uppercase">
                                Live Engine Console
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="font-mono text-xs text-white/50">
                                STATUS: ACTIVE_ORCHESTRATION
                            </span>
                            <span className="material-symbols-outlined text-white">
                                more_vert
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
                        <article className="rounded-[1rem] border border-outline-variant bg-surface-container-lowest p-4">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs font-semibold tracking-wider text-primary">
                                    INTAKE AGENT
                                </span>
                                <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
                                    READY
                                </span>
                            </div>
                            <p className="mb-4 text-sm text-on-surface-variant">
                                Extracting clinical markers from unstructured
                                EHR data.
                            </p>
                            <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-container">
                                <div className="h-full w-full bg-primary" />
                            </div>
                        </article>

                        <article className="rounded-[1rem] border border-outline-variant bg-surface-container-lowest p-4">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs font-semibold tracking-wider text-primary">
                                    REASONING ENGINE
                                </span>
                                <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                                    PROCESSING
                                </span>
                            </div>
                            <p className="mb-4 text-sm text-on-surface-variant">
                                Comparing markers against 2,000+ medical
                                guidelines.
                            </p>
                            <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-container">
                                <div className="h-full w-[65%] bg-primary" />
                            </div>
                        </article>

                        <article className="rounded-[1rem] border border-outline-variant bg-surface-container-lowest p-4">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs font-semibold tracking-wider text-primary">
                                    AUDIT COMPLIANCE
                                </span>
                                <span className="rounded bg-surface-container px-2 py-0.5 text-[10px] font-bold text-on-surface-variant">
                                    PENDING
                                </span>
                            </div>
                            <p className="mb-4 text-sm text-on-surface-variant">
                                Final policy check and sovereignty verification.
                            </p>
                            <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-container">
                                <div className="h-full w-[10%] bg-surface-variant" />
                            </div>
                        </article>
                    </div>

                    <div className="px-6 pb-6">
                        <div className="flex min-h-[300px] items-center justify-center rounded-[1rem] border border-outline-variant bg-white/50 p-8">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-auto w-full max-w-2xl rounded opacity-90"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4pcVnK3g8j_Jis5gISTcUnsoxTL9acbFF8FylsmTBt0utNxWd3U6joqutincmGQOTRUTJRsaU9Tq0nFburgOwq4fF51e4eHSSlHO6SkRLe3dH1eVExOHQV4vEW8cfuGp7PXDqg5tfxBBGs1nWzTrfvS5SaUWdr-vjihWIndG61bkPnuTW4l8tg8jrU071ckwSbkT5uxDClZak0p9OvDC0sv9pPyqXgRJ80Ox7eylAzon1V4gLgEq9HDwiT8M4DYPBF_cNDpAf6wk"
                                alt="Architectural diagram with secure data containers."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-primary py-24 text-on-primary">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
                    <div className="z-10">
                        <h2 className="mb-6 text-4xl leading-tight font-semibold">
                            Designed for Absolute Sovereignty.
                        </h2>
                        <p className="mb-8 text-lg text-on-primary-container opacity-80">
                            We have pioneered a zero-trust AI model for
                            healthcare. Your clinical data remains isolated,
                            encrypted, and governed by your internal security
                            policies at all times.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined mt-1">
                                    lan
                                </span>
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Edge Inference
                                    </h4>
                                    <p className="text-sm text-on-primary-container opacity-70">
                                        Processing happens at the edge of your
                                        network, never on a third-party
                                        centralized server.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined mt-1">
                                    vpn_key
                                </span>
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        BYOK Encryption
                                    </h4>
                                    <p className="text-sm text-on-primary-container opacity-70">
                                        Bring Your Own Key support for full
                                        administrative control over data access
                                        logs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px]">
                        <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-8">
                            <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-white/20">
                                <div className="flex h-3/4 w-3/4 items-center justify-center rounded-full border-2 border-white/40">
                                    <div className="flex h-1/2 w-1/2 items-center justify-center rounded-full bg-white text-primary">
                                        <span
                                            className="material-symbols-outlined text-4xl"
                                            style={{
                                                fontVariationSettings:
                                                    '"FILL" 1',
                                            }}
                                        >
                                            shield
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border border-white/40 bg-white/20" />
                                <div className="absolute bottom-1/4 left-0 h-8 w-8 rounded-full border border-white/40 bg-white/20" />
                                <div className="absolute right-0 bottom-1/4 h-8 w-8 rounded-full border border-white/40 bg-white/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-semibold">
                            System Specifications
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:col-span-3 md:grid-cols-2">
                        {systemSpecs.map((spec) => (
                            <article
                                key={spec.title}
                                className="rounded-[2rem] border border-outline-variant p-6"
                            >
                                <h4 className="mb-2 text-xs font-semibold tracking-wider text-primary">
                                    {spec.title}
                                </h4>
                                <p className="text-sm text-on-surface-variant">
                                    {spec.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <FinalCtaSection />
        </main>
    );
}
