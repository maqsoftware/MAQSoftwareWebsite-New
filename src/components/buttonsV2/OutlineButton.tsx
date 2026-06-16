import { Button as FluentButton, type ButtonProps } from "@fluentui/react-components";
import type { AppButtonProps } from "./AppButton";

/** Outline action — stock Fluent `outline` (transparent fill, border). */
export function OutlineButton(props: AppButtonProps) {
  return <FluentButton {...(props as ButtonProps)} appearance="outline" />;
}
