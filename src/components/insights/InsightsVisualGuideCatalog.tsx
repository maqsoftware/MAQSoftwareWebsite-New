import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useMemo, useState } from "react";
import { InsightsFilterBar } from "./InsightsFilterBar";
import { visualGuideFilters, visualGuideItems } from "../../data/insights";

const useStyles = makeStyles({
    section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
    inner: { maxWidth: "1240px", margin: "0 auto" },
    title: { fontSize: "30px", fontWeight: 700, color: "var(--maq-black)", margin: "0 0 10px" },
    grid: {
        marginTop: "18px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        "@media (max-width: 1180px)": { gridTemplateColumns: "repeat(2, 1fr)" },
        "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
    },
    card: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        background: "#fff",
        padding: "18px",
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transition: "all 0.2s",
        ":hover": { border: "1px solid var(--maq-red)", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" },
    },
    imageWrap: {
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        background: "#fff",
    },
    image: {
        width: "100%",
        aspectRatio: "16/9",
        objectFit: "cover",
        display: "block",
    },
    meta: { display: "flex", flexWrap: "wrap", gap: "6px" },
    pill: {
        fontSize: "11px",
        fontWeight: 700,
        color: "var(--maq-red)",
        background: "var(--maq-red-pale)",
        padding: "3px 8px",
        borderRadius: "4px",
        textTransform: "uppercase",
    },
    category: { fontSize: "12px", color: "var(--maq-gray-500)", fontWeight: 700 },
    cardTitle: { fontSize: "16px", lineHeight: 1.35, color: "var(--maq-black)", margin: 0 },
    teaser: { fontSize: "13px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
    read: { display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--maq-red)", fontWeight: 600, fontSize: "13px" },
    support: {
        marginTop: "22px",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        background: "#fff",
        padding: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        "@media (max-width: 760px)": { flexDirection: "column", alignItems: "flex-start" },
    },
    supportText: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0 },
});

export function InsightsVisualGuideCatalog() {
    const s = useStyles();
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = useMemo(() => {
        if (activeFilter === "All") return visualGuideItems;
        if (activeFilter === "Certified") return visualGuideItems.filter((item) => item.badges.includes("Certified"));
        return visualGuideItems.filter((item) => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className={s.section} id="insights-content">
            <div className={s.inner}>
                <h2 className={s.title}>Popular visuals</h2>
                <InsightsFilterBar items={visualGuideFilters} active={activeFilter} onChange={setActiveFilter} />
                <div className={s.grid}>
                    {filtered.map((item) => (
                        <a key={item.href} className={s.card} href={item.href} target="_blank" rel="noreferrer">
                            <div className={s.imageWrap}>
                                <img className={s.image} src={item.imageUrl} alt={item.name} loading="lazy" />
                            </div>
                            <div className={s.meta}>
                                {item.badges.map((badge) => (
                                    <span key={badge} className={s.pill}>{badge}</span>
                                ))}
                            </div>
                            <span className={s.category}>{item.category}</span>
                            <h3 className={s.cardTitle}>{item.name}</h3>
                            <p className={s.teaser}>{item.description}</p>
                            <span className={s.read}>View visual <ArrowRight16Regular /></span>
                        </a>
                    ))}
                </div>
                <div className={s.support}>
                    <p className={s.supportText}>If you have questions about our custom visuals, please visit our Power BI page on Zendesk.</p>
                    <Button appearance="primary" as="a" href="https://maqsoftware.zendesk.com/hc/en-us/community/topics" target="_blank" rel="noreferrer">
                        Go to Zendesk
                    </Button>
                </div>
            </div>
        </section>
    );
}