import type { Metadata } from "next";
import { TrustBar } from "@/components/sections/TrustBar";
import { ScrollToTopButton } from "@/components/white-paper/ScrollToTopButton";
import { WhitePaperRequestForm } from "@/components/white-paper/WhitePaperRequestForm";
import { WhitePaperScrollExperience } from "@/components/white-paper/WhitePaperScrollExperience";

export const metadata: Metadata = {
    title: "White Paper Preview | basys.ai",
    description:
        "Closing the blind spots in fraud, waste & abuse—and reimagining prior authorization with agentic AI. Interactive whitepaper previews for health plans.",
};

export default function WhitePaperPreviewPage() {
    return (
        <main className="pt-20">
            <WhitePaperScrollExperience />

            <section
                id="whitepaper-form"
                className="scroll-mt-28 border-t border-outline/10 bg-surface-container-low px-6 py-20 md:px-8"
            >
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">
                        Ready to Transform Prior Authorization for your Health
                        Plan?
                    </h2>
                    <p className="mt-4 text-center text-on-surface-variant">
                        Request the full whitepaper here:
                    </p>
                    <WhitePaperRequestForm />
                </div>
            </section>

            <TrustBar />

            <ScrollToTopButton />
        </main>
    );
}
