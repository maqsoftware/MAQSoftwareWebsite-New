import {
    Cloud24Regular,
    DataTrending24Regular,
    People24Regular,
    PlugConnected24Regular,
    ScaleFill24Regular,
    Shield24Regular,
} from "@fluentui/react-icons";
import { PartnershipValueProps } from "./PartnershipValueProps";

const items = [
    {
        icon: <Cloud24Regular />,
        title: "Unified Platform",
        desc: "A comprehensive cloud ecosystem spanning infrastructure, data, AI, and productivity-all integrated under one platform.",
    },
    {
        icon: <DataTrending24Regular />,
        title: "AI-Powered Insights",
        desc: "Harness Azure AI, Copilot, and Fabric to turn raw data into actionable intelligence with built-in machine learning and generative AI.",
    },
    {
        icon: <Shield24Regular />,
        title: "Enterprise Security",
        desc: "Protect your organization with industry-leading security, compliance, and governance built into every layer of the Microsoft stack.",
    },
    {
        icon: <ScaleFill24Regular />,
        title: "Scalable",
        desc: "Seamlessly scale from small teams to global enterprises with elastic compute, serverless architectures, and consumption-based pricing.",
    },
    {
        icon: <PlugConnected24Regular />,
        title: "Deeply Integrated",
        desc: "Benefit from native integration across Azure, Microsoft 365, Dynamics 365, Power Platform, and GitHub for frictionless workflows.",
    },
    {
        icon: <People24Regular />,
        title: "Trusted Ecosystem",
        desc: "Join a global network of partners and customers backed by Microsoft's enterprise support, training, and continuous innovation.",
    },
];

export function MicrosoftPartnershipValueProps() {
    return (
        <PartnershipValueProps
            eyebrow="Why Microsoft?"
            title="Why organizations choose Microsoft"
            items={items}
        />
    );
}