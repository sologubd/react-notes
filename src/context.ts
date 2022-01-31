import React, { useContext, useState } from "react";

import { getNotes } from "./db";
import { INote, Dispatcher, Mode, NoteListEvent, ViewEvent } from "./types";

interface NotesListState {
  readonly notes: INote[];
  readonly selectedNoteId: number | null;
  readonly mode: Mode;
}

export const initialState = {
  notes: getNotes(),
  selectedNoteId: null,
  mode: Mode.VIEW,
};

export const addNote =
  (dispatch: Dispatcher) =>
  (note: INote): void =>
    dispatch({
      type: NoteListEvent.ADD_NOTE,
      note,
    });

export const selectNote =
  (dispatch: Dispatcher) =>
  (noteId: number): void =>
    dispatch({
      type: NoteListEvent.SELECT_NOTE,
      noteId,
    });

export const removeNote = (dispatch: Dispatcher) => (): void =>
  dispatch({
    type: NoteListEvent.REMOVE_NOTE,
  });

export const changeView =
  (dispatch: Dispatcher) =>
  (mode: Mode): void =>
    dispatch({
      type: ViewEvent.CHANGE_VIEW,
      mode,
    });

export const NotesContext = React.createContext<[NotesListState, Dispatcher]>([initialState, () => undefined]);

export const NotesState = () => {
  const [state, dispatch] = useContext(NotesContext);
  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    selectNote: selectNote(dispatch),
    removeNote: removeNote(dispatch),
    changeView: changeView(dispatch),
  }));

  return [state, actions] as const;
};
