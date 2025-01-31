import { NoteColors } from "@prisma/client";

export const emptyNote = {
  id: 0,
  title: "",
  content: "",
  color: NoteColors.yellow,
  updatedAt: new Date(),
};
