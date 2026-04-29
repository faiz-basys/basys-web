import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const capabilities = [
    {
        icon: "sync_alt",
        title: "End-to-end MRR workflow",
        description:
            "Upload, processing status, review states, and admin assignment where enabled.",
    },
    {
        icon: "document_scanner",
        title: "Document intelligence",
        description:
            "OCR on stored records, then AI validation of cover sheet versus record (for example identity match, face-to-face, RADV data source, signatures, legibility, CMS attestation, visit type).",
    },
    {
        icon: "analytics",
        title: "Coding and risk support",
        description:
            "Diagnosis extraction with ICD-10 pathways, HCC v24/v28, and RAF and blended scoring in structured output.",
    },
    {
        icon: "picture_as_pdf",
        title: "Review UX",
        description:
            "PDF viewing with search, validation panels, optional CSV export, list versus table views.",
    },
    {
        icon: "dns",
        title: "Built for healthcare IT",
        description:
            "JWT and Keycloak roles, S3-backed files with presigned access, PostgreSQL and Redis, NestJS API and Next.js UI (typical Basys Platform stack).",
    },
];

export default function MedicalRecordReviewProductPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto max-w-7xl px-8 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-pill border border-outline-variant bg-surface-container-highest px-3 py-1">
                            <span className="material-symbols-outlined text-sm">
                                document_scanner
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-on-secondary-container uppercase">
                                Document intelligence
                            </span>
                        </div>

                        <h1 className="max-w-xl text-5xl leading-tight font-bold text-primary">
                            Medical Record Review
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                            Secure MRR for plans and partners: OCR, AI
                            validation against cover sheets, ICD-10 and
                            HCC-oriented extraction, in-browser PDF review, and
                            enterprise roles-with an audit trail for regulated
                            operations.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">Request a Demo</Button>
                            <Button size="lg" variant="outline">
                                Contact Sales
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-surface-container" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image
                            alt="Medical record review and clinical documentation"
                            className="h-[400px] w-full rounded-4xl border border-outline/10 object-cover shadow-sm"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgN5l1kaWwjv9byscN4W4iEssfbpc1W57pZXicv47Ra27TD51ME31HzkhazKL1Daa3EwcLw3_DKPDEkaHqJTwZffMyN6kh9Z64hK0al8OXXLEPuItW3nS-44C2K67Np2BbdhFMljcAmu5UD76CFBGyXnA1vqLjSw8I5BkFanjhv693AynyJRchspxvEqcWapd5ZLscPCAtK9WHA-vvAlDQK4HPP3yBz2YrZbL87-2s3cha2OAgiaLh8AAbUxp1rHxBXg6ZGhXers"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="mb-4 text-3xl font-semibold text-primary">
                            What you get
                        </h2>
                        <p className="text-sm text-on-surface-variant">
                            Structured validation, coding support, and review
                            workflows built for regulated health plan
                            operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((item) => (
                            <article
                                key={item.title}
                                className="flex flex-col rounded-4xl border border-outline/10 bg-surface-container-lowest p-8 transition-colors hover:border-primary/20"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-pill bg-primary/5">
                                    <span className="material-symbols-outlined text-primary">
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-6 text-on-surface-variant">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-24">
                <article className="rounded-4xl border border-outline/10 bg-surface-container-lowest p-10 md:p-12">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Who it&apos;s for
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant">
                        Primary audience: payer operations and medical record
                        review teams (and provider collaborators where your
                        deployment allows). Ideal for organizations that need
                        consistent, explainable RADV- and HCC-oriented review at
                        scale without replacing human judgment on final
                        decisions.
                    </p>
                </article>
            </section>

            <FinalCtaSection />
        </main>
    );
}
