import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "20px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  title: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  quote: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    position: "relative",
    margin: 0,
  },
  mark: {
    position: "absolute",
    top: "4px",
    left: "16px",
    fontSize: "56px",
    color: "var(--maq-red)",
    opacity: 0.18,
    lineHeight: 1,
    fontFamily: "Georgia, serif",
  },
  body: {
    fontSize: "15px",
    color: "var(--maq-black)",
    lineHeight: 1.55,
    marginBottom: "14px",
    paddingTop: "16px",
  },
  cite: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
});

const quotes = [
  {
    body: "MAQ Software's team helped us move from overnight batches to live store KPIs in under a quarter. Our managers now act on minute-by-minute signals instead of yesterday's report.",
    cite: "VP, Retail Analytics — Global grocery chain",
  },
  {
    body: "The pricing simulation agent gave our merchants the confidence to test scenarios safely. We shipped three campaigns in the time it used to take to debate one.",
    cite: "Director, Pricing & Promotions — Specialty retailer",
  },
];

export function Testimonials() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Testimonials</span>
          <h2 className={s.title}>What our clients have to say</h2>
        </div>
        <div className={s.grid}>
          {quotes.map((q, i) => (
            <blockquote key={i} className={s.quote}>
              <span className={s.mark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={s.body}>{q.body}</p>
              <cite className={s.cite}>{q.cite}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
