import type { ComponentPropsWithoutRef } from "react";
import type { TodoItemProps } from "@/components/todo-item";
import type { TodoItem } from "@/types/todo";

export interface TodoListProps extends ComponentPropsWithoutRef<"div"> {
  todos: TodoItem[];

  onDeleteTodo?: TodoItemProps["onDeleteTodo"];
  onUpdatedTodo?: TodoItemProps["onUpdatedTodo"];
}
