import { IndustryCaseStudies } from "../IndustryCaseStudies";

const cases = [
    {
        tag: "AI frameworks",
        title: "Empowering businesses with AI: Frameworks that deliver results",
        teaser:
            "Field-tested AI frameworks — from knowledge bots to content generation — directly applicable to clinical and life-sciences workflows that demand measurable outcomes.",
        href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
    },
    {
        tag: "Secure Copilot",
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Reference design for shipping enterprise Copilots safely — directly applicable to PHI-handling clinical and life-sciences environments.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
    {
        tag: "AI Center of Excellence",
        title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
        teaser:
            "A proven CoE blueprint for moving pilot interest into enterprise-wide adoption — particularly relevant for health systems and life-sciences orgs scaling AI safely.",
        href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
    },
];

export function HealthcareLifeSciencesCaseStudies() {
    return (
        <IndustryCaseStudies
            eyebrow="Healthcare & life sciences case studies"
            title="How regulated organizations move faster with MAQ Software"
            cases={cases}
            seeAllLabel="See all case studies"
            seeAllHref="https://maqsoftware.com/case-studies"
        />
    );
}