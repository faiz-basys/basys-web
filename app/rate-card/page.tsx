import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Rate Card | basys.ai",
    description:
        "Transparent, market-aligned pricing for AI, data science, and healthcare technology services. Effective Apr 1, 2026 - Mar 31, 2027.",
};

const ROLE_ROWS = [
    {
        role: "Solutions Lead",
        description: "Architecture, solution design, stakeholder alignment",
        qualification: "10+ years, domain expertise",
        rate: "$300 - $350",
    },
    {
        role: "Senior Data Scientist",
        description: "ML models, analytics, pipelines",
        qualification: "6-10 years AI/ML experience",
        rate: "$200 - $250",
    },
    {
        role: "Specialized Data Scientist",
        description: "Domain-specific analytics",
        qualification: "Advanced degree + domain expertise",
        rate: "$250 - $300",
    },
    {
        role: "Blended Rate (Senior DS)",
        description: "Weighted average for budgeting",
        qualification: "Mixed expertise levels",
        rate: "$250",
    },
    {
        role: "Amber Nigam",
        description: "Solutions Lead (Named Resource)",
        qualification: "Aligned with Solutions Lead LCAT",
        rate: "$350",
    },
] as const;

const OPTION_YEAR_ROWS = [
    {
        resource: "Amber",
        role: "Solutions Lead",
        optionYear: "Year 6",
        hours: "400 hrs",
        rate: "$350",
        total: "$140,000",
    },
    {
        resource: "Amber",
        role: "Solutions Lead",
        optionYear: "Year 7",
        hours: "400 hrs",
        rate: "$350",
        total: "$140,000",
    },
] as const;

