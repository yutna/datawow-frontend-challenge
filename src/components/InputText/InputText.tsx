import clsx from "clsx";
import { forwardRef } from "react";

import cln from "./InputText.module.css";

import type { InputTextProps } from "./types";

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input {...props} className={clsx(cln.inputText, className)} ref={ref} />
    );
  },
);

export default InputText;
