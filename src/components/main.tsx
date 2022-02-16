import React from "react";

import { View } from "../types";
import { NoteForm } from "./note-form";
import { NotesList } from "./notes-list";
import { useViewState } from "../models/view-context";
import { Login } from "./auth";

type Props = {
  readonly view: View;
};

const MainView: React.FC<Props> = ({ view }) => {
  switch (view) {
    case View.LOGIN:
      return <Login />;
    case View.NOTES_LIST:
      return <NotesList />;
    case View.EDIT_NOTE:
      return <NoteForm />;
  }
};

export const Main: React.FC = () => {
  const state = useViewState();
  return <MainView view={state.view} />;
};
