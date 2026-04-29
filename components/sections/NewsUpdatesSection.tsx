"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useSyncExternalStore,
} from "react";

const GAP_PX = 24; /* gap-6 */

function subscribeReducedMotion(cb: () => void) {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeMinMd(cb: () => void) {
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
}

function getMinMdSnapshot() {
    return window.matchMedia("(min-width: 768px)").matches;
}

export type NewsUpdateItem = {
    category: string;
    title: string;
    href: string;
    linkLabel: string;
    imageSrc: string;
    company: string;
};

/** Edit this list to add or change news items (content only — no HTML). */
export const NEWS_UPDATES_ITEMS: NewsUpdateItem[] = [
    {
        category: "News & Achievement",
        title: "CMS Names Basys.ai a National Finalist in Fraud & Waste Challenge",
        href: "https://www.linkedin.com/posts/administrator-oz_there-is-nothing-like-a-little-friendly-competition-activity-7399121695711858688-vCCT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2xAQkB1ThNSD3vSGDf6oFsxlendf2XJsQ",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/6949741543bd97b0fe69a946_961.png",
        company: "CMS Fraud and Waste Challenge",
    },
    {
        category: "Generative AI",
        title: "Harvard Business Review spotlights basys.ai",
        href: "https://hbr.org/2025/07/should-your-business-use-a-generalist-or-specialized-ai-model",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/68827d50b933cf11159a683d_2025-harvard-business-publishing-new-brand-logo-for-corporate-learning-and-education-units%20(2).png",
        company: "Harvard Business Review",
    },
    {
        category: "Recognition",
        title: "basys.ai recognized in Gartner’s 2025 Hype Cycle report",
        href: "https://basys.ai/news/basys-ai-is-recognized-in-gartners-2025-hype-cycle-for-transforming-ai-driven-prior-auth",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/68823ab6986905e1b1327937_basys%20gartner%20(3).png",
        company: "Gartner Hype Cycle",
    },
    {
        category: "Partnership",
        title: "basys.ai Joins NCQA AI in Healthcare Working Group",
        href: "https://basys.ai/news/basys-ai-joins-ncqa-ai-in-healthcare-working-group-to-help-define-the-future-of-trustworthy-clinically-sound-ai",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/687e5518cf063d9a43dfefc4_basys_ncqa.png",
        company: "NCQA partnership",
    },
    {
        category: "Academic Collaboration",
        title: "We Spoke at Stanford on AI leadership in prior authorization",
        href: "https://basys.ai/blog-posts/not-every-problem-needs-ai--but-some-desperately-do-insights-from-stanford-health-ai-week",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/687e569e308e29e208b51b3d_IMG_1018%20(1).jpg",
        company: "Stanford Health AI Week",
    },
    {
        category: "Featuring",
        title: "Featured in Fierce Healthcare for AI-driven innovation",
        href: "https://www.fiercehealthcare.com/sponsored/helping-payers-transform-prior-auth-agentic-ai",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/687e57512664625532233ad7_GettyImages-2177971058.avif",
        company: "Fierce Healthcare",
    },
    {
        category: "Recognition",
        title: "basys.ai named in RockHealth Top 50 Digital Health",
        href: "https://www.linkedin.com/posts/ninacapital_builders-digitalhealth-healthtech-activity-7325474425464602624-vy4h/",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/687e57ca1326baaecb51cf9d_addb03f27f001b8f3068d5f74db1eb49_495934770_18407961946096697_1457699190770697015_n.jpg",
        company: "RockHealth Top 50",
    },
    {
        category: "Forbes Feature",
        title: "Thought leadership on healthcare AI — Forbes x basys.ai",
        href: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/01/14/healthcare-trends-shaping-2025-and-insights-for-industry-leaders/",
        linkLabel: "Read More",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/688285b4a0d5aaa42ec6797e_forbes.png",
        company: "Forbes",
    },
    {
        category: "TedX",
        title: "Aligning incentives among key stakeholders of healthcare",
        href: "https://www.youtube.com/watch?v=9yMNsKeHcF4",
        linkLabel: "View",
        imageSrc:
            "https://cdn.prod.website-files.com/6834abff6f7f2433d5785014/688284bc1692a48c89d3ac27_tedx.png",
        company: "TEDx",
    },
];

const AUTO_ADVANCE_MS = 4500;

function SmallNewsCard({ item }: { item: NewsUpdateItem }) {
    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-[140px] flex-col justify-between rounded-4xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-transform hover:scale-[1.02] hover:border-outline-variant/50 md:min-h-[280px]"
        >
            <div>
                <div className="text-xs font-medium tracking-wide text-on-surface-variant uppercase">
                    {item.category}
                </div>
                <h3 className="mt-2 line-clamp-4 text-base leading-snug font-semibold text-on-surface">
                    {item.title}
                </h3>
            </div>
            <div>
                <span className="text-xs font-medium tracking-wide text-on-surface-variant uppercase">
                    {item.company}
                </span>
            </div>
        </Link>
    );
}

