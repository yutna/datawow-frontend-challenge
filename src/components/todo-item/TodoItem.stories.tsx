import todos from "@/fixtures/data.json";
import TodoItem from "./TodoItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  title: "Components/TodoItem",
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    todo: todos[0],
    onDeleteTodo(id) {
      console.log(id);
    },
    onUpdatedTodo(todo) {
      console.log(todo);
    },
  },
};
