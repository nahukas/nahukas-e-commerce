import { Product } from '../../api/Product/products.models';
import { CartState } from './cart.reducer';
import { cartActionTypes } from './cart.types';

// TODO: check optional values
interface cartAction_ADD_ITEM {
  type: cartActionTypes.ADD_ITEM;
  item: Product;
  quantity?: number;
  cartState?: CartState;
}
interface cartAction_REMOVE_ITEM {
  type: cartActionTypes.REMOVE_ITEM;
  item: Product;
  quantity?: number;
  cartState?: CartState;
}

interface cartAction_CLEAR_ITEMS {
  type: cartActionTypes.CLEAR_ITEMS;
  item: Product;
  quantity?: number;
  cartState?: CartState;
}

interface cartAction_SET_ITEMS {
  type: cartActionTypes.SET_ITEMS;
  quantity?: number;
  item?: Product;
  cartState: CartState;
}

export type CartAction =
  | cartAction_ADD_ITEM
  | cartAction_REMOVE_ITEM
  | cartAction_CLEAR_ITEMS
  | cartAction_SET_ITEMS;
