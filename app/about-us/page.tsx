import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

type Person = {
    name: string;
    role: string;
    bio: string;
    imageSrc: string;
    imageAlt: string;
    linkedinUrl?: string;
};

function LinkedInIconLink({ linkedinUrl }: { linkedinUrl?: string }) {
    if (!linkedinUrl) return null;
    return (
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
            >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        </Link>
    );
}

function PersonCard({
    person,
    mutedBg,
}: {
    person: Person;
    mutedBg?: boolean;
}) {
    return (
        <article
            className={`overflow-hidden rounded-4xl border border-black/10 ${mutedBg ? "bg-[#f6f4f1]" : "bg-white"}`}
        >
            <div className="group aspect-4/3 overflow-hidden bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="h-full w-full origin-center object-cover grayscale [transition:transform_500ms_ease-in-out,filter_500ms_ease-in-out] group-hover:scale-105 group-hover:grayscale-0"
                    src={person.imageSrc}
                    alt={person.imageAlt}
                />
            </div>
            <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-2xl font-semibold text-primary">
                        {person.name}
                    </h3>
                    <LinkedInIconLink linkedinUrl={person.linkedinUrl} />
                </div>
                <p className="mt-1 text-xs tracking-widest text-secondary uppercase">
                    {person.role}
                </p>
                <p className="mt-4 text-sm text-on-surface-variant">
                    {person.bio}
                </p>
            </div>
        </article>
    );
}

const MANAGEMENT_TEAM: Person[] = [
    {
        name: "Amber Nigam",
        role: "Co-Founder & CEO",
        bio: "Amber is a healthcare AI entrepreneur with 15+ years' experience, named Top 50 in Digital Health by Rock Health and 40 Under 40. He holds a Harvard Health Data Science degree, has spoken at TEDx, Mayo Clinic, Stanford, and successfully exited an AI startup.",
        imageSrc: "/people/amber-nigam.png",
        imageAlt: "Portrait of Amber Nigam.",
        linkedinUrl: "https://www.linkedin.com/in/amber-nigam/",
    },
    {
        name: "John L. Brooks III",
        role: "Chief Commercial Officer",
        bio: "John is a biotech leader and founder of Insulet ($12.6B). He led Joslin Diabetes Center, co-founded seven startups, and built a $1.25B VC firm. He's known for advancing innovation in diabetes care and healthcare delivery.",
        imageSrc: "/people/john-l-brooks-iii.png",
        imageAlt: "Portrait of John L. Brooks III.",
        linkedinUrl: "https://www.linkedin.com/in/john-l-brooks-iii-ab04432/",
    },
    {
        name: "Arpan Saxena",
        role: "Chief Information Officer",
        bio: "Arpan Saxena is part of the engineering leadership team at basys.ai and focuses on platform architecture and interoperability. With 10+ years of experience, he's built platforms used by 20M+ patients and led 100+ engineers. His work focuses on interoperability, impact-driven tech, and responsible AI in healthcare.",
        imageSrc: "/people/arpan-saxena.jpg",
        imageAlt: "Portrait of Arpan Saxena.",
        linkedinUrl: "https://www.linkedin.com/in/arpan-saxena-12881bb5/",
    },
    {
        name: "Tobias Lorch",
        role: "Vice President of Product & Operations",
        bio: "Tobi is a healthcare operations leader with deep experience in high-stakes environments. He engineered global standard data systems for the WHO's Ebola and COVID-19 responses. A Harvard MPH graduate and Kennedy School Cheng Fellow, he now drives AI product development and operational strategy at basys.ai.",
        imageSrc: "/people/tobias-lorch.jpeg",
        imageAlt: "Portrait of Tobias Lorch.",
        linkedinUrl: "https://www.linkedin.com/in/tobilorch/",
    },
    {
        name: "Srinidhi Moodalagiri",
        role: "Chief Technology Officer",
        bio: "Srinidhi is a technology entrepreneur in healthcare and finance with over a decade of experience. He has previously raised multimillion-dollars from global investors to drive fintech and health tech innovations. A former IIT Kharagpur computer science graduate, he was awarded Times 40 Under 40 for his impact across regulated industries.",
        imageSrc: "/people/srinidhi-moodalagiri.png",
        imageAlt: "Portrait of Srinidhi Moodalagiri.",
        linkedinUrl: "https://www.linkedin.com/in/mbsrinidhi/",
    },
];

