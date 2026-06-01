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
    transition: "all 0.2s ease-in-out",
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
    ":hover": {
      border: "2px solid var(--maq-red)",
      color: "var(--maq-red)",
      background: "var(--maq-red-pale)",
    },
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
          className={active === item ? s.active : s.chip}
          onClick={() => onChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
