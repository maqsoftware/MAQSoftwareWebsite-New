import { makeStyles, tokens, mergeClasses, ToggleButton } from "@fluentui/react-components";

/* ==================================================================
   PillTabs — a horizontal, wrap-friendly pill selector (restyled
   Fluent ToggleButtons; no indicator bar). Selected = soft brand red
   (--maq-red-pale) fill with red text, unselected = white with a
   light-gray stroke. Mostly tokens, so
   it inherits the theme. Controlled: pass `activeIndex` + `onSelect`.
   ================================================================== */

const useStyles = makeStyles({
  tabs: { display: "flex", flexWrap: "wrap", gap: tokens.spacingHorizontalS, marginBottom: "44px" },
  tab: {
    height: "40px",
    paddingInline: tokens.spacingHorizontalXL,
    borderRadius: tokens.borderRadiusCircular,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300, lineHeight: tokens.lineHeightBase300,
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
  tabSelected: {
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

export function PillTabs({
  items,
  activeIndex,
  onSelect,
  ariaLabel,
  className,
}: {
  items: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  ariaLabel?: string;
  className?: string;
}) {
  const s = useStyles();
  return (
    <div className={mergeClasses(s.tabs, className)} role="group" aria-label={ariaLabel}>
      {items.map((label, i) => (
        <ToggleButton
          key={label}
          shape="circular"
          checked={activeIndex === i}
          onClick={() => onSelect(i)}
          className={mergeClasses(s.tab, activeIndex === i && s.tabSelected)}
        >
          {label}
        </ToggleButton>
      ))}
    </div>
  );
}
