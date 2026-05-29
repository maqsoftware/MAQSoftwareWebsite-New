import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const insights = [
    {
        pill: "AppSource",
        title: "EmbedFAST on Azure Marketplace",
        desc: "Purchase plans and licensing.",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi",
    },
    {
        pill: "Consulting offers",
        title: "MAQ Software offers on Azure Marketplace",
        desc: "Browse all Azure Marketplace consulting offers.",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
    },
    {
        pill: "Case studies",
        title: "Power BI embedding outcomes",
        desc: "Real-world wins from EmbedFAST customers.",
        href: "https://maqsoftware.com/case-studies",
    },
    {
        pill: "Best practices",
        title: "Power BI embedding best practices",
        desc: "Authoritative guidance from MAQ Software engineers.",
        href: "https://maqsoftware.com/community/best-practices",
    },
];

export function EmbedFASTInsights() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>EmbedFAST insights and resources</h2>
                </div>
                <div className={s.mktGrid}>
                    {insights.map((insight) => (
                        <a
                            key={insight.title}
                            className={s.mktCard}
                            href={insight.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={s.mktImg} aria-hidden="true" />
                            <div className={s.mktBody}>
                                <span className={s.mktPill}>{insight.pill}</span>
                                <div className={s.mktTitleRow}>
                                    <div className={s.mktTitle}>{insight.title}</div>
                                    <ArrowRight20Regular className={s.mktArrow} />
                                </div>
                                <p className={s.mktDesc}>{insight.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}