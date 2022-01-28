import React from 'react';

import { CartItemType } from '../../context/cart/cart.reducer';

import './cart-item.scss';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({
  item: { name, imageUrl, price, quantity }
}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt={name} />
    <div className='item-detail'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
