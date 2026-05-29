import { PartnershipOfferings } from "../PartnershipOfferings";

const offerings = [
    {
        eyebrow: "Accelerate Your Data Journey",
        title: "Microsoft Fabric & Power BI",
        desc: "We specialize in end-to-end Microsoft Fabric implementations, Power BI performance optimization, and enterprise-scale analytics. As a Fabric Featured Partner with 200+ implementations, we help organizations migrate to Fabric, optimize capacity utilization, and deliver near real-time insights through highly optimized data models and interactive dashboards.",
    },
    {
        eyebrow: "Intelligent Automation at Scale",
        title: "Agentic AI & Microsoft Copilot",
        desc: "Leverage our expertise in Microsoft Copilot Studio, Azure AI, and agentic architectures to build enterprise-grade AI agents. From legal contract management to sales automation and event management, we design and deploy intelligent agents that transform business processes and drive measurable efficiency gains.",
    },
    {
        eyebrow: "Modernize with Confidence",
        title: "Cloud Infrastructure & Migration",
        desc: "Simplify your cloud modernization journey with our proven migration frameworks for Azure. Whether migrating data warehouses, enterprise applications, or databases (Oracle, PostgreSQL, SQL Server to Azure), we ensure secure, high-performance transitions with minimal downtime and validated results.",
    },
    {
        eyebrow: "Empower Every Team",
        title: "Power Platform & Dynamics 365",
        desc: "We enable organizations to streamline operations with low-code solutions on Power Platform-from custom app development and process automation to Center of Excellence implementations. Our Dynamics 365 expertise extends to security audits, unified interface migrations, and intelligent business process optimization.",
    },
    {
        eyebrow: "Protect & Govern",
        title: "Security & Compliance",
        desc: "With specializations in Cloud Security and Threat Protection, we help organizations implement robust security postures across Azure, Microsoft 365, and hybrid environments. Our solutions span Microsoft Purview governance, identity management, and end-to-end data protection aligned with global compliance standards.",
    },
];

export function MicrosoftPartnershipOfferings() {
    return (
        <PartnershipOfferings
            eyebrow="Our Offerings"
            title="Accelerating Digital Transformation Through Our Microsoft Partnership"
            sectionId="microsoft-offerings"
            offerings={offerings}
        />
    );
}