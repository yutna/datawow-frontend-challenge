import { TodoContext } from "@/contexts/todo-context";
import { TodoApp } from "@/screens/todo-app";

export default function App() {
  return (
    <TodoContext.Provider value={{ items: [], filter: "all" }}>
      <TodoApp />
    </TodoContext.Provider>
  );
}
