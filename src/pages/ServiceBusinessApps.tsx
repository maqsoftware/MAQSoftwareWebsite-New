import { useState } from "react";
import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
    ArrowRight16Regular,
    Flow24Regular,
    PeopleSearch24Regular,
    Headset24Regular,
    AppFolder24Regular,
    ShieldTask24Regular,
    ArrowTrendingLines24Regular,
    PersonHeart24Regular,
    Flow20Filled,
    Sparkle20Filled,
    CheckmarkCircle20Filled,
} from "@fluentui/react-icons";
import { TrustBanner } from "../components/TrustBanner";
import { CTA } from "../components/CTA";

// ---------------------------------------------------------------------------
// Self-contained page — does not share components with /services/agentic-ai
// so concurrent edits to src/components/service/* won't conflict here.
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
    // Hero
    hero: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px" },
    heroGrid: {
        maxWidth: "1240px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "48px",
        alignItems: "center",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    eyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "12px",
        display: "block",
    },
    h1: {
        fontSize: "40px",
        lineHeight: 1.15,
        fontWeight: 700,
        color: "var(--maq-black)",
        letterSpacing: "-0.02em",
        margin: "0 0 16px",
    },
    heroSub: {
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--maq-gray-600)",
        marginBottom: "24px",
        maxWidth: "640px",
    },
    btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

    // Hero mosaic
    visual: {
        background: "var(--maq-surface-cream)",
        border: "1px solid var(--maq-red-pale)",
        borderRadius: "16px",
        padding: "20px",
        display: "grid",
        gap: "12px",
        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
        color: "var(--maq-ink)",
    },
    tile: {
        background: "#fff",
        border: "1px solid var(--maq-border)",
        borderRadius: "10px",
        padding: "14px 16px",
    },
    tileTitle: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--maq-gray-500)",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
    perfLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
    perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
    pulseRow: { display: "flex", gap: "8px", alignItems: "center" },
    dot: { width: "10px", height: "10px", borderRadius: "50%", background: "var(--maq-red)" },
    pulseLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
    autoRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },

    // Section commons
    section: { padding: "48px 32px", backgroundColor: "#fff" },
    sectionAlt: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
    inner: { maxWidth: "1240px", margin: "0 auto" },
    head: { marginBottom: "20px" },
    headCentered: { textAlign: "center", marginBottom: "28px" },
    secEyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        display: "block",
        marginBottom: "6px",
    },
    title: {
        fontSize: "30px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: "0 0 6px",
        letterSpacing: "-0.01em",
    },
    titleSm: {
        fontSize: "28px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: "0 0 6px",
        letterSpacing: "-0.01em",
    },
    secSub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0, maxWidth: "780px" },

    // Capabilities — tabbed list + detail
    panel: {
        marginTop: "20px",
        background: "#fff",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "14px",
        padding: "28px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    iconBox: {
        width: "48px",
        height: "48px",
        borderRadius: "10px",
        background: "var(--maq-off-white)",
        color: "var(--maq-red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "18px",
    },
    detailName: {
        fontSize: "22px",
        fontWeight: 700,
        color: "var(--maq-black)",
        marginBottom: "10px",
    },
    detailDesc: {
        fontSize: "14px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.65,
        marginBottom: "16px",
    },
    tagRow: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" },
    tag: {
        fontSize: "11px",
        fontWeight: 600,
        color: "var(--maq-red)",
        background: "var(--maq-red-pale)",
        padding: "4px 8px",
        borderRadius: "4px",
        letterSpacing: "0.02em",
    },
    knowMore: {
        border: `1px solid var(--maq-red)`,
        color: "var(--maq-red)",
        background: "transparent",
        ":hover": { background: "var(--maq-red-pale)", color: "var(--maq-red)" },
    },
    rail: { display: "flex", flexDirection: "column", gap: "10px" },
    railBtn: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        width: "100%",
        padding: "14px 16px",
        background: "#fff",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderLeftWidth: "1px",
        borderRadius: "8px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.15s",
        ":hover": { border: `1px solid var(--maq-red)` },
    },
    railBtnActive: {
        border: `1px solid var(--maq-red)`,
        borderLeftWidth: "3px",
        boxShadow: "0 1px 4px rgba(186,20,26,0.10)",
    },
    railIcon: {
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        background: "var(--maq-off-white)",
        color: "var(--maq-red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    railText: { display: "flex", flexDirection: "column", gap: "2px" },
    railName: { fontSize: "14px", fontWeight: 700, color: "var(--maq-black)" },
    railTagline: { fontSize: "12px", color: "var(--maq-gray-600)" },
    footerLink: {
        marginTop: "20px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "14px",
        fontWeight: 600,
        color: "var(--maq-red)",
        textDecoration: "none",
        ":hover": { textDecoration: "underline" },
    },
    buttonGroup: {
        marginTop: "20px",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        "@media (max-width: 640px)": { flexDirection: "column" },
    },

    // Outcomes
    outcomesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
    },
    outcomeCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "10px",
        padding: "24px",
        background: "#fff",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-red)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        },
    },
    outcomeIcon: {
        width: "44px",
        height: "44px",
        borderRadius: "10px",
        background: "var(--maq-red-pale)",
        color: "var(--maq-red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "14px",
    },
    outcomeName: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--maq-black)",
        marginBottom: "8px",
    },
    outcomeDesc: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0 },

    // Case studies
    caseGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        gap: "16px",
    },
    caseCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        padding: "22px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-red)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        },
    },
    pill: {
        fontSize: "11px",
        fontWeight: 700,
        color: "var(--maq-red)",
        background: "var(--maq-red-pale)",
        padding: "3px 8px",
        borderRadius: "4px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        alignSelf: "flex-start",
    },
    caseTitle: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.3,
        margin: 0,
    },
    caseTeaser: {
        fontSize: "14px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.55,
        margin: 0,
        flex: 1,
    },
    caseRead: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--maq-red)",
    },

    // Insights
    insGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    insCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-red)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        },
    },
    insCover: {
        height: "100px",
        background:
            "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--maq-off-white) 60%, var(--maq-surface-cream) 100%)",
        borderBottom: "1px solid var(--maq-border)",
    },
    insBody: { padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 },
    insTitle: {
        fontSize: "16px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.35,
        margin: 0,
    },
    insTeaser: {
        fontSize: "13px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.55,
        margin: 0,
        flex: 1,
    },
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

