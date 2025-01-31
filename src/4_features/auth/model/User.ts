import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
  select: { id: true; username: true; email: true };
}>;
