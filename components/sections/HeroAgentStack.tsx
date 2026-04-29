"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";

/** Front-card inference bar fills 0→100% over this duration (keep in sync with progress hook) */
const PROCESSING_MS = 5_800;
const COMPLETED_MS = 1_500;
/** Detached flyout slides down; must match `agent-flyout-down` in globals.css (0.95s) */
const FLYOUT_MS = 950;
/** Pause after flyout is gone, before the stack reorders and animates */
const POST_FLYOUT_PAUSE_MS = 300;
/** Middle/back cards ease into new stack positions after rotation is applied */
const STACK_SHIFT_MS = 1_100;
const DEFAULT_LAYER_TRANSITION_MS = 580;
const NEW_BACK_POP_MS = 580;

const STACK_GAP_Y = 14;
const STACK_SCALE_STEP = 0.022;

type Phase = "processing" | "completed";

type AuthCase = {
    requestLabel: string;
    requestDetail: string;
    evidenceLine: string;
};

const CASES: AuthCase[] = [
    {
        requestLabel: "Incoming Request",
        requestDetail: "ICD-10: M17.11 (Osteoarthritis of right knee)",
        evidenceLine: "94% Match with Guideline V2.4",
    },
    {
        requestLabel: "Incoming Request",
        requestDetail: "ICD-10: J44.1 (COPD with acute exacerbation)",
        evidenceLine: "91% Match with Guideline V1.9",
    },
    {
        requestLabel: "Incoming Request",
        requestDetail: "ICD-10: E11.9 (Type 2 diabetes mellitus)",
        evidenceLine: "89% Match with Guideline V3.0",
    },
];

type PipelineVariant = "active" | "queued" | "approved";

function AgentEqBars({
    reducedMotion,
    tone,
}: {
    reducedMotion: boolean;
    tone: PipelineVariant;
}) {
    const quiet = tone === "approved";
    return (
        <div className="flex h-7 items-end justify-end gap-0.5" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
                <span
                    key={i}
                    className={`w-1 origin-bottom rounded-pill bg-primary ${
                        reducedMotion
                            ? quiet
                                ? "h-3.5 opacity-50"
                                : "h-3 opacity-60"
                            : quiet
                              ? "h-4 opacity-70 motion-reduce:h-3 motion-reduce:opacity-60 motion-reduce:animate-none"
                              : `h-5 animate-agent-eq-bar motion-reduce:h-3 motion-reduce:opacity-60 motion-reduce:animate-none`
                    }`}
                    style={
                        reducedMotion || quiet
                            ? undefined
                            : { animationDelay: `${i * 0.11}s` }
                    }
                />
            ))}
        </div>
    );
}

/** Activity meter + determinate 0→100% bar - all stack states */
function CardPipelineStrip({
    variant,
    progress,
    reducedMotion,
}: {
    variant: PipelineVariant;
    progress: number;
    reducedMotion: boolean;
}) {
    const overall =
        variant === "approved"
            ? 100
            : variant === "queued"
              ? 0
              : Math.min(100, Math.max(0, progress));

    const title =
        variant === "approved"
            ? "Pipeline complete"
            : variant === "queued"
              ? "Awaiting stack"
              : "Inference pipeline";

    const subtitle =
        variant === "approved"
            ? "All stages verified"
            : variant === "queued"
              ? "Idle until promoted"
              : "Running full reasoning pass";

    const railLabel =
        variant === "approved"
            ? "Complete"
            : variant === "queued"
              ? "Idle"
              : "Progress";

    return (
        <div
            className={`rounded-2xl border bg-linear-to-b p-3 ${
                variant === "approved"
                    ? "border-emerald-600/25 from-emerald-500/8 to-transparent dark:border-emerald-500/30 dark:from-emerald-500/12"
                    : variant === "queued"
                      ? "border-outline-variant/40 from-outline-variant/6 to-transparent dark:border-outline-variant/30"
                      : "border-primary/15 from-primary/[0.07] to-transparent dark:border-primary/25 dark:from-primary/12"
            }`}
            role="region"
            aria-label={`Agent pipeline: ${title}`}
        >
            <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                    <div className="flex items-center gap-2">
                        <span
                            className={`material-symbols-outlined text-lg ${
                                variant === "approved"
                                    ? "text-emerald-700 dark:text-emerald-400"
                                    : "text-primary"
                            }`}
                        >
                            {variant === "approved"
                                ? "check_circle"
                                : variant === "queued"
                                  ? "hourglass_empty"
                                  : "hub"}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                            {title}
                        </span>
                    </div>
                    <p className="mt-0.5 pl-7 text-[10px] text-on-surface-variant/90">
                        {subtitle}
                    </p>
                </div>
                <AgentEqBars reducedMotion={reducedMotion} tone={variant} />
            </div>

            <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-[9px] font-medium uppercase tracking-wide text-on-surface-variant">
                    {railLabel}
                </span>
                <span className="tabular-nums text-[10px] font-semibold text-on-surface">
                    {Math.round(overall)}%
                </span>
            </div>
            <div
                className="relative h-2.5 overflow-hidden rounded-pill bg-surface-container-high ring-1 ring-outline-variant/35 dark:bg-surface-container dark:ring-outline-variant/25"
                aria-hidden
            >
                <div
                    className={`h-full rounded-pill bg-linear-to-r shadow-sm transition-[width] duration-100 ease-linear motion-reduce:transition-none ${
                        variant === "approved"
                            ? "from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-400"
                            : "from-primary via-primary to-primary/85 dark:to-primary/90"
                    }`}
                    style={{ width: `${overall}%` }}
                />
            </div>
        </div>
    );
}

