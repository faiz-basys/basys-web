import { Button } from "@/components/ui/Button";

export default function BlogPage() {
    return (
        <main className="mx-auto max-w-7xl px-8 pt-32 pb-24">
            <header className="mb-16">
                <div className="max-w-2xl">
                    <h1 className="mb-4 text-5xl font-bold text-primary">
                        Thought Leadership
                    </h1>
                    <p className="text-lg text-on-surface-variant">
                        Insights at the intersection of agentic AI, healthcare
                        policy, and the future of clinical governance.
                    </p>
                </div>
            </header>

            <section className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-wrap gap-3">
                    <Button className="px-6 py-2">All articles</Button>
                    <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-2 text-sm font-semibold text-on-surface transition-colors hover:border-primary">
                        AI in Healthcare
                    </button>
                    <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-2 text-sm font-semibold text-on-surface transition-colors hover:border-primary">
                        Regulatory
                    </button>
                    <button className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-2 text-sm font-semibold text-on-surface transition-colors hover:border-primary">
                        Trends
                    </button>
                </div>

                <div className="relative w-full md:w-80">
                    <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search insights..."
                        className="w-full rounded-pill border border-outline-variant bg-surface-container-lowest py-3 pr-4 pl-12 text-sm transition-all focus:border-primary focus:ring-0"
                    />
                </div>
            </section>

            <div className="grid grid-cols-12 gap-5">
                <article className="group col-span-12 cursor-pointer lg:col-span-8">
                    <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest md:flex-row">
                        <div className="h-64 overflow-hidden md:h-auto md:w-1/2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbyxbVtfvPv1H1DhTAtZclQD5v3fPdlicEtCd8P8H9eKxAYvbVBsnRTmWVaoG9tDbHUzme42j9us4e91tuL-D3uZ_DDTYJ4ixXdKFJ_kHF2HSiRGa-uJZ4WtIAykC8vV5zoHkM4YsI_zCzpN9PFW9jZ8ecwFe2jBuA7ucP8bo-f1iyTY-zQJqEr8ezmRdpOWQBgXzxnJZKr3NhzW0LOh3ls-AuYeU1hZSUOmJRYUbdCh9qHwDrM-w-YGazwK8Kmu_DKxhPJG5D94"
                                alt="Digital medical diagnostic interface with neural pathways."
                            />
                        </div>

                        <div className="flex flex-col justify-between p-10 md:w-1/2">
                            <div>
                                <span className="mb-4 block text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                                    AI in Healthcare
                                </span>
                                <h2 className="mb-4 text-3xl leading-tight font-semibold text-primary group-hover:underline">
                                    The Rise of Autonomous Clinical Agents in
                                    Prior Authorization
                                </h2>
                                <p className="line-clamp-3 text-sm text-on-surface-variant">
                                    How basys.ai is leveraging decentralized
                                    reasoning models to automate the most
                                    complex bottlenecks in modern healthcare
                                    administration.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-pill bg-surface-container">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="h-full w-full rounded-pill object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4BQRqmaDZlPXvxjyzUoGnBSQm8sPAS3bGNcxmcGJ0XpIFhd-B6NIsEM4cB9nDZD21LYZa1yc9GtIy9ittxZQhau3bhqoL--jRod630o8M-CWonOTr5ozjWWqlK1x42LBFwxrZdNpQC5147IFtk5aGpXd_vmKGlpjlmtJsmwFJVAATmpBQHolowGGvInKF6exLZLQF4lqczGh2FbZ4sukBE2QD67LvTST8N_Hxyp9zXimH1YhLYY48YMQ1TunbjRm8RY-jFFbbVKY"
                                        alt="Portrait of Dr. Sarah Chen."
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-primary">
                                        Dr. Sarah Chen
                                    </p>
                                    <p className="text-xs text-on-tertiary-container">
                                        Chief Technology Officer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="group col-span-12 cursor-pointer md:col-span-6 lg:col-span-4">
                    <div className="flex h-full flex-col rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-8">
                        <span className="mb-6 block text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                            Regulatory
                        </span>
                        <h3 className="mb-4 text-2xl font-semibold text-primary group-hover:underline">
                            Navigating the EU AI Act: A Guide for US Payers
                        </h3>
                        <p className="mb-8 flex-grow text-sm text-on-surface-variant">
                            A comprehensive breakdown of compliance requirements
                            for agentic systems in global clinical markets.
                        </p>
                        <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                            <span className="text-xs text-on-tertiary-container">
                                8 min read
                            </span>
                            <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </article>

                <article className="group col-span-12 cursor-pointer md:col-span-6 lg:col-span-4">
                    <div className="flex h-full flex-col rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-8">
                        <span className="mb-6 block text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                            Trends
                        </span>
                        <h3 className="mb-4 text-2xl font-semibold text-primary group-hover:underline">
                            The Shift from LLMs to LAMs in Clinical Ops
                        </h3>
                        <p className="mb-8 flex-grow text-sm text-on-surface-variant">
                            Why Large Action Models are the necessary evolution
                            for true healthcare autonomy in 2025.
                        </p>
                        <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                            <span className="text-xs text-on-tertiary-container">
                                12 min read
                            </span>
                            <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </article>

                <article className="group relative col-span-12 cursor-pointer overflow-hidden rounded-[2rem] lg:col-span-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvq2k3iHDiC3qUU3gOxScquhHowvz1uwFC6ZKi5F5dOZnbtCiGZcMK-r0hpqN1-hiwNbnbKmgmia5tnRuXESV59G40rbXKEBdCLK4kQX0PdNKH7EgLrM44c_ELVOFwI_mpZkU2pu8uk0PQ9LvfBXwMgtsfXB9IIIHxuOYesT5Su4SVYgIwhNX3xov-_C5knIvjKyCx9iM6bWRAeF0zeXrnLnBxVhSaxda2SVXjzXCYcgIN6ZJskPO-jiGjQ4eq8tKdep_ncHRZzso"
                        alt="Abstract geometry representing data security."
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-10 text-white">
                        <span className="mb-4 block text-xs font-semibold tracking-widest text-white/70 uppercase">
                            Regulatory
                        </span>
                        <h2 className="mb-4 max-w-xl text-3xl font-semibold">
                            Zero-Trust Agent Architectures: Building Privacy
                            into the Core
                        </h2>
                        <div className="flex items-center gap-6">
                            <span className="text-xs text-white/60">
                                May 14, 2024
                            </span>
                            <span className="text-xs text-white/60">
                                Research Paper
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <div className="mt-20 flex justify-center">
                <button className="flex items-center gap-2 rounded-pill border border-primary px-12 py-4 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary active:scale-95">
                    Load more insights
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </button>
            </div>
        </main>
    );
}
