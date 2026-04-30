export type NewsFilterTab = "all" | "press" | "media" | "corporate";

export type NewsFacet = "press" | "media" | "corporate";

export type NewsItemBasys = {
    kind: "basys";
    /** ISO date (YYYY-MM-DD) for ordering */
    date: string;
    title: string;
    description?: string;
    /** Route segment under /news/ — set when the detail page exists */
    slug: string;
    /** Override automatic tab assignment (press / media / corporate) */
    facets?: NewsFacet[];
};

export type NewsItemThirdParty = {
    kind: "thirdParty";
    date: string;
    title: string;
    description?: string;
    /** Full external URL — set when the piece is live */
    url: string;
    facets?: NewsFacet[];
};

export type NewsItem = NewsItemBasys | NewsItemThirdParty;

export const NEWS_FILTER_OPTIONS: { id: NewsFilterTab; label: string }[] = [
    { id: "all", label: "All Updates" },
    { id: "press", label: "Press Releases" },
    { id: "media", label: "Media Mentions" },
    { id: "corporate", label: "Corporate News" },
];

/** First N items (newest) use the multi-card layout; the rest go under “Show more”. */
export const NEWS_FEATURED_COUNT = 5;

export const newsItems: NewsItem[] = [
    {
        kind: "thirdParty",
        date: "2026-03-23",
        title:
            "Basys.ai Partners with ePathUSA Prime Contractor on AI-Enabled Medical Record Review for CMS",
        url: "https://www.prnewswire.com/news-releases/basysai-partners-with-epathusa-prime-contractor-on-ai-enabled-medical-record-review-for-cms-302721458.html/",
    },
    {
        kind: "basys",
        date: "2025-06-22",
        title:
            "basys.ai is recognized in Gartner's 2025 Hype cycle for transforming AI driven Prior Auth.",
        slug: "basys-ai-is-recognized-in-gartners-2025-hype-cycle-for-transforming-ai-driven-prior-auth",
    },
    {
        kind: "basys",
        date: "2025-06-17",
        title:
            "basys.ai Joins NCQA AI in Healthcare Working Group to Help Define the Future of Trustworthy, Clinically Sound AI",
        slug: "basys-ai-joins-ncqa-ai-in-healthcare-working-group-to-help-define-the-future-of-trustworthy-clinically-sound-ai",
    },
    {
        kind: "thirdParty",
        date: "2025-06-09",
        title:
            "Smart Data Solutions Tackles Prior Authorization Challenge with Basys.ai",
        url: "https://www.fiercehealthcare.com/sponsored/helping-payers-transform-prior-auth-agentic-ai/",
    },
    {
        kind: "thirdParty",
        date: "2025-05-20",
        title:
            "From Hype To Infrastructure: The Great Compression Of Health AI",
        url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/05/20/from-hype-to-infrastructure-the-great-compression-of-health-ai/",
    },
    {
        kind: "thirdParty",
        date: "2024-12-18",
        title: "SCAN Group: It's time for a Healthtech Moonshot",
        url: "https://www.beckerspayer.com/payer/scan-group-its-time-for-a-healthtech-moonshot/",
    },
    {
        kind: "thirdParty",
        date: "2024-12-16",
        title:
            "19 Ways To Effectively Integrate AI Into Business Processes In 2025",
        description:
            "Learn how basys.ai ensures AI remains responsive, relevant and aligned with provider needs.",
        url: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/12/16/19-ways-to-effectively-integrate-ai-into-business-processes-in-2025/",
    },
    {
        kind: "thirdParty",
        date: "2024-11-13",
        title: "How I addressed racial bias in my company's AI algorithm",
        url: "https://www.statnews.com/2024/11/13/generative-ai-medicine-health-care-ai-racism/",
    },
    {
        kind: "thirdParty",
        date: "2024-10-16",
        title: "Generative AI And Clinical Decision Support",
        url: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/10/16/generative-ai-and-clinical-decision-support/",
    },
    {
        kind: "thirdParty",
        date: "2023-10-08",
        title:
            "Basys.ai grabs $2.4M for its prior authorization tech powered by Mayo Clinic's data",
        description:
            "Learn how basys.ai helps health plans and health systems adopt value-based care, starting with prior authorization.",
        url: "https://techcrunch.com/2023/08/10/basys-ai-2-4m-prior-authorization-mayo-clinic-healthcare/",
    },
    {
        kind: "thirdParty",
        date: "2022-09-12",
        title: "Transforming public health through social innovation",
        url: "https://news.harvard.edu/gazette/story/newsplus/transforming-public-health-through-social-innovation/",
    },
    {
        kind: "thirdParty",
        date: "2022-08-09",
        title:
            "Amber Nigam: Improving Metabolic Health for Billions through AI",
        description:
            "Learn how basys.ai enables providers in their journey of managing metabolic health for billions through artificial intelligence (AI).",
        url: "https://www.nasdaq.com/articles/amber-nigam%3A-improving-metabolic-health-for-billions-through-ai",
    },
];

export function newsItemsSortedNewestFirst(): NewsItem[] {
    return [...newsItems].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

/** Which filter tabs an item appears under (used by the newsroom filter bar). */
export function itemFacets(item: NewsItem): NewsFacet[] {
    if (item.facets?.length) {
        return item.facets;
    }
    if (item.kind === "thirdParty") {
        if (item.url.includes("prnewswire.com")) {
            return ["press", "corporate"];
        }
        return ["media"];
    }
    const slug = item.slug.toLowerCase();
    if (slug.includes("gartner")) {
        return ["press", "media", "corporate"];
    }
    return ["press", "corporate"];
}

export function filterNewsByTab(
    items: NewsItem[],
    tab: NewsFilterTab,
): NewsItem[] {
    if (tab === "all") {
        return items;
    }
    return items.filter((item) => itemFacets(item).includes(tab));
}

export function formatNewsDate(isoDate: string): string {
    const d = new Date(`${isoDate}T12:00:00`);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getBasysNewsBySlug(
    slug: string,
): NewsItemBasys | undefined {
    const found = newsItems.find(
        (item): item is NewsItemBasys =>
            item.kind === "basys" && item.slug === slug,
    );
    return found;
}

/** Basys news rows that have an internal `/news/[slug]` route. */
export function getAllBasysSlugsFromNews(): string[] {
    return newsItems
        .filter(
            (item): item is NewsItemBasys =>
                item.kind === "basys" && item.slug.length > 0,
        )
        .map((item) => item.slug);
}
