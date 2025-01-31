"use client";

import { MdOutlineClose } from "react-icons/md";
import { createPortal } from "react-dom";
import { LoginForm } from "./LoginForm";
import { useSearchParams } from "next/navigation";
import { RegisterForm } from "./RegisterForm";
import Link from "next/link";

export const AuthModal = () => {
  const searchParams = useSearchParams();

  const view =
    (searchParams?.has("login") && "login") ||
    (searchParams?.has("register") && "register") ||
    undefined;

  return (
    view &&
    createPortal(
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
        <div className="shadow-header relative h-full w-full bg-gray-50 px-5 pt-4 pb-8 md:h-auto md:w-[420px] md:rounded-xl md:px-[70px] dark:bg-gray-700">
          <Link
            href="/"
            className="absolute top-4 right-5 rounded-md p-0.5 hover:bg-black/10"
          >
            <MdOutlineClose className="text-2xl" />
          </Link>
          {view === "login" && <LoginForm />}
          {view === "register" && <RegisterForm />}
        </div>
      </div>,
      document.body,
    )
  );
};
