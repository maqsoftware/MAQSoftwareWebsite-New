import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  grid: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  badge: {
    maxWidth: "280px",
    width: "100%",
    height: "auto",
    display: "block",
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
});

export interface PartnershipOverviewProps {
  badgeUrl: string;
  badgeAlt: string;
  description: string;
}

export function PartnershipOverview({
  badgeUrl,
  badgeAlt,
  description,
}: PartnershipOverviewProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.grid}>
        <img
          className={s.badge}
          src={badgeUrl}
          alt={badgeAlt}
          loading="lazy"
        />
        <p className={s.text}>{description}</p>
      </div>
    </section>
  );
}
