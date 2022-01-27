import { Product } from '../../api/Product/products.models';
import { CartItemType, CartState } from './cart.reducer';

export const addItemToCart = (
  cartState: CartState,
  existingCartItem: CartItemType | undefined,
  cartItemToAdd: Product,
  quantityToAdd = 1
) => {
  if (existingCartItem !== undefined) {
    const quantity = existingCartItem.quantity + quantityToAdd;
    return {
      ...cartState,
      [item.id]: {
        ...existingCartItem,
        quantity
      }
    };
  }

  return {
    ...cartState,
    [item.id]: {
      ...cartItemToAdd,
      quantity: quantityToAdd
    }
  };
};

export const removeItemFromCart = (
  cartState: CartState,
  cartItemToRemove: Product,
  quantityToRemove = 1
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem
  );
};

export const getCartSubTotal = (sum: number, item: CartItemType): number => {
  sum += item.price * item.quantity;
  return sum;
};

export const getCartCount = (sum: number, item: CartItemType): number =>
  sum + item.quantity;
