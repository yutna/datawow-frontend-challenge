import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as RadixSelect from "@radix-ui/react-select";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";

import cln from "./Select.module.css";
import type { SelectProps } from "./types";

export default function Select({
  label,
  options,
  selectedOption,
  onSelectOption,

  className = "",
  ...props
}: SelectProps) {
  return (
    <div {...props} className={clsx(cln.select, className)}>
      <Label>
        <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
        <RadixSelect.Root
          onValueChange={onSelectOption}
          value={selectedOption.value}
        >
          <RadixSelect.Trigger className={cln.trigger}>
            <RadixSelect.Value aria-label={selectedOption.value}>
              {selectedOption.label}
            </RadixSelect.Value>
            <RadixSelect.Icon className={cln.selectIcon}>
              <ChevronDownIcon />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content
              className={cln.selectContent}
              position="popper"
              sideOffset={5}
            >
              <RadixSelect.Viewport className={cln.selectViewport}>
                {options.map(({ label, value }) => (
                  <RadixSelect.Item
                    className={cln.selectItem}
                    key={value}
                    value={value}
                  >
                    <RadixSelect.ItemText className={cln.selectItemText}>
                      {label}
                    </RadixSelect.ItemText>
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </Label>
    </div>
  );
}
