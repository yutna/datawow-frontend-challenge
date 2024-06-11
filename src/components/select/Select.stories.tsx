import Select from "./Select";

import type { Meta, StoryObj } from "@storybook/react";
import type { SelectOption } from "./types";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Select",
};

export default meta;

type Story = StoryObj<typeof Select>;

const options: SelectOption[] = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Undone", value: "undone" },
];

export const Default: Story = {
  args: {
    label: "Todo Filter",
    options,
    selectedOption: options[0],
    onSelectOption(value) {
      console.log(value);
    },
  },
};
