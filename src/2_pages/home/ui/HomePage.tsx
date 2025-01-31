import { getUser } from "@/4_features/auth";
import { Header } from "@/3_widgets/header";
import { NotesList } from "@/3_widgets/notesList";
import { NoteColors } from "@prisma/client";
import { FC } from "react";
import { createGetNotes } from "../lib/createGetNotes";
import { landingNotes } from "../model/landingNotes";

type HomePageProps = {
  searchParams: Promise<{ color: string | string[] | undefined }>;
};

export const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const { color: colorParam = Object.keys(NoteColors) } = await searchParams;
  const color = Array.isArray(colorParam) ? colorParam : [colorParam];

  const user = await getUser();
  const getNotes = createGetNotes(user?.id);
  const notes = user
    ? await getNotes(user.id, color)
    : landingNotes.filter((note) => color.includes(note.color));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-lg px-2.5 py-7.5 md:px-5">
        <NotesList notes={notes} />
      </main>
    </>
  );
};
