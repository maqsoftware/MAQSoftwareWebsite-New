import { useProductPageStyles } from "../../pages/productPageStyles";
import { ProductCaseStudies } from "../../pages/productPlaceholders";

const studies = [
    {
        tag: "Real-time streaming",
        title: "Increasing efficiency by switching from batch processing to real-time streaming",
        teaser:
            "Replacing overnight batch with real-time streaming pipelines — the LoadFAST sweet spot for high-volume ingestion.",
        href: "https://blog.maqsoftware.com/2024/07/increasing-efficiency-by-switching-from.html",
    },
    {
        tag: "Snowflake · Iceberg",
        title: "Optimizing data refresh by integrating Snowflake Iceberg tables with Microsoft Fabric",
        teaser:
            "Snowflake Iceberg tables integrated with Microsoft Fabric to dramatically reduce data refresh latency and storage cost.",
        href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
    },
    {
        tag: "Databricks",
        title: "Unlocking advanced analytics with Databricks",
        teaser:
            "Building an advanced analytics platform on Databricks supporting ML, streaming, and large-scale data engineering workloads.",
        href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html",
    },
];

export function LoadFASTCaseStudies() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <ProductCaseStudies heading="LoadFAST success stories" studies={studies} />
        </section>
    );
}
