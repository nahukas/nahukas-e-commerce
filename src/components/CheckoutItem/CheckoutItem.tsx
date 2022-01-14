import React from 'react';

import { Product, ProductQty } from '../../api/Product/products.models';
import { useCart } from '../../context/cart/CartContext';

import './checkout-item.scss';

interface CheckoutItemProps {
  item: ProductQty;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
  const { imageUrl, name, qty, price } = item;
  const { clearItems, addItem, removeItem } = useCart();

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() =>
            qty === 1 ? clearItems(item as Product) : removeItem(item)
          }
        >
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => addItem(item as Product)}>
          &#10095;
        </div>
      </span>
      <span className='price'>&#8364; {price}</span>
      <div
        className='remove-button'
        onClick={() => clearItems(item as Product)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
