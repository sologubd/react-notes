import React from "react";

import { Mode } from "../types";
import { NotesState } from "../context";

type Props = {
  readonly goToMainView: () => void;
  readonly removeNote: () => void;
};

const NotesNavbarView: React.FC<Props> = ({ goToMainView, removeNote }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <span className="icon is-medium" onClick={goToMainView}>
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
  const [_, actions] = NotesState();
  const goToMainView = () => actions.changeView(Mode.EDIT);
  return <NotesNavbarView goToMainView={goToMainView} removeNote={actions.removeNote} />;
};
