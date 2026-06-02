import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "28px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  title: {
    display: "block",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  cardHead: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  iconBox: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: { fontSize: "15px", fontWeight: 700, color: "var(--maq-black)" },
  cardDesc: { fontSize: "13.5px", color: "var(--maq-gray-700)", lineHeight: 1.6, margin: 0 },
});

export interface ValueProp {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface PartnershipValuePropsProps {
  eyebrow?: string;
  title: string;
  items: ValueProp[];
}

export function PartnershipValueProps({
  eyebrow,
  title,
  items,
}: PartnershipValuePropsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.grid}>
          {items.map((w) => (
            <div key={w.title} className={s.card}>
              <div className={s.cardHead}>
                <span className={s.iconBox}>{w.icon}</span>
                <div className={s.cardTitle}>{w.title}</div>
              </div>
              <p className={s.cardDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
