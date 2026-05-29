import { ImpactStats } from "./ImpactStats";

const stats = [
    {
        metric: "Millions",
        label: "Borrowers matched to better loan options with real-time lending analytics",
        sourceLabel: "Fintech analytics case study",
        sourceHref: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
    },
    {
        metric: "< 1 week",
        label: "Month-end close compressed from 18+ days with agentic AI finance automation",
        sourceLabel: "Finance agentic AI case study",
        sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
    },
    {
        metric: "Real-time",
        label: "Credit decisioning replacing overnight batch scoring for faster loan approvals",
        sourceLabel: "Fintech analytics case study",
        sourceHref: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
    },
    {
        metric: "100%",
        label: "Audit traceability on reconciled transactions with Fabric-native lineage",
        sourceLabel: "Finance agentic AI case study",
        sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
    },
];

export function FinancialServicesImpactStats() {
    return (
        <ImpactStats
            eyebrow="Proven outcomes"
            title="Real impact for financial services leaders"
            sub="Numbers from MAQ Software engagements with banks, insurers, and fintech firms."
            stats={stats}
        />
    );
}