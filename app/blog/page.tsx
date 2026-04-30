import { BlogRoomContent } from "@/components/blog/BlogRoomContent";
import { GeneralNewsletterCtaSection } from "@/components/newsletter/GeneralNewsletterCtaSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { blogItemsSortedNewestFirst } from "@/lib/blog/blogItems";

export default function BlogPage() {
    const ordered = blogItemsSortedNewestFirst();

    return (
        <main className="mx-auto min-h-screen max-w-7xl px-8 pt-32 pb-8">
            <header className="mb-8">
                <span className="mb-4 inline-block rounded-pill bg-surface-container-high px-4 py-2 text-xs font-semibold tracking-widest text-on-primary-container uppercase">
                    Insights &amp; ideas
                </span>
                <h1 className="mb-2 text-5xl font-bold text-primary">
                    Blog
                </h1>
                <p className="max-w-2xl text-lg text-secondary">
                    Long-form perspectives on agentic AI, healthcare policy,
                    clinical operations, and the future of autonomous health
                    intelligence.
                </p>
            </header>

            <BlogRoomContent items={ordered} />

            <GeneralNewsletterCtaSection
                title="Never miss an insight"
                description="Subscribe for new articles on agentic AI, policy, and clinical operations — plus occasional company updates."
            />
            <FinalCtaSection />
        </main>
    );
}
