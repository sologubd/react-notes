import React, { useContext, useState } from "react";
import { ViewDispatcher, View, nullDispathcer, ViewEvent } from "./types";

interface ViewState {
  readonly view: View;
}

export const initialState = {
  view: View.NOTES_LIST,
};

export const changeView =
  (dispatch: ViewDispatcher) =>
  (view: View): void =>
    dispatch({
      type: ViewEvent.CHANGE_VIEW,
      view,
    });

export const ViewContext = React.createContext<[ViewState, ViewDispatcher]>([initialState, nullDispathcer]);
export const useChangeViewState = () => {
  const [state, dispatch] = useContext(ViewContext);
  const [actions] = useState(() => ({
    goToNotesView: () => changeView(dispatch)(View.NOTES_LIST),
    goToEditView: () => changeView(dispatch)(View.EDIT_NOTE),
    goToLoginView: () => changeView(dispatch)(View.LOGIN),
  }));

  return [state, actions] as const;
};

export const useViewState = () => useChangeViewState()[0];
export const useViewActions = () => useChangeViewState()[1];
