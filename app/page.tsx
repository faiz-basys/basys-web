import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroAgentStack } from "@/components/sections/HeroAgentStack";
import { NewsUpdatesSection } from "@/components/sections/NewsUpdatesSection";
import { TrustBar } from "@/components/sections/TrustBar";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const valueProps = [
    {
        icon: "gavel",
        title: "Compliance First",
        description:
            "Full HIPAA/SOC2 compliance with audit trails for every AI-driven decision made at scale.",
    },
    {
        icon: "visibility",
        title: "Explainable AI",
        description:
            'No "Black Box" logic. Every approval is backed by literal citations from clinical guidelines.',
    },
    {
        icon: "hub",
        title: "FHIR Ready",
        description:
            "Native FHIR interoperability ensuring seamless data flow between payers and providers.",
    },
    {
        icon: "auto_awesome",
        title: "Learning Copilot",
        description:
            "Continuous learning loops that refine authorization logic based on clinical outcome data.",
    },
] as const;

export default function Home() {
    return (
        <main className="pt-20 md:pt-0">
            {/* Hero */}
            <section className="relative flex min-h-[870px] items-center overflow-hidden px-8 py-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-surface-container-low to-background" />
                    <div
                        aria-hidden
                        className="animate-hero-grid pointer-events-none absolute inset-0 opacity-[0.35]"
                        style={{
                            backgroundImage: `linear-gradient(to right, var(--color-outline-variant) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-outline-variant) 1px, transparent 1px)`,
                            backgroundSize: "48px 48px",
                            maskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 45%, black 15%, transparent 70%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 45%, black 15%, transparent 70%)",
                        }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-hero-orb h-[800px] w-[800px] rounded-pill bg-primary/5 blur-3xl motion-reduce:animate-none" />
                    </div>
                </div>

                <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <Badge
                            icon="verified_user"
                            title="VALIDATED BY CLINICAL LEADERS"
                        />

                        <h1 className="animate-hero-fade-up max-w-xl text-5xl leading-[1.1] font-black tracking-tight text-on-surface delay-100 md:text-[64px] md:delay-150">
                            Enterprise-Grade AI Agents for Prior Authorization.
                        </h1>

                        <p className="animate-hero-fade-up max-w-md text-base leading-6 text-on-surface-variant delay-200 md:text-lg md:delay-220">
                            Automate approvals with clinically validated
                            precision. The first autonomous platform built for
                            health plans and provider networks.
                        </p>

                        <div className="animate-hero-fade-up flex flex-col gap-4 delay-300 sm:flex-row md:delay-280">
                            <Button size="lg">Request a Demo</Button>
                            <Button
                                size="lg"
                                variant="outline"
                                href="/technology"
                            >
                                View Technology
                            </Button>
                        </div>
                    </div>

                    <div className="flex w-full justify-center">
                        <HeroAgentStack />
                    </div>
                </div>
            </section>

            <TrustBar />

            <NewsUpdatesSection />

            {/* Value props */}
            <section className="bg-surface-container-low py-24">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="mx-auto mb-20 max-w-2xl text-center">
                        <h2 className="mb-4 text-4xl leading-tight font-bold">
                            Precision-Built for the Enterprise.
                        </h2>
                        <p className="text-lg text-on-surface-variant">
                            Healthcare infrastructure requires more than just
                            intelligence-it demands absolute governance and
                            interoperability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {valueProps.map((valueProp) => (
                            <article
                                key={valueProp.title}
                                className="flex flex-col gap-6 rounded-4xl border border-outline-variant/30 bg-surface-container-lowest p-8"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-primary/5">
                                    <span className="material-symbols-outlined text-primary">
                                        {valueProp.icon}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold">
                                        {valueProp.title}
                                    </h3>
                                    <p className="text-sm text-on-surface-variant">
                                        {valueProp.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
