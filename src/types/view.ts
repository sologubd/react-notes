import { ViewEvent, ViewMode } from "./enums";

export type IChangeViewEvent = {
  readonly type: ViewEvent.CHANGE_VIEW;
  readonly viewMode: ViewMode;
};
export interface IViewState {
  readonly viewMode: ViewMode;
}
