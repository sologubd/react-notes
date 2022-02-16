import { INote } from "./types";

export const getNotes = (): INote[] => {
  const notes = window.localStorage.getItem("notes");
  if (notes === null) return [];
  return JSON.parse(notes);
};

export const saveNotes = (notes: INote[]) => {
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

export const userIsAuthenticated = (): boolean => {
  const notes = window.localStorage.getItem("authenticated");
  return notes === null ? false : JSON.parse(notes);
};

export const login = () => {
  window.localStorage.setItem("authenticated", JSON.stringify(true));
};

export const logout = () => {
  window.localStorage.setItem("authenticated", JSON.stringify(false));
};
