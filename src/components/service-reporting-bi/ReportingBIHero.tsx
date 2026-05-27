import { Button, makeStyles } from "@fluentui/react-components";
import {
  Mail24Regular,
  ArrowRight20Regular,
  ChartMultiple20Filled,
  Gauge20Filled,
  Window20Filled,
} from "@fluentui/react-icons";

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

  barRow: { display: "flex", alignItems: "flex-end", gap: "6px", height: "48px" },
  bar: { width: "14px", background: "var(--maq-red)", borderRadius: "2px 2px 0 0" },
  barMuted: { width: "14px", background: "var(--maq-gray-500)", opacity: 0.35, borderRadius: "2px 2px 0 0" },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginTop: "4px",
  },
  kpi: {
    background: "var(--maq-off-white)",
    borderRadius: "6px",
    padding: "8px",
    textAlign: "center",
  },
  kpiVal: { fontSize: "16px", fontWeight: 700, color: "var(--maq-red)" },
  kpiLbl: { fontSize: "10px", color: "var(--maq-gray-500)", textTransform: "uppercase", letterSpacing: "0.04em" },

  perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  perfLabel: { fontSize: "11px", width: "78px", color: "var(--maq-gray-500)" },
  perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
});

export function ReportingBIHero() {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Reporting &amp; Business Intelligence</span>
          <h1 className={s.h1}>See the full picture with powerful visualizations</h1>
          <p className={s.sub}>
            Transform complex data into intuitive, actionable insights with our custom reporting and
            visualization solutions — built on Microsoft Fabric, Power BI, and modern semantic models.
          </p>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<Mail24Regular />}
              as="a"
              href="mailto:customersuccess@maqsoftware.com?subject=Reporting%20%26%20BI%20-%20MAQ%20Software"
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
                  .getElementById("bi-capabilities")
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
              <ChartMultiple20Filled /> Sales by region
            </div>
            <div className={s.barRow}>
              <span className={s.bar} style={{ height: "30%" }} />
              <span className={s.bar} style={{ height: "55%" }} />
              <span className={s.bar} style={{ height: "70%" }} />
              <span className={s.barMuted} style={{ height: "45%" }} />
              <span className={s.bar} style={{ height: "85%" }} />
              <span className={s.barMuted} style={{ height: "60%" }} />
              <span className={s.bar} style={{ height: "92%" }} />
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>
              <Gauge20Filled /> Report performance
            </div>
            <div className={s.kpiGrid}>
              <div className={s.kpi}>
                <div className={s.kpiVal}>1.2s</div>
                <div className={s.kpiLbl}>Load</div>
              </div>
              <div className={s.kpi}>
                <div className={s.kpiVal}>99.8%</div>
                <div className={s.kpiLbl}>Refresh</div>
              </div>
              <div className={s.kpi}>
                <div className={s.kpiVal}>-38%</div>
                <div className={s.kpiLbl}>DAX cost</div>
              </div>
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>
              <Window20Filled /> Embedded view
            </div>
            <div className={s.perfRow}>
              <span className={s.perfLabel}>Tenant A</span>
              <div className={s.perfTrack}>
                <div className={s.perfFill} style={{ width: "78%" }} />
              </div>
            </div>
            <div className={s.perfRow}>
              <span className={s.perfLabel}>Tenant B</span>
              <div className={s.perfTrack}>
                <div className={s.perfFill} style={{ width: "62%" }} />
              </div>
            </div>
            <div className={s.perfRow}>
              <span className={s.perfLabel}>Tenant C</span>
              <div className={s.perfTrack}>
                <div className={s.perfFill} style={{ width: "91%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
