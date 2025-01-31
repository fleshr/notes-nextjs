import { Prisma } from "@prisma/client";

export type NoteType = Prisma.NoteGetPayload<{ omit: { userId: true } }>;
