import type { Metadata } from "next";
import { TrustBar } from "@/components/sections/TrustBar";
import { ScrollToTopButton } from "@/components/white-paper/ScrollToTopButton";
import { WhitePaperRequestForm } from "@/components/white-paper/WhitePaperRequestForm";
import { WhitePaperScrollExperience } from "@/components/white-paper/WhitePaperScrollExperience";
import { WhitePapersOverview } from "@/components/white-paper/WhitePapersOverview";

export const metadata: Metadata = {
    title: "White Papers | basys.ai",
    description:
        "Research and whitepapers on payment integrity, fraud waste & abuse, and agentic prior authorization for health plans.",
};

export default function WhitePapersPage() {
    return (
        <main className="pt-20">
            <WhitePapersOverview />
            <WhitePaperScrollExperience />

            <section
                id="whitepaper-form"
                className="scroll-mt-28 border-t border-outline/10 bg-surface-container-low px-6 py-20 md:px-8"
            >
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">
                        Request the Full Whitepapers
                    </h2>
                    <p className="mt-4 text-center text-on-surface-variant">
                        Select the reports you need and our team will follow up
                        with access.
                    </p>
                    <WhitePaperRequestForm />
                </div>
            </section>

            <TrustBar />

            <ScrollToTopButton />
        </main>
    );
}
