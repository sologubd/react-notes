import React, { useContext, useState, useEffect } from "react";

import { getNotes, saveNotes } from "./db";
import { INote, Dispatcher, Mode, NoteListEvent, NullDispatcher, ViewEvent } from "./types";

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

export const NotesContext = React.createContext<[NotesListState, Dispatcher]>([initialState, NullDispatcher]);
export const useNoteState = () => {
  const [state, dispatch] = useContext(NotesContext);
  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    selectNote: selectNote(dispatch),
    removeNote: removeNote(dispatch),
    changeView: changeView(dispatch),
  }));

  useEffect(() => {
    saveNotes(state.notes);
  }, [state.notes]);

  return [state, actions] as const;
};
