import React from "react";
import { INote } from "../types";
import { NotesState } from "../context";

type Props = {
  readonly notes: INote[];
  readonly selectedNoteId: number | null;
  readonly selectNote: (noteId: number) => void;
};

const NotesListView: React.FC<Props> = ({ notes, selectedNoteId, selectNote }: Props) => {
  return (
    <div>
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
  );
};

export const NotesList: React.FC = () => {
  const [state, actions] = NotesState();
  return <NotesListView notes={state.notes} selectedNoteId={state.selectedNoteId} selectNote={actions.selectNote} />;
};
