import { TrustBar } from "@/components/sections/TrustBar";
import { Button } from "@/components/ui/Button";

export default function ContactUsPage() {
    return (
        <main className="pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-8 mb-20">
                <header className="mb-16">
                    <h1 className="mb-4 text-5xl font-bold text-primary">
                        Precision Intelligence, Human Connection.
                    </h1>
                    <p className="max-w-2xl text-lg text-on-surface-variant">
                        Connect with our team to explore how basys.ai can
                        streamline your healthcare operations with autonomous,
                        governed AI solutions.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    <section className="rounded-[2rem] border border-black/10 bg-surface-container-lowest p-8 lg:col-span-7">
                        <div className="mb-8">
                            <h2 className="mb-2 text-2xl font-semibold text-primary">
                                Send a Message
                            </h2>
                            <p className="text-sm text-on-surface-variant">
                                Fill out the form below and an agent specialist
                                will reach out shortly.
                            </p>
                        </div>
                        <form className="space-y-6" action="#" method="post">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                        htmlFor="contact-name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        autoComplete="name"
                                        className="w-full rounded-[1rem] border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                        htmlFor="contact-email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="jane@organization.com"
                                        autoComplete="email"
                                        className="w-full rounded-[1rem] border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                    htmlFor="contact-org"
                                >
                                    Org
                                </label>
                                <input
                                    id="contact-org"
                                    name="organization"
                                    type="text"
                                    placeholder="Health System or Payer Name"
                                    className="w-full rounded-[1rem] border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="block px-1 text-xs font-semibold tracking-wider text-on-surface"
                                    htmlFor="contact-message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your current challenges..."
                                    className="w-full resize-none rounded-[1rem] border border-outline-variant bg-surface-container px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full py-4 text-sm font-semibold active:scale-95"
                                size="lg"
                            >
                                Inquiry Submission
                            </Button>
                        </form>
                    </section>

                    <aside className="space-y-5 lg:col-span-5">
                        <div className="flex aspect-square flex-col justify-between rounded-[2rem] bg-primary p-8 text-on-primary lg:aspect-auto">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-on-primary">
                                        calendar_today
                                    </span>
                                    <span className="text-xs font-semibold tracking-widest opacity-80 uppercase">
                                        Immediate Scheduling
                                    </span>
                                </div>
                                <h2 className="mb-4 text-3xl leading-tight font-semibold">
                                    Book a Demo With Our Product Engineers
                                </h2>
                                <p className="mb-8 text-sm opacity-70">
                                    Skip the wait. Select a time that works for
                                    your team to see basys.ai in action.
                                </p>
                            </div>
                            <Button
                                variant="light"
                                className="w-full py-3 text-sm font-semibold active:scale-95"
                                size="lg"
                            >
                                Request a Demo
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-[2rem] border border-black/5 bg-secondary-container p-6">
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

                            <div className="relative h-48 overflow-hidden rounded-[2rem] border border-black/5">
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
