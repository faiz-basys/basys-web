export type WhitePaperStat = {
    value: string;
    label: string;
    accent?: boolean;
};

export type WhitePaperCard = {
    title: string;
    body: string;
    icon: string;
};

export type WhitePaperFeature = {
    icon: string;
    title: string;
    body: string;
};

export type WhitePaperSection =
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "stats";
          stats: WhitePaperStat[];
      }
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "cards";
          cards: WhitePaperCard[];
      }
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "metrics-features";
          metrics: { value: string; label: string }[];
          features: WhitePaperFeature[];
      }
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "benchmark";
      }
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "bullets";
          bullets: { title: string; body: string }[];
      }
    | {
          id: string;
          navLabel: string;
          headline: string;
          subheadline?: string;
          type: "cta";
          body: string;
      };

export type WhitePaper = {
    id: string;
    badge: string;
    badgeIcon: string;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    accentMuted: string;
    sections: WhitePaperSection[];
};

export const WHITE_PAPERS: WhitePaper[] = [
    {
        id: "fwa-payment-integrity",
        badge: "WHITE PAPER",
        badgeIcon: "shield",
        title: "Closing the Blind Spots in Fraud, Waste & Abuse",
        subtitle: "Physician-first AI for smarter payment integrity",
        description:
            "Fraud doesn't hide in data—it hides between organizations. See how explainable AI helps health plans detect FWA with transparency and trust.",
        accent: "#0a2540",
        accentMuted: "#eef2f7",
        sections: [
            {
                id: "between-organizations",
                navLabel: "Blind spots",
                headline:
                    "Fraud doesn't hide in data. It hides between organizations.",
                subheadline:
                    "Hospitals, insurers, and providers each hold part of the picture—but blind spots persist at every handoff.",
                type: "cards",
                cards: [
                    {
                        title: "Hospitals",
                        body: "Episode-level clinical activity and utilization that never connects to payer-wide patterns",
                        icon: "local_hospital",
                    },
                    {
                        title: "Insurers",
                        body: "Claims, benefits, and authorization decisions without full clinical context across networks",
                        icon: "health_and_safety",
                    },
                    {
                        title: "Providers",
                        body: "Ordering, referral, and documentation patterns isolated from plan-level integrity signals",
                        icon: "medical_information",
                    },
                ],
            },
            {
                id: "fwa-cost",
                navLabel: "The cost",
                headline: "The Scale of Fraud, Waste & Abuse",
                type: "stats",
                stats: [
                    {
                        value: "3–10%",
                        label: "of healthcare spending lost to FWA",
                    },
                    {
                        value: "Siloed",
                        label: "data across hospitals, insurers & providers",
                        accent: true,
                    },
                    {
                        value: "No one",
                        label: "sees the complete picture",
                    },
                ],
            },
            {
                id: "legacy-tools",
                navLabel: "Old tools",
                headline: "Yesterday's tools can't stop tomorrow's fraud.",
                type: "cards",
                cards: [
                    {
                        title: "Rules catch known patterns",
                        body: "Static rule engines miss novel schemes and evolving billing behavior",
                        icon: "rule",
                    },
                    {
                        title: "Generic AI lacks clinical reasoning",
                        body: "Black-box models without medical context create false positives and audit risk",
                        icon: "psychology_alt",
                    },
                    {
                        title: "Basys.ai starts with clinicians",
                        body: "Physician-first AI built for the nuance of real-world care delivery",
                        icon: "stethoscope",
                    },
                ],
            },
            {
                id: "clinical-precision",
                navLabel: "Our approach",
                headline: "Clinical expertise. AI precision.",
                subheadline: "Every decision is backed by evidence.",
                type: "cards",
                cards: [
                    {
                        title: "Unify Data",
                        body: "Connect claims, authorization, and clinical signals into a single integrity view",
                        icon: "database",
                    },
                    {
                        title: "Clinical Reasoning",
                        body: "Apply physician-grade logic to flag activity that doesn't fit medically",
                        icon: "neurology",
                    },
                    {
                        title: "Explainable Findings",
                        body: "Deliver transparent rationales investigators and reviewers can trust",
                        icon: "fact_check",
                    },
                ],
            },
            {
                id: "outcomes",
                navLabel: "Outcomes",
                headline: "Better architecture. Better outcomes.",
                type: "stats",
                stats: [
                    {
                        value: "98%",
                        label: "clinician agreement",
                    },
                    {
                        value: "~73%",
                        label: "reduction in reviewer burden",
                    },
                    {
                        value: "19.5×",
                        label: "projected ROI",
                    },
                ],
            },
            {
                id: "reviewer-evidence",
                navLabel: "The future",
                headline:
                    "The future of FWA isn't replacing reviewers.",
                subheadline: "It's giving them better evidence.",
                type: "bullets",
                bullets: [
                    {
                        title: "Explainable AI",
                        body: "Transparent feature attributions and rationales—not opaque risk scores alone",
                    },
                    {
                        title: "Human oversight",
                        body: "Investigators and SIU teams retain ownership of final fraud determinations",
                    },
                    {
                        title: "Clinical reasoning",
                        body: "Alerts grounded in how care is actually delivered and documented",
                    },
                    {
                        title: "Transparent decisions",
                        body: "Documentation suitable for triage, escalation, and regulatory reporting",
                    },
                ],
            },
            {
                id: "get-access",
                navLabel: "Get access",
                headline: "Ready to close the blind spots?",
                subheadline:
                    "Physician-first, explainable AI is transforming healthcare payment integrity.",
                type: "cta",
                body: "Built for trust. Designed for the future of payment integrity. Request the full FWA whitepaper to see how Basys.ai helps health plans detect fraud with greater transparency, accuracy, and trust.",
            },
        ],
    },
    {
        id: "agentic-prior-auth",
        badge: "WHITE PAPER",
        badgeIcon: "menu_book",
        title: "Reimagine Prior Authorization",
        subtitle: "A Strategic Opportunity for Health Plans",
        description:
            "Agentic AI reduces costs, improves speed, and builds provider trust.",
        accent: "#000000",
        accentMuted: "#f2f4f7",
        sections: [
            {
                id: "failing-process",
                navLabel: "The problem",
                headline: "The Current Prior Authorization Process is Failing",
                type: "stats",
                stats: [
                    {
                        value: "93%",
                        label: "of physicians report care delays",
                    },
                    {
                        value: "$35B+",
                        label: "annual administrative costs",
                    },
                    {
                        value: "Worse",
                        label: "health outcomes for patients",
                        accent: true,
                    },
                ],
            },
            {
                id: "traditional-ai",
                navLabel: "Why AI fails",
                headline:
                    "Traditional AI Doesn't Work for Prior Authorization",
                type: "cards",
                cards: [
                    {
                        title: "Hallucinations",
                        body: "No audit trail, unreliable outputs",
                        icon: "psychology_alt",
                    },
                    {
                        title: "Misses Nuance",
                        body: "Complex clinical policies require precision",
                        icon: "precision_manufacturing",
                    },
                    {
                        title: "Creates Risk",
                        body: "Not trust, undermining provider relationships",
                        icon: "gpp_bad",
                    },
                ],
            },
            {
                id: "agentic-ai",
                navLabel: "Agentic AI",
                headline: "Agentic AI: Built for Healthcare",
                type: "metrics-features",
                metrics: [
                    { value: "93%", label: "Auto-Approvals" },
                    { value: "95%", label: "faster decisions" },
                ],
                features: [
                    {
                        icon: "verified_user",
                        title: "Auditable",
                        body: "Compliant by design",
                    },
                    {
                        icon: "handshake",
                        title: "Trusted",
                        body: "By providers and payers",
                    },
                ],
            },
            {
                id: "benchmarking",
                navLabel: "Benchmarks",
                headline: "Benchmarking That Proves It",
                subheadline:
                    "Agentic AI reduces costs, improves speed, and builds provider trust.",
                type: "benchmark",
            },
            {
                id: "get-access",
                navLabel: "Get access",
                headline: "Ready to Transform Prior Authorization?",
                subheadline:
                    "Download the full whitepaper for strategic guidance tailored to health plans.",
                type: "cta",
                body: "Request the complete agentic prior authorization whitepaper and see how leading plans are rethinking UM.",
            },
        ],
    },
];

export const WHITE_PAPER_FORM_OPTIONS = WHITE_PAPERS.map((paper) => ({
    id: paper.id,
    label: paper.title,
    description: paper.subtitle,
}));
