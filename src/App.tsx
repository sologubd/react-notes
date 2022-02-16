import React, { useReducer, useEffect, useState } from "react";

import { Main } from "./components/main";
import { notesReducer } from "./note-reducer";
import { NotesContext } from "./note-context";
import { viewReducer } from "./view-reducer";
import { ViewContext } from "./view-context";
import { View } from "./types";
import { getNotes, saveNotes } from "./db";

const NotesListProvider: React.FC = ({ children }) => {
  const [storedNotes] = useState(() => getNotes());
  const selectedNoteId = storedNotes.length === 0 ? null : 0;
  const notesState = {
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
  const viewState = {
    view: View.NOTES_LIST,
  };
  const [state, dispatch] = useReducer(viewReducer, viewState);

  return <ViewContext.Provider value={[state, dispatch]}>{children}</ViewContext.Provider>;
};

const App: React.FC = () => {
  return (
    <ViewProvider>
      <NotesListProvider>
        <Main />
      </NotesListProvider>
    </ViewProvider>
  );
};

export default App;
