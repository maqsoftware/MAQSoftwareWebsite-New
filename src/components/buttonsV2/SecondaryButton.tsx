import { Button as FluentButton, type ButtonProps } from "@fluentui/react-components";
import type { AppButtonProps } from "./AppButton";

/** Secondary action — stock Fluent `secondary` (neutral, light surface). */
export function SecondaryButton(props: AppButtonProps) {
  return <FluentButton {...(props as ButtonProps)} appearance="secondary" />;
}
