import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const insights = [
    {
        pill: "Consulting offers",
        title: "MAQ Software offers on Azure Marketplace",
        desc: "Browse migration and Fabric consulting offers.",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
    },
    {
        pill: "Case studies",
        title: "Fabric migration outcomes",
        desc: "Real customer stories on Tableau-to-Power-BI and platform migration.",
        href: "https://maqsoftware.com/case-studies",
    },
    {
        pill: "Best practices",
        title: "Migration patterns and standards",
        desc: "MAQ Software's authoritative migration guidance.",
        href: "https://maqsoftware.com/community/best-practices",
    },
    {
        pill: "Talk to us",
        title: "Get a tailored migration plan",
        desc: "Email customersuccess@maqsoftware.com to scope your estate.",
        href: "mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20MigrateFAST",
    },
];

export function MigrateFASTInsights() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>MigrateFAST insights and resources</h2>
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