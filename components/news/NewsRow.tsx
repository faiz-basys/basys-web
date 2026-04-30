import { formatNewsDate, type NewsItem } from "@/lib/news/newsItems";
import Link from "next/link";

export function NewsRow({ item }: { item: NewsItem }) {
    const isBasys = item.kind === "basys";
    const hasLink = isBasys
        ? item.slug.length > 0
        : item.url.length > 0;
    const href = isBasys ? `/news/${item.slug}` : item.url;

    return (
        <article className="rounded-4xl border border-outline-variant bg-surface-container-lowest p-6 transition-colors hover:border-primary md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
                <span
                    className={
                        isBasys
                            ? "rounded-pill bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase"
                            : "rounded-pill bg-surface-container-high px-3 py-1 text-xs font-semibold tracking-wider text-on-surface-variant uppercase"
                    }
                >
                    {isBasys ? "Basys news" : "Media coverage"}
                </span>
                <time
                    className="text-xs font-medium text-outline"
                    dateTime={item.date}
                >
                    {formatNewsDate(item.date)}
                </time>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-primary md:text-2xl">
                {item.title}
            </h2>
            {item.description ? (
                <p className="mb-4 max-w-3xl text-sm text-secondary">
                    {item.description}
                </p>
            ) : null}
            {hasLink ? (
                isBasys ? (
                    <Link
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                        Read more
                        <span className="material-symbols-outlined text-base">
                            arrow_forward
                        </span>
                    </Link>
                ) : (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                        View article
                        <span className="material-symbols-outlined text-base">
                            open_in_new
                        </span>
                    </a>
                )
            ) : (
                <span className="text-xs font-medium text-outline">
                    {isBasys
                        ? "Detail page — add a slug when ready"
                        : "External link — add URL when ready"}
                </span>
            )}
        </article>
    );
}
