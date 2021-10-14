import { TOGGLE_WICH, REMOVE_WICH, WichActions } from './wiches.action';

export function WichesReducer(state = [], action: WichActions) {
  switch (action.type) {
    case TOGGLE_WICH:
      const wichedItem = state.find((item) => item.id === action.payload.id);
      if (wichedItem) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        console.log();
        return [...state, ...[action.payload]];
      }

    case REMOVE_WICH:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
