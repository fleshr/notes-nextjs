import { NoteType } from "@/5_entities/note";

export const landingNotes: NoteType[] = [
  {
    id: -1,
    title: "Welcome",
    content: "Welcome to Notes app.",
    color: "yellow",
    updatedAt: new Date("2024-03-06"),
  },
  {
    id: -2,
    title: "Usage",
    content: "For using this app you need to login or sign up.",
    color: "green",
    updatedAt: new Date("2024-03-06"),
  },
  {
    id: -3,
    title: "Filter",
    content:
      "You can filter your notes by color, for this click on button in right upper corner.",
    color: "blue",
    updatedAt: new Date("2024-03-06"),
  },
  {
    id: -4,
    title: "Theme",
    content: "You can change theme in the user menu.",
    color: "purple",
    updatedAt: new Date("2024-03-06"),
  },
];
