import { PartnershipMarketplace } from "../PartnershipMarketplace";

const guides = [
    { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
    { title: "Databricks best practice guide", href: "https://maqsoftware.com/insights/databricks-best-practices.html" },
    { title: "Azure Databricks best practice guide", href: "https://maqsoftware.com/insights/azure-databricks-best-practices.html" },
    { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
    { title: "Integrating Databricks with Power BI", href: "https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html" },
    { title: "Real-time structured streaming in Databricks: Powering modern data applications", href: "https://blog.maqsoftware.com/2025/09/real-time-structured-streaming-in.html" },
    { title: "Databricks Genie and AI/BI Dashboards: Revolutionizing data analytics", href: "https://blog.maqsoftware.com/2025/09/databricks-genie-and-aibi-dashboards.html" },
];

const guideBulletGroups = [
    {
        title: "Guides",
        items: guides.map((g) => (
            <a key={g.href} href={g.href} target="_blank" rel="noreferrer">
                {g.title}
            </a>
        )),
    },
];

export function DatabricksPartnershipMarketplace() {
    return (
        <PartnershipMarketplace
            eyebrow="Databricks Guides"
            title="Databricks guides"
            sectionId="databricks-guides"
            intro=""
            bulletGroups={guideBulletGroups}
            ctaLabel="Learn more"
            ctaHref="/insights"
        />
    );
}