/** Scroll-triggered reveal for the 4th visible card on desktop. */
function FourthNewsCardReveal({
    children,
    className = "",
    style,
}: {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        () => false,
    );

    useEffect(() => {
        if (prefersReducedMotion) return;
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) setInView(true);
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [prefersReducedMotion]);

    return (
        <div
            ref={containerRef}
            style={style}
            className={`${className} motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                inView
                    ? "animate-news-updates-fourth-reveal"
                    : "translate-y-5 opacity-0"
            }`.trim()}
        >
            {children}
        </div>
    );
}

function FeaturedNewsCard({ item }: { item: NewsUpdateItem }) {
    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-4xl p-6 text-on-primary md:min-h-[400px] md:flex-row md:p-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <Image
                    src={item.imageSrc}
                    alt={item.company}
                    fill
                    className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 767px) 100vw, 42vw"
                />
            </div>
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-primary transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-35 motion-reduce:group-hover:opacity-100"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary via-primary/75 to-primary/30 opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-25 motion-reduce:group-hover:opacity-70"
            />
            <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between gap-6">
                <div>
                    <span className="inline-block rounded-pill bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                        {item.category}
                    </span>
                    <h3 className="mt-4 text-xl leading-tight font-semibold drop-shadow-sm md:text-2xl">
                        {item.title}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <p className="inline-flex w-fit items-center gap-2 text-sm font-medium underline-offset-4 transition-all group-hover:underline">
                        {item.linkLabel}{" "}
                    </p>
                    <span className="material-symbols-outlined text-lg group-hover:no-underline">
                        arrow_forward
                    </span>
                </div>
            </div>
        </Link>
    );
}

