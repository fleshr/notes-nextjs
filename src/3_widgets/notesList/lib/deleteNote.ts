"use server";

import { getUser } from "@/4_features/auth";
import { prisma } from "@/6_shared/api";
import { revalidateTag } from "next/cache";

export const deleteNote = async (noteId: number) => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const updatedNote = await prisma.note.delete({
    where: { id: noteId, userId: user.id },
  });

  revalidateTag("notes");

  return updatedNote;
};
