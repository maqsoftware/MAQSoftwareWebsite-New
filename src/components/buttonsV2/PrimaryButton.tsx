import { Button as FluentButton, type ButtonProps } from "@fluentui/react-components";
import type { AppButtonProps } from "./AppButton";

/** Primary call to action — MAQ brand red via the theme brand ramp. */
export function PrimaryButton(props: AppButtonProps) {
  return <FluentButton {...(props as ButtonProps)} appearance="primary" />;
}
