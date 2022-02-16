import { View, NoteListEvent, ViewEvent } from "./enums";

export * from "./enums";
export * from "./null-objects";

export interface INote {
  readonly title: string;
  readonly text: string;
}

export interface IAddNoteEvent {
  readonly type: NoteListEvent.ADD_NOTE;
  readonly note: INote;
}

export interface ISelectNoteEvent {
  readonly type: NoteListEvent.SELECT_NOTE;
  readonly noteId: number;
}

export type IRemoveNoteEvent = {
  readonly type: NoteListEvent.REMOVE_NOTE;
};
export interface INoteListState {
  readonly notes: INote[];
  readonly selectedNoteId: number | null;
}

export type IChangeViewEvent = {
  readonly type: ViewEvent.CHANGE_VIEW;
  readonly view: View;
};
export interface IViewState {
  readonly view: View;
}

export type NotesEventType = IAddNoteEvent | IRemoveNoteEvent | ISelectNoteEvent;
export type ViewEventType = IChangeViewEvent;

export type NoteDispatcher = (event: NotesEventType) => void;
export type ViewDispatcher = (event: ViewEventType) => void;
