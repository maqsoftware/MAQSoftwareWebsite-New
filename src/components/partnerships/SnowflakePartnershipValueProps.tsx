import {
    Checkmark24Regular,
    Link24Regular,
    LockClosed24Regular,
    Money24Regular,
    ScaleFill24Regular,
    Shield24Regular,
} from "@fluentui/react-icons";
import { PartnershipValueProps } from "./PartnershipValueProps";

const items = [
    {
        icon: <Checkmark24Regular />,
        title: "Easy",
        desc: "Managed platform that adapts to your business and teams",
    },
    {
        icon: <Link24Regular />,
        title: "Connected",
        desc: "Join, share and leverage data in friction free ecosystem",
    },
    {
        icon: <Shield24Regular />,
        title: "Trusted",
        desc: "Interoperability of data across clouds, with universal governance at scale",
    },
    {
        icon: <Money24Regular />,
        title: "Cost-Effective",
        desc: "Pay-as-you-use pricing-eliminating overprovisioning and reducing total cost of ownership.",
    },
    {
        icon: <LockClosed24Regular />,
        title: "Secure",
        desc: "Ensure enterprise-grade data protection with end-to-end encryption, robust access controls, and compliance with global security standards.",
    },
    {
        icon: <ScaleFill24Regular />,
        title: "Flexible",
        desc: "Seamlessly scale storage and compute independently to match your workload needs, whether for batch processing or real-time analytics.",
    },
];

export function SnowflakePartnershipValueProps() {
    return (
        <PartnershipValueProps
            eyebrow="Why Snowflake?"
            title="Why organizations choose Snowflake"
            items={items}
        />
    );
}