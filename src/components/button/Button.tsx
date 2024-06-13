import clsx from "clsx";
import { forwardRef } from "react";

import cln from "./Button.module.css";

import type { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = null, className = "", type = "button", ...props }, ref) => (
    <button
      {...props}
      className={clsx(cln.btn, className)}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  ),
);

export default Button;
