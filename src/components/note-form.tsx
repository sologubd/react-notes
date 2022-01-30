import React, { useState } from "react";

import { INote } from "../types";


type Props = {
  note: INote,
  goToMainView: () => void,
  addNote: (note: INote) => void,
}

interface IFieldValidator {
  isValid: boolean,
  errors: string[],
}


const NoteForm: React.FC<Props> = ({note, addNote, goToMainView}) => {
  const [title, setTitle] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [titleValidator, setTitleValidator] = useState<IFieldValidator>({isValid: false, errors: []})
  const [textValidator, setTextValidator] = useState<IFieldValidator>({isValid: true, errors: []})

  const validateTitle = (value: string) => {
    let errors: string[] = [],
    titleIsEmpty: boolean = (value.length == 0);
    if (titleIsEmpty) errors.push("Title cannot be empty");
    setTitleValidator({isValid: !titleIsEmpty, errors: errors})
  }
  const validateText = (value: string) => {
    let errors: string[] = [];    
    const extraCharsInText: number = value.length - 1000;
    if (extraCharsInText > 0) errors.push(`Text contains ${extraCharsInText} extra characters.`);
    setTextValidator({isValid: !(extraCharsInText > 0), errors: errors})
  }
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    validateTitle(e.target.value);
  }
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    validateText(e.target.value);
  }
  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    validateText(text);
    validateTitle(title);
    if (textValidator.isValid && titleValidator.isValid) {
      addNote({title: title, text: text});
      goToMainView();
    }
  }

  
  return (
    <div className="section">
      <h2>Add a new Note</h2>
      <div className="field">
        <div className="control">
          <input id="title" className="input" type="text" placeholder="Title" onChange={onTitleChange}/>
          {titleValidator.errors.map((err: string, key: number) => <p key={key} className="help is-danger">{err}</p>)}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea id="note" className="textarea" placeholder="Add a Note" onChange={onTextChange}></textarea>
          {textValidator.errors.map((err: string, key: number) => <p key={key} className="help is-danger">{err}</p>)}
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-dark" onClick={onSubmit}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-dark" onClick={goToMainView}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export { NoteForm }
