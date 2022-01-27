import { Product } from '../../api/Product/products.models';
import { CartAction } from './cart.actions';
import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export type CartItemType = Product & { quantity: number };

export type CartState = {
  [key: string]: CartItemType;
};

const cartReducer = (
  state: CartState,
  { item, type, quantity = 1 }: CartAction
) => {
  const existingCartItem = state[item.id];

  switch (type) {
    case cartActionTypes.ADD_ITEM:
      return addItemToCart(state, existingCartItem, item, quantity);
    case cartActionTypes.REMOVE_ITEM:
      return removeItemFromCart(state, item, quantity);
    default:
      return state;
  }
};

export default cartReducer;
