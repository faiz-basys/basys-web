"use client";

import { useEffect, useRef, useState } from "react";

/** Full pool of resources; only 3 rows visible - they rotate as items sync */
export const EHR_RESOURCE_POOL = [
    { id: "prob", label: "Problems · ICD-10" },
    { id: "rx", label: "Medications · RxNorm" },
    { id: "enc", label: "Encounters · last 72h" },
    { id: "allergy", label: "Allergies · NKA / NKDA" },
    { id: "labs", label: "Labs · LOINC results" },
    { id: "imm", label: "Immunizations · CVX" },
    { id: "vitals", label: "Vitals · streaming" },
    { id: "proc", label: "Procedures · CPT" },
    { id: "orders", label: "Orders · active set" },
    { id: "notes", label: "Documents · clinical notes" },
    { id: "diag", label: "Diagnoses · SNOMED CT" },
    { id: "careteam", label: "Care team · FHIR CareTeam" },
] as const;

const PULL_MS = 2800;
const SHIFT_AFTER_SYNC_MS = 750;

/** One row block + gap-0.5 - must match row `h-[22px]` + `gap-0.5` below */
const ROW_H = 22;
const ROW_GAP = 2;
const ROW_STEP = ROW_H + ROW_GAP;
/** Viewport fits exactly 3 rows + 2 gaps */
const VIEWPORT_H = 3 * ROW_H + 2 * ROW_GAP;

type Phase = "pulling" | "synced";

type FeedRow = { key: number; label: string; phase: Phase };

type BottomSnapshot = { key: number; phase: Phase };

type PendingScroll = { before: FeedRow[]; after: FeedRow[] };

function FeedRowLine({ row }: { row: FeedRow }) {
    return (
        <div
            className={`flex h-[22px] shrink-0 items-center justify-between gap-1 rounded-md border border-zinc-800/60 bg-zinc-900/80 px-1.5 py-0 transition-colors duration-300 ${
                row.phase === "pulling"
                    ? "border-sky-900/40 bg-zinc-900/95"
                    : ""
            }`}
        >
            <div className="flex min-w-0 flex-1 items-center gap-1">
                <span
                    className="flex shrink-0 items-center justify-center overflow-hidden text-[12px] leading-none"
                    aria-hidden
                >
                    {row.phase === "pulling" ? (
                        <span className="material-symbols-outlined block text-sky-400 motion-reduce:animate-none animate-spin">
                            sync
                        </span>
                    ) : (
                        <span className="material-symbols-outlined block text-emerald-400">
                            check_circle
                        </span>
                    )}
                </span>
                <span className="truncate text-left text-[8px] leading-tight font-medium text-zinc-200">
                    {row.label}
                </span>
            </div>
            <span
                className={`inline-flex min-w-19 shrink-0 justify-end text-[7px] font-semibold tracking-wide uppercase ${
                    row.phase === "pulling"
                        ? "text-sky-300/90"
                        : "text-zinc-400"
                }`}
            >
                {row.phase === "pulling" ? "FHIR pull" : "Synced"}
            </span>
        </div>
    );
}

