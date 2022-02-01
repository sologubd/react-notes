import React from "react";

import { useNoteState } from "../context";
import { INote, NullNote } from "../types";

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
  const useNoteListState = () => useNoteState()[0];
  const state = useNoteListState();
  const note = state.selectedNoteId !== null ? state.notes[state.selectedNoteId] : NullNote;
  return <NoteView note={note} />;
};
