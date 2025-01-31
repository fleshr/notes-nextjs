"use client";

import { FiPlus } from "react-icons/fi";
import { IoOptions } from "react-icons/io5";
import { FC, useState } from "react";
import { Filter } from "./Filter";

type NotesHeaderProps = {
  onNewNoteClick: () => void;
};

export const NotesHeader: FC<NotesHeaderProps> = ({ onNewNoteClick }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <div className="flex flex-wrap gap-y-3">
      <button
        onClick={onNewNoteClick}
        className="mr-auto flex h-9 flex-shrink-0 cursor-pointer items-center rounded-lg border border-black/15 bg-white pr-2.5 pl-3.5 hover:border-black/20 hover:bg-gray-100 sm:order-1 dark:border-white/20 dark:bg-gray-700 dark:hover:border-white/20 dark:hover:bg-gray-800"
      >
        <span className="font-medium">New note</span>
        <FiPlus className="ml-1 text-lg" />
      </button>
      <button
        onClick={() => setIsFilterShown(!isFilterShown)}
        className="ml-2.5 flex h-9 w-9 cursor-pointer items-center justify-center justify-self-end rounded-lg border border-black/15 bg-white hover:bg-gray-100 sm:order-3 dark:border-white/20 dark:bg-gray-700 dark:hover:bg-gray-800"
      >
        <IoOptions className="text-lg" />
      </button>
      {isFilterShown && <Filter />}
    </div>
  );
};
