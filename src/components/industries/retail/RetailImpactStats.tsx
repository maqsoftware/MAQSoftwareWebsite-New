import { ImpactStats } from "../ImpactStats";

const stats = [
    {
        metric: "8×",
        label: "Faster Power BI refresh for a top-3 US retailer",
        sourceLabel: "Microsoft Fabric BI modernization",
        sourceHref: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
    },
    {
        metric: "Real-time",
        label: "Direct Store Delivery visibility on Microsoft Fabric",
        sourceLabel: "Real-time DSD case study",
        sourceHref: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
    {
        metric: "< 1 min",
        label: "Live KPIs replacing nightly batches at an organic supermarket chain",
        sourceLabel: "Organic supermarket case study",
        sourceHref: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
    },
    {
        metric: "Personalized",
        label: "Loyalty program lift across millions of members",
        sourceLabel: "Loyalty program case study",
        sourceHref: "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
    },
];

export function RetailImpactStats() {
    return (
        <ImpactStats
            eyebrow="Proven outcomes"
            title="Real impact for retail leaders"
            sub="Numbers from MAQ Software engagements with global retailers and CPG brands."
            stats={stats}
        />
    );
}