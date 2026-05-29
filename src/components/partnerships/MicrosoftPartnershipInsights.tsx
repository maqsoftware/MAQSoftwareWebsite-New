import { PartnershipInsights } from "./PartnershipInsights";

const items = [
    {
        title: "Improving lead management and campaign optimization with Microsoft technologies",
        href: "/insights/case-studies",
    },
    {
        title: "Modernizing reporting platforms through AI-driven SQL Migration",
        href: "/insights/case-studies",
    },
    {
        title: "Improving event experience for thousands using AI Agents",
        href: "/insights/case-studies",
    },
    {
        title: "Transforming customer support with AIOps-driven Power BI Embedding",
        href: "/insights/case-studies",
    },
];

export function MicrosoftPartnershipInsights() {
    return (
        <PartnershipInsights
            eyebrow="Insights"
            title="Microsoft partnership insights"
            items={items}
        />
    );
}