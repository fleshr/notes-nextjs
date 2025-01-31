"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/6_shared/api";
import { redirect } from "next/navigation";
import { createSession } from "../lib/session";
import { LoginFormSchema, LoginFormState } from "../model/LoginForm";

export const login = async (state: LoginFormState, formData: FormData) => {
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return { message: "Invalid credentials" };
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return { message: "Invalid credentials" };
  }

  await createSession(user.id);

  redirect("/");
};
