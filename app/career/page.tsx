import { Button } from "@/components/ui/Button";

const jobRoles = [
    {
        title: "Senior AI Research Scientist",
        location: "Cambridge, MA / Remote",
        type: "Full-time",
        icon: "smart_toy",
        iconBgClass: "bg-primary",
    },
    {
        title: "Clinical Lead (Oncology)",
        location: "Remote (US)",
        type: "Full-time",
        icon: "stethoscope",
        iconBgClass: "bg-on-tertiary-fixed-variant",
    },
    {
        title: "MLOps Engineer",
        location: "Hybrid / Cambridge",
        type: "Full-time",
        icon: "database",
        iconBgClass: "bg-primary",
    },
];

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
                            clinical intelligence
                        </span>
                        .
                    </h1>

                    <p className="max-w-lg text-lg text-on-surface-variant">
                        We are building agentic AI systems that empower
                        clinicians and streamline global health systems. Join a
                        team where precision meets purpose.
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg" className="uppercase">
                            View Open Roles
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="uppercase"
                        >
                            Our Culture
                        </Button>
                    </div>
                </div>

                <div className="group relative">
                    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-surface-container-high to-transparent opacity-50 blur-2xl" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Our Team"
                        className="relative aspect-[4/3] w-full rounded-[2rem] border border-outline/10 object-cover shadow-sm"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb6J_JQ6MXzXR3XoOL4XXIAFVuBj0KQ6JEIgP3rI9YOhtTNlx1G2n8wxIUWkueDK3YZV7DWwSfAf890IK5WZS0vrH-Qr6poqQbmJviZlS8QzO-OUMRBGYAxT_txtvsIpUIbhe29XUoIhec62Jsm-DsAoE5E2ZYo1bfRKwpdhwwQG4JBfEgw0zY6piD6YOTITuz5RINwAyKTNQR4Y7nLSaCzs1MaLnGztZ2j5OWWxlGOyYyqs29F7JV6WxN_xwtTSHCZ-u02vQzHuk"
                    />
                </div>
            </section>

            <section className="mb-32">
                <h2 className="mb-12 text-center text-3xl font-semibold">
                    Why basys.ai?
                </h2>
                <div className="grid h-auto grid-cols-1 gap-5 md:h-[600px] md:grid-cols-4">
                    <article className="flex flex-col justify-between rounded-[2rem] border border-outline/10 bg-surface-container-lowest p-8 md:col-span-2 md:row-span-2">
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Clinical Tech"
                            className="mt-6 h-48 w-full rounded-[1rem] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQYQtgW-smL_vVLhz4OgBbWEuhVGY3rt10Fmh-_GtRDnONV1QIyRJVATxvMzvVUEYOgyFTzjapY94AzfIm_4qcL2D8QyYUtmq1LcyIwN_Lia9Xj9LWEZBir426yFMrqF5e9LpIi8YimYIfRUKGa09xbvAM1WiRzholUSL3pC1Ml88qrBmeJYE8lcq4jXZtoyOGdvZZlL33_R0VDh66cHft03foAJAkf0jfwqYksANoj-ID3WBNmY1nJrCejeOmC2Wc9ifx70V9gHk"
                        />
                    </article>

                    <article className="flex flex-col justify-center rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-2">
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                            Autonomous Growth
                        </h3>
                        <p className="text-sm opacity-80">
                            We operate like our agents: autonomous, efficient,
                            and constantly learning. We provide the resources
                            for you to lead your own initiatives from day one.
                        </p>
                    </article>

                    <article className="flex flex-col items-center justify-center rounded-[2rem] bg-secondary-container p-8 text-center md:col-span-1">
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

                    <article className="flex flex-col items-center justify-center rounded-[2rem] bg-surface-container-highest p-8 text-center md:col-span-1">
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
                            Help us build the next generation of healthcare
                            infrastructure.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold">
                            All Roles
                        </button>
                        <button className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold transition-colors hover:bg-surface-container-high">
                            AI &amp; Engineering
                        </button>
                        <button className="rounded-pill bg-surface-container px-4 py-2 text-xs font-semibold transition-colors hover:bg-surface-container-high">
                            Clinical Operations
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {jobRoles.map((role) => (
                        <article
                            key={role.title}
                            className="group flex flex-col items-start justify-between rounded-[2rem] border border-outline/5 bg-surface-container-low p-6 transition-all hover:bg-white md:flex-row md:items-center"
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
                                <button className="flex h-10 w-10 items-center justify-center rounded-pill border border-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-on-surface-variant">
                        Don&apos;t see a role that fits?{" "}
                        <a
                            href="#"
                            className="font-semibold text-primary underline"
                        >
                            Send us a general application
                        </a>
                        .
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-[2rem] bg-secondary-container p-8 text-center md:p-32">
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
                            className="flex-grow rounded-pill border-none px-6 py-3 text-sm focus:ring-2 focus:ring-primary"
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
