import React from "react";

import { Mode } from "../types";
import { useNoteState } from "../context";

type Props = {
  readonly addNote: () => void;
  readonly removeNote: () => void;
};

const NotesNavbarView: React.FC<Props> = ({ addNote, removeNote }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <span className="icon is-medium" onClick={addNote}>
                <i className="fa fa-plus"></i>
              </span>
              <span className="icon is-medium">
                <i className="fa fa-edit"></i>
              </span>
              <span className="icon is-medium" onClick={removeNote}>
                <i className="fa fa-trash"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NotesNavbar: React.FC = () => {
  const useNoteListActions = () => useNoteState()[1];
  const actions = useNoteListActions();
  const addNote = () => actions.changeView(Mode.EDIT);
  return <NotesNavbarView addNote={addNote} removeNote={actions.removeNote} />;
};
