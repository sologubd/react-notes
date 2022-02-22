import { INoteFormState, NoteFormEvent, NoteFormEventType } from "../types";
import { validateText, validateTitle } from "../validator";

export const noteFormReducer = (state: INoteFormState, event: NoteFormEventType): INoteFormState => {
  switch (event.type) {
    case NoteFormEvent.CHANGE_TITLE: {
      const [isValid, errors] = validateTitle(event.value);
      return {
        ...state,
        title: event.value,
        titleIsValid: isValid,
        titleValidationErrors: errors,
        showValidationErrors: true,
      };
    }
    case NoteFormEvent.CHANGE_TEXT: {
      const [isValid, errors] = validateText(event.value);
      return {
        ...state,
        text: event.value,
        textIsValid: isValid,
        textValidationErrors: errors,
        showValidationErrors: true,
      };
    }
    case NoteFormEvent.SHOW_ERRORS: {
      const titleValidationeErrors = validateTitle(state.title)[1];
      const textValidationeErrors = validateText(state.text)[1];
      return {
        ...state,
        showValidationErrors: event.value,
        titleValidationErrors: titleValidationeErrors,
        textValidationErrors: textValidationeErrors,
      };
    }
  }
};
