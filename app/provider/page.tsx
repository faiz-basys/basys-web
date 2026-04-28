import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

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
                    <div className="inline-flex items-center gap-2 rounded-pill bg-secondary-container px-4 py-1 text-on-secondary-container">
                        <span className="material-symbols-outlined text-[14px]">
                            bolt
                        </span>
                        <span className="text-xs font-semibold tracking-wider">
                            FOR HEALTHCARE PROVIDERS
                        </span>
                    </div>
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
                        <Button size="lg">Automate Now</Button>
                        <Button size="lg" variant="outline">
                            View Integration Guide
                        </Button>
                    </div>
                </div>

                <div className="group relative">
                    <div className="overflow-hidden rounded-[2rem] border border-outline/10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between bg-primary px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-pill bg-green-500" />
                                <span className="text-xs tracking-widest text-on-primary/80 uppercase">
                                    Agentic Workflow: ACTIVE
                                </span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] text-on-primary">
                                terminal
                            </span>
                        </div>

                        <div className="space-y-4 bg-surface-container-lowest p-6">
                            <div className="flex items-start justify-between border-b border-outline/5 pb-4">
                                <div>
                                    <p className="text-xs text-on-surface-variant uppercase">
                                        Current Protocol
                                    </p>
                                    <p className="text-xl font-semibold text-primary">
                                        Prior Auth Determination
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-on-surface-variant uppercase">
                                        Latency
                                    </p>
                                    <p className="text-sm font-bold text-primary">
                                        142ms
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 rounded-[1rem] bg-surface-container-low p-3">
                                    <span className="material-symbols-outlined text-primary">
                                        ecg
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-primary">
                                            EHR Syncing Complete
                                        </p>
                                        <div className="mt-1 h-1 w-full overflow-hidden rounded-pill bg-outline/10">
                                            <div className="h-full w-full bg-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-[1rem] border border-outline/10 p-3">
                                    <span className="material-symbols-outlined text-primary">
                                        verified
                                    </span>
                                    <p className="text-xs text-on-surface-variant">
                                        Clinical Policy Alignment Verified
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 rounded-[1rem] border border-outline/10 p-3">
                                    <span className="material-symbols-outlined text-primary">
                                        auto_awesome
                                    </span>
                                    <p className="text-xs italic text-on-surface-variant">
                                        Instant determination generated...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-pill bg-secondary-container/30 blur-3xl" />
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
                        <article className="flex flex-col justify-between rounded-[2rem] border border-outline/5 bg-surface p-8 transition-all hover:border-outline/20 md:col-span-8">
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

                        <article className="flex flex-col items-center space-y-4 rounded-[2rem] border border-outline/5 bg-[#f6f4f1] p-8 text-center md:col-span-4">
                            <div className="mb-4 h-32 w-full overflow-hidden rounded-[1rem] border border-outline/5 bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR__oOPbaWuL1on5HTGa0uv_PK0FtOta5IXWNBB31pINxrP58fCUsx3IwNndsL0SHYjxgjYBzTgMV7YGqlaFJ_pcNpI3jOCOmusMA4jVgxxDB2gydffQ7P4Y-lCKryGxULT0TmA_7iCccU4piT8RhT8yCiU0teGrI1KrUZddBDc2s0drYgG86zxN34RQiwIViEvZziUau0Cub3ETlOXsVcLTuqW-9wLwc0nipfeVux_-qVaaVU2KdOr91uGwCnRfwG3JNinH_OdmU"
                                    alt="Digital healthcare interface showing medical records and analytics."
                                />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Deep EHR Integration
                            </h3>
                            <p className="text-sm text-on-surface-variant">
                                Works natively within Epic, Cerner, and
                                AthenaHealth. No toggling required.
                            </p>
                        </article>

                        <article className="flex flex-col justify-center space-y-4 rounded-[2rem] border border-outline/5 bg-white p-8 md:col-span-4">
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

                        <article className="flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-8 md:flex-row">
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
                            <div className="w-full rounded-[1rem] border border-on-primary/10 bg-on-primary/10 p-4 backdrop-blur-sm md:w-1/3">
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
                                className="rounded-[2rem] border border-outline/10 bg-white p-6 md:col-span-4"
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

            <section className="mx-auto max-w-5xl px-8 py-24">
                <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-outline/10 bg-white p-8 md:flex-row">
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
                            <div className="rounded-[1rem] bg-surface-container-low p-4">
                                <p className="text-xs text-on-surface-variant uppercase">
                                    Traditional
                                </p>
                                <p className="text-xl font-semibold">
                                    7-14 Days
                                </p>
                            </div>
                            <div className="rounded-[1rem] bg-primary p-4 text-on-primary">
                                <p className="text-xs opacity-60 uppercase">
                                    With basys.ai
                                </p>
                                <p className="text-xl font-semibold">Instant</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] border border-outline/5 bg-surface-container md:w-1/3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMDGr4gh9NtLMsRFzdJFY4fxr-fQfmbpV9udQxANYKHYQDfyODzq2kiHqn9tmx_Fl9UrKLiGPf--wbLpwOh15w6F3ZQ7PCm-n1bHJiQ4MgJnjPL7cCQmWKnvheS7H2G1CtutwlVXpXp_6DcyfIKgk1Ct9Bzu9K2OaMgdknImQ_k6QS7SRI9F2stdt2RRdVzkt1-7gm729KU6-KZwPcZWTJg0Bx_aES0HqjeDJMNpqxFkMM6wkOJXo9FMTrxOk-ktKcge_Sf977gBg"
                            alt="High-tech medical hallway representing precision and speed."
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </div>
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
