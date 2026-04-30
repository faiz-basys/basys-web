import type { ReactNode } from "react";

const articleBodyClass =
    "max-w-3xl space-y-6 text-base leading-relaxed text-secondary [&_strong]:font-semibold [&_strong]:text-primary";

const inlineLinkClass =
    "font-medium text-primary underline underline-offset-2 hover:opacity-90";

/** Full-page article bodies for Basys blog slugs (keys must match `slug` in blogItems). */
export const basysBlogBodyBySlug: Record<string, ReactNode> = {
    "basys-ai-supports-bold-industry-effort-to-cut-the-complexity-of-prior-authorization": (
        <div className={articleBodyClass}>
            <p>
                We appreciate AHIP and the leading health plans for launching
                this bold, voluntary commitment to streamline, simplify, and
                reduce prior authorization — a process that remains a vital
                safeguard to ensure care is safe, evidence-based, and affordable.
                These new actions build on existing efforts to modernize
                outdated manual workflows and connect patients more quickly to
                the care they need, while minimizing administrative burdens on
                providers and payers alike. AHIP&apos;s announcement outlines
                the industry&apos;s shared vision for a more efficient future.
            </p>
            <p>
                The initiative sets out six clear actions: standardizing
                electronic prior authorization using FHIR® APIs, reducing the
                scope of claims subject to prior authorization, ensuring
                continuity of care when patients change plans, expanding
                real-time responses, improving communication and transparency,
                and reaffirming medical reviews of non-approved requests. Mike
                Tuffin, AHIP President and CEO, emphasized that this
                collaboration aims to modernize the system and deliver a more
                seamless experience for patients and providers alike — reducing
                delays and freeing up clinicians to focus on care. Mehmet Oz,
                M.D., Administrator of the Centers for Medicare &amp; Medicaid
                Services (CMS), described the pledge as &ldquo;an opportunity
                for the industry to show itself,&rdquo; noting its voluntary
                nature and broad reach. HHS Secretary Robert F. Kennedy Jr. also
                met with health plan leaders to discuss these commitments,
                underscoring the importance of aligning federal and private
                efforts to reform prior authorization.
            </p>
            <p>
                At basys.ai, we believe trust, fairness, and transparency are
                fundamental to any AI used in healthcare — a point we shared in
                a STAT News article on confronting racial bias in clinical
                algorithms. That experience shaped how we build technology:
                always questioning our data, our models, and our impact on
                real people&apos;s care. With this industry-wide intent now
                clear, we&apos;re focused on helping plans turn that intent into
                fair, timely, and evidence-based decisions — through tools that
                automate approvals responsibly and reduce the bias and burden
                that too often hold patients back.
            </p>
            <p>
                In a TEDx talk by our CEO Amber Nigam, he discussed the
                importance of aligning incentives across stakeholders to build a
                smarter, more equitable healthcare system. This industry pledge
                to improve prior authorization is a concrete step toward that
                alignment — showing how payers, providers, technology partners,
                and patients can work together to remove friction from care
                delivery and create a system that works better for everyone.
            </p>
            <p>
                While this announcement marks real momentum, the true test will
                be turning these commitments into daily impact for patients and
                the clinicians who care for them. At basys.ai, we stand ready
                to support health plans and the entire healthcare ecosystem as
                we navigate this journey together — simplifying the complex,
                unlocking innovation, and helping make healthcare smarter,
                faster, and fairer for all.
            </p>
        </div>
    ),
    "not-every-problem-needs-ai-insights-from-stanford-health-ai-week": (
        <div className={articleBodyClass}>
            <h2 className="text-xl font-semibold text-primary">
                Reflections from Stanford Health AI Week
            </h2>
            <p>
                At Stanford University&apos;s Health AI Week, our CEO Amber
                Nigam joined an important conversation on the responsible use
                of AI in healthcare — specifically: When should AI be used, and
                when shouldn&apos;t it? The panel, composed of clinicians,
                technologists, and policy experts, didn&apos;t fall into the
                common trap of treating AI as a universal remedy. Instead, it
                wrestled with nuance: the contexts where AI adds value, and the
                ones where it risks creating noise, harm, or false confidence.
                Amber offered three principles that anchor basys.ai&apos;s work
                and thinking. They&apos;re deceptively simple but, in practice,
                profoundly clarifying:
            </p>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                    1. Start with First Principles: AI is not a foregone
                    conclusion
                </h3>
                <p>
                    The best AI applications don&apos;t begin with AI. They
                    begin with a problem so stubborn or systemic that existing
                    solutions — manual workflows, business rules, traditional
                    automation — simply can&apos;t scale. In Prior Authorization
                    and Utilization Management, for example, the issue isn&apos;t
                    just inefficiency. It&apos;s interpretive complexity.
                    Thousands of evolving policies, nuanced medical contexts, and
                    often-misaligned payer-provider priorities. These are
                    problems where logic trees fail and where AI, especially when
                    combined with clinician insight, can establish adaptable,
                    transparent decision-making frameworks. But that clarity
                    comes only from starting with a clean sheet — not from trying
                    to retrofit AI where it doesn&apos;t belong.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                    2. Align Incentives or Don&apos;t Bother
                </h3>
                <p>
                    Healthcare is notorious for misaligned incentives. AI can
                    worsen that or fix it. Used well, AI can be the scaffolding
                    for shared clinical standards across stakeholders. It can
                    help transform opaque processes like prior auth from black
                    boxes into systems that are interpretable and negotiable.
                    But that only happens if the technology is built with trust
                    infrastructure in mind. That means designing systems that
                    respect clinician time, surface clinical intent, and create
                    accountability across parties. AI must not reinforce siloed
                    logic. It should be the connective tissue.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                    3. Clinician Collaboration Is Not a Checkbox
                </h3>
                <p>
                    One of the most dangerous assumptions in healthcare AI is
                    assuming we know what clinicians want. Real collaboration
                    isn&apos;t a UX survey or a post-hoc advisory board.
                    It&apos;s structured, ongoing, and embedded. It means
                    co-designing logic with medical directors. It means making
                    sure AI decisions are auditable and can defer to clinical
                    expertise when needed. And it means building a product that
                    doesn&apos;t just fit into a clinical workflow — it earns
                    its place there.
                </p>
            </div>
            <h2 className="text-xl font-semibold text-primary">
                What We Took Away
            </h2>
            <p>
                AI&apos;s role in healthcare is not about replacing humans.
                It&apos;s about restructuring the relationships between humans,
                institutions, and data. The most powerful insight from the
                session? The real question isn&apos;t{" "}
                <em>can</em> AI do this — it&apos;s <em>should</em> it? That
                tension between possibility and prudence is where the most
                important work happens. We&apos;re grateful to Stanford for
                convening the kind of dialogue that doesn&apos;t chase hype but
                insists on substance. Because getting this right isn&apos;t just
                about innovation. It&apos;s about integrity.
            </p>
        </div>
    ),
    "how-basys-ai-is-building-trustworthy-ai-for-better-patient-care": (
        <div className={articleBodyClass}>
            <h2 className="text-xl font-semibold text-primary">Introduction</h2>
            <p>
                Large Language Models (LLMs) have significant potential to
                transform operational healthcare by analyzing data, supporting
                clinical decisions, and streamlining workflows. However,
                generative AI also presents risks, especially in high-stakes
                environments like healthcare, where the margin for error is
                non-existent. While frameworks and principles for responsible AI
                are rapidly evolving, the real challenge lies in translating these
                principles into actionable know-how — how to effectively apply
                them in complex, high-stakes settings is the million-dollar
                question.
            </p>
            <p>
                The complexity is compounded by the ethical imperative to
                deploy transformative technologies responsibly. Withholding a
                technology or treatment that has the potential to benefit society
                raises moral questions, akin to the &ldquo;Number Needed to
                Treat&rdquo; (NNT) concept in medicine. These considerations
                highlight the need for robust solutions that balance innovation
                with safety.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                How basys.ai approaches this problem
            </h2>
            <p>
                basys.ai takes a comprehensive approach to developing trustworthy
                AI in healthcare, combining technical innovation, domain expertise,
                and ethical oversight. By aligning its technology with
                patient-centered care principles, the company works to improve
                clinical decision-making and foster trust in AI systems.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The challenge: Why guardrails matter?
            </h2>
            <p>
                Imagine a generative AI system designed to streamline healthcare
                workflows by summarizing patient histories for clinical decisions.
                In one case, the AI misrepresented a patient&apos;s medical record,
                hallucinating critical details such as a history of
                non-compliance with treatment. Based on this flawed summary, the
                patient&apos;s prior authorization for a life-saving procedure was
                denied, delaying care and potentially exacerbating their
                condition.
            </p>
            <p>
                The risks of such errors extend beyond immediate harm to the
                patient. Misinformation in patient summaries undermines
                clinicians&apos; trust in AI systems, making them hesitant to rely
                on these tools in critical decision-making. This lack of trust can
                hinder the adoption of potentially transformative technologies in
                healthcare. At the same time, regulatory scrutiny intensifies as
                healthcare organizations face increased accountability for deploying
                AI systems that may inadvertently cause harm.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                How basys.ai builds trustworthy AI
            </h2>

            <h3 className="text-lg font-semibold text-primary">
                Mission and ethical focus
            </h3>
            <p>
                At the heart of basys.ai&apos;s mission is a commitment to building
                AI systems that are not only innovative but also ethical,
                transparent, and aligned with the core values of patient care. The
                company believes that the successful integration of AI into
                healthcare depends on trust, which can only be achieved by
                addressing risks like hallucinations and biases from the outset.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Developing robust guardrails
            </h3>
            <p>
                basys.ai adopts a proactive approach to mitigate risks,
                incorporating measures to prevent hallucinations and bias at every
                stage of the AI lifecycle. By emphasizing data quality, human
                oversight, and continuous monitoring, the company sets a standard
                for responsible AI development.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Designing the solution: Building guardrails
            </h2>

            <h3 className="text-lg font-semibold text-primary">
                Identifying vulnerabilities
            </h3>
            <p>
                basys.ai audits its algorithms to uncover potential weaknesses,
                stress-testing models under diverse conditions to identify where
                hallucinations or biases might emerge. By simulating real-world
                scenarios, the company ensures its systems can handle
                unpredictable inputs.
            </p>

            <h3 className="text-lg font-semibold text-primary">Data quality</h3>
            <p>
                To combat bias, basys.ai diversifies its training datasets,
                sourcing data from multiple demographics and clinical settings to
                ensure representation across age, gender, ethnicity, and
                geographic regions. Rigorous preprocessing strategies, including
                thorough labeling and validation, improve data quality and reduce
                errors.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Human-in-the-loop oversight
            </h3>
            <p>
                basys.ai integrates human feedback at critical junctures, ensuring
                clinicians can validate AI recommendations before action is taken.
                This collaboration not only prevents errors but also helps refine
                the system for future use.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Transparency and explainability
            </h3>
            <p>
                basys.ai prioritizes making AI decisions explainable. Clinicians
                can trace how recommendations were derived, with clear reasoning
                tied to specific data points. Explainable AI (XAI) tools foster
                trust and accountability by providing interpretable evidence for
                every decision.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Continuous monitoring and improvement
            </h3>
            <p>
                The company employs automated feedback loops and real-time
                monitoring to identify and rectify issues as they arise. Regular
                audits and updates keep the models accurate, compliant, and
                effective over time while adapting to evolving clinical practices
                and regulatory requirements.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Real-world impact: Accelerating diabetes care with AI-driven
                precision
            </h2>
            <p>
                According to the CDC, in 2021, 38.4 million people of all ages — or
                11.6% of the U.S. population — had diabetes, highlighting the
                pressing need for efficient and accurate healthcare solutions.
                Through its partnership with Mayo Clinic, basys.ai applied its
                advanced AI platform to diabetes use cases, revolutionizing the
                prior authorization (PA) process for this widespread condition.
            </p>
            <p>
                Traditionally, PA required human reviewers to spend 20 to 90
                minutes per case navigating complex medical charts, often causing
                delays that put timely care at risk. basys.ai addressed this
                challenge by leveraging longitudinal data and integrating robust
                guardrails into its platform. The system quickly and accurately
                analyzed patient medical histories and seamlessly matched payer
                policies with patient-specific attributes, ensuring that medication
                adjustments were justified and compliant.
            </p>
            <p>
                As a result, the PA process was completed in minutes instead of
                hours, allowing patients to access essential medication
                adjustments promptly. This innovation not only improved
                operational efficiency but also ensured timely and appropriate
                care, demonstrating how basys.ai&apos;s AI-driven solutions are
                effectively addressing inefficiencies in the healthcare system
                while improving outcomes for millions of patients living with
                diabetes.
            </p>
        </div>
    ),
    "what-makes-basys-ai-stand-out-lessons-from-the-frontlines-of-healthcare-ai":
        (
            <div className={articleBodyClass}>
                <p>
                    The answer lies in our unwavering principles, the incredible
                    people driving our mission, and the ecosystem we&apos;ve built
                    to deliver transformative solutions. Here&apos;s the
                    detailed rulebook that has guided our journey and allowed us
                    to push boundaries in healthcare AI.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    1. Alignment of incentives is tablestakes
                </h3>
                <p>
                    Misaligned incentives lead to short-term fixes and fragmented
                    systems. At basys.ai, we prioritize alignment across private and
                    public plans, payers (our paying customers), providers, and
                    patients. This ensures that every stakeholder finds value in
                    our solutions. We tackle foundational inefficiencies with a
                    system-wide perspective, creating solutions that are both
                    impactful and sustainable.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    2. Relentless focus on product excellence
                </h3>
                <p>
                    Our patent-pending platform isn&apos;t just innovative — it&apos;s
                    built to solve real-world challenges. From streamlining prior
                    authorization processes to addressing inequities in care
                    management, we refine our offerings continuously using user
                    feedback. Leveraging the power of generative AI, our solutions
                    enhance decision-making by transforming complex healthcare data
                    into actionable insights for payers and providers. This
                    commitment to excellence is further validated by peer-reviewed
                    publications in top-tier AI and healthcare conferences,
                    including AAAI, Springer, and the American Association of
                    Diabetes.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    3. Partners with vision: Mayo Clinic and Eli Lilly &amp; Co.
                </h3>
                <p>
                    We&apos;re proud to be backed by industry leaders like{" "}
                    <strong>Mayo Clinic</strong> and{" "}
                    <strong>Eli Lilly &amp; Co.</strong> These investors are more
                    than just funders — they bring decades of expertise and
                    operational insight. Their support validates our mission to
                    tackle healthcare&apos;s foundational challenges and ensures
                    that we&apos;re solving problems with industry-leading rigor.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    4. Leadership rooted in policy and healthcare systems
                    expertise
                </h3>
                <p>
                    Our leadership team has deep experience from organizations like{" "}
                    <strong>CMS (Centers for Medicare &amp; Medicaid Services)</strong>
                    , where they played pivotal roles in shaping national healthcare
                    policy. This expertise enables us to stay ahead of regulatory
                    changes, ensuring our platform not only complies with but also
                    thrives within the complex regulatory landscape of healthcare.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    5. Strategic board of healthcare leaders
                </h3>
                <p>
                    Our board is a powerhouse of healthcare visionaries who have
                    collectively held leadership roles at some of the most
                    respected institutions, including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>
                        <strong>Kaiser Permanente</strong>
                    </li>
                    <li>
                        <strong>CMS</strong>
                    </li>
                    <li>
                        <strong>Tufts Health Plan/Point32Health</strong>
                    </li>
                    <li>
                        <strong>Blue Cross Blue Shield (BCBS)</strong>
                    </li>
                    <li>Other leading health systems and health plans</li>
                </ul>
                <p>
                    They provide critical insights, amplify our vision, and guide us
                    in navigating the complexities of healthcare delivery. Their
                    expertise spans payers, providers, and policymakers, ensuring
                    that our strategy is as comprehensive as our solutions.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    6. Pioneering bias-resilient technology
                </h3>
                <p>
                    Addressing bias in healthcare AI isn&apos;t just a technical
                    challenge — it&apos;s a moral imperative. Our approach to
                    identifying and mitigating biases in healthcare has been
                    recognized through peer-reviewed research and widely read
                    publications. We&apos;re proud to have published our methodology
                    for addressing these biases on <strong>STAT News</strong>,
                    highlighting how our technology ensures fairness and equity for
                    all populations.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    7. Investor-operator synergy
                </h3>
                <p>
                    Our investors aren&apos;t just financial supporters — they&apos;re
                    collaborators. Backed by leaders from some of the largest
                    healthcare systems and pharmaceutical companies, we leverage
                    their operational insights and networks to tackle foundational
                    challenges head-on. This synergy ensures that our solutions are
                    deeply rooted in real-world needs, not fleeting trends.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    8. Holistic data for holistic solutions
                </h3>
                <p>
                    Healthcare&apos;s greatest challenges cannot be solved with
                    fragmented data. Our platform is trained on data from{" "}
                    <strong>payers, providers, and patients</strong>, giving us a
                    unique, 360-degree perspective. This comprehensive approach
                    enables us to deliver solutions that address the root causes of
                    inefficiencies rather than their symptoms.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    9. Vision-driven partnerships
                </h3>
                <p>
                    Staying true to our mission hasn&apos;t always been easy.
                    We&apos;ve made difficult decisions, including saying no to
                    investors who didn&apos;t align with our vision. While these
                    choices were challenging, they have allowed us to innovate
                    without compromise. Our partnerships are built on shared values
                    and a commitment to creating a better healthcare system.
                </p>

                <h3 className="text-lg font-semibold text-primary">
                    10. Staying true to our core: Patient outcomes
                </h3>
                <p>
                    At basys.ai, every decision we make is driven by a singular
                    focus: <strong>improving patient outcomes.</strong> Whether
                    it&apos;s creating equitable AI frameworks, automating
                    burdensome administrative processes, or aligning stakeholders,
                    our work is centered on making healthcare better for patients.
                    If a project doesn&apos;t forward that vision, we&apos;re not
                    afraid to walk away.
                </p>

                <h2 className="text-xl font-semibold text-primary">
                    The basys.ai advantage
                </h2>
                <p>
                    Our differentiation lies in our commitment to principles, our
                    world-class team, and our ecosystem of supportive investors and
                    visionary board members. From being backed by{" "}
                    <strong>Mayo Clinic</strong> and{" "}
                    <strong>Eli Lilly &amp; Co.</strong>, to having experts from{" "}
                    <strong>MIT</strong> and <strong>Harvard</strong> on our team, to
                    publishing groundbreaking research in venues like{" "}
                    <strong>STAT News</strong> and <strong>NeurIPS</strong>, we are
                    redefining what&apos;s possible in healthcare AI.
                </p>
                <p>
                    To those building in healthtech: What principles guide your
                    differentiation strategy?
                </p>
            </div>
        ),
    "scan-group-its-time-for-a-healthtech-moonshot": (
        <div className={articleBodyClass}>
            <p>
                Read the original article:{" "}
                <a
                    className="font-medium text-primary underline underline-offset-2 hover:opacity-90"
                    href="https://www.beckerspayer.com/payer/scan-group-its-time-for-a-healthtech-moonshot.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Becker&apos;s Payer Issues — SCAN Group: It&apos;s time for a
                    Healthtech Moonshot
                </a>
            </p>
            <p className="text-sm text-on-surface-variant">
                Becker&apos;s Payer Issues · Payer News
            </p>

            <p>
                Our healthcare system badly lags other industrialized nations in
                terms of what we spend and the outcomes we achieve, and the culprit
                is fairly obvious: we spend five times our peer nations on
                administrative expenses. How bad is it? Our doctors still rely
                heavily on faxes — yes, faxes — for communications.
            </p>
            <p>
                Killing fax machines won&apos;t solve the problem, of course. We
                need nothing short of a healthtech moonshot, one that&apos;s driven
                by the technology most capable of erasing administrative
                inefficiencies: artificial intelligence.
            </p>
            <p>
                We&apos;re also acutely aware of the flaws in many of the
                industry&apos;s existing AI platforms, including those that
                perpetuate racial and ethnic biases. That&apos;s one reason why
                we&apos;re calling for a stepwise approach to this AI-driven
                healthtech moonshot.
            </p>
            <p>
                And with AI as a focus of the next Trump administration — and one
                of his key advisors, Elon Musk — we propose the following blueprint
                for this technology-driven effort to reform our health system:
            </p>

            <h3 className="text-lg font-semibold text-primary">Step 1: Ethics</h3>
            <p>
                Unlike in other industries, ethics in healthcare cannot be an
                afterthought; it must serve as a north star by which we can navigate
                at every step.
            </p>
            <p>
                And thanks to important research efforts and media coverage, the
                nation has grown more acutely aware of biases in prediction
                algorithms generally, and AI algorithms in particular. The work of
                addressing these biases must be more driven by the federal
                government, given its considerable control over research and
                care-delivery spending.
            </p>
            <p>
                So to start, we must task the NIH to develop an AI ethics framework,
                in partnership with industry, by the end of 2025. Such a framework
                would address concerns about bias, accountability, and
                transparency. Beyond this, the NIH must, on an ongoing basis,
                gather ethics-related input from industry and conduct AI assessments
                across the market to ensure these technologies follow ethical
                guidelines.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Step 2: True data interoperability
            </h3>
            <p>
                In parallel with the ongoing work of safeguarding AI-related ethics,
                we must drive toward true data interoperability. The 2009 HITECH
                Act pushed health systems to digitize records, but they failed to
                make those records easily accessible to industry partners and
                patients. We must now require health systems and health plans to
                enable full data interoperability by 2028 or forfeit whatever
                federal funding they might enjoy. Here&apos;s how we propose tackling
                the work:
            </p>
            <p>
                <em>Phase 1:</em> By the end of next year, we must establish
                interoperability standards, and develop a framework to guide data
                sharing across different health systems, thereby ensuring
                compatibility and efficiency.
            </p>
            <p>
                <em>Phase 2:</em> By the end of 2026, we must offer meaningful
                financial incentives to spur health systems to achieve data
                interoperability benchmarks.
            </p>
            <p>
                <em>Phase 3:</em> By the end of 2027 we must launch pilot programs in
                which select health systems can test their interoperability and
                refine their processes. The government must offer ongoing support
                for this process, continuously adjusting standards as the
                implementation continues.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Step 3: Ensure that all data is linked to an encrypted universal
                patient identifier (UPI)
            </h3>
            <p>
                As other developed countries have proven, UPIs are crucial to helping
                health systems support patients and their caregivers as patients move
                among cities, states and different provider groups.
            </p>
            <p>Here&apos;s how we propose achieving this important goal:</p>
            <p>
                <em>Phase 1:</em> By the end of 2026, develop encryption technologies
                to secure patient data and identifiers and ensure confidentiality.
            </p>
            <p>
                <em>Phase 2:</em> By the end of 2028, integrate UPI technologies into
                existing electronic health record platforms, with government agencies
                working closely with health systems to ensure seamless access to data
                across all stakeholders — but most importantly, patients. This
                effort will require annual audits and updates to security measures and
                consent protocols.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Step 4: Build a public utility for NIH and pharmaceutical researchers
            </h3>
            <p>
                The nation&apos;s Cancer Moonshot, although well-intentioned, was
                doomed to underperform because it lacked the right foundational
                infrastructure. We can position an AI-driven HealthTech Moonshot for
                success by linking genetic data with clinical data by 2031 — all with
                government support and oversight.
            </p>
            <p>
                <em>Phase 1:</em> This work should begin with the creation of a
                centralized data repository by the end of 2028 — one that houses
                both genomic and clinical data, and makes this data accessible for
                research.
            </p>
            <p>
                <em>Phase 2:</em> Starting in 2029, the federal government should fund
                partnerships between NIH and private industry to help researchers
                mine the data for scientific breakthroughs.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Step 5: Build a National Institute of Artificial Intelligence
            </h3>
            <p>
                First, we must by 2030 identify key health challenges that have
                received disproportionately little attention from the private sector,
                and could be well served by AI-driven research. Next, we must
                establish the National Institute of Artificial Intelligence by 2033
                and seed research initiatives in those areas.
            </p>
            <p>
                In sum, it will take a massive and concerted effort to deliver the
                U.S. to a place where its healthcare spending yields what it should
                for patients. Thanks to the recent and enormous advances in generative
                AI, however, we can do precisely that.
            </p>
            <p>
                Yes, it will require a concerted and collective effort. But the
                benefits will be just as tremendous — not just for this generation of
                Americans, but for many to come.
            </p>

            <p className="border-t border-outline-variant pt-6 text-sm italic text-on-surface-variant">
                Sachin Jain, MD, is president and CEO of SCAN Group. Amber Nigam is
                the co-founder and CEO of basys.ai.
            </p>
        </div>
    ),
    "how-i-addressed-racial-bias-in-my-companys-ai-algorithm": (
        <div className={articleBodyClass}>
            <p>
                Read the original article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.statnews.com/2024/11/13/generative-ai-medicine-health-care-ai-racism/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    STAT — My quest to confront racism in health care AI
                </a>
            </p>

            <p>
                Several years ago, teams of scholars published{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.science.org/doi/10.1126/science.aax2342"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    groundbreaking research that pointed to racial biases in
                    algorithms
                </a>{" "}
                that helped direct patient care at major health systems in the U.S.
                Those algorithms, the studies found, adversely affected the care of
                Black and Latinx patients across multiple medical categories. For
                instance, the researchers uncovered racial biases in the prediction
                algorithms used to identify more medically complex patients, such
                that Black patients were far less likely to qualify for additional
                care than their white counterparts.
            </p>
            <p>
                Coverage of the Covid pandemic at the time somewhat buried these
                findings, but the recent STAT series{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.statnews.com/embedded-bias/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &ldquo;Embedded Bias&rdquo;
                </a>{" "}
                has pointed a new spotlight on the issue. My broad takeaway:
                Algorithms cannot be trusted to make safe and fair decisions about
                patient care.
            </p>
            <p>
                The timing is critical, given the rise of generative AI. Pharma
                companies, care-delivery organizations, and health insurers are
                being deluged with pitches from AI companies that promise to automate
                everything from the creation of marketing materials to the drafting
                of patient visit notes following a doctor&apos;s appointment.
            </p>
            <p>And the reaction is almost reflexive: AI cannot be trusted.</p>
            <p>
                As the co-founder of a generative AI company that helps insurers
                manage the health of their members, I don&apos;t completely disagree.
                Many generative AI companies should not, indeed, be trusted with
                sensitive medical decisions.
            </p>
            <p>
                But some are indeed working hard to try to build AI that can be
                trusted.
            </p>
            <p>
                I should know, because my family has been directly impacted by
                racial bias in medical technology, and I&apos;m on a personal quest
                to make AI more trustworthy.
            </p>
            <p>
                Four years ago, I was at my father&apos;s bedside as he was dying
                from Covid-19. As many who&apos;ve been through such ordeals know all
                too well, one of the key ways to track a patient&apos;s condition is
                through a{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.statnews.com/2024/11/01/pulse-oximeters-skin-tones-lawsuit-medtronic-fda-guidance/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pulse oximeter
                </a>
                , which measures how much oxygen is being carried by the blood. This
                device, which clips to a patient&apos;s finger, works by scanning the
                blood vessels beneath a patient&apos;s skin.
            </p>
            <p>
                In my father&apos;s case, though, we were puzzled because one moment
                his pulse oximeter would give a fairly normal reading, and the next
                his oxygen levels would be alarmingly low. This continued on through
                his hospitalization, and while it did not directly contribute to his
                death, it was tremendously distressing, given its importance as a
                diagnostic element.
            </p>
            <p>
                Because I was already part of a medical research group at the
                Massachusetts Institute of Technology, I helped lean into emerging
                research efforts that sought to understand how pulse oximeters were
                failing those with darker skin.
            </p>
            <p>Patients like my father.</p>
            <p>
                These findings made me even more determined not to perpetuate such
                biases in the generative AI models that I was in the process of
                building at the time to provide impartial decision-making in medical
                claims resolution and prior-authorization processes for medications
                and surgeries.
            </p>
            <p>
                It was not easy. My colleagues and I already enjoyed a data set that
                was far bigger than most other health care-related generative AI
                companies. We boasted source data from Mayo Clinic and other industry
                leaders, including one of the largest global pharma companies. But
                we also understood that those data sets themselves could be biased,
                simply because they might not reflect the racial and ethnic
                diversity of patients generally.
            </p>
            <p>
                We spent months testing and refining our algorithms, and adding a
                layer of what is known as &ldquo;dataset diversification and
                balancing,&rdquo; to increase the odds that our data would reflect all
                races and ethnicities fairly.
            </p>
            <p>Here&apos;s what that means in practical terms.</p>
            <p>
                In collaboration with Mayo, we focused on early detection of
                cardiovascular events and quickly noticed that our model accurately
                detected such events in populations that were well-represented in the
                training data. But it had a significant blind spot for Black
                Americans, who, as we know,{" "}
                <a
                    className={inlineLinkClass}
                    href="https://minorityhealth.hhs.gov/heart-disease-and-african-americans"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    disproportionately suffer from cardiovascular disease
                </a>
                . By working with our Mayo partners, we understood that this
                algorithmic blind spot was caused by the historical exclusion of
                Blacks and other underrepresented minority groups from medical device
                trials.
            </p>
            <p>
                By diversifying our data set to account for such blind spots, we
                significantly improved detection rates for these communities.
            </p>
            <p>
                We also implemented manual validation checkpoints at different stages,
                to ensure the datasets were both balanced and accurate. Such manual
                checks helped us spotlight demographic data that was often missing
                for minority patients, like age and family medical history, and
                which further skewed heart disease predictions for these groups. By
                correcting our model&apos;s assumptions for these populations, we
                further improved its accuracy.
            </p>
            <p>
                In cases where we lacked enough real-world data for certain minority
                groups, we used synthetic data to fill these gaps. For example, early
                on, our model for detecting cardiovascular events lacked strong data
                for Hispanic populations. By simulating realistic scenarios of
                cardiovascular risk based on clinical research and population
                statistics, we exposed our model to a more racially and ethnically
                diverse sample.
            </p>
            <p>
                As we further audited our model for biases, we also discovered
                inconsistencies in socioeconomic data that had been gathered for
                members of different ethnic groups. For instance, data for
                lower-income patients often failed to account for their access to
                health care, or their medical histories.
            </p>
            <p>
                To address this, we designed an algorithmic intervention that flagged
                such problematic data points, and automatically re-weighted our
                predictions to account for them.
            </p>
            <p>
                Finally, we established guardrails in our algorithms to prevent
                racially related blind spots, including a fairness audit
                mechanism that&apos;s triggered whenever the model&apos;s performance
                for any racial or ethnic group falls below a certain threshold.
                During one testing phase, for example, we found that the model&apos;s
                accuracy for Asian populations lagged behind the overall model&apos;s
                accuracy. Now, when this threshold is crossed, our model automatically
                diversifies the dataset to ensure fair results for a given
                population.
            </p>
            <p>
                Taken as a whole, these efforts have paid off, but with a nuance
                that&apos;s worth noting for like-minded AI leaders. Namely, before
                implementing these changes, our overall accuracy was about 98%.
                After making these changes, we actually observed a roughly 7% drop in
                accuracy. While the initial high accuracy rate seemed impressive, it
                actually masked critical issues. The algorithm was previously
                overconfident in certain areas, particularly where biases in the data
                had skewed its predictions. By addressing these biases, the accuracy
                metric adjusted downwards, but the model now makes fewer incorrect
                confident predictions, especially in sensitive cases. For users, this
                trade-off means a more reliable system that errs less in crucial
                scenarios, resulting in fairer and more trustworthy decision-making.
                The experience underscored the ways in which aggregated accuracy
                benchmarks can mask troubling issues within the data.
            </p>
            <p>
                The bottom line for my company: We&apos;re now 15–20% more confident
                in our model&apos;s race-related objectivity, and our model
                outperforms humans when it comes to matching patients with the
                appropriate care — though of course our model is designed to allow
                humans to make the final decision.
            </p>
            <p>
                That said, no model can ever be perfect. We have provisions for
                continuous monitoring and improvement, with systems in place to
                regularly refine our models and detect any unintended biases that may
                emerge. This ongoing oversight ensures that we treat fairness as an
                evolving commitment, essential to achieving equitable outcomes in
                health care.
            </p>
            <p>
                What not enough people understand about generative AI is that
                companies like mine can actually help solve the problem of racial
                bias in health care. After all, racial bias is a human problem first,
                and a technology problem only to the extent that humans design our
                technologies.
            </p>
            <p>
                What it comes down to is attention and intention. If health care
                leaders pay close enough attention to racial biases, they will
                understand the importance of solving this problem in all areas of
                their organization, not just in IT. And if they bring the right level
                of intention to this issue, they will dedicate actual resources and
                time to solving it.
            </p>
            <p>
                In the process, they should bear in mind that generative AI is far
                from the bogeyman that some wish to make it out to be. Rather, with
                the proper guardrails in place, it can be part of the solution.
                It&apos;s up to health care leaders to ask the right questions, and
                it&apos;s up to us as AI leaders to answer all such questions the
                right way, or else point their technology to less life-or-death
                venues.
            </p>

            <p className="border-t border-outline-variant pt-6 text-sm text-secondary">
                Amber Nigam is the co-founder and CEO of{" "}
                <a
                    className={inlineLinkClass}
                    href="https://basys.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    basys.ai
                </a>
                , a generative AI-driven health care company. A Harvard-trained health
                data scientist, Amber is dedicated to eliminating biases in medical
                technology and advancing equitable health care delivery.
            </p>
        </div>
    ),
    "aim-research-feature-b2b-ai-startup-ceos-to-watch-in-the-us-in-2024": (
        <div className={articleBodyClass}>
            <h3 className="text-lg font-semibold text-primary">
                Amber Nigam: basys.ai
            </h3>
            <p>
                Amber Nigam is the co-founder and CEO of basys.ai, a startup focused
                on improving healthcare efficiency through AI-powered prior
                authorization and utilization management solutions. With over a
                decade of experience in healthcare and AI, Nigam holds a master&apos;s
                degree in Health Data Science from Harvard University. Under his
                leadership, basys.ai has developed an advanced policy engine that
                automates up to 85% of prior authorization decisions with 98% clinical
                accuracy. Nigam&apos;s work has been recognized with awards such as the
                40 under 40 Health Catalyst Award from the Boston Congress of Public
                Health and the Cheng&apos;s Fellowship from Harvard Kennedy School. He
                is also a Forbes contributor on healthcare technology and policy, and
                actively mentors startups in the Techstars, MIT, and Harvard
                ecosystems.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Dario Amodei: Anthropic
            </h3>
            <p>
                Dario Amodei is a prominent figure in the field of artificial
                intelligence, known for his significant contributions to AI research
                and development. He is the co-founder and CEO of Anthropic, a public
                benefit corporation dedicated to building reliable, interpretable, and
                steerable AI systems. Prior to founding Anthropic in 2021, Amodei served
                as the Vice President of Research at OpenAI, where he played a crucial
                role in developing the GPT-2 and GPT-3 language models. With a PhD in
                physics from Princeton University, Amodei has a diverse background
                that includes work at Google Brain and Baidu. Under his leadership,
                Anthropic has developed the Claude AI series and has become a key
                player in the ongoing efforts to ensure the responsible development of
                advanced AI technologies.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Sean White: Inflection AI
            </h3>
            <p>
                Sean White is the newly appointed CEO of Inflection AI, a company
                specializing in developing custom generative AI models for commercial
                use. Before joining Inflection AI, White held significant roles in
                technology and research, including Chief R&amp;D Officer at Mozilla and
                co-founder of BrightSky Labs. Under his leadership, Inflection AI has
                pivoted toward an &ldquo;AI studio&rdquo; model, focusing on creating
                empathetic AI solutions for businesses, such as customer support agents
                and internal assistance bots. White&apos;s extensive background in user
                experience and emerging technologies positions him to guide Inflection
                AI in leveraging its advanced AI capabilities to serve a broader
                commercial market.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Alex Schmelkin: Sixfold
            </h3>
            <p>
                Alex Schmelkin is the Founder and CEO of Sixfold, a company focused on
                enhancing the efficiency and accuracy of insurance underwriting through
                advanced AI solutions. With over 25 years of experience in financial
                services and e-commerce, Schmelkin has a strong background in technology
                and innovation. Prior to founding Sixfold, he was a founding member of
                Unqork and the founder and CEO of Cake &amp; Arrow. Under his
                leadership, Sixfold aims to transform the underwriting process by
                increasing capacity, improving traceability, and enhancing the overall
                quality of life for underwriters, ultimately leading to better
                products for end customers.
            </p>

            <h3 className="text-lg font-semibold text-primary">Kanjun Qiu: Imbue</h3>
            <p>
                Kanjun Qiu is the co-founder and CEO of Imbue, an AI research company
                focused on developing advanced AI agents capable of reasoning and
                coding. With a background in computer science from MIT and experience in
                high-frequency trading algorithms, Qiu has positioned Imbue at the
                forefront of AI innovation. The company, which rebranded from Generally
                Intelligent, has raised $200 million in Series B funding at a valuation
                exceeding $1 billion. Under Qiu&apos;s leadership, Imbue aims to create AI
                systems that can safely assist humans in various tasks, emphasizing the
                importance of AI safety and ethical development. Qiu&apos;s vision for
                Imbue includes advancing AI from its current &ldquo;Web 1.0&rdquo; stage
                to more sophisticated, agentive AI that can take action on behalf of
                humans while maintaining trustworthiness and safety.
            </p>

            <h3 className="text-lg font-semibold text-primary">David Luan: Adept AI</h3>
            <p>
                David Luan is the co-founder and CEO of Adept AI, a company focused on
                developing advanced AI agents to work alongside humans in various
                professions. With an impressive background in AI research and
                development, Luan previously served as VP of Engineering at OpenAI and
                led large model initiatives at Google Brain. Under his leadership, Adept
                AI aims to create AI systems that can understand and execute complex tasks
                across different software platforms, essentially functioning as an AI
                teammate for users. The company has raised significant funding, including
                a $350 million Series B round, and has formed strategic partnerships with
                major tech companies. Luan&apos;s vision for Adept involves building AI
                that enhances human capabilities rather than replacing them, with a focus
                on creating intuitive, human-centric AI interfaces.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Munjal Shah: Hippocratic AI
            </h3>
            <p>
                Munjal Shah is the co-founder and CEO of Hippocratic AI, a startup
                focused on developing safety-oriented large language models for
                healthcare applications. With a strong background in artificial
                intelligence and entrepreneurship, Shah has previously founded successful
                companies acquired by tech giants like Google and Alibaba. Hippocratic
                AI, which recently raised $53 million in Series A funding at a $500
                million valuation, aims to improve healthcare access, equity, and
                outcomes through generative AI. Under Shah&apos;s leadership, the company
                is partnering with organizations like Nvidia to build more empathetic
                healthcare AI agents and is beta-testing its technology with institutions
                such as the University of Vermont.
            </p>

            <h3 className="text-lg font-semibold text-primary">Manu Sharma: LabelBox</h3>
            <p>
                Manu Sharma is the co-founder and CEO of Labelbox, a company that
                provides a training data platform for AI teams. With a background in
                aerospace engineering and experience in computer vision at companies like
                Planet Labs and DroneDeploy, Sharma founded Labelbox in 2018 to
                address the data bottleneck in AI development. Under his leadership,
                Labelbox has developed tools and workflows that enable efficient
                creation, management, and iteration of training data for machine
                learning models. The company&apos;s platform incorporates innovative
                techniques such as model-assisted labeling and active learning to
                significantly reduce labeling costs and improve AI model performance.
                Labelbox has secured over $180 million in venture capital funding and
                serves clients across various industries, including agriculture,
                robotics, healthcare, and defense.
            </p>

            <h3 className="text-lg font-semibold text-primary">Stephen Balaban: Lambda</h3>
            <p>
                Stephen Balaban is the co-founder and CEO of Lambda, a company
                specializing in AI infrastructure and GPU cloud services. Founded in 2012,
                Lambda offers one of the world&apos;s most cost-effective GPU cloud
                platforms, providing high-performance computing resources for AI training
                and inference at competitive prices. Balaban, who holds a degree in
                Computer Science and Economics from the University of Michigan, previously
                worked at Perceptio, where he developed deep neural networks for face
                recognition, a company later acquired by Apple. Under his leadership,
                Lambda has grown significantly, securing substantial funding and serving
                prominent clients like Apple, Meta, and Microsoft. Balaban&apos;s vision
                for Lambda focuses on making advanced AI tools accessible and affordable,
                driving innovation in AI research and development.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Douwe Kiela: Contextual AI
            </h3>
            <p>
                Douwe Kiela is the co-founder and CEO of Contextual AI, a company focused
                on developing advanced language models for enterprise applications. With a
                Ph.D. in Computer Science from the University of Cambridge, Kiela has an
                extensive background in AI research, including roles at Facebook AI
                Research and as Head of Research at Hugging Face. He is also an Adjunct
                Professor at Stanford University. Kiela is known for his work on Retrieval
                Augmented Generation (RAG), which he developed while at Facebook. Under
                his leadership, Contextual AI aims to create more reliable, efficient, and
                privacy-preserving AI systems for businesses, addressing common issues
                like hallucinations, data privacy, and cost-effectiveness in language
                models. The company&apos;s approach focuses on improving RAG technology to
                overcome limitations in current enterprise AI solutions.
            </p>

            <h3 className="text-lg font-semibold text-primary">Gavin Uberti: Etched</h3>
            <p>
                Gavin Uberti is the co-founder and CEO of Etched, a startup focused on
                developing specialized AI chips for large language models. A Harvard
                dropout, Uberti founded Etched in 2022 to create more efficient and
                cost-effective alternatives to general-purpose GPUs for AI computing.
                Under his leadership, Etched has raised significant funding, including a
                $120 million round, to develop their revolutionary Sohu chip, which aims
                to dramatically improve performance and reduce costs in AI model training
                and deployment. Uberti&apos;s vision for Etched involves creating custom AI
                chips that could potentially reshape the AI hardware landscape, challenging
                industry giants like Nvidia. With a background in software engineering and
                a track record of academic excellence, Uberti is positioning Etched at the
                forefront of the AI chip revolution, focusing on speed, efficiency, and
                specialized architecture for transformer models.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                David Ferrucci: Elemental Cognition
            </h3>
            <p>
                David Ferrucci is the founder, CEO, and Chief Scientist of Elemental
                Cognition, an AI company focused on developing advanced natural language
                understanding and reasoning systems. Ferrucci is best known for leading the
                IBM team that created Watson, the AI system that famously won on{" "}
                <em>Jeopardy!</em> in 2011. With a Ph.D. in Computer Science from
                Rensselaer Polytechnic Institute, Ferrucci has over 25 years of experience
                in AI research. Founded in 2015, Elemental Cognition aims to create AI that
                can engage in thoughtful processing and reasoning before communicating,
                combining machine learning with logical reasoning.
            </p>

            <h3 className="text-lg font-semibold text-primary">Miho Shoji: Moodbit</h3>
            <p>
                Miho Shoji is the co-founder and CEO of Moodbit, an innovative HR tech
                startup focused on measuring and improving employee morale and productivity
                through real-time emotion tracking. Born in Bolivia and having lived in
                Chile before moving to New York City, Shoji&apos;s diverse background has
                shaped her understanding of how emotions impact workplace dynamics. Under
                her leadership, Moodbit has developed a platform that provides real-time
                mood indicators and suggests weekly actions to enhance employee
                well-being, engagement, and productivity. Shoji&apos;s work has gained
                recognition in the tech industry, with features in publications like
                Forbes. As a female founder in the male-dominated tech sector, she brings a
                unique perspective to HR innovation, leveraging her experience in HR and
                communications to drive forward-thinking solutions in organizational
                enhancement.
            </p>

            <h3 className="text-lg font-semibold text-primary">Laxman Papineni: Outplay</h3>
            <p>
                Laxman Papineni is the co-founder and CEO of Outplay, a sales engagement
                platform designed to streamline and enhance sales processes for modern
                teams. With a background as a serial entrepreneur, Papineni has previously
                founded successful ventures like AppVirality and GrowthScore. Under his
                leadership, Outplay offers an all-in-one sales stack that includes tools for
                sales prospecting, multi-channel engagement, inbound conversion, scheduling,
                and conversational intelligence. The platform aims to replace multiple point
                solutions, providing a comprehensive and efficient approach to sales
                automation. Papineni&apos;s vision for Outplay is to empower sales teams to
                accelerate deal closures and drive revenue growth through powerful,
                personalized outreach and advanced AI features.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                René Morkos: ALICE Technologies Inc.
            </h3>
            <p>
                René Morkos is the founder and CEO of ALICE Technologies Inc., a company
                that developed the world&apos;s first Generative Construction Simulator and
                Optimizer. With a Ph.D. in artificial intelligence applications for
                construction from Stanford University, where he also serves as an adjunct
                professor, Morkos brings over 15 years of diverse construction experience
                to his role. ALICE Technologies, founded in 2015, aims to reduce global
                construction costs by 25% through its AI-powered construction simulation
                platform. Under Morkos&apos; leadership, the company has raised significant
                funding and works with major contractors to optimize construction planning
                and execution. Morkos&apos; background includes project management in
                challenging environments like Afghanistan and underwater pipeline
                construction, contributing to his unique perspective on construction
                innovation.
            </p>

            <h3 className="text-lg font-semibold text-primary">Etienne Bernard: NuMind</h3>
            <p>
                Etienne Bernard is the co-founder and CEO of NuMind, a software company
                developing machine learning tools and applications. With a Ph.D. in
                statistical physics from École normale supérieure and postdoctoral experience
                at MIT, Bernard brings extensive expertise in AI and machine learning to his
                role. Prior to founding NuMind in 2022, he spent seven years as the head of
                machine learning at Wolfram Research, where he led the development of
                automatic learning tools and user-friendly deep learning frameworks. NuMind
                aims to simplify the creation of custom NLP models, making AI more
                accessible to data scientists, analysts, and software engineers. Under
                Bernard&apos;s leadership, NuMind leverages large language models to enable
                users to complete NLP projects significantly faster than traditional methods.
            </p>
        </div>
    ),
    "forbes-feature-how-large-language-models-are-putting-skin-in-the-healthcare-game": (
        <div className={articleBodyClass}>
            <p>
                Read full article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2024/05/15/how-large-language-models-are-putting-skin-in-the-healthcare-game/?sh=4b9a9dc16b80"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — How Large Language Models Are Putting Skin In The Healthcare
                    Game
                </a>
            </p>
            <p>
                As these models become increasingly embedded in healthcare infrastructures,
                though, I believe they have the potential to offer both transformative
                opportunities and complex challenges.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Current status of LLMs in healthcare
            </h2>
            <p>
                Language models such as GPT have evolved from their origins in chatbot
                functionality to become central players in managing vast amounts of medical
                data and enhancing patient engagement. Positioned within the Gartner Hype
                Cycle, which helps separate hype from commercial viability, I see these models
                transitioning from the &ldquo;Peak of Inflated Expectations&rdquo; to the{" "}
                &ldquo;Trough of Disillusionment,&rdquo; where their real-world applications are
                rigorously tested against lofty expectations.
            </p>
            <p>
                In settings like the Mayo Clinic, LLMs assist in quickly synthesizing medical
                research and patient data, showcasing their capability to handle complex
                information flows that are typically time-consuming for human counterparts.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Enhancing patient care and clinical efficiency
            </h2>
            <p>
                LLMs can help improve the functionality of interactive portals, tailoring health
                advisories and streamlining the documentation process for patient care.
                Institutions like Mount Sinai Health System are looking at language models to
                help give patients comprehensible, accurate medical advice and facilitate smoother
                interactions — though the organization notes that there are still many
                challenges to address before implementation.
            </p>
            <p>
                I think these AI systems could also be invaluable in environments where quick
                access to patient histories and personalized treatment plans are crucial,
                reducing the time healthcare providers spend on administrative tasks and
                increasing their availability for direct patient care.
            </p>
            <p>
                On the pharmaceutical side, I see AI accelerating drug reformulation, reducing
                costs and, most importantly, improving care outcomes. Like with patient data, AI
                can help identify patterns and make predictions, enhancing the efficacy and
                accessibility of increasingly popular medications like GLP-1s. As specialty drug
                spending rises due to reformulations, AI can also help mitigate the financial
                impact of shifting drug spending from medical to pharmacy benefits, ensuring that
                innovations in drug delivery result in accessible and affordable patient care.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Reducing administrative burdens through AI
            </h2>
            <p>
                It&apos;s also worth emphasizing how LLMs can significantly mitigate
                administrative challenges, particularly in processes like prior authorization.
                These models promise to streamline decision-making, shorten wait times for
                patients and allow medical staff to concentrate on providing care rather than
                handling paperwork.
            </p>
            <p>
                Further, LLMs can optimize resource allocation by predicting patient influx and
                identifying potential bottlenecks in hospital workflows, thereby enabling
                healthcare facilities to better manage their staffing and logistical needs. The
                broad application of these models in administrative domains illustrates their
                potential to transform healthcare operations fundamentally.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Challenges and ethical considerations
            </h2>
            <p>
                Despite their utility, the deployment of LLMs in healthcare raises significant
                concerns regarding accuracy and potential biases in the generated content,
                especially across diverse patient groups. Ethical challenges related to the use
                of patient data also necessitate robust privacy measures and transparent AI
                practices.
            </p>
            <p>
                The risk of perpetuating existing biases through flawed data or algorithms is a
                pressing issue that requires continuous scrutiny and adjustment of AI models to
                ensure fairness and accuracy in all healthcare interactions. Moreover, as these
                models become more deeply integrated into healthcare decision-making processes,
                the need for stringent oversight becomes more pressing.
            </p>
            <p>
                One particular ethical concern I&apos;ve observed involves the possibility of AI
                influencing treatment decisions without fully accounting for the unique nuances of
                individual patients. AI models often generate recommendations based on data-driven
                probabilities, which may not always align perfectly with the cultural, social and
                personal contexts of each patient. To navigate this, look to integrate
                multi-disciplinary oversight into the AI development process that involves
                clinicians, ethicists and patient advocates to review and guide AI development. I
                believe this approach can help ensure that our LLMs enhance, rather than replace,
                the nuanced judgments of healthcare professionals.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Integration with healthcare IT ecosystems
            </h2>
            <p>
                Successfully integrating LLMs into healthcare systems demands a robust IT
                infrastructure and thoughtful adaptation of existing workflows. Healthcare
                facilities will need to upgrade their systems to accommodate advanced AI
                capabilities while complying with regulations like HIPAA.
            </p>
            <p>
                I recommend you prioritize interoperable platforms designed to match and
                integrate LLMs with any vendor systems already in use, thereby enhancing
                efficiency and minimizing disruption. This ensures that your AI solutions can be
                deployed quickly and effectively to any existing technological healthcare
                environment.
            </p>
            <p>
                Overall, this process involves both technological upgrades and cultural shifts
                within organizations to embrace AI as a tool for better healthcare delivery. I see
                collaborations between AI specialists and healthcare professionals as crucial for
                designing user-friendly and efficient interfaces. They can help technology
                solutions align with clinical needs so they are ultimately embraced by medical
                staff. It will require continuous dialogue between developers and practitioners to
                ensure that the technology meets the nuanced demands of your healthcare settings.
            </p>

            <h2 className="text-xl font-semibold text-primary">Conclusion</h2>
            <p>
                The integration of LLMs in healthcare is already a game-changer, promising to
                revolutionize the industry and redefine the way we approach patient care. However,
                the successful integration of LLMs in healthcare requires a strategic and
                collaborative approach. I believe engaging all stakeholders, including clinicians,
                patients, administrators and technologists, is crucial to ensuring that AI
                solutions align with real-world needs and workflows. For healthcare leaders, I
                believe the goal should be to weave AI into the fabric of healthcare delivery in a
                way that complements and enhances human-centric care, ensuring that technology acts
                as a supportive, not disruptive, force.
            </p>
            <p>
                Looking ahead, the impact of LLMs on healthcare is poised to deepen as these models
                become even more sophisticated and adaptable. Companies that proactively embrace
                these technologies and invest in their development and integration can be
                well-positioned to capitalize on the efficiency gains, cost savings and improved
                patient outcomes they offer. However, this will require a willingness to adapt
                existing business models, forge strategic partnerships and navigate the complex
                regulatory and ethical landscape surrounding AI in healthcare.
            </p>
        </div>
    ),
    "forbes-feature-state-of-the-pharma-industry-present-and-future": (
        <div className={articleBodyClass}>
            <p>
                Read full article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2024/04/08/state-of-the-pharma-industry-present-and-future/?sh=442a977647de"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — State of the Pharma Industry: Present and Future
                </a>
            </p>
            <p>
                The growing use of GLP-1 drugs, known for their role in weight management and
                managing diabetes, serves as a pertinent example of the current state of the
                industry. These drugs highlight the potential of new treatments and the complexities
                surrounding their incorporation into the healthcare framework.
            </p>
            <p>
                Based on my work with health plans, health systems, pharmaceutical companies and
                policymakers, here are the current trends I&apos;m seeing within the pharmaceutical
                industry and where I predict shifts will occur in the future. Through this
                exploration, I aim to offer a thorough understanding of the pharmaceutical
                industry&apos;s present situation and its likely progression, and I want to
                emphasize the essential balance between driving medical advancement and ensuring
                broad access to crucial therapies.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Current trends in pharma
            </h2>
            <p>
                Much of the dialogue surrounding GLP-1 drugs encapsulates the broader debates
                within the pharmaceutical industry about drug affordability, accessibility and the
                strategies of payers in managing healthcare costs. These drugs exemplify the
                challenges and opportunities of integrating innovative treatments into healthcare
                systems. Their high costs have led to varied responses from payers, some excluding
                them from formularies and others including them, thus reflecting the diverse
                strategies in tackling healthcare expenses and ensuring patient care.
            </p>
            <p>
                Adjustments in payer policies and formulary decisions are increasingly evident, with
                strategies such as limiting coverage to people with higher body mass indexes or
                requiring them to try cheaper alternatives first. These adjustments aim to mitigate
                costs while preventing potential overuse or misuse, indicating a shift toward more
                managed and scrutinized access to high-cost medications.
            </p>
            <p>
                Concurrently, there&apos;s a notable emphasis on personalized care plans to address
                the individual needs of patients. This could help ensure treatments are both
                medically necessary and appropriately used, which is pivotal in optimizing patient
                outcomes and minimizing waste.
            </p>
            <p>
                Furthermore, I&apos;m finding that the discourse around GLP-1 drugs is catalyzing
                more extensive collaborations across the pharmaceutical landscape, involving payers,
                manufacturers and policymakers. Recently, some major pharmaceutical companies have
                partnered with online pharmacies, such as Amazon Pharmacy, to deliver GLP-1 drugs.
                From my perspective, these discussions aim to forge equitable and effective
                strategies for drug regulation and payment, and they highlight the industry&apos;s
                collective endeavor to navigate the intricacies of introducing new therapies.
            </p>
            <p>
                Formulary adjustments by pharmaceutical benefit managers like CVS Caremark, Express
                Scripts and OptumRx showcase a trend toward incorporating first-in-class therapeutics
                and biosimilars and a move away from high-cost drugs in favor of generics or
                alternative treatments. These changes, seen across various drug categories, including
                idiopathic pulmonary fibrosis, multiple myeloma and asthma, underscore a commitment to
                advancing patient care through personalized and cost-effective treatment strategies.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Predictions of innovation and consolidation
            </h2>
            <p>
                The pharmaceutical landscape is on the cusp of significant shifts, as I believe the
                patent landscape for critical drug categories such as oncology and autoimmune
                diseases is poised to introduce new challenges and opportunities. The discourse
                surrounding GLP-1 drugs is merely the precursor to what we can anticipate across these
                therapeutic areas.
            </p>
            <p>
                As new patents are filed and old patents expire, the industry is likely to witness a
                similar pattern, where the introduction of biosimilars and generics sparks a
                reevaluation of drug access, pricing strategies and the overall approach to managing
                patient care. Concurrent with this trend of innovation, the industry may experience
                consolidation whereby intermediaries, such as pharmacy benefit managers, are absorbed
                into payers.
            </p>
            <p>
                The future of pharma is not just about the introduction of new treatments but also
                about enhancing the quality of care through more personalized treatment plans. The
                trend toward personalization is expected to gain momentum. As healthcare plans and
                pharmaceutical companies collaborate more closely, the aim will likely be to refine
                the efficiency of treatments to ensure they meet the diverse requirements of
                patients. As the CEO of Elevance Health noted, the implementation of AI to
                personalize care plans will &ldquo;move at the speed of trust.&rdquo;
            </p>
            <p>
                Moreover, the industry&apos;s direction points toward an improvement in the integration
                of innovative treatments within healthcare systems, aiming for an equilibrium that
                balances cutting-edge medical advancements with pragmatic considerations of cost and
                access. With the CEO of UnitedHealthcare eliminating copays and out-of-pocket costs
                on certain medications and the Centers for Medicare &amp; Medicaid Services initiating
                price negotiations for a variety of drugs, it&apos;s evident that the pharmaceutical
                industry&apos;s future will be characterized by constant negotiation among pharma
                companies, payers and policymakers. These discussions will play a pivotal role in
                shaping how new treatments are developed, priced and made available to patients. To
                me, they reflect an evolving landscape where innovation, cost and access are in
                continual dialogue.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Bringing access and quality together
            </h2>
            <p>
                As the pharmaceutical industry moves ahead, the essential task is to meld the
                innovation seen in drug development with the imperatives of access and quality care.
                The advancements in treatments, particularly in areas highlighted by the recent
                focus on GLP-1 drugs and the broader discussions around drug formularies and payer
                policies, underscore a critical transition.
            </p>
            <p>
                This transition is toward a healthcare ecosystem that not only values breakthroughs
                in medical science but also prioritizes making these innovations accessible and
                affordable. The concerted efforts of stakeholders, including pharmaceutical companies,
                healthcare providers, payers and policymakers, are crucial in navigating this
                landscape. By working together, these entities can establish a framework where access to
                essential medications becomes a cornerstone of patient care, supported by policies
                and practices that ensure treatments are both effective and economically viable.
            </p>
        </div>
    ),
    "forbes-feature-how-prior-authorization-reforms-can-help-value-based-care": (
        <div className={articleBodyClass}>
            <p>
                Read the original article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2024/03/05/how-prior-authorization-reforms-can-help-value-based-care/?sh=614a907b3fce"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — How Prior Authorization Reforms Can Help Value-Based Care
                </a>
            </p>
            <p>
                One key to unlocking this potential lies in the process of prior authorization (PA),
                a procedural cornerstone that ensures treatment plans meet objective criteria for both
                necessity and efficiency. To optimize PA in an effort to realize VBC, simplifying payer
                policies and automating operational processes are two major levers of change.
            </p>
            <p>
                Technological advancements, such as in the field of artificial intelligence (AI), as
                well as forward-thinking policies from organizations such as the Centers for Medicare
                &amp; Medicaid Services (CMS) and the National Committee for Quality Assurance (NCQA)
                are at the forefront of these initiatives.
            </p>
            <p>
                This article will delve into the considerations that VBC companies can evaluate when
                looking to leverage new technologies and partnerships effectively. The following
                sections will examine how AI can play a pivotal role in clarifying policy language and
                streamlining operational processes as well as the strategic importance of choosing the
                right partners for vertical integration or collaboration within the healthtech
                ecosystem.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Clarifying policy language: Improving transparency and comprehensibility
            </h2>
            <p>
                The complexity of payer policies has long been a challenge within the healthcare
                industry, often leading to confusion and inefficiencies that can hinder the
                effectiveness of VBC initiatives. Recognizing this issue, organizations such as the
                National Committee for Quality Assurance (NCQA) and the Centers for Medicare &amp;
                Medicaid Services (CMS) have been making concerted efforts to align and clarify these
                policies.
            </p>
            <p>
                By reviewing and rating policies for comprehensibility, these organizations aim to
                standardize the understanding of payer policies across the healthcare ecosystem,
                making it easier for all stakeholders to navigate the intricacies of healthcare
                billing and reimbursement.
            </p>
            <p>
                I see AI emerging as a crucial tool in these efforts. AI&apos;s ability to analyze
                natural language at scale offers a unique advantage in assessing the comprehensibility
                and objectivity of policy language. This technology can sift through vast amounts of
                policy documents, identifying areas that require clarification and suggesting
                improvements.
            </p>
            <p>
                Moreover, AI applications are being developed to directly assist providers and payers
                in interpreting and applying policy criteria in real-time scenarios, thereby reducing
                administrative burdens and enhancing the efficiency of VBC delivery. I believe this
                shift toward clearer, more transparent policy language not only promises to improve
                operational efficiencies but also enhance patient care by streamlining the approval
                processes for treatments and services.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Streamlining operational processes: Automating the backbone of value-based care
            </h2>
            <p>
                Operational inefficiencies, particularly in manual processes such as PA, represent
                another significant hurdle in the VBC landscape. These processes, which are essential
                for ensuring the appropriateness of care, can be time-consuming and fraught with
                delays. Recognizing the need for improvement, both the CMS and Congress have
                emphasized the importance of streamlining these operations.
            </p>
            <p>
                AI-driven systems are being developed to tackle the complexities of PA by automating
                tasks that were previously manual. This includes breaking down payer policies into
                specific criteria, sifting through electronic health records (EHRs) to gather
                necessary information and filling out forms.
            </p>
            <p>
                Such automation not only speeds up the PA process but also reduces the likelihood of
                errors, thereby ensuring faster patient access to necessary treatments. Finding ways to
                reduce the administrative burden on both payers and providers can contribute
                significantly to the efficiency of VBC, allowing healthcare professionals to focus more
                on patient care rather than paperwork.
            </p>
            <p>
                This integration of AI into operational processes promises to remove friction points in
                the VBC value chain, thereby enhancing the overall effectiveness of care delivery.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Vertical integration: Identifying the right partners
            </h2>
            <p>
                As the value-based care (VBC) model continues to evolve, VBC companies may consider
                mergers and acquisitions or forming strategic partnerships with health technology firms,
                especially those specializing in AI. This trend toward vertical integration is driven
                by the need to fill gaps in the care continuum and enhance the delivery of healthcare
                services. However, a critical aspect of such integration is the selection of the right
                partners, particularly in terms of their technological capabilities and their alignment
                with the company&apos;s mission and values.
            </p>
            <p>
                For VBC companies, the choice of an AI technology partner involves evaluating the
                potential to streamline operations, improve patient outcomes and reduce costs. This
                includes assessing the AI firm&apos;s expertise in handling and analyzing large
                datasets, their ability to automate complex processes and the robustness of their
                solutions in improving decision-making and operational efficiency.
            </p>
            <p>
                Additionally, the distribution channels of these AI companies play a crucial role.
                Some AI firms might have established connections with either payers or providers, or
                in some cases, both. Especially in light of CMS&apos; final rule, VBC companies should
                make sure to evaluate whether their prospective partners have the capability to bridge
                gaps between different stakeholders in the healthcare ecosystem.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The road ahead: Charting the future of value-based care
            </h2>
            <p>
                The vision of VBC is becoming increasingly attainable. The coordination of care between
                payers and providers and the alignment of incentives are the keys to this shift, and I
                see the optimization of PA through simplified payer policies and automated operational
                processes as the first step in achieving this goal.
            </p>
            <p>
                As VBC companies navigate this landscape, they have the opportunity to leverage
                advanced AI to enhance operational efficiency and patient care. When considering
                adoption of AI tools to improve PA, VBC companies will benefit from evaluating solutions
                and prioritizing ones that can simplify complex payer policies, streamline operational
                processes and foster effective partnerships across the healthcare ecosystem.
            </p>
        </div>
    ),
    "decoding-the-latest-cms-rule-on-prior-authorization": (
        <div className={articleBodyClass}>
            <h2 className="text-xl font-semibold text-primary">
                Impact on payers, providers, and members
            </h2>
            <p>
                The new CMS rule, while presenting challenges, also brings opportunities for payers to
                enhance their operational efficiency. The requirement to implement FHIR APIs by 2027 means
                significant upgrades to existing IT infrastructure for payers. Such upgrades offer the
                potential to streamline data management and exchange processes, leading to improved
                services for members and more affordable care delivery. Additionally, these technological
                advancements are likely to bolster member retention and engagement by facilitating better
                data exchange between payers, members, and providers.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Key changes in the CMS rule
            </h2>
            <p>
                <em>
                    <strong>FHIR API implementation by 2027:</strong>
                </em>{" "}
                Health plans are required to develop FHIR-based Application Programming Interfaces
                (APIs) for streamlined data exchange and prior authorization processes.
            </p>
            <p>
                <em>
                    <strong>Transparent denial communication by 2026:</strong>
                </em>{" "}
                Health plans are required to provide clear explanations for prior authorization
                denials to facilitate resubmissions or appeals.
            </p>
            <p>
                <em>
                    <strong>Prior authorization metrics publication by 2026:</strong>
                </em>{" "}
                Health plans are required to publish metrics regarding prior authorization similar to
                those published by Medicare FFS, including statistics on requests, approvals, appeals,
                and accuracy.
            </p>
            <p>
                <em>
                    <strong>Shorter turnaround times by 2026:</strong>
                </em>{" "}
                Health plans are required to issue decisions for expedited (urgent) requests within a
                72-hour timeframe and for standard requests within a seven-day period. This requirement
                does not apply to qualifying health plans operating on federally-facilitated
                exchanges.
            </p>

            <h2 className="text-xl font-semibold text-primary">The road ahead</h2>
            <p>
                The path forward for health plans in response to the CMS rule encompasses both
                challenges and strategic opportunities. The necessity to upgrade to FHIR-based APIs by
                2027 requires a thoughtful approach to IT infrastructure enhancement, ensuring that
                systems are not only compliant but also optimized for future scalability and
                integration.
            </p>
            <p>
                In addition to technological upgrades, health plans can focus on enhancing data
                management capabilities. This involves not just the implementation of new software
                solutions but also a reevaluation of data governance and workflow processes. The aim is
                to create a more streamlined and efficient system that can handle the increased data
                flow and communication requirements set by the CMS rule.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                How basys.ai facilitates compliance
            </h2>
            <p>
                basys.ai, with its cutting-edge platform, is uniquely positioned to support health plans
                in this transition. By leveraging generative AI, basys.ai encodes health plan policies
                and EHRs into simplified processes, ensuring quick and compliant decision-making.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Reducing administrative burden and supporting faster turnaround times
            </h3>
            <p>
                basys.ai&apos;s generative AI encodes health plan policies and Electronic Health Records
                (EHR) into simplified checklists. basys.ai&apos;s real-time benefit check (RTBC) rules,
                which automate approval for cases aligning with health plan guidelines, and suggestion of
                pre-approved, personalized care pathways expedite the time to decision. This approach
                streamlines workflows, enabling health plans to meet the CMS&apos;s required turnaround
                times for prior authorization requests.
            </p>

            <h3 className="text-lg font-semibold text-primary">Enhancing interoperability</h3>
            <p>
                basys.ai&apos;s platform, compliant with FHIR HL7 and DaVinci protocols, facilitates
                seamless data exchange. This interoperability ensures that health plans can efficiently
                collaborate across the healthcare ecosystem.
            </p>

            <h3 className="text-lg font-semibold text-primary">Ensuring regulatory compliance</h3>
            <p>
                basys.ai&apos;s engine instantaneously encodes new regulations, including those outlined
                in the CMS rule, into PA and UM processes. This feature ensures that health plans can
                swiftly adapt to federal mandates, maintaining compliance without the need for extensive
                manual intervention.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                Delivering transparent and expedited decisions
            </h3>
            <p>
                basys.ai&apos;s capacity to automatically provide clear, evidence-based explanations for
                PA decisions to members and providers aligns with the CMS rule&apos;s requirement for
                transparency. basys.ai&apos;s automated decision-making process is not only timely but
                also explains the rationale behind each decision, ensuring compliance with the rule&apos;s
                requirement for clarity in denial communication.
            </p>

            <p>
                Partnering with basys.ai can help health plans navigate these new regulations, ensuring
                they are well-equipped to meet both present and future demands in the healthcare
                sector.
            </p>
        </div>
    ),
    "forbes-feature-disruption-and-change-healthcare-trends-and-predictions-for-2024": (
        <div className={articleBodyClass}>
            <p>
                Read the original article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2024/01/22/disruption-and-change-healthcare-trends-and-predictions-for-2024/?sh=707a87527e05"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — Disruption And Change: Healthcare Trends And Predictions For 2024
                </a>
            </p>
            <p>
                As we look ahead, it is evident that the healthcare industry will continue to evolve,
                presenting both challenges and opportunities for key stakeholders.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                1. Policy changes and impact on the industry
            </h2>
            <p>
                In 2023, healthcare policy changes exerted a profound influence on the industry, with
                far-reaching implications. Regulatory pressures from The Centers for Medicare &amp;
                Medicaid Services (CMS), Congress, state legislatures, and the surgeon general led to
                significant shifts in prior authorization requirements.
            </p>
            <p>
                Medicare Advantage and Medicaid experienced dynamic changes, presenting both challenges
                and opportunities for growth. Specifically, the tightening of the Medicare Advantage
                business model created ripple effects across the industry. Also, the reintroduction of
                the Medicare for All Act in 2023, with support from numerous lawmakers, kept
                single-payer healthcare advocacy in the national conversation despite its likely limited
                prospects in the current Congress. Furthermore, sweeping policy changes in the
                pharmaceutical sector are poised to reshape the industry, potentially affecting drug
                accessibility and affordability.
            </p>
            <p>
                Leaders in the healthcare industry will likely need to reevaluate their prior
                authorization processes, adapt to dynamic changes in Medicare Advantage and Medicaid and
                consider potential impacts on drug accessibility and affordability; my advice for reacting
                to these policy changes is to stay informed, engage in proactive advocacy and be
                prepared to adjust business strategies to align with evolving regulations and market
                dynamics.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                2. Consolidating healthcare ownership
            </h2>
            <p>
                Ownership dynamics within the healthcare industry witnessed significant changes in 2023,
                and I expect these trends to intensify. A notable example includes SCAN Group and
                CareOregon&apos;s merger into HealthRight Group, creating a $6.8 billion nonprofit
                health plan with 800,000 members. Blue Cross and Blue Shield of Vermont&apos;s
                affiliation with Blue Cross Blue Shield of Michigan is another instance of this trend.
                Throughout the year, major players engaged in consolidation, both horizontally and
                vertically.
            </p>
            <p>
                In 2024, healthcare leaders may need to adapt to further consolidation trends. I
                recommend that healthcare leaders prioritize strategies that ensure patient-centric care
                remains a focal point amid these ownership changes. Look to collaborate strategically and
                maintain a keen watch on government-led scrutiny and purchaser disruption to navigate the
                changing landscape effectively.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                3. Partnerships for financial survival in healthcare
            </h2>
            <p>
                Stress in the financial landscape of health systems in 2023 prompted many healthcare
                organizations to proactively adapt to challenges. For instance, in April 2023,
                Presbyterian Healthcare and UnityPoint Health attempted to form an $11 billion system to
                expand reach and improve cost challenges. This partnership exemplifies health systems
                seeking financial survival pathways through collaborations to navigate the evolving
                healthcare landscape.
            </p>
            <p>
                The shift away from a hospital-centric service delivery model toward ecosystem-controlled
                care management is a notable trend. To navigate financial difficulties, many health systems
                are exploring partnerships and asset acquisitions as hospitals grapple with workforce
                crises, high turnover rates and increased vacancy rates. This shift toward
                ecosystem-level care management is likely to continue into 2024, presenting both
                opportunities and challenges for patient access and care delivery as health systems seek
                financial survival pathways.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                4. Balancing access and affordability with drug costs
            </h2>
            <p>
                Pharmaceutical developments in 2023 are also reshaping the healthcare landscape,
                particularly concerning high-cost drugs. Balancing access to these drugs while
                considering their cost implications is a complex challenge. Emerging drugs, such as cell
                and gene therapies, come with intricate delivery logistics and high price tags.
                Outcomes-based agreements, specialty pharmacy carve-outs and innovative approaches can
                help address the cost challenges posed by these drugs.
            </p>
            <p>
                One notable example of drug pricing tension is the GLP-1 class of drugs. These drugs are
                used to treat diabetes and obesity and have recently become very popular for weight
                loss. Despite their growing popularity, debates have arisen over pricing, given that they
                can cost up to $1,000 per patient per month. Some health plans are hesitant to cover these
                drugs, both given the price and considerations over whether they are lifestyle drugs or
                necessary interventions for cardiometabolic health.
            </p>
            <p>
                The pharmaceutical-based healthcare system is at a crossroads, and navigating the
                balance between access and affordability is essential for those in the industry. It&apos;s
                important to note how the scale of complexity and cost associated with these drugs
                requires precise care delivery and access management. The widespread demand for these
                high-cost drugs is likely to invite investment in delivery and administrative capabilities
                from new entrants.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                5. Tech innovates operational processes
            </h2>
            <p>
                Technology, especially artificial intelligence (AI), drives significant changes in
                healthcare&apos;s operational processes. AI is transforming patient triage, treatment
                recommendations and administrative tasks, enhancing operational efficiency.
            </p>
            <p>
                Given the regulatory shifts that occurred in 2023, I believe there is an opportunity for
                this type of technology to help healthcare organizations adapt to policy demands. For
                example, healthcare technology can help health plans adapt to the electronic prior
                authorization requirements of the CMS.
            </p>

            <h2 className="text-xl font-semibold text-primary">Conclusion</h2>
            <p>
                In conclusion, 2023 brought exciting changes in healthcare, and 2024 promises to be
                equally transformative. The five key insights from this article highlight the major
                trends shaping healthcare, from policy changes to ownership shifts, financial challenges,
                pharmaceutical developments and technological advancements. As we look ahead to 2024, it is
                evident that the healthcare industry will continue to evolve, presenting both challenges
                and opportunities for key stakeholders.
            </p>
        </div>
    ),
    "forbes-feature-generative-ai-the-next-frontier-of-healthcare": (
        <div className={articleBodyClass}>
            <p>
                Read the original article:{" "}
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/12/04/generative-ai-the-next-frontier-of-healthcare/?sh=4b3fe1e6d684"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — Generative AI: The Next Frontier Of Healthcare
                </a>
            </p>
            <p>
                While this might sound like science fiction, recent advancements in generative AI,
                especially the advent of ChatGPT, have brought us closer to making this a reality. In
                recent years, the healthcare industry has gradually digitized. It has seen a rising
                demand for technology to alleviate administrative burdens, as labor supply cannot keep up
                with the demand for healthcare services. From my perspective, healthcare is reaching a
                critical point that will make it the next major frontier for generative AI adoption.
                While responsible guardrails are necessary to mitigate AI risks, there is a pathway for
                sustainable implementation of generative AI in healthcare.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The generative AI revolution
            </h2>
            <p>
                Generative AI, propelled by deep learning and the advent of large language models, has
                undergone an astounding transformation in recent years. What was once a theoretical concept
                has rapidly evolved into a practical and powerful tool.
            </p>
            <p>
                The journey began with ChatGPT&apos;s debut in late 2022. Since then, new iterations of
                deep learning and machine learning technology have been hitting the scene at an
                astonishing pace. To put this into perspective, generative AI&apos;s capabilities could
                surpass those of human experts in most fields within a decade, according to OpenAI CEO
                Sam Altman.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                A changing landscape of healthcare
            </h2>
            <p>
                Traditionally, the healthcare industry has been marked by labor-intensive processes,
                administrative burdens and inefficiencies. Fortunately, technological advancements have
                begun to reshape the healthcare industry. For example, health insurers are better equipped
                to maintain responsible guardrails on cost and quality of care through electronic coverage
                approvals. Telemedicine has helped expand access to services. Despite these positive
                developments, the healthcare sector still faces numerous challenges, such as rising costs,
                labor shortages and physician burnout.
            </p>
            <p>
                The healthcare industry&apos;s readiness for AI integration has never been more evident.
                Several factors contribute to this receptiveness. First, there has been a significant
                increase in the availability of healthcare data. Patient records, clinical notes and
                medical imaging are now digitized, making them accessible for natural language processing
                and computer vision analysis. Second, regulatory changes, like the adoption of the Fast
                Healthcare Interoperability Resources standard, have facilitated data exchange and
                interoperability. Third, with 94% of healthcare organizations lacking an established
                generative AI strategy, as highlighted by Bain &amp; Company, a strong incentive exists to
                adapt to compete with the advantages of generative AI-enabled competitors.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Identifying and mitigating risks
            </h2>
            <p>
                The integration of AI in healthcare presents an opportunity for innovation. However, this
                evolution is not without its risks. Algorithmic bias, a significant concern, can perpetuate
                inequalities in healthcare if not addressed. Additionally, the security of patient data is
                crucial, as breaches could compromise sensitive information. Another challenge lies in the
                lack of explainability in AI systems, which raises issues about transparency and trust.
            </p>
            <p>
                To account for these risks, implementing responsible guardrails and guidelines is essential
                to govern the development and use of AI in healthcare. These guardrails may involve
                balancing automation with a human-in-the-loop approach and implementing self-learning
                mechanisms to ensure algorithms learn from their errors.
            </p>
            <p>
                Upholding rigorous data standards to ensure accuracy and fairness is pivotal to diminishing
                biases and enhancing the security of patient data. Establishing training parameters that
                account for social determinants of health is important to maintain fairness and eliminate
                algorithmic bias. Compliance with data governance standards such as HIPAA is necessary to
                maintain data security as well.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Use cases for generative AI in healthcare
            </h2>
            <p>
                Generative AI has demonstrated its potential across various healthcare applications.
            </p>
            <ul className="list-disc space-y-4 pl-6">
                <li>
                    <strong>Personalized treatment:</strong> AI models can help predict patient health
                    risks, which can enable proactive interventions and personalized care plans.
                    Additionally, AI-driven algorithms can aid in optimizing resource allocation, reducing
                    operational inefficiencies and forecasting healthcare costs, which helps empower
                    organizations to make informed financial decisions for better budget planning and
                    resource utilization.
                </li>
                <li>
                    <strong>Patient engagement:</strong> Generative AI can engage with patients in natural
                    language, assisting with appointment scheduling, medication reminders and answering
                    medical queries. With some companies training their LLMs to have bedside manners and
                    essentially function as electronic nurses, this use case could not only enhance patient
                    satisfaction but also lighten the administrative load on healthcare providers.
                </li>
                <li>
                    <strong>Operational processes:</strong> Operational processes such as prior authorization
                    and utilization management can use generative AI to automate insurance approvals for
                    medical procedures and prescriptions by analyzing health insurance policies, patient
                    medical records and clinical guidelines.{" "}
                    <em>(Full disclosure: This is a service my company provides.)</em> This can help ensure
                    patients receive timely care while minimizing administrative burdens and costs.
                </li>
            </ul>
            <p>
                Despite these use cases, algorithmic bias, data security and unexplainable AI are risks that
                must be addressed to sustainably implement AI in healthcare.
            </p>

            <h2 className="text-xl font-semibold text-primary">Toward the future</h2>
            <p>
                With digitization of medical records, rising costs and administrative burdens, AI could
                help address some of the most pressing problems in healthcare. While challenges like data
                quality and bias require attention, responsible implementation of generative AI can overcome
                these roadblocks. From my perspective, personalized treatment, patient engagement and
                operational optimization are just the beginning, and key stakeholders across the healthcare
                industry stand poised to benefit from exploring the potential of generative AI.
            </p>
        </div>
    ),
    "basys-ai-featured-by-forbes-leader-streamlining-prior-authorization": (
        <div className={articleBodyClass}>
            <p>
                <a
                    className={inlineLinkClass}
                    href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/10/30/5-considerations-for-health-plan-leaders-using-ai-enabled-prior-authorization-and-utilization-management/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Forbes — 5 considerations for health plan leaders using AI-enabled prior
                    authorization and utilization management
                </a>
            </p>
            <p>
                The above Forbes article highlights basys&apos; leadership in advancing the mission of
                making high-quality healthcare more affordable and accessible. It delves into
                basys&apos; technical differentiation as a comprehensive, end-to-end solution to the
                challenges attendant to prior authorization and utilization management processes. By
                leveraging cutting-edge generative AI to simplify volumes of medical records and health plan
                policies into easily comprehensible lists of criteria for determining medical necessity,
                basys reduces time and improves accuracy in providing members with the right care at the
                right time.
            </p>
            <p>
                The article also emphasizes how basys both recognizes the potential of generative AI to
                revolutionize healthcare economics and accounts for attendant risks. By implementing
                responsible guardrails to mitigate automation risks in each step of the prior authorization
                process, basys provides health plans and members with a buffer of security, ensuring that
                streamlined decisions will be delivered safely, securely, and efficiently.
            </p>
        </div>
    ),
    "silos-deconstructed-basys-ai-breaks-down-healthcare-divisions": (
        <div className={articleBodyClass}>
            <p>
                In the realm of healthcare, silos pose a significant challenge, hindering the delivery
                of optimal care and driving up costs. Silos refer to the fragmentation and lack of
                coordination among various stakeholders in the healthcare system, including providers,
                payers, and pharmaceutical companies. However, the integration of artificial intelligence
                (AI) presents a transformative opportunity to break down these silos and establish
                value-based healthcare ecosystems. One pioneering company at the forefront of this mission
                is basys.ai, which is revolutionizing the healthcare landscape by connecting stakeholders
                and putting patient outcomes at the forefront.
            </p>

            <h2 className="text-xl font-semibold text-primary">Silo impacts</h2>
            <p>
                Silos in healthcare have long been recognized as a barrier to effective care delivery.
                Fragmentation and duplication of efforts lead to inefficiencies and compromised patient
                outcomes. For instance, redundant tests, uncoordinated care plans, and miscommunication
                among providers can result in increased costs and lower-quality care. Statistics show that
                medical errors due to poor care coordination contribute to a significant number of adverse
                events and hospital readmissions. Furthermore, silos hinder the sharing of valuable patient
                data, impeding accurate diagnoses and personalized treatment plans.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Value-based health care approach
            </h2>
            <p>
                Value-based healthcare is an alternative approach that seeks to align incentives and
                outcomes across the healthcare system. Unlike the traditional fee-for-service model,
                value-based care emphasizes the measurement and reward of the value delivered to
                patients, rather than the volume of services provided. This approach promotes coordinated
                care, emphasizes prevention and wellness, and focuses on patient-centric outcomes. By
                incentivizing high-quality care and cost-effective practices, value-based health care aims
                to improve patient outcomes while reducing unnecessary expenses.
            </p>

            <h2 className="text-xl font-semibold text-primary">AI benefits</h2>
            <p>
                AI and data analytics play a pivotal role in supporting the shift towards value-based
                health care. By harnessing the power of AI, healthcare providers can enhance care
                coordination, measure and improve quality metrics, make evidence-based decisions, and
                drive innovation. For example, AI algorithms can analyze vast amounts of patient data,
                identify patterns, and provide insights to guide personalized treatment plans.
                Additionally, AI-powered systems enable real-time monitoring and predictive analytics,
                alerting providers to potential risks and enabling early intervention. These capabilities
                empower healthcare professionals to deliver timely, targeted, and efficient care.
            </p>

            <h2 className="text-xl font-semibold text-primary">Health care ecosystems</h2>
            <p>
                Healthcare ecosystems represent interconnected networks of value chain participants
                collaborating to deliver value-based care to specific patient groups. By establishing a
                common commercial model and a virtual data backbone, these ecosystems foster seamless
                coordination and information exchange among stakeholders. Successful healthcare ecosystems
                have demonstrated improved patient outcomes, reduced costs, and increased innovation. They
                encourage cross-sector collaboration and enable the delivery of patient-centered care.
            </p>

            <h2 className="text-xl font-semibold text-primary">basys.ai breaks silos</h2>
            <p>
                At the forefront of the drive to break down silos in healthcare is basys.ai, a healthtech
                startup founded by a team of experts from Harvard and MIT in medical and data science.
                basys.ai&apos;s AI platform serves as a neutral hub that streamlines collaboration between
                payers, providers, and other healthcare stakeholders. The platform automates traditionally
                inefficient processes like prior authorization and disease progression identification from
                medical imaging. basys.ai has established partnerships with renowned institutions such as Mayo
                Clinic and Joslin Diabetes Center, enabling effective communication across payers,
                providers, and pharmaceutical companies. The interdisciplinary team at basys.ai brings
                together expertise in health data science, tech entrepreneurship, Medicare/Medicaid claims
                processing, and policy, with several team members having contributed to the development of
                the Affordable Care Act.
            </p>

            <p>
                Breaking down silos in healthcare is a crucial step towards achieving improved patient
                outcomes, increased access to care, and enhanced cost-effectiveness. AI and data analytics
                serve as powerful tools to drive the transition to value-based healthcare ecosystems.
                basys.ai exemplifies the transformative potential of AI in connecting stakeholders,
                streamlining processes, and prioritizing patient outcomes. With its innovative approach and
                partnerships with key healthcare players, basys.ai is paving the way for a future where
                collaboration, innovation, and patient-centric care are the norm. As we look ahead, the role
                of AI in breaking silos and creating value-based healthcare ecosystems cannot be
                underestimated, and basys.ai stands at the forefront of this transformative journey.
            </p>
        </div>
    ),
    "healing-healthcare-basys-ai-target-root-cause-healthcare-troubles": (
        <div className={articleBodyClass}>
            <p>
                AI has become an indispensable tool in the healthcare industry, utilizing data and
                machine learning algorithms to enhance various healthcare tasks. By harnessing the power
                of AI, doctors and pharma can improve diagnosis, treatment, and research, leading to
                better patient outcomes. However, adopting AI also creates risks that require careful
                consideration. basys.ai leverages AI technology to solve healthcare&apos;s core challenge
                of disconnection between healthcare organizations while mitigating risks through responsible
                model guardrails.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The benefits of AI in healthcare
            </h2>
            <p>
                AI offers significant advantages in healthcare, enhancing the quality, accessibility, and
                affordability of various healthcare processes. Algorithms can improve diagnosis by detecting
                diseases, predicting risks, and recommending treatments. They enhance treatment by monitoring
                and managing chronic conditions, delivering personalized medicine, and improving adherence
                and compliance. Additionally, AI and digital technology expedite research by accelerating drug
                discovery, development, testing, and identifying new targets and biomarkers. They streamline
                management by automating and optimizing processes, reducing costs, increasing efficiency, and
                ensuring regulatory compliance. Moreover, these technologies enhance engagement by utilizing
                apps, voice assistants, and chatbots to communicate with patients, provide information,
                support decision-making, and collect valuable feedback. Notably, Accenture projects that AI
                applications in healthcare could save up to $150 billion annually in the US health system by
                2026.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The challenges of AI in healthcare
            </h2>
            <p>
                While AI offers immense potential, it also introduces challenges and risks that must be
                effectively addressed and managed. Ethical concerns arise regarding fair use and algorithmic
                safety. Regulatory issues stem from the uncertainty surrounding the standards governing its use
                in healthcare. Data privacy risks emerge from the potential exposure or misuse of personal and
                sensitive information collected and processed by these technologies. Security challenges arise
                from vulnerabilities to attacks on the systems and devices employed in healthcare. Quality
                issues may occur due to errors or failures in these algorithms and devices. Talent shortages and
                competition for skilled professionals pose additional challenges. Reputation issues and trust
                deficits can undermine confidence and credibility in these technologies. All these issues
                compound and make paramount the growth of teams with the ability to design safe, secure, and
                compliant health AI models.
            </p>

            <h2 className="text-xl font-semibold text-primary">Examples of AI initiatives</h2>
            <p>
                Key healthcare stakeholders have implemented numerous AI initiatives to enhance patient
                outcomes and experiences. These initiatives include:
            </p>
            <ol className="list-decimal space-y-4 pl-6">
                <li>
                    <strong>Patient-centric apps:</strong> Applications that enable patients to access their
                    health records, test results, prescriptions, and appointments, empowering them to take an
                    active role in their healthcare journey.
                </li>
                <li>
                    <strong>Conversational AI:</strong> Voice assistants or chatbots employ conversational AI
                    to engage with patients, provide information, support decision-making, and collect
                    valuable feedback to improve services.
                </li>
                <li>
                    <strong>Remote monitoring and alerts:</strong> Sensors and apps that alert for medical
                    interventions by tracking vital signs, symptoms, and behaviors of patients with chronic
                    diseases.
                </li>
                <li>
                    <strong>Personalized medication management:</strong> Devices and platforms that tailor
                    medication dosage and types to individual patient characteristics and responses, optimizing
                    treatment outcomes.
                </li>
                <li>
                    <strong>Data-driven research:</strong> Data analytics and AI-driven approaches that
                    accelerate clinical trials, aid in participant selection, and identify new insights into
                    disease causes, mechanisms, and potential therapeutic options.
                </li>
                <li>
                    <strong>Robotic process automation (RPA):</strong> Automating repetitive or routine tasks
                    such as data entry, verification, and claims processing through the use of RPA, freeing up
                    human resources for more complex and critical responsibilities.
                </li>
            </ol>

            <h2 className="text-xl font-semibold text-primary">
                basys.ai uses AI to solve healthcare&apos;s biggest challenges
            </h2>
            <p>
                basys.ai has emerged as a leading healthcare platform that leverages AI to connect industry
                stakeholders. Equipped with AI algorithms developed by data scientists from Harvard and MIT,
                basys.ai revolutionizes the processing of treatment request claims for insurance companies. Its
                advanced machine learning algorithms, including natural language processing (NLP) and large
                language models (LLMs), enable efficient and accurate handling of requests across varying
                complexity levels. From rule-based automatic approvals to advanced techniques for interpreting
                and annotating ambiguous requests, basys.ai streamlines processing before passing complex
                queries to administrators for review.
            </p>
            <p>
                Furthermore, basys.ai extends its capabilities beyond request processing by incorporating
                computer vision technology. This technology aids doctors in identifying disease progression
                from medical images, facilitating precise and informed decision-making. Additionally,
                basys.ai&apos;s chatbot, trained on extensive medical data, guides users seamlessly through
                administrative workflows, enhancing overall user experience and support.
            </p>
            <p>
                The effectiveness and impact of basys.ai&apos;s computer vision algorithm have earned the
                company recognition, leading to its invitation to present at the esteemed American Diabetes
                Association&apos;s 83rd Scientific Sessions. This recognition further validates basys.ai&apos;s
                commitment to leveraging advanced AI technologies to drive innovation in healthcare and improve
                patient outcomes. As members of basys&apos; team contributed to the creation of the Affordable
                Care Act, the company holds a deep understanding of healthcare policy and regulations.
                basys&apos; data scientists reflect this expertise in their responsible model training
                guardrails, aligning with national health data policy and protecting data security.
            </p>

            <p>
                AI presents immense opportunities for healthcare professionals to improve patient outcomes and
                experiences while boosting efficiency and profitability. By leveraging these technologies,
                healthcare stakeholders can enhance diagnosis, treatment, and research. It is also important to
                address the privacy, security, and quality issues of healthcare AI. Stakeholders must prioritize
                the strategic adoption of responsible AI to gain a competitive edge in the ever-evolving
                healthcare landscape. basys.ai is a prime example of an AI healthtech leader, addressing these
                challenges and transforming the industry models.
            </p>
        </div>
    ),
    "authorized-basys-ai-tackling-bottlenecks-us-prior-authorization": (
        <div className={articleBodyClass}>
            <p>
                Prior authorization is a critical process that requires physicians to obtain
                pre-approval from health insurers before providing services or medications to patients.
                However, it can act as a barrier to timely and quality care, creating administrative
                burdens for physicians and healthcare staff. With the introduction of new regulations
                that demand stricter adherence to prior authorization requirements, basys.ai provides a
                solution for payers to expedite this process and enhance overall healthcare delivery.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The challenges of prior authorization
            </h2>
            <p>
                Prior authorization often leads to negative clinical outcomes, including delays, errors,
                complications, wasted resources, and patient dissatisfaction. According to the annual prior
                authorization physician survey conducted by the American Medical Association (AMA),
                physicians complete an average of 41 prior authorizations per week, consuming nearly two
                business days of physician and staff time. Recognizing these challenges, the AMA has called
                for greater regulatory oversight of health insurers&apos; use of artificial intelligence
                (AI) in prior authorization to ensure fairness, transparency, and accuracy in the process.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The role of artificial intelligence in improving prior authorization
            </h2>
            <p>
                Artificial intelligence has the potential to revolutionize prior authorization by enabling
                better care coordination, quality measurement, decision-making, and fostering innovation.
                Care coordination ensures that patients receive the right care at the right time from the
                most suitable providers. Quality measurement involves assessing and improving the quality
                of care delivered to patients. Decision-making entails choosing the best course of action
                for patients based on evidence and best practices. Innovation involves developing and
                implementing new technologies and solutions that enhance healthcare delivery and outcomes.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                basys.ai: Streamlining prior authorization with AI
            </h2>
            <p>
                basys.ai, an innovative healthtech startup founded by a team of medical and data science
                experts from Harvard and MIT, addresses the challenges of prior authorization by streamlining
                the process with AI technology. The platform leverages patented AI algorithms, including
                natural language processing (NLP) and large language models (LLMs), to handle prior
                authorization requests of varying complexity. From automating rule-based approvals to
                employing sophisticated techniques for interpreting and annotating ambiguous requests, basys
                ensures efficient and accurate processing before forwarding them for review by insurance
                administrators. basys excels in seamlessly connecting insurance companies with healthcare
                providers, optimizing the overall prior authorization workflow. Through this integration,
                basys has successfully reduced costs and enhanced operational efficiency for payers.
            </p>
            <p>
                As the healthcare industry strives to overcome the challenges posed by prior authorization,
                the integration of AI technology, such as that offered by basys.ai, has emerged as a
                transformative solution. By automating and streamlining the prior authorization process,
                basys.ai empowers payers and healthcare providers to expedite approvals, reduce costs, and
                improve patient outcomes. With its advanced AI algorithms and seamless integration
                capabilities, basys.ai is making significant strides in enhancing the efficiency and
                effectiveness of prior authorization, ultimately driving positive changes in the healthcare
                landscape.
            </p>
        </div>
    ),
    "tedx-talk-future-of-healthcare-by-ceo-amber-nigam": (
        <div className={articleBodyClass}>
            <p>
                Healthcare in the U.S. is in dire need of reform. The current subjective approach to
                healthcare administration creates misaligned incentives between key stakeholders such as
                payers, providers, and pharmaceutical companies. The resulting friction draws time and
                resources away from patient care. Days are spent processing requests for treatment rather than
                administering treatment. Lives are lost and patients suffer. The primary cause of this issue is
                the lack of transparent communication and an objective method to determine the care patients
                need.
            </p>
            <p>
                A major bottleneck in healthcare delivery is prior authorization, a time-consuming process that
                leaves patients uninformed and delays their access to essential care. Doctors&apos; valuable time
                is spent filing requests instead of directly caring for patients, while insurance companies face
                staffing and process limitations that lead to lengthy approval times. These inefficiencies increase
                temporal and financial costs, adversely affecting patients.
            </p>
            <p>
                Amber Nigam, basys.ai&apos;s CEO, presents a transformative solution in a TEDx talk on the role of
                artificial intelligence (AI) in healthcare. By leveraging AI, basys significantly accelerates
                the prior authorization process, reducing insurance costs, improving patient outcomes, and allowing
                doctors to prioritize patient care.
            </p>
            <p>
                Since stakeholder representation is crucial to build transparency, basys&apos; platform supports
                the needs of both payers and providers. The platform assists payers by incorporating advanced
                techniques like Natural Language Processing (NLP) and Large Language Models (LLMs) into its
                algorithm. These models analyze payer policies, resulting in a more accurate and expedited process.
                The platform also empowers healthcare providers by utilizing AI to identify disease progressions
                within patient data. This data analysis enables providers to make more accurate treatment
                requests, improving patient outcomes and reducing delays and denials.
            </p>
            <p>
                The strategic implementation of AI has the potential to make U.S. healthcare transparent and
                patient-centric. Establishing clear algorithmic guidelines is crucial to avoid undermining
                progress. basys defines the guardrails of its algorithm based on the guidelines of leading medical
                associations such as the American Diabetes Association (ADA), American College of Cardiology (ACC),
                and American Cancer Society (ACS). Our dedication to the responsible practice of medicine has
                earned us an invitation to present our work at the 2023 ADA National Symposium. Involving the
                right stakeholders during development and implementation is also essential. basys collaborates
                with renowned institutions like Mayo Clinic and one of the largest pharmaceutical companies in the
                world to provide a neutral platform that takes into account the perspectives of all stakeholders.
                This alignment ultimately improves patient outcomes and paves the way for more efficient healthcare
                delivery. We encourage you to watch Amber&apos;s TEDx talk to learn more about how basys is putting
                patients first.
            </p>
            <p className="text-sm text-on-surface-variant">
                #basysAI #TEDTalk #HealthcareRevolution #AIinHealthcare #PriorAuthorization #Payers #Providers
                #PatientsFirst #FutureOfHealthcare #AligningIncentives
            </p>
        </div>
    ),
    "automated-approvals-basys-ai-cuts-costs-for-health-insurance": (
        <div className={articleBodyClass}>
            <p>
                Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative
                technologies that enable machines to perform tasks requiring human intelligence. In recent years,
                the health insurance industry has increasingly embraced AI and ML to enhance various aspects of
                the insurance process. Leading the charge in the application of AI to health insurance is
                basys.ai, an innovative company at the forefront of this technological revolution.
            </p>

            <h2 className="text-xl font-semibold text-primary">Enhancing customer experience</h2>
            <p>
                AI and ML have the potential to greatly enhance the healthcare customer experience. Insurance
                companies can provide chatbots that interact with customers through natural language processing
                and address common queries. Moreover, insurance can accelerate claim settlements by automating the
                claim processing and verification process. Personalized health insurance policies are another
                significant benefit, made possible by analyzing customer data, including demographics, medical
                history, lifestyle habits, preferences, and risk profiles. By tailoring policies to individual
                needs and budgets, insurers can provide comprehensive coverage that meets customers&apos;
                requirements. AI helps them cut operational costs, optimize pricing, and offer discounts and
                incentives.
            </p>

            <h2 className="text-xl font-semibold text-primary">Streamlining operations</h2>
            <p>
                AI and ML can streamline operations within the health insurance industry, resulting in improved
                efficiency and productivity. By automating tasks such as data entry, document verification, policy
                issuance, claim adjudication, and fraud detection, insurers can save valuable time and resources
                while reducing errors. Implementing AI and ML enables insurance companies to enhance data quality
                and accuracy, leading to more informed decision-making processes, better risk assessment, and
                improved customer segmentation. By optimizing workflows and processes, insurers can increase
                operational efficiency, productivity, scalability, and agility, ultimately providing a seamless
                experience for both customers and providers.
            </p>

            <h2 className="text-xl font-semibold text-primary">Reducing costs and fraud</h2>
            <p>
                AI and ML have significant potential to reduce costs and prevent fraud within the health
                insurance industry. Through advanced algorithms, these technologies can detect anomalies, patterns,
                and outliers that may indicate fraudulent or suspicious activities. By identifying duplicate claims,
                inflated bills, false diagnoses or treatments, and identity theft, insurers can minimize losses due
                to fraudulent practices. Verifying claims and documents using AI and ML can ensure the accuracy,
                validity, and completeness of submitted claims, reducing the potential for fraudulent or
                inaccurate information. Additionally, these technologies prevent overbilling and abuse, protecting
                insurers and customers from unnecessary or excessive charges for services rendered.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Enabling personalized and preventive care
            </h2>
            <p>
                AI and ML hold great promise in enabling personalized and preventive healthcare. By analyzing data
                sources such as medical records, lab tests, and wearable devices, insurers can gain comprehensive
                insights into customers&apos; health status and needs. By leveraging these insights, insurers can
                identify risks and opportunities, allowing them to predict potential health outcomes and events. AI
                and ML technologies can also provide valuable recommendations and insights, guiding customers on
                lifestyle changes, preventive screenings, medications, and interventions to improve their health
                and prevent diseases before they arise.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                basys.ai: Transforming the insurance process
            </h2>
            <p>
                Leading the way in utilizing AI and ML to enhance the health insurance process is basys.ai. This
                innovative platform empowers health insurance companies to streamline their prior authorization
                request approval process, improving patient outcomes. basys.ai harnesses the power of AI algorithms
                developed by data science experts from prestigious institutions like Harvard and MIT. These
                algorithms, which include natural language processing (NLP) and large language models (LLMs),
                equip basys.ai to handle requests of varying complexity. From automating rule-based approvals to
                interpreting and annotating ambiguous requests using sophisticated techniques, basys.ai ensures
                efficient and accurate processing before submission for review by insurance administrators.
            </p>
            <p>
                The strength of basys.ai lies in its ability to seamlessly connect insurance companies with
                healthcare providers, facilitating streamlined communication and collaboration. By integrating these
                essential stakeholders, basys.ai has successfully demonstrated its capacity to reduce costs and
                enhance operational efficiency for payers. These results are due to the basys team&apos;s extensive
                experience in the field and their profound understanding of payer needs.
            </p>
            <p>
                The utilization of AI and ML in the health insurance process holds tremendous potential for
                revolutionizing the industry, providing enhanced customer experiences, streamlined operations, cost
                reduction, fraud prevention, and personalized and preventive care. However, it is crucial to address
                challenges and limitations, including data privacy and security concerns, ethical and legal
                considerations, human oversight and intervention, and building customer trust and acceptance.
                Companies like basys.ai exemplify the responsible and balanced approach required to unlock the full
                benefits of AI and ML in health insurance. By efficiently applying AI algorithms to the claims process
                while ensuring data safety and security, basys.ai leads the charge in transforming the health
                insurance landscape, ultimately improving access, affordability, and outcomes for all stakeholders
                involved.
            </p>
        </div>
    ),
    "affordable-accessible-care-how-basys-ai-eliminates-barriers": (
        <div className={articleBodyClass}>
            <p>
                Access to health care and health insurance is a pressing concern for millions of Americans, with
                numerous barriers preventing individuals from obtaining and utilizing essential services. The
                COVID-19 pandemic has only exacerbated these challenges. To overcome these hurdles and enhance
                access, it is crucial to address the complexities of billing, foster innovation, and tackle other
                key factors impacting the healthcare and insurance landscape. basys.ai, an innovative healthtech
                solution, is committed to improving patient access to health insurance and facilitating smoother
                pathways to care.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The challenge of billing for Medicaid patients
            </h2>
            <p>
                Medicaid, a program providing health coverage for low-income individuals, serves approximately 77
                million Americans, constituting nearly a quarter of the population. However, many Medicaid patients
                encounter difficulties in finding doctors who accept their insurance. Billing complexities
                significantly contribute to this issue. Providers often face more obstacles and lower payments when
                billing for Medicaid patients compared to other insurers. An effective solution lies in leveraging AI
                to streamline billing and claims processing for providers. AI can automate tasks, verify information,
                resolve errors, and optimize payments, reducing the burden and costs associated with billing for
                Medicaid patients.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The opportunity for innovation in health insurance
            </h2>
            <p>
                Innovation within the health insurance sector holds the potential to introduce new products,
                services, and business models that cater to evolving customer needs and expectations. By fostering
                innovation, insurers can enhance efficiency, profitability, and satisfaction for both providers and
                customers. However, integrating innovation into their organizations presents challenges such as
                resource allocation, capability development, cultural fostering, impact measurement, and scaling up.
                Outsourcing innovation to digital health companies or implementing pilot programs and platforms to
                test new solutions are viable approaches for insurers to diversify their product portfolios.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Other factors affecting access to health care and health insurance
            </h2>
            <p>
                Several factors impact access to health care and health insurance, including workforce availability,
                coverage options, competition, delivery models, and social determinants of health. Addressing these
                factors is crucial for improving the availability and affordability of health care and insurance.
                Implementing measures such as expanding residency slots, offering loan forgiveness programs,
                facilitating physician immigration, providing tax credits, introducing a public option, ensuring
                market stability, enforcing antitrust laws, promoting price transparency, adopting value-based
                purchasing, encouraging alternative payment models, integrating telehealth, simplifying
                administrative processes, implementing community interventions, conducting social needs screenings,
                and fostering partnerships with social service organizations can significantly enhance access.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                basys.ai: Expanding insurance reach and improving patient outcomes
            </h2>
            <p>
                The innovative platform developed by basys.ai empowers health insurance companies to streamline their
                prior authorization request approval process, ultimately leading to improved patient outcomes.
                Leveraging AI algorithms developed by esteemed data science experts from Harvard and MIT, basys.ai
                offers advanced machine learning capabilities, including natural language processing (NLP) and large
                language models (LLMs), enabling the efficient handling of complex requests. By automating
                rule-based approvals and employing sophisticated techniques to interpret ambiguous requests, basys.ai
                ensures accurate processing before forwarding them for insurance administrators&apos; review.
            </p>
            <p>
                One of basys.ai&apos;s strengths lies in its seamless connection between insurance companies and
                healthcare providers, facilitating streamlined collaboration. By integrating these crucial
                stakeholders, basys.ai has successfully reduced costs and enhanced operational efficiency for payers.
                Reports on the pilot programs in which basys delivered these results will be released later this year.
            </p>
            <p>
                Improving access to health care and health insurance necessitates addressing challenges in billing,
                fostering innovation, and considering various factors influencing the landscape. basys.ai offers
                innovative solutions to assist health insurance companies in enhancing patient access to coverage and
                care. Through its advanced AI platform, basys.ai is at the forefront of revolutionizing the industry,
                improving efficiency, and prioritizing patient outcomes. By embracing innovation and leveraging AI
                technologies, we can pave the way for a future where equitable access to health care and insurance is
                a reality for all Americans.
            </p>
        </div>
    ),
    "staking-a-claim-basys-ai-leading-force-healthtech-streamlining-claims": (
        <div className={articleBodyClass}>
            <p>
                Insurance claims processing is a crucial aspect of the insurance industry, but it often faces
                challenges that can result in inefficiencies, errors, delays, and customer dissatisfaction.
                However, automation presents a transformative solution that can revolutionize the claims process,
                benefiting both insurers and customers. This article explores the advantages of automation in claims
                processing and highlights basys.ai as an exemplary platform empowering health insurance companies to
                streamline their processes and enhance outcomes.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The challenges of manual claims processing
            </h2>
            <p>
                Manual claims processing involves numerous steps, from data collection to settlement, each susceptible
                to various issues. This section delves into the problems associated with manual claims processing,
                such as high costs, errors, fraud, delays, and customer dissatisfaction. By highlighting these
                challenges, it becomes evident that a better solution is needed to improve the claims process and
                enhance the overall customer experience.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                The advantages of automation in claims processing
            </h2>
            <p>
                Automation, enabled by technologies such as Robotic Process Automation (RPA), Artificial Intelligence
                (AI), and cloud computing, offers significant advantages in streamlining the claims process. This section
                explores how automation can automate data collection, verification, submission, and settlement,
                resulting in increased efficiency, accuracy, speed, transparency, and compliance. The benefits of
                automation extend to improved customer satisfaction through faster and easier claims services,
                reduced errors and disputes, and enhanced options and flexibility.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Examples of automation solutions and best practices
            </h2>
            <p>
                To provide tangible examples, this section showcases automation solutions already available or in use
                within the insurance industry. These solutions include mobile apps, virtual appraisals,
                Straight-Through Processing (STP), fraud detection systems, and claims tracking tools. Each
                solution&apos;s features and benefits are outlined to demonstrate their effectiveness in optimizing
                the claims process. Additionally, best practices for implementing automation in claims processing are
                presented, emphasizing the importance of comprehensive strategy development, finding the right balance
                between human and digital touchpoints, upskilling claims professionals, and harnessing the power of data
                and analytics.
            </p>

            <h2 className="text-xl font-semibold text-primary">basys&apos; solution</h2>
            <p>
                Focused on health insurance companies, basys.ai&apos;s platform stands as an exemplary solution for
                streamlining prior authorization request approval processes, ultimately leading to improved patient
                outcomes. Powered by AI algorithms developed by esteemed data science experts from Harvard and MIT,
                basys.ai handles requests of varying complexity using advanced machine learning techniques, including
                natural language processing (NLP) and large language models (LLMs). The platform automates rule-based
                approvals and employs sophisticated techniques to interpret and annotate ambiguous requests, ensuring
                efficient and accurate processing before insurance administrators&apos; review. basys has deployed its
                solution in pilot programs with payers and will release results later this year on the cost savings it
                generated.
            </p>
            <p>
                Automation has the potential to transform insurance claims processing, benefiting insurers and
                customers alike. By addressing the challenges of manual processing, automation improves efficiency,
                accuracy, and customer satisfaction. basys.ai exemplifies the power of automation in the health insurance
                sector, streamlining processes and fostering better outcomes. Embracing automation in claims processing
                is not only advantageous for insurers but also vital in providing a seamless and satisfying experience
                for customers. The future of claims processing lies in automation, and basys.ai is at the forefront of
                this transformative journey.
            </p>
        </div>
    ),
    "7-ways-ai-will-change-healthcare-basys-ai-building-industry-future": (
        <div className={articleBodyClass}>
            <p>
                The healthcare industry is undergoing rapid transformation, fueled by advancements in
                artificial intelligence (AI) and automation. These technologies offer tremendous potential to
                revolutionize patient care and improve healthcare processes. basys.ai, a pioneering healthtech
                company, is at the forefront of this transformation, developing innovative solutions to modernize
                and streamline healthcare through automation. In this article, we explore the future of
                healthcare by highlighting seven key elements that we can expect to see in hospitals of the
                future, while also diving into how basys.ai is contributing to this vision.
            </p>

            <ol className="list-decimal space-y-6 pl-6">
                <li className="pl-2">
                    <p>
                        <strong>Preventative care:</strong> In the hospital of the future, preventative care
                        will take center stage. Through data-based analysis that incorporates genomic and
                        environmental history, each patient will have a personalized risk profile. This
                        profile will guide patients toward behaviors that reduce their risks of developing
                        certain conditions or diseases.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>AI nurses:</strong> Advanced chatbots and potentially robots trained with bedside
                        manner are on the horizon. Organizations like Hippocratic AI are pioneering the development
                        of AI nurses that can assist patients, answer questions, and provide support. These AI
                        nurses will enhance patient engagement and offer round-the-clock care.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>Accurate and biometric symptom checker:</strong> As patients enter the hospital
                        of the future, they will encounter accurate and biometric symptom checkers. These devices
                        will use advanced scanning technologies to assess a patient&apos;s vital signs and symptoms
                        upon entry, providing healthcare providers with real-time data for a more accurate
                        diagnosis and treatment plan.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>Automated triage:</strong> Leveraging electronic health records (EHR) and patient
                        data, automated triage systems will prioritize patients based on the severity of their
                        condition. This streamlined approach will optimize patient flow and ensure that critical
                        cases receive prompt attention. basys.ai&apos;s platform can integrate with existing EHR
                        systems, enabling automated triage and efficient allocation of resources.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>Automated and instantaneous treatment request processing:</strong> In the hospital
                        of the future, treatment requests will be processed rapidly and efficiently through
                        automation. basys.ai&apos;s platform automates the submission and approval of prior
                        authorization requests, streamlining the workflow and reducing administrative burdens for
                        healthcare providers. This automation allows for quicker treatment decisions, leading to
                        improved patient outcomes.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>Enhanced data security:</strong> As hospitals embrace advanced technologies, data
                        security becomes paramount. The hospital of the future will implement robust data
                        management systems and employ sophisticated security measures to protect patient
                        information.
                    </p>
                </li>
                <li className="pl-2">
                    <p>
                        <strong>Advanced smartphone care:</strong> Smartphones will play a pivotal role in the
                        hospital of the future, enabling patients to access diagnostics, collect health data,
                        conduct body scans, engage with AI-powered chatbots, and receive personalized care
                        remotely.
                    </p>
                </li>
            </ol>

            <h2 className="text-xl font-semibold text-primary">Innovation by basys.ai</h2>
            <p>
                While these are technologies to expect in the hospital of tomorrow, basys.ai is at the forefront of
                modernizing healthcare today. Developed by a team of experts from Harvard and MIT, basys.ai&apos;s
                platform serves as a neutral hub that streamlines communication between key stakeholders in
                healthcare and automates administrative processes. By leveraging state-of-the-art machine learning
                models backed by patented technology, basys.ai is transforming the prior authorization process.
            </p>
            <p>
                The expertise of basys.ai&apos;s team ensures that the platform delivers efficient and accurate
                claims processing and triage capabilities. With over two decades of combined experience in data
                science, healthcare, and technology, the co-founders of basys.ai bring a wealth of knowledge to
                the table. Additionally, the team includes members who have played integral roles in the
                development of the Affordable Care Act (ACA). This expertise ensures that responsible AI
                guardrails are implemented to protect patient data while enhancing the efficiency of healthcare
                processes.
            </p>
            <p>
                The future of healthcare is exciting and promising, with automation and AI technology at the
                forefront of this transformation. basys.ai is dedicated to revolutionizing the healthcare
                landscape by developing innovative solutions that streamline administrative processes, improve
                patient outcomes, and enhance the overall healthcare experience. As hospitals embrace the seven
                elements discussed, including preventative care, AI nurses, accurate symptom checkers, automated
                triage, instantaneous treatment request processing, enhanced data security, and advanced
                smartphone care, we can look forward to a future where patient care is more efficient, personalized,
                and accessible than ever before.
            </p>
        </div>
    ),
    "agile-basys-ai-deploys-automation-connects-health-records": (
        <div className={articleBodyClass}>
            <p>
                In healthcare, data transfer has traditionally been a cumbersome process characterized by a lack of
                agility. Electronic health records (EHRs) often fail to communicate with one another, and platforms are
                not interoperable. This lack of data integration has created bottlenecks that hinder the ability of
                vendors to effectively serve payers and providers. However, basys.ai, a pioneering healthtech company,
                has developed an agile and interoperable platform architecture that addresses these challenges head-on.
                By seamlessly plugging into any EHR system and integrating with payer data, basys.ai&apos;s platform
                enables rapid deployment of solutions, setting itself apart in the competitive healthcare tech landscape.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Historical lack of data integration in healthcare
            </h2>
            <p>
                The lack of data integration in healthcare has long been a significant obstacle to seamless
                information exchange and collaboration. Healthcare systems and networks have historically struggled
                with managing inconsistent information across various platforms and organizations. This inconsistency
                leads to fragmented patient records, redundant data entry, and limited access to comprehensive patient
                information. As a result, healthcare providers face challenges in delivering coordinated and efficient
                care, resulting in potential gaps, delays, and errors in treatment.
            </p>
            <p>
                Furthermore, the validation of patient data requests becomes a complex and time-consuming process due to
                the lack of standardized data exchange protocols and interoperability. Healthcare organizations often
                find themselves grappling with incompatible systems, incompatible data formats, and varying privacy and
                security standards. These barriers impede the smooth sharing of patient data among healthcare providers,
                limiting their ability to make well-informed decisions and provide high-quality care.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                Lack of interoperability bottlenecks partnerships with vendors
            </h2>
            <p>
                The lack of interoperability between healthcare systems and platforms impacts internal workflows and
                hampers partnerships between vendors, payers, and providers. Payers and providers seek streamlined
                connections for their data, both within their organizations and with external partners. They envision a
                seamless flow of information that enables comprehensive patient profiles, efficient claims processing,
                and real-time analytics. However, the absence of interoperability standards and compatible systems
                hinders the achievement of this vision.
            </p>
            <p>
                Vendors, in particular, face significant challenges when their solutions cannot seamlessly integrate with
                existing healthcare infrastructure and workflows. A lack of interoperability limits the value and
                functionality of their products, as they struggle to connect with disparate EHR systems or exchange data
                with other healthcare stakeholders. This bottleneck prevents vendors from effectively serving payers and
                providers, inhibiting their ability to deliver innovative and transformative solutions. To thrive in the
                competitive healthcare tech realm, vendors must recognize the importance of offering flexible systems that
                prioritize interoperability, standardize data exchange, and address stakeholder concerns around data
                sharing.
            </p>

            <h2 className="text-xl font-semibold text-primary">
                basys.ai overcoming data integration with agile architecture
            </h2>
            <p>
                Recognizing the critical need for data integration in healthcare, basys.ai has developed an agile
                platform architecture that addresses this challenge head-on. The company&apos;s team of experts, boasting a
                wealth of experience from prestigious institutions such as Harvard and MIT, has built a neutral hub that
                streamlines communication between key healthcare stakeholders and automates administrative processes.
                Leveraging state-of-the-art machine learning models supported by patented technology, basys.ai&apos;s
                platform revolutionizes the prior authorization process.
            </p>
            <p>
                The agility of basys.ai&apos;s platform is evident in its ability to be deployed rapidly, delivering
                significant savings to payers within months. Such swift and tangible outcomes position basys.ai to rapidly
                expand its pilot programs with payer partners, enabling the quick delivery of interoperable AI solutions.
                The algorithmic architecture choices made by basys.ai stem from the team&apos;s deep understanding and
                expertise at the intersection of health and data science. The co-founders bring over two decades of
                combined experience in data science, healthcare, and technology to the table. This wealth of experience
                has shaped basys.ai&apos;s product design goals, with interoperability as a fundamental principle.
            </p>
            <p>
                Health data integration is a critical element in the advancement of healthcare technology. The lack of
                agility and interoperability has long been a hurdle for the industry, hindering effective collaboration
                and impeding progress. However, basys.ai&apos;s innovative platform architecture has introduced a new
                paradigm, enabling rapid deployment and seamless integration with existing healthcare infrastructure. By
                leveraging their expertise and deep understanding of both healthcare and data science, basys.ai is at
                the forefront of transforming the industry. The road to comprehensive health data integration is
                challenging but with solutions like those offered by basys.ai, the healthcare ecosystem will become
                increasingly interconnected and efficient.
            </p>
        </div>
    ),
    "published-on-nasdaq": (
        <div className={articleBodyClass}>
            <p>
                Following is the excerpt of the interview published on Nasdaq:
            </p>
            <p>
                I have another great interview for you this week. Today, I&apos;m excited to speak with Amber
                Nigam, the co-founder and CEO of basys.ai. Let&apos;s see what inspiring work he&apos;s been up
                to.
            </p>

            <p>
                <strong>Spiffy:</strong> Thanks for joining me, Amber! Tell me, what challenge are you
                addressing?
            </p>
            <p>
                <strong>Amber:</strong> Happy to be with you, Spiffy! At basys.ai, we are addressing the massively
                challenging and underserved domain of capacity-building for providers (i.e. doctors and hospitals)
                to address metabolic health-related issues. Our mission is to enable providers in their journey of
                managing metabolic health for billions through artificial intelligence (AI). Although many companies
                have tried solving this problem by directly reaching out to the customers or the employees through
                employers (B2B2C), the provider-side has remained largely untouched. We believe providers are the
                change-makers. They should be involved from the get-go. AI without context has often been
                misguided, if not directly harmful. Therefore, we involve the right stakeholders at the right time
                and remove blindspots from healthcare.
            </p>

            <p>
                <strong>Spiffy:</strong> What motivated you to tackle this challenge?
            </p>
            <p>
                <strong>Amber:</strong> My initial push was my dad, who had unmanaged diabetes for 25 years. Being
                his caregiver, I have felt a spectrum of emotions from irritation to anxiety to sheer helplessness.
                Even though I am not diabetic, I have essentially lived a diabetic life vicariously through my dad.
                Going forward, we at basys.ai are committed to pursuing our initiative through thick and thin,
                because we are aligned with the mission. In fact, checking for mission alignment is a key component
                of our hiring process.
            </p>

            <p>
                <strong>Spiffy:</strong> How are you and your team at basys.ai working towards a more equitable
                world?
            </p>
            <p>
                <strong>Amber:</strong> Well, poor metabolic health is a significant propagator of health inequity.
                I don&apos;t want to sound morbid, but having a disease like diabetes or cardiovascular disease has
                very real repercussions on a person&apos;s quality of life. On another note, did you know that the
                risk of diabetes is 77% higher among African Americans compared to white Americans (based on a
                study published in diabetesjournals.org)?
            </p>

            <p>
                <strong>Spiffy:</strong> Oh, wow! No, I didn&apos;t know that. That&apos;s a big difference.
            </p>
            <p>
                <strong>Amber:</strong> Exactly, Spiffy. Improving metabolic health begins with identifying
                underlying social determinants in clinical decision-making.
            </p>

            <p>
                <strong>Spiffy:</strong> Tell me about a recent milestone by basys.ai. What impact does that
                make?
            </p>
            <p>
                <strong>Amber:</strong> We just acquired our first revenue-generating customer that happens to be
                the market leader in diabetes. We were able to do it in less than six months, which is five times
                faster than the industry standard. The impact of this initiative is that we now can hire talented
                people who could propel our growth. It also means that we do not have to raise money to stay afloat
                but rather to scale. It has led to a smoother sales process for other customers.
            </p>

            <p>
                <strong>Spiffy:</strong> Congrats on that success! Please also share an experience when you faced
                failure and didn&apos;t give up. What did you learn from that experience?
            </p>
            <p>
                <strong>Amber:</strong> There were so many times! For every win we make, I can assure you there
                were five failed attempts preceding it. For instance, we reached out to many potential customers
                before landing a few big names in the industry. We have tried convincing literally hundreds of people
                to join our initiative before recruiting our amazing team. But the collective learning coming out of
                it is that once you get a chance to pilot with a customer or hire a talented team member, make it
                worth their while.
            </p>

            <p>
                <strong>Spiffy:</strong> What is something memorable you&apos;ve learned from someone?
            </p>
            <p>
                <strong>Amber:</strong> &ldquo;Magic happens when you commit!&rdquo; This is what Reza Satchu, my
                professor at Harvard Business School, would say about starting up your venture. As my co-founder Jie
                Sun and I have progressed along our startup journey, this advice has absolutely stuck with us. There
                will be no perfect time and no soft fall. Sometimes, it&apos;s about taking the plunge and figuring it
                out from there. You would be surprised!
            </p>

            <p>
                <strong>Spiffy:</strong> Is there anything else you would love to tell our audience?
            </p>
            <p>
                <strong>Amber:</strong> Building off the last answer, we have been surprised by how powerful our
                network could be. For us, it is not only our friends and peers, but also our university (Harvard)
                that has been our biggest cheerleader. While our friends have provided us with the perfect support
                group through much-needed help and critical feedback, Harvard has published our work on their
                websites and social media to spotlight the cause we care about.
            </p>

            <p>
                <strong>Spiffy:</strong> Thanks again for speaking with me today, Amber — it&apos;s been an honor!
            </p>

            <p className="border-t border-outline-variant pt-6 text-sm italic text-secondary">
                Amber Nigam is a serial entrepreneur and an AI leader with a decade-long track record of leading
                diverse teams for building impactful products. He is the CEO and co-founder of the digital-health
                startup basys.ai. He is a student at Harvard and previously co-instructed a data-science course at
                MIT. (Nominated by the Ladderworks team. First published on the Ladderworks website on August 9,
                2022.)
            </p>
            <p className="text-xs text-on-surface-variant">
                © 2022 Ladderworks LLC. Edited by George Romar. Spiffy&apos;s illustration by Shreyas Navare. For the
                Ladderworks digital curriculum to help K-3 kids advance the UN SDGs, visit Spiffy&apos;s Corner on the
                Ladderworks website.
            </p>
        </div>
    ),
};
