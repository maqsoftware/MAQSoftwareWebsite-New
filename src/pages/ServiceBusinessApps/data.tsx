import type { ReactNode } from "react";
import {
    PeopleSearch24Regular,
    AppFolder24Regular,
    Grid24Regular,
    Code24Regular,
    ShieldTask24Regular,
    ArrowTrendingLines24Regular,
    PersonHeart24Regular,
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
        name: "Dynamics 365",
        tagline: "Intelligent applications for modern business",
        icon: <AppFolder24Regular />,
        description:
            "Implement intelligent business applications that streamline customer engagement, finance, operations, sales, and service management.",
        tags: ["Dynamics 365", "Sales", "Service", "Operations"],
    },
    {
        name: "Microsoft Power Platform",
        tagline: "Low-code solutions for rapid innovation",
        icon: <Grid24Regular />,
        description:
            "Accelerate digital transformation using low-code solutions for application development, workflow automation, analytics, and virtual agents.",
        tags: [
            "Power Platform",
            "Low-Code",
            "Automation",
            "Virtual Agents",
        ],
    },
    {
        name: "Power Apps",
        tagline: "Build enterprise apps with low code",
        icon: <Code24Regular />,
        description:
            "Develop secure low-code business applications that improve operational efficiency and connect seamlessly with enterprise data sources.",
        tags: [
            "Power Apps",
            "Low-Code Apps",
            "Enterprise Data",
            "Operational Efficiency",
        ],
    },
    {
        name: "Power Automate",
        tagline: "Intelligent workflow automation at scale",
        icon: <AppFolder24Regular />,
        description:
            "Automate repetitive business processes through intelligent workflows that improve productivity and reduce manual effort.",
        tags: ["Power Automate", "Workflows", "Process Automation", "Productivity"],
    },
    {
        name: "Customer 360",
        tagline: "Unified customer insights across channels",
        icon: <PeopleSearch24Regular />,
        description:
            "Create unified customer profiles by integrating enterprise data to deliver personalized experiences and informed business decisions.",
        tags: ["Customer 360", "Unified Profiles", "Personalization", "Insights"],
    },
    {
        name: "Workflow Automation & Process Optimization",
        tagline: "Streamlined processes through automation",
        icon: <ArrowTrendingLines24Regular />,
        description:
            "Optimize end-to-end business processes through intelligent automation, approvals, integrations, and operational efficiency improvements.",
        tags: ["Process Optimization", "Approvals", "Integrations", "Automation"],
    },
];

export interface Outcome {
    icon: ReactNode;
    title: string;
    desc: string;
}

export const outcomes: Outcome[] = [
    {
        icon: <ShieldTask24Regular />,
        title: "Future-proof technology",
        desc: "Use AI-driven insights to make smarter, data-backed decisions that propel your business forward.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Increased agility",
        desc: "Improve your ability to adapt to market changes quickly with flexible, scalable application architectures.",
    },
    {
        icon: <PersonHeart24Regular />,
        title: "Improved user experience",
        desc: "Deliver superior user experiences through modernized, intuitive applications that drive customer satisfaction.",
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
        tag: "Retail · Fabric",
        title:
            "Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric",
        teaser:
            "Modernizing a Direct Store Delivery operation with Microsoft Fabric so the field team gets real-time visibility into orders, stock, and exceptions.",
        href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
    {
        tag: "Dynamics 365 · UX",
        title:
            "Maximizing the power of Dynamics 365: User interface & user experience redesigned",
        teaser:
            "Redesigning the Dynamics 365 UI/UX so frontline users complete core tasks in fewer clicks with measurably higher adoption.",
        href: "https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html",
    },
    {
        tag: "Dynamics 365 · Productivity",
        title: "Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365",
        teaser:
            "A custom dynamic checklist control inside Dynamics 365 that guides users through complex multi-step processes without leaving the record.",
        href: "https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html",
    },
];

export interface Insight {
    title: string;
    teaser: string;
    href: string;
}

export const insights: Insight[] = [
    {
        title: "Microsoft Fabric: Powering Real-time Analytics for Retailers",
        teaser:
            "How Microsoft Fabric reshapes the retail analytics stack to enable real-time operational reporting.",
        href: "https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html",
    },
    {
        title: "Explore Best Practices for Creating Enterprise-Wide Knowledge Bots",
        teaser:
            "Patterns for building enterprise knowledge bots that ground answers in your own content and stay maintainable at scale.",
        href: "https://maqsoftware.com/insights/knowledge-bot-best-practices.html",
    },
    {
        title: "Microsoft Fabric: Empowering all personas",
        teaser:
            "How a single Fabric platform serves data engineers, analysts, scientists, and business users with the right tools for each.",
        href: "https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html",
    },
];
