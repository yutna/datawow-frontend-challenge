import clsx from "clsx";
import isBoolean from "lodash-es/isBoolean";
import { useState } from "react";

import { Dropdown } from "@/components/dropdown";
import { InputCheckbox } from "@/components/input-checkbox";
import { TodoEditItem } from "@/components/todo-edit-item";

import cln from "./TodoItem.module.css";

import type { CheckedState } from "@radix-ui/react-checkbox";
import type { MenuItem } from "@/components/dropdown";
import type { Todo } from "@/types/todo";
import type { TodoItemProps } from "./types";

export default function TodoItem({
  todo,

  className = "",
  onDeleteTodo = undefined,
  onUpdatedTodo = undefined,
  ...props
}: TodoItemProps) {
  // Hook
  const [localTodo, setLocalTodo] = useState<Todo>({ ...todo });
  const [isShowEditForm, setIsShowEditForm] = useState<boolean>(false);

  // Variable
  const menuItems: MenuItem[] = [
    { name: "edit" },
    { name: "delete", style: { color: "var(--color-babe)" } },
  ];

  // Event handler
  const handleCheckedChange = (isChecked: CheckedState) => {
    if (isBoolean(isChecked)) {
      setLocalTodo({ ...localTodo, completed: isChecked });
    }
  };

  const handleClickMenuItem = (menu: string) => {
    switch (menu) {
      case "edit":
        setIsShowEditForm(true);
        break;
      case "delete":
        onDeleteTodo && onDeleteTodo(localTodo.id);
        break;
    }
  };

  const handleSave = (updatedTodo: Todo) => {
    setLocalTodo({ ...updatedTodo });
    setIsShowEditForm(false);
    onUpdatedTodo && onUpdatedTodo(localTodo);
  };

  // Conditional rendering
  if (isShowEditForm) {
    return <TodoEditItem todo={localTodo} onSave={handleSave} />;
  }

  return (
    <div {...props} className={clsx(cln.todoItem, className)}>
      <InputCheckbox
        checked={localTodo.completed}
        className={cln.checkbox}
        id={`todo-${localTodo.id}`}
        isShowLabel
        label={localTodo.title}
        labelClassName={localTodo.completed ? cln.titleStrikethrough : ""}
        name="todoItem"
        onCheckedChange={handleCheckedChange}
        value={localTodo.id}
      />
      <Dropdown menuItems={menuItems} onClickMenuItem={handleClickMenuItem} />
    </div>
  );
}
