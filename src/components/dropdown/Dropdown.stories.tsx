import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  title: "Components/Dropdown",
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    menuItems: [
      { name: "edit" },
      { name: "delete", style: { color: "var(--color-babe)" } },
    ],
    onClickMenuItem(menu) {
      console.log(menu);
    },
  },
};
