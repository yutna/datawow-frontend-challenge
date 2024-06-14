import { useContext, useMemo } from "react";

import { Select } from "@/components/select";
import { TodoAddItem } from "@/components/todo-add-item";
import { TodoList } from "@/components/todo-list";
import { TodoProgress } from "@/components/todo-progress";

import { TodoContext } from "@/contexts/todo-context";

import cln from "./TodoApp.module.css";

import type { SelectOption } from "@/components/select";
import type { TodoItem } from "@/types/todo";

const options: SelectOption[] = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Undone", value: "undone" },
];

export default function TodoApp() {
  // Hooks
  const todo = useContext(TodoContext);

  // Computed Variables
  const totalCompleted = useMemo(() => {
    return todo.items.filter((item) => item.completed).length;
  }, [todo.items]);

  const filteredTodos = useMemo(() => {
    return todo.items.filter((item) => {
      switch (todo.filter) {
        case "all":
          return item;
        case "done":
          return item.completed;
        case "undone":
          return !item.completed;
      }
    });
  }, [todo.items, todo.filter]);

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === todo.filter)!;
  }, [todo.filter]);

  // Event handlers
  const handleAddTodo = (value: string) => {
    console.log(value);
  };

  const handleDeleteTodo = (id: TodoItem["id"]) => {
    console.log(id);
  };

  const handleSelectFilter = (value: string) => {
    console.log(value);
  };

  const handleUpdatedTodo = (updatedTodo: TodoItem) => {
    console.log(updatedTodo);
  };

  return (
    <main className={cln.root}>
      <div className={cln.wrapper}>
        <div className={cln.app}>
          <TodoProgress completed={totalCompleted} total={todo.items.length} />
          <div className={cln.filter}>
            <h2 className={cln.filterTitle}>Tasks</h2>
            <Select
              label="Todo Filter"
              options={options}
              selectedOption={selectedOption}
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
