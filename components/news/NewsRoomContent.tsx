"use client";

import { NewsArchiveExpandable } from "@/components/news/NewsArchiveExpandable";
import { NewsFeaturedGrid } from "@/components/news/NewsFeaturedGrid";
import { Button } from "@/components/ui/Button";
import {
    filterNewsByTab,
    NEWS_FEATURED_COUNT,
    NEWS_FILTER_OPTIONS,
    type NewsFilterTab,
    type NewsItem,
} from "@/lib/news/newsItems";
import { useState } from "react";

type NewsRoomContentProps = {
    items: NewsItem[];
};

export function NewsRoomContent({ items }: NewsRoomContentProps) {
    const [tab, setTab] = useState<NewsFilterTab>("all");
    const filtered = filterNewsByTab(items, tab);
    const featured = filtered.slice(0, NEWS_FEATURED_COUNT);
    const archived = filtered.slice(NEWS_FEATURED_COUNT);

    return (
        <>
            <div className="mb-8 flex flex-wrap gap-4 border-b border-outline-variant pb-4">
                {NEWS_FILTER_OPTIONS.map(({ id, label }) =>
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
                    No stories match this filter yet.
                </p>
            ) : (
                <>
                    <NewsFeaturedGrid items={featured} />
                    <NewsArchiveExpandable key={tab} items={archived} />
                </>
            )}
        </>
    );
}
