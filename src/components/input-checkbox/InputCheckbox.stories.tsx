import InputCheckbox from "./InputCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputCheckbox> = {
  component: InputCheckbox,
  title: "Components/InputCheckbox",
};

export default meta;

type Story = StoryObj<typeof InputCheckbox>;

export const Default: Story = {
  args: {
    id: "Id",
    label: "Label",
    checked: true,
    isShowLabel: false,
    name: "todoItem",
    value: "todoItemId",
    onCheckedChange(checked) {
      console.log(checked);
    },
  },
};
