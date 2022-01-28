import { Product } from '../../api/Product/products.models';
import { CartItemType, CartState } from './cart.reducer';

export const addItemToCart = (
  cartState: CartState,
  cartItemToAdd: Product,
  quantityToAdd = 1
): CartState => {
  const existingCartItem = cartState[cartItemToAdd.id];

  if (existingCartItem !== undefined) {
    const quantity = existingCartItem.quantity + quantityToAdd;
    return {
      ...cartState,
      [cartItemToAdd.id]: {
        ...existingCartItem,
        quantity
      }
    };
  }

  return {
    ...cartState,
    [cartItemToAdd.id]: {
      ...cartItemToAdd,
      quantity: quantityToAdd
    }
  };
};

export const removeItemFromCart = (
  cartState: CartState,
  cartItemToRemove: Product,
  quantityToRemove: number = 1
): CartState => {
  const existingCartItem = cartState[cartItemToRemove.id];
  const quantity = existingCartItem.quantity - quantityToRemove;

  return {
    ...cartState,
    [cartItemToRemove.id]: {
      ...existingCartItem,
      quantity
    }
  };
};

export const clearItemsFromCart = (
  cartState: CartState,
  cartItemToRemove: Product
) => {
  const newCartItems = { ...cartState };
  delete newCartItems[cartItemToRemove.id];
  return newCartItems;
};

export const getCartSubTotal = (sum: number, item: CartItemType): number => {
  sum += item.price * item.quantity;
  return sum;
};

export const getCartCount = (sum: number, item: CartItemType): number =>
  sum + item.quantity;
