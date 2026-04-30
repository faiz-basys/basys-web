import { NewsRoomContent } from "@/components/news/NewsRoomContent";
import { GeneralNewsletterCtaSection } from "@/components/newsletter/GeneralNewsletterCtaSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { newsItemsSortedNewestFirst } from "@/lib/news/newsItems";

export default function NewsPage() {
    const ordered = newsItemsSortedNewestFirst();

    return (
        <main className="mx-auto min-h-screen max-w-7xl px-8 pt-32 pb-8">
            <header className="mb-8">
                <span className="mb-4 inline-block rounded-pill bg-surface-container-high px-4 py-2 text-xs font-semibold tracking-widest text-on-primary-container uppercase">
                    Press &amp; Insights
                </span>
                <h1 className="mb-2 text-5xl font-bold text-primary">
                    Newsroom
                </h1>
                <p className="max-w-2xl text-lg text-secondary">
                    The latest updates on our mission to revolutionize clinical
                    documentation and prior authorization with autonomous health
                    AI.
                </p>
            </header>

            <NewsRoomContent items={ordered} />

            <GeneralNewsletterCtaSection
                title="Stay in the loop"
                description="Get basys.ai announcements, press highlights, and product news — occasional emails, no clutter."
            />
            <FinalCtaSection />
        </main>
    );
}
