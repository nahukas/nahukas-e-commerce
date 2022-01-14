import React from 'react';

import { ProductQty } from '../../api/Product/products.models';

import './checkout-item.scss';

interface CheckoutItemProps {
  cartItem: ProductQty;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem: { imageUrl, name, qty, price }
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{qty}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
