import { makeStyles, Link } from "@fluentui/react-components";

const useStyles = makeStyles({
  bar: {
    backgroundColor: "var(--maq-surface-cream)",
    color: "var(--maq-ink)",
    fontSize: "13px",
    padding: "8px 24px",
    textAlign: "center",
    letterSpacing: "0.01em",
    borderBottom: "1px solid var(--maq-red-pale)",
  },
  link: {
    color: "var(--maq-red)",
    marginLeft: "8px",
    fontWeight: 600,
  },
  strong: { color: "var(--maq-red)", fontWeight: 700 },
});

export function Announcement() {
  const s = useStyles();
  return (
    <div className={s.bar}>
      <span className={s.strong}>New:</span> MAQ Software named Top 25 Global
      Microsoft Partner for 2026 &nbsp;·&nbsp;
      <Link href="" className={s.link} appearance="subtle">
        Read the announcement →
      </Link>
    </div>
  );
}
