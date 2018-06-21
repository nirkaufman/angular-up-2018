import {Action} from '@ngrx/store';

export enum NavigationActionTypes {
  GoTo = '[Navigation] Go to',
  Back = '[Navigation] Back'
}

interface RouteAction extends Action {
  payload?: any;
}

export class Goto implements RouteAction {
  readonly type = NavigationActionTypes.GoTo;

  constructor(public payload: string) {}
}

export class Back implements RouteAction {
  readonly type = NavigationActionTypes.Back;
}

export type NavigationActions = Goto | Back;
