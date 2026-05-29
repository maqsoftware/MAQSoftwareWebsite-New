import { MarketplaceOffers } from "../MarketplaceOffers";

const offers = [
    {
        pill: "Risk & compliance",
        title: "Risk & Compliance Analytics for Financial Services: 4-Week PoC",
        desc: "A 4-week proof of concept that unifies risk, compliance, and audit data on Microsoft Fabric to expose regulatory gaps and accelerate reporting cycles.",
        href: "#",
    },
    {
        pill: "FP&A",
        title: "Finance Close Automation for Financial Services: 2-Week Assessment",
        desc: "A 2-week assessment that evaluates your month-end close estate on Microsoft Fabric, identifying automation opportunities for faster, audit-ready financial close.",
        href: "#",
    },
    {
        pill: "Lending",
        title: "Lending Analytics & Credit Intelligence: 4-Week PoC",
        desc: "A 4-week proof of concept that benchmarks your credit scoring and lending analytics pipeline on Databricks or Fabric, surfacing opportunities to reduce decisioning latency and improve approval accuracy.",
        href: "#",
    },
    {
        pill: "Insurance",
        title: "Claims Processing Intelligence for Insurance: 2-Week Assessment",
        desc: "A 2-week assessment that maps your claims intake workflow and identifies AI automation opportunities to cut cycle time and enforce policy-rule compliance.",
        href: "#",
    },
];

export function FinancialServicesMarketplaceOffers() {
    return (
        <MarketplaceOffers
            sub="Accelerate financial outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning risk & compliance, FP&A automation, lending intelligence, and claims processing."
            offers={offers}
        />
    );
}