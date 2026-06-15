import type { CSSProperties, MouseEventHandler, ReactElement, ReactNode } from "react";
import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
} from "@fluentui/react-components";
import type { ButtonSize } from "./tokens";

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
  fullWidth: {
    width: "100%",
  },
  card: {
    justifyContent: "space-between",
  },
});

const appearanceMap: Record<ButtonVariant, "primary" | "secondary" | "outline" | "subtle" | "transparent"> = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "outline",
  text: "subtle",
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
    variant === "card" ? s.card : undefined,
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
        size={size}
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
      size={size}
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
