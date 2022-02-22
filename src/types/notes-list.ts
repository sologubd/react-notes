import { NoteListEvent } from "./enums";

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
