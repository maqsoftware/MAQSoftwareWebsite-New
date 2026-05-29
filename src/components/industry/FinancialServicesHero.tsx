import { makeStyles } from "@fluentui/react-components";
import { IndustryHero } from "./IndustryHero";

const useVisualStyles = makeStyles({
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
        marginBottom: "10px",
        display: "block",
    },
    closeGrid: { display: "flex", flexDirection: "column", gap: "6px" },
    closeRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
    },
    closeLabel: { fontSize: "11px", color: "var(--maq-gray-600)", flex: 1 },
    badge: {
        fontSize: "10px",
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: "4px",
        letterSpacing: "0.04em",
    },
    badgeDone: { background: "#dcfce7", color: "#15803d" },
    badgeInReview: { background: "#fef9c3", color: "#92400e" },
    badgePending: { background: "var(--maq-gray-100)", color: "var(--maq-gray-500)" },
    barRow: { display: "flex", alignItems: "flex-end", gap: "5px", height: "40px" },
    bar: { flex: 1, background: "var(--maq-gray-200)", borderRadius: "3px 3px 0 0" },
    barRed: { background: "var(--maq-red)" },
    barLabel: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "4px",
    },
    barLabelText: { fontSize: "9px", color: "var(--maq-gray-500)", flex: 1, textAlign: "center" },
    riskRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" },
    riskLabel: { fontSize: "11px", width: "68px", color: "var(--maq-gray-500)" },
    riskTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    riskFill: { height: "100%", borderRadius: "3px" },
});

const closeSteps = [
    { label: "GL Reconciliation", status: "done" },
    { label: "AR / AP Close", status: "done" },
    { label: "Variance Analysis", status: "done" },
    { label: "Regulatory Report", status: "in-review" },
    { label: "CFO Sign-off", status: "pending" },
];

const claimsStages = [
    { label: "Intake", h: 65 },
    { label: "Validate", h: 80 },
    { label: "Review", h: 45 },
    { label: "Closed", h: 90 },
];

const riskBands = [
    { label: "Low risk", pct: "55%", color: "#22c55e" },
    { label: "Medium", pct: "30%", color: "#f59e0b" },
    { label: "High risk", pct: "15%", color: "var(--maq-red)" },
];

function FinancialServicesHeroVisual() {
    const v = useVisualStyles();

    return (
        <>
            <div className={v.tile}>
                <span className={v.tileTitle}>Month-end close status</span>
                <div className={v.closeGrid}>
                    {closeSteps.map(({ label, status }) => (
                        <div key={label} className={v.closeRow}>
                            <span className={v.closeLabel}>{label}</span>
                            <span
                                className={`${v.badge} ${status === "done"
                                        ? v.badgeDone
                                        : status === "in-review"
                                            ? v.badgeInReview
                                            : v.badgePending
                                    }`}
                            >
                                {status === "done" ? "Done" : status === "in-review" ? "In review" : "Pending"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <span className={v.tileTitle}>Claims processed today</span>
                <div className={v.barRow}>
                    {claimsStages.map(({ label, h }, index) => (
                        <div key={label} className={`${v.bar} ${index === 3 ? v.barRed : ""}`} style={{ height: `${h}%` }} />
                    ))}
                </div>
                <div className={v.barLabel}>
                    {claimsStages.map(({ label }) => (
                        <span key={label} className={v.barLabelText}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <span className={v.tileTitle}>Portfolio risk distribution</span>
                {riskBands.map(({ label, pct, color }) => (
                    <div key={label} className={v.riskRow}>
                        <span className={v.riskLabel}>{label}</span>
                        <div className={v.riskTrack}>
                            <div className={v.riskFill} style={{ width: pct, background: color }} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export function FinancialServicesHero() {
    return (
        <IndustryHero
            eyebrow="Financial Services"
            h1="AI-Driven Intelligence for a Faster, More Compliant Financial Enterprise"
            subhead="Financial services organizations face mounting pressure to accelerate decisions, reduce compliance risk, and modernize aging data estates. At MAQ Software, we help banks, insurers, and fintech firms embed AI across the front and back office — from automated claims processing and real-time credit decisioning to autonomous FP&A and regulatory reporting. Built on Microsoft Fabric, Snowflake, and Databricks, our solutions turn complex financial data into a competitive edge."
            mailSubject="Financial Services - MAQ Software"
            scrollTargetId="fs-solutions"
            scrollLabel="Explore financial solutions"
            visual={<FinancialServicesHeroVisual />}
        />
    );
}