import React from "react";
import { INote } from "../types";
import { useNoteState } from "../models/note-context";
import { NotesNavbar } from "./navigation";
import { Note } from "./note";

type Props = {
  readonly notes: INote[];
  readonly selectedNoteId: number | null;
  readonly selectNote: (noteId: number) => void;
};

const NotesListView: React.FC<Props> = ({ notes, selectedNoteId, selectNote }: Props) => {
  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar />
        {notes.map((item, id) => {
          const selected = selectedNoteId === id ? "selected" : "";
          return (
            <section key={id} className={`section is-small note-list-item ${selected}`} onClick={() => selectNote(id)}>
              <h1>{item.title}</h1>
              <div className="note">{item.text.slice(0, 200)}</div>
            </section>
          );
        })}
      </div>
      <div className="column is-three-quarters content">
        <Note />
      </div>
    </div>
  );
};

export const NotesList: React.FC = () => {
  const [state, actions] = useNoteState();
  return <NotesListView notes={state.notes} selectedNoteId={state.selectedNoteId} selectNote={actions.selectNote} />;
};
