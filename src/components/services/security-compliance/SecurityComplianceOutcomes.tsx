import {
    Shield24Regular,
    LockClosed24Regular,
    ArrowSync24Regular,
} from "@fluentui/react-icons";
import { ServiceOutcomes } from "../ServiceOutcomes";
import type { OutcomeItem } from "../ServiceOutcomes";

const outcomes: OutcomeItem[] = [
    {
        icon: <Shield24Regular />,
        title: "Increased threat protection",
        desc: "Strengthen your defense against cyber threats. Reduce the risk of breaches and downtime.",
    },
    {
        icon: <LockClosed24Regular />,
        title: "Data integrity",
        desc: "Ensure the confidentiality and integrity of your data. Safeguard your most valuable assets.",
    },
    {
        icon: <ArrowSync24Regular />,
        title: "Operational continuity",
        desc: "Maintain business continuity with robust security measures that protect against disruptions and ensure ongoing operations, even in the face of cyber-attacks.",
    },
];

export function SecurityComplianceOutcomes() {
    return (
        <ServiceOutcomes
            title="Your business outcomes"
            subhead="What organizations gain when security and compliance are delivered with engineering discipline."
            outcomes={outcomes}
        />
    );
}
