export function prefersReducedMotion(): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function smoothScrollToId(
    targetId: string,
    options?: {
        block?: ScrollLogicalPosition;
        updateHash?: boolean;
    },
): boolean {
    const id = targetId.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return false;

    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    el.scrollIntoView({
        behavior,
        block: options?.block ?? "start",
    });

    if (options?.updateHash !== false) {
        const hash = `#${id}`;
        if (window.location.hash !== hash) {
            window.history.replaceState(null, "", hash);
        }
    }

    return true;
}

export function smoothScrollToTop(): void {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });

    if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
    }
}
