import { cn } from "@/6_shared/lib";
import "../styles";
import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { inter } from "@/6_shared/ui";
import { ThemeProvider } from "next-themes";
import { AuthModal, getUser, SessionProvider } from "@/4_features/auth";

export const metadata: Metadata = { title: "Notes App" };

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const user = await getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 font-sans leading-tight text-gray-900 antialiased dark:bg-gray-800 dark:text-white",
          inter.variable,
        )}
      >
        <ThemeProvider>
          <SessionProvider session={user}>
            {children}
            <AuthModal />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
