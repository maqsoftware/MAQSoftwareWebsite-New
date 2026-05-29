import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const insights = [
    {
        pill: "GitHub",
        title: "CertyFAST on GitHub",
        desc: "Download the tool from the official MAQ Software repository.",
        href: "https://github.com/maqsoftware/CertyFAST",
    },
    {
        pill: "Docs",
        title: "Installation & user guide",
        desc: "Step-by-step integration, best practices, and troubleshooting.",
        href: "https://maqsoftware.com/services/Power-BI/InstallationandUsageGuide",
    },
    {
        pill: "Best practices",
        title: "Power BI development standards",
        desc: "Authoritative guides from the MAQ Software community.",
        href: "https://maqsoftware.com/community/best-practices",
    },
    {
        pill: "Case studies",
        title: "Quality-control case studies",
        desc: "Real-world Power BI quality wins.",
        href: "https://maqsoftware.com/case-studies",
    },
];

export function CertyFASTInsights() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>CertyFAST insights and resources</h2>
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