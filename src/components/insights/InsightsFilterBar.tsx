import { Button, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  chip: {
    border: "1px solid var(--maq-border)",
    color: "var(--maq-ink)",
    background: "#fff",
    transition: "all 0.2s ease",
    ":hover": {
      border: "1px solid var(--maq-red)",
      color: "var(--maq-red)",
      background: "var(--maq-red-pale)",
    },
  },
  active: {
    border: "2px solid var(--maq-red)",
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    fontWeight: 600,
    boxShadow: "0 0 0 3px rgba(208, 43, 30, 0.1)",
  },
});

interface InsightsFilterBarProps {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}

export function InsightsFilterBar({ items, active, onChange }: InsightsFilterBarProps) {
  const s = useStyles();
  return (
    <div className={s.row}>
      {items.map((item) => (
        <Button
          key={item}
          appearance="subtle"
          className={`${s.chip} ${active === item ? s.active : ""}`}
          onClick={() => onChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
