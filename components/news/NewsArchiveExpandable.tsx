"use client";

import { NewsRow } from "@/components/news/NewsRow";
import type { NewsItem } from "@/lib/news/newsItems";
import { useState } from "react";

export function NewsArchiveExpandable({ items }: { items: NewsItem[] }) {
    const [showAll, setShowAll] = useState(false);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="mt-10 border-t border-outline-variant pt-10">
            {!showAll ? (
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest px-10 py-4 text-xs font-semibold text-primary transition-colors hover:bg-surface-container"
                    >
                        SHOW MORE POSTS
                        <span className="material-symbols-outlined text-lg">
                            expand_more
                        </span>
                    </button>
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {items.map((item) => (
                        <NewsRow
                            key={`${item.kind}-${item.date}-${item.title}`}
                            item={item}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
