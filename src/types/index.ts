import { IAddNoteEvent, IRemoveNoteEvent, ISelectNoteEvent } from "./notes-list";
import { IChangeViewEvent } from "./view";
import { ITitleChangeEvent, ITextChangeEvent, IShowValidationErrorsEvent } from "./edit-note";

export * from "./enums";
export * from "./null-objects";
export * from "./edit-note";
export * from "./notes-list";
export * from "./view";

export type NotesEventType = IAddNoteEvent | IRemoveNoteEvent | ISelectNoteEvent;
export type NoteFormEventType = ITitleChangeEvent | ITextChangeEvent | IShowValidationErrorsEvent;
export type ViewEventType = IChangeViewEvent;

export type NoteDispatcher = (event: NotesEventType) => void;
export type NoteFormDispatcher = (event: NoteFormEventType) => void;
export type ViewDispatcher = (event: ViewEventType) => void;
