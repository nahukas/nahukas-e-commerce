import { cartActionTypes } from './cart.types';

interface cartAction_TOGGLE_CART_HIDDEN {
  type: cartActionTypes.TOGGLE_CART_HIDDEN;
}

export type cartAction = cartAction_TOGGLE_CART_HIDDEN;
