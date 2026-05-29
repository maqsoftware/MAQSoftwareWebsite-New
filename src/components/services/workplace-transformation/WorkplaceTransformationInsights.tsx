import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

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
        gap: "20px",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    card: {
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
    cover: {
        height: "100px",
        background:
            "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--maq-off-white) 60%, var(--maq-surface-cream) 100%)",
        borderBottom: "1px solid var(--maq-border)",
    },
    body: { padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 },
    insTitle: {
        fontSize: "16px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.35,
        margin: 0,
    },
    teaser: {
        fontSize: "13px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.55,
        margin: 0,
        flex: 1,
    },
    read: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--maq-red)",
    },
});

interface Insight {
    title: string;
    teaser: string;
    href: string;
}

const insights: Insight[] = [
    {
        title: "Empowering businesses with AI: Frameworks that deliver results",
        teaser:
            "Field-tested frameworks for deploying AI capabilities — from knowledge bots to content generation — that produce measurable business outcomes.",
        href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
    },
    {
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "How a global organization embedded GitHub Copilot across development, testing, and deployment to transform engineering productivity.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot deployment that maintains data governance.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
];

export function WorkplaceTransformationInsights() {
    const s = useStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Insights</span>
                    <h2 className={s.title}>Our workplace transformation insights</h2>
                    <p className={s.sub}>
                        See our research that goes into optimizing workplace productivity and
                        collaboration.
                    </p>
                </div>
                <div className={s.grid}>
                    {insights.map((insight) => (
                        <a
                            key={insight.title}
                            className={s.card}
                            href={insight.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={s.cover} aria-hidden="true" />
                            <div className={s.body}>
                                <h3 className={s.insTitle}>{insight.title}</h3>
                                <p className={s.teaser}>{insight.teaser}</p>
                                <span className={s.read}>
                                    Read more <ArrowRight16Regular />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
