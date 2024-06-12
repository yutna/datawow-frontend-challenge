import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

import cln from "./Dropdown.module.css";

import type { DropdownProps } from "./types";

export default function Dropdown({
  className = "",
  menuItems = [],
  onClickMenuItem = undefined,
  ...props
}: DropdownProps) {
  const handleSelect = (menu: string) => {
    onClickMenuItem && onClickMenuItem(menu);
  };

  return (
    <div {...props} className={clsx(cln.dropdown, className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={cln.trigger}>
          <DotsHorizontalIcon />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className={cln.content}
            sideOffset={5}
          >
            {menuItems.map(({ name, style }) => (
              <DropdownMenu.Item
                className={cln.item}
                key={name}
                onSelect={() => handleSelect(name)}
                style={style}
              >
                {name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
