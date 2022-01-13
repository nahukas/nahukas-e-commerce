import React, { useReducer } from 'react';
import cartReducer, { CART_INITIAL_STATE } from './cart.reducer';
import { cartActionTypes } from './cart.types';

interface CartContextType {
  toggleCart: () => void;
  cartState: { hidden: boolean };
}

const CartContext = React.createContext<CartContextType>(null!);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const toggleCart = () => {
    dispatch({
      type: cartActionTypes.TOGGLE_CART_HIDDEN
    });
  };

  const value = {
    toggleCart,
    cartState
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return React.useContext(CartContext);
};

export default CartProvider;
