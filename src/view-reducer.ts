import { IViewState, ViewEvent, ViewEventType } from "./types";

export const viewReducer = (state: IViewState, event: ViewEventType): IViewState => {
  switch (event.type) {
    case ViewEvent.CHANGE_VIEW: {
      return {
        ...state,
        view: event.view,
      };
    }
  }
};
