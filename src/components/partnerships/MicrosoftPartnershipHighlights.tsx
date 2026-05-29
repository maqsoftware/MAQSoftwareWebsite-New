import { PartnershipHighlights } from "./PartnershipHighlights";

const stats = [
    { metric: "9", label: "Microsoft Specializations" },
    { metric: "5K+", label: "Microsoft Technical Certifications" },
    { metric: "200+", label: "Microsoft Fabric Solutions Implemented" },
    { metric: "43", label: "Certified Power BI Custom Visuals" },
];

export function MicrosoftPartnershipHighlights() {
    return (
        <PartnershipHighlights
            eyebrow="Partnership Highlights"
            title="Microsoft partnership at a glance"
            stats={stats}
        />
    );
}