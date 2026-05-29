import { Badge } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

const cases = [
    {
        tag: "Microsoft Fabric · OneLake",
        title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
        teaser:
            "Siloed enterprise data unified on OneLake for a single governed surface — monitored end-to-end by an admin agent layer.",
        href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
    },
    {
        tag: "Fabric migration · OSOT",
        title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
        teaser:
            "Consolidating fragmented data estates onto Microsoft Fabric with proactive capacity and workspace governance.",
        href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
    },
    {
        tag: "Fabric ISV · CI/CD",
        title: "Microsoft Fabric ISV Solutions: Implementing CI/CD",
        teaser:
            "Repeatable CI/CD patterns for Fabric ISV solutions — with admin-grade controls baked into the deployment lifecycle.",
        href: "https://blog.maqsoftware.com/2025/05/microsoft-fabric-isv-solutions.html",
    },
];

export function FabricAdminAgentCaseStudies() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Fabric case studies</span>
                    <h2 className={s.titleLg}>How platform teams ship Fabric faster with MAQ Software</h2>
                </div>
                <div className={s.caseGrid}>
                    {cases.map((item) => (
                        <a
                            key={item.title}
                            className={s.caseCard}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Badge appearance="tint" color="danger" className={s.caseTag}>
                                {item.tag}
                            </Badge>
                            <div className={s.caseTitle}>{item.title}</div>
                            <div className={s.caseTeaser}>{item.teaser}</div>
                            <span className={s.caseLink}>
                                Read full story <ArrowRight20Regular fontSize={14} />
                            </span>
                        </a>
                    ))}
                </div>
                <div className={s.seeAll}>
                    <a
                        className={s.seeAllLink}
                        href="https://maqsoftware.com/case-studies"
                        target="_blank"
                        rel="noreferrer"
                    >
                        See all Fabric case studies <ArrowRight20Regular fontSize={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
