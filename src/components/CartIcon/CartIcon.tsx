import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { ProductQty } from '../../api/Product/products.models';
import { useCart } from '../../context/cart/CartContext';

import './cart-icon.scss';

const CartIcon: React.FC = () => {
  const { toggleCart, cartState } = useCart();

  const cartQtyProducts = cartState.cartItems.length
    ? cartState.cartItems
        .map((product: ProductQty) => product.qty)
        .reduce((prev: number, next: number) => prev + next)
    : 0;

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQtyProducts}</span>
    </div>
  );
};

export default CartIcon;
