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

/** Scroll `item` into view inside `container` without moving the page. */
export function scrollElementWithinContainer(
    container: HTMLElement,
    item: HTMLElement,
): void {
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    if (itemRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - itemRect.top;
    } else if (itemRect.bottom > containerRect.bottom) {
        container.scrollTop += itemRect.bottom - containerRect.bottom;
    }
}
