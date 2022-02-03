import React, { useReducer, useEffect } from "react";

import { Main } from "./components/main";
import { notesReducer } from "./note-reducer";
import { NotesContext } from "./context";
import { Mode } from "./types";

import { getNotes, saveNotes } from "./db";

const NotesListProvider: React.FC = ({ children }) => {
  const storedNotes = getNotes();
  const selectedNoteId = storedNotes.length == 0 ? null : 0;
  const appState = {
    notes: storedNotes,
    selectedNoteId: selectedNoteId,
    mode: Mode.VIEW,
  };
  const [state, dispatch] = useReducer(notesReducer, appState);
  useEffect(() => {
    saveNotes(state.notes);
  }, [state.notes]);

  return <NotesContext.Provider value={[state, dispatch]}>{children}</NotesContext.Provider>;
};

const App: React.FC = () => {
  return (
    <NotesListProvider>
      <Main />
    </NotesListProvider>
  );
};

export default App;
