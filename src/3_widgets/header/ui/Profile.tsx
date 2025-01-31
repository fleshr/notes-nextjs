"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { UserDropdown } from "./UserDropdown";
import profileImage from "../assets/profile.png";
import { User } from "@/4_features/auth";

type ProfileProps = {
  user: User;
};

export const Profile: FC<ProfileProps> = ({ user: { username } }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });

  useLayoutEffect(() => {
    if (ref.current) {
      const right =
        window.innerWidth - (ref.current.offsetLeft + ref.current.offsetWidth);
      setDropdownPosition({ top: 60, right });
    }
  }, []);

  return (
    <>
      <button
        ref={ref}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex cursor-pointer items-center rounded-lg border border-black/15 py-0.5 pr-0.5 pl-1.5 hover:border-black/20 hover:bg-gray-100 dark:border-white/20 dark:hover:border-white/20 dark:hover:bg-gray-800"
      >
        {isDropdownOpen ? (
          <MdKeyboardArrowUp className="mt-px" />
        ) : (
          <MdKeyboardArrowDown className="mt-px" />
        )}
        <span className="mr-2.5 ml-1 font-medium">{username}</span>
        <Image
          className="rounded-md"
          src={profileImage}
          width={28}
          height={28}
          alt=""
        />
      </button>
      {isDropdownOpen &&
        createPortal(
          <UserDropdown
            position={dropdownPosition}
            onClose={() => setIsDropdownOpen(false)}
          />,
          document.body,
        )}
    </>
  );
};
