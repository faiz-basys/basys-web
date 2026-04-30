import { ContactForm } from "@/components/contact/ContactForm";
import { TrustBar } from "@/components/sections/TrustBar";

export default function ContactUsPage() {
    return (
        <main className="pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-8 mb-20">
                <header className="mb-16">
                    <h1 className="mb-4 text-5xl font-bold text-primary">
                        Get in touch
                    </h1>
                    <p className="max-w-2xl text-lg text-on-surface-variant">
                        Connect with our team to explore how basys.ai can
                        streamline your healthcare operations with autonomous,
                        governed AI solutions.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    <section className="rounded-4xl border border-black/10 bg-surface-container-lowest p-8 lg:col-span-7">
                        <div className="mb-8">
                            <h2 className="mb-2 text-2xl font-semibold text-primary">
                                Send a Message
                            </h2>
                            <p className="text-sm text-on-surface-variant">
                                Fill out the form below and an agent specialist
                                will reach out shortly.
                            </p>
                        </div>
                        <ContactForm />
                    </section>

                    <aside className="space-y-5 lg:col-span-5">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-4xl border border-black/5 bg-secondary-container p-6">
                                <h3 className="mb-4 text-xs font-semibold tracking-widest text-on-secondary-container uppercase">
                                    Headquarters
                                </h3>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary">
                                        location_on
                                    </span>
                                    <address className="not-italic text-2xl font-semibold text-primary">
                                        Cambridge, MA
                                        <br />
                                        <span className="text-sm font-normal text-on-surface-variant">
                                            United States
                                        </span>
                                    </address>
                                </div>
                            </div>

                            <div className="relative h-48 overflow-hidden rounded-4xl border border-black/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Map of Cambridge Massachusetts area"
                                    className="h-full w-full object-cover grayscale opacity-50 contrast-125"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPyjJA35WUXmzvOfP_zjaEgR_Iiz4fKr5hUWjGztSBEnktQ7JGojaBCN85k3Q2IgGgmaEWEke7Y3TRy2J1W9bbJwJOZza9OxPXSkhrKEk9K64BC2jCXn-F4T5JErM7_KtwzBPt8h3jpPNUGrLXfCi1gKyhW_X_WpfnjKKPs6cdtgFLjRPmEVWEC3hNY0fs91wrAiEUgCI98h18igQqdsD8zH-_pVYBls79vc74WEZwcKFb1BX50RaNf6b4biMxDY4jJ4QxuzupiWs"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="rounded-pill bg-primary p-1 text-on-primary shadow-lg">
                                        <span
                                            className="material-symbols-outlined text-[32px]"
                                            style={{
                                                fontVariationSettings:
                                                    '"FILL" 1',
                                            }}
                                        >
                                            location_on
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <TrustBar />
        </main>
    );
}
