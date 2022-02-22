import React from "react";

import { NoteFormView } from "./note-form-view";
import { useNoteListActions } from "../models/note-context";
import { useViewActions } from "../models/view-context";
import { useNoteFormActions, useNoteFormState } from "../models/edit-note-context";

export const NoteForm: React.FC = () => {
  const noteListActions = useNoteListActions();
  const viewActions = useViewActions();
  const noteFormState = useNoteFormState();
  const noteFormActions = useNoteFormActions();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => noteFormActions.changeTitle(e.target.value);
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => noteFormActions.changeText(e.target.value);
  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    noteFormActions.showValidationErrors(true);
    if (noteFormState.titleIsValid && noteFormState.titleIsValid) {
      noteListActions.addNote({ title: noteFormState.title, text: noteFormState.text });
      viewActions.goToNotesView();
    }
  };

  return (
    <NoteFormView
      titleValidationErrors={noteFormState.titleValidationErrors}
      textValidationErrors={noteFormState.textValidationErrors}
      showValidationErrors={noteFormState.showValidationErrors}
      onTitleChange={onTitleChange}
      onTextChange={onTextChange}
      goToNotesView={viewActions.goToNotesView}
      onSubmit={onSubmit}
    />
  );
};
