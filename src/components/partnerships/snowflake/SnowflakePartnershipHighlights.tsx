import { PartnershipHighlights } from "../PartnershipHighlights";

const stats = [
    { metric: "150+", label: "SnowPro Core Certified Associates" },
    { metric: "25+", label: "SnowPro Advanced Certified Associates" },
    { metric: "10+", label: "Implementations for Enterprise Clients" },
    { metric: "1", label: "Marketplace Offerings" },
];

export function SnowflakePartnershipHighlights() {
    return (
        <PartnershipHighlights
            eyebrow="Partnership Highlights"
            title="Snowflake partnership at a glance"
            stats={stats}
        />
    );
}