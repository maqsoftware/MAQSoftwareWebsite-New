import { Button as FluentButton, type ButtonProps } from "@fluentui/react-components";
import type { AppButtonProps } from "./AppButton";

/** Chromeless action — stock Fluent `transparent` (no fill or border). */
export function TransparentButton(props: AppButtonProps) {
  return <FluentButton {...(props as ButtonProps)} appearance="transparent" />;
}
