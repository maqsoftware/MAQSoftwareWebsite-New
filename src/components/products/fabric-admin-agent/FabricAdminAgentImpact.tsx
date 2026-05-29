import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

const impact = [
    {
        metric: "60%",
        label: "Fewer capacity incidents after enabling autonomous monitoring",
        source: "Enterprise Fabric tenant",
    },
    {
        metric: "24/7",
        label: "Autonomous coverage across capacities, workspaces, and items",
        source: "Always-on agent",
    },
    {
        metric: "5 min",
        label: "Mean time to detect drift in permissions and SLAs",
        source: "MTTD benchmark",
    },
    {
        metric: "30+",
        label: "Fabric tenants monitored in production",
        source: "Deployment footprint",
    },
];

export function FabricAdminAgentImpact() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.secEyebrow}>Proven outcomes</span>
                    <h2 className={s.title}>Real impact for Microsoft Fabric platform owners</h2>
                    <p className={s.sub} style={{ margin: "0 auto" }}>
                        Numbers from MAQ Software Fabric Admin Agent deployments across
                        enterprise tenants.
                    </p>
                </div>
                <div className={s.impactGrid}>
                    {impact.map((item) => (
                        <div key={item.label} className={s.impactCard}>
                            <div className={s.impactMetric}>{item.metric}</div>
                            <div className={s.impactLabel}>{item.label}</div>
                            <span className={s.impactSource}>{item.source}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
