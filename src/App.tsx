import React, { useReducer, useEffect, useState } from "react";

import { Main } from "./components/main";
import { notesReducer } from "./models/note-reducer";
import { NotesContext, initialState as noteListInitialState } from "./models/note-context";
import { viewReducer } from "./models/view-reducer";
import { ViewContext, initialState as viewInitialState } from "./models/view-context";
import { noteFormReducer } from "./models/edit-note-reducer";
import { initialState as NoteListInitialState, NoteFormContext } from "./models/edit-note-context";
import { ViewMode, INoteListState, IViewState } from "./types";
import { userIsAuthenticated, getNotes, saveNotes } from "./db";

const NotesListProvider: React.FC = ({ children }) => {
  const [storedNotes] = useState(() => getNotes());
  const selectedNoteId = storedNotes.length === 0 ? null : 0;
  const notesState: INoteListState = {
    ...noteListInitialState,
    notes: storedNotes,
    selectedNoteId: selectedNoteId,
  };
  const [state, dispatch] = useReducer(notesReducer, notesState);
  useEffect(() => {
    saveNotes(state.notes);
  }, [state.notes]);

  return <NotesContext.Provider value={[state, dispatch]}>{children}</NotesContext.Provider>;
};

const ViewProvider: React.FC = ({ children }) => {
  const [isAuthenticated] = useState(() => userIsAuthenticated());
  const viewState: IViewState = {
    ...viewInitialState,
    viewMode: isAuthenticated ? ViewMode.NOTES_LIST : ViewMode.LOGIN,
  };
  const [state, dispatch] = useReducer(viewReducer, viewState);

  return <ViewContext.Provider value={[state, dispatch]}>{children}</ViewContext.Provider>;
};

const NoteFormProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(noteFormReducer, NoteListInitialState);
  return <NoteFormContext.Provider value={[state, dispatch]}>{children}</NoteFormContext.Provider>;
};

const App: React.FC = () => {
  return (
    <ViewProvider>
      <NotesListProvider>
        <NoteFormProvider>
          <Main />
        </NoteFormProvider>
      </NotesListProvider>
    </ViewProvider>
  );
};

export default App;
