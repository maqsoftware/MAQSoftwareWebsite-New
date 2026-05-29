import { PartnershipOfferings } from "../PartnershipOfferings";

const offerings = [
    {
        eyebrow: "Data-first engineering",
        title: "Data Engineering",
        desc: "We build and optimize data pipelines for seamless integration and processing, ensuring reliable data transformations and efficient workflows on Databricks.",
    },
    {
        eyebrow: "ML lifecycles made practical",
        title: "Data Science and Machine Learning",
        desc: "We develop, train, and deploy machine learning models with Databricks, uncovering predictive insights and integrating them into business systems.",
    },
    {
        eyebrow: "Insights at scale",
        title: "Business Intelligence",
        desc: "We create interactive dashboards and analytics, helping organizations visualize data and make informed, data-driven decisions with confidence.",
    },
    {
        eyebrow: "Massive scale analytics",
        title: "Big Data Analytics",
        desc: "We analyze large datasets quickly with Databricks, enabling real-time analytics and empowering businesses with actionable insights.",
    },
    {
        eyebrow: "Governance & security",
        title: "Unity Catalog for Data Security and Governance",
        desc: "We ensure data integrity, security, and compliance with robust governance frameworks and continuous monitoring.",
    },
    {
        eyebrow: "Flexible storage",
        title: "Data Lakes and Warehousing",
        desc: "We implement scalable data lakes and warehouses, allowing cost-effective storage and quick access to large datasets.",
    },
    {
        eyebrow: "Real-time",
        title: "Real-Time Data Processing",
        desc: "We enable real-time streaming data solutions, letting businesses respond instantly to data changes and market trends.",
    },
];

export function DatabricksPartnershipOfferings() {
    return <PartnershipOfferings eyebrow="Our Capabilities" title="Our capabilities" sectionId="databricks-offerings" offerings={offerings} />;
}