const STRATEGIC_ADVISORS: Person[] = [
    {
        name: "James Roosevelt Jr.",
        role: "Strategic Advisor",
        bio: "James is the former President of Tufts Health Plan, former Associate Commissioner of the U.S. Social Security Administration, and a co-author of the Affordable Care Act.",
        imageSrc: "/people/jim-roosevelt.jpg",
        imageAlt: "Portrait of James Roosevelt Jr.",
        linkedinUrl: "https://www.linkedin.com/in/james-roosevelt-jr-3320335/",
    },
    {
        name: "Dan Roth",
        role: "Chair of the Scientific Advisory Council",
        bio: "A pioneer in AI, Dan is Oracle's Chief AI Scientist and professor at UPenn. He previously held leadership roles at AWS AI and is a Fellow of AAAI, ACL, and ACM for his impact in NLP and ML.",
        imageSrc: "/people/roth-dan.jpg",
        imageAlt: "Portrait of Dan Roth.",
        linkedinUrl: "https://www.linkedin.com/in/dan-roth-8667361/",
    },
    {
        name: "Sachin H. Jain, MD, MBA",
        role: "Strategic Advisor",
        bio: "Sachin is CEO of SCAN, growing it to $4.3B. He's led CareMore and Aspire Health, served at HHS and Merck, and teaches at Harvard and Stanford. He continues to practice medicine and shape healthcare innovation.",
        imageSrc: "/people/sachin-jain.jpg",
        imageAlt: "Portrait of Sachin H. Jain.",
        linkedinUrl: "https://www.linkedin.com/in/dan-roth-8667361/",
    },
    {
        name: "Ruth Williams-Brinkley",
        role: "Strategic Advisor",
        bio: "Ruth is a veteran healthcare executive with 40+ years' experience. She led Kaiser Mid-Atlantic and held CEO roles at CommonSpirit, Ascension, and UAB. She's been named among the 100 Most Influential People in Healthcare by Modern Healthcare.",
        imageSrc: "/people/ruth-williams-brinkley.jpg",
        imageAlt: "Portrait of Ruth Williams-Brinkley.",
        linkedinUrl: "https://www.linkedin.com/in/ruthwilliamsbrinkley/",
    },
    {
        name: "Beth Ginzinger",
        role: "Strategic Advisor",
        bio: "Beth leads transformation at BCBS Arizona. She founded Radiant (now part of Accenture) and Prosano Health, and launched Anthem's Vivity—an innovative care model combining seven top SoCal health systems into one integrated provider network.",
        imageSrc: "/people/beth-ginzinger.jpeg",
        imageAlt: "Portrait of Beth Ginzinger.",
        linkedinUrl: "https://www.linkedin.com/in/beth-ginzinger-7a92558/",
    },
    {
        name: "Heather Mattie",
        role: "Strategic Technology Advisor",
        bio: "Heather teaches at Harvard and researches the intersection of biostatistics, data science, and AI. Her work focuses on healthcare algorithms, community networks, and ensuring fairness in machine learning for underrepresented groups.",
        imageSrc: "/people/heather%20mattie.jpg",
        imageAlt: "Portrait of Heather Mattie.",
        linkedinUrl: "https://www.linkedin.com/in/beth-ginzinger-7a92558/",
    },
    {
        name: "Leo Anthony Celi, MD",
        role: "Strategic Technology Advisor",
        bio: "Leo directs clinical research at MIT's Lab of Computational Physiology. He leads MIMIC, co-founded Sana for global health innovation, and teaches on informatics and EHR analytics to improve healthcare delivery worldwide.",
        imageSrc: "/people/leo-celi.jpg",
        imageAlt: "Portrait of Leo Anthony Celi.",
        linkedinUrl: "https://www.linkedin.com/in/beth-ginzinger-7a92558/",
    },
];

