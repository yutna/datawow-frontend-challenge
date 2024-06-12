import { ComponentPropsWithoutRef, CSSProperties } from "react";

export interface MenuItem {
  name: string;
  style?: CSSProperties;
}

export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  menuItems?: MenuItem[];
  onClickMenuItem?: (menu: string) => void;
}
