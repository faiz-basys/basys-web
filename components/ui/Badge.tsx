export default function Badge({
    icon,
    title,
    className,
    tone = "light",
}: {
    title: string;
    icon?: string;
    className?: string;
    tone?: "light" | "dark";
}) {
    const isDark = tone === "dark";
    return (
        <div
            className={`animate-hero-fade-up animate-hero-pill inline-flex items-center gap-2 rounded-pill border border-outline-variant ${isDark ? "bg-gray-800/80 border-transparent" : "bg-surface-container-highest"} px-3 py-1 ${className}`}
        >
            {icon && (
                <span
                    className={`material-symbols-outlined text-[14px] ${isDark ? "text-white" : "text-primary"}`}
                >
                    {icon}
                </span>
            )}
            <span
                className={`text-xs font-semibold tracking-wider ${isDark ? "text-white" : "text-primary"}`}
            >
                {title}
            </span>
        </div>
    );
}