export default function AboutUsPage() {
    return (
        <main className="pt-20">
            <section className="mx-auto mt-8 max-w-7xl px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Badge title="Our Vision" icon="verified_user" />
                        <h1 className="mb-6 max-w-2xl text-5xl leading-tight font-bold text-primary">
                            Bridging the Gap: Trust Between Payers and
                            Providers.
                        </h1>
                        <p className="max-w-xl text-lg text-secondary">
                            Founded in the heart of Cambridge, MA, basys.ai
                            leverages agentic intelligence to automate and
                            streamline the administrative complexities of
                            healthcare.
                        </p>
                    </div>

                    <div className="relative lg:col-span-5">
                        <div className="h-[400px] overflow-hidden rounded-4xl bg-surface-container">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-full w-full object-cover opacity-90 grayscale contrast-125"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF4vyrLLn8Xc7oPZS5OVlB9CvVPqAnbC3lzHl0WkQPZFNrTS8lfS5Qs610_0ChTca453JktlWkJ1OOPH6h2xjVOWhlGf9WZ4kWKbpasAhl2KAKvUOY81txZOIFk3PMK-XRg6FgMD6-qt-INIGGz23Tzo_mjs3KSISB84elj5BYdmrTbLUAGrpf6IRVyHvCP9w5NQIlW6jqnoAzWZHGosYdSy2UYy8jf-LtoPmuMng6nOmFl8P8EidHd4TpGjE7Eb2opOCpV1h01m8"
                                alt="Modern architectural building in Cambridge."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <article className="flex min-h-[320px] flex-col justify-between rounded-4xl border border-black/10 bg-white p-8 md:col-span-2">
                        <div>
                            <h2 className="mb-4 text-3xl font-semibold text-primary">
                                Cambridge Roots
                            </h2>
                            <p className="max-w-md text-sm text-secondary">
                                Our journey began in Cambridge, MA, where the
                                nexus of engineering and healthcare research
                                provided the perfect foundation for solving
                                payer-provider friction.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-surface-container pt-6">
                            <div className="flex -space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-pill border-2 border-white bg-slate-200 text-sm font-bold">
                                    H
                                </div>
                            </div>
                            <span className="text-xs font-semibold tracking-wider text-on-surface-variant">
                                Forged at Harvard
                            </span>
                        </div>
                    </article>

                    <article className="flex flex-col justify-center rounded-4xl bg-primary p-8 text-center text-on-primary">
                        <span className="material-symbols-outlined mb-4 text-4xl">
                            verified_user
                        </span>
                        <h3 className="mb-1 text-2xl font-semibold text-white">
                            100% Autonomous
                        </h3>
                        <p className="text-sm opacity-80">
                            Our Agentic AI ensures absolute governance and
                            architectural precision in every decision.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-8 md:py-16">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-primary">
                        Management team
                    </h2>
                    <p className="mt-2 text-sm text-secondary">
                        Deeply technical expertise meets clinical and commercial
                        vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {MANAGEMENT_TEAM.map((person, i) => (
                        <PersonCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-8 py-8 md:py-16">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-primary">
                        Strategic Advisors
                    </h2>
                    <p className="mt-2 text-sm text-secondary">
                        Counsel from leaders across policy, care delivery, and
                        AI science.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {STRATEGIC_ADVISORS.map((person, i) => (
                        <PersonCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            <section className="mx-auto mb-8 max-w-7xl px-8 py-8 md:mb-16 md:py-16">
                <div className="overflow-hidden rounded-4xl border border-black/10 bg-white">
                    <div className="flex items-center justify-between bg-primary px-6 py-4">
                        <div className="flex items-center gap-4">
                            <div className="h-2 w-2 animate-pulse rounded-pill bg-green-500" />
                            <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                                System Protocol: About_Mission.v1
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-pill border border-white/20" />
                            <div className="h-3 w-3 rounded-pill border border-white/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
                        <div>
                            <h4 className="mb-4 text-2xl font-semibold text-primary">
                                Our Commitment to Payers
                            </h4>
                            <p className="text-sm text-secondary">
                                Reducing prior authorization turnaround times by
                                80% through transparent, evidence-based AI
                                automation.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 text-2xl font-semibold text-primary">
                                Our Commitment to Providers
                            </h4>
                            <p className="text-sm text-secondary">
                                Eliminating the administrative burden that leads
                                to clinician burnout, allowing for a renewed
                                focus on patient care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FinalCtaSection />
        </main>
    );
}
