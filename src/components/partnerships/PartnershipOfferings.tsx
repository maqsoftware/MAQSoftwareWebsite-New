import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  headLeft: { marginBottom: "20px", textAlign: "center" as const },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  titleLg: {
    display: "block",
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
    textAlign: "center" as const,
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "16px",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  cardEyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "6px",
    display: "block",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 10px",
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    margin: 0,
  },
});

export interface Offering {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface PartnershipOfferingsProps {
  eyebrow: string;
  title: string;
  sectionId?: string;
  offerings: Offering[];
}

export function PartnershipOfferings({
  eyebrow,
  title,
  sectionId,
  offerings,
}: PartnershipOfferingsProps) {
  const s = useStyles();
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.headLeft}>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h2 className={s.titleLg}>{title}</h2>
        </div>
        {offerings.map((o, i) => (
          <div
            key={o.title}
            className={s.card}
            style={{
              backgroundColor: i % 2 === 0 ? "#fff" : "var(--maq-off-white)",
            }}
          >
            <span className={s.cardEyebrow}>{o.eyebrow}</span>
            <h3 className={s.cardTitle}>{o.title}</h3>
            <p className={s.cardDesc}>{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
