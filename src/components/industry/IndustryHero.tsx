import { Button, makeStyles } from "@fluentui/react-components";
import {
  Mail24Regular,
  ArrowRight20Regular,
  ArrowTrendingLines20Filled,
  ThumbLike20Filled,
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
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
  shelfGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "4px",
  },
  shelfCell: {
    aspectRatio: "1.4",
    background: "var(--maq-gray-100)",
    borderRadius: "3px",
  },
  recoRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  recoLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  recoTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  recoFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
});

const sparkHeights = [40, 60, 50, 78, 65, 90, 72, 95];
const shelf = Array.from({ length: 12 });

export function IndustryHero() {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Retail &amp; Consumer Goods</span>
          <h1 className={s.h1}>
            Powering the Next Era of Retail with AI-Driven Intelligence
          </h1>
          <p className={s.sub}>
            AI is redefining how retailers operate, compete, and grow. At MAQ
            Software, we help retail and CPG organizations embed intelligence
            across the enterprise, from real-time decision-making to autonomous
            operations. Backed by deep Microsoft expertise and advanced data
            platforms, we enable seamless customer experiences, resilient
            supply chains, and intelligent store ecosystems.
          </p>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<Mail24Regular />}
              as="a"
              href="mailto:customersuccess@maqsoftware.com?subject=Retail%20-%20MAQ%20Software"
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
                  .getElementById("retail-solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore retail solutions
            </Button>
          </div>
        </div>

        <div className={s.visual} aria-hidden="true">
          <div className={s.tile}>
            <div className={s.tileTitle}>
              <ArrowTrendingLines20Filled /> Live SKU velocity
            </div>
            <div className={s.spark}>
              {sparkHeights.map((h, i) => (
                <div key={i} className={s.bar} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>Shelf execution</div>
            <div className={s.shelfGrid}>
              {shelf.map((_, i) => (
                <div key={i} className={s.shelfCell} />
              ))}
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>
              <ThumbLike20Filled /> Today&apos;s pricing recommendations
            </div>
            <div className={s.recoRow}>
              <span className={s.recoLabel}>SKU 4421</span>
              <div className={s.recoTrack}>
                <div className={s.recoFill} style={{ width: "78%" }} />
              </div>
            </div>
            <div className={s.recoRow}>
              <span className={s.recoLabel}>SKU 8127</span>
              <div className={s.recoTrack}>
                <div className={s.recoFill} style={{ width: "62%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
