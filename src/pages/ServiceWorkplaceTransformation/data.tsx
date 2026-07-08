import type { ReactNode } from "react";
import {
    Sparkle24Regular,
    Globe24Regular,
    PeopleTeam24Regular,
    Code24Regular,
    Rocket24Regular,
    ArrowTrendingLines24Regular,
} from "@fluentui/react-icons";

export interface Capability {
    name: string;
    tagline: string;
    description: string;
    icon: ReactNode;
    tags: string[];
}

export const capabilities: Capability[] = [
    {
        name: "Microsoft Copilot adoption & governance",
        tagline: "Drive AI-assisted productivity at scale",
        icon: <Sparkle24Regular />,
        description:
            "Accelerate Microsoft 365 Copilot rollout with structured readiness assessments, persona-based enablement, and governance controls. We design Centers of Excellence, adoption dashboards, and prompt libraries so every role sees measurable time savings within weeks — not months.",
        tags: ["M365 Copilot", "Copilot Studio", "Viva Insights", "Adoption Score"],
    },
    {
        name: "Modern intranet & collaboration platforms",
        tagline: "Connect employees to knowledge and each other",
        icon: <Globe24Regular />,
        description:
            "Design and deploy SharePoint Online intranets, Teams-based workspaces, and Viva Connections experiences that unify communications, knowledge management, and day-to-day collaboration. We build information architectures that scale from 500 to 500,000 users without sprawl.",
        tags: ["SharePoint Online", "Microsoft Teams", "Viva Connections", "Power Pages"],
    },
    {
        name: "Employee experience & Viva suite",
        tagline: "Measure and improve how people work",
        icon: <PeopleTeam24Regular />,
        description:
            "Deploy Microsoft Viva modules — Insights, Learning, Engage, and Goals — to give leaders visibility into work patterns and give employees personalized learning paths, recognition, and goal alignment. We integrate Viva data with Power BI for executive-ready people analytics.",
        tags: ["Viva Insights", "Viva Learning", "Viva Engage", "Power BI"],
    },
    {
        name: "Developer productivity & GitHub Copilot",
        tagline: "Ship code faster with AI pair programming",
        icon: <Code24Regular />,
        description:
            "Roll out GitHub Copilot across engineering teams with hackathons, best-practice playbooks, usage dashboards, and CI/CD integration. Our proven enablement framework delivers ~40% reduction in coding time and ~50% faster test automation within the pilot phase.",
        tags: ["GitHub Copilot", "Azure DevOps", "CI/CD", "Copilot Metrics"],
    },
];

export interface Outcome {
    icon: ReactNode;
    title: string;
    desc: string;
}

export const outcomes: Outcome[] = [
    {
        icon: <Rocket24Regular />,
        title: "Accelerated time to value",
        desc: "Reduce onboarding-to-productivity time by deploying structured adoption programs that achieve 70%+ active usage within 60 days.",
    },
    {
        icon: <PeopleTeam24Regular />,
        title: "Unified employee experience",
        desc: "Consolidate disconnected tools into a single Microsoft 365 surface — reducing context switches and improving satisfaction scores.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Measurable productivity gains",
        desc: "Track real outcomes with Copilot usage analytics and Viva Insights — translating tool adoption into hours saved per employee per week.",
    },
];

export interface CaseStudy {
    tag: string;
    title: string;
    teaser: string;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    {
        tag: "Developer productivity",
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "Embedding GitHub Copilot across the SDLC with adoption playbooks, governance, and outcome telemetry — delivering ~70% faster prototyping and ~55% faster refactoring.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        tag: "AI adoption",
        title: "Scaling AI for every customer and every developer with MAQ Software",
        teaser:
            "A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise.",
        href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
    },
    {
        tag: "Knowledge management",
        title: "Streamlining information retrieval with AI Copilots",
        teaser:
            "Enterprise AI Copilots that ground answers in organizational content — dramatically improving information retrieval productivity for knowledge workers.",
        href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
    },
];

export interface Insight {
    title: string;
    teaser: string;
    href: string;
}

export const insights: Insight[] = [
    {
        title: "Empowering businesses with AI: Frameworks that deliver results",
        teaser:
            "Field-tested frameworks for deploying AI capabilities — from knowledge bots to content generation — that produce measurable business outcomes.",
        href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
    },
    {
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "How a global organization embedded GitHub Copilot across development, testing, and deployment to transform engineering productivity.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot deployment that maintains data governance.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
];
