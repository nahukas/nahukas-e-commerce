import React from 'react';

import { ProductQty } from '../../api/Product/products.models';

import './cart-item.scss';

interface CartItemProps {
  item: ProductQty;
}

const CartItem: React.FC<CartItemProps> = ({
  item: { name, imageUrl, price, qty }
}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt={name} />
    <div className='item-detail'>
      <span className='name'>{name}</span>
      <span className='price'>
        {qty} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
