import { makeStyles } from "@fluentui/react-components";
import {
    Shield20Filled,
    LockClosed20Filled,
    ShieldCheckmark20Filled,
} from "@fluentui/react-icons";
import { ServiceHero } from "../ServiceHero";

const useVisualStyles = makeStyles({
    visual: {
        background: "var(--maq-surface-cream)",
        border: "1px solid var(--maq-red-pale)",
        borderRadius: "16px",
        padding: "20px",
        display: "grid",
        gap: "12px",
        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
        color: "var(--maq-ink)",
    },
    tile: {
        background: "#fff",
        border: "1px solid var(--maq-border)",
        borderRadius: "10px",
        padding: "14px 16px",
    },
    tileTitle: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--maq-gray-500)",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    metricRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },
    bigNumber: {
        fontSize: "28px",
        fontWeight: 700,
        color: "var(--maq-red)",
        lineHeight: 1.2,
    },
    statusRow: {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        marginTop: "4px",
    },
    dot: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#22c55e",
    },
    statusLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
});

function SecurityVisual() {
    const s = useVisualStyles();

    return (
        <div className={s.visual} aria-hidden="true">
            <div className={s.tile}>
                <div className={s.tileTitle}>
                    <Shield20Filled /> Threat alerts
                </div>
                <div className={s.metricRow}>
                    <span>Blocked today</span>
                    <span className={s.bigNumber}>2,847</span>
                </div>
            </div>
            <div className={s.tile}>
                <div className={s.tileTitle}>
                    <ShieldCheckmark20Filled /> Compliance score
                </div>
                <div className={s.bigNumber}>98%</div>
                <div className={s.metricRow}>
                    <span>ISO 27001 · SOC 2 · HIPAA</span>
                </div>
            </div>
            <div className={s.tile}>
                <div className={s.tileTitle}>
                    <LockClosed20Filled /> Active policies
                </div>
                <div className={s.statusRow}>
                    <span className={s.dot} />
                    <span className={s.statusLabel}>142 policies enforced</span>
                </div>
                <div className={s.statusRow}>
                    <span className={s.dot} />
                    <span className={s.statusLabel}>Zero drift detected</span>
                </div>
            </div>
        </div>
    );
}

export function SecurityComplianceHero() {
    return (
        <ServiceHero
            eyebrow="Security & compliance"
            heading="Zero Trust security and AI governance, end to end"
            subhead="ISO 27001 / 27701 / 27018 certified delivery. We implement Zero Trust, Defender, Sentinel, and Purview — including AI governance with Purview AI Hub — aligned to your regulatory landscape and Microsoft security stack."
            ctaMailSubject="Security%20%26%20Compliance%20-%20MAQ%20Software"
            scrollTargetId="security-capabilities"
            visual={<SecurityVisual />}
        />
    );
}
