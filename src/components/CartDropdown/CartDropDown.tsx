import React from 'react';

import { useCart } from '../../context/cart/CartContext';
import CartItem from '../CartItem/CartItem';

import FormButton from '../general/FormButton/FormButton';

import './cart-dropdown.scss';

const CartDropdown: React.FC = () => {
  const {
    cartState: { cartItems }
  } = useCart();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

export default CartDropdown;
