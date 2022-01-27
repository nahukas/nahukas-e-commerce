import React, { Dispatch, useContext, useReducer } from 'react';

import { Product } from '../../api/Product/products.models';
import { cartActionTypes } from './cart.types';
import { CartAction } from './cart.actions';
import cartReducer, { CartItemType, CartState } from './cart.reducer';
import { getCartCount, getCartSubTotal } from './cart.utils';

const defaultState = {} as CartState;

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

CartProvider.displayName = 'CartContext';

export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById) as CartItemType[];

  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);

  return {
    itemsById,
    items,
    count,
    subTotal
  };
};

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product: Product, quantity?: number) =>
    dispatch({
      type: cartActionTypes.ADD_ITEM,
      item: product,
      quantity
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: cartActionTypes.REMOVE_ITEM,
      item: product
    });

  return {
    addToCart,
    removeFromCart
  };
};

export default CartProvider;
