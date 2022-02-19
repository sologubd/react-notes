import React, { useContext, useState } from "react";
import { IViewState, ViewDispatcher, ViewMode, ViewEvent, nullDispathcer } from "../types";

export const initialState: IViewState = {
  viewMode: ViewMode.NOTES_LIST,
};

export const changeView =
  (dispatch: ViewDispatcher) =>
  (viewMode: ViewMode): void =>
    dispatch({
      type: ViewEvent.CHANGE_VIEW,
      viewMode,
    });

export const ViewContext = React.createContext<[IViewState, ViewDispatcher]>([initialState, nullDispathcer]);
export const useChangeViewState = () => {
  const [state, dispatch] = useContext(ViewContext);
  const [actions] = useState(() => ({
    goToNotesView: () => changeView(dispatch)(ViewMode.NOTES_LIST),
    goToEditView: () => changeView(dispatch)(ViewMode.EDIT_NOTE),
    goToLoginView: () => changeView(dispatch)(ViewMode.LOGIN),
  }));

  return [state, actions] as const;
};

export const useViewState = () => useChangeViewState()[0];
export const useViewActions = () => useChangeViewState()[1];
