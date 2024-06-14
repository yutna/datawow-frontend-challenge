import type { ComponentPropsWithoutRef } from "react";
import type { TodoItem } from "@/types/todo";

export interface TodoEditItemProps extends ComponentPropsWithoutRef<"form"> {
  todo: TodoItem;

  buttonText?: string;
  label?: string;
  onSave?: (todo: TodoItem) => void;
}
