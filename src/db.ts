import { INote } from "./types";

export const getNotes = (): INote[] => {
  let notes = window.localStorage.getItem("notes");
  if (notes === null) return [];
  return JSON.parse(notes);
};

export const saveNotes = (notes: INote[]) => {
  window.localStorage.setItem("notes", JSON.stringify(notes));
};
