import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const insights = [
    {
        pill: "Consulting offers",
        title: "MAQ Software offers on Azure Marketplace",
        desc: "Browse all Azure Marketplace consulting offers from MAQ Software.",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
    },
    {
        pill: "Case studies",
        title: "AI-DataLens and analytics outcomes",
        desc: "Real customer stories on natural-language data interaction and AI-driven analytics.",
        href: "https://maqsoftware.com/case-studies",
    },
    {
        pill: "Best practices",
        title: "Data & AI best-practice guides",
        desc: "Patterns for natural-language data interaction, semantic modeling, and AI governance.",
        href: "https://maqsoftware.com/community/best-practices",
    },
    {
        pill: "Talk to us",
        title: "Request a personalized demo",
        desc: "Email customersuccess@maqsoftware.com and we'll set up a tailored walkthrough.",
        href: "mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens",
    },
];

export function AIDataLensInsights() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>AI-DataLens insights and resources</h2>
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