interface Capability {
    name: string;
    tagline: string;
    description: string;
    icon: ReactNode;
    tags: string[];
}

const capabilities: Capability[] = [
    {
        name: "Workflow automation using Power Platform",
        tagline: "Automate business workflows",
        icon: <Flow24Regular />,
        description:
            "Transform your operations with Power Platform. We create custom workflows that automate repetitive tasks, integrate seamlessly with your systems, and improve overall productivity.",
        tags: ["Power Automate", "Power Apps", "Dataverse", "Connectors"],
    },
    {
        name: "Customer insights using Dynamics 365",
        tagline: "Unified 360° customer view",
        icon: <PeopleSearch24Regular />,
        description:
            "Unify customer signals from sales, service, marketing, and operational systems into a single profile with Dynamics 365 Customer Insights. We build identity resolution, segmentation, and predictive scoring on top of Microsoft Fabric so every team works from the same view of the customer.",
        tags: [
            "Dynamics 365 Customer Insights",
            "Microsoft Fabric",
            "Customer Voice",
            "Power BI",
        ],
    },
    {
        name: "Digital sales and customer service using Dynamics 365",
        tagline: "Modernize sales and service",
        icon: <Headset24Regular />,
        description:
            "Replace fragmented CRM and ticketing tools with Dynamics 365 Sales and Customer Service. We design omnichannel case routing, AI-assisted next-best-action, and Copilot for Sales experiences so reps and agents resolve work faster with less swivel-chair effort.",
        tags: [
            "Dynamics 365 Sales",
            "Dynamics 365 Customer Service",
            "Omnichannel",
            "Copilot for Sales",
        ],
    },
    {
        name: "Custom copilot development",
        tagline: "Domain-specific copilots for your apps",
        icon: <AppFolder24Regular />,
        description:
            "Build secure, domain-specific copilots that plug directly into your business applications. We design conversational flows, RAG over enterprise content, plugin actions, and Microsoft 365 / Dynamics surfacing so users can ask, decide, and act in natural language.",
        tags: ["Copilot Studio", "Azure OpenAI", "M365 Copilot", "Plugins"],
    },
];

interface Outcome {
    icon: ReactNode;
    title: string;
    desc: string;
}

const outcomes: Outcome[] = [
    {
        icon: <ShieldTask24Regular />,
        title: "Future-proof technology",
        desc: "Use AI-driven insights to make smarter, data-backed decisions that propel your business forward.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Increased agility",
        desc: "Improve your ability to adapt to market changes quickly with flexible, scalable application architectures.",
    },
    {
        icon: <PersonHeart24Regular />,
        title: "Improved user experience",
        desc: "Deliver superior user experiences through modernized, intuitive applications that drive customer satisfaction.",
    },
];

