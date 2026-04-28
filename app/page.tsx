import { EcosystemUpdatesSection } from "@/components/sections/EcosystemUpdatesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValuePropsSection } from "@/components/sections/ValuePropsSection";

export default function Home() {
    return (
        <main className="pt-20 md:pt-0">
            <HeroSection />
            <TrustBar />
            <EcosystemUpdatesSection />
            <ValuePropsSection />
            <FinalCtaSection />
        </main>
    );
}
