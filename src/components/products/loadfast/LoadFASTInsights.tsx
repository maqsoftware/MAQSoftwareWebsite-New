import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const insights = [
    {
        pill: "AppSource",
        title: "LoadFAST on Azure Marketplace",
        desc: "Get LoadFAST and start load-testing today.",
        href: "https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview",
    },
    {
        pill: "Docs",
        title: "Technical documentation",
        desc: "Integration and usage reference on GitBook.",
        href: "https://maqsoftware.gitbook.io/loadfast-technical-documentation",
    },
    {
        pill: "Best practices",
        title: "Power BI performance patterns",
        desc: "Capacity sizing, refresh optimization, and performance tuning guides.",
        href: "https://maqsoftware.com/community/best-practices",
    },
    {
        pill: "Case studies",
        title: "Load-testing case studies",
        desc: "Real-world Power BI capacity wins.",
        href: "https://maqsoftware.com/case-studies",
    },
];

export function LoadFASTInsights() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>LoadFAST insights and resources</h2>
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