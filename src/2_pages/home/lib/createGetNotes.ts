import { prisma } from "@/6_shared/api";
import { NoteColors } from "@prisma/client";
import { unstable_cache } from "next/cache";

export const createGetNotes = (userId: number | undefined) => {
  return unstable_cache(
    async (userId: number, color: string[]) => {
      const notes = await prisma.note.findMany({
        orderBy: { updatedAt: "desc" },
        where: {
          userId: userId,
          color: { in: color as NoteColors[] },
        },
      });

      return notes;
    },
    [String(userId)],
    { tags: ["notes"] },
  );
};
