import { makeStyles } from "@fluentui/react-components";

const useVisualStyles = makeStyles({
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
  heroImage: {
    width: "100%",
    aspectRatio: "16 / 10",
    display: "block",
    borderRadius: "10px",
    objectFit: "cover",
  },
});

export function SecurityVisual() {
  const s = useVisualStyles();
  return (
    <div className={s.visual}>
      <img
        className={s.heroImage}
        src="/images/Service%20cards/Security.png"
        alt="Security and Governance"
      />
    </div>
  );
}
