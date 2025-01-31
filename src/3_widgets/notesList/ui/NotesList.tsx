"use client";

import { NotesHeader } from "./NotesHeader";
import { FC, startTransition, useOptimistic, useState } from "react";
import { Note, NoteType } from "@/5_entities/note";
import { editNote } from "../lib/editNote";
import { createNote } from "../lib/createNote";
import { deleteNote } from "../lib/deleteNote";
import { useSession } from "@/4_features/auth";
import { useRouter } from "next/navigation";
import { Actions } from "../model/actions";
import { reducer } from "../lib/reducer";
import { emptyNote } from "../model/emptyNote";

type NotesListProps = {
  notes: NoteType[];
};

export const NotesList: FC<NotesListProps> = ({ notes }) => {
  const user = useSession();
  const router = useRouter();
  const [newNote, setNewNote] = useState(false);
  const [optimisticNotes, setOptimisticNotes] = useOptimistic<
    NoteType[],
    Actions
  >(notes, reducer);

  const handleNoteCreate = async (note: NoteType) => {
    setNewNote(false);
    startTransition(() => {
      setOptimisticNotes({ type: "add", note });
    });
    await createNote(note);
  };

  const handleNoteEdit = async (note: NoteType) => {
    startTransition(() => {
      setOptimisticNotes({ type: "update", note });
    });
    await editNote(note);
  };

  const handleNoteDelete = async (id: number) => {
    startTransition(() => {
      setOptimisticNotes({ type: "delete", id });
    });
    await deleteNote(id);
  };

  return (
    <section>
      <NotesHeader
        onNewNoteClick={() =>
          user ? setNewNote(!newNote) : router.push("?login")
        }
      />
      <div className="mt-7.5 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-5">
        {newNote && (
          <Note
            view="edit"
            isEditable={true}
            onNoteEdit={handleNoteCreate}
            onEditCancel={() => setNewNote(false)}
            note={emptyNote}
          />
        )}
        {optimisticNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            isEditable={Boolean(user)}
            onNoteEdit={handleNoteEdit}
            onNoteDelete={handleNoteDelete}
          />
        ))}
      </div>
    </section>
  );
};