function AgentEvidenceReasoning({ reducedMotion }: { reducedMotion: boolean }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2.5">
                <p
                    className={`min-w-0 flex-1 text-sm leading-snug ${
                        reducedMotion
                            ? "text-on-surface-variant"
                            : "bg-linear-to-r from-on-surface-variant via-primary to-on-surface-variant bg-size-[200%_100%] bg-clip-text text-transparent animate-agent-shimmer-reason motion-reduce:bg-none motion-reduce:text-on-surface-variant motion-reduce:animate-none"
                    }`}
                >
                    89% Match with Guideline V3.0
                </p>
            </div>
        </div>
    );
}

function stackPose(depth: 0 | 1 | 2): {
    translateY: number;
    scale: number;
    zIndex: number;
} {
    return {
        translateY: -depth * STACK_GAP_Y,
        scale: 1 - depth * STACK_SCALE_STEP,
        zIndex: 30 - depth * 10,
    };
}

function layerOuterStyle(depth: 0 | 1 | 2): CSSProperties {
    const { translateY, scale, zIndex } = stackPose(depth);
    const tf = (y: number, s: number) =>
        `translate3d(0, ${y}px, 0) scale(${s})`;
    return {
        transform: tf(translateY, scale),
        opacity: 1,
        zIndex,
    };
}

function usePrefersReducedMotion(): boolean {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = () => setReduced(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}

/** Drives 0→100% bar on the active front card in sync with PROCESSING_MS */
function useLiveProcessingProgress(
    phase: Phase,
    reducedMotion: boolean,
    /**
     * While the front stack slot is hidden (flyout + pause before reorder), do not
     * advance the timer - otherwise ~1.4s elapses before the new front is visible and
     * the bar jumps to ~25–40%.
     */
    frontSlotHiddenForHandoff: boolean,
): number {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (phase === "completed") {
            setProgress(100);
            return;
        }
        if (phase !== "processing") {
            setProgress(0);
            return;
        }

        if (frontSlotHiddenForHandoff) {
            setProgress(0);
            return;
        }

        if (reducedMotion) {
            setProgress(0);
            const steps = 12;
            const intervalMs = Math.max(100, Math.floor(PROCESSING_MS / steps));
            let i = 0;
            const id = window.setInterval(() => {
                i += 1;
                setProgress(Math.min(100, (i / steps) * 100));
                if (i >= steps) clearInterval(id);
            }, intervalMs);
            return () => clearInterval(id);
        }

        setProgress(0);
        const start = performance.now();
        let cancelled = false;
        const loop = () => {
            if (cancelled) return;
            const elapsed = performance.now() - start;
            const p = Math.min(100, (elapsed / PROCESSING_MS) * 100);
            setProgress(p);
            if (p < 100 && !cancelled) requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
        return () => {
            cancelled = true;
        };
    }, [phase, reducedMotion, frontSlotHiddenForHandoff]);

    return progress;
}

