import React, { useContext, useState } from "react";
import { NoteFormDispatcher, INoteFormState, nullDispathcer, NoteFormEvent } from "../types";

import { ViewContext } from "./view-context";

export const initialState: INoteFormState = {
  title: "",
  text: "",
  titleIsValid: false,
  titleValidationErrors: [],
  textValidationErrors: [],
  textIsValid: true,
  showValidationErrors: false,
};

export const changeTitle =
  (dispatch: NoteFormDispatcher) =>
  (value: string): void =>
    dispatch({
      type: NoteFormEvent.CHANGE_TITLE,
      value,
    });

export const changeText =
  (dispatch: NoteFormDispatcher) =>
  (value: string): void =>
    dispatch({
      type: NoteFormEvent.CHANGE_TEXT,
      value,
    });

export const showValidationErrors =
  (dispatch: NoteFormDispatcher) =>
  (value: boolean): void =>
    dispatch({
      type: NoteFormEvent.SHOW_ERRORS,
      value,
    });

export const NoteFormContext = React.createContext<[INoteFormState, NoteFormDispatcher]>([
  initialState,
  nullDispathcer,
]);
export const useFormState = () => {
  const [state, dispatch] = useContext(NoteFormContext);
  const [actions] = useState(() => ({
    changeTitle: changeTitle(dispatch),
    changeText: changeText(dispatch),
    showValidationErrors: showValidationErrors(dispatch),
  }));

  return [state, actions] as const;
};

export const useNoteFormState = () => useFormState()[0];
export const useNoteFormActions = () => useFormState()[1];
