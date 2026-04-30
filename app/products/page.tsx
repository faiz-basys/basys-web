import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { TrustBar } from "@/components/sections/TrustBar";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";

const products = [
    {
        icon: "verified_user",
        title: "Prior Auth App",
        description:
            "Automate the entire prior authorization process from intake through review and outcome - connecting payers, providers, patients, and policies with secure documents, clinical context, EHR/FHIR paths, and configurable AI-assisted workflows.",
        ctaLabel: "EXPLORE SOLUTION",
        href: "/products/prior-auth",
        className: "md:col-span-8 min-h-[480px]",
    },
    {
        icon: "rate_review",
        title: "Medical Record Review",
        description:
            "AI-assisted chart review for payers and partners-structured validation, ICD-10 aware coding, HCC-aligned insights, and audit-ready workflows from cover letters and PDFs.",
        ctaLabel: "LEARN MORE",
        tone: "dark" as const,
        href: "/products/medical-record-review",
        className: "md:col-span-4 min-h-[480px]",
    },
    {
        icon: "monitor_heart",
        title: "Utilization Management AI",
        description:
            "Streamline concurrent and retrospective review with AI that understands clinical context-reducing unnecessary admissions and denials.",
        ctaLabel: "LEARN MORE",
        href: "/products/utilization-management-ai",
        className: "md:col-span-4 min-h-[400px] bg-secondary-fixed",
    },
    {
        icon: "radar",
        title: "AI-Powered FWA Detection",
        description:
            "Proactively identify potential fraud, waste, and abuse across claims and prior authorization real-time pattern analysis, risk scoring, and policy-aware insights for payers and providers.",
        ctaLabel: "LEARN MORE",
        tone: "dark" as const,
        href: "/products/fwa-detection",
        className: "md:col-span-4 min-h-[400px]",
    },
    {
        icon: "corporate_fare",
        title: "Custom solutions for your enterprise",
        description:
            "When your requirements go beyond our core products, Basys can design and build tailored AI, integrations, and workflows for your environment-handling policy logic, EHR and data connections, and deployment models that meet your compliance and operations needs.",
        ctaLabel: "CONTACT SALES",
        href: "/contact-us",
        className: "md:col-span-4 min-h-[400px] bg-surface-container-high",
    },
];

export default function ProductsPage() {
    return (
        <main className="pb-12 pt-24">
            <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:py-24">
                <Badge title="INFRASTRUCTURE" />
                <h1 className="mx-auto mb-6 max-w-4xl text-5xl leading-tight font-bold text-primary md:text-6xl">
                    Modular AI Solutions for Healthcare Infrastructure.
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-secondary">
                    Modular agents and engines for clinical workflows-built for
                    regulated, high-stakes enterprise deployments.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto"
                        href="/contact-us"
                    >
                        Request a Demo
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
