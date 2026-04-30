"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkItem = {
    title: string;
    url: string;
    showInNavbar?: boolean;
};

const navLinks: NavLinkItem[] = [
    {
        title: "Home",
        url: "/",
        showInNavbar: true,
    },
    {
        title: "Products",
        url: "/products",
        showInNavbar: true,
    },
    {
        title: "Payer",
        url: "/payer",
        showInNavbar: true,
    },
    {
        title: "Provider",
        url: "/provider",
        showInNavbar: true,
    },
    {
        title: "Technology",
        url: "/technology",
        showInNavbar: true,
    },
    {
        title: "About Us",
        url: "/about-us",
    },
    {
        title: "News",
        url: "/news",
    },
    {
        title: "Career",
        url: "/career",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Contact Us",
        url: "/contact-us",
    },
];

const primaryNavLinks = navLinks.filter((link) => link.showInNavbar === true);
const moreNavLinks = navLinks.filter((link) => link.showInNavbar !== true);

const linkClassName = (active: boolean) =>
    `text-sm font-medium tracking-tight transition-colors hover:text-slate-900 ${
        active ? "font-bold text-slate-900" : "text-slate-500"
    }`;

export function Navbar() {
    const pathname = usePathname();
    const isActive = (url: string) => pathname === url;
    const moreHasActive = moreNavLinks.some((link) => isActive(link.url));

    return (
        <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between border-b border-slate-100 bg-white/90 px-8 backdrop-blur-md">
            <div className="">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Basys Logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
                {primaryNavLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.url}
                        className={linkClassName(isActive(link.url))}
                    >
                        {link.title}
                    </Link>
                ))}
                {moreNavLinks.length > 0 ? (
                    <div className="relative group">
                        <button
                            type="button"
                            aria-haspopup="menu"
                            className={`inline-flex cursor-pointer items-center gap-0.5 border-0 bg-transparent p-0 ${linkClassName(moreHasActive)}`}
                        >
                            More
                            <span
                                className="material-symbols-outlined text-[1.125rem] transition-transform group-hover:rotate-180"
                                aria-hidden
                            >
                                expand_more
                            </span>
                        </button>
                        <div
                            className="absolute right-0 top-full z-50 min-w-48 pt-2 opacity-0 invisible transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100"
                            role="menu"
                            aria-label="More navigation"
                        >
                            <div className="rounded-lg border border-slate-100 bg-white py-2 shadow-lg">
                                {moreNavLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.url}
                                        role="menuitem"
                                        className={`block px-4 py-2.5 text-sm font-medium tracking-tight transition-colors hover:bg-slate-50 hover:text-slate-900 ${isActive(link.url) ? "bg-slate-50 font-bold text-slate-900" : "text-slate-600"}`}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </nav>
            <Button href="/contact-us">Request a Demo</Button>
        </header>
    );
}
