import { useProductPageStyles } from "../../pages/productPageStyles";
import { ProductCaseStudies } from "../../pages/productPlaceholders";

const studies = [
    {
        tag: "Self-service BI",
        title: "Empowering self-service using Custom Copilot agent with Power BI Embedded",
        teaser:
            "A custom Copilot agent over Power BI Embedded letting business users ask data questions in plain English — reducing report request backlog.",
        href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html",
    },
    {
        tag: "Fabric data agent",
        title: "Delivering accurate business intelligence insights with a Fabric data agent",
        teaser:
            "A Microsoft Fabric data agent answering business questions with citation-backed accuracy, replacing brittle hand-built dashboards.",
        href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
    },
    {
        tag: "Information retrieval",
        title: "Streamlining information retrieval with AI Copilots",
        teaser:
            "Enterprise AI Copilots that ground answers in organizational content — dramatically improving knowledge worker productivity.",
        href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
    },
];

export function AIDataLensCaseStudies() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <ProductCaseStudies
                heading="Real-world AI-DataLens wins"
                studies={studies}
            />
        </section>
    );
}
