import Link from "next/link";

export const AuthButton = () => {
  return (
    <Link
      href="?login"
      className="flex h-8 cursor-pointer items-center rounded-lg border border-black/15 px-3.5 text-sm hover:border-black/20 hover:bg-gray-100 dark:border-white/20 dark:hover:bg-gray-800"
    >
      Log In <span className="hidden md:inline">&nbsp;/ Sign Up</span>
    </Link>
  );
};
