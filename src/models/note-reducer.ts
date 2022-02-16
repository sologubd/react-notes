import { INoteListState, NoteListEvent, NotesEventType } from "../types";

export const notesReducer = (state: INoteListState, event: NotesEventType): INoteListState => {
  switch (event.type) {
    case NoteListEvent.ADD_NOTE: {
      const notes = [event.note, ...state.notes];
      return {
        ...state,
        notes: notes,
        selectedNoteId: 0,
      };
    }
    case NoteListEvent.SELECT_NOTE: {
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: event.noteId,
      };
    }
    case NoteListEvent.REMOVE_NOTE: {
      if (state.selectedNoteId === null) return state;
      const notes = state.notes.filter((_, index) => index !== state.selectedNoteId);
      return {
        ...state,
        notes: notes,
        selectedNoteId: notes.length === 0 ? null : 0,
      };
    }
  }
};
