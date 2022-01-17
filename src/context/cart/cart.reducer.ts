import { ProductQty } from '../../api/Product/products.models';
import { cartAction } from './cart.actions';
import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

interface I_CART_INITIAL_STATE {
  hidden: boolean;
  cartItems: ProductQty[];
}

export const CART_INITIAL_STATE: I_CART_INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (
  state: I_CART_INITIAL_STATE,
  action: cartAction
): I_CART_INITIAL_STATE => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case cartActionTypes.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
      };
    case cartActionTypes.SET_ITEMS:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
