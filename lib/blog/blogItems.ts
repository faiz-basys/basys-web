/**
 * Blog categories (filter tabs), inferred from how each piece reads in the title:
 * - **mediaCoverage** — outlet picks & lists (Forbes, AIM Research, Nasdaq, SCAN Group, etc.)
 * - **perspectives** — essays, policy explainers, leadership POV (Stanford, TEDx, CMS, bias, trust)
 * - **companyNews** — milestones & product story (automation wins, deployments, industry initiatives)
 */
export type BlogPostType =
    | "mediaCoverage"
    | "perspectives"
    | "companyNews";

export type BlogFilterTab = "all" | BlogPostType;

export type BlogItemBasys = {
    kind: "basys";
    /** ISO date (YYYY-MM-DD) for ordering */
    date: string;
    title: string;
    description?: string;
    /** Byline for listing cards and article header */
    author?: string;
    /** Route segment under /blog/ — set when the detail page exists */
    slug: string;
    /** Which filter tab this post belongs to (see `BLOG_FILTER_OPTIONS`) */
    type: BlogPostType;
};

export type BlogItemThirdParty = {
    kind: "thirdParty";
    date: string;
    title: string;
    description?: string;
    author?: string;
    /** Full external URL — set when the piece is live */
    url: string;
    type: BlogPostType;
};

export type BlogItem = BlogItemBasys | BlogItemThirdParty;

export const BLOG_FILTER_OPTIONS: { id: BlogFilterTab; label: string }[] = [
    { id: "all", label: "All posts" },
    { id: "mediaCoverage", label: "Media coverage" },
    { id: "perspectives", label: "Perspectives" },
    { id: "companyNews", label: "Company news" },
];

/** First N items (newest) use the multi-card layout; the rest go under “Show more”. */
export const BLOG_FEATURED_COUNT = 5;

