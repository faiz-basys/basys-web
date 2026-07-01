"use client";

import { Button } from "@/components/ui/Button";
import { smoothScrollToId } from "@/lib/smoothScroll";
import type { ComponentProps, MouseEvent } from "react";

type SmoothScrollButtonProps = Omit<ComponentProps<typeof Button>, "href"> & {
    href: string;
    scrollBlock?: ScrollLogicalPosition;
};

export function SmoothScrollButton({
    href,
    scrollBlock = "start",
    onClick,
    ...props
}: SmoothScrollButtonProps) {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (href.startsWith("#")) {
            event.preventDefault();
            smoothScrollToId(href, { block: scrollBlock });
        }
        onClick?.(event);
    };

    return <Button href={href} onClick={handleClick} {...props} />;
}
