import React, { useState } from "react";

import { Note } from "./components/note";
import { NotesList } from "./components/notes-list";
import { NotesNavbar } from "./components/navigation";


const App: React.FC = ({}) => {
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState("view");
  const [currentNote, setCurrentNote] = useState({title: "Welcome to Web Notes App!", text:""});

  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar setMode={setMode}/>
        <NotesList notes={notes} />
      </div>
      <div className="column is-three-quarters content">
        <Note note={currentNote} />
      </div>
    </div>
  );
}

export default App;
