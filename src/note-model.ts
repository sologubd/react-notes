import { Mode, INote } from "./types";


export const validateTitle = (value: string): [boolean, string[]] => {
  let isValid = true, 
    errors = [];
  if (value.length == 0) {
    isValid = false;
    errors.push("Title cannot be empty");
  }
  return [isValid, errors]
  }
  
export const validateText = (value: string): [boolean, string[]] => {
  let isValid = true,
    errors = [];

  const extraCharacters = (value.length - 1000);
  if (extraCharacters > 0) {
    isValid = false;
    errors.push("Title cannot be empty");
  }
  return [isValid, errors]
  }

export const getNotes = (): INote[] => {
  let notes = window.localStorage.getItem("notes");
  if (notes === null) return [];
  return JSON.parse(notes);
}

export const saveNotes = (notes: INote[]) => {
  window.localStorage.setItem("notes", JSON.stringify(notes));
}
