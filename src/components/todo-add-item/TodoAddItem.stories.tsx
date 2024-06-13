import TodoAddItem from "./TodoAddItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoAddItem> = {
  component: TodoAddItem,
  title: "Components/TodoAddItem",
};

export default meta;

type Story = StoryObj<typeof TodoAddItem>;

export const Default: Story = {
  args: {
    label: "Add Todo Item",
    onAddTodoItem(value) {
      console.log(value);
    },
    placeholder: "Add your todo...",
  },
};
