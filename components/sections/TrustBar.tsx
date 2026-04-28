import Image from "next/image";
import Link from "next/link";

const trustedBy = [
    {
        title: "Mayo Clinic",
        url: "https://www.mayoclinic.org/",
        logo: "/mayo-clinic.png",
    },
    {
        title: "Eli Lilly",
        url: "https://www.elililly.com/",
        logo: "/elililly.png",
    },
    {
        title: "MIT",
        url: "https://www.mit.edu/",
        logo: "/mit.png",
    },
];

export function TrustBar() {
    return (
        <section className="border-y border-outline-variant/20 bg-surface-container-lowest py-16">
            <div className="mx-auto max-w-7xl px-8">
                <p className="mb-10 text-center text-xs font-medium tracking-[0.2em] text-on-surface-variant uppercase">
                    Trusted by Global Healthcare Leaders
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0 md:gap-24">
                    {trustedBy.map(({ title, url, logo }) => (
                        <Link
                            key={title}
                            href={url}
                            className="text-xl font-semibold tracking-tight md:text-2xl"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <Image
                                src={logo}
                                alt={title}
                                width={200}
                                height={200}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
