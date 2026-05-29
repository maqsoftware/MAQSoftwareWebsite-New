import { PartnershipInsights } from "./PartnershipInsights";

const items = [
    {
        title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
        href: "/insights/case-studies",
    },
    {
        title: "Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer",
        href: "/insights/case-studies",
    },
    {
        title: "Enabling sales insights for global operations with Power BI and Snowflake",
        href: "/insights/case-studies",
    },
    {
        title: "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
        href: "/insights/case-studies",
    },
];

export function SnowflakePartnershipInsights() {
    return (
        <PartnershipInsights
            eyebrow="Insights"
            title="Snowflake partnership insights"
            items={items}
        />
    );
}