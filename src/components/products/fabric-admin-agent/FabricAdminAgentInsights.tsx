import { Button } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

const insights = [
    {
        pill: "AppSource",
        title: "Fabric Admin Agent on Microsoft AppSource",
        desc: "Install the agent directly from Microsoft AppSource and start protecting your Fabric capacities today.",
        href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08",
    },
    {
        pill: "Consulting offers",
        title: "MAQ Software offers on Azure Marketplace",
        desc: "Browse all Azure Marketplace consulting offers from MAQ Software — Fabric, Power BI, AI, and modernization engagements.",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
    },
    {
        pill: "Case studies",
        title: "Fabric & analytics case studies",
        desc: "Real customer stories on Microsoft Fabric, Power BI modernization, governance, and FinOps.",
        href: "https://maqsoftware.com/case-studies",
    },
    {
        pill: "Best practices",
        title: "Fabric & Power BI best-practice guides",
        desc: "Authoritative guides on Fabric capacity sizing, Power BI optimization, and governance — from the MAQ Software community.",
        href: "https://maqsoftware.com/community/best-practices",
    },
    {
        pill: "Engineering blog",
        title: "Inside Fabric Admin Agent",
        desc: "Engineering posts on agent architecture, anomaly detection, capacity forecasting, and remediation playbooks.",
        href: "https://blog.maqsoftware.com/search/label/Microsoft%20Fabric",
    },
    {
        pill: "Talk to us",
        title: "Schedule a 30-minute walkthrough",
        desc: "Have a tenant in mind? Email customersuccess@maqsoftware.com and we'll set up a personalized walkthrough.",
        href: "mailto:customersuccess@maqsoftware.com?subject=Fabric%20Admin%20Agent%20-%20Walkthrough",
    },
];

export function FabricAdminAgentInsights() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Insights</span>
                    <h2 className={s.titleLg}>Fabric Admin Agent insights and resources</h2>
                    <p className={s.sub}>
                        Get the agent from Microsoft AppSource, browse Azure Marketplace
                        consulting offers, and explore deeper guidance from MAQ Software.
                    </p>
                </div>
                <div className={s.banner}>
                    <div>
                        <span className={s.bannerEyebrow}>Microsoft AppSource · Preview</span>
                        <h3 className={s.bannerTitle}>
                            Get Fabric Admin Agent on Microsoft Marketplace
                        </h3>
                        <p className={s.bannerDesc}>
                            Deploy the Fabric Admin Agent directly from Microsoft AppSource.
                            Preview is available now — start optimizing your Fabric
                            capacities in minutes.
                        </p>
                    </div>
                    <div className={s.bannerBtns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            as="a"
                            href="https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Get it now
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            as="a"
                            href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Browse all consulting offers
                        </Button>
                    </div>
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