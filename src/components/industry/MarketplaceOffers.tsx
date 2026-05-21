import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
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
    aspectRatio: "16 / 9",
    background:
      "linear-gradient(135deg, #ececec 0%, #f5f5f5 50%, #e6e6e6 100%)",
  },
  body: { padding: "16px 18px 20px", display: "flex", flexDirection: "column", flex: 1 },
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
  desc: { fontSize: "12.5px", color: "var(--maq-gray-600)", lineHeight: 1.55 },
});

interface Offer {
  pill: string;
  title: string;
  desc: string;
  href: string;
}

const offers: Offer[] = [
  {
    pill: "Supply chain",
    title:
      "Supply Chain & Vendor Performance Analytics for Retail: 4-Week PoC",
    desc: "A 4-week proof of concept that unifies supplier, logistics, and inventory data to expose vendor performance gaps and improve supply chain reliability.",
    href: "#",
  },
  {
    pill: "Store operations",
    title:
      "Store Operations & Workforce Intelligence for Retail: 2-Week Assessment",
    desc: "A 2-week assessment that benchmarks store operations and workforce productivity on Microsoft Fabric, surfacing opportunities to lift throughput and service levels.",
    href: "#",
  },
  {
    pill: "Merchandising",
    title:
      "Merchandising & Shelf Analytics for Retail: 2-Week Assessment",
    desc: "A 2-week assessment that connects assortment, planogram, and shelf-execution data on Microsoft Fabric to sharpen merchandising and lift in-store conversion.",
    href: "#",
  },
  {
    pill: "Store operations",
    title: "Store Manager Assistant for Retail",
    desc: "A Copilot-powered assistant that gives store managers real-time visibility into sales, inventory, and workforce signals, with guided actions to run a smarter store.",
    href: "#",
  },
];

export function MarketplaceOffers() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <h2 className={s.title}>Our Marketplace Offers</h2>
          <p className={s.sub}>
            Accelerate retail outcomes with ready-to-deploy Microsoft Azure
            Marketplace offerings — spanning demand planning, customer
            experience, and real-time intelligence.
          </p>
        </div>
        <div className={s.grid}>
          {offers.map((o) => (
            <a
              key={o.title}
              className={s.card}
              href={o.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className={s.imgBox} aria-hidden="true" />
              <div className={s.body}>
                <span className={s.pill}>{o.pill}</span>
                <div className={s.titleRow}>
                  <div className={s.cardTitle}>{o.title}</div>
                  <ArrowRight20Regular className={s.arrow} />
                </div>
                <p className={s.desc} style={{ margin: 0 }}>
                  {o.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
