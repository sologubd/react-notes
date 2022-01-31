import React, { useState, useEffect } from "react";

import { INote } from "../types";
import { validateTitle, validateText } from "../note-model";

type Props = {
  note: INote;
  goToMainView: () => void;
  addNote: (note: INote) => void;
};

const NoteForm: React.FC<Props> = ({ note, addNote, goToMainView }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const [descriptionIsValid, descriptionValidationErrors] = validateText(text);
  const [titleIsValid, titleValidationErrors] = validateTitle(title);

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    setShowErrors(true);
    if (descriptionIsValid && titleIsValid) {
      addNote({ title: title, text: text });
      goToMainView();
    }
  };

  useEffect(() => {
    return () => {
      setShowErrors(true);
    };
  }, [title, text]);

  return (
    <div className="section">
      <h2>Add a new Note</h2>
      <div className="field">
        <div className="control">
          <input
            id="title"
            className="input"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {showErrors &&
            titleValidationErrors.map((err) => (
              <p key={err} className="help is-danger">
                {err}
              </p>
            ))}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            id="note"
            className="textarea"
            placeholder="Add a Note"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          {showErrors &&
            descriptionValidationErrors.map((err) => (
              <p key={err} className="help is-danger">
                {err}
              </p>
            ))}
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-dark" onClick={onSubmit}>
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-dark" onClick={goToMainView}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoteForm };
