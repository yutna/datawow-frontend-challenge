import type { ComponentPropsWithoutRef } from "react";

export interface TodoAddItemProps extends ComponentPropsWithoutRef<"form"> {
  label?: string;
  onAddTodoItem?: (value: string) => void;
  placeholder?: string;
}
