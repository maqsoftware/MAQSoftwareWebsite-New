import { makeStyles } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px" },
  grid: {
    maxWidth: "var(--maq-container-wide)",
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
  heroImage: {
    width: "100%",
    aspectRatio: "16 / 10",
    display: "block",
    borderRadius: "0",
    objectFit: "contain",
  },
});

export function ServiceHeroData() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          {/* <span className={s.eyebrow}>Data &amp; AI Platforms</span> */}
          <h1 className={s.h1}>Medallion lakehouses, built for scale and trust</h1>
          <p className={s.sub}>
            Modern data platforms on Microsoft Fabric, Snowflake, and Databricks — governed
            lakehouses, semantic models, and real-time analytics that power Copilot, AI
            agents, and decision-making across the enterprise.
          </p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              onClick={() =>
                handleContactClick("Data & Analytics - MAQ Software")
              }
            >
              Contact Us
            </PrimaryButton>
          </div>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Platforms.png"
            alt="Data and AI Platforms"
          />
        </div>
      </div>
    </section>
  );
}
