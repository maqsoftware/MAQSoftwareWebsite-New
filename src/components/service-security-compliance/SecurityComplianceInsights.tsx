import { ServiceInsights } from "../service/ServiceInsights";
import type { InsightItem } from "../service/ServiceInsights";

const insights: InsightItem[] = [
    {
        title: "Strengthen your cloud security and protect your assets with 19 security best practices",
        teaser:
            "Field-tested Azure security best practices covering identity, network, data, and operations layers.",
        href: "/insights/azure-security-best-practices",
    },
    {
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
    {
        title: "Strengthening cybersecurity with Managed Identity and RBAC",
        teaser:
            "Eliminate credential sprawl with Azure Managed Identity and enforce least-privilege access with RBAC.",
        href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
    },
];

export function SecurityComplianceInsights() {
    return (
        <ServiceInsights
            title="Our security insights"
            subhead="See our research that goes into optimizing our security service."
            insights={insights}
        />
    );
}