/** Snapshot card that exited - animates down via CSS, unmount when done (never rejoins front slot here) */
function ExitFlyoutCard({
    authCase,
    onAnimationEnd,
    reducedMotion,
}: {
    authCase: AuthCase;
    onAnimationEnd: () => void;
    reducedMotion: boolean;
}) {
    const outerStyle: CSSProperties = {
        ...layerOuterStyle(0),
        zIndex: 50,
    };

    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 top-0 origin-top ${
                reducedMotion
                    ? ""
                    : "animate-agent-flyout-down motion-reduce:animate-none"
            }`}
            style={outerStyle}
            onAnimationEnd={reducedMotion ? undefined : onAnimationEnd}
        >
            <div className="relative overflow-hidden rounded-4xl border border-outline-variant bg-surface-container-lowest p-6 shadow-2xl">
                <div className="relative z-10 mb-6 flex items-center justify-between border-b border-outline-variant/30 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-primary shadow-md">
                            <span className="material-symbols-outlined text-on-primary">
                                neurology
                            </span>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">
                                basys Agent 01
                            </h3>
                            <p className="text-xs text-on-surface-variant">
                                Active Instance: Prior Auth Sub-Unit
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-pill bg-green-500 opacity-70" />
                        <span className="text-xs text-on-surface-variant">
                            Live
                        </span>
                    </div>
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="rounded-4xl border border-outline-variant/20 bg-surface-container p-4">
                        <p className="mb-1 text-xs text-on-tertiary-container">
                            {authCase.requestLabel}
                        </p>
                        <p className="text-sm font-semibold">
                            {authCase.requestDetail}
                        </p>
                    </div>

                    <CardPipelineStrip
                        variant="approved"
                        progress={100}
                        reducedMotion={reducedMotion}
                    />

                    <div className="flex gap-4">
                        <div className="flex-1 rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
                            <p className="mb-1 text-xs text-on-tertiary-container">
                                Clinical Evidence
                            </p>
                            <p className="text-sm">{authCase.evidenceLine}</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-emerald-600/35 bg-emerald-500/10 p-4 text-center text-emerald-900 shadow-inner">
                            <p className="mb-1 text-xs opacity-80">Status</p>
                            <p className="text-lg font-semibold tracking-wide">
                                APPROVED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AgentStackLayer({
    authCase,
    depth,
    phase,
    isFront,
    newBackPop,
    transitionEnabled,
    hideBackVisual,
    hideFrontVisual,
    transitionDurationMs,
    reducedMotion,
    liveProcessingProgress,
}: {
    authCase: AuthCase;
    depth: 0 | 1 | 2;
    phase: Phase;
    isFront: boolean;
    newBackPop: boolean;
    transitionEnabled: boolean;
    hideBackVisual: boolean;
    hideFrontVisual: boolean;
    transitionDurationMs: number;
    reducedMotion: boolean;
    /** 0–100 from parent while front card is processing */
    liveProcessingProgress: number;
}) {
    const outerStyle: CSSProperties = {
        ...layerOuterStyle(depth),
        ...(depth === 0 && hideFrontVisual
            ? { opacity: 0, visibility: "hidden" as const }
            : {}),
        ...(depth === 2 && hideBackVisual
            ? { opacity: 0, visibility: "hidden" as const }
            : {}),
        ...(transitionEnabled
            ? {
                  transitionProperty: "transform, opacity",
                  transitionDuration: `${transitionDurationMs}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }
            : {}),
    };

    const showProcessing = isFront && phase === "processing";
    const showApproved = isFront && phase === "completed";

    const pipelineVariant: PipelineVariant = showApproved
        ? "approved"
        : showProcessing
          ? "active"
          : "queued";
    const pipelineProgressValue = showApproved
        ? 100
        : showProcessing
          ? liveProcessingProgress
          : 0;

    const isBack = depth > 0;

    const backPopClass =
        depth === 2 && newBackPop && !hideBackVisual
            ? "animate-agent-back-pop-in motion-reduce:animate-none motion-reduce:opacity-100"
            : "";

    return (
        <div
            className={`absolute inset-x-0 top-0 origin-top motion-reduce:transition-none ${
                transitionEnabled ? "" : "transition-none"
            } `}
            style={outerStyle}
            aria-hidden={!isFront}
        >
            <div
                className={`relative overflow-hidden rounded-4xl border bg-surface-container-lowest p-6 shadow-2xl ${backPopClass} ${
                    depth === 0
                        ? "animate-hero-console border-outline-variant"
                        : "border-outline-variant/55 shadow-lg"
                } ${isBack ? "pointer-events-none" : ""}`}
            >
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 h-[28%] bg-linear-to-b from-transparent via-primary/6 to-transparent motion-reduce:hidden ${
                        depth === 0
                            ? "animate-hero-scan"
                            : "animate-none opacity-40"
                    }`}
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl motion-reduce:hidden"
                >
                    <div
                        className={`absolute top-0 left-0 h-full w-2/5 bg-linear-to-r from-transparent via-white/30 to-transparent mix-blend-soft-light dark:via-white/15 ${
                            depth === 0
                                ? "animate-hero-shine delay-1000"
                                : "animate-none opacity-30"
                        }`}
                    />
                </div>

                <div
                    className={`relative z-10 mb-6 flex items-center justify-between border-b border-outline-variant/30 pb-4 ${isBack ? "text-on-surface-variant" : ""}`}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-pill bg-primary shadow-md ${
                                depth === 0
                                    ? "animate-[hero-orb-breathe_4s_ease-in-out_infinite] motion-reduce:animate-none"
                                    : ""
                            }`}
                        >
                            <span className="material-symbols-outlined text-on-primary">
                                neurology
                            </span>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">
                                basys Agent 01
                            </h3>
                            <p className="text-xs text-on-surface-variant">
                                Active Instance: Prior Auth Sub-Unit
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className={`h-2 w-2 rounded-pill bg-green-500 ${
                                depth === 0
                                    ? "animate-pulse motion-reduce:animate-none"
                                    : "opacity-70"
                            }`}
                        />
                        <span className="text-xs text-on-surface-variant">
                            Live
                        </span>
                    </div>
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="rounded-4xl border border-outline-variant/20 bg-surface-container p-4">
                        <p className="mb-1 text-xs text-on-tertiary-container">
                            {authCase.requestLabel}
                        </p>
                        <p
                            className={`text-sm font-semibold ${
                                isBack ? "text-on-surface-variant" : ""
                            }`}
                        >
                            {authCase.requestDetail}
                        </p>
                    </div>

                    <CardPipelineStrip
                        variant={pipelineVariant}
                        progress={pipelineProgressValue}
                        reducedMotion={reducedMotion}
                    />

                    <div className="flex gap-4">
                        <div className="flex-1 rounded-2xl border border-outline-variant/20 bg-surface-container p-4">
                            <p className="mb-1 text-xs text-on-tertiary-container">
                                Clinical Evidence
                            </p>
                            {showProcessing ? (
                                <AgentEvidenceReasoning
                                    reducedMotion={reducedMotion}
                                />
                            ) : (
                                <p
                                    className={`text-sm ${
                                        isBack ? "text-on-surface-variant" : ""
                                    }`}
                                >
                                    {authCase.evidenceLine}
                                </p>
                            )}
                        </div>
                        <div
                            className={`flex flex-1 flex-col items-center justify-center rounded-2xl p-4 text-center shadow-inner transition-colors duration-300 ${
                                showProcessing
                                    ? "border border-amber-500/40 bg-amber-500/10"
                                    : showApproved
                                      ? "border border-emerald-600/35 bg-emerald-500/10 text-emerald-900 shadow-none"
                                      : "border border-outline-variant/30 bg-surface-container-high text-on-surface-variant"
                            }`}
                        >
                            <p className="mb-1 text-xs opacity-80">Status</p>
                            {showProcessing && (
                                <p className="text-lg font-semibold tracking-wide text-amber-800">
                                    PROCESSING
                                </p>
                            )}
                            {showApproved && (
                                <p className="text-lg font-semibold tracking-wide text-emerald-900">
                                    APPROVED
                                </p>
                            )}
                            {!isFront && (
                                <p className="text-xs font-medium tracking-wide uppercase">
                                    Queued
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function HeroAgentStack() {
    const reducedMotion = usePrefersReducedMotion();
    const [order, setOrder] = useState<[number, number, number]>([0, 1, 2]);
    const orderRef = useRef(order);
    orderRef.current = order;

    const [phase, setPhase] = useState<Phase>("processing");
    /** Case index that is sliding out on the detached flyout (not in stack layout) */
    const [flyoutCaseIndex, setFlyoutCaseIndex] = useState<number | null>(null);
    /** Stack front slot hidden while that case is only shown on the flyout / during post-flyout pause */
    const [hiddenFrontCaseIndex, setHiddenFrontCaseIndex] = useState<
        number | null
    >(null);

    const liveProcessingProgress = useLiveProcessingProgress(
        phase,
        reducedMotion,
        hiddenFrontCaseIndex != null,
    );
    /** True while flyout runs - rear stack slot hidden so the same case is not shown twice */
    const [hideBackSlot, setHideBackSlot] = useState(false);
    const [newBackPop, setNewBackPop] = useState(false);
    const [snapTransforms, setSnapTransforms] = useState(false);
    /** Slower transform duration while the stack reflows after a handoff */
    const [stackShiftSlow, setStackShiftSlow] = useState(false);

    const newBackPopTimeoutRef = useRef<number | null>(null);
    const snapResetTimeoutRef = useRef<number | null>(null);
    const flyoutFallbackRef = useRef<number | null>(null);
    const stackShiftTimeoutRef = useRef<number | null>(null);
    const postFlyoutPauseTimeoutRef = useRef<number | null>(null);
    const pendingOrderRef = useRef<[number, number, number] | null>(null);
    const handoffFinishedRef = useRef(false);

    const clearNewBackPopTimeout = useCallback(() => {
        if (newBackPopTimeoutRef.current != null) {
            clearTimeout(newBackPopTimeoutRef.current);
            newBackPopTimeoutRef.current = null;
        }
    }, []);

    const clearSnapResetTimeout = useCallback(() => {
        if (snapResetTimeoutRef.current != null) {
            clearTimeout(snapResetTimeoutRef.current);
            snapResetTimeoutRef.current = null;
        }
    }, []);

    const clearFlyoutFallback = useCallback(() => {
        if (flyoutFallbackRef.current != null) {
            clearTimeout(flyoutFallbackRef.current);
            flyoutFallbackRef.current = null;
        }
    }, []);

    const clearStackShiftTimeout = useCallback(() => {
        if (stackShiftTimeoutRef.current != null) {
            clearTimeout(stackShiftTimeoutRef.current);
            stackShiftTimeoutRef.current = null;
        }
    }, []);

    const clearPostFlyoutPauseTimeout = useCallback(() => {
        if (postFlyoutPauseTimeoutRef.current != null) {
            clearTimeout(postFlyoutPauseTimeoutRef.current);
            postFlyoutPauseTimeoutRef.current = null;
        }
    }, []);

    const finishHandoffReveal = useCallback(() => {
        if (handoffFinishedRef.current) return;
        handoffFinishedRef.current = true;
        pendingOrderRef.current = null;
        setStackShiftSlow(false);
        setHideBackSlot(false);
        clearSnapResetTimeout();
        setSnapTransforms(true);

        if (!reducedMotion) {
            setNewBackPop(true);
            clearNewBackPopTimeout();
            newBackPopTimeoutRef.current = window.setTimeout(() => {
                setNewBackPop(false);
                newBackPopTimeoutRef.current = null;
            }, NEW_BACK_POP_MS);
        }

        snapResetTimeoutRef.current = window.setTimeout(() => {
            setSnapTransforms(false);
            snapResetTimeoutRef.current = null;
        }, 0);
    }, [reducedMotion, clearNewBackPopTimeout, clearSnapResetTimeout]);

    const applyStackRotation = useCallback(() => {
        const next = pendingOrderRef.current;
        if (next == null) return;

        pendingOrderRef.current = null;
        setOrder(next);
        setHiddenFrontCaseIndex(null);
        setStackShiftSlow(true);
        setHideBackSlot(true);
        clearStackShiftTimeout();

        stackShiftTimeoutRef.current = window.setTimeout(() => {
            stackShiftTimeoutRef.current = null;
            finishHandoffReveal();
        }, STACK_SHIFT_MS);
    }, [clearStackShiftTimeout, finishHandoffReveal]);

    const onFlyoutDetachDone = useCallback(() => {
        if (pendingOrderRef.current == null) return;

        setFlyoutCaseIndex(null);
        clearPostFlyoutPauseTimeout();
        postFlyoutPauseTimeoutRef.current = window.setTimeout(() => {
            postFlyoutPauseTimeoutRef.current = null;
            applyStackRotation();
        }, POST_FLYOUT_PAUSE_MS);
    }, [applyStackRotation, clearPostFlyoutPauseTimeout]);

    const beginHandoff = useCallback(() => {
        handoffFinishedRef.current = false;
        clearStackShiftTimeout();
        clearPostFlyoutPauseTimeout();

        const [a, b, c] = orderRef.current;
        pendingOrderRef.current = [b, c, a];
        setHiddenFrontCaseIndex(a);
        setFlyoutCaseIndex(a);
        setPhase("processing");
    }, [clearStackShiftTimeout, clearPostFlyoutPauseTimeout]);

    const runReducedHandoff = useCallback(() => {
        setOrder(([a, b, c]) => [b, c, a]);
        setPhase("processing");
        setFlyoutCaseIndex(null);
        setHideBackSlot(false);
        setNewBackPop(false);
        setStackShiftSlow(false);
        setHiddenFrontCaseIndex(null);
        pendingOrderRef.current = null;
        clearStackShiftTimeout();
        clearPostFlyoutPauseTimeout();
        clearSnapResetTimeout();
        setSnapTransforms(true);
        snapResetTimeoutRef.current = window.setTimeout(() => {
            setSnapTransforms(false);
            snapResetTimeoutRef.current = null;
        }, 0);
    }, [
        clearSnapResetTimeout,
        clearPostFlyoutPauseTimeout,
        clearStackShiftTimeout,
    ]);

    useEffect(() => {
        if (reducedMotion) return;

        if (phase !== "processing") return;

        /* Same window as progress bar: don’t count flyout + pause toward PROCESSING_MS */
        if (hiddenFrontCaseIndex != null) return;

        const id = window.setTimeout(() => {
            setPhase("completed");
        }, PROCESSING_MS);

        return () => clearTimeout(id);
    }, [phase, reducedMotion, hiddenFrontCaseIndex]);

    useEffect(() => {
        if (phase !== "completed") return;

        if (reducedMotion) {
            const id = window.setTimeout(runReducedHandoff, COMPLETED_MS);
            return () => clearTimeout(id);
        }

        const id = window.setTimeout(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    beginHandoff();
                });
            });
        }, COMPLETED_MS);

        return () => {
            clearTimeout(id);
            clearFlyoutFallback();
        };
    }, [
        phase,
        reducedMotion,
        beginHandoff,
        runReducedHandoff,
        clearFlyoutFallback,
    ]);

    /** If CSS animation end doesn’t fire, complete handoff after flyout duration */
    useEffect(() => {
        if (flyoutCaseIndex == null || reducedMotion) return;

        clearFlyoutFallback();
        flyoutFallbackRef.current = window.setTimeout(() => {
            flyoutFallbackRef.current = null;
            onFlyoutDetachDone();
        }, FLYOUT_MS + 50);

        return () => {
            clearFlyoutFallback();
        };
    }, [
        flyoutCaseIndex,
        reducedMotion,
        onFlyoutDetachDone,
        clearFlyoutFallback,
    ]);

    useEffect(
        () => () => {
            clearSnapResetTimeout();
            clearFlyoutFallback();
            clearStackShiftTimeout();
            clearPostFlyoutPauseTimeout();
        },
        [
            clearSnapResetTimeout,
            clearFlyoutFallback,
            clearStackShiftTimeout,
            clearPostFlyoutPauseTimeout,
        ],
    );

    const transitionEnabled = !snapTransforms && !reducedMotion;
    const layerTransitionMs = stackShiftSlow
        ? STACK_SHIFT_MS
        : DEFAULT_LAYER_TRANSITION_MS;

    const flyoutCase = flyoutCaseIndex != null ? CASES[flyoutCaseIndex] : null;

    return (
        <div className="animate-hero-fade-in-right relative isolate mx-auto w-full max-w-md overflow-visible delay-500 lg:max-w-lg">
            <div className="relative z-10 mx-auto min-h-[520px] w-full md:min-h-[540px] lg:mt-52">
                {flyoutCase && (
                    <ExitFlyoutCard
                        authCase={flyoutCase}
                        reducedMotion={reducedMotion}
                        onAnimationEnd={() => {
                            clearFlyoutFallback();
                            onFlyoutDetachDone();
                        }}
                    />
                )}

                {([0, 1, 2] as const).map((caseIndex) => {
                    const depth = order.indexOf(caseIndex) as 0 | 1 | 2;
                    return (
                        <AgentStackLayer
                            key={caseIndex}
                            authCase={CASES[caseIndex]!}
                            depth={depth}
                            phase={phase}
                            isFront={depth === 0}
                            newBackPop={newBackPop}
                            transitionEnabled={transitionEnabled}
                            hideFrontVisual={
                                depth === 0 &&
                                hiddenFrontCaseIndex === caseIndex
                            }
                            hideBackVisual={depth === 2 && hideBackSlot}
                            transitionDurationMs={layerTransitionMs}
                            reducedMotion={reducedMotion}
                            liveProcessingProgress={liveProcessingProgress}
                        />
                    );
                })}
            </div>
        </div>
    );
}
