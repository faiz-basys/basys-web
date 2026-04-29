import Image from "next/image";
import Link from "next/link";

const footerLinks = [
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

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-8 px-8 py-12 md:grid-cols-2">
                <div className="space-y-6">
                    <div className="mb-6">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Basys Logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>
                    <nav className="flex flex-wrap gap-x-8 gap-y-4">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                className="text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-950"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="md:text-right">
                    <p className="text-xs tracking-widest text-slate-500">
                        © 2026 basys.ai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
