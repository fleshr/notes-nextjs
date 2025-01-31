import { cn } from "@/6_shared/lib";
import { FC } from "react";

type ErrorsProps = {
  size?: "small" | "base";
  className?: string;
  errors: string[];
};

export const Errors: FC<ErrorsProps> = ({
  errors,
  className,
  size = "base",
}) => {
  return (
    <ul
      className={cn(
        "flex flex-col items-center gap-2",
        size === "base" ? "gap-1 text-sm" : "gap-0.5 text-xs",
        className,
      )}
    >
      {errors.map((error) => (
        <li key={error} className="text-center text-red-500">
          {error}
        </li>
      ))}
    </ul>
  );
};
