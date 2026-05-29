import { IndustryCaseStudies } from "./IndustryCaseStudies";

const cases = [
    {
        tag: "Fintech",
        title: "Enhancing fintech analytics to provide millions of borrowers with better loan options",
        teaser:
            "Real-time lending analytics platform on Microsoft Fabric helping millions of borrowers match to the right loan product.",
        href: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
    },
    {
        tag: "Finance operations",
        title: "Transforming finance with agentic AI solutions",
        teaser:
            "Agentic AI deployed across finance close, reconciliation, and FP&A for faster cycles and full audit traceability.",
        href: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
    },
    {
        tag: "Data platform",
        title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
        teaser:
            "Siloed financial data sources unified on OneLake for a single governed surface powering reporting and risk analytics.",
        href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
    },
];

export function FinancialServicesCaseStudies() {
    return (
        <IndustryCaseStudies
            eyebrow="Financial services case studies"
            title="How financial firms move faster with MAQ Software"
            cases={cases}
            seeAllLabel="See all financial services case studies"
            seeAllHref="https://maqsoftware.com/case-studies"
        />
    );
}