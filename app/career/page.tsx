import { CareerHiringHero } from "@/components/sections/CareerHiringHero";
import { Button } from "@/components/ui/Button";
import { GENERAL_APPLICATION_SLUG, jobRoles } from "@/lib/career/jobs";
import Link from "next/link";

const heroRoles = jobRoles.map(({ title, icon }) => ({ title, icon }));

export default function CareerPage() {
    return (
        <main className="mx-auto max-w-7xl px-8 pt-32 pb-24">
            <section className="mb-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-pill bg-surface-container-highest px-3 py-1">
                        <span className="material-symbols-outlined text-[16px]">
                            rocket_launch
                        </span>
                        <span className="text-xs font-semibold tracking-wider uppercase">
                            Join the Intelligence Revolution
                        </span>
                    </div>

                    <h1 className="text-5xl leading-tight font-bold text-on-surface lg:text-[64px] lg:leading-[1.1]">
                        Architecting the future of{" "}
                        <span className="text-primary underline decoration-2 underline-offset-8">
                            healthcare AI
                        </span>
                        .
                    </h1>

                    <p className="max-w-lg text-lg text-on-surface-variant">
                        We are building agentic AI systems that empower
                        clinicians and streamline global health systems. Join a
                        team where precision meets purpose.
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg" className="uppercase" href="#jobs">
                            View Open Roles
                        </Button>
                    </div>
                </div>

                <div className="group relative flex justify-center lg:justify-end">
                    <div className="absolute -inset-4 rounded-[3rem] bg-linear-to-tr from-surface-container-high to-transparent opacity-50 blur-2xl" />
                    <div className="relative w-full max-w-lg">
                        <CareerHiringHero roles={heroRoles} />
                    </div>
                </div>
            </section>

            <section className="mb-32">
                <h2 className="mb-12 text-center text-3xl font-semibold">
                    Why basys.ai?
                </h2>
                <div className="grid h-auto grid-cols-1 gap-5 md:h-[600px] md:grid-cols-4">
                    <article className="flex flex-col justify-between rounded-4xl border border-outline/10 bg-surface-container-lowest p-8 md:col-span-2 md:row-span-2">
                        <div>
                            <span className="material-symbols-outlined mb-4 text-primary">
                                clinical_notes
                            </span>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Clinical Impact
                            </h3>
                            <p className="text-sm text-on-surface-variant">
                                Work at the intersection of deep tech and
                                medical expertise. Your code directly improves
                                patient outcomes through hyper-personalized care
                                pathways.
                            </p>
                        </div>
                        <article className="group relative col-span-12 cursor-pointer overflow-hidden rounded-4xl lg:col-span-8">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvq2k3iHDiC3qUU3gOxScquhHowvz1uwFC6ZKi5F5dOZnbtCiGZcMK-r0hpqN1-hiwNbnbKmgmia5tnRuXESV59G40rbXKEBdCLK4kQX0PdNKH7EgLrM44c_ELVOFwI_mpZkU2pu8uk0PQ9LvfBXwMgtsfXB9IIIHxuOYesT5Su4SVYgIwhNX3xov-_C5knIvjKyCx9iM6bWRAeF0zeXrnLnBxVhSaxda2SVXjzXCYcgIN6ZJskPO-jiGjQ4eq8tKdep_ncHRZzso"
                                alt="Abstract geometry suggesting collaboration across clinical and engineering teams."
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="relative flex h-full flex-col justify-end p-10 text-white">
                                <span className="mb-4 block text-xs font-semibold tracking-widest text-white/70 uppercase">
                                    Life at basys.ai
                                </span>
                                <h2 className="mb-4 max-w-xl text-3xl font-semibold">
                                    Build healthcare AI alongside researchers,
                                    clinicians, and platform engineers—where
                                    your craft shows up in real care pathways.
                                </h2>
                                <div className="flex flex-wrap items-center gap-6">
                                    <span className="text-xs text-white/60">
                                        Hybrid &amp; remote-friendly
                                    </span>
                                    <span className="text-xs text-white/60">
                                        Cambridge · US-wide roles
                                    </span>
                                </div>
                            </div>
                        </article>
                    </article>

                    <article className="flex flex-col justify-center rounded-4xl bg-primary p-8 text-on-primary md:col-span-2">
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                            Autonomous Growth
                        </h3>
                        <p className="text-sm opacity-80">
                            We operate like our agents: autonomous, efficient,
                            and constantly learning. We provide the resources
                            for you to lead your own initiatives from day one.
                        </p>
                    </article>

                    <article className="flex flex-col items-center justify-center rounded-4xl bg-secondary-container p-8 text-center md:col-span-1">
                        <span className="material-symbols-outlined mb-4 text-3xl">
                            public
                        </span>
                        <h4 className="text-xs font-semibold tracking-wider uppercase">
                            Remote First
                        </h4>
                        <p className="text-xs text-on-secondary-container">
                            Talent has no borders.
                        </p>
                    </article>

                    <article className="flex flex-col items-center justify-center rounded-4xl bg-surface-container-highest p-8 text-center md:col-span-1">
                        <span className="material-symbols-outlined mb-4 text-3xl">
                            payments
                        </span>
                        <h4 className="text-xs font-semibold tracking-wider uppercase">
                            Equity &amp; More
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                            Competitive compensation.
                        </p>
                    </article>
                </div>
            </section>

            <section id="jobs" className="mb-32">
                <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Open Positions
                        </h2>
                        <p className="mt-2 text-sm text-on-surface-variant">
                            {jobRoles.length === 0
                                ? "We don't have listed openings right now. You can still get in touch below."
                                : "Help us build the next generation of healthcare infrastructure."}
                        </p>
                    </div>
                    {jobRoles.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold"
                            >
                                All Roles
                            </button>
                            <button
                                type="button"
                                className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold transition-colors hover:bg-surface-container-high"
                            >
                                AI &amp; Engineering
                            </button>
                            <button
                                type="button"
                                className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold transition-colors hover:bg-surface-container-high"
                            >
                                Clinical Operations
                            </button>
                        </div>
                    ) : null}
                </div>

                <div className="space-y-4">
                    {jobRoles.length === 0 ? (
                        <div className="rounded-4xl border border-outline/10 bg-surface-container-low px-6 py-14 text-center md:px-10">
                            <span className="material-symbols-outlined mb-4 text-4xl text-on-surface-variant">
                                work_history
                            </span>
                            <h3 className="text-lg font-semibold text-on-surface">
                                No open positions right now
                            </h3>
                            <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                                We post clinical, research, and platform roles
                                here as they open. Send a general application or
                                subscribe for alerts. We read every message.
                            </p>
                            <Button
                                href={`/career/apply/${GENERAL_APPLICATION_SLUG}`}
                                size="lg"
                                className="mt-8 uppercase"
                            >
                                General application
                            </Button>
                        </div>
                    ) : (
                        jobRoles.map((role) => (
                            <Link
                                key={role.slug}
                                href={`/career/apply/${role.slug}`}
                                className="group flex flex-col items-start justify-between rounded-4xl border border-outline/5 bg-surface-container-low p-6 transition-all hover:bg-white md:flex-row md:items-center"
                            >
                                <div className="flex items-center gap-6">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-pill text-on-primary ${role.iconBgClass}`}
                                    >
                                        <span className="material-symbols-outlined">
                                            {role.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {role.title}
                                        </h3>
                                        <div className="mt-1 flex gap-4">
                                            <span className="flex items-center gap-1 text-xs text-on-tertiary-container">
                                                <span className="material-symbols-outlined text-[14px]">
                                                    location_on
                                                </span>
                                                {role.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-on-tertiary-container">
                                                <span className="material-symbols-outlined text-[14px]">
                                                    schedule
                                                </span>
                                                {role.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-4 md:mt-0">
                                    <span className="hidden text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100 md:block">
                                        Apply Now
                                    </span>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-pill border border-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-on-surface-variant">
                        Don&apos;t see a role that fits?{" "}
                        <Link
                            href={`/career/apply/${GENERAL_APPLICATION_SLUG}`}
                            className="font-semibold text-primary underline"
                        >
                            Send us a general application
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-4xl bg-secondary-container p-8 text-center md:p-32">
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-pill bg-primary opacity-5" />
                <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-pill bg-primary opacity-5" />
                <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                    <h2 className="text-4xl font-bold">
                        Stay updated on new roles.
                    </h2>
                    <p className="text-lg text-on-secondary-container">
                        Be the first to hear about clinical and technical
                        openings as we scale.
                    </p>
                    <div className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="grow rounded-pill border-none px-6 py-3 text-sm focus:ring-2 focus:ring-primary"
                        />
                        <Button className="px-8 py-3 uppercase">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
