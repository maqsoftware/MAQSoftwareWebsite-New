import { useProductPageStyles } from "../../../pages/products/productPageStyles";
import { ProductCaseStudies } from "../../../pages/products/productPlaceholders";

const studies = [
    {
        tag: "Cybersecurity",
        title: "Strengthening cybersecurity with Managed Identity and RBAC",
        teaser:
            "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access — the security backbone CertyFAST automates.",
        href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
    },
    {
        tag: "Secure Copilot",
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Reference design for shipping enterprise Copilots safely — patterns and guardrails CertyFAST helps you continuously enforce.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
    {
        tag: "Data governance",
        title: "Unifying data management with a centralized framework",
        teaser:
            "Centralized governance and access controls across distributed systems — a model CertyFAST helps certify on an ongoing basis.",
        href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
    },
];

export function CertyFASTCaseStudies() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <ProductCaseStudies heading="CertyFAST success stories" studies={studies} />
        </section>
    );
}
