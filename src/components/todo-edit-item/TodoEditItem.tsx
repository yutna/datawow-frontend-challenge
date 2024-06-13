import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import { useState } from "react";

import { Button } from "@/components/button";
import { InputText } from "@/components/input-text";

import cln from "./TodoEditItem.module.css";

import type { ChangeEvent, FormEvent } from "react";
import type { Todo } from "@/types/todo";
import type { TodoEditItemProps } from "./types";

export default function TodoEditItem({
  todo,

  buttonText = "Save",
  className = "",
  label = "Edit Todo Item",
  onSave = undefined,

  ...props
}: TodoEditItemProps) {
  // Hook
  const [value, setValue] = useState<string>(todo.title);

  // Handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const copyTodo: Todo = { ...todo };
    copyTodo.title = value;

    onSave && onSave(copyTodo);
  };

  return (
    <form
      {...props}
      className={clsx(cln.todoEditItem, className)}
      onSubmit={handleSubmit}
    >
      <label className={cln.label}>
        <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
        <InputText onChange={handleChange} value={value} />
      </label>
      <Button className={cln.btn} type="submit">
        {buttonText}
      </Button>
    </form>
  );
}
