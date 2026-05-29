import { ServiceCaseStudies } from "../service/ServiceCaseStudies";
import type { CaseStudyItem } from "../service/ServiceCaseStudies";

const caseStudies: CaseStudyItem[] = [
    {
        tag: "Secure Copilot",
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Reference design for shipping enterprise Copilots safely — patterns, guardrails, and identity controls for production deployment.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
    {
        tag: "Cybersecurity",
        title: "Strengthening cybersecurity with Managed Identity and RBAC",
        teaser:
            "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access using RBAC across the cloud estate.",
        href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
    },
    {
        tag: "Data governance",
        title: "Unifying data management with a centralized framework",
        teaser:
            "Establishing centralized data governance and access controls across distributed systems for improved compliance posture.",
        href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
    },
];

export function SecurityComplianceCaseStudies() {
    return (
        <ServiceCaseStudies
            title="How clients are strengthening their security posture"
            studies={caseStudies}
            footerLabel="See all security case studies"
            footerHref="https://maqsoftware.com/case-studies.html?filter=security"
        />
    );
}
