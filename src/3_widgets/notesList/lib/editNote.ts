"use server";

import { getUser } from "@/4_features/auth";
import { NoteType } from "@/5_entities/note";
import { prisma } from "@/6_shared/api";
import { revalidateTag } from "next/cache";

export const editNote = async (note: NoteType) => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const updatedNote = await prisma.note.update({
    where: { id: note.id, userId: user.id },
    data: {
      title: note.title,
      content: note.content,
      color: note.color,
    },
  });

  revalidateTag("notes");

  return updatedNote;
};
