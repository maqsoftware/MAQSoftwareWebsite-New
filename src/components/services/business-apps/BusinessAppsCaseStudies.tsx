import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
    inner: { maxWidth: "1240px", margin: "0 auto" },
    head: { marginBottom: "24px" },
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
        margin: 0,
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
    cardTitle: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.3,
        margin: 0,
    },
    teaser: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
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

interface Study {
    tag: string;
    title: string;
    teaser: string;
    href: string;
}

const studies: Study[] = [
    {
        tag: "Retail \u00b7 Fabric",
        title:
            "Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric",
        teaser:
            "Modernizing a Direct Store Delivery operation with Microsoft Fabric so the field team gets real-time visibility into orders, stock, and exceptions.",
        href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
    {
        tag: "Dynamics 365 \u00b7 UX",
        title:
            "Maximizing the power of Dynamics 365: User interface & user experience redesigned",
        teaser:
            "Redesigning the Dynamics 365 UI/UX so frontline users complete core tasks in fewer clicks with measurably higher adoption.",
        href: "https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html",
    },
    {
        tag: "Dynamics 365 \u00b7 Productivity",
        title: "Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365",
        teaser:
            "A custom dynamic checklist control inside Dynamics 365 that guides users through complex multi-step processes without leaving the record.",
        href: "https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html",
    },
];

export function BusinessAppsCaseStudies() {
    const s = useStyles();
    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Related case studies</span>
                    <h2 className={s.title}>How clients are modernizing their business apps</h2>
                </div>
                <div className={s.grid}>
                    {studies.map((c) => (
                        <a key={c.title} className={s.card} href={c.href} target="_blank" rel="noreferrer">
                            <span className={s.pill}>{c.tag}</span>
                            <h3 className={s.cardTitle}>{c.title}</h3>
                            <p className={s.teaser}>{c.teaser}</p>
                            <span className={s.read}>
                                Read full story <ArrowRight16Regular />
                            </span>
                        </a>
                    ))}
                </div>
                <a
                    className={s.footerLink}
                    href="https://maqsoftware.com/case-studies.html?filter=application-modernization"
                    target="_blank"
                    rel="noreferrer"
                >
                    See all application modernization case studies <ArrowRight16Regular />
                </a>
            </div>
        </section>
    );
}
