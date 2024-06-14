import type { ComponentPropsWithoutRef } from "react";
import type { TodoItem } from "@/types/todo";

export interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  todo: TodoItem;

  onDeleteTodo?: (id: TodoItem["id"]) => void;
  onUpdatedTodo?: (todo: TodoItem) => void;
}
