import React from 'react';

import { useAuth } from '../../context/AuthContext';
import { CartItemType } from '../../context/cart/cart.reducer';
import { useCartMutations } from '../../context/cart/CartContext';

import './checkout-item.scss';

interface CheckoutItemProps {
  item: CartItemType;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { addToCart, removeFromCart, clearItemsFromCart } = useCartMutations();
  const { user } = useAuth();

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
            quantity === 1
              ? clearItemsFromCart(item, user?.uid)
              : removeFromCart(item, user?.uid)
          }
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addToCart(item, 1, user?.uid)}>
          &#10095;
        </div>
      </span>
      <span className='price'>&#8364; {price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemsFromCart(item, user?.uid)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
