"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import { User } from "../model/User";

type SessionContext = User | null;

const SessionContext = createContext<SessionContext | undefined>(undefined);

export const useSession = () => {
  const session = useContext(SessionContext);

  if (session === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return session;
};

type SessionProviderProps = {
  children: ReactNode;
  session: SessionContext;
};

export const SessionProvider: FC<SessionProviderProps> = ({
  children,
  session,
}) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};
