import React from "react";

import { View } from "../types";
import { NoteForm } from "./note-form";
import { NotesList } from "./notes-list";
import { useViewState } from "../view-context";

type Props = {
  readonly view: View;
};

const MainView: React.FC<Props> = ({ view }) => {
  return (
    <span>
      {view === View.NOTES_LIST && <NotesList />}
      {view === View.EDIT_NOTE && <NoteForm />}
    </span>
  );
};

export const Main: React.FC = () => {
  const state = useViewState();
  return <MainView view={state.view} />;
};
