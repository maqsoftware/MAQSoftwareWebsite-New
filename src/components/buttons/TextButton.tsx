import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export function TextButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="text" size={props.size ?? "small"} {...props} />;
}
