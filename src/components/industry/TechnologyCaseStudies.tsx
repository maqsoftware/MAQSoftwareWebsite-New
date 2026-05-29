import { IndustryCaseStudies } from "./IndustryCaseStudies";

const cases = [
    {
        tag: "Agentic AI",
        title: "Accelerating software development with agentic AI solutions",
        teaser:
            "Agentic AI woven through SDLC to accelerate coding, review and release.",
        href: "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
    },
    {
        tag: "GitHub Copilot",
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "Adopt GitHub Copilot at scale to lift dev productivity and quality.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        tag: "AI scaling",
        title: "Scaling AI for every customer and every developer with MAQ Software",
        teaser:
            "A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise.",
        href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
    },
];

export function TechnologyCaseStudies() {
    return (
        <IndustryCaseStudies
            eyebrow="Technology case studies"
            title="How technology organizations move faster with MAQ Software"
            cases={cases}
            seeAllLabel="See all technology case studies"
            seeAllHref="https://maqsoftware.com/case-studies"
        />
    );
}