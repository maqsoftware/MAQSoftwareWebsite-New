import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
    Rocket24Regular,
    PeopleTeam24Regular,
    ArrowTrendingLines24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
    section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
    inner: { maxWidth: "1240px", margin: "0 auto" },
    head: { textAlign: "center", marginBottom: "28px" },
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
        fontSize: "28px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: "0 0 6px",
        letterSpacing: "-0.01em",
    },
    sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0, maxWidth: "780px" },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
    },
    card: {
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
    icon: {
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
    name: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--maq-black)",
        marginBottom: "8px",
    },
    desc: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0 },
});

interface Outcome {
    icon: ReactNode;
    title: string;
    desc: string;
}

const outcomes: Outcome[] = [
    {
        icon: <Rocket24Regular />,
        title: "Accelerated time to value",
        desc:
            "Reduce onboarding-to-productivity time by deploying structured adoption programs that achieve 70%+ active usage within 60 days.",
    },
    {
        icon: <PeopleTeam24Regular />,
        title: "Unified employee experience",
        desc:
            "Consolidate disconnected tools into a single Microsoft 365 surface — reducing context switches and improving satisfaction scores.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Measurable productivity gains",
        desc:
            "Track real outcomes with Copilot usage analytics and Viva Insights — translating tool adoption into hours saved per employee per week.",
    },
];

export function WorkplaceTransformationOutcomes() {
    const s = useStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Business outcomes</span>
                    <h2 className={s.title}>Your business outcomes</h2>
                    <p className={s.sub}>
                        What organizations gain when workplace tools are deployed with adoption-first
                        engineering discipline.
                    </p>
                </div>
                <div className={s.grid}>
                    {outcomes.map((outcome) => (
                        <div key={outcome.title} className={s.card}>
                            <div className={s.icon}>{outcome.icon}</div>
                            <div className={s.name}>{outcome.title}</div>
                            <p className={s.desc}>{outcome.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
