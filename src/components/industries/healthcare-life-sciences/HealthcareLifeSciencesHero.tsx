import { makeStyles } from "@fluentui/react-components";
import { IndustryHero } from "../IndustryHero";

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
    triageGrid: { display: "flex", flexDirection: "column", gap: "6px" },
    triageRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
    },
    triageLabel: { fontSize: "11px", color: "var(--maq-gray-600)", flex: 1 },
    badge: {
        fontSize: "10px",
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: "4px",
        letterSpacing: "0.04em",
    },
    badgeCritical: { background: "#fee2e2", color: "#b91c1c" },
    badgeWatch: { background: "#fef9c3", color: "#92400e" },
    badgeStable: { background: "#dcfce7", color: "#15803d" },
    badgeRoutine: { background: "var(--maq-gray-100)", color: "var(--maq-gray-600)" },
    badgeDischarge: { background: "var(--maq-red-pale)", color: "var(--maq-red)" },
    barRow: { display: "flex", alignItems: "flex-end", gap: "5px", height: "40px" },
    bar: { flex: 1, background: "var(--maq-gray-200)", borderRadius: "3px 3px 0 0" },
    barRed: { background: "var(--maq-red)" },
    barLabel: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "4px",
    },
    barLabelText: { fontSize: "9px", color: "var(--maq-gray-500)", flex: 1, textAlign: "center" },
    trialRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" },
    trialLabel: { fontSize: "11px", width: "82px", color: "var(--maq-gray-500)" },
    trialTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    trialFill: { height: "100%", borderRadius: "3px" },
});

const triageRows = [
    { label: "Bed 12 · Sepsis risk", status: "critical" },
    { label: "Bed 07 · Post-op", status: "watch" },
    { label: "ED · Chest pain", status: "watch" },
    { label: "Bed 03 · Stable", status: "stable" },
    { label: "Bed 19 · Ready for discharge", status: "discharge" },
];

const wardStages = [
    { label: "ICU", h: 92 },
    { label: "Med-Surg", h: 78 },
    { label: "ED", h: 65 },
    { label: "Step-down", h: 48 },
];

const trialBands = [
    { label: "Phase I", pct: "70%", color: "#22c55e" },
    { label: "Phase II", pct: "45%", color: "#f59e0b" },
    { label: "Phase III", pct: "18%", color: "var(--maq-red)" },
];

function HealthcareLifeSciencesHeroVisual() {
    const v = useVisualStyles();

    return (
        <>
            <div className={v.tile}>
                <span className={v.tileTitle}>Patient triage queue</span>
                <div className={v.triageGrid}>
                    {triageRows.map(({ label, status }) => (
                        <div key={label} className={v.triageRow}>
                            <span className={v.triageLabel}>{label}</span>
                            <span
                                className={`${v.badge} ${status === "critical"
                                        ? v.badgeCritical
                                        : status === "watch"
                                            ? v.badgeWatch
                                            : status === "stable"
                                                ? v.badgeStable
                                                : status === "discharge"
                                                    ? v.badgeDischarge
                                                    : v.badgeRoutine
                                    }`}
                            >
                                {status === "critical"
                                    ? "Critical"
                                    : status === "watch"
                                        ? "Watch"
                                        : status === "stable"
                                            ? "Stable"
                                            : status === "discharge"
                                                ? "Discharge"
                                                : "Routine"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <span className={v.tileTitle}>Ward occupancy today</span>
                <div className={v.barRow}>
                    {wardStages.map(({ label, h }, index) => (
                        <div key={label} className={`${v.bar} ${index === 0 ? v.barRed : ""}`} style={{ height: `${h}%` }} />
                    ))}
                </div>
                <div className={v.barLabel}>
                    {wardStages.map(({ label }) => (
                        <span key={label} className={v.barLabelText}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <span className={v.tileTitle}>Clinical research milestones</span>
                {trialBands.map(({ label, pct, color }) => (
                    <div key={label} className={v.trialRow}>
                        <span className={v.trialLabel}>{label}</span>
                        <div className={v.trialTrack}>
                            <div className={v.trialFill} style={{ width: pct, background: color }} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export function HealthcareLifeSciencesHero() {
    return (
        <IndustryHero
            eyebrow="Healthcare & Life Sciences"
            h1="AI-Powered Care, Compliance, and Discovery for the Connected Health Enterprise"
            subhead="Healthcare and life sciences organizations face mounting pressure to improve outcomes, accelerate research, and modernize fragmented data estates — all while honoring HIPAA, 21 CFR Part 11, and other regulatory commitments. At MAQ Software, we help providers, payers, and life-sciences firms embed AI across the care continuum and the research lifecycle — from grounded clinical Copilots and care-coordination agents to population-health analytics and trial-data unification. Built on Microsoft Fabric, Databricks, and Snowflake, our solutions turn sensitive health data into safer decisions and faster discovery."
            mailSubject="Healthcare & Life Sciences - MAQ Software"
            scrollTargetId="hls-solutions"
            scrollLabel="Explore healthcare solutions"
            visual={<HealthcareLifeSciencesHeroVisual />}
        />
    );
}