export default function RateCardPage() {
    return (
        <main className="pt-20">
            <section
                className="relative overflow-hidden border-b border-outline-variant bg-linear-to-b from-surface-container-lowest via-background to-surface-container-low"
                aria-labelledby="rate-card-heading"
            >
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    aria-hidden
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, rgb(0 0 0 / 0.03) 1px, transparent 1px),
                            linear-gradient(rgb(0 0 0 / 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: "48px 48px",
                    }}
                />
                <div className="relative mx-auto max-w-5xl px-8 py-16 md:py-20 lg:py-24">
                    <Badge icon="receipt_long" title="Basys.ai commercial" />
                    <h1
                        id="rate-card-heading"
                        className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-primary md:text-5xl"
                    >
                        Commercial Technical Rate Card
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                        Transparent, market-aligned pricing for AI, data
                        science, and healthcare technology services
                    </p>
                    <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest/80 p-4 backdrop-blur-sm">
                            <dt className="text-xs font-semibold tracking-widest text-outline uppercase">
                                Effective period
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-primary">
                                Apr 1, 2026 - Mar 31, 2027
                            </dd>
                        </div>
                        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest/80 p-4 backdrop-blur-sm">
                            <dt className="text-xs font-semibold tracking-widest text-outline uppercase">
                                Last updated
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-primary">
                                March 2026
                            </dd>
                        </div>
                        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest/80 p-4 backdrop-blur-sm">
                            <dt className="text-xs font-semibold tracking-widest text-outline uppercase">
                                Version
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-primary">
                                v1.0
                            </dd>
                        </div>
                        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest/80 p-4 backdrop-blur-sm">
                            <dt className="text-xs font-semibold tracking-widest text-outline uppercase">
                                Public URL
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-primary">
                                basys.ai/rate-card
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>

            <div className="mx-auto max-w-5xl space-y-16 px-8 py-16 md:py-20">
                <section aria-labelledby="role-pricing-heading">
                    <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <h2
                            id="role-pricing-heading"
                            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
                        >
                            Role-based pricing
                        </h2>
                        <p className="max-w-xl text-sm text-on-surface-variant">
                            Hourly rates (USD) by labor category and named
                            resource where applicable.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                                <caption className="sr-only">
                                    Role-based hourly rates in US dollars
                                </caption>
                                <thead>
                                    <tr className="border-b border-outline-variant bg-surface-container-low">
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Role / LCAT
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Experience / qualification
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 text-right font-semibold text-primary"
                                        >
                                            Hourly rate (USD)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ROLE_ROWS.map((row, i) => (
                                        <tr
                                            key={`${row.role}-${i}`}
                                            className={
                                                i % 2 === 0
                                                    ? "bg-surface-container-lowest"
                                                    : "bg-surface-container-low/50"
                                            }
                                        >
                                            <th
                                                scope="row"
                                                className="px-5 py-4 font-medium text-primary"
                                            >
                                                {row.role}
                                            </th>
                                            <td className="px-5 py-4 text-on-surface-variant">
                                                {row.description}
                                            </td>
                                            <td className="px-5 py-4 text-on-surface-variant">
                                                {row.qualification}
                                            </td>
                                            <td className="px-5 py-4 text-right font-semibold tabular-nums text-primary">
                                                {row.rate}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="option-year-heading">
                    <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <h2
                            id="option-year-heading"
                            className="text-2xl font-bold tracking-tight text-primary md:text-3xl"
                        >
                            Option year allocation
                        </h2>
                        <p className="max-w-xl text-sm text-on-surface-variant">
                            Planned hours and totals by option year for named
                            resources.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                                <caption className="sr-only">
                                    Option year hours and dollar totals
                                </caption>
                                <thead>
                                    <tr className="border-b border-outline-variant bg-surface-container-low">
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Resource
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Option year
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 font-semibold text-primary"
                                        >
                                            Hours
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 text-right font-semibold text-primary"
                                        >
                                            Rate
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-4 text-right font-semibold text-primary"
                                        >
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {OPTION_YEAR_ROWS.map((row, i) => (
                                        <tr
                                            key={row.optionYear}
                                            className={
                                                i % 2 === 0
                                                    ? "bg-surface-container-lowest"
                                                    : "bg-surface-container-low/50"
                                            }
                                        >
                                            <td className="px-5 py-4 font-medium text-primary">
                                                {row.resource}
                                            </td>
                                            <td className="px-5 py-4 text-on-surface-variant">
                                                {row.role}
                                            </td>
                                            <td className="px-5 py-4 text-on-surface-variant">
                                                {row.optionYear}
                                            </td>
                                            <td className="px-5 py-4 tabular-nums text-on-surface-variant">
                                                {row.hours}
                                            </td>
                                            <td className="px-5 py-4 text-right font-medium tabular-nums text-primary">
                                                {row.rate}
                                            </td>
                                            <td className="px-5 py-4 text-right font-semibold tabular-nums text-primary">
                                                {row.total}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <div className="grid gap-8 lg:grid-cols-2">
                    <section
                        className="rounded-3xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm"
                        aria-labelledby="rationale-heading"
                    >
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-container-high">
                            <span
                                className="material-symbols-outlined text-primary"
                                aria-hidden
                            >
                                balance
                            </span>
                        </div>
                        <h2
                            id="rationale-heading"
                            className="text-xl font-bold text-primary"
                        >
                            Pricing rationale
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                            Rates are based on market benchmarks, internal
                            commercial pricing, and role-specific expertise.
                        </p>
                    </section>
                    <section
                        className="rounded-3xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm"
                        aria-labelledby="compliance-heading"
                    >
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-container-high">
                            <span
                                className="material-symbols-outlined text-primary"
                                aria-hidden
                            >
                                verified_user
                            </span>
                        </div>
                        <h2
                            id="compliance-heading"
                            className="text-xl font-bold text-primary"
                        >
                            Compliance statement
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                            This rate card is publicly accessible and maintained
                            with a defined validity period.
                        </p>
                    </section>
                </div>

                <section
                    className="rounded-3xl border border-dashed border-outline-variant bg-surface-container-low/40 p-8 md:p-10"
                    aria-labelledby="assumptions-heading"
                >
                    <h2
                        id="assumptions-heading"
                        className="text-xl font-bold text-primary"
                    >
                        Assumptions
                    </h2>
                    <ul className="mt-6 space-y-4 text-sm text-on-surface-variant">
                        <li className="flex gap-3">
                            <span
                                className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-outline"
                                aria-hidden
                            >
                                flight_takeoff
                            </span>
                            <span>
                                Rates exclude travel and third-party costs
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span
                                className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-outline"
                                aria-hidden
                            >
                                schedule
                            </span>
                            <span>Minimum billing unit: 1 hour</span>
                        </li>
                        <li className="flex gap-3">
                            <span
                                className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-outline"
                                aria-hidden
                            >
                                percent
                            </span>
                            <span>Discounts may apply based on volume</span>
                        </li>
                    </ul>
                </section>

                <p className="border-t border-outline-variant pt-10 text-center text-xs text-outline">
                    Questions?{" "}
                    <a
                        href="mailto:communication@basys.ai"
                        className="font-medium text-primary underline-offset-2 hover:underline"
                    >
                        communication@basys.ai
                    </a>
                </p>
            </div>
        </main>
    );
}
