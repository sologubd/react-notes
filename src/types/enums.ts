export enum ViewMode {
  NOTES_LIST = "NOTES_LIST",
  EDIT_NOTE = "EDIT_NOTE",
  LOGIN = "LOGIN",
}

export enum NoteListEvent {
  ADD_NOTE = "ADD_NOTE",
  REMOVE_NOTE = "REMOVE_NOTE",
  SELECT_NOTE = "SELECT_NOTE",
}

export enum ViewEvent {
  CHANGE_VIEW = "CHANGE_VIEW",
}

export enum NoteFormEvent {
  CHANGE_TITLE = "CHANGE_TITLE",
  CHANGE_TEXT = "CHANGE_TEXT",
  SHOW_ERRORS = "SHOW_ERRORS",
}
