import { ImpactStats } from "../ImpactStats";

const stats = [
    {
        metric: "~70%",
        label: "Faster feature delivery via AI-assisted rapid prototyping at a global software company",
        sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
        sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        metric: "4×",
        label: "Faster embedded analytics rollout — 12-month roadmap delivered in 3 months",
        sourceLabel: "Delivering embedded Power BI reporting with EmbedFAST",
        sourceHref: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
    },
    {
        metric: "~90%",
        label: "Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST",
        sourceLabel: "Get ideas to code from months to hours with DevelopFAST",
        sourceHref: "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
    },
    {
        metric: "~50%",
        label: "Test case creation time savings with AI-generated test suites",
        sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
        sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
];

export function TechnologyImpactStats() {
    return (
        <ImpactStats
            eyebrow="Proven outcomes"
            title="Real impact for technology leaders"
            sub="Numbers from MAQ Software engagements with global ISVs and enterprise software organizations."
            stats={stats}
        />
    );
}