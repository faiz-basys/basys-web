export type CareerHeroRole = {
    title: string;
    icon: string;
};

function shortTitle(title: string): string {
    const words = title.split(/\s+/);
    if (words.length <= 2) return title;
    if (title.length <= 22) return title;
    return `${words.slice(0, 2).join(" ")}…`;
}

export function CareerHiringHero({ roles = [] }: { roles?: CareerHeroRole[] }) {
    const count = roles.length;
    const angleStep = count > 0 ? 360 / count : 0;

    return (
        <div
            className="animate-hero-fade-in-right relative isolate w-full delay-200 motion-reduce:animate-none"
            role="img"
            aria-label={
                count === 0
                    ? "Illustration: basys.ai hiring hub. No roles are listed at the moment."
                    : `Illustration: ${count} open roles orbit a hiring hub at basys.ai. Motion can be reduced via system settings.`
            }
        >
            <div className="relative overflow-hidden rounded-4xl border border-outline/10 bg-linear-to-br from-surface-container-low via-white to-primary/4 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:px-8 sm:py-12">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-outline-variant) 1px, transparent 0)`,
                        backgroundSize: "28px 28px",
                    }}
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-primary/7 blur-3xl"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
                    aria-hidden
                />

                <div className="relative mx-auto flex min-h-[300px] max-w-[380px] items-center justify-center sm:min-h-[340px]">
                    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                        <div
                            className="absolute h-[72%] max-h-[280px] w-[72%] max-w-[280px] rounded-full border border-primary/8 animate-career-orbit-ring motion-reduce:animate-none"
                            aria-hidden
                        />
                        <div
                            className="absolute h-[86%] max-h-[320px] w-[86%] max-w-[320px] rounded-full border border-primary/6 animate-career-orbit-ring motion-reduce:animate-none"
                            style={{ animationDelay: "1.2s" }}
                            aria-hidden
                        />
                    </div>

                    <div className="relative z-20 flex w-[min(220px,85%)] flex-col items-center rounded-3xl border border-white/60 bg-primary px-6 py-7 text-center text-on-primary shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                        <span
                            className="material-symbols-outlined text-[40px] opacity-95"
                            aria-hidden
                        >
                            rocket_launch
                        </span>
                        <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-on-primary/80 uppercase">
                            {count === 0 ? "Talent network" : "Now hiring"}
                        </p>
                        <p className="mt-2 text-lg font-bold tracking-tight">
                            basys.ai
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-on-primary/75">
                            {count === 0
                                ? "New roles open regularly—join the list below to hear first."
                                : "Clinical intelligence, built by people who care about outcomes."}
                        </p>
                    </div>

                    {count > 0 ? (
                        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center animate-career-orbit-slow motion-reduce:animate-none">
                            {roles.map((role, i) => (
                                <div
                                    key={role.title}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${i * angleStep}deg) translateY(-148px)`,
                                    }}
                                >
                                    <div className="flex max-w-[132px] -translate-x-1/2 flex-col items-center animate-career-orbit-counter motion-reduce:animate-none">
                                        <div className="rounded-2xl border border-outline/15 bg-white/95 px-3 py-2.5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                                            <span
                                                className="material-symbols-outlined mb-1 block text-[20px] text-primary"
                                                aria-hidden
                                            >
                                                {role.icon}
                                            </span>
                                            <p className="text-[10px] font-semibold leading-snug text-primary sm:text-[11px]">
                                                {shortTitle(role.title)}
                                            </p>
                                            <p className="mt-1 line-clamp-2 text-[9px] leading-snug text-on-surface-variant">
                                                {role.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>

                <p className="relative mt-8 text-center text-xs font-medium text-on-surface-variant">
                    {count === 0 ? (
                        <>
                            No open roles listed · Remote &amp; hybrid ·
                            Cambridge, MA
                        </>
                    ) : (
                        <>
                            <span className="text-primary">{count}</span> open
                            role{count === 1 ? "" : "s"} · Remote &amp; hybrid ·
                            Cambridge, MA
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
