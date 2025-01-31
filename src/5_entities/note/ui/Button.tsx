import { cn } from "@/6_shared/lib";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-black/15 bg-white/50 text-black/80 hover:border-black/20 hover:bg-white/80 dark:bg-black/10 dark:text-white/80 dark:hover:bg-black/20",
        className,
      )}
      {...props}
    />
  );
};
