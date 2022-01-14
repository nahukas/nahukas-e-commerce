import React from 'react';
import { useNavigate } from 'react-router';

import { useCart } from '../../context/cart/CartContext';
import CartItem from '../CartItem/CartItem';

import FormButton from '../general/FormButton/FormButton';

import './cart-dropdown.scss';

const CartDropdown: React.FC = () => {
  const {
    cartState: { cartItems }
  } = useCart();
  const navigate = useNavigate();
  const { toggleCart } = useCart();

  const handleGoToCheckoutClick = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>

      <FormButton onClick={handleGoToCheckoutClick}>GO TO CHECKOUT</FormButton>
    </div>
  );
};

export default CartDropdown;
