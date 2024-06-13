import type { CheckboxProps } from "@radix-ui/react-checkbox";
import type { ComponentPropsWithoutRef } from "react";

export interface InputCheckboxProps extends ComponentPropsWithoutRef<"span"> {
  id: string;
  label: string;

  checked?: CheckboxProps["checked"];
  labelClassName?: string;
  isShowLabel?: boolean;
  name?: string;
  onCheckedChange?: CheckboxProps["onCheckedChange"];
  value?: string;
}
