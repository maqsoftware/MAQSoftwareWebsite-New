import { IndustryCaseStudies } from "../IndustryCaseStudies";

const cases = [
    {
        tag: "Agentic AI",
        title: "Reshaping retail with agentic AI solutions",
        teaser:
            "Agentic AI deployed across pricing, merchandising, and store operations — unlocking faster decisions and resilient supply chains for a global retailer.",
        href: "https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html",
    },
    {
        tag: "Grocery · Fabric",
        title: "Transforming grocery retail analytics with Microsoft Fabric",
        teaser:
            "Modernize grocery analytics on Fabric for sharper category, basket and supply-chain insights.",
        href: "https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html",
    },
    {
        tag: "Direct Store Delivery",
        title: "Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric",
        teaser:
            "Deliver real-time DSD visibility on Fabric so field operations can act on live route and stock data.",
        href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
];

export function RetailCaseStudies() {
    return (
        <IndustryCaseStudies
            eyebrow="Retail case studies"
            title="How retailers move faster with MAQ Software"
            cases={cases}
            seeAllLabel="See all retail case studies"
            seeAllHref="https://maqsoftware.com/case-studies"
        />
    );
}