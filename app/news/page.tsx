import { GeneralNewsletterCtaSection } from "@/components/newsletter/GeneralNewsletterCtaSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

export default function NewsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-8 pt-32 pb-8">
            <header className="mb-8">
                <span className="mb-4 inline-block rounded-pill bg-surface-container-high px-4 py-2 text-xs font-semibold tracking-widest text-on-primary-container uppercase">
                    Press &amp; Insights
                </span>
                <h1 className="mb-2 text-5xl font-bold text-primary">
                    Newsroom
                </h1>
                <p className="max-w-2xl text-lg text-secondary">
                    The latest updates on our mission to revolutionize clinical
                    documentation and prior authorization with autonomous health
                    AI.
                </p>
            </header>

            <div className="mb-8 flex flex-wrap gap-4 border-b border-outline-variant pb-4">
                <Button>All Updates</Button>
                <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container">
                    Press Releases
                </button>
                <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container">
                    Media Mentions
                </button>
                <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container">
                    Corporate News
                </button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                <article className="group col-span-12 flex cursor-pointer flex-col justify-between rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-primary md:col-span-8">
                    <div>
                        <div className="mb-6 flex items-start justify-between">
                            <span className="text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                                Press Release - Oct 24, 2024
                            </span>
                            <div className="flex h-8 w-24 items-center justify-center rounded bg-surface-container text-[10px] font-bold text-slate-400">
                                basys.ai GLOBAL
                            </div>
                        </div>
                        <h2 className="mb-4 text-3xl font-semibold text-primary group-hover:underline">
                            basys.ai Secures $15M Series A to Scale Generative
                            AI for Health Plans
                        </h2>
                        <p className="mb-8 text-sm text-secondary">
                            The funding round, led by top-tier venture firms,
                            will accelerate the deployment of basys.ai&apos;s
                            agentic platform across major health systems and
                            payers.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-xs font-semibold text-primary">
                            READ FULL RELEASE{" "}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                        <div className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant">
                            <span className="material-symbols-outlined">
                                article
                            </span>
                        </div>
                    </div>
                </article>

                <article className="col-span-12 flex cursor-pointer flex-col justify-between rounded-4xl border border-transparent bg-surface-container p-8 transition-colors hover:bg-surface-container-high md:col-span-4">
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: '"FILL" 1' }}
                            >
                                terminal
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-primary">
                                GARTNER RECOGNITION
                            </span>
                        </div>
                        <h3 className="mb-4 text-2xl italic text-primary">
                            &quot;basys.ai listed as a Representative Vendor in
                            the 2024 Market Guide for AI in Healthcare.&quot;
                        </h3>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-xs font-semibold text-secondary">
                            Sep 12, 2024
                        </span>
                        <button className="text-xs font-semibold text-primary">
                            VIEW MENTION
                        </button>
                    </div>
                </article>

                <article className="group col-span-12 rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-4">
                    <div className="mb-6 h-40 overflow-hidden rounded-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYEOKR-uEcRS_ZFKQK06tq4-xpO-ndynsBmGEspb8ORc4QJqGGq_3CNz9rZJc_Ca-tDLWK8H9nq6FQpt7fwn7sHKbzy4_71_5AVO8TSCK-gjJ4ElTraayDH2GNK6I2AEiTNLQu9HQJypofmOE_qjMhSX09cGTjtWxw9DWk9Ad1jyrgprL7yllubxaN2qqOFmqHP_ow-s8ipN4rbM5ags3JDsHvhYHGpoHCEOD3PuEqGKDNTmaOIPgWqOrGGJUzLXm5wN-BZQlPIHs"
                            alt="Modern corporate office interior."
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                        <span className="text-lg font-bold tracking-tight">
                            Forbes
                        </span>
                        <span className="text-xs text-outline">• Insight</span>
                    </div>
                    <h4 className="mb-2 text-xl leading-tight font-semibold text-primary">
                        How basys.ai is fixing the $30B Prior Authorization
                        Problem.
                    </h4>
                    <p className="mb-4 text-sm text-secondary">
                        An exclusive interview with our founders on the future
                        of healthcare efficiency.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                        <span className="material-symbols-outlined text-sm">
                            link
                        </span>
                        FORBES.COM
                    </div>
                </article>

                <article className="col-span-12 rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 transition-shadow hover:shadow-sm md:col-span-4">
                    <div className="mb-6 flex justify-between">
                        <span className="text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                            Update
                        </span>
                        <span className="text-xs text-outline">
                            Aug 05, 2024
                        </span>
                    </div>
                    <h4 className="mb-4 text-2xl font-semibold text-primary">
                        Introducing basys.flow: The Next Gen Clinical Workflow
                        Engine
                    </h4>
                    <p className="mb-8 text-sm text-secondary">
                        Announcing the launch of our most requested feature set
                        for large enterprise payers.
                    </p>
                    <div className="flex gap-4">
                        <Button className="px-6 py-2">Read</Button>
                        <button className="rounded-pill border border-primary px-6 py-2 text-sm font-semibold text-primary">
                            Share
                        </button>
                    </div>
                </article>

                <article className="col-span-12 flex flex-col justify-between rounded-4xl bg-primary p-8 text-on-primary md:col-span-4">
                    <div>
                        <div className="mb-6 inline-block rounded bg-on-primary/20 p-2">
                            <span className="material-symbols-outlined text-on-primary">
                                policy
                            </span>
                        </div>
                        <h4 className="mb-4 text-2xl font-semibold text-on-primary">
                            Compliance Milestone: CMS Interoperability Standard
                            Alignment
                        </h4>
                        <p className="text-sm text-on-primary/70">
                            basys.ai achieves full compliance with the latest
                            2024 CMS-0057-F final rule mandates.
                        </p>
                    </div>
                    <button className="group mt-8 flex items-center gap-2 text-xs font-semibold">
                        DOWNLOAD WHITE PAPER
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                            download
                        </span>
                    </button>
                </article>
            </div>

            <div className="mt-8 flex justify-center border-t border-outline-variant pt-6">
                <button className="flex items-center gap-2 rounded-pill px-10 py-6 text-xs font-semibold text-primary transition-colors hover:bg-surface-container">
                    LOAD MORE ARCHIVED POSTS
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </button>
            </div>
            <GeneralNewsletterCtaSection
                title="Stay in the loop"
                description="Get basys.ai announcements, press highlights, and product news — occasional emails, no clutter."
            />
            <FinalCtaSection />
        </main>
    );
}
