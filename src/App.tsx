import { useState } from "react";

import { Select } from "@/components/select";
import { TodoAddItem } from "@/components/todo-add-item";
import { TodoList } from "@/components/todo-list";
import { TodoProgress } from "@/components/todo-progress";

import todos from "@/fixtures/data.json";

import cln from "./App.module.css";

import type { SelectOption } from "@/components/select";
import type { Todo } from "@/types/todo";

const options: SelectOption[] = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Undone", value: "undone" },
];

export default function App() {
  // Hooks
  const [localTodos, setLocalTodos] = useState<Todo[]>([...todos]);
  const [filter, setFilter] = useState<SelectOption>(options[0]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(localTodos);

  // Variables
  const totalCompleted = localTodos.filter((todo) => todo.completed).length;

  // Event handlers
  const handleAddTodo = (value: string) => {
    console.log(value);
  };

  const handleDeleteTodo = (id: Todo["id"]) => {
    console.log(id);
  };

  const handleSelectFilter = (value: string) => {
    switch (value) {
      case "all":
        setFilter(options[0]);
        setFilteredTodos(localTodos);
        break;
      case "done":
        setFilter(options[1]);
        setFilteredTodos(localTodos.filter((todo) => todo.completed));
        break;
      case "undone":
        setFilter(options[2]);
        setFilteredTodos(localTodos.filter((todo) => !todo.completed));
        break;
      default:
        throw new Error("Error! invalid filter");
    }
  };

  const handleUpdatedTodo = (updatedTodo: Todo) => {
    console.log(updatedTodo);
  };

  return (
    <main className={cln.root}>
      <div className={cln.wrapper}>
        <div className={cln.app}>
          <TodoProgress completed={totalCompleted} total={localTodos.length} />
          <div className={cln.filter}>
            <h2 className={cln.filterTitle}>Tasks</h2>
            <Select
              label="Todo Filter"
              options={options}
              selectedOption={filter}
              onSelectOption={handleSelectFilter}
            />
          </div>
          <TodoList
            todos={filteredTodos}
            onDeleteTodo={handleDeleteTodo}
            onUpdatedTodo={handleUpdatedTodo}
          />
          <TodoAddItem
            className={cln.addTodo}
            onAddTodoItem={handleAddTodo}
            placeholder="Add your todo..."
          />
        </div>
      </div>
    </main>
  );
}
