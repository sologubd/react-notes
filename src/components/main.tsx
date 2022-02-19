import React from "react";

import { ViewMode } from "../types";
import { NoteForm } from "./note-form";
import { NotesList } from "./notes-list";
import { useViewState } from "../models/view-context";
import { Login } from "./auth";

type Props = {
  readonly viewMode: ViewMode;
};

const MainView: React.FC<Props> = ({ viewMode }) => {
  switch (viewMode) {
    case ViewMode.LOGIN:
      return <Login />;
    case ViewMode.NOTES_LIST:
      return <NotesList />;
    case ViewMode.EDIT_NOTE:
      return <NoteForm />;
  }
};

export const Main: React.FC = () => {
  const state = useViewState();
  return <MainView viewMode={state.viewMode} />;
};
