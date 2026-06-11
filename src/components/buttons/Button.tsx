import type { CSSProperties, MouseEventHandler, ReactElement, ReactNode } from "react";
import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { buttonSizeTokens, buttonStateTokens, type ButtonSize } from "./tokens";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text" | "icon" | "card";

export interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  iconBefore?: ReactElement;
  iconAfter?: ReactElement;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius("8px"),
    fontWeight: 600,
    minWidth: "unset",
    transition: buttonStateTokens.transition,
    ":focus-visible": {
      boxShadow: buttonStateTokens.focusRing,
      outlineStyle: "none",
    },
    ":active": {
      transform: "translateY(1px)",
    },
    ":disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
      transform: "none",
    },
  },
  fullWidth: {
    width: "100%",
  },

  small: {
    height: buttonSizeTokens.small.height,
    fontSize: buttonSizeTokens.small.fontSize,
    ...shorthands.padding("0", buttonSizeTokens.small.paddingInline),
    ...shorthands.borderRadius(buttonSizeTokens.small.borderRadius),
  },
  medium: {
    height: buttonSizeTokens.medium.height,
    fontSize: buttonSizeTokens.medium.fontSize,
    ...shorthands.padding("0", buttonSizeTokens.medium.paddingInline),
    ...shorthands.borderRadius(buttonSizeTokens.medium.borderRadius),
  },
  large: {
    height: buttonSizeTokens.large.height,
    fontSize: buttonSizeTokens.large.fontSize,
    ...shorthands.padding("0", buttonSizeTokens.large.paddingInline),
    ...shorthands.borderRadius(buttonSizeTokens.large.borderRadius),
  },

  primary: {
    backgroundColor: "var(--maq-red)",
    color: "#fff",
    ...shorthands.border("1px", "solid", "var(--maq-red)"),
    ":hover": {
      backgroundColor: "var(--maq-red-dark)",
      ...shorthands.borderColor("var(--maq-red-dark)"),
      color: "#fff",
    },
    ":active": {
      backgroundColor: "var(--maq-red-dark)",
      ...shorthands.borderColor("var(--maq-red-dark)"),
    },
    ":disabled": {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
      color: tokens.colorNeutralForegroundDisabled,
    },
  },
  secondary: {
    backgroundColor: "#fff",
    color: "var(--maq-ink)",
    ...shorthands.border("1px", "solid", "var(--maq-border)"),
    ":hover": {
      backgroundColor: "var(--maq-red-50)",
      ...shorthands.borderColor("var(--maq-red-pale)"),
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
      ...shorthands.borderColor("var(--maq-red-pale)"),
    },
    ":disabled": {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
      color: tokens.colorNeutralForegroundDisabled,
    },
  },
  tertiary: {
    backgroundColor: "transparent",
    color: "var(--maq-red)",
    ...shorthands.border("1px", "solid", "var(--maq-red)"),
    ":hover": {
      backgroundColor: "var(--maq-red-50)",
      color: "var(--maq-red-dark)",
      ...shorthands.borderColor("var(--maq-red-dark)"),
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
      color: "var(--maq-red-dark)",
    },
    ":disabled": {
      ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
      color: tokens.colorNeutralForegroundDisabled,
    },
  },
  text: {
    backgroundColor: "transparent",
    color: "var(--maq-red)",
    ...shorthands.border("1px", "solid", "transparent"),
    ...shorthands.padding("0", "8px"),
    height: "32px",
    ":hover": {
      backgroundColor: "var(--maq-red-50)",
      color: "var(--maq-red-dark)",
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
    },
  },
  icon: {
    backgroundColor: "transparent",
    color: "var(--maq-ink)",
    ...shorthands.border("1px", "solid", "transparent"),
    ...shorthands.padding("0", "8px"),
    width: "36px",
    minWidth: "36px",
    height: "36px",
    ":hover": {
      backgroundColor: "var(--maq-red-50)",
      color: "var(--maq-red-dark)",
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
    },
  },
  card: {
    backgroundColor: "#fff",
    color: "var(--maq-ink)",
    ...shorthands.border("1px", "solid", "var(--maq-border)"),
    ...shorthands.borderRadius("10px"),
    justifyContent: "space-between",
    fontWeight: 600,
    ":hover": {
      backgroundColor: "var(--maq-red-50)",
      ...shorthands.borderColor("var(--maq-red-pale)"),
      color: "var(--maq-red-dark)",
    },
    ":active": {
      backgroundColor: "var(--maq-red-pale)",
    },
  },
});

const appearanceMap: Record<ButtonVariant, "primary" | "secondary" | "outline" | "subtle" | "transparent"> = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "outline",
  text: "transparent",
  icon: "subtle",
  card: "secondary",
};

export function Button({
  children,
  variant = "primary",
  size = "large",
  href,
  target,
  rel,
  onClick,
  iconBefore,
  iconAfter,
  disabled,
  fullWidth,
  className,
  style,
  ariaLabel,
}: ButtonProps) {
  const s = useStyles();
  const icon = iconAfter ?? iconBefore;
  const iconPosition = iconAfter ? "after" : "before";

  const resolvedClassName = mergeClasses(
    s.root,
    s[size],
    s[variant],
    fullWidth ? s.fullWidth : undefined,
    className,
  );

  if (href) {
    return (
      <FluentButton
        as="a"
        href={href}
        target={target}
        rel={rel}
        appearance={appearanceMap[variant]}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        onClick={onClick}
        className={resolvedClassName}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </FluentButton>
    );
  }

  return (
    <FluentButton
      appearance={appearanceMap[variant]}
      icon={icon}
      iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick}
      className={resolvedClassName}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </FluentButton>
  );
}
