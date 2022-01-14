import React, { useEffect, useReducer } from 'react';

import { Product, ProductQty } from '../../api/Product/products.models';
import { UserService } from '../../api/Users/UserService';
import { useAuth } from '../AuthContext';
import cartReducer, { CART_INITIAL_STATE } from './cart.reducer';
import { cartActionTypes } from './cart.types';

interface CartContextType {
  cartState: { hidden: boolean; cartItems: ProductQty[] };
  toggleCart: () => void;
  addItem: (itemToAdd: Product) => void;
}

const CartContext = React.createContext<CartContextType>(null!);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { userState } = useAuth();
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    const fetchCart = async () => {
      if (userState.uid) {
        try {
          const response = await UserService.getUserCartItems(userState.uid);
          dispatch({
            type: cartActionTypes.SET_ITEMS,
            payload: response
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        dispatch({
          type: cartActionTypes.SET_ITEMS,
          payload: []
        });
      }
    };

    fetchCart();
  }, [userState.uid]);

  const toggleCart = () => {
    dispatch({
      type: cartActionTypes.TOGGLE_CART_HIDDEN
    });
  };

  const addItem = async (itemToAdd: Product) => {
    const itemToAddQty = itemToAdd as ProductQty;
    itemToAddQty.qty = 1;

    dispatch({
      type: cartActionTypes.ADD_ITEM,
      payload: itemToAddQty
    });

    try {
      await UserService.addProduct(userState.uid, itemToAddQty);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    toggleCart,
    cartState,
    addItem
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return React.useContext(CartContext);
};

export default CartProvider;
