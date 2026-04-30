import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrustBar } from "@/components/sections/TrustBar";
import { BenchmarkChart } from "@/components/white-paper/BenchmarkChart";

export const metadata: Metadata = {
    title: "White Paper Preview | basys.ai",
    description:
        "Reimagine prior authorization with agentic AI: lower costs, faster decisions, and provider trust. Benchmarks and strategic overview for health plans.",
};

const failingStats = [
    {
        value: "93%",
        label: "of physicians report care delays",
        accent: false,
    },
    {
        value: "$35B+",
        label: "annual administrative costs",
        accent: false,
    },
    {
        value: "Worse",
        label: "health outcomes for patients",
        accent: true,
    },
];

const traditionalIssues = [
    {
        title: "Hallucinations",
        body: "No audit trail, unreliable outputs",
        icon: "psychology_alt",
    },
    {
        title: "Misses Nuance",
        body: "Complex clinical policies require precision",
        icon: "precision_manufacturing",
    },
    {
        title: "Creates Risk",
        body: "Not trust, undermining provider relationships",
        icon: "gpp_bad",
    },
];

export default function WhitePaperPreviewPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <Badge icon="menu_book" title="WHITE PAPER" />
                    <h1 className="mt-6 text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
                        Reimagine Prior Authorization
                    </h1>
                    <p className="mt-4 text-xl font-semibold text-primary md:text-2xl">
                        A Strategic Opportunity for Health Plans
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">
                        Agentic AI Reduces Costs, Improves Speed, and Builds
                        Provider Trust
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Button href="#whitepaper-form" size="lg">
                            Get Access to White Paper
                        </Button>
                        <Button href="#benchmarking" variant="outline" size="lg">
                            See benchmarks
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-t border-outline/10 bg-surface-container-lowest px-8 py-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold text-primary md:text-4xl">
                        The Current Prior Authorization Process is Failing
                    </h2>
                    <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
                        {failingStats.map((item) => (
                            <article
                                key={item.label}
                                className="flex flex-col rounded-4xl border border-outline/10 bg-white p-8 text-center"
                            >
                                <span
                                    className={`text-5xl font-bold ${
                                        item.accent
                                            ? "text-[#c2410c]"
                                            : "text-primary"
                                    }`}
                                >
                                    {item.value}
                                </span>
                                <span className="mt-3 text-sm font-medium leading-snug text-on-surface-variant">
                                    {item.label}
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-20">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                        Traditional AI Doesn&apos;t Work for Prior Authorization
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {traditionalIssues.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-4xl border border-outline/10 bg-surface-container-low p-8"
                        >
                            <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                                {item.icon}
                            </span>
                            <h3 className="text-lg font-semibold text-primary">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                                {item.body}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-t border-outline/10 bg-surface-container-low px-8 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                            Agentic AI: Built for Healthcare
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="grid grid-cols-2 gap-5">
                            <article className="flex flex-col items-center justify-center rounded-4xl border border-outline/10 bg-white p-8 text-center">
                                <span className="text-5xl font-bold text-primary">
                                    93%
                                </span>
                                <span className="mt-2 text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                                    Auto-Approvals
                                </span>
                            </article>
                            <article className="flex flex-col items-center justify-center rounded-4xl border border-outline/10 bg-white p-8 text-center">
                                <span className="text-5xl font-bold text-primary">
                                    95%
                                </span>
                                <span className="mt-2 text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                                    faster decisions
                                </span>
                            </article>
                        </div>
                        <div className="flex flex-col justify-center gap-6 rounded-4xl border border-outline/10 bg-white p-8">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined mt-0.5 text-primary">
                                    verified_user
                                </span>
                                <div>
                                    <h3 className="font-semibold text-primary">
                                        Auditable
                                    </h3>
                                    <p className="mt-1 text-sm text-on-surface-variant">
                                        &amp; compliant by design
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined mt-0.5 text-primary">
                                    handshake
                                </span>
                                <div>
                                    <h3 className="font-semibold text-primary">
                                        Trusted
                                    </h3>
                                    <p className="mt-1 text-sm text-on-surface-variant">
                                        by providers and payers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="benchmarking"
                className="mx-auto max-w-7xl scroll-mt-28 px-8 py-20"
            >
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                        Benchmarking That Proves It
                    </h2>
                    <p className="mt-4 text-lg text-on-surface-variant">
                        Agentic AI Reduces Costs, Improves Speed, and Builds
                        Provider Trust
                    </p>
                </div>
                <BenchmarkChart />
                <div className="mt-10 flex justify-center">
                    <Button href="#whitepaper-form" size="lg">
                        Get Access to White Paper
                    </Button>
                </div>
            </section>

            <section
                id="whitepaper-form"
                className="border-t border-outline/10 bg-surface-container-low px-8 py-20"
            >
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">
                        Ready to Transform Prior Authorization for your Health
                        Plan?
                    </h2>
                    <p className="mt-4 text-center text-on-surface-variant">
                        Request the full whitepaper here:
                    </p>
                    <form
                        className="mt-10 space-y-6 rounded-4xl border border-outline/10 bg-surface-container-lowest p-8"
                        action="#"
                        method="post"
                    >
                        <div className="space-y-2">
                            <label
                                className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                htmlFor="wp-name"
                            >
                                Name
                            </label>
                            <input
                                id="wp-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name"
                                className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                htmlFor="wp-email"
                            >
                                Email address
                            </label>
                            <input
                                id="wp-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@website.com"
                                className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                htmlFor="wp-org"
                            >
                                Organization (Optional)
                            </label>
                            <input
                                id="wp-org"
                                name="organization"
                                type="text"
                                autoComplete="organization"
                                placeholder="Health plan or organization"
                                className="w-full rounded-2xl border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full py-4 text-sm font-semibold active:scale-95"
                            size="lg"
                        >
                            Get Access to White Paper
                        </Button>
                    </form>
                </div>
            </section>

            <TrustBar />
        </main>
    );
}
