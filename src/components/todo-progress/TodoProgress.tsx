import clsx from "clsx";
import { ProgressBar } from "@/components/progress-bar";
import cln from "./TodoProgress.module.css";
import type { TodoProgressProps } from "./types";

export default function TodoProgress({
  className = "",
  completed = 0,
  completedText = "completed",
  heading = "Progress",
  total = 0,
  ...props
}: TodoProgressProps) {
  const progressValue = (completed / total) * 100.0;

  return (
    <header {...props} className={clsx(cln.todoProgress, className)}>
      <h1 className={cln.heading}>{heading}</h1>
      <ProgressBar value={progressValue} />
      <p className={cln.completed}>
        {completed} {completedText}
      </p>
    </header>
  );
}
