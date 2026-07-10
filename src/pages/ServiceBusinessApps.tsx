import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useContactAction } from "../lib/contact";
import { PrimaryButton } from "../components/buttons";
import {
    Mail24Regular,
    ArrowRight16Regular,
    Flow24Regular,
    PeopleSearch24Regular,
    AppFolder24Regular,
    Grid24Regular,
    Code24Regular,
    ShieldTask24Regular,
    ArrowTrendingLines24Regular,
    PersonHeart24Regular,
    Flow20Filled,
    Sparkle20Filled,
    CheckmarkCircle20Filled,
} from "@fluentui/react-icons";

// import { TrustBanner } from \"../components/TrustBanner\";

// ---------------------------------------------------------------------------
// Self-contained page — does not share components with /services/agentic-ai
// so concurrent edits to src/components/service/* won't conflict here.
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
    // Hero
    hero: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px" },
    heroGrid: {
        maxWidth: "var(--maq-container-wide)",
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
    heroImage: {
        width: "100%",
        aspectRatio: "16 / 10",
        display: "block",
        borderRadius: "10px",
        objectFit: "cover",
    },

    // Section commons
    section: { padding: "48px 32px", backgroundColor: "#fff" },
    sectionAlt: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
    inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
    head: { textAlign: "center", marginBottom: "20px" },
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
        fontSize: "36px",
        lineHeight: 1.15,
        fontWeight: 700,
        color: "var(--maq-navy)",
        margin: "0 0 6px",
        letterSpacing: "-0.02em",
    },
    titleSm: {
        fontSize: "36px",
        lineHeight: 1.15,
        fontWeight: 700,
        color: "var(--maq-navy)",
        margin: "0 0 6px",
        letterSpacing: "-0.02em",
    },
    secSub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", maxWidth: "780px", textAlign: "center" },

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
        ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
    },
    railBtnActive: {
        border: "1px solid var(--maq-card-hover-border)",
        borderLeftWidth: "3px",
        boxShadow: "var(--maq-shadow-sm)",
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
            border: "1px solid var(--maq-card-hover-border)",
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
            border: "1px solid var(--maq-card-hover-border)",
            boxShadow: "var(--maq-shadow-lift)",
            transform: "translateY(-2px)",
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
      display: "inline-block",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: 1.4,
      color: "var(--maq-red)",
      textDecoration: "none",
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
            border: "1px solid var(--maq-card-hover-border)",
            boxShadow: "var(--maq-shadow-lift)",
            transform: "translateY(-2px)",
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
        name: "Dynamics 365",
        tagline: "Intelligent applications for modern business",
        icon: <AppFolder24Regular />,
        description:
            "Implement intelligent business applications that streamline customer engagement, finance, operations, sales, and service management.",
        tags: ["Dynamics 365", "Sales", "Service", "Operations"],
    },
    {
        name: "Microsoft Power Platform",
        tagline: "Low-code solutions for rapid innovation",
        icon: <Grid24Regular />,
        description:
            "Accelerate digital transformation using low-code solutions for application development, workflow automation, analytics, and virtual agents.",
        tags: [
            "Power Platform",
            "Low-Code",
            "Automation",
            "Virtual Agents",
        ],
    },
    {
        name: "Power Apps",
        tagline: "Build enterprise apps with low code",
        icon: <Code24Regular />,
        description:
            "Develop secure low-code business applications that improve operational efficiency and connect seamlessly with enterprise data sources.",
        tags: [
            "Power Apps",
            "Low-Code Apps",
            "Enterprise Data",
            "Operational Efficiency",
        ],
    },
    {
        name: "Power Automate",
        tagline: "Intelligent workflow automation at scale",
        icon: <AppFolder24Regular />,
        description:
            "Automate repetitive business processes through intelligent workflows that improve productivity and reduce manual effort.",
        tags: ["Power Automate", "Workflows", "Process Automation", "Productivity"],
    },
    {
        name: "Customer 360",
        tagline: "Unified customer insights across channels",
        icon: <PeopleSearch24Regular />,
        description:
            "Create unified customer profiles by integrating enterprise data to deliver personalized experiences and informed business decisions.",
        tags: ["Customer 360", "Unified Profiles", "Personalization", "Insights"],
    },
    {
        name: "Workflow Automation & Process Optimization",
        tagline: "Streamlined processes through automation",
        icon: <ArrowTrendingLines24Regular />,
        description:
            "Optimize end-to-end business processes through intelligent automation, approvals, integrations, and operational efficiency improvements.",
        tags: ["Process Optimization", "Approvals", "Integrations", "Automation"],
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
// and render a Testimonials section at the page end.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceBusinessApps() {
    const s = useStyles();
    const handleContactClick = useContactAction();
    const [activeCap, setActiveCap] = useState(0);
    const sel = capabilities[activeCap];

    return (
        <>
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroGrid}>
                    <div>
                        <span className={s.eyebrow}>Business Applications &amp; Automation</span>
                        <h1 className={s.h1}>AI-native business apps on Microsoft Power Platform</h1>
                        <p className={s.heroSub}>
                            Low-code and pro-code apps built on Power Apps, Dynamics 365, and
                            Microsoft 365 — paired with Copilot Studio agents and Power Automate
                            flows that retire manual handoffs and embed AI into everyday operations.
                        </p>
                        <div className={s.btns}>
                            <PrimaryButton
                                size="large"
                                onClick={() =>
                                    handleContactClick(
                                        "Business Applications & Automation - MAQ Software"
                                    )
                                }
                            >
                                Contact Us
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className={s.visual}>
                        <img
                            className={s.heroImage}
                            src="/images/Service%20cards/Apps.png"
                            alt="Business Applications and Automation"
                        />
                    </div>
                </div>
            </section>



            {/* CAPABILITIES */}
            <section className={s.section} id="business-apps-capabilities">
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Our expertise</span>
                        <h2 className={s.title}>Our business applications &amp; automation capabilities</h2>
                        {/* <p className={s.secSub}>
                            Four capability pillars that modernize legacy applications and automate
                            operations across the Microsoft business apps stack.
                        </p> */}
                    </div>
                    <div className={s.panel}>
                        <div>
                            <div className={s.iconBox}>{sel.icon}</div>
                            <div className={s.detailName}>{sel.name}</div>
                            <p className={s.detailDesc}>{sel.description}</p>
                            <PrimaryButton
                                size="large"
                                className="maq-secondary-btn maq-equal-cta"
                                onClick={() =>
                                    handleContactClick(
                                        `${sel.name} - Business Applications & Automation`
                                    )
                                }
                            >
                                Know more
                            </PrimaryButton>
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
                    <Link
                        className={s.footerLink}
                        to="/insights/case-studies?filter=Application%20modernization#insights-content"
                    >
                        See business applications case studies
                        <ArrowRight16Regular />
                    </Link>
                </div>
            </section>

            {/* OUTCOMES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.headCentered}>
                        <span className={s.secEyebrow}>Business outcomes</span>
                        <h2 className={s.titleSm}>Your business outcomes</h2>
                        {/* <p className={s.secSub}>
                            What organizations gain when legacy apps and manual processes are modernized
                            with engineering discipline.
                        </p> */}
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
                                rel="noopener noreferrer"
                            >
                                <h3 className={s.caseTitle}>{c.title}</h3>
                                <p className={s.caseTeaser}>{c.teaser}</p>
                                <span className={s.caseRead}>
                                    Read full story
                                </span>
                            </a>
                        ))}
                    </div>
                    <Link
                        className={s.footerLink}
                        to="/insights/case-studies#insights-content"
                    >
                        See all case studies
                        <ArrowRight16Regular />
                    </Link>
                </div>
            </section>

            {/* INSIGHTS */}
            <section className={s.section}>
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Insights</span>
                        <h2 className={s.titleSm}>Our business apps and process automation insights</h2>
                        {/* <p className={s.secSub}>
                            See our research that goes into optimizing our business apps and process
                            automation service.
                        </p> */}
                    </div>
                    <div className={s.insGrid}>
                        {insights.map((i) => (
                            <a
                                key={i.title}
                                className={s.insCard}
                                href={i.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={s.insCover} aria-hidden="true" />
                                <div className={s.insBody}>
                                    <h3 className={s.insTitle}>{i.title}</h3>
                                    <p className={s.insTeaser}>{i.teaser}</p>
                                    <span className={s.caseRead}>
                                        Read more
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

                        {/* TESTIMONIALS — placeholder, hidden until signed quotes are available.
                    When ready, render this section at the page end. */}
        </>
    );
}

