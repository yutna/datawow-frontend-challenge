import todos from "@/fixtures/data.json";
import TodoList from "./TodoList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  title: "Components/TodoList",
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    todos,
    onDeleteTodo(id) {
      console.log(id);
    },
    onUpdatedTodo(todo) {
      console.log(todo);
    },
  },
};
