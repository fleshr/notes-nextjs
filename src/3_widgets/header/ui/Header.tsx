"use client";

import { Logo } from "./Logo";
import { AuthButton } from "./AuthButton";
import { useSession } from "@/4_features/auth/lib/sessionContext";
import { Profile } from "./Profile";

export const Header = () => {
  const user = useSession();

  return (
    <header className="h-12 w-full flex-shrink-0 bg-white shadow-md dark:bg-gray-700">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-2.5 md:px-5">
        <Logo />
        {user ? <Profile user={user} /> : <AuthButton />}
      </div>
    </header>
  );
};
