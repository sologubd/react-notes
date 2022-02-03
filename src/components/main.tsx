import React from "react";

import { Note } from "./note";
import { NoteForm } from "./note-form";
import { NotesList } from "./notes-list";
import { NotesNavbar } from "./navigation";
import { Mode } from "../types";
import { useNoteListState } from "../context";

type Props = {
  readonly viewMode: Mode;
};

const MainView: React.FC<Props> = ({ viewMode }) => {
  return (
    <div className="columns">
      <div className="column">
        <NotesNavbar />
        <NotesList />
      </div>
      <div className="column is-three-quarters content">
        {viewMode === Mode.VIEW && <Note />}
        {viewMode === Mode.EDIT && <NoteForm />}
      </div>
    </div>
  );
};

export const Main: React.FC = () => {
  const state = useNoteListState();
  return <MainView viewMode={state.mode} />;
};
