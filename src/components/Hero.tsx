import {
  Button,
  Badge,
  makeStyles,
  tokens,
  Body1,
} from "@fluentui/react-components";
import {
  CalendarLtr20Regular,
  ArrowRight20Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  wrap: {
    backgroundColor: "var(--maq-off-white)",
    padding: "32px 32px",
  },
  grid: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "32px",
    alignItems: "center",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    fontSize: "12px",
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: "20px",
    marginBottom: "12px",
  },
  h1: {
    fontSize: "52px",
    lineHeight: 1.1,
    fontWeight: 700,
    color: "var(--maq-navy)",
    letterSpacing: "-0.02em",
    margin: "0 0 12px",
  },
  em: {
    color: "var(--maq-blue)",
    fontStyle: "normal",
    fontWeight: 700,
  },
  sub: {
    fontSize: "17px",
    lineHeight: 1.6,
    color: "var(--maq-text-muted)",
    marginBottom: "40px",
    maxWidth: "580px",
  },
  btns: { display: "flex", gap: "12px", marginTop: "40px", marginBottom: "0", flexWrap: "wrap" },
  stats: {
    display: "flex",
    gap: "48px",
    paddingTop: "32px",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    flexWrap: "wrap",
  },
  statNum: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    lineHeight: 1,
    marginBottom: "6px",
  },
  statBlue: { color: "var(--maq-blue)" },
  statLbl: { fontSize: "12px", color: "var(--maq-text-muted)" },

  visual: {
    background: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 20px 60px rgba(10,31,68,0.10), 0 4px 12px rgba(10,31,68,0.04)",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  visHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  visTitle: { fontSize: "13px", fontWeight: 600, color: "var(--maq-navy)" },
  visBadge: {
    fontSize: "11px",
    fontWeight: 600,
    backgroundColor: "#e8faf5",
    color: "#007a65",
    padding: "4px 10px",
    borderRadius: "20px",
  },
  metrics: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" },
  metric: {
    background: "var(--maq-off-white)",
    borderRadius: "8px",
    padding: "14px",
  },
  metricLbl: { fontSize: "11px", color: "var(--maq-text-muted)", marginBottom: "6px" },
  metricNum: { fontSize: "24px", fontWeight: 700, color: "var(--maq-navy)", lineHeight: 1, marginBottom: "4px" },
  metricDelta: { fontSize: "11px", color: "#1a9e75", fontWeight: 500 },
  chart: { background: "var(--maq-off-white)", borderRadius: "8px", padding: "14px" },
  chartTitle: { fontSize: "11px", color: "var(--maq-text-muted)", marginBottom: "12px" },
  barRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "9px" },
  barLabel: { fontSize: "11px", color: "var(--maq-text-muted)", width: "70px", flexShrink: 0 },
  barTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px", overflow: "hidden" },
  barFill: { height: "100%", background: "var(--maq-blue)", borderRadius: "3px" },
  barVal: { fontSize: "11px", color: "var(--maq-navy)", fontWeight: 500, width: "32px", textAlign: "right" },
});

const regions: { name: string; pct: number }[] = [
  { name: "N. America", pct: 82 },
  { name: "Europe", pct: 67 },
  { name: "Asia Pacific", pct: 54 },
  { name: "Middle East", pct: 41 },
];

export function Hero() {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <h1 className={s.h1}>
            Turn data into decisions <em className={s.em}>faster</em> with
            AI-powered analytics
          </h1>
          <Body1 as="p" className={s.sub}>
            A Microsoft Fabric Featured Partner with deep engineering across
            Snowflake and Databricks — we modernize legacy BI, migrate workloads
            to the cloud, and ship production GenAI agents on Microsoft Foundry.
            One partner across the full data and AI stack, with industry-specific
            accelerators that move you from pilot to production in weeks.
          </Body1>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<CalendarLtr20Regular />}
              onClick={() => navigate("/contact")}
            >
              Request a demo
            </Button>
            <Button
              appearance="outline"
              size="large"
              icon={<ArrowRight20Regular />}
              iconPosition="after"
              onClick={() => navigate("/insights/case-studies")}
            >
              View case studies
            </Button>
          </div>
        </div>

        <div className={s.visual} aria-label="Live Power BI dashboard preview">
          <div className={s.visHeader}>
            <div className={s.visTitle}>Power BI on Microsoft Fabric</div>
            <Badge appearance="tint" color="success" className={s.visBadge}>
              ● Live
            </Badge>
          </div>
          <div className={s.metrics}>
            <div className={s.metric}>
              <div className={s.metricLbl}>Revenue YTD</div>
              <div className={s.metricNum}>$42.8M</div>
              <div className={s.metricDelta}>↑ +18% vs last year</div>
            </div>
            <div className={s.metric}>
              <div className={s.metricLbl}>Query speed</div>
              <div className={s.metricNum}>0.4s</div>
              <div className={s.metricDelta}>↑ was 3.2s — 8× faster</div>
            </div>
          </div>
          <div className={s.chart}>
            <div className={s.chartTitle}>Pipeline health by region</div>
            {regions.map((r) => (
              <div key={r.name} className={s.barRow}>
                <span className={s.barLabel}>{r.name}</span>
                <div className={s.barTrack}>
                  <div className={s.barFill} style={{ width: `${r.pct}%` }} />
                </div>
                <span className={s.barVal}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