export function NewsUpdatesSection({
    items = NEWS_UPDATES_ITEMS,
}: {
    items?: NewsUpdateItem[];
}) {
    const [startIndex, setStartIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);
    const [viewportWidth, setViewportWidth] = useState(0);

    const isMd = useSyncExternalStore(
        subscribeMinMd,
        getMinMdSnapshot,
        () => false,
    );
    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        () => false,
    );

    useLayoutEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => {
            setViewportWidth(el.clientWidth);
        });
        ro.observe(el);
        setViewportWidth(el.clientWidth);
        return () => ro.disconnect();
    }, []);

    /** Mobile: one full-width slide per item. Desktop widths computed below. */
    const mobileSlideWidth = viewportWidth <= 0 ? 0 : viewportWidth;

    /** Desktop: 2/5 featured + gap + 3/5 strip (three small cards). */
    const desktopFeaturedWidth =
        viewportWidth <= GAP_PX ? 0 : ((viewportWidth - GAP_PX) * 2) / 5;
    const desktopStripViewportWidth =
        viewportWidth <= GAP_PX ? 0 : ((viewportWidth - GAP_PX) * 3) / 5;
    const desktopSmallSlideWidth =
        desktopStripViewportWidth <= 0
            ? 0
            : (desktopStripViewportWidth - 2 * GAP_PX) / 3;

    const maxIndex = isMd
        ? Math.max(0, items.length - 4)
        : Math.max(0, items.length - 1);

    const advance = useCallback(() => {
        setStartIndex((i) => {
            const cur = Math.min(i, maxIndex);
            return cur >= maxIndex ? 0 : cur + 1;
        });
    }, [maxIndex]);

    const goBack = useCallback(() => {
        setStartIndex((i) => {
            const cur = Math.min(i, maxIndex);
            return cur <= 0 ? maxIndex : cur - 1;
        });
    }, [maxIndex]);

    const reducedMotionRef = useRef(false);
    useEffect(() => {
        reducedMotionRef.current =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);

    useEffect(() => {
        if (
            paused ||
            reducedMotionRef.current ||
            items.length < 4 ||
            maxIndex === 0
        )
            return;
        const id = window.setInterval(advance, AUTO_ADVANCE_MS);
        return () => window.clearInterval(id);
    }, [paused, advance, items.length, maxIndex]);

    if (items.length < 4) {
        return null;
    }

    const mobileStepPx =
        viewportWidth <= 0 || mobileSlideWidth <= 0
            ? 0
            : mobileSlideWidth + GAP_PX;
    const desktopStripStepPx =
        desktopSmallSlideWidth <= 0 ? 0 : desktopSmallSlideWidth + GAP_PX;

    const activeIndex = Math.min(startIndex, maxIndex);
    const mobileOffsetPx = activeIndex * mobileStepPx;
    const desktopStripOffsetPx = activeIndex * desktopStripStepPx;

    const transitionClass = prefersReducedMotion
        ? ""
        : "transition-transform duration-300 ease-out";

    const stripTail = items.slice(1);

    return (
        <section
            className="mx-auto max-w-7xl px-8 py-24"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">News & Updates</h2>
                    <p className="text-sm text-on-surface-variant">
                        Latest highlights from our partners and clinical
                        networks.
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        aria-label="Previous news"
                        onClick={goBack}
                        disabled={maxIndex === 0}
                        className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                    <button
                        type="button"
                        aria-label="Next news"
                        onClick={advance}
                        disabled={maxIndex === 0}
                        className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>

            <div
                ref={viewportRef}
                className="min-h-[280px] overflow-hidden md:min-h-[400px]"
            >
                {!isMd ? (
                    <div
                        className={`flex gap-6 ${transitionClass}`}
                        style={{
                            transform:
                                mobileStepPx > 0
                                    ? `translate3d(-${mobileOffsetPx}px, 0, 0)`
                                    : undefined,
                        }}
                    >
                        {items.map((item) => (
                            <div
                                key={item.href}
                                className="shrink-0"
                                style={{
                                    width:
                                        mobileSlideWidth > 0
                                            ? `${mobileSlideWidth}px`
                                            : undefined,
                                }}
                            >
                                <FeaturedNewsCard item={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[400px] items-stretch gap-6">
                        <div
                            className="flex min-h-0 shrink-0 flex-col"
                            style={{
                                width:
                                    desktopFeaturedWidth > 0
                                        ? `${desktopFeaturedWidth}px`
                                        : undefined,
                            }}
                        >
                            <FeaturedNewsCard item={items[activeIndex]} />
                        </div>
                        <div
                            className="min-h-0 min-w-0 shrink-0 overflow-hidden"
                            style={{
                                width:
                                    desktopStripViewportWidth > 0
                                        ? `${desktopStripViewportWidth}px`
                                        : undefined,
                            }}
                        >
                            <div
                                className={`flex h-full gap-6 ${transitionClass}`}
                                style={{
                                    transform:
                                        desktopStripStepPx > 0
                                            ? `translate3d(-${desktopStripOffsetPx}px, 0, 0)`
                                            : undefined,
                                }}
                            >
                                {stripTail.map((item, stripIdx) => {
                                    const isThirdVisible =
                                        stripIdx === activeIndex + 2;
                                    const card = isThirdVisible ? (
                                        <FourthNewsCardReveal className="h-full min-h-0">
                                            <SmallNewsCard item={item} />
                                        </FourthNewsCardReveal>
                                    ) : (
                                        <SmallNewsCard item={item} />
                                    );
                                    return (
                                        <div
                                            key={item.href}
                                            className="shrink-0"
                                            style={{
                                                width:
                                                    desktopSmallSlideWidth > 0
                                                        ? `${desktopSmallSlideWidth}px`
                                                        : undefined,
                                            }}
                                        >
                                            {card}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
