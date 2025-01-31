"use client";

import { Input } from "@/6_shared/ui";
import { useActionState } from "react";
import { login } from "../api/login";
import Link from "next/link";
import { cn } from "@/6_shared/lib";
import { Errors } from "./Errors";

export const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div>
      <h2 className="text-center text-xl font-medium">Log In</h2>
      <form action={action} className="mt-8 flex flex-col">
        {state?.message && <Errors className="mb-2" errors={[state.message]} />}
        <Input
          className={cn(state?.errors?.email && "border-red-500")}
          type="email"
          name="email"
          placeholder="Email"
        />
        {state?.errors?.email && (
          <Errors size="small" className="mt-1" errors={state.errors.email} />
        )}
        <Input
          className={cn("mt-3", state?.errors?.password && "border-red-500")}
          type="password"
          name="password"
          placeholder="Password"
        />
        {state?.errors?.password && (
          <Errors
            size="small"
            className="mt-1"
            errors={state.errors.password}
          />
        )}
        <button
          disabled={pending}
          className="mt-4 h-9 cursor-pointer rounded-lg bg-gray-900 text-white"
        >
          Log In
        </button>
      </form>
      <p className="mt-8 text-center text-sm">
        Not a member?{" "}
        <Link href="?register" className="underline hover:no-underline">
          Sing Up
        </Link>
      </p>
    </div>
  );
};
