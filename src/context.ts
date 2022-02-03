import React, { useContext, useState } from "react";
import { INote, Dispatcher, Mode, NoteListEvent, nullDispathcer, ViewEvent } from "./types";

interface NotesListState {
  readonly notes: INote[];
  readonly selectedNoteId: number | null;
  readonly mode: Mode;
}

export const initialState = {
  notes: [],
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

export const NotesContext = React.createContext<[NotesListState, Dispatcher]>([initialState, nullDispathcer]);
export const useNoteState = () => {
  const [state, dispatch] = useContext(NotesContext);
  const [actions] = useState(() => ({
    addNote: addNote(dispatch),
    selectNote: selectNote(dispatch),
    removeNote: removeNote(dispatch),
    goToMainView: () => changeView(dispatch)(Mode.VIEW),
    goToEditView: () => changeView(dispatch)(Mode.EDIT),
  }));

  return [state, actions] as const;
};

export const useNoteListState = () => useNoteState()[0];
export const useNoteListActions = () => useNoteState()[1];
