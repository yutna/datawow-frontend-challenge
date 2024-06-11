import type { ComponentPropsWithoutRef } from "react";

export interface TodoProgressProps extends ComponentPropsWithoutRef<"header"> {
  completed?: number;
  completedText?: string;
  heading?: string;
  total?: number;
}