/** Add posts here; internal `/blog/[slug]` pages use `kind: "basys"` with a non-empty `slug`. */
export const blogItems: BlogItem[] = [
    {
        kind: "basys",
        type: "companyNews",
        date: "2025-06-30",
        author: "Amber Nigam",
        title:
            "basys.ai Supports Bold Industry Effort to Cut the Complexity of Prior Authorization",
        slug: "basys-ai-supports-bold-industry-effort-to-cut-the-complexity-of-prior-authorization",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2025-06-17",
        author: "basys.ai communication",
        title:
            "Not Every Problem Needs AI—But Some Desperately Do: Insights from Stanford Health AI Week",
        slug: "not-every-problem-needs-ai-insights-from-stanford-health-ai-week",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2025-01-27",
        author: "Amber Nigam",
        title:
            "How basys.ai is Building Trustworthy AI for Better Patient Care",
        slug: "how-basys-ai-is-building-trustworthy-ai-for-better-patient-care",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2024-12-19",
        author: "Amber Nigam",
        title:
            "What Makes basys.ai Stand Out: Lessons from the Frontlines of Healthcare AI",
        slug: "what-makes-basys-ai-stand-out-lessons-from-the-frontlines-of-healthcare-ai",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-12-19",
        author: "Arpan Saxena",
        title: "SCAN Group: It's Time for a Healthtech Moonshot",
        slug: "scan-group-its-time-for-a-healthtech-moonshot",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2024-11-14",
        author: "Amber Nigam",
        title:
            "How I addressed racial bias in my company's AI algorithm",
        slug: "how-i-addressed-racial-bias-in-my-companys-ai-algorithm",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-07-15",
        author: "Arpan Saxena",
        title:
            "AIM Research Feature: B2B AI Startup CEOs to Watch in the U.S. in 2024",
        slug: "aim-research-feature-b2b-ai-startup-ceos-to-watch-in-the-us-in-2024",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-05-16",
        author: "Amber Nigam",
        title:
            "Forbes Feature: How Large Language Models Are Putting Skin In The Healthcare Game",
        slug: "forbes-feature-how-large-language-models-are-putting-skin-in-the-healthcare-game",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-04-09",
        author: "Amber Nigam",
        title:
            "Forbes Feature: State of the Pharma Industry: Present and Future",
        slug: "forbes-feature-state-of-the-pharma-industry-present-and-future",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-03-07",
        author: "Arpan Saxena",
        title:
            "Forbes Feature: How Prior Authorization Reforms Can Help Value-Based Care",
        slug: "forbes-feature-how-prior-authorization-reforms-can-help-value-based-care",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2024-01-25",
        author: "Amber Nigam",
        title: "Decoding the Latest CMS Rule on Prior Authorization",
        slug: "decoding-the-latest-cms-rule-on-prior-authorization",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2024-01-22",
        author: "Amber Nigam",
        title:
            "Forbes Feature: Disruption And Change: Healthcare Trends And Predictions For 2024",
        slug: "forbes-feature-disruption-and-change-healthcare-trends-and-predictions-for-2024",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2023-12-08",
        author: "Arpan Saxena",
        title:
            "Forbes Feature: Generative AI: The Next Frontier Of Healthcare",
        slug: "forbes-feature-generative-ai-the-next-frontier-of-healthcare",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2023-11-10",
        author: "Arpan Saxena",
        title:
            "basys.ai Featured by Forbes as a Leader in Streamlining Prior Authorization for Health Plans",
        slug: "basys-ai-featured-by-forbes-leader-streamlining-prior-authorization",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2023-09-01",
        author: "Arpan Saxena",
        title:
            "Silos Deconstructed: basys.ai Breaks Down Healthcare Divisions to Get Patients Timely Care",
        slug: "silos-deconstructed-basys-ai-breaks-down-healthcare-divisions",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2023-07-01",
        author: "Amber Nigam",
        title:
            "Healing Healthcare: basys.ai Uses AI to Target the Root Cause of the Healthcare Industry's Troubles",
        slug: "healing-healthcare-basys-ai-target-root-cause-healthcare-troubles",
    },
    {
        kind: "basys",
        type: "companyNews",
        date: "2023-06-28",
        author: "Arpan Saxena",
        title:
            "Authorized: basys.ai is Tackling Bottlenecks in U.S. Prior Authorization to Stop Treatment Delays",
        slug: "authorized-basys-ai-tackling-bottlenecks-us-prior-authorization",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2023-06-06",
        author: "Arpan Saxena",
        title: "TEDx Talk on the Future of Healthcare by CEO Amber Nigam",
        slug: "tedx-talk-future-of-healthcare-by-ceo-amber-nigam",
    },
    {
        kind: "basys",
        type: "companyNews",
        date: "2023-05-21",
        author: "Amber Nigam",
        title:
            "Automated Approvals: basys.ai Cuts Costs for Health Insurance",
        slug: "automated-approvals-basys-ai-cuts-costs-for-health-insurance",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2023-04-23",
        author: "Amber Nigam",
        title:
            "Affordable Care, Accessible Care: How basys.ai Eliminates Barriers to Care for Patients",
        slug: "affordable-accessible-care-how-basys-ai-eliminates-barriers",
    },
    {
        kind: "basys",
        type: "companyNews",
        date: "2023-04-09",
        author: "Arpan Saxena",
        title:
            "Staking a Claim: basys.ai is Becoming a Leading Force in Healthtech by Streamlining Insurance Claims",
        slug: "staking-a-claim-basys-ai-leading-force-healthtech-streamlining-claims",
    },
    {
        kind: "basys",
        type: "perspectives",
        date: "2023-03-12",
        author: "Amber Nigam",
        title:
            "7 Ways AI Will Change Healthcare and How basys.ai is Building the Healthcare Industry of the Future",
        slug: "7-ways-ai-will-change-healthcare-basys-ai-building-industry-future",
    },
    {
        kind: "basys",
        type: "companyNews",
        date: "2023-02-26",
        author: "Arpan Saxena",
        title:
            "Agile: basys.ai Rapidly Deploys Automation Software and Successfully Connects Health Records",
        slug: "agile-basys-ai-deploys-automation-connects-health-records",
    },
    {
        kind: "basys",
        type: "mediaCoverage",
        date: "2022-09-28",
        author: "Amber Nigam",
        title: "Published on Nasdaq",
        slug: "published-on-nasdaq",
    },
];

export function blogItemsSortedNewestFirst(): BlogItem[] {
    return [...blogItems].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function filterBlogByTab(
    items: BlogItem[],
    tab: BlogFilterTab,
): BlogItem[] {
    if (tab === "all") {
        return items;
    }
    return items.filter((item) => item.type === tab);
}

export function formatBlogDate(isoDate: string): string {
    const d = new Date(`${isoDate}T12:00:00`);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getBasysBlogBySlug(slug: string): BlogItemBasys | undefined {
    const found = blogItems.find(
        (item): item is BlogItemBasys =>
            item.kind === "basys" && item.slug === slug,
    );
    return found;
}

/** Basys blog posts that have an internal `/blog/[slug]` route. */
export function getAllBasysSlugsFromBlog(): string[] {
    return blogItems
        .filter(
            (item): item is BlogItemBasys =>
                item.kind === "basys" && item.slug.length > 0,
        )
        .map((item) => item.slug);
}
