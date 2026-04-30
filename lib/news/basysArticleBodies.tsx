import type { ReactNode } from "react";

const articleBodyClass =
    "max-w-3xl space-y-6 text-base leading-relaxed text-secondary [&_strong]:font-semibold [&_strong]:text-primary";

/** Full-page article bodies for Basys news slugs (keys must match `slug` in newsItems). */
export const basysArticleBodyBySlug: Record<string, ReactNode> = {
    "basys-ai-is-recognized-in-gartners-2025-hype-cycle-for-transforming-ai-driven-prior-auth":
        (
            <div className={articleBodyClass}>
                <p>
                    Basys.ai has been recognized in{" "}
                    <strong>
                        Gartner&apos;s 2025 Hype Cycle for U.S. Healthcare
                        Payers
                    </strong>{" "}
                    for its contributions to{" "}
                    <strong>AI-driven Prior Authorization</strong>. This
                    recognition highlights the role of emerging technologies in
                    addressing long-standing inefficiencies in the healthcare
                    system. Prior authorization has historically been a
                    time-consuming, manual process that contributes to
                    administrative burden and delays in patient care.
                    Basys.ai&apos;s platform is designed to automate this
                    workflow using clinically aligned, explainable AI, reducing
                    friction between payers and providers.
                </p>
                <p>
                    The Gartner Hype Cycle is one of the most referenced
                    resources by technology buyers, and our feature comes at a
                    time when interest in AI-powered prior authorization is
                    rapidly increasing. As AI continues to reshape payer
                    operations, prior authorization has emerged as a high-impact
                    area for automation and transformation. Health plans are
                    actively seeking solutions that not only reduce costs but
                    also improve patient access to timely care. Over the past
                    year, we&apos;ve seen a measurable uptick in interest from
                    both regional and national payers exploring ways to bring
                    automation into their prior auth processes. This recognition
                    reinforces our belief that automation, when designed
                    responsibly, can serve both administrative efficiency and
                    clinical quality.
                </p>
                <p>
                    Basys.ai remains committed to evolving our platform in line
                    with the needs of payers, providers, and patients alike. We
                    continue to deepen our integration capabilities, expand our
                    clinical data models, and ensure full alignment with
                    emerging regulatory frameworks. Our product roadmap is
                    shaped by real-world feedback from stakeholders navigating
                    the day-to-day complexity of utilization management. As
                    healthcare continues its digital transformation, we recognize
                    the responsibility that comes with building and deploying
                    AI in this space. We are focused on staying ahead of
                    what&apos;s next, while keeping trust, transparency, and
                    patient impact at the core of everything we do.
                </p>
                <p>
                    There are many problems to solve and this is just one of
                    them!
                </p>
            </div>
        ),
    "basys-ai-joins-ncqa-ai-in-healthcare-working-group-to-help-define-the-future-of-trustworthy-clinically-sound-ai":
        (
            <div className={articleBodyClass}>
                <p>
                    Cambridge, MA — basys.ai, the high-fidelity AI platform
                    transforming healthcare policy management, proudly announces
                    its participation in the{" "}
                    <strong>
                        National Committee for Quality Assurance (NCQA) AI in
                        Healthcare Working Group
                    </strong>
                    . This strategic collaboration brings together industry
                    leaders to set credible, actionable standards for the safe,
                    effective, and equitable use of AI in healthcare.
                </p>
                <p>
                    As part of this initiative, basys.ai will work closely with
                    NCQA and other forward-thinking organizations to shape the
                    national framework for deploying advanced AI, including
                    large language models (LLMs), to improve administrative
                    efficiency, ensure clinical alignment, and enhance member
                    and provider experiences.
                </p>
                <p>
                    &ldquo;The future of healthcare requires more than
                    automation. It requires trust, precision, and
                    accountability,&rdquo; said Amber Nigam, Co-founder and CEO
                    of basys.ai.
                </p>
                <p>
                    &ldquo;We&apos;re honored to partner with NCQA to shape the
                    guardrails that ensure AI in healthcare isn&apos;t just
                    powerful, but safe, ethical, and built to serve people
                    first.&rdquo;
                </p>
                <h2 className="text-xl font-semibold text-primary">
                    Powering the Shift From Reactive to Proactive
                </h2>
                <p>
                    basys.ai enters this collaboration with a clear mission: to
                    help healthcare payers move from reactive policy enforcement
                    to proactive, member-first operations. Leveraging its
                    industry-leading platform, basys is enabling health plans
                    to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>
                        Streamline prior authorization and utilization
                        management
                    </li>
                    <li>Deliver real-time, explainable AI decisions</li>
                    <li>
                        Accelerate access to care while ensuring clinical
                        appropriateness
                    </li>
                    <li>
                        Drive seamless provider workflows and frictionless
                        member experiences
                    </li>
                </ul>
                <h2 className="text-xl font-semibold text-primary">
                    A Trusted Platform Now Guiding National Standards
                </h2>
                <p>
                    Already adopted by several leading payers, the basys
                    platform is known for its high fidelity, compliance-first
                    architecture. Through this partnership with NCQA, basys will
                    contribute to defining how AI systems should be evaluated
                    and held accountable across four core areas:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Clinical appropriateness and evidence-based alignment</li>
                    <li>Operational timeliness and decision transparency</li>
                    <li>Fairness, equity, and bias mitigation</li>
                    <li>User experience for both providers and members</li>
                </ul>
                <p>
                    This work will guide not only how AI is built, but how it
                    earns trust across the healthcare ecosystem.
                </p>
                <h2 className="text-xl font-semibold text-primary">
                    Technology with Guardrails: A Patented Approach to
                    Responsible AI
                </h2>
                <p>
                    As part of its commitment to safe and scalable AI, basys has
                    filed a patent on its proprietary platform framework
                    designed to establish clear guardrails around AI use in
                    healthcare. The system includes mechanisms for:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Clinical safety validations</li>
                    <li>Human-in-the-loop decision checkpoints</li>
                    <li>Ethical policy enforcement</li>
                    <li>Model drift monitoring and governance</li>
                </ul>
                <p>
                    This patented approach reinforces basys&apos; leadership in
                    setting the standard for trustworthy, auditable AI in one
                    of the most regulated industries in the world.
                </p>
                <h2 className="text-xl font-semibold text-primary">
                    About basys.ai
                </h2>
                <p>
                    basys.ai is a healthcare technology company purpose-built to
                    transform policy management through high-fidelity,
                    responsible, agentic AI. From prior authorization to appeals
                    and utilization management, basys empowers health plans to
                    make smarter, faster, and fairer decisions that improve
                    outcomes for members and reduce burden for providers.
                </p>
                <p>
                    Media contact:{" "}
                    <a
                        className="font-medium text-primary underline underline-offset-2 hover:opacity-90"
                        href="mailto:communication@basys.ai"
                    >
                        communication@basys.ai
                    </a>
                </p>
            </div>
        ),
};
