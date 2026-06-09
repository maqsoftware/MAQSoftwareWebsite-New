import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "20px" },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    margin: 0,
    maxWidth: "720px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  card: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-red)`,
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      transform: "translateY(-2px)",
    },
  },
  imgBox: {
    height: "100px",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--maq-off-white) 60%, var(--maq-surface-cream) 100%)",
    borderBottom: "1px solid var(--maq-border)",
  },
  body: { padding: "16px 18px 20px", display: "flex", flexDirection: "column", flex: 1, gap: "8px" },
  pill: {
    alignSelf: "flex-start",
    fontSize: "10px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "3px 8px",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  titleRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    flex: 1,
  },
  arrow: { color: "var(--maq-red)", flexShrink: 0, marginTop: "2px" },
  desc: { fontSize: "12.5px", color: "var(--maq-gray-600)", lineHeight: 1.55, flex: 1 },
  read: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginTop: "4px",
  },
});

export interface MarketplaceOffer {
  pill: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
}

interface MarketplaceOffersProps {
  title?: string;
  sub: string;
  offers: MarketplaceOffer[];
}

export function MarketplaceOffers({
  title = "Our Marketplace Offers",
  sub,
  offers,
}: MarketplaceOffersProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.sub}>{sub}</p>
        </div>
        <div className={s.grid}>
          {offers.map((o) => (
            <a
              key={o.title}
              className={s.card}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={s.imgBox}
                aria-hidden="true"
                style={
                  o.image
                    ? {
                      backgroundImage: `url('${o.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                    : undefined
                }
              />
              <div className={s.body}>
                <div className={s.cardTitle}>{o.title}</div>
                <p className={s.desc} style={{ margin: 0 }}>
                  {o.desc}
                </p>
                <span className={s.read}>
                  Read more
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

