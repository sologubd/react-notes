import React, { useState, useEffect } from "react";

import { useNoteListActions } from "../note-context";
import { useViewActions } from "../view-context";
import { INote } from "../types";
import { validateTitle, validateText } from "../validator";

type Props = {
  readonly addNote: (note: INote) => void;
  readonly goToNotesView: () => void;
};

const NoteFormView: React.FC<Props> = ({ addNote, goToNotesView }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const [descriptionIsValid, descriptionValidationErrors] = validateText(text);
  const [titleIsValid, titleValidationErrors] = validateTitle(title);

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    setShowErrors(true);
    if (descriptionIsValid && titleIsValid) {
      addNote({ title: title, text: text });
      goToNotesView();
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
            onChange={(e) => setText(e.target.value)}></textarea>
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
          <button className="button is-dark" onClick={goToNotesView}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export const NoteForm: React.FC = () => {
  const noteActions = useNoteListActions();
  const viewActions = useViewActions();
  return <NoteFormView addNote={noteActions.addNote} goToNotesView={viewActions.goToNotesView} />;
};
