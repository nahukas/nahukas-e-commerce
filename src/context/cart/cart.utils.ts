import { ProductQty } from '../../api/Product/products.models';

export const addItemToCart = (
  cartItems: ProductQty[],
  cartItemToAdd: ProductQty
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, qty: 1 }];
};

export const removeItemFromCart = (
  cartItems: ProductQty[],
  cartItemToRemove: ProductQty
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
