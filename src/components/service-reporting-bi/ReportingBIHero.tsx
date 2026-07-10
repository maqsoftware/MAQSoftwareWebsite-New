import { makeStyles } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

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
    background: "transparent",
    border: "none",
    borderRadius: "0",
    padding: "0",
    display: "grid",
    gap: "0",
    boxShadow: "none",
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
  heroImage: {
    width: "100%",
    aspectRatio: "16 / 10",
    display: "block",
    borderRadius: "0",
    objectFit: "contain",
  },
});

export function ReportingBIHero() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          {/* <span className={s.eyebrow}>Insights &amp; Analytics</span> */}
          <h1 className={s.h1}>From legacy BI to real-time Power BI on Microsoft Fabric</h1>
          <p className={s.sub}>
            We build, modernize, and migrate enterprise BI — moving Tableau, SAP BO, SAP Crystal,
            Qlik, Cognos, and MicroStrategy estates to Power BI on Microsoft Fabric, with semantic
            models, custom visuals, and a storytelling layer your business actually uses.
          </p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              onClick={() =>
                handleContactClick("Reporting & BI - MAQ Software")
              }
            >
              Contact Us
            </PrimaryButton>
          </div>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Visualization.png"
            alt="Insights and Analytics"
          />
        </div>
      </div>
    </section>
  );
}
