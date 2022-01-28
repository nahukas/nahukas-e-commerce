import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { useCart } from '../../context/cart/CartContext';

import './cart-icon.scss';

interface CartIconProps {
  toggleCart: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCart }) => {
  const { count } = useCart();

  const cartQtyProducts = count || 0;

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQtyProducts}</span>
    </div>
  );
};

export default CartIcon;
