"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/6_shared/api";
import { redirect } from "next/navigation";
import { createSession } from "../lib/session";
import { RegisterFormSchema, RegisterFormState } from "../model/RegisterForm";

export const register = async (
  state: RegisterFormState,
  formData: FormData,
) => {
  const validatedFields = RegisterFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return { message: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  await createSession(user.id);

  redirect("/");
};
