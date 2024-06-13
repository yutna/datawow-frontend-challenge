import type { ComponentPropsWithoutRef } from "react";
import type { TodoItemProps } from "@/components/todo-item";
import type { Todo } from "@/types/todo";

export interface TodoListProps extends ComponentPropsWithoutRef<"div"> {
  todos: Todo[];

  onDeleteTodo?: TodoItemProps["onDeleteTodo"];
  onUpdatedTodo?: TodoItemProps["onUpdatedTodo"];
}
