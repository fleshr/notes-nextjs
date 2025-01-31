"use client";

import React from "react";
import { colors } from "../model/colors";
import { FilterItem } from "./FilterItem";
import { useRouter, useSearchParams } from "next/navigation";

export const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterSelect = (color: keyof typeof colors) => {
    const params = new URLSearchParams(searchParams ?? {});
    const isExist = params.has("color", color);

    if (isExist) {
      params.delete("color", color);
    } else {
      params.append("color", color);
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="mr-0.5 flex w-full flex-wrap items-center justify-end gap-1 sm:order-2 sm:w-auto">
      <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">
        Filter by color:
      </span>
      {Object.keys(colors).map((color) => (
        <FilterItem
          key={color}
          color={color as keyof typeof colors}
          onClick={handleFilterSelect}
          selected={searchParams?.has("color", color)}
        />
      ))}
    </div>
  );
};
