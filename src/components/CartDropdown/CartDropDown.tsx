import React from 'react';
import { useNavigate } from 'react-router';

import { useCart } from '../../context/cart/CartContext';
import CartItem from '../CartItem/CartItem';

import FormButton from '../general/FormButton/FormButton';

import './cart-dropdown.scss';

interface CartDropdownProps {
  toggleCart: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ toggleCart }) => {
  const { items, count } = useCart();
  const navigate = useNavigate();

  const handleGoToCheckoutClick = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {count ? (
          items.map((cartItem) => (
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
