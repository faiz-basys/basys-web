"use client";

import { BlogArchiveExpandable } from "@/components/blog/BlogArchiveExpandable";
import { BlogFeaturedGrid } from "@/components/blog/BlogFeaturedGrid";
import { Button } from "@/components/ui/Button";
import {
    BLOG_FEATURED_COUNT,
    BLOG_FILTER_OPTIONS,
    filterBlogByTab,
    type BlogFilterTab,
    type BlogItem,
} from "@/lib/blog/blogItems";
import { useState } from "react";

type BlogRoomContentProps = {
    items: BlogItem[];
};

export function BlogRoomContent({ items }: BlogRoomContentProps) {
    const [tab, setTab] = useState<BlogFilterTab>("all");
    const filtered = filterBlogByTab(items, tab);
    const featured = filtered.slice(0, BLOG_FEATURED_COUNT);
    const archived = filtered.slice(BLOG_FEATURED_COUNT);

    return (
        <>
            <div className="mb-8 flex flex-wrap gap-4 border-b border-outline-variant pb-4">
                {BLOG_FILTER_OPTIONS.map(({ id, label }) =>
                    id === tab ? (
                        <Button key={id} type="button" onClick={() => setTab(id)}>
                            {label}
                        </Button>
                    ) : (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setTab(id)}
                            className="rounded-pill border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
                        >
                            {label}
                        </button>
                    ),
                )}
            </div>

            {filtered.length === 0 ? (
                <p className="py-16 text-center text-secondary">
                    No posts match this filter yet.
                </p>
            ) : (
                <>
                    <BlogFeaturedGrid items={featured} />
                    <BlogArchiveExpandable key={tab} items={archived} />
                </>
            )}
        </>
    );
}
