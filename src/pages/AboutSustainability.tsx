import { makeStyles } from "@fluentui/react-components";
import {
  PlantGrass24Regular,
  Globe24Regular,
  Drop24Regular,
  Building24Regular,
  LightbulbFilament24Regular,
  People24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "64px 32px 72px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 860px)": {
      gridTemplateColumns: "1fr",
    },
  },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    display: "block",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  heroSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "600px",
    marginBottom: "28px",
  },
  heroImage: {
    width: "100%",
    maxWidth: "480px",
    justifySelf: "center",
  },

  // ── Stats ─────────────────────────────────────────────────────────────────
  statsSection: {
    padding: "56px 32px",
    backgroundColor: "#fff",
  },
  statsInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  statsHeading: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-gray-700)",
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "32px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  statCard: {
    textAlign: "center" as const,
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "var(--maq-off-white)",
    border: "1px solid var(--maq-border)",
  },
  statValue: {
    display: "block",
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-red)",
    marginBottom: "8px",
  },
  statLabel: {
    display: "block",
    fontSize: "14px",
    lineHeight: 1.5,
    color: "var(--maq-gray-700)",
  },

  // ── Achievements ──────────────────────────────────────────────────────────
  achievementsSection: {
    padding: "64px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  achievementsInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 48px",
    textAlign: "center" as const,
  },
  achievementsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  achievementCard: {
    padding: "28px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  achievementIcon: {
    color: "var(--maq-red)",
    fontSize: "24px",
  },
  achievementTitle: {
    display: "block",
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  achievementDesc: {
    display: "block",
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },

  // ── Leadership + Leading by Example (combined) ───────────────────────────
  leadershipSection: {
    padding: "72px 32px",
    backgroundColor: "#fff",
  },
  leadershipInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "56px",
    alignItems: "center",
    "@media (max-width: 860px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
    },
  },
  leadershipImageWrap: {
    display: "flex",
    justifyContent: "center",
  },
  leadershipImage: {
    width: "100%",
    maxWidth: "520px",
    borderRadius: "12px",
  },
  leadershipCopy: {
    display: "flex",
    flexDirection: "column",
  },
  leadershipHeading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 24px",
  },
  quoteText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    fontStyle: "italic",
    margin: "0 0 24px",
  },
  quoteAttribution: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-black)",
  },
  quoteRole: {
    fontSize: "13px",
    color: "var(--maq-gray-700)",
  },
});

const achievements = [
  {
    icon: <Building24Regular />,
    title: "LEED Gold Certification",
    desc: "Our AI Engineering Center in Noida has earned LEED Gold Certification from the U.S. Green Building Council—a global recognition of our commitment to sustainable design and operations.",
  },
  {
    icon: <LightbulbFilament24Regular />,
    title: "598 KW Solar Energy System",
    desc: "The Noida campus is powered by a 598 KW solar energy system, supplying nearly 50% of the building's energy needs.",
  },
  {
    icon: <Globe24Regular />,
    title: "100% Carbon-Free Electricity",
    desc: "Our headquarters in Redmond, WA operates on 100% carbon-free electricity, further advancing our global sustainability goals.",
  },
  {
    icon: <Drop24Regular />,
    title: "Cut Water Use by 77%",
    desc: "Zero water discharge facility with advanced rainwater harvesting, achieved a 77% reduction in water usage.",
  },
  {
    icon: <PlantGrass24Regular />,
    title: "Optimized Building Designs to Save Energy",
    desc: "High-performance façade design and heat-minimizing building materials to reduce energy consumption.",
  },
  {
    icon: <People24Regular />,
    title: "Balancing Creativity and Sustainability",
    desc: "Eco-friendly, collaborative workspaces that foster innovation while reducing environmental impact.",
  },
];

export function AboutSustainability() {
  const s = useStyles();

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <h1 className={s.h1}>Sustainability is the Way Forward</h1>
            {/* <p className={s.heroSub}>
              At MAQ Software, sustainability is at the heart of how we operate. As a global
              leader in technology and AI engineering, we are committed to reducing our
              environmental impact while helping clients achieve their sustainability goals.
              Through innovation, transparency, and measurable progress, we are building a
              future where technology and sustainability go hand in hand.
            </p> */}
          </div>
          <img
            className={s.heroImage}
            src="https://maqsoftware.com/images-new/isv/sustainability-hero-image.svg"
            alt="Sustainability hero illustration"
          />
        </div>
      </section>

      {/* Stats */}
      <section className={s.statsSection}>
        <div className={s.statsInner}>
          <p className={s.statsHeading}>
            Discover our commitment to building a sustainable tomorrow
          </p>
          <div className={s.statsGrid}>
            <div className={s.statCard}>
              <span className={s.statValue}>Carbon Net Zero</span>
              <span className={s.statLabel}>for our headquarters by 2030</span>
            </div>
            <div className={s.statCard}>
              <span className={s.statValue}>55% reduction</span>
              <span className={s.statLabel}>
                in carbon emissions by 2030 (compared to a 2019 baseline year)
              </span>
            </div>
            <div className={s.statCard}>
              <span className={s.statValue}>Continuous investment</span>
              <span className={s.statLabel}>
                in sustainable practices across all locations to build a more sustainable future
              </span>
            </div>
            <div className={s.statCard}>
              <span className={s.statValue}>Ongoing alignment</span>
              <span className={s.statLabel}>
                with global standards including Microsoft's sustainable ecosystem to drive
                consistent and responsible progress
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={s.achievementsSection}>
        <div className={s.achievementsInner}>
          <h2 className={s.sectionHeading}>Our Achievements</h2>
          <div className={s.achievementsGrid}>
            {achievements.map((a) => (
              <div key={a.title} className={s.achievementCard}>
                <span className={s.achievementIcon}>{a.icon}</span>
                <span className={s.achievementTitle}>{a.title}</span>
                <span className={s.achievementDesc}>{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership message + Leading by Example */}
      <section className={s.leadershipSection}>
        <div className={s.leadershipInner}>
          <div className={s.leadershipImageWrap}>
            <img
              className={s.leadershipImage}
              src="https://maqsoftware.com/images-new/isv/sustainability-footer-image.svg"
              alt="Leading by example — sustainable future"
            />
          </div>
          <div className={s.leadershipCopy}>
            <h2 className={s.leadershipHeading}>A Message from our Leadership</h2>
            <p className={s.quoteText}>
              "Achieving LEED Gold Certification is an important accomplishment. It reflects
              our commitment to sustainability and innovation, aligning with our clients' and
              community's values. This is just the first step in our sustainability journey,
              and we remain committed to adopting further practices to reduce our
              environmental impact. We invite our clients and community to join us in
              building a sustainable future."
            </p>
            <span className={s.quoteAttribution}>Rajeev Agarwal</span>
            <span className={s.quoteRole}>Founder and Chairman, MAQ Software</span>
          </div>
        </div>
      </section>
    </>
  );
}
