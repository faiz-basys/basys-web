"use client";

import { smoothScrollToTop } from "@/lib/smoothScroll";
import { useEffect, useState, useSyncExternalStore } from "react";

const SHOW_AFTER_PX = 320;

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

export function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    const reducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot,
    );

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SHOW_AFTER_PX);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={smoothScrollToTop}
            aria-label="Scroll to top"
            className={`fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full border border-outline/15 bg-surface-container-lowest text-primary shadow-lg transition-all hover:bg-surface-container-low active:scale-95 motion-reduce:transition-none ${
                visible
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
            } ${reducedMotion ? "" : "duration-300"}`}
        >
            <span className="material-symbols-outlined text-2xl" aria-hidden>
                keyboard_arrow_up
            </span>
        </button>
    );
}
