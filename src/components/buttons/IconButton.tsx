import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export function IconButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="icon" size={props.size ?? "small"} {...props} />;
}
