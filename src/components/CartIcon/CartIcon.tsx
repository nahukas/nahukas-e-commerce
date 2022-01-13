import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { Product } from '../../api/Product/products.models';
import { useAuth } from '../../context/AuthContext';

import './cart-icon.scss';

const CartIcon: React.FC = () => {
  const { userState } = useAuth();

  const cartQtyProducts = userState.products.length
    ? userState.products
        .map((product: Product) => product.qty)
        .reduce((prev: number, next: number) => prev + next)
    : 0;

  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQtyProducts}</span>
    </div>
  );
};

export default CartIcon;
