import type { ComponentPropsWithoutRef } from "react";
import type { Todo } from "@/types/todo";

export interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  todo: Todo;

  onDeleteTodo?: (id: Todo["id"]) => void;
  onUpdatedTodo?: (todo: Todo) => void;
}
