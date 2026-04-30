import Image from "next/image";
import Link from "next/link";

const footerGroups: { title: string; links: { title: string; url: string }[] }[] =
    [
        {
            title: "Platform",
            links: [
                { title: "Products", url: "/products" },
                { title: "Payer", url: "/payer" },
                { title: "Provider", url: "/provider" },
                { title: "Technology", url: "/technology" },
            ],
        },
        {
            title: "Company",
            links: [
                { title: "About Us", url: "/about-us" },
                { title: "News", url: "/news" },
                { title: "Career", url: "/career" },
                { title: "Blog", url: "/blog" },
            ],
        },
        {
            title: "Resources",
            links: [
                { title: "Contact", url: "/contact-us" },
                { title: "Rate Card", url: "/rate-card" },
            ],
        },
    ];

const SUPPORT_EMAIL = "communication@basys.ai";

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-outline-variant/60 bg-surface-container-low">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.4]"
                aria-hidden
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px),
                        linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "56px 56px",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-8 pt-16 pb-10 md:pt-20 md:pb-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="Basys"
                                width={112}
                                height={112}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-surface-variant">
                            Enterprise-grade AI agents for prior authorization and
                            clinical workflows—built for health plans and provider
                            networks.
                        </p>
                        <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-on-surface-variant"
                        >
                            <span
                                className="material-symbols-outlined text-[1.25rem] text-outline"
                                aria-hidden
                            >
                                mail
                            </span>
                            {SUPPORT_EMAIL}
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
                        {footerGroups.map((group) => (
                            <div key={group.title}>
                                <h2 className="text-xs font-semibold tracking-[0.2em] text-outline uppercase">
                                    {group.title}
                                </h2>
                                <ul className="mt-5 space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.url}
                                                className="text-sm font-medium text-on-surface transition-colors hover:text-primary"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-outline-variant/50 pt-8 md:flex-row md:items-center">
                    <p className="text-xs text-on-surface-variant">
                        © {new Date().getFullYear()} basys.ai. All rights reserved.
                    </p>
                    <nav
                        className="flex flex-wrap gap-x-6 gap-y-2"
                        aria-label="Footer shortcuts"
                    >
                        <Link
                            href="/"
                            className="text-xs font-medium text-on-surface-variant transition-colors hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-xs font-medium text-on-surface-variant transition-colors hover:text-primary"
                        >
                            Request a Demo
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
