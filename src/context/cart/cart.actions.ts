import { ProductQty } from '../../api/Product/products.models';
import { cartActionTypes } from './cart.types';

interface cartAction_TOGGLE_CART_HIDDEN {
  type: cartActionTypes.TOGGLE_CART_HIDDEN;
}

interface cartAction_ADD_ITEM {
  type: cartActionTypes.ADD_ITEM;
  payload: ProductQty;
}

interface cartAction_SET_ITEMS {
  type: cartActionTypes.SET_ITEMS;
  payload: ProductQty[];
}

export type cartAction =
  | cartAction_TOGGLE_CART_HIDDEN
  | cartAction_ADD_ITEM
  | cartAction_SET_ITEMS;
