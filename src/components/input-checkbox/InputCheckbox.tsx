import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";

import cln from "./InputCheckbox.module.css";
import type { InputCheckboxProps } from "./types";

export default function InputCheckbox({
  id,
  label,

  checked = false,
  className = "",
  isShowLabel = false,
  name = "",
  onCheckedChange = undefined,
  value = "",
  ...props
}: InputCheckboxProps) {
  return (
    <span {...props} className={clsx(cln.inputCheckbox, className)}>
      <Checkbox.Root
        checked={checked}
        className={cln.root}
        id={id}
        name={name}
        onCheckedChange={onCheckedChange}
        value={value}
      >
        <Checkbox.Indicator className={cln.indicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={cln.label} htmlFor={id} data-show-label={isShowLabel}>
        {isShowLabel ? (
          label
        ) : (
          <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
        )}
      </label>
    </span>
  );
}
