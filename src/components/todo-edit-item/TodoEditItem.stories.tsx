import todos from "@/fixtures/data.json";
import TodoEditItem from "./TodoEditItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoEditItem> = {
  component: TodoEditItem,
  title: "Components/TodoEditItem",
};

export default meta;

type Story = StoryObj<typeof TodoEditItem>;

export const Default: Story = {
  args: {
    todo: todos[0],
    buttonText: "Save",
    label: "Edit Todo Item",
    onSave(todo) {
      console.log(todo);
    },
  },
};
