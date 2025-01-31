"use client";

import { useState, FC } from "react";
import { NoteEditForm } from "./NoteEditForm";
import { NoteView } from "./NoteView";
import { colors } from "@/3_widgets/notesList/model/colors";
import { NoteColorsType, NoteType } from "..";
import { NoteColors } from "@prisma/client";
import { cn } from "@/6_shared/lib";

type View = "view" | "edit";

type NoteProps = {
  note: NoteType;
  view?: View;
  isEditable?: boolean;
  onNoteEdit?: (note: NoteType) => void;
  onNoteDelete?: (id: number) => void;
  onEditCancel?: () => void;
};

export const Note: FC<NoteProps> = ({
  note,
  onNoteDelete,
  view = "view",
  isEditable = true,
  onEditCancel,
  onNoteEdit,
}) => {
  const [viewState, setViewState] = useState<View>(view);
  const [noteState, setNoteState] = useState(note);

  const handleColorChange = () => {
    const keys = Object.keys(NoteColors) as Array<NoteColorsType>;
    const nextIndex = (keys.indexOf(noteState.color) + 1) % keys.length;
    setNoteState({
      ...noteState,
      color: NoteColors[keys[nextIndex]],
    });
  };

  const handleCancelEdit = () => {
    if (onEditCancel) {
      onEditCancel();
    } else {
      setNoteState(note);
      setViewState("view");
    }
  };

  const handleConfirmEdit = () => {
    setViewState("view");
    onNoteEdit?.(noteState);
  };

  return (
    <div
      className={cn(
        "relative flex min-h-[12rem] flex-col rounded-xl border border-black/10 px-5 pt-3.5 pb-3 text-black/90 dark:border-white/10 dark:text-white/90",
        colors[noteState.color],
      )}
    >
      {viewState === "edit" && isEditable && (
        <NoteEditForm
          title={noteState.title}
          onTitleChange={(title) => setNoteState({ ...noteState, title })}
          content={noteState.content}
          onContentChange={(content) => setNoteState({ ...noteState, content })}
          onColorChange={handleColorChange}
          withDelete={Boolean(onNoteDelete)}
          onConfirm={handleConfirmEdit}
          onCancel={handleCancelEdit}
          onDelete={() => onNoteDelete?.(note.id)}
        />
      )}
      {viewState === "view" && (
        <NoteView
          note={noteState}
          isEditable={isEditable}
          onEditButtonClick={() => setViewState("edit")}
        />
      )}
    </div>
  );
};
