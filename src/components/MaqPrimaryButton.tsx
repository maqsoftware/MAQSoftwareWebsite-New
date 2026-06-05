import type { CSSProperties, ReactElement, ReactNode } from "react";
import { Button } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";

export interface MaqPrimaryButtonProps {
  children: ReactNode;
  /** Anchor target — when provided, the button renders as an `<a>`. */
  href?: string;
  /** Click handler. Ignored when `href` is set. */
  onClick?: () => void;
  /**
   * Icon to display.
   * - Omit to use the default `<Mail24Regular />`.
   * - Pass `false` to hide the icon entirely.
   * - Pass any React element (e.g. `<Calendar24Regular />`) to use a custom icon.
   */
  icon?: ReactElement | false;
  /** "before" (default) or "after" the label. */
  iconPosition?: "before" | "after";
  /** Fluent UI Button size. Defaults to "large". */
  size?: "small" | "medium" | "large";
  /** Anchor target (only used when href is set). */
  target?: "_blank" | "_self";
  /** Anchor rel (only used when href is set). */
  rel?: string;
  /** Extra class for layout / colour overrides (e.g. inverted CTA). */
  className?: string;
  /** Extra inline style overrides. */
  style?: CSSProperties;
}

export function MaqPrimaryButton({
  children,
  href,
  onClick,
  icon,
  iconPosition,
  size = "large",
  target,
  rel,
  className,
  style,
}: MaqPrimaryButtonProps) {
  const resolvedIcon =
    icon === false ? undefined : icon ?? <Mail24Regular />;

  if (href) {
    return (
      <Button
        appearance="primary"
        size={size}
        icon={resolvedIcon}
        iconPosition={iconPosition}
        className={className}
        style={style}
        as="a"
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      appearance="primary"
      size={size}
      icon={resolvedIcon}
      iconPosition={iconPosition}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}