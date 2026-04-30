import { JobApplicationForm } from "@/components/career/JobApplicationForm";
import { getJobBySlug } from "@/lib/career/jobs";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const job = getJobBySlug(slug);
    if (!job) {
        return { title: "Apply | basys.ai" };
    }
    return {
        title: `Apply — ${job.title} | basys.ai`,
        description: `Submit your application for ${job.title} at basys.ai.`,
    };
}

export default async function CareerApplyPage({ params }: PageProps) {
    const { slug } = await params;
    const job = getJobBySlug(slug);

    if (!job) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-8 pt-32 pb-24">
            <nav className="mb-10 text-sm text-on-surface-variant">
                <Link
                    href="/career"
                    className="font-medium text-primary hover:underline"
                >
                    Careers
                </Link>
                <span className="mx-2">/</span>
                <span className="text-on-surface">Apply</span>
            </nav>

            <header className="mb-10">
                <h1 className="text-4xl font-bold text-primary">
                    Job application
                </h1>
                <p className="mt-3 text-lg text-on-surface-variant">
                    Complete the form below. Our recruiting team reviews every
                    submission.
                </p>
            </header>

            <JobApplicationForm roleSlug={job.slug} roleTitle={job.title} />

            <div className="mt-12 border-t border-outline/15 pt-8 text-center">
                <p className="text-sm text-on-surface-variant">
                    Wrong role?{" "}
                    <Link
                        href="/career#jobs"
                        className="font-semibold text-primary underline"
                    >
                        View all openings
                    </Link>
                </p>
            </div>
        </main>
    );
}
