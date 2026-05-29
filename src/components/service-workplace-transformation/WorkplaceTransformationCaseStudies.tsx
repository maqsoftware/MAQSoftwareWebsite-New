import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
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
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
        "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
    },
    card: {
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
    teaser: {
        fontSize: "14px",
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

interface CaseStudy {
    tag: string;
    title: string;
    teaser: string;
    href: string;
}

const caseStudies: CaseStudy[] = [
    {
        tag: "Developer productivity",
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "Embedding GitHub Copilot across the SDLC with adoption playbooks, governance, and outcome telemetry — delivering ~70% faster prototyping and ~55% faster refactoring.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        tag: "AI adoption",
        title: "Scaling AI for every customer and every developer with MAQ Software",
        teaser:
            "A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise.",
        href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
    },
    {
        tag: "Knowledge management",
        title: "Streamlining information retrieval with AI Copilots",
        teaser:
            "Enterprise AI Copilots that ground answers in organizational content — dramatically improving information retrieval productivity for knowledge workers.",
        href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
    },
];

export function WorkplaceTransformationCaseStudies() {
    const s = useStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Related case studies</span>
                    <h2 className={s.title}>How clients are transforming their digital workplace</h2>
                </div>
                <div className={s.grid}>
                    {caseStudies.map((study) => (
                        <a
                            key={study.title}
                            className={s.card}
                            href={study.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className={s.pill}>{study.tag}</span>
                            <h3 className={s.caseTitle}>{study.title}</h3>
                            <p className={s.teaser}>{study.teaser}</p>
                            <span className={s.read}>
                                Read full story <ArrowRight16Regular />
                            </span>
                        </a>
                    ))}
                </div>
                <a
                    className={s.footerLink}
                    href="https://maqsoftware.com/case-studies"
                    target="_blank"
                    rel="noreferrer"
                >
                    See all case studies <ArrowRight16Regular />
                </a>
            </div>
        </section>
    );
}
