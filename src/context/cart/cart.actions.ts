import { Product } from '../../api/Product/products.models';
import { cartActionTypes } from './cart.types';

// interface cartAction_TOGGLE_CART_HIDDEN {
//   type: cartActionTypes.TOGGLE_CART_HIDDEN;
// }

interface cartAction_ADD_ITEM {
  type: cartActionTypes.ADD_ITEM;
  item: Product;
  quantity?: number;
}
interface cartAction_REMOVE_ITEM {
  type: cartActionTypes.REMOVE_ITEM;
  item: Product;
  quantity?: number;
}

// interface cartAction_CLEAR_ITEMS {
//   type: cartActionTypes.CLEAR_ITEMS;
//   payload: Product;
// }

// interface cartAction_SET_ITEMS {
//   type: cartActionTypes.SET_ITEMS;
//   payload: ProductQty[];
// }

export type CartAction = cartAction_ADD_ITEM | cartAction_REMOVE_ITEM;
// | cartAction_TOGGLE_CART_HIDDEN
// | cartAction_CLEAR_ITEMS
// | cartAction_SET_ITEMS;