export function EhrSyncFeed() {
    const keyRef = useRef(2);
    const poolNextRef = useRef(3 % EHR_RESOURCE_POOL.length);
    const prevBottomRef = useRef<BottomSnapshot | null>(null);
    const rowsRef = useRef<FeedRow[]>([]);

    const [rows, setRows] = useState<FeedRow[]>(() => [
        {
            key: 0,
            label: EHR_RESOURCE_POOL[0].label,
            phase: "synced",
        },
        {
            key: 1,
            label: EHR_RESOURCE_POOL[1].label,
            phase: "synced",
        },
        {
            key: 2,
            label: EHR_RESOURCE_POOL[2].label,
            phase: "pulling",
        },
    ]);

    const [pendingScroll, setPendingScroll] = useState<PendingScroll | null>(
        null,
    );
    const [slideY, setSlideY] = useState(0);

    rowsRef.current = rows;

    // Bottom row: FHIR pull → Synced after PULL_MS
    useEffect(() => {
        const bottom = rows[2];
        if (!bottom || bottom.phase !== "pulling") return;
        const t = window.setTimeout(() => {
            setRows((prev) =>
                prev.map((r, i) =>
                    i === 2 ? { ...r, phase: "synced" as const } : r,
                ),
            );
        }, PULL_MS);
        return () => window.clearTimeout(t);
    }, [rows[2]?.key, rows[2]?.phase]);

    // After bottom finishes pulling → synced: schedule scroll (not instant row swap)
    useEffect(() => {
        const bottom = rows[2];
        if (!bottom) {
            prevBottomRef.current = null;
            return;
        }

        const prev = prevBottomRef.current;
        const transitionedPullToSync =
            prev !== null &&
            prev.key === bottom.key &&
            prev.phase === "pulling" &&
            bottom.phase === "synced";

        if (transitionedPullToSync) {
            const t = window.setTimeout(() => {
                const prevRows = rowsRef.current;
                const idx = poolNextRef.current % EHR_RESOURCE_POOL.length;
                poolNextRef.current++;
                keyRef.current += 1;
                const nextBottom: FeedRow = {
                    key: keyRef.current,
                    label: EHR_RESOURCE_POOL[idx].label,
                    phase: "pulling",
                };
                const after: FeedRow[] = [prevRows[1], prevRows[2], nextBottom];
                setSlideY(0);
                setPendingScroll({ before: prevRows, after });
            }, SHIFT_AFTER_SYNC_MS);
            prevBottomRef.current = {
                key: bottom.key,
                phase: bottom.phase,
            };
            return () => window.clearTimeout(t);
        }

        prevBottomRef.current = {
            key: bottom.key,
            phase: bottom.phase,
        };
    }, [rows]);

    // Start transform once 4-row strip is mounted (skip if reduced motion)
    useEffect(() => {
        if (!pendingScroll) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion) {
            setRows(pendingScroll.after);
            setPendingScroll(null);
            setSlideY(0);
            return;
        }

        let raf2 = 0;
        const raf1 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
                setSlideY(-ROW_STEP);
            });
        });
        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, [pendingScroll]);

    function handleStripTransitionEnd(
        e: React.TransitionEvent<HTMLDivElement>,
    ) {
        if (e.propertyName !== "transform") return;
        if (e.target !== e.currentTarget) return;
        if (!pendingScroll || slideY >= 0) return;

        const next = pendingScroll.after;
        setPendingScroll(null);
        setSlideY(0);
        setRows(next);
    }

    const stripRows: FeedRow[] = pendingScroll
        ? [...pendingScroll.before, pendingScroll.after[2]]
        : rows;

    const stripTransitionClass = pendingScroll
        ? "transition-transform duration-300 ease-out motion-reduce:transition-none"
        : "";

    return (
        <div
            className="mb-3 w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            aria-live="polite"
            aria-label="Live EHR synchronization status"
        >
            <div className="mb-1.5 flex items-center justify-between gap-1 border-b border-zinc-800/80 pb-1">
                <span className="text-[7px] font-bold tracking-wider text-white uppercase">
                    EHR live
                </span>
                <span className="font-mono text-[7px] text-white">FHIR R4</span>
            </div>

            <div
                className="relative overflow-hidden"
                style={{ height: VIEWPORT_H }}
            >
                <div
                    className={`flex flex-col gap-0.5 ${stripTransitionClass}`}
                    style={{
                        transform: `translateY(${slideY}px)`,
                        willChange: pendingScroll ? "transform" : undefined,
                    }}
                    onTransitionEnd={handleStripTransitionEnd}
                >
                    {stripRows.map((row) => (
                        <FeedRowLine key={row.key} row={row} />
                    ))}
                </div>
            </div>
        </div>
    );
}
