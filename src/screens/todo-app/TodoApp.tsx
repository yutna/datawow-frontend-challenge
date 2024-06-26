import has from "lodash-es/has";
import remove from "lodash-es/remove";
import { useContext, useMemo } from "react";

import { Select } from "@/components/select";
import { TodoAddItem } from "@/components/todo-add-item";
import { TodoList } from "@/components/todo-list";
import { TodoProgress } from "@/components/todo-progress";

import { TodoContext } from "@/contexts/todo-context";

import { TodoService } from "@/services/todo-service";

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
  const handleAddTodo = async (value: string) => {
    const payload = { title: value, completed: false };
    const newTodoItem = await TodoService.add(payload);

    if (has(newTodoItem, "id")) {
      todo.setItems([...todo.items, newTodoItem]);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    const isRemovedTodo = await TodoService.remove(id);

    if (isRemovedTodo) {
      const copyTodoItems = [...todo.items];

      remove(copyTodoItems, (item) => item.id === id);
      todo.setItems(copyTodoItems);
    }
  };

  const handleSelectFilter = (value: string) => {
    if (value === "all" || value === "done" || value === "undone") {
      todo.setFilter(value);
    }
  };

  const handleUpdatedTodo = async (updatedTodo: TodoItem) => {
    const id = updatedTodo.id;
    const payload = {
      title: updatedTodo.title,
      completed: updatedTodo.completed,
    };

    const updatedTodoResult = await TodoService.update(id, payload);
    const copyTodoItems = [...todo.items];

    copyTodoItems.forEach((item) => {
      if (item.id === updatedTodoResult.id) {
        item.title = updatedTodoResult.title;
        item.completed = updatedTodoResult.completed;
      }
    });

    todo.setItems(copyTodoItems);
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
