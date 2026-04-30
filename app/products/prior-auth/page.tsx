import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const capabilities = [
    {
        icon: "timeline",
        title: "End-to-end PA lifecycle",
        description:
            "Track requests through processing to completion, with clear outcomes (for example in progress, approved, denied, appeal, missing information) and audit-friendly operations.",
    },
    {
        icon: "groups",
        title: "Multi-party model",
        description:
            "Supports payer and provider organizations, users, and patient context so workflows reflect how real networks operate.",
    },
    {
        icon: "policy",
        title: "Policy intelligence",
        description:
            "Policy documents, codes, encoding jobs, history, and guideline-oriented building blocks to align decisions with coverage rules.",
    },
    {
        icon: "link",
        title: "Clinical connectivity",
        description:
            "Patient records, EHR/FHIR integration paths, and medical record review to ground decisions in the chart.",
    },
    {
        icon: "bolt",
        title: "Scale and throughput",
        description:
            "Bulk request capabilities and background mapping and encoding jobs for higher volume.",
    },
    {
        icon: "shield_lock",
        title: "Secure, enterprise-ready stack",
        description:
            "Keycloak-oriented auth, JWT-backed APIs, document storage (for example S3), presigned URLs, and separation of web and API deployments for controlled rollouts.",
    },
];

export default function PriorAuthProductPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-highest px-3 py-1">
                            <span className="material-symbols-outlined text-sm">
                                account_tree
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-on-secondary-container uppercase">
                                Prior auth workflows
                            </span>
                        </div>

                        <h1 className="max-w-xl text-5xl leading-tight font-bold text-primary">
                            Prior Authorization Platform
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                            Full-stack prior auth from intake through
                            outcome-payers, providers, and policy in one place,
                            with secure documents, clinical and EHR/FHIR
                            context, configurable AI where you need it, and
                            enterprise-grade auth and operations at scale.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" href="/contact-us">
                                Request a Demo
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-surface-container" />
                        {}
                        <Image
                            alt="Clinical workflow and authorization review"
                            className="h-[400px] w-full rounded-4xl border border-outline/10 object-cover shadow-sm"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgN5l1kaWwjv9byscN4W4iEssfbpc1W57pZXicv47Ra27TD51ME31HzkhazKL1Daa3EwcLw3_DKPDEkaHqJTwZffMyN6kh9Z64hK0al8OXXLEPuItW3nS-44C2K67Np2BbdhFMljcAmu5UD76CFBGyXnA1vqLjSw8I5BkFanjhv693AynyJRchspxvEqcWapd5ZLscPCAtK9WHA-vvAlDQK4HPP3yBz2YrZbL87-2s3cha2OAgiaLh8AAbUxp1rHxBXg6ZGhXers"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="mb-4 text-3xl font-semibold text-primary">
                            Platform capabilities
                        </h2>
                        <p className="text-sm text-on-surface-variant">
                            Everything you need to run prior authorization at
                            enterprise scale - with clarity for every
                            stakeholder.
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

            <FinalCtaSection />
        </main>
    );
}
