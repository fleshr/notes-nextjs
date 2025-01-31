import { NoteType } from "@/5_entities/note";
import { Actions } from "../model/actions";

export const reducer = (state: NoteType[], payload: Actions) => {
  switch (payload.type) {
    case "add":
      return [payload.note, ...state];
    case "update":
      return state.map((note) =>
        note.id === payload.note.id ? payload.note : note,
      );
    case "delete":
      return state.filter((note) => note.id !== payload.id);
  }
};
