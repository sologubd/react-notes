import { saveNotes } from "./db";
import { INoteListState, Mode, NoteListEvent, ViewEvent, EventType } from "./types";

export const notesReducer = (state: INoteListState, event: EventType): INoteListState => {
  switch (event.type) {
    case NoteListEvent.ADD_NOTE: {
      const notes = [event.note, ...state.notes];
      saveNotes(notes);
      return {
        ...state,
        notes: notes,
        selectedNoteId: 0,
        mode: Mode.VIEW,
      };
    }
    case NoteListEvent.SELECT_NOTE: {
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: event.noteId,
        mode: state.mode,
      };
    }
    case NoteListEvent.REMOVE_NOTE: {
      if (state.selectedNoteId !== null) {
        const notes = [...state.notes];
        notes.splice(state.selectedNoteId, 1);
        saveNotes(notes);

        return {
          ...state,
          notes: notes,
          selectedNoteId: notes.length === 0 ? null : 0,
          mode: Mode.VIEW,
        };
      }
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: state.selectedNoteId,
        mode: state.mode,
      };
    }
    case ViewEvent.CHANGE_VIEW: {
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: state.selectedNoteId,
        mode: event.mode,
      };
    }
  }
};
