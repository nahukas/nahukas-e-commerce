import { Product } from '../../api/Product/products.models';
import { CartAction } from './cart.actions';
import { cartActionTypes } from './cart.types';
import {
  addItemToCart,
  clearItemsFromCart,
  removeItemFromCart
} from './cart.utils';

export type CartItemType = Product & { quantity: number };

export type CartState = {
  [key: string]: CartItemType;
};

const cartReducer = (
  state: CartState,
  { item, type, quantity = 1, cartState }: CartAction
) => {
  switch (type) {
    case cartActionTypes.ADD_ITEM:
      return addItemToCart(state, item!, quantity!);
    case cartActionTypes.REMOVE_ITEM:
      return removeItemFromCart(state, item!, quantity!);
    case cartActionTypes.CLEAR_ITEMS:
      return clearItemsFromCart(state, item!);
    case cartActionTypes.SET_ITEMS:
      return { ...cartState };
    default:
      return state;
  }
};

export default cartReducer;
