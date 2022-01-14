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
