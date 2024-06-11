import TodoProgress from "./TodoProgress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoProgress> = {
  component: TodoProgress,
  title: "Components/TodoProgress",
};

export default meta;

type Story = StoryObj<typeof TodoProgress>;

export const Default: Story = {
  args: {
    completed: 12,
    completedText: "completed",
    heading: "Progress",
    total: 36,
  },
};
