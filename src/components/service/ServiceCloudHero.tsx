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
  statusRow: { display: "flex", gap: "8px", alignItems: "center" },
  check: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-red)",
  },
  statusLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },

  costRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  costLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  costTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  costFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px", width: "65%" },

  deployRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "var(--maq-ink)",
    marginTop: "4px",
  },
  heroImage: {
    width: "100%",
    aspectRatio: "16 / 10",
    display: "block",
    borderRadius: "0",
    objectFit: "contain",
  },
});

export function ServiceCloudHero() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          {/* <span className={s.eyebrow}>Cloud Modernization</span> */}
          <h1 className={s.h1}>Modernize from on-premises to cloud-native on Azure</h1>
          <p className={s.sub}>
            Replatform on-premises workloads to Azure, from lift-and-shift to full
            cloud-native re-architecture, with FinOps discipline that cuts run cost 30–40%
            on average across enterprise workloads.
          </p>
          <div className={s.btns}>
            <PrimaryButton
              size="large"
              onClick={() =>
                handleContactClick("Cloud Modernization")
              }
            >
              Contact us
            </PrimaryButton>
          </div>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Cloud.png"
            alt="Cloud Modernization"
            loading="eager"
            decoding="async"
            width={560}
            height={420}
          />
        </div>
      </div>
    </section>
  );
}
