import { cartAction } from './cart.actions';
import { cartActionTypes } from './cart.types';

export const CART_INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = CART_INITIAL_STATE, action: cartAction) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
