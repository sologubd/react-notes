import { ViewEvent, View } from "./enums";

export type IChangeViewEvent = {
  readonly type: ViewEvent.CHANGE_VIEW;
  readonly view: View;
};
export interface IViewState {
  readonly view: View;
}
