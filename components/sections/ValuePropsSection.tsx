type ValueProp = {
    icon: string;
    title: string;
    description: string;
};

const valueProps: ValueProp[] = [
    {
        icon: "gavel",
        title: "Compliance First",
        description:
            "Full HIPAA/SOC2 compliance with audit trails for every AI-driven decision made at scale.",
    },
    {
        icon: "visibility",
        title: "Explainable AI",
        description:
            'No "Black Box" logic. Every approval is backed by literal citations from clinical guidelines.',
    },
    {
        icon: "hub",
        title: "FHIR Ready",
        description:
            "Native FHIR interoperability ensuring seamless data flow between payers and providers.",
    },
    {
        icon: "auto_awesome",
        title: "Learning Copilot",
        description:
            "Continuous learning loops that refine authorization logic based on clinical outcome data.",
    },
];

export function ValuePropsSection() {
    return (
        <section className="bg-surface-container-low py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-4 text-4xl leading-tight font-bold">
                        Precision-Built for the Enterprise.
                    </h2>
                    <p className="text-lg text-on-surface-variant">
                        Healthcare infrastructure requires more than just
                        intelligence-it demands absolute governance and
                        interoperability.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {valueProps.map((valueProp) => (
                        <article
                            key={valueProp.title}
                            className="flex flex-col gap-6 rounded-4xl border border-outline-variant/30 bg-surface-container-lowest p-8"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-primary/5">
                                <span className="material-symbols-outlined text-primary">
                                    {valueProp.icon}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold">
                                    {valueProp.title}
                                </h3>
                                <p className="text-sm text-on-surface-variant">
                                    {valueProp.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
