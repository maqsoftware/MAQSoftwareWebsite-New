import { Button, makeStyles } from "@fluentui/react-components";
import {
  Mail20Regular,
  ArrowRight20Regular,
  People24Regular,
  Trophy24Regular,
  Lightbulb24Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  wrap: {
    backgroundColor: "var(--maq-off-white)",
    padding: "72px 32px",
    position: "relative",
    overflow: "hidden",
  },
  strands: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "55%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0.45,
  },
  bgImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
  },
  heroGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
    zIndex: 1,
    "@media (max-width: 768px)": {
      background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.7) 100%)",
    },
  },
  grid: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "56px",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },

  badgesRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "28px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    color: "var(--maq-ink)",
    fontSize: "12px",
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: "999px",
  },
  h1: {
    fontSize: "52px",
    lineHeight: 1.1,
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
  },
  em: {
    color: "var(--maq-red)",
    fontStyle: "normal",
    fontWeight: 700,
  },
  sub: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    marginBottom: "32px",
    maxWidth: "580px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

  visual: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  // statCard: {
  //   display: "flex",
  //   alignItems: "center",
  //   gap: "18px",
  //   backgroundColor: "#fff",
  //   border: "1px solid var(--maq-border)",
  //   borderRadius: "16px",
  //   padding: "22px 26px",
  //   boxShadow: "0 4px 12px rgba(15,23,42,0.04)",
  // },
  // statIcon: {
  //   width: "48px",
  //   height: "48px",
  //   borderRadius: "12px",
  //   background: "var(--maq-gray-100)",
  //   color: "var(--maq-gray-700)",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexShrink: 0,
  // },
  // statBody: { display: "flex", flexDirection: "column" },
  // statNumber: {
  //   fontSize: "30px",
  //   fontWeight: 700,
  //   color: "var(--maq-black)",
  //   lineHeight: 1.05,
  //   letterSpacing: "-0.02em",
  // },
  // statAccent: { color: "var(--maq-red)", marginLeft: "2px" },
  // statLabel: {
  //   fontSize: "14px",
  //   fontWeight: 600,
  //   color: "var(--maq-ink)",
  //   marginTop: "2px",
  // },
  // statMeta: {
  //   fontSize: "12px",
  //   color: "var(--maq-gray-500)",
  //   marginTop: "2px",
  // },
});

export function Hero() {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.wrap}>
      <img
        alt="Team collaborating in a modern office"
        className={s.bgImage}
        src="/images/home.png"
      />
      <div className={s.heroGradient}></div>
      {/* <svg
        className={s.strands}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 50 0 Q 250 80 600 60" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 100 0 Q 280 110 600 100" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 150 0 Q 320 140 600 140" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 200 0 Q 360 170 600 180" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 250 0 Q 400 200 600 220" stroke="#e4e7ec" strokeWidth="1" fill="none" />
        <path d="M 300 0 Q 440 230 600 260" stroke="#fde7ea" strokeWidth="1" fill="none" />
        <path d="M 350 0 Q 480 260 600 300" stroke="#fde7ea" strokeWidth="1" fill="none" />
      </svg> */}

      <div className={s.grid}>
        <div>
          <div className={s.badgesRow}>
            <span className={s.badge}>Microsoft Fabric Featured Partner</span>
            <span className={s.badge}>Top 25 Global Microsoft Partner</span>
          </div>
          <h1 className={s.h1}>
            Turn data into decisions <em className={s.em}>faster</em> with
            AI-powered analytics
          </h1>
          <p className={s.sub}>
            As a Microsoft Fabric Featured Partner and 12-time Inc. 5000 honoree,
            MAQ Software brings 26 years of enterprise delivery to every
            engagement. Whether you're modernizing a legacy BI stack, migrating
            to the cloud, or scaling AI across your organization — our 1,800+
            engineers deliver outcomes, not just recommendations.
          </p>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<Mail20Regular />}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <Button
              appearance="outline"
              size="large"
              className="maq-secondary-btn"
              icon={<ArrowRight20Regular />}
              iconPosition="after"
              onClick={() => navigate("/insights/case-studies")}
            >
              View case studies
            </Button>
          </div>
        </div>

        {/* <div className={s.visual}>
          <div className={s.statCard}>
            <div className={s.statIcon}>
              <People24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                1,800<span className={s.statAccent}>+</span>
              </div>
              <div className={s.statLabel}>Engineers globally</div>
              <div className={s.statMeta}>Across 9 delivery centers</div>
            </div>
          </div>

          <div className={s.statCard}>
            <div className={s.statIcon}>
              <Trophy24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                26<span className={s.statAccent}>yrs</span>
              </div>
              <div className={s.statLabel}>Microsoft preferred supplier</div>
              <div className={s.statMeta}>Continuous enterprise delivery</div>
            </div>
          </div>

          <div className={s.statCard}>
            <div className={s.statIcon}>
              <Lightbulb24Regular />
            </div>
            <div className={s.statBody}>
              <div className={s.statNumber}>
                12<span className={s.statAccent}>×</span>
              </div>
              <div className={s.statLabel}>Inc. 5000 honoree</div>
              <div className={s.statMeta}>2013 — 2025</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
