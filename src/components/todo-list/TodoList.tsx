import clsx from "clsx";

import { TodoItem } from "@/components/todo-item";
import cln from "./TodoList.module.css";

import type { TodoListProps } from "./types";

export default function TodoList({
  todos,

  className = "",
  onDeleteTodo = undefined,
  onUpdatedTodo = undefined,
  ...props
}: TodoListProps) {
  return (
    <div {...props} className={clsx(cln.todoList, className)}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdatedTodo={onUpdatedTodo}
        />
      ))}
    </div>
  );
}
