import React from "react";

import { NotesState } from "../context";
import { INote } from "../types";

type Props = {
  readonly note: INote;
};

const NoteView: React.FC<Props> = ({ note }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{note.title}</h1>
        {note.text}
      </div>
    </section>
  );
};

export const Note: React.FC = () => {
  const [state] = NotesState();

  const note =
    state.selectedNoteId !== null
      ? state.notes[state.selectedNoteId]
      : { title: "Welcome to Web Notes App!", text: "" };
  return <NoteView note={note} />;
};
