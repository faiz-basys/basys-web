export type CareerJob = {
    slug: string;
    title: string;
    location: string;
    type: string;
    icon: string;
    iconBgClass: string;
};

/** Use `[]` when there are no listed openings. */
export const jobRoles: CareerJob[] = [
    {
        slug: "senior-ai-research-scientist",
        title: "Senior AI Research Scientist",
        location: "Remote",
        type: "Full-time",
        icon: "smart_toy",
        iconBgClass: "bg-primary",
    },
    {
        slug: "clinical-lead-oncology",
        title: "Clinical Lead (Oncology)",
        location: "Cambridge, MA",
        type: "Full-time",
        icon: "stethoscope",
        iconBgClass: "bg-primary",
    },
    {
        slug: "mlops-engineer",
        title: "MLOps Engineer",
        location: "Cambridge, MA",
        type: "Full-time",
        icon: "database",
        iconBgClass: "bg-primary",
    },
];

export const GENERAL_APPLICATION_SLUG = "general";

const generalApplication: CareerJob = {
    slug: GENERAL_APPLICATION_SLUG,
    title: "General application",
    location: "Remote / Cambridge, MA",
    type: "Full-time",
    icon: "person_add",
    iconBgClass: "bg-primary",
};

export function getJobBySlug(slug: string): CareerJob | undefined {
    if (slug === GENERAL_APPLICATION_SLUG) {
        return generalApplication;
    }
    return jobRoles.find((j) => j.slug === slug);
}
