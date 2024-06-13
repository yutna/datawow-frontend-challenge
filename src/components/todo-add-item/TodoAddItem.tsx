import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import { useState } from "react";

import { Button } from "@/components/button";
import { InputText } from "@/components/input-text";

import cln from "./TodoAddItem.module.css";

import type { ChangeEvent, FormEvent } from "react";
import type { TodoAddItemProps } from "./types";

export default function TodoAddItem({
  className = "",
  label = "Add Todo Item",
  onAddTodoItem = undefined,
  placeholder = undefined,
  ...props
}: TodoAddItemProps) {
  // Hook
  const [value, setValue] = useState<string>("");

  // Event handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodoItem && onAddTodoItem(value);
    setValue("");
  };

  return (
    <form
      {...props}
      className={clsx(cln.todoAddItem, className)}
      onSubmit={handleSubmit}
    >
      <label className={cln.label}>
        <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
        <InputText
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
      <VisuallyHidden.Root>
        <Button type="submit">{label}</Button>
      </VisuallyHidden.Root>
    </form>
  );
}
