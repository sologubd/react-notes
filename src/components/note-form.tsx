import React from "react";

import { INote, Mode } from "../types";


type Props = {
  note: INote,
  setMode: (mode: Mode) => void,
}


const NoteForm: React.FC<Props> = ({note, setMode}) => {
  const handleCancelBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    setMode(Mode.VIEW);
  }
  return (
    <div className="section">
      <h2>Add a new Note</h2>
      <div className="field">
        <div className="control">
          <input id="title" className="input" type="text" placeholder="Title"/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea id="note" className="textarea" placeholder="Add a Note"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-dark">Submit</button>
        </div>
        <div className="control">
          <button className="button is-dark" onClick={handleCancelBtnClick}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export { NoteForm }
