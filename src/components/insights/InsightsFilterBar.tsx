import { makeStyles, tokens, mergeClasses, ToggleButton } from "@fluentui/react-components";

// Styled to match the home page's `PillTabs` slicer: rounded pills, 40px tall,
// soft brand-red fill when selected, white with a light stroke when not.
const useStyles = makeStyles({
  row: { display: "flex", flexWrap: "wrap", gap: tokens.spacingHorizontalS },
  chip: {
    height: "40px",
    paddingInline: tokens.spacingHorizontalXL,
    borderRadius: tokens.borderRadiusCircular,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    transitionProperty: "background-color, border-color, color",
    transitionDuration: tokens.durationFaster,
    transitionTimingFunction: tokens.curveEasyEase,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1Hover}`,
      color: tokens.colorNeutralForeground1,
    },
    ":active": {
      backgroundColor: tokens.colorNeutralBackground1Pressed,
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1Pressed}`,
    },
  },
  active: {
    backgroundColor: "var(--maq-red-pale)",
    border: `${tokens.strokeWidthThin} solid var(--maq-red-pale)`,
    color: "var(--maq-red)",
    fontWeight: tokens.fontWeightSemibold,
    ":hover": {
      backgroundColor: "var(--maq-red-pale)",
      border: `${tokens.strokeWidthThin} solid var(--maq-red-pale)`,
      color: "var(--maq-red)",
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
      border: `${tokens.strokeWidthThin} solid var(--maq-red-pale)`,
      color: "var(--maq-red)",
    },
  },
});

interface InsightsFilterBarProps {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}

export function InsightsFilterBar({ items, active, onChange }: InsightsFilterBarProps) {
  const activeIndex = Math.max(0, items.indexOf(active));
  const s = useStyles();
  return (
    <div className={s.row} role="tablist">
      {items.map((item) => {
        const selected = active === item;
        return (
          <ToggleButton
            key={item}
            role="tab"
            aria-selected={selected}
            checked={selected}
            shape="circular"
            appearance="subtle"
            className={mergeClasses(s.chip, selected && s.active)}
            onClick={() => onChange(item)}
          >
            {item}
          </ToggleButton>
        );
      })}
    </div>
  );
}
