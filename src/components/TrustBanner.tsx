import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrap: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: "20px 32px",
  },
  inner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "10px 14px",
    justifyContent: "center",
  },
  label: {
    fontSize: "12px",
    color: "var(--maq-text-muted)",
    fontWeight: 500,
    marginRight: "4px",
  },
  chip: {
    fontSize: "12px",
    fontWeight: 500,
    color: "var(--maq-navy)",
    backgroundColor: "var(--maq-gray-50)",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: "6px 12px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
  },
  chipBlue: {
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    border: `1px solid transparent`,
  },
});

const items = [
  { label: "Top 25 Global Microsoft Partner", blue: true },
  { label: "Microsoft Fabric Featured Partner", blue: true },
  { label: "Power BI Partner of the Year — Global", blue: true },
  { label: "Inc. 5000 — 12 Consecutive Times" },
  { label: "1,800+ Engineers Globally" },
  { label: "ISO 27001 / 27701 / 27018 Certified" },
  { label: "Partners: Microsoft · Snowflake · Databricks" },
  { label: "Microsoft Preferred Supplier — 26 Years" },
];

export function TrustBanner() {
  const s = useStyles();
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <span className={s.label}>Trusted credentials:</span>
        {items.map((i) => (
          <span
            key={i.label}
            className={`${s.chip} ${i.blue ? s.chipBlue : ""}`}
          >
            {i.label}
          </span>
        ))}
      </div>
    </div>
  );
}
