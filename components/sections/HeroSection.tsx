import { Button } from "../ui/Button";
import { HeroAgentStack } from "./HeroAgentStack";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[870px] items-center overflow-hidden px-8 py-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-surface-container-low to-background" />
                {/* Subtle tech grid */}
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
                    <div className="animate-hero-fade-up animate-hero-pill inline-flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-highest px-3 py-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                            verified_user
                        </span>
                        <span className="text-xs font-semibold tracking-widest text-on-surface-variant uppercase">
                            Validated by Clinical Leaders
                        </span>
                    </div>

                    <h1 className="animate-hero-fade-up max-w-xl text-5xl leading-[1.1] font-black tracking-tight text-on-surface delay-100 md:text-[64px] md:delay-150">
                        Enterprise-Grade AI Agents for Prior Authorization.
                    </h1>

                    <p className="animate-hero-fade-up max-w-md text-base leading-6 text-on-surface-variant delay-200 md:text-lg md:delay-220">
                        Automate approvals with clinically validated precision.
                        The first autonomous platform built for health plans and
                        provider networks.
                    </p>

                    <div className="animate-hero-fade-up flex flex-col gap-4 delay-300 sm:flex-row md:delay-280">
                        <Button size="lg">Request a Demo</Button>
                        <Button size="lg" variant="outline">
                            View Technology
                        </Button>
                    </div>
                </div>

                <div className="flex w-full justify-center">
                    <HeroAgentStack />
                </div>
            </div>
        </section>
    );
}
