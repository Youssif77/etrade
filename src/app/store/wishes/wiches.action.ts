import { Action } from '@ngrx/store';

export const TOGGLE_WICH = 'TOGGLE_WICH';
export const REMOVE_WICH = 'REMOVE_WICH';

export class ToggleWich implements Action {
  readonly type = TOGGLE_WICH;
  constructor(public payload) {
    // console.log('FIRE FROM ACTION', payload);
  }
}

export class RemoveWich implements Action {
  readonly type = REMOVE_WICH;
  constructor(public payload) {}
}
export type WichActions = ToggleWich | RemoveWich;
