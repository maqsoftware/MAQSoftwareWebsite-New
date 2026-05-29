import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
    ShieldTask24Regular,
    ArrowTrendingLines24Regular,
    PersonHeart24Regular,
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
        marginBottom: "8px",
    },
    title: {
        fontSize: "28px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: "0 0 6px",
        letterSpacing: "-0.01em",
    },
    sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0 },
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
    iconBox: {
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

export function BusinessAppsOutcomes() {
    const s = useStyles();
    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Business outcomes</span>
                    <h2 className={s.title}>Your business outcomes</h2>
                    <p className={s.sub}>
                        What organizations gain when legacy apps and manual processes are modernized with
                        engineering discipline.
                    </p>
                </div>
                <div className={s.grid}>
                    {outcomes.map((o) => (
                        <div key={o.title} className={s.card}>
                            <div className={s.iconBox}>{o.icon}</div>
                            <div className={s.name}>{o.title}</div>
                            <p className={s.desc}>{o.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
