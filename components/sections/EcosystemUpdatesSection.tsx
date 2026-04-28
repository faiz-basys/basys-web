type UpdateCard = {
  label: string;
  title: string;
  icon: string;
  className: string;
};

const updateCards: UpdateCard[] = [
  {
    label: "GARTNER",
    title: "Named as 'Cool Vendor' in AI for Healthcare Payers.",
    icon: "analytics",
    className:
      "bg-surface-container-high hover:scale-[1.02] transition-transform cursor-pointer",
  },
  {
    label: "MAYO CLINIC",
    title: "New clinical validation study published in Nature Medicine.",
    icon: "science",
    className: "bg-surface-container hover:scale-[1.02] transition-transform cursor-pointer",
  },
  {
    label: "EXPANSION",
    title: "basys.ai opens Cambridge Innovation Hub.",
    icon: "location_city",
    className:
      "border border-outline-variant bg-surface-container-lowest hover:scale-[1.02] transition-transform cursor-pointer",
  },
];

export function EcosystemUpdatesSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Ecosystem Updates</h2>
          <p className="text-sm text-on-surface-variant">
            Latest highlights from our partners and clinical networks.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant transition-colors hover:bg-surface-container">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-pill border border-outline-variant transition-colors hover:bg-surface-container">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="grid h-auto grid-cols-1 gap-6 md:h-[400px] md:grid-cols-5">
        <div className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-2">
          <div className="relative z-10">
            <span className="rounded-pill bg-white/20 px-3 py-1 text-xs backdrop-blur-md">
              Featured News
            </span>
            <h3 className="mt-4 text-2xl leading-tight font-semibold">
              CMS 2024 Guidelines: basys.ai achieves 100% compliance alignment.
            </h3>
          </div>
          <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium">
            Read Story <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent opacity-60" />
        </div>

        {updateCards.map((card) => (
          <article
            key={card.title}
            className={`flex flex-col justify-between rounded-[2rem] p-6 ${card.className}`}
          >
            <div className="text-xs text-on-surface-variant">{card.label}</div>
            <h3 className="text-lg leading-snug font-semibold">{card.title}</h3>
            <span className="material-symbols-outlined text-primary">{card.icon}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
