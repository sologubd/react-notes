import { NoteFormEvent } from "./enums";

export interface ITitleChangeEvent {
  readonly type: NoteFormEvent.CHANGE_TITLE;
  readonly value: string;
}

export interface ITextChangeEvent {
  readonly type: NoteFormEvent.CHANGE_TEXT;
  readonly value: string;
}

export interface IShowValidationErrorsEvent {
  readonly type: NoteFormEvent.SHOW_ERRORS;
  readonly value: boolean;
}

export interface INoteFormState {
  readonly title: string;
  readonly text: string;
  readonly titleIsValid: boolean;
  readonly titleValidationErrors: string[];
  readonly textIsValid: boolean;
  readonly textValidationErrors: string[];
  readonly showValidationErrors: boolean;
}
