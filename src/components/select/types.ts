import type { ComponentPropsWithoutRef } from "react";
import type { SelectProps as RadixSelectProps } from "@radix-ui/react-select";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  options: SelectOption[];
  selectedOption: SelectOption;
  onSelectOption: RadixSelectProps["onValueChange"];
}
