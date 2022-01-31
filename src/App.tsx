import React, { useState } from "react";

import { Note } from "./components/note";
import { NoteForm } from "./components/note-form";
import { NotesList } from "./components/notes-list";
import { NotesNavbar } from "./components/navigation";
import { Mode, INote } from "./types";
import { getNotes, saveNotes } from "./note-model";


const App: React.FC = ({}) => {
  const [notes, setNotes] = useState<INote[]>(getNotes());
  const [mode, setMode] = useState<Mode>(Mode.VIEW);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes.length > 0 ? 0 : null );

  const note = (selectedNoteId !== null) ? notes[selectedNoteId] : {title: "Welcome to Web Notes App!", text:""};
  const setViewMode = () => setMode(Mode.VIEW);
  const addNote = (note: INote) => {
    const updatedNotes = [note, ...notes];
    setSelectedNoteId(0);
    setNotes(updatedNotes)
    saveNotes(updatedNotes);
  }
  const removeNote = () => {
    if (selectedNoteId !== null){
      const updateNotes = [...notes];
      updateNotes.splice(selectedNoteId, 1);
      (updateNotes.length === 0) ? setSelectedNoteId(null) : setSelectedNoteId(0);
      saveNotes(updateNotes);
      setNotes(updateNotes);
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
