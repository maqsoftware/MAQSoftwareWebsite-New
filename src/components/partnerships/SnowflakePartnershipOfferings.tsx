import { PartnershipOfferings } from "./PartnershipOfferings";

const offerings = [
    {
        eyebrow: "Fast, Secure, and Hassle-Free",
        title: "Data Warehouse Migration to Snowflake",
        desc: "Simplify your data migration journey with MAQ Software's end-to-end Snowflake migration solutions-ensuring a seamless, secure, and high-performance transition through automated frameworks, optimized ETL, and zero-downtime execution from on-prem, legacy, or cloud sources.",
    },
    {
        eyebrow: "Faster Insights, Smarter Decisions",
        title: "Business Intelligence with Snowflake & Power BI",
        desc: "We help organizations unlock the full potential of Power BI on Snowflake by delivering lightning-fast query execution and highly optimized data models. By leveraging Snowflake's intelligent caching and elastic compute scaling, we ensure seamless, real-time analytics and interactive dashboards-empowering swift data-driven decisions.",
    },
    {
        eyebrow: "Transforming Data into Instant Insights",
        title: "Real-Time Analytics",
        desc: "With real-time analytics in Snowflake, we help businesses ingest, process, and analyze streaming data for faster decision-making. Our expertise in Snowflake Stream, Tasks, and external integrations like Kafka and Azure Event Hubs ensures organizations can act on insights in real time.",
    },
    {
        eyebrow: "Powering Intelligent Business Decisions",
        title: "Advanced Analytics and AI/ML",
        desc: "We leverage Snowflake's AI/ML capabilities-integrating Snowpark, Python, and ML models-to drive predictive analytics, anomaly detection, and intelligent automation. From customer segmentation and fraud detection to demand forecasting, we turn raw data into actionable insights that enhance decision-making and operational efficiency.",
    },
    {
        eyebrow: "Turning Data into Revenue",
        title: "Embedded Analytics and Data Monetization",
        desc: "We enable organizations to monetize their data assets by embedding Snowflake-powered analytics into applications and customer portals. Our expertise in API-based data sharing, multi-tenant architectures, and white-labeled analytics solutions helps businesses create scalable, revenue-generating insights.",
    },
];

export function SnowflakePartnershipOfferings() {
    return (
        <PartnershipOfferings
            eyebrow="Our Offerings"
            title="Driving Data Strategy Excellence Through Our Global Snowflake Partnership"
            sectionId="snowflake-offerings"
            offerings={offerings}
        />
    );
}