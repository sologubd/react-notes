import React, { useState } from "react";

import { Note } from "./components/note";
import { NoteForm } from "./components/note-form";
import { NotesList } from "./components/notes-list";
import { NotesNavbar } from "./components/navigation";
import { Mode, INote } from "./types";


const getNotes = () => {
  let notes = window.localStorage.getItem("notes");
  if (notes === null) return [];
  return JSON.parse(notes);
}


const App: React.FC = ({}) => {
  const WelcomeNote = {title: "Welcome to Web Notes App!", text:""};

  const [notes, setNotes] = useState<INote[]>(getNotes());
  const [mode, setMode] = useState<Mode>(Mode.VIEW);
  const [currentNote, setCurrentNote] = useState<INote>(WelcomeNote);

  const setViewMode = () => setMode(Mode.VIEW);
  const addNote = (note: INote) => {
      notes.splice(0, 0, note);
      setNotes(notes);
      window.localStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar setMode={setMode}/>
        <NotesList notes={notes} />
      </div>
      <div className="column is-three-quarters content">
        {(mode === Mode.VIEW) && <Note note={currentNote} />}
        {(mode === Mode.EDIT) && <NoteForm goToMainView={setViewMode} note={currentNote} addNote={addNote} />}
      </div>
    </div>
  );
}

export default App;
