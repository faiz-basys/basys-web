import { formatBlogDate, type BlogItem } from "@/lib/blog/blogItems";
import Link from "next/link";

function linkTarget(item: BlogItem): {
    href: string;
    isBasys: boolean;
    hasLink: boolean;
} {
    const isBasys = item.kind === "basys";
    const hasLink = isBasys
        ? item.slug.length > 0
        : item.url.length > 0;
    const href = isBasys ? `/blog/${item.slug}` : item.url;
    return { href, isBasys, hasLink };
}

function FeaturedCta({
    item,
    label,
    variant = "default",
}: {
    item: BlogItem;
    label: string;
    variant?: "default" | "onPrimary";
}) {
    const { href, isBasys, hasLink } = linkTarget(item);
    const idle =
        variant === "onPrimary"
            ? "text-xs font-medium text-on-primary/70"
            : "text-xs font-medium text-outline";
    const linkClass =
        variant === "onPrimary"
            ? "flex items-center gap-2 text-xs font-semibold text-on-primary"
            : "flex items-center gap-2 text-xs font-semibold text-primary";

    if (!hasLink) {
        return (
            <span className={idle}>
                {item.kind === "basys"
                    ? "Detail page — add a slug when ready"
                    : "External link — add URL when ready"}
            </span>
        );
    }
    if (isBasys) {
        return (
            <Link href={href} className={linkClass}>
                {label}
                <span className="material-symbols-outlined text-sm">
                    arrow_forward
                </span>
            </Link>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
        >
            {label}
            <span className="material-symbols-outlined text-sm">
                open_in_new
            </span>
        </a>
    );
}

function FeaturedCardC({ item }: { item: BlogItem }) {
    const { href, isBasys, hasLink } = linkTarget(item);
    const shellClass =
        "group col-span-12 rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-4";
    const interactive =
        "block cursor-pointer text-left no-underline transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none";

    const body = (
        <>
            <div className="mb-6 h-40 overflow-hidden rounded-2xl bg-linear-to-br from-surface-container-high to-surface-container">
                <div className="flex h-full w-full items-center justify-center">
                    <span
                        className="material-symbols-outlined text-5xl text-outline"
                        style={{ fontVariationSettings: '"FILL" 0' }}
                    >
                        menu_book
                    </span>
                </div>
            </div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-lg font-bold tracking-tight">
                    {item.kind === "basys"
                        ? item.author ?? "Basys.ai"
                        : item.author ?? "Partner"}
                </span>
                <span className="text-xs text-outline">• Insight</span>
            </div>
            <h4
                className={`mb-2 text-xl leading-tight font-semibold text-primary${hasLink ? " group-hover:underline" : ""}`}
            >
                {item.title}
            </h4>
            {item.description ? (
                <p className="mb-4 text-sm text-secondary">{item.description}</p>
            ) : null}
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-sm">link</span>
                {formatBlogDate(item.date)}
                {hasLink && isBasys ? (
                    <span className="material-symbols-outlined text-sm text-outline">
                        arrow_forward
                    </span>
                ) : null}
                {hasLink && !isBasys ? (
                    <span className="material-symbols-outlined text-sm text-outline">
                        open_in_new
                    </span>
                ) : null}
            </div>
        </>
    );

    if (!hasLink) {
        return <article className={shellClass}>{body}</article>;
    }
    if (isBasys) {
        return (
            <Link
                href={href}
                className={`${shellClass} ${interactive}`}
                aria-label={item.title}
            >
                {body}
            </Link>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${shellClass} ${interactive}`}
            aria-label={item.title}
        >
            {body}
        </a>
    );
}

export function BlogFeaturedGrid({ items }: { items: BlogItem[] }) {
    const [a, b, c, d, e] = [items[0], items[1], items[2], items[3], items[4]];

    if (!a) {
        return null;
    }

    const heroEyebrow = a.kind === "basys" ? "Basys blog" : "Partner coverage";

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Row 1: hero + side highlight */}
            <article className="group col-span-12 flex cursor-pointer flex-col justify-between rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-primary md:col-span-8">
                <div>
                    <div className="mb-6 flex items-start justify-between">
                        <span className="text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                            {heroEyebrow} — {formatBlogDate(a.date)}
                        </span>
                        <div className="flex h-8 w-24 items-center justify-center rounded bg-surface-container text-[10px] font-bold text-slate-400">
                            basys.ai
                        </div>
                    </div>
                    <h2 className="mb-4 text-3xl font-semibold text-primary group-hover:underline">
                        {a.title}
                    </h2>
                    {a.author ? (
                        <p className="mb-4 text-sm font-medium text-secondary">
                            {a.author}
                        </p>
                    ) : null}
                    {a.description ? (
                        <p className="mb-8 text-sm text-secondary">
                            {a.description}
                        </p>
                    ) : (
                        <p className="mb-8 text-sm text-secondary">
                            Ideas and deep dives on clinical AI, policy, and
                            operations from basys.ai.
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <FeaturedCta item={a} label="READ FULL STORY" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant">
                        <span className="material-symbols-outlined">
                            article
                        </span>
                    </div>
                </div>
            </article>

            {b ? (
                <article className="col-span-12 flex cursor-pointer flex-col justify-between rounded-4xl border border-transparent bg-surface-container p-8 transition-colors hover:bg-surface-container-high md:col-span-4">
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: '"FILL" 1' }}
                            >
                                {b.kind === "basys" ? "edit_note" : "verified"}
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-primary">
                                {b.kind === "basys"
                                    ? "FROM BASYS"
                                    : "RECOMMENDED READ"}
                            </span>
                        </div>
                        <h3 className="mb-4 text-2xl italic text-primary">
                            &quot;{b.title}&quot;
                        </h3>
                        {b.author ? (
                            <p className="text-xs font-semibold text-secondary">
                                {b.author}
                            </p>
                        ) : null}
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-xs font-semibold text-secondary">
                            {formatBlogDate(b.date)}
                        </span>
                        <FeaturedCta
                            item={b}
                            label={b.kind === "basys" ? "READ MORE" : "VIEW"}
                        />
                    </div>
                </article>
            ) : null}

            {/* Row 2: three distinct cards */}
            {c ? <FeaturedCardC item={c} /> : null}

            {d ? (
                <article className="col-span-12 rounded-4xl border border-outline-variant bg-surface-container-lowest p-8 transition-shadow hover:shadow-sm md:col-span-4">
                    <div className="mb-6 flex justify-between">
                        <span className="text-xs font-semibold tracking-widest text-on-tertiary-container uppercase">
                            {d.kind === "basys" ? "Update" : "Spotlight"}
                        </span>
                        <span className="text-xs text-outline">
                            {formatBlogDate(d.date)}
                        </span>
                    </div>
                    <h4 className="mb-4 text-2xl font-semibold text-primary">
                        {d.title}
                    </h4>
                    {d.author ? (
                        <p className="mb-3 text-sm font-medium text-secondary">
                            {d.author}
                        </p>
                    ) : null}
                    {d.description ? (
                        <p className="mb-8 text-sm text-secondary">
                            {d.description}
                        </p>
                    ) : (
                        <p className="mb-8 text-sm text-secondary">
                            Practical guidance for teams adopting autonomous
                            health AI.
                        </p>
                    )}
                    <div className="flex gap-4">
                        <FeaturedCta item={d} label="Read" />
                    </div>
                </article>
            ) : null}

            {e ? (
                <article className="col-span-12 flex flex-col justify-between rounded-4xl bg-primary p-8 text-on-primary md:col-span-4">
                    <div>
                        <div className="mb-6 inline-block rounded bg-on-primary/20 p-2">
                            <span className="material-symbols-outlined text-on-primary">
                                bolt
                            </span>
                        </div>
                        <h4 className="mb-4 text-2xl font-semibold text-on-primary">
                            {e.title}
                        </h4>
                        {e.author ? (
                            <p className="mb-2 text-sm font-medium text-on-primary/80">
                                {e.author}
                            </p>
                        ) : null}
                        {e.description ? (
                            <p className="text-sm text-on-primary/70">
                                {e.description}
                            </p>
                        ) : (
                            <p className="text-sm text-on-primary/70">
                                Stay current on basys.ai perspectives and industry
                                trends.
                            </p>
                        )}
                    </div>
                    <div className="mt-8">
                        <FeaturedCta
                            item={e}
                            label="OPEN"
                            variant="onPrimary"
                        />
                    </div>
                </article>
            ) : null}
        </div>
    );
}
