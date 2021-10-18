import {
  TOGGLE_WISH as TOGGLE_WISH,
  REMOVE_WISH as REMOVE_WISH,
  WishActions,
} from './wishes.action';

export function WishesReducer(state = [], action: WishActions) {
  switch (action.type) {
    case TOGGLE_WISH:
      const wishedItem = state.find((item) => item.id === action.payload.id);
      if (wishedItem) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, ...[action.payload]];
      }

    case REMOVE_WISH:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