interface CaseStudy {
    tag: string;
    title: string;
    teaser: string;
    href: string;
}

const caseStudies: CaseStudy[] = [
    {
        tag: "Retail · Fabric",
        title:
            "Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric",
        teaser:
            "Modernizing a Direct Store Delivery operation with Microsoft Fabric so the field team gets real-time visibility into orders, stock, and exceptions.",
        href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
    {
        tag: "Dynamics 365 · UX",
        title:
            "Maximizing the power of Dynamics 365: User interface & user experience redesigned",
        teaser:
            "Redesigning the Dynamics 365 UI/UX so frontline users complete core tasks in fewer clicks with measurably higher adoption.",
        href: "https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html",
    },
    {
        tag: "Dynamics 365 · Productivity",
        title: "Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365",
        teaser:
            "A custom dynamic checklist control inside Dynamics 365 that guides users through complex multi-step processes without leaving the record.",
        href: "https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html",
    },
];

interface Insight {
    title: string;
    teaser: string;
    href: string;
}

const insights: Insight[] = [
    {
        title: "Microsoft Fabric: Powering Real-time Analytics for Retailers",
        teaser:
            "How Microsoft Fabric reshapes the retail analytics stack to enable real-time operational reporting.",
        href: "https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html",
    },
    {
        title: "Explore Best Practices for Creating Enterprise-Wide Knowledge Bots",
        teaser:
            "Patterns for building enterprise knowledge bots that ground answers in your own content and stay maintainable at scale.",
        href: "https://maqsoftware.com/insights/knowledge-bot-best-practices.html",
    },
    {
        title: "Microsoft Fabric: Empowering all personas",
        teaser:
            "How a single Fabric platform serves data engineers, analysts, scientists, and business users with the right tools for each.",
        href: "https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html",
    },
];

// ---------------------------------------------------------------------------
// Placeholders — keep in sync when sales delivers final content
// ---------------------------------------------------------------------------
// Products section: source page has no products listed. To enable, add a
// Products section block in the JSX below (between Outcomes and Case Studies).
//
// Testimonials section: awaiting signed quotes. When ready, define
//   const testimonials = [{ body: "...", cite: "..." }, ...];
// and render a Testimonials section immediately before <CTA /> (site-wide rule).
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceBusinessApps() {
    const s = useStyles();
    const [activeCap, setActiveCap] = useState(0);
    const sel = capabilities[activeCap];

    return (
        <>
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroGrid}>
                    <div>
                        <span className={s.eyebrow}>Business apps &amp; process automation</span>
                        <h1 className={s.h1}>AI-native business apps on Microsoft Power Platform</h1>
                        <p className={s.heroSub}>
                            Low-code and pro-code apps built on Power Apps, Dynamics 365, and
                            Microsoft 365 — paired with Copilot Studio agents and Power Automate
                            flows that retire manual handoffs and embed AI into everyday operations.
                        </p>
                        <div className={s.btns}>
                            <Button
                                appearance="primary"
                                size="large"
                                icon={<Mail24Regular />}
                                as="a"
                                href="mailto:customersuccess@maqsoftware.com?subject=Business%20Apps%20%26%20Process%20Automation%20-%20MAQ%20Software"
                            >
                                Contact us
                            </Button>
                            <Button
                                appearance="outline"
                                size="large"
                                icon={<ArrowRight20Regular />}
                                iconPosition="after"
                                onClick={() =>
                                    document
                                        .getElementById("business-apps-capabilities")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Explore capabilities
                            </Button>
                        </div>
                    </div>

                    <div className={s.visual} aria-hidden="true">
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <Flow20Filled /> Workflow status
                            </div>
                            <div className={s.perfRow}>
                                <span className={s.perfLabel}>Approvals</span>
                                <div className={s.perfTrack}>
                                    <div className={s.perfFill} style={{ width: "78%" }} />
                                </div>
                            </div>
                            <div className={s.perfRow}>
                                <span className={s.perfLabel}>Onboarding</span>
                                <div className={s.perfTrack}>
                                    <div className={s.perfFill} style={{ width: "64%" }} />
                                </div>
                            </div>
                            <div className={s.perfRow}>
                                <span className={s.perfLabel}>Field service</span>
                                <div className={s.perfTrack}>
                                    <div className={s.perfFill} style={{ width: "91%" }} />
                                </div>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <CheckmarkCircle20Filled /> Active automations
                            </div>
                            <div className={s.pulseRow}>
                                <span className={s.dot} />
                                <span className={s.dot} />
                                <span className={s.dot} />
                                <span className={s.pulseLabel}>42 flows running · 0 failed in 24h</span>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <Sparkle20Filled /> Today&apos;s impact
                            </div>
                            <div className={s.autoRow}>
                                <span>Cases auto-routed</span>
                                <span>2,118</span>
                            </div>
                            <div className={s.autoRow}>
                                <span>Hours saved this week</span>
                                <span>946</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBanner />

            {/* CAPABILITIES */}
            <section className={s.section} id="business-apps-capabilities">
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Our expertise</span>
                        <h2 className={s.title}>Our business apps and process automation capabilities</h2>
                        <p className={s.secSub}>
                            Four capability pillars that modernize legacy applications and automate
                            operations across the Microsoft business apps stack.
                        </p>
                    </div>
                    <div className={s.panel}>
                        <div>
                            <div className={s.iconBox}>{sel.icon}</div>
                            <div className={s.detailName}>{sel.name}</div>
                            <p className={s.detailDesc}>{sel.description}</p>
                            <div className={s.tagRow}>
                                {sel.tags.map((t) => (
                                    <span key={t} className={s.tag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Button
                                appearance="outline"
                                className={s.knowMore}
                                as="a"
                                href={`mailto:customersuccess@maqsoftware.com?subject=${encodeURIComponent(
                                    `${sel.name} - Business Apps & Process Automation`
                                )}`}
                            >
                                Know more
                            </Button>
                        </div>
                        <div className={s.rail}>
                            {capabilities.map((c, i) => (
                                <button
                                    key={c.name}
                                    type="button"
                                    aria-current={i === activeCap}
                                    onClick={() => setActiveCap(i)}
                                    className={`${s.railBtn} ${i === activeCap ? s.railBtnActive : ""}`}
                                >
                                    <span className={s.railIcon}>{c.icon}</span>
                                    <span className={s.railText}>
                                        <span className={s.railName}>{c.name}</span>
                                        <span className={s.railTagline}>{c.tagline}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <a
                        className={s.footerLink}
                        href="/insights/case-studies?filter=Application%20modernization#insights-content"
                        target="_blank"
                        rel="noreferrer"
                    >
                        See Business Intelligence case studies
                        <ArrowRight16Regular />
                    </a>
                </div>
            </section>

            {/* OUTCOMES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.headCentered}>
                        <span className={s.secEyebrow}>Business outcomes</span>
                        <h2 className={s.titleSm}>Your business outcomes</h2>
                        <p className={s.secSub}>
                            What organizations gain when legacy apps and manual processes are modernized
                            with engineering discipline.
                        </p>
                    </div>
                    <div className={s.outcomesGrid}>
                        {outcomes.map((o) => (
                            <div key={o.title} className={s.outcomeCard}>
                                <div className={s.outcomeIcon}>{o.icon}</div>
                                <div className={s.outcomeName}>{o.title}</div>
                                <p className={s.outcomeDesc}>{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Related case studies</span>
                        <h2 className={s.titleSm}>How clients are modernizing their business apps</h2>
                    </div>
                    <div className={s.caseGrid}>
                        {caseStudies.map((c) => (
                            <a
                                key={c.title}
                                className={s.caseCard}
                                href={c.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={s.pill}>{c.tag}</span>
                                <h3 className={s.caseTitle}>{c.title}</h3>
                                <p className={s.caseTeaser}>{c.teaser}</p>
                                <span className={s.caseRead}>
                                    Read full story <ArrowRight16Regular />
                                </span>
                            </a>
                        ))}
                    </div>
                    <a
                        className={s.footerLink}
                        href="/insights/case-studies?filter=Application%20modernization#insights-content"
                        target="_blank"
                        rel="noreferrer"
                    >
                        See all case studies
                        <ArrowRight16Regular />
                    </a>
                </div>
            </section>

            {/* INSIGHTS */}
            <section className={s.section}>
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Insights</span>
                        <h2 className={s.titleSm}>Our business apps and process automation insights</h2>
                        <p className={s.secSub}>
                            See our research that goes into optimizing our business apps and process
                            automation service.
                        </p>
                    </div>
                    <div className={s.insGrid}>
                        {insights.map((i) => (
                            <a
                                key={i.title}
                                className={s.insCard}
                                href={i.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className={s.insCover} aria-hidden="true" />
                                <div className={s.insBody}>
                                    <h3 className={s.insTitle}>{i.title}</h3>
                                    <p className={s.insTeaser}>{i.teaser}</p>
                                    <span className={s.caseRead}>
                                        Read more <ArrowRight16Regular />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS — placeholder, hidden until signed quotes are available.
          When ready, render immediately before <CTA /> (site-wide rule). */}

            <CTA />
        </>
    );
}


