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
  const [notes, setNotes] = useState<INote[]>(getNotes());
  const [mode, setMode] = useState<Mode>(Mode.VIEW);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes.length > 0 ? 0 : null );

  const note = (selectedNoteId !== null) ? notes[selectedNoteId] : {title: "Welcome to Web Notes App!", text:""};
  const setViewMode = () => setMode(Mode.VIEW);
  const addNote = (note: INote) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes)
    setSelectedNoteId(0);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
  const removeNote = () => {
    if (selectedNoteId !== null){
      notes.splice(selectedNoteId, 1);
      setNotes(notes);
      window.localStorage.setItem("notes", JSON.stringify(notes));
      (notes.length === 0) ? setSelectedNoteId(null) : setSelectedNoteId(0);
    }
  }

  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar setMode={setMode} removeNote={removeNote}/>
        <NotesList notes={notes} showNote={setSelectedNoteId} selectedNoteId={selectedNoteId} />
      </div>
      <div className="column is-three-quarters content">
        {(mode === Mode.VIEW) && <Note note={note} />}
        {(mode === Mode.EDIT) && <NoteForm 
                                    goToMainView={setViewMode}
                                    note={note}
                                    addNote={addNote}
                                  />
        }
      </div>
    </div>
  );
}

export default App;
