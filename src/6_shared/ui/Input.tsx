import React, { FC, InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "h-9 w-full rounded-lg border border-black/15 bg-white px-4 placeholder:text-black/50 dark:border-white/20 dark:bg-gray-800 dark:placeholder:text-white/50",
        className,
      )}
      {...props}
    />
  );
};
