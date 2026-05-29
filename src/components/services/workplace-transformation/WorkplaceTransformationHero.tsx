import { Button, makeStyles } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
    Sparkle20Filled,
    PeopleTeam20Filled,
    ArrowTrending20Filled,
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
    radialWrap: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    radial: {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "4px solid var(--maq-red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: 700,
        color: "var(--maq-red)",
    },
    radialLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
    autoRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },
});

export function WorkplaceTransformationHero() {
    const s = useStyles();
    return (
        <section className={s.wrap}>
            <div className={s.grid}>
                <div>
                    <span className={s.eyebrow}>Workplace transformation &amp; productivity</span>
                    <h1 className={s.h1}>Microsoft 365 and Copilot rollouts that drive real adoption</h1>
                    <p className={s.sub}>
                        We deploy Microsoft 365, Teams, SharePoint, Viva, and Microsoft Copilot — paired
                        with structured adoption programs and change management that turn rollouts into
                        measurable usage, not shelfware.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Workplace%20Transformation%20%26%20Productivity%20-%20MAQ%20Software"
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
                                    .getElementById("workplace-capabilities")
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
                            <Sparkle20Filled /> Copilot adoption
                        </div>
                        <div className={s.autoRow}>
                            <span>Active users</span>
                            <span style={{ fontWeight: 700 }}>78%</span>
                        </div>
                        <div className={s.autoRow}>
                            <span>Prompts this week</span>
                            <span style={{ fontWeight: 700 }}>12,480</span>
                        </div>
                    </div>
                    <div className={s.tile}>
                        <div className={s.tileTitle}>
                            <PeopleTeam20Filled /> Collaboration score
                        </div>
                        <div className={s.radialWrap}>
                            <div className={s.radial}>92%</div>
                            <span className={s.radialLabel}>Cross-team collaboration index</span>
                        </div>
                    </div>
                    <div className={s.tile}>
                        <div className={s.tileTitle}>
                            <ArrowTrending20Filled /> Today&apos;s productivity
                        </div>
                        <div className={s.autoRow}>
                            <span>Meetings summarized</span>
                            <span style={{ fontWeight: 700 }}>1,240</span>
                        </div>
                        <div className={s.autoRow}>
                            <span>Documents co-authored</span>
                            <span style={{ fontWeight: 700 }}>3,680</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
