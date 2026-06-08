import { Button, makeStyles } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useContactAction } from "../../lib/contact";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px" },
  grid: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
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
  pulseRow: { display: "flex", gap: "8px", alignItems: "center" },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-red)",
  },
  dotMuted: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-gray-500)",
    opacity: 0.4,
  },
  pulseLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },

  perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  perfLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },

  autoRow: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--maq-ink)", marginTop: "4px" },
});

export function ServiceHeroData() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Data &amp; AI Platforms</span>
          <h1 className={s.h1}>Medallion lakehouses, built for scale and trust</h1>
          <p className={s.sub}>
            Modern data platforms on Microsoft Fabric, Snowflake, and Databricks — governed
            lakehouses, semantic models, and real-time analytics that power Copilot, AI
            agents, and decision-making across the enterprise.
          </p>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<Mail24Regular />}
              onClick={() =>
                handleContactClick("Data & Analytics - MAQ Software")
              }
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className={s.visual} aria-hidden="true">
          <div className={s.tile}>
            <div className={s.tileTitle}>Data throughput</div>
            <div className={s.pulseRow}>
              <span className={s.dot} />
              <span className={s.dot} />
              <span className={s.dotMuted} />
              <span className={s.pulseLabel}>streams · 128k events/min</span>
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>Query latency</div>
            <div className={s.perfRow}>
              <span className={s.perfLabel}>P99</span>
              <div className={s.perfTrack}>
                <div className={s.perfFill} style={{ width: "18%" }} />
              </div>
            </div>
            <div className={s.perfRow}>
              <span className={s.perfLabel}>Median</span>
              <div className={s.perfTrack}>
                <div className={s.perfFill} style={{ width: "75%" }} />
              </div>
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>Active dashboards</div>
            <div className={s.autoRow}>
              <span>Power BI reports</span>
              <span>432</span>
            </div>
            <div className={s.autoRow}>
              <span>Embedded sessions</span>
              <span>1,028</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
