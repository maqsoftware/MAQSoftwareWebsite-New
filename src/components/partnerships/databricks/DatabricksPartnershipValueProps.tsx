import {
    Checkmark24Regular,
    Link24Regular,
    Shield24Regular,
    Sparkle24Regular,
    Lightbulb24Regular,
    People24Regular,
} from "@fluentui/react-icons";
import { PartnershipValueProps } from "../PartnershipValueProps";

const whyDatabricks = [
    { icon: <Checkmark24Regular />, title: "Unified", desc: "One platform for all your data, analytics, and AI needs." },
    { icon: <Sparkle24Regular />, title: "Scalable", desc: "Effortlessly grow with your business and data demands." },
    { icon: <People24Regular />, title: "Collaborative", desc: "Empower teams to innovate together in real time." },
    { icon: <Shield24Regular />, title: "Secure", desc: "Enterprise-grade security to safeguard your information." },
    { icon: <Lightbulb24Regular />, title: "Fast", desc: "Accelerate insights with lightning-speed processing." },
    { icon: <Link24Regular />, title: "Innovative", desc: "Stay ahead with the latest AI and analytics advancements." },
];

export function DatabricksPartnershipValueProps() {
    return <PartnershipValueProps eyebrow="Why Databricks?" title="Why Databricks?" items={whyDatabricks} />;
}
