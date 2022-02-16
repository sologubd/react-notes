import React, { useContext, useState } from "react";
import { INote, INoteListState, NoteDispatcher, NoteListEvent, nullDispathcer } from "../types";

export const initialState: INoteListState = {
  notes: [],
  selectedNoteId: null,
};

export const addNote =
  (dispatch: NoteDispatcher) =>
  (note: INote): void =>
    dispatch({
      type: NoteListEvent.ADD_NOTE,
      note,
    });

export const selectNote =
  (dispatch: NoteDispatcher) =>
  (noteId: number): void =>
    dispatch({
      type: NoteListEvent.SELECT_NOTE,
      noteId,
    });

export const removeNote = (dispatch: NoteDispatcher) => (): void =>
  dispatch({
    type: NoteListEvent.REMOVE_NOTE,
  });

export const NotesContext = React.createContext<[INoteListState, NoteDispatcher]>([initialState, nullDispathcer]);
export const useNoteState = () => {
  const [state, dispatch] = useContext(NotesContext);
  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    selectNote: selectNote(dispatch),
    removeNote: removeNote(dispatch),
  }));

  return [state, actions] as const;
};

export const useNoteListState = () => useNoteState()[0];
export const useNoteListActions = () => useNoteState()[1];
