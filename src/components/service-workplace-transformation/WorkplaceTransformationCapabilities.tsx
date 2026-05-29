import { useState } from "react";
import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import {
    Sparkle24Regular,
    Globe24Regular,
    PeopleTeam24Regular,
    Code24Regular,
    ArrowRight16Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
    section: { padding: "48px 32px", backgroundColor: "#fff" },
    inner: { maxWidth: "1240px", margin: "0 auto" },
    head: { marginBottom: "20px" },
    eyebrow: {
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
    sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0, maxWidth: "780px" },
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
});

interface Capability {
    name: string;
    tagline: string;
    description: string;
    icon: ReactNode;
    tags: string[];
}

const capabilities: Capability[] = [
    {
        name: "Microsoft Copilot adoption & governance",
        tagline: "Drive AI-assisted productivity at scale",
        icon: <Sparkle24Regular />,
        description:
            "Accelerate Microsoft 365 Copilot rollout with structured readiness assessments, persona-based enablement, and governance controls. We design Centers of Excellence, adoption dashboards, and prompt libraries so every role sees measurable time savings within weeks — not months.",
        tags: ["M365 Copilot", "Copilot Studio", "Viva Insights", "Adoption Score"],
    },
    {
        name: "Modern intranet & collaboration platforms",
        tagline: "Connect employees to knowledge and each other",
        icon: <Globe24Regular />,
        description:
            "Design and deploy SharePoint Online intranets, Teams-based workspaces, and Viva Connections experiences that unify communications, knowledge management, and day-to-day collaboration. We build information architectures that scale from 500 to 500,000 users without sprawl.",
        tags: ["SharePoint Online", "Microsoft Teams", "Viva Connections", "Power Pages"],
    },
    {
        name: "Employee experience & Viva suite",
        tagline: "Measure and improve how people work",
        icon: <PeopleTeam24Regular />,
        description:
            "Deploy Microsoft Viva modules — Insights, Learning, Engage, and Goals — to give leaders visibility into work patterns and give employees personalized learning paths, recognition, and goal alignment. We integrate Viva data with Power BI for executive-ready people analytics.",
        tags: ["Viva Insights", "Viva Learning", "Viva Engage", "Power BI"],
    },
    {
        name: "Developer productivity & GitHub Copilot",
        tagline: "Ship code faster with AI pair programming",
        icon: <Code24Regular />,
        description:
            "Roll out GitHub Copilot across engineering teams with hackathons, best-practice playbooks, usage dashboards, and CI/CD integration. Our proven enablement framework delivers ~40% reduction in coding time and ~50% faster test automation within the pilot phase.",
        tags: ["GitHub Copilot", "Azure DevOps", "CI/CD", "Copilot Metrics"],
    },
];

export function WorkplaceTransformationCapabilities() {
    const s = useStyles();
    const [active, setActive] = useState(0);
    const sel = capabilities[active];

    return (
        <section className={s.section} id="workplace-capabilities">
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Our expertise</span>
                    <h2 className={s.title}>Our workplace transformation capabilities</h2>
                    <p className={s.sub}>
                        Four capability pillars that modernize employee experiences and unlock the full
                        value of your Microsoft 365 investment.
                    </p>
                </div>
                <div className={s.panel}>
                    <div>
                        <div className={s.iconBox}>{sel.icon}</div>
                        <div className={s.detailName}>{sel.name}</div>
                        <p className={s.detailDesc}>{sel.description}</p>
                        <div className={s.tagRow}>
                            {sel.tags.map((tag) => (
                                <span key={tag} className={s.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button
                            appearance="outline"
                            className={s.knowMore}
                            as="a"
                            href={`mailto:customersuccess@maqsoftware.com?subject=${encodeURIComponent(
                                `${sel.name} - Workplace Transformation`
                            )}`}
                        >
                            Know more
                        </Button>
                    </div>
                    <div className={s.rail}>
                        {capabilities.map((capability, index) => (
                            <button
                                key={capability.name}
                                type="button"
                                aria-current={index === active}
                                onClick={() => setActive(index)}
                                className={`${s.railBtn} ${index === active ? s.railBtnActive : ""}`}
                            >
                                <span className={s.railIcon}>{capability.icon}</span>
                                <span className={s.railText}>
                                    <span className={s.railName}>{capability.name}</span>
                                    <span className={s.railTagline}>{capability.tagline}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                <a
                    className={s.footerLink}
                    href="https://maqsoftware.com/case-studies"
                    target="_blank"
                    rel="noreferrer"
                >
                    See workplace transformation case studies <ArrowRight16Regular />
                </a>
            </div>
        </section>
    );
}
