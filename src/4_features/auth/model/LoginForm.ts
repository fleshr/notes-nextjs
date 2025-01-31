import { RegisterFormSchema } from "./RegisterForm";

export const LoginFormSchema = RegisterFormSchema.omit({
  username: true,
});

export type LoginFormState =
  | {
      errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
      };
      messsage?: string;
    }
  | undefined;
