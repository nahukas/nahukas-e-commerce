import React, { Dispatch, useContext, useEffect, useReducer } from 'react';

import { Product } from '../../api/Product/products.models';
import { cartActionTypes } from './cart.types';
import { CartAction } from './cart.actions';
import cartReducer, { CartItemType, CartState } from './cart.reducer';
import { getCartCount, getCartSubTotal } from './cart.utils';
import { UserService } from '../../api/Users/UserService';
import { useAuth } from '../AuthContext';

const defaultState = {};

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  useEffect(() => {
    const setUserCart = async (uid: string) => {
      const response = await UserService.getUserCartItems(uid);

      dispatch({
        type: cartActionTypes.SET_ITEMS,
        cartState: response
      });
    };

    if (user) {
      setUserCart(user.uid);
    } else {
      dispatch({
        type: cartActionTypes.SET_ITEMS,
        cartState: {}
      });
    }
  }, [user]);

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

  const addToCart = async (
    product: Product,
    quantity?: number,
    uid?: string
  ) => {
    dispatch({
      type: cartActionTypes.ADD_ITEM,
      item: product,
      quantity
    });

    if (uid) {
      await UserService.addProduct(uid, product, quantity);
    }
  };

  const removeFromCart = async (product: Product, uid?: string) => {
    dispatch({
      type: cartActionTypes.REMOVE_ITEM,
      item: product
    });

    if (uid) {
      await UserService.removeProduct(uid, product as CartItemType);
    }
  };

  const clearItemsFromCart = async (product: Product, uid?: string) => {
    dispatch({
      type: cartActionTypes.CLEAR_ITEMS,
      item: product
    });

    if (uid) {
      await UserService.clearProduct(uid, product as CartItemType);
    }
  };

  const setItemsToCart = (state: CartState) =>
    dispatch({
      type: cartActionTypes.SET_ITEMS,
      cartState: state
    });

  return {
    addToCart,
    removeFromCart,
    clearItemsFromCart,
    setItemsToCart
  };
};

export default CartProvider;
