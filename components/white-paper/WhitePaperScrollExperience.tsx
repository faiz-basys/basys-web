"use client";

import Badge from "@/components/ui/Badge";
import { SmoothScrollButton } from "@/components/white-paper/SmoothScrollButton";
import { WhitePaperSectionContent } from "@/components/white-paper/WhitePaperSectionContent";
import {
    WHITE_PAPERS,
    type WhitePaper,
} from "@/components/white-paper/white-paper-data";
import { scrollElementWithinContainer, smoothScrollToId } from "@/lib/smoothScroll";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    useSyncExternalStore,
} from "react";

function subscribeReducedMotion(cb: () => void) {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
    return false;
}

function ScrollSection({
    id,
    paperId,
    index,
    total,
    section,
    paperIndex,
    onVisible,
    reducedMotion,
}: {
    id: string;
    paperId: string;
    index: number;
    total: number;
    section: WhitePaper["sections"][number];
    paperIndex: number;
    onVisible: (index: number) => void;
    reducedMotion: boolean;
}) {
    const ref = useRef<HTMLElement>(null);
    const [revealed, setRevealed] = useState(reducedMotion);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const visibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                        onVisible(index);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px", threshold: [0, 0.35, 0.6] },
        );

        visibilityObserver.observe(el);

        if (reducedMotion) {
            setRevealed(true);
            return () => visibilityObserver.disconnect();
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setRevealed(true);
                    revealObserver.disconnect();
                }
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        );
        revealObserver.observe(el);

        return () => {
            visibilityObserver.disconnect();
            revealObserver.disconnect();
        };
    }, [index, onVisible, reducedMotion]);

    return (
        <section
            id={id}
            ref={ref}
            data-paper={paperId}
            data-section-index={index}
            className="scroll-mt-28 flex min-h-[min(88vh,920px)] flex-col justify-center py-16 lg:min-h-[92vh]"
            aria-label={`${section.headline}, section ${index + 1} of ${total}`}
        >
            <div
                className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                    revealed
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                }`}
            >
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-on-surface-variant uppercase">
                    Section {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold text-balance text-primary md:text-4xl">
                    {section.headline}
                </h2>
                {section.subheadline && (
                    <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">
                        {section.subheadline}
                    </p>
                )}
                <div className="mt-10">
                    <WhitePaperSectionContent
                        section={section}
                        paperIndex={paperIndex}
                    />
                </div>
            </div>
        </section>
    );
}

function WhitePaperBlock({
    paper,
    paperIndex,
    isLast,
}: {
    paper: WhitePaper;
    paperIndex: number;
    isLast: boolean;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef<HTMLElement>(null);
    const skipNavScrollRef = useRef(true);
    const reducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot,
    );

    const handleVisible = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    useEffect(() => {
        if (skipNavScrollRef.current) {
            skipNavScrollRef.current = false;
            return;
        }

        const nav = navRef.current;
        if (!nav) return;

        const activeBtn = nav.querySelector<HTMLElement>(
            '[aria-current="step"]',
        );
        if (!activeBtn) return;

        scrollElementWithinContainer(nav, activeBtn);
    }, [activeIndex]);

    const scrollToSection = (index: number) => {
        smoothScrollToId(`${paper.id}-${paper.sections[index].id}`, {
            block: "start",
            updateHash: true,
        });
        setActiveIndex(index);
    };

    const activeSection = paper.sections[activeIndex];
    const nextPaper = !isLast ? WHITE_PAPERS[paperIndex + 1] : null;
    const progress =
        paper.sections.length <= 1
            ? 100
            : (activeIndex / (paper.sections.length - 1)) * 100;

    return (
        <article
            id={paper.id}
            className={`relative scroll-mt-28 ${!isLast ? "border-b border-outline/10" : ""}`}
        >
            {!isLast && (
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-background to-transparent"
                    aria-hidden
                />
            )}

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-20">
                <aside className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-6rem)] lg:flex-col lg:overflow-hidden lg:py-10 lg:pr-4">
                    {/* Mobile: compact progress card */}
                    <div
                        className="mt-8 rounded-4xl border border-outline/10 p-6 lg:hidden"
                        style={{ backgroundColor: paper.accentMuted }}
                    >
                        <p className="text-xs font-semibold tracking-wider text-on-surface-variant uppercase">
                            Now reading
                        </p>
                        <p className="mt-2 text-lg font-semibold text-primary">
                            {activeSection.navLabel}
                        </p>
                    </div>

                    {/* Desktop: fixed-height column — header + scrollable nav + footer */}
                    <div className="hidden min-h-0 flex-1 flex-col lg:flex">
                        <div className="shrink-0">
                            <div className="flex items-center justify-between gap-3">
                                <Badge
                                    icon={paper.badgeIcon}
                                    title={paper.badge}
                                />
                                <span className="text-xs font-medium text-on-surface-variant">
                                    {paperIndex + 1} / {WHITE_PAPERS.length}
                                </span>
                            </div>
                            <h1 className="mt-5 line-clamp-3 text-2xl font-bold leading-tight text-balance text-primary xl:text-3xl">
                                {paper.title}
                            </h1>
                            <p className="mt-2 line-clamp-2 text-sm font-semibold text-primary">
                                {paper.subtitle}
                            </p>

                            <div className="mt-5">
                                <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-on-surface-variant">
                                    <span>{activeSection.navLabel}</span>
                                    <span>
                                        {activeIndex + 1} /{" "}
                                        {paper.sections.length}
                                    </span>
                                </div>
                                <div className="h-1 overflow-hidden rounded-pill bg-surface-container">
                                    <div
                                        className="h-full rounded-pill transition-[width] duration-500 ease-out motion-reduce:transition-none"
                                        style={{
                                            width: `${progress}%`,
                                            backgroundColor: paper.accent,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <nav
                            ref={navRef}
                            className="mt-5 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1"
                            aria-label={`${paper.title} sections`}
                        >
                            <ul className="space-y-0.5">
                                {paper.sections.map((section, i) => {
                                    const isActive = i === activeIndex;
                                    return (
                                        <li key={section.id}>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    scrollToSection(i)
                                                }
                                                className={`group flex w-full items-center gap-2.5 rounded-xl px-2 py-2 text-left text-xs transition-colors ${
                                                    isActive
                                                        ? "bg-surface-container-low font-semibold text-primary"
                                                        : "text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary"
                                                }`}
                                                aria-current={
                                                    isActive
                                                        ? "step"
                                                        : undefined
                                                }
                                            >
                                                <span
                                                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition-colors ${
                                                        isActive
                                                            ? "text-on-primary"
                                                            : "bg-surface-container text-on-surface-variant group-hover:bg-surface-container-high"
                                                    }`}
                                                    style={
                                                        isActive
                                                            ? {
                                                                  backgroundColor:
                                                                      paper.accent,
                                                              }
                                                            : undefined
                                                    }
                                                >
                                                    {i + 1}
                                                </span>
                                                <span className="truncate">
                                                    {section.navLabel}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="mt-4 shrink-0 border-t border-outline/10 pt-4">
                            <div className="flex flex-wrap gap-2">
                                <SmoothScrollButton
                                    href="#whitepaper-form"
                                    size="md"
                                >
                                    Get Access
                                </SmoothScrollButton>
                                {nextPaper ? (
                                    <SmoothScrollButton
                                        href={`#${nextPaper.id}`}
                                        variant="outline"
                                        size="md"
                                    >
                                        Next
                                    </SmoothScrollButton>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="border-t border-outline/10 pt-4 lg:border-t-0 lg:pt-16">
                    {paper.sections.map((section, i) => (
                        <ScrollSection
                            key={section.id}
                            id={`${paper.id}-${section.id}`}
                            paperId={paper.id}
                            index={i}
                            total={paper.sections.length}
                            section={section}
                            paperIndex={paperIndex}
                            onVisible={handleVisible}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </div>
            </div>

            {!isLast && (
                <div className="mx-auto flex max-w-7xl justify-center px-6 pb-16 md:px-8">
                    <div className="flex items-center gap-3 rounded-pill border border-outline/15 bg-surface-container-lowest px-5 py-2.5 text-sm text-on-surface-variant shadow-sm">
                        <span className="material-symbols-outlined text-base text-primary">
                            south
                        </span>
                        <span>Continue to the next whitepaper</span>
                    </div>
                </div>
            )}
        </article>
    );
}

export function WhitePaperScrollExperience() {
    useEffect(() => {
        const previousRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";

        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }

        return () => {
            window.history.scrollRestoration = previousRestoration;
        };
    }, []);

    return (
        <div className="pb-8">
            {WHITE_PAPERS.map((paper, i) => (
                <WhitePaperBlock
                    key={paper.id}
                    paper={paper}
                    paperIndex={i}
                    isLast={i === WHITE_PAPERS.length - 1}
                />
            ))}
        </div>
    );
}
