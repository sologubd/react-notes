import { Mode, NoteListEvent, ChangeViewEvent } from "./enums";

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

export type IGoToMainViewEvent = {
  readonly type: ChangeViewEvent.GO_TO_MAIN_VIEW;
};

export type IGoToEditViewEvent = {
  readonly type: ChangeViewEvent.GO_TO_EDIT_VIEW;
};

export interface INoteListState {
  readonly notes: INote[];
  readonly mode: Mode;
  readonly selectedNoteId: number | null;
}

export type EventType = IAddNoteEvent | IRemoveNoteEvent | ISelectNoteEvent | IGoToMainViewEvent | IGoToEditViewEvent;

export type Dispatcher = (event: EventType) => void;
