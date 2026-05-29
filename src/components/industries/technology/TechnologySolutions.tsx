import {
    Bot24Regular,
    ChartMultiple24Regular,
    Lightbulb24Regular,
    Search24Regular,
} from "@fluentui/react-icons";
import { SolutionShowcase } from "../SolutionShowcase";

const agents = [
    {
        name: "DevelopFAST",
        tagline: "From feature idea to production-ready code",
        icon: <Lightbulb24Regular />,
        description:
            "Transforms raw feature inputs into structured user stories, technical plans, test cases, and code using generative AI. A reflection phase interprets requirements, proposes three solution approaches, and auto-generates pseudocode and production-grade code. Bug resolution planning reduced from 5 hours to 30 minutes (~90% improvement). Test case creation achieves ~50% time savings.",
    },
    {
        name: "EmbedFAST",
        tagline: "Enterprise-grade Power BI embedding in weeks",
        icon: <ChartMultiple24Regular />,
        description:
            "Production-ready accelerator for Power BI embedded analytics. Ships export, bookmark, subscription, paginated reporting, and admin-level controls for managing subscriptions and report authoring. Reduced implementation timeline from 12 months to 3 months for a global software company. Minimizes custom development through prebuilt, scalable components.",
    },
    {
        name: "PR Review & Coding Standards Agent",
        tagline: "Consistent quality across every commit",
        icon: <Search24Regular />,
        description:
            "Evaluates PRs, flags style violations, detects anti-patterns, and drafts review comments. Improves code quality and reduces review effort across teams. Part of MAQ Software's agentic AI suite for accelerating software development workflows.",
    },
    {
        name: "Test Case Generation Agent",
        tagline: "Automated test design from requirements",
        icon: <Bot24Regular />,
        description:
            "Generates test cases from requirements and code changes, and links them to user stories. Improves coverage and reduces test planning time. Integrated into CI/CD workflows to speed up releases by ~30%.",
    },
];

export function TechnologySolutions() {
    return (
        <SolutionShowcase
            sectionId="technology-solutions"
            eyebrow="Agentic AI"
            title="Make your engineering teams smarter with our Technology Agents"
            agents={agents}
            industryLabel="Technology"
        />
    );
}