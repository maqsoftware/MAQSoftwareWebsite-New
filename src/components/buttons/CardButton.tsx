import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export function CardButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="card" {...props} />;
}
