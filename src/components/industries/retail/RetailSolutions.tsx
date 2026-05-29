import {
    ArrowTrendingLines24Regular,
    BuildingShop24Regular,
    Chat24Regular,
    Clock24Regular,
} from "@fluentui/react-icons";
import { SolutionShowcase } from "../SolutionShowcase";

const agents = [
    {
        name: "What-If Pricing Agent",
        tagline: "Pricing simulation",
        icon: <ArrowTrendingLines24Regular />,
        description:
            "Simulate pricing decisions before execution using multi-agent AI. Explore the power of pricing without the risk. Our agent simulates real-world pricing shifts, demand patterns, competitive moves, and procurement scenarios before you make a single change. See how each decision impacts revenue, margins, and supplier costs in seconds.",
    },
    {
        name: "Monday Morning Intel",
        tagline: "Weekly briefings",
        icon: <Clock24Regular />,
        description:
            "Start every week with a curated executive briefing. The agent consolidates weekend sales, inventory movement, supply alerts, and competitive news into a one-page digest delivered before 9 a.m. Monday.",
    },
    {
        name: "FindFAST",
        tagline: "Chat with your data",
        icon: <Chat24Regular />,
        description:
            "Natural-language interface over your Microsoft Fabric estate. Ask retail questions the way you'd ask a colleague — basket mix, regional shrink, vendor performance — and get governed, citation-backed answers in seconds.",
    },
    {
        name: "Smart Store Agent",
        tagline: "Connected store operations",
        icon: <BuildingShop24Regular />,
        description:
            "Copilot-powered assistant for store managers. Surfaces live sales, inventory, and workforce signals, then suggests guided next actions — from re-merchandising slow movers to re-routing labor.",
    },
];

export function RetailSolutions() {
    return (
        <SolutionShowcase
            sectionId="retail-solutions"
            eyebrow="Agentic AI"
            title="Make your retail operations smarter with our Retail Agents"
            agents={agents}
        />
    );
}