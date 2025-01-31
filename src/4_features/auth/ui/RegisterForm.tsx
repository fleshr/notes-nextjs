"use client";

import { useActionState } from "react";
import { register } from "../api/register";
import { Input } from "@/6_shared/ui";
import { cn } from "@/6_shared/lib/cn";
import Link from "next/link";
import { Errors } from "./Errors";

export const RegisterForm = () => {
  const [state, action, pending] = useActionState(register, undefined);

  return (
    <div>
      <h2 className="text-center text-xl font-medium">Sign Up</h2>
      <form action={action} className="mt-8 flex flex-col">
        {state?.message && <Errors className="mb-2" errors={[state.message]} />}
        <Input
          className={cn(state?.errors?.username && "border-red-500")}
          type="text"
          placeholder="Username"
          name="username"
        />
        {state?.errors?.username && (
          <Errors
            size="small"
            className="mt-1"
            errors={state.errors.username}
          />
        )}
        <Input
          className={cn("mt-3", state?.errors?.email && "border-red-500")}
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
          className="mt-6 h-9 cursor-pointer rounded-lg bg-gray-900 text-white"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-8 text-center text-sm">
        Already a member?{" "}
        <Link href="?login" className="underline hover:no-underline">
          Log In
        </Link>
      </p>
    </div>
  );
};
