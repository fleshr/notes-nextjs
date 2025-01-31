"use client";

import { logout } from "@/4_features/auth";
import { useTheme } from "next-themes";
import { FC, useCallback, useEffect, useRef } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineLogout,
} from "react-icons/md";
import { TbEdit } from "react-icons/tb";

type UserDropdownProps = {
  position: { top: number; right: number };
  onClose: () => void;
};

export const UserDropdown: FC<UserDropdownProps> = ({ position, onClose }) => {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [handleClose]);

  return (
    <div
      ref={ref}
      style={position}
      className="absolute top-13.5 right-0 z-50 w-42.5 rounded-lg bg-white px-2.5 shadow-lg dark:bg-gray-700"
    >
      <ul className="divide-y divide-black/10 dark:divide-white/10">
        <li className="py-1.5">
          <button className="-ml-1 flex w-[calc(100%_+_8px)] cursor-pointer items-center rounded-md px-1 py-1 hover:bg-gray-200/80 dark:hover:bg-gray-600">
            <TbEdit className="mr-2.5 flex-shrink-0 text-[22px]" />
            <span>Edit profile</span>
          </button>
        </li>
        <li className="py-1.5">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="-ml-1 flex w-[calc(100%_+_8px)] cursor-pointer items-center rounded-md px-1 py-1 hover:bg-gray-200/80 dark:hover:bg-gray-600"
          >
            {theme !== "dark" ? (
              <MdOutlineLightMode className="mr-2.5 flex-shrink-0 text-[22px]" />
            ) : (
              <MdOutlineDarkMode className="mr-2.5 flex-shrink-0 text-[22px]" />
            )}
            <span>{theme !== "dark" ? "Dark theme" : "Light theme"}</span>
          </button>
        </li>
        <li className="py-1.5">
          <button
            onClick={async () => {
              await logout();
            }}
            className="-ml-1 flex w-[calc(100%_+_8px)] cursor-pointer items-center rounded-md px-1 py-1 hover:bg-gray-200/80 dark:hover:bg-gray-600"
          >
            <MdOutlineLogout className="mr-2.5 text-[22px]" />
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
