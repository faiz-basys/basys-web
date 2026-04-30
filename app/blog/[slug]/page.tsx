import { basysBlogBodyBySlug } from "@/lib/blog/basysBlogBodies";
import {
    formatBlogDate,
    getAllBasysSlugsFromBlog,
    getBasysBlogBySlug,
} from "@/lib/blog/blogItems";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{ slug: string }>;
};

/** Only slugs returned by `generateStaticParams` resolve; others get 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllBasysSlugsFromBlog().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const item = getBasysBlogBySlug(slug);
    if (!item) {
        return { title: "Blog | basys.ai" };
    }
    return {
        title: `${item.title} | basys.ai`,
        description:
            item.description ??
            `Basys.ai blog: ${item.title.slice(0, 140)}${item.title.length > 140 ? "…" : ""}`,
    };
}

export default async function BasysBlogArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const item = getBasysBlogBySlug(slug);
    const fullBody = basysBlogBodyBySlug[slug];

    if (!item) {
        notFound();
    }

    return (
        <main className="mx-auto min-h-screen max-w-4xl px-8 pt-32 pb-16">
            <nav className="mb-10" aria-label="Breadcrumb">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors"
                >
                    <span
                        className="material-symbols-outlined text-lg"
                        aria-hidden
                    >
                        arrow_back
                    </span>
                    Blog
                </Link>
            </nav>

            <article>
                <header className="mb-10 border-b border-outline-variant pb-10">
                    <span className="mb-4 inline-block rounded-pill bg-surface-container-high px-4 py-2 text-xs font-semibold tracking-widest text-on-primary-container uppercase">
                        Basys blog
                    </span>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
                        {item.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-outline">
                        <time className="font-medium" dateTime={item.date}>
                            {formatBlogDate(item.date)}
                        </time>
                        {item.author ? (
                            <>
                                <span aria-hidden className="text-outline-variant">
                                    ·
                                </span>
                                <span className="font-medium text-secondary">
                                    {item.author}
                                </span>
                            </>
                        ) : null}
                    </div>
                </header>

                <div className="article-body">
                    {fullBody ?? (
                        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-secondary">
                            {item.description ? (
                                <p>{item.description}</p>
                            ) : null}
                            <p className="text-on-surface-variant">
                                Full article copy will be added here soon.
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </main>
    );
}
