import InputText from "./InputText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputText> = {
  component: InputText,
  title: "Components/InputText",
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    placeholder: "Add your todo...",
  },
};
