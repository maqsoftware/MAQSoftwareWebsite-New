import { PillTabs } from "../PillTabs";

interface InsightsFilterBarProps {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}

export function InsightsFilterBar({ items, active, onChange }: InsightsFilterBarProps) {
  const activeIndex = Math.max(0, items.indexOf(active));

  return (
    <PillTabs
      items={items}
      activeIndex={activeIndex}
      onSelect={(index) => onChange(items[index] ?? items[0])}
      ariaLabel="Insights filters"
    />
  );
}
