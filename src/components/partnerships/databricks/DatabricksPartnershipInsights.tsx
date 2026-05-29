import { PartnershipInsights } from "../PartnershipInsights";

const blogs = [
    { title: "Delivering personalization intelligence with MLOps and Databricks CI/CD framework", href: "https://blog.maqsoftware.com/2025/08/delivering-personalization-intelligence.html" },
    { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
    { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
    { title: "Integrating Databricks with Power BI", href: "https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html" },
];

export function DatabricksPartnershipInsights() {
    return <PartnershipInsights eyebrow="Insights" title="Related blogs and case studies" items={blogs} />;
}
