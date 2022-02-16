import React from "react";

type Props = {
  readonly titleValidationErrors: string[];
  readonly textValidationErrors: string[];
  readonly showValidationErrors: boolean;
  readonly onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readonly goToNotesView: () => void;
  readonly onSubmit: (e: React.MouseEvent<HTMLElement>) => void;
};

export const NoteFormView: React.FC<Props> = ({
  titleValidationErrors,
  textValidationErrors,
  showValidationErrors,
  onTitleChange,
  onTextChange,
  goToNotesView,
  onSubmit,
}) => {
  return (
    <div className="section">
      <h2>Add a new Note</h2>
      <div className="field">
        <div className="control">
          <input id="title" className="input" type="text" placeholder="Title" onChange={onTitleChange} />
          {showValidationErrors &&
            titleValidationErrors.map((err) => (
              <p key={err} className="help is-danger">
                {err}
              </p>
            ))}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea id="note" className="textarea" placeholder="Add a Note" onChange={onTextChange}></textarea>
          {showValidationErrors &&
            textValidationErrors.map((err) => (
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
