import React, { useReducer } from "react";

import { Main } from "./components/main";
import { notesReducer } from "./note-reducer";
import { NotesContext, initialState } from "./context";

const NotesListProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
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
