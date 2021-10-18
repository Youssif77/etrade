import { Action } from '@ngrx/store';

export const TOGGLE_WISH = 'TOGGLE_WISH';
export const REMOVE_WISH = 'REMOVE_WISH';

export class ToggleWish implements Action {
  readonly type = TOGGLE_WISH;
  constructor(public payload) {}
}

export class RemoveWish implements Action {
  readonly type = REMOVE_WISH;
  constructor(public payload) {}
}
export type WishActions = ToggleWish | RemoveWish;
