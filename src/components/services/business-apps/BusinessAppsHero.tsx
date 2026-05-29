import { Button, makeStyles } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
    Flow20Filled,
    Sparkle20Filled,
    CheckmarkCircle20Filled,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
    wrap: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px" },
    grid: {
        maxWidth: "1240px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "48px",
        alignItems: "start",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    eyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "12px",
        display: "block",
    },
    h1: {
        fontSize: "40px",
        lineHeight: 1.15,
        fontWeight: 700,
        color: "var(--maq-black)",
        letterSpacing: "-0.02em",
        margin: "0 0 16px",
    },
    sub: {
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--maq-gray-600)",
        marginBottom: "24px",
        maxWidth: "640px",
    },
    btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

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

    perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
    perfLabel: { fontSize: "11px", width: "78px", color: "var(--maq-gray-500)" },
    perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },

    pulseRow: { display: "flex", gap: "8px", alignItems: "center" },
    dot: { width: "10px", height: "10px", borderRadius: "50%", background: "var(--maq-red)" },
    pulseLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },

    autoRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },
});

export function BusinessAppsHero() {
    const s = useStyles();
    return (
        <section className={s.wrap}>
            <div className={s.grid}>
                <div>
                    <span className={s.eyebrow}>Business apps &amp; process automation</span>
                    <h1 className={s.h1}>AI-native business apps on Microsoft Power Platform</h1>
                    <p className={s.sub}>
                        Low-code and pro-code apps built on Power Apps, Dynamics 365, and Microsoft 365 —
                        paired with Copilot Studio agents and Power Automate flows that retire manual handoffs
                        and embed AI into everyday operations.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Business%20Apps%20%26%20Process%20Automation%20-%20MAQ%20Software"
                        >
                            Contact us
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            onClick={() =>
                                document
                                    .getElementById("business-apps-capabilities")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Explore capabilities
                        </Button>
                    </div>
                </div>

                <div className={s.visual} aria-hidden="true">
                    <div className={s.tile}>
                        <div className={s.tileTitle}>
                            <Flow20Filled /> Workflow status
                        </div>
                        <div className={s.perfRow}>
                            <span className={s.perfLabel}>Approvals</span>
                            <div className={s.perfTrack}>
                                <div className={s.perfFill} style={{ width: "78%" }} />
                            </div>
                        </div>
                        <div className={s.perfRow}>
                            <span className={s.perfLabel}>Onboarding</span>
                            <div className={s.perfTrack}>
                                <div className={s.perfFill} style={{ width: "64%" }} />
                            </div>
                        </div>
                        <div className={s.perfRow}>
                            <span className={s.perfLabel}>Field service</span>
                            <div className={s.perfTrack}>
                                <div className={s.perfFill} style={{ width: "91%" }} />
                            </div>
                        </div>
                    </div>
                    <div className={s.tile}>
                        <div className={s.tileTitle}>
                            <CheckmarkCircle20Filled /> Active automations
                        </div>
                        <div className={s.pulseRow}>
                            <span className={s.dot} />
                            <span className={s.dot} />
                            <span className={s.dot} />
                            <span className={s.pulseLabel}>42 flows running · 0 failed in 24h</span>
                        </div>
                    </div>
                    <div className={s.tile}>
                        <div className={s.tileTitle}>
                            <Sparkle20Filled /> Today&apos;s impact
                        </div>
                        <div className={s.autoRow}>
                            <span>Cases auto-routed</span>
                            <span>2,118</span>
                        </div>
                        <div className={s.autoRow}>
                            <span>Hours saved this week</span>
                            <span>946</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
