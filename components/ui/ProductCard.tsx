import Link from "next/link";
import Image from "next/image";

type ProductCardTone = "light" | "dark";

type ProductCardProps = {
    icon: string;
    title: string;
    description: string;
    ctaLabel: string;
    href?: string;
    tone?: ProductCardTone;
    className?: string;
    previewImageUrl?: string;
    previewImageAlt?: string;
    /** When true, CTA is non-interactive (e.g. roadmap / coming soon). */
    comingSoon?: boolean;
};

export function ProductCard({
    icon,
    title,
    description,
    ctaLabel,
    href = "#",
    tone = "light",
    className = "",
    previewImageUrl,
    previewImageAlt = "",
    comingSoon = false,
}: ProductCardProps) {
    const isDark = tone === "dark";

    return (
        <article
            className={`group flex flex-col rounded-4xl border p-10 transition-all ${isDark ? "border-transparent bg-primary text-on-primary hover:bg-zinc-900" : "border-outline/10 bg-surface-container-lowest text-on-surface hover:border-primary/20"} ${className}`}
        >
            <div
                className={`mb-8 flex h-12 w-12 items-center justify-center rounded-pill ${isDark ? "bg-gray-800/80" : "bg-primary/5"}`}
            >
                <span
                    className={`material-symbols-outlined ${isDark ? "text-white" : "text-primary"}`}
                >
                    {icon}
                </span>
            </div>

            <h3
                className={`mb-4 text-3xl font-semibold ${isDark ? "text-white" : "text-primary"}`}
            >
                {title}
            </h3>
            <p
                className={`text-sm leading-6 ${isDark ? "text-on-primary-container" : "text-secondary"}`}
            >
                {description}
            </p>

            <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-6">
                    {comingSoon ? (
                        <span
                            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider ${isDark ? "text-white/90" : "text-on-surface-variant"}`}
                        >
                            {ctaLabel}
                            <span className="material-symbols-outlined text-sm">
                                schedule
                            </span>
                        </span>
                    ) : (
                        <Link
                            href={href ?? "/"}
                            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider transition-all group-hover:gap-4 ${isDark ? "text-white" : "text-primary"}`}
                        >
                            {ctaLabel}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </Link>
                    )}

                    {previewImageUrl ? (
                        <div className="hidden h-32 w-64 overflow-hidden rounded-2xl border border-outline/5 bg-surface-container lg:block">
                            { }
                            <Image
                                className="h-full w-full object-cover opacity-60"
                                src={previewImageUrl}
                                alt={previewImageAlt}
                                width={256}
                                height={100}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
