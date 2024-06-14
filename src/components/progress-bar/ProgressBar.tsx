import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";
import { isNull } from "lodash-es";
import { useEffect, useState } from "react";

import cln from "./ProgressBar.module.css";

import type { ProgressBarProps } from "./types";

export default function ProgressBar({
  className = "",
  max = 100,
  value = 0,
  ...props
}: ProgressBarProps) {
  // Hook
  const [progressInPercent, setProgressInPercent] = useState(0);

  // Variables
  const progressValue = isNull(value) ? 0 : value;

  if (max < 0 || max < progressValue) {
    throw new Error("Error! invalid max value");
  }

  // Effect hook
  useEffect(() => {
    const timer = setTimeout(
      () => setProgressInPercent((progressValue / max) * 100.0),
      500,
    );

    return () => clearTimeout(timer);
  }, [max, progressValue]);

  return (
    <Progress.Root
      {...props}
      className={clsx(cln.progressBar, className)}
      max={max}
      value={value}
    >
      <Progress.Indicator
        className={cln.indicator}
        style={{
          transform: `translateX(-${100 - progressInPercent}%)`,
        }}
      />
    </Progress.Root>
  );
}
