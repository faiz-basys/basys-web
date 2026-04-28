import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";

const products = [
    {
        icon: "verified_user",
        title: "Prior Auth Agent",
        description:
            "Automate the end-to-end authorization lifecycle with 99.9% accuracy. Designed for seamless integration with payer and provider systems.",
        ctaLabel: "EXPLORE SOLUTION",
        className: "md:col-span-8 min-h-[480px]",
        previewImageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Eq8gLj6iWUV16tutXq9nL0a6mGqyRkypCgRZZOa2Z7H0CscekskGX3FCB0uJEKWk-mUJTqeWWkkyDj44q2FMfC4I4_zD9YZKZfF7NwAFfg5L0vGk_2likTTLNNUTuUvBsixkOmSvhPmCi-OnU7qgLe6lSjq-KMkErOQ2Lsx2Y0fNNHU3IH5P3-2BzfNIEQNTu6sh7bRShzzDuQ-iO7y4wZ8eTSlZOF12AnDAf292OVBUxcE9X4MB_7Jpb2Dby4oo2zWJRgZD35I",
        previewImageAlt:
            "Clean medical dashboard with minimalist data visualizations and soft lighting.",
    },
    {
        icon: "psychology",
        title: "Medical Necessity Engine",
        description:
            "Real-time clinical alignment powered by multi-agent semantic search and rigorous policy enforcement.",
        ctaLabel: "LEARN MORE",
        tone: "dark" as const,
        className: "md:col-span-4 min-h-[480px]",
    },
    {
        icon: "payments",
        title: "Payment Integrity",
        description:
            "Fraud and waste detection using autonomous agents that monitor billing patterns and audit clinical documentation instantly.",
        ctaLabel: "LEARN MORE",
        className: "md:col-span-4 min-h-[400px] bg-secondary-fixed",
    },
    {
        icon: "clinical_notes",
        title: "Provider Portal",
        description:
            "A seamless interface for clinical documentation submission and status tracking with intelligent field mapping.",
        ctaLabel: "LEARN MORE",
        className: "md:col-span-4 min-h-[400px]",
    },
    {
        icon: "hub",
        title: "Interoperability Bridge",
        description:
            "Native FHIR and HL7 data orchestration to connect legacy systems to modern AI workflows with zero friction.",
        ctaLabel: "LEARN MORE",
        className: "md:col-span-4 min-h-[400px] bg-surface-container-high",
    },
];

export default function ProductsPage() {
    return (
        <main className="pb-12 pt-24">
            <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:py-24">
                <div className="mb-6 inline-flex items-center rounded-pill bg-secondary-fixed px-3 py-1 text-xs tracking-widest text-on-surface-variant uppercase">
                    Infrastructure
                </div>
                <h1 className="mx-auto mb-6 max-w-4xl text-5xl leading-tight font-bold text-primary md:text-6xl">
                    Modular AI Solutions for Healthcare Infrastructure.
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-secondary">
                    Precision-built agents and engines to automate clinical
                    workflows, designed for high-stakes enterprise environments.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto">
                        Request a Demo
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-outline"
                    >
                        Contact Sales
                    </Button>
                </div>
            </section>

            <section className="mb-20">
                <TrustBar />
            </section>

            <section className="mx-auto mb-32 max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    {products.map((product) => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
            </section>

            <FinalCtaSection />
        </main>
    );
}
