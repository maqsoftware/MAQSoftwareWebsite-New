import { Button as FluentButton, type ButtonProps } from "@fluentui/react-components";
import type { AppButtonProps } from "./AppButton";

/** Low-emphasis action — stock Fluent `subtle` (no fill until hover). */
export function SubtleButton(props: AppButtonProps) {
  return <FluentButton {...(props as ButtonProps)} appearance="subtle" />;
}
