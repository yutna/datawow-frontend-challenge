import clsx from "clsx";
import cln from "./ProgressBar.module.css";
import type { ProgressBarProps } from "./types";

export default function ProgressBar({
  className = "",
  max = 100,
  value = 0,
  ...props
}: ProgressBarProps) {
  return (
    <progress
      {...props}
      className={clsx(cln.progressBar, className)}
      max={max}
      value={value}
    >
      <div className={cln.progressBarFallback}>
        <span
          className={cln.progressBarFallbackValue}
          style={{ width: `${value}%` }}
        >
          {value}&#37;
        </span>
      </div>
    </progress>
  );
}
