import { NoteType } from "@/5_entities/note";

export type Actions =
  | { type: "add"; note: NoteType }
  | { type: "update"; note: NoteType }
  | { type: "delete"; id: number };
