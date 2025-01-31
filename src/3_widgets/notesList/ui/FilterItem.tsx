import React, { FC } from "react";
import { colors } from "../model/colors";
import { MdOutlineCheck } from "react-icons/md";
import { cn } from "@/6_shared/lib";

type FilterItemProps = {
  color?: keyof typeof colors;
  selected?: boolean;
  onClick?: (color: keyof typeof colors) => void;
};

export const FilterItem: FC<FilterItemProps> = ({
  color = "green",
  selected = false,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick?.(color)}
      className={cn(
        "contra flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-black/15 dark:border-white/20",
        selected
          ? ["hover:brightness-95 dark:hover:brightness-110", colors[color]]
          : "bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800",
      )}
    >
      {selected ? (
        <MdOutlineCheck className="opacity-80" />
      ) : (
        <div
          className={cn(
            "h-3 w-3 rounded-full border border-black/10 dark:border-white/10",
            colors[color],
          )}
        />
      )}
    </button>
  );
};
