import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function AboutUsPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto mt-8 max-w-7xl px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <span className="mb-4 inline-block rounded-pill bg-secondary-container px-4 py-2 text-xs font-semibold tracking-wider text-on-secondary-container uppercase">
                            Our Vision
                        </span>
                        <h1 className="mb-6 max-w-2xl text-5xl leading-tight font-bold text-primary">
                            Bridging the Gap: Trust Between Payers and
                            Providers.
                        </h1>
                        <p className="max-w-xl text-lg text-secondary">
                            Founded in the heart of Cambridge, MA, basys.ai
                            leverages agentic intelligence to automate and
                            streamline the administrative complexities of
                            healthcare.
                        </p>
                    </div>

                    <div className="relative lg:col-span-5">
                        <div className="h-[400px] overflow-hidden rounded-[2rem] bg-surface-container">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover opacity-90 grayscale contrast-125"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF4vyrLLn8Xc7oPZS5OVlB9CvVPqAnbC3lzHl0WkQPZFNrTS8lfS5Qs610_0ChTca453JktlWkJ1OOPH6h2xjVOWhlGf9WZ4kWKbpasAhl2KAKvUOY81txZOIFk3PMK-XRg6FgMD6-qt-INIGGz23Tzo_mjs3KSISB84elj5BYdmrTbLUAGrpf6IRVyHvCP9w5NQIlW6jqnoAzWZHGosYdSy2UYy8jf-LtoPmuMng6nOmFl8P8EidHd4TpGjE7Eb2opOCpV1h01m8"
                                alt="Modern architectural building in Cambridge."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <article className="flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-8 md:col-span-2">
                        <div>
                            <h2 className="mb-4 text-3xl font-semibold text-primary">
                                Cambridge Roots
                            </h2>
                            <p className="max-w-md text-sm text-secondary">
                                Our journey began in Cambridge, MA, where the
                                nexus of engineering and healthcare research
                                provided the perfect foundation for solving
                                payer-provider friction.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-surface-container pt-6">
                            <div className="flex -space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-pill border-2 border-white bg-slate-200 text-sm font-bold">
                                    H
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-pill border-2 border-white bg-slate-900 text-sm font-bold text-white">
                                    M
                                </div>
                            </div>
                            <span className="text-xs font-semibold tracking-wider text-on-surface-variant">
                                Forged at Harvard &amp; MIT
                            </span>
                        </div>
                    </article>

                    <article className="flex flex-col justify-center rounded-[2rem] bg-primary p-8 text-center text-on-primary">
                        <span className="material-symbols-outlined mb-4 text-4xl">
                            verified_user
                        </span>
                        <h3 className="mb-1 text-2xl font-semibold text-white">
                            100% Autonomous
                        </h3>
                        <p className="text-sm opacity-80">
                            Our Agentic AI ensures absolute governance and
                            architectural precision in every decision.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-8 md:py-16">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-primary">
                        Founding Leadership
                    </h2>
                    <p className="mt-2 text-sm text-secondary">
                        Deeply technical expertise meets clinical vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white">
                        <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDHptDo3fKd9UFOf2AAjzToTJqL872IiY-6IGUothM87TdaLhT3KgSnwfcUHH_w6KW3-4ApTjIKFAj41xBL8O6A3IHv7ij6UDsPcwjr6oc0vyUqxwvkjtBSVCoKwLOT36aG7TajzxOrKdI3m4kDdMMaKcHmsL108LatqZZNj_IG8Lh8GLeLSximKCDTlLdmf-sC0GdMcr_4ZFIKL_C_iqs-exEM4DqUtmfFP6uwKqYsiQqW6bYHSWNkuodwGDMXmci_GxdmqAfZ2w"
                                alt="Portrait of Amber Nigam."
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-primary">
                                Amber Nigam
                            </h3>
                            <p className="mt-1 text-xs tracking-widest text-secondary uppercase">
                                Co-Founder &amp; CEO
                            </p>
                            <p className="mt-4 text-sm text-on-surface-variant">
                                Harvard T.H. Chan School of Public Health.
                                Expert in health informatics and AI-driven
                                clinical workflow optimization.
                            </p>
                            <div className="mt-6 flex gap-4 border-t border-surface-container pt-4">
                                <span className="text-xs font-bold tracking-tight text-primary">
                                    HARVARD
                                </span>
                                <span className="text-xs font-bold tracking-tight text-primary">
                                    DATA SCIENCE
                                </span>
                            </div>
                        </div>
                    </article>

                    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6f4f1]">
                        <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDHptDo3fKd9UFOf2AAjzToTJqL872IiY-6IGUothM87TdaLhT3KgSnwfcUHH_w6KW3-4ApTjIKFAj41xBL8O6A3IHv7ij6UDsPcwjr6oc0vyUqxwvkjtBSVCoKwLOT36aG7TajzxOrKdI3m4kDdMMaKcHmsL108LatqZZNj_IG8Lh8GLeLSximKCDTlLdmf-sC0GdMcr_4ZFIKL_C_iqs-exEM4DqUtmfFP6uwKqYsiQqW6bYHSWNkuodwGDMXmci_GxdmqAfZ2w"
                                alt="Portrait of Srinidhi Moodalagiri."
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-primary">
                                Srinidhi Moodalagiri
                            </h3>
                            <p className="mt-1 text-xs tracking-widest text-secondary uppercase">
                                Chief Technical Officer
                            </p>
                            <p className="mt-4 text-sm text-on-surface-variant">
                                MIT Sloan and Harvard Engineering. Architect of
                                the core basys.ai agentic framework and
                                predictive modeling engine.
                            </p>
                            <div className="mt-6 flex gap-4 border-t border-surface-container pt-4">
                                <span className="text-xs font-bold tracking-tight text-primary">
                                    MIT
                                </span>
                                <span className="text-xs font-bold tracking-tight text-primary">
                                    AI ARCHITECTURE
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mx-auto mb-8 max-w-7xl px-8 py-8 md:mb-16 md:py-16">
                <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
                    <div className="flex items-center justify-between bg-primary px-6 py-4">
                        <div className="flex items-center gap-4">
                            <div className="h-2 w-2 animate-pulse rounded-pill bg-green-500" />
                            <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                                System Protocol: About_Mission.v1
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-pill border border-white/20" />
                            <div className="h-3 w-3 rounded-pill border border-white/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
                        <div>
                            <h4 className="mb-4 text-2xl font-semibold text-primary">
                                Our Commitment to Payers
                            </h4>
                            <p className="text-sm text-secondary">
                                Reducing prior authorization turnaround times by
                                80% through transparent, evidence-based AI
                                automation.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 text-2xl font-semibold text-primary">
                                Our Commitment to Providers
                            </h4>
                            <p className="text-sm text-secondary">
                                Eliminating the administrative burden that leads
                                to clinician burnout, allowing for a renewed
                                focus on patient care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FinalCtaSection />
        </main>
    );
}
