import { useProductPageStyles } from "../../../pages/products/productPageStyles";
import { ProductCaseStudies } from "../../../pages/products/productPlaceholders";

const studies = [
    {
        tag: "Power BI Embedded",
        title: "Delivering embedded Power BI reporting with EmbedFAST",
        teaser:
            "An ISV embeds Power BI into its SaaS product using the EmbedFAST accelerator — shipping multi-tenant analytics months faster.",
        href: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
    },
    {
        tag: "Self-service BI",
        title: "Empowering self-service using Custom Copilot agent with Power BI Embedded",
        teaser:
            "A custom Copilot agent over Power BI Embedded letting users ask data questions in plain English — reducing report request backlog.",
        href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html",
    },
    {
        tag: "Retail BI",
        title: "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
        teaser:
            "Re-platforming a global retailer's reporting estate onto Microsoft Fabric and Power BI with a unified, embeddable semantic model.",
        href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
    },
];

export function EmbedFASTCaseStudies() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <ProductCaseStudies heading="Embedding success stories" studies={studies} />
        </section>
    );
}
