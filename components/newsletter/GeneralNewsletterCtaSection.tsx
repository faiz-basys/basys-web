import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";

type GeneralNewsletterCtaSectionProps = {
    /** Main heading, e.g. "Stay in the loop" */
    title: string;
    /** Supporting line under the title */
    description: string;
};

/**
 * Shared visual block for News / Blog newsletter signup (general Sendy list).
 */
export function GeneralNewsletterCtaSection({
    title,
    description,
}: GeneralNewsletterCtaSectionProps) {
    return (
        <section className="relative mt-20 overflow-hidden rounded-4xl bg-secondary-container p-8 text-center md:mt-24 md:p-24">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-pill bg-primary opacity-5" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-pill bg-primary opacity-5" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
                <p className="text-lg text-on-secondary-container">
                    {description}
                </p>
                <NewsletterSignupForm variant="general" />
            </div>
        </section>
    );
}
