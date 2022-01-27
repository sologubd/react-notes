import React, { useState } from "react";

import { Note } from "./components/note";
import { NoteForm } from "./components/note-form";
import { NotesList } from "./components/notes-list";
import { NotesNavbar } from "./components/navigation";
import { Mode, INote } from "./types";


const App: React.FC = ({}) => {
  const WelcomeNote = {title: "Welcome to Web Notes App!", text:""};

  const [notes, setNotes] = useState<INote[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.VIEW);
  const [currentNote, setCurrentNote] = useState<INote>(WelcomeNote);

  const setViewMode = () => setMode(Mode.VIEW);

  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar setMode={setMode}/>
        <NotesList notes={notes} />
      </div>
      <div className="column is-three-quarters content">
        {(mode === Mode.VIEW) && <Note note={currentNote} />}
        {(mode === Mode.EDIT) && <NoteForm goToMainView={setViewMode} note={currentNote} />}
      </div>
    </div>
  );
}

export default App;
