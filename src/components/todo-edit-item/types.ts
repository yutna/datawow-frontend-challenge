import type { ComponentPropsWithoutRef } from "react";
import type { Todo } from "@/types/todo";

export interface TodoEditItemProps extends ComponentPropsWithoutRef<"form"> {
  todo: Todo;

  buttonText?: string;
  label?: string;
  onSave?: (todo: Todo) => void;
}
