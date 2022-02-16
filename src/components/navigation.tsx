import React from "react";

import { useNoteListActions } from "../models/note-context";
import { useViewActions } from "../models/view-context";
import { logout } from "../db";

type Props = {
  readonly onAddNote: () => void;
  readonly onRemoveNote: () => void;
  readonly onLogout: () => void;
};

const NotesNavbarView: React.FC<Props> = ({ onAddNote, onRemoveNote, onLogout }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons">
              <span className="icon is-medium" onClick={onLogout}>
                <i className="fa fa-sign-out"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <span className="icon is-medium" onClick={onAddNote}>
                <i className="fa fa-plus"></i>
              </span>
              <span className="icon is-medium">
                <i className="fa fa-edit"></i>
              </span>
              <span className="icon is-medium" onClick={onRemoveNote}>
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
  const noteActions = useNoteListActions();
  const viewActions = useViewActions();
  const onLogout = () => {
    logout();
    viewActions.goToLoginView();
  };
  return (
    <NotesNavbarView onAddNote={viewActions.goToEditView} onRemoveNote={noteActions.removeNote} onLogout={onLogout} />
  );
};
