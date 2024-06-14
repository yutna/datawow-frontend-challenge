import { useEffect, useState } from "react";

import { TodoContext } from "@/contexts/todo-context";
import { TodoApp } from "@/screens/todo-app";
import { TodoService } from "@/services/todo-service";

import type { Filter, TodoItem } from "@/types/todo";

export default function App() {
  // Hook
  const [items, setItems] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // Effect hook
  useEffect(() => {
    TodoService.getAll().then((todos) => {
      setItems(todos);
    });
  }, []);

  return (
    <TodoContext.Provider value={{ items, filter, setItems, setFilter }}>
      <TodoApp />
    </TodoContext.Provider>
  );
}
