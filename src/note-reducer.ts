import { INoteListState, Mode, NoteListEvent, ChangeViewEvent, EventType } from "./types";

export const notesReducer = (state: INoteListState, event: EventType): INoteListState => {
  switch (event.type) {
    case NoteListEvent.ADD_NOTE: {
      const notes = [event.note, ...state.notes];
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
      if (state.selectedNoteId === null) return state;
      const notes = state.notes.filter((_, index) => index !== state.selectedNoteId);
      return {
        ...state,
        notes: notes,
        selectedNoteId: notes.length === 0 ? null : 0,
        mode: Mode.VIEW,
      };
    }
    case ChangeViewEvent.GO_TO_MAIN_VIEW: {
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: state.selectedNoteId,
        mode: Mode.VIEW,
      };
    }
    case ChangeViewEvent.GO_TO_EDIT_VIEW: {
      return {
        ...state,
        notes: state.notes,
        selectedNoteId: state.selectedNoteId,
        mode: Mode.EDIT,
      };
    }
  }
};
