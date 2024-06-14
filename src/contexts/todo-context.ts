import { createContext } from "react";
import type { Todo } from "@/types/todo";

const initialTodo: Todo = {
  items: [],
  filter: "all",
  setItems: () => {},
  setFilter: () => {},
};

const TodoContext = createContext(initialTodo);

export { TodoContext };
