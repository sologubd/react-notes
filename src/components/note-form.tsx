import React, { useState } from "react";

import { INote } from "../types";


type Props = {
  note: INote,
  goToMainView: () => void,
  addNote: (note: INote) => void,
}

interface IField {
  value: string,
  isValid: boolean,
  errors: string[]
}


const NoteForm: React.FC<Props> = ({note, addNote, goToMainView}) => {
  const [title, setTitile] = useState<IField>({value: "", isValid: false, errors: []})
  const [text, setText] = useState<IField>({value: "", isValid: true, errors: []})
  
  const handleCancelBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    goToMainView();
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let titleValidationErrors = [];
    
    const titleIsEmpty = (e.target.value.length == 0);
    if (titleIsEmpty) titleValidationErrors.push("Title cannot be empty");
    const isValid = !titleIsEmpty;
    
    setTitile({
      value: e.target.value,
      isValid: isValid,
      errors: titleValidationErrors,
    });
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let textValidationErrors = [];
    
    const extraCharsInText = e.target.value.length - 1000;
    const isValid = !(extraCharsInText > 0);
    if (extraCharsInText > 0) textValidationErrors.push(`Text contains ${extraCharsInText} extra characters.`);

    setText({
      value: e.target.value,
      isValid: isValid,
      errors:textValidationErrors,
    })
  }

  const submitNote = (e: React.MouseEvent<HTMLElement>) => {
    if (!title.isValid || !text.isValid) return;
    addNote({title: title.value, text: text.value});
    goToMainView();
  }
  return (
    <div className="section">
      <h2>Add a new Note</h2>
      <div className="field">
        <div className="control">
          <input id="title" className="input" type="text" placeholder="Title" onChange={handleTitleChange}/>
          {title.errors.map((err: string) => <p className="help is-danger">{err}</p>)}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea id="note" className="textarea" placeholder="Add a Note" onChange={handleTextChange}></textarea>
          {text.errors.map((err: string) => <p className="help is-danger">{err}</p>)}
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-dark" onClick={submitNote}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-dark" onClick={handleCancelBtnClick}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export { NoteForm }
