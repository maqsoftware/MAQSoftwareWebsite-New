import {
    Pulse24Regular,
    Warning24Regular,
    Wrench24Regular,
    Eye24Regular,
} from "@fluentui/react-icons";
import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

const features = [
    {
        icon: <Pulse24Regular />,
        title: "24/7 health monitoring",
        desc: "Capacity utilization, refresh SLAs, and item failures tracked across every workspace and domain in your tenant.",
    },
    {
        icon: <Warning24Regular />,
        title: "Proactive risk alerts",
        desc: "Surface issues before business users hit broken reports or throttled queries — alerts correlated, not noisy.",
    },
    {
        icon: <Wrench24Regular />,
        title: "One-click remediation",
        desc: "Suggested fixes (resize capacity, reassign workspace, archive orphaned items) execute with full audit trail.",
    },
    {
        icon: <Eye24Regular />,
        title: "Tenant-wide visibility",
        desc: "A single pane across capacities, domains, workspaces, lakehouses, warehouses, and semantic models.",
    },
];

export function FabricAdminAgentFeatures() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.sectionAlt} id="fabric-admin-features">
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Capabilities</span>
                    <h2 className={s.titleLg}>What the Fabric Admin Agent does for you</h2>
                </div>
                <div className={s.featGrid}>
                    {features.map((feature) => (
                        <div key={feature.title} className={s.feat}>
                            <div className={s.featHead}>
                                <span className={s.featIconBox}>{feature.icon}</span>
                                <div className={s.featTitle}>{feature.title}</div>
                            </div>
                            <p className={s.featDesc}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
