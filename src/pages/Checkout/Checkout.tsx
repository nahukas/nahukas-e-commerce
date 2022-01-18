import React from 'react';

import { ProductQty } from '../../api/Product/products.models';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { useCart } from '../../context/cart/CartContext';

import './checkout.scss';

const CheckoutPage: React.FC = () => {
  const {
    loadingCart,
    cartState: { cartItems }
  } = useCart();

  const totalCart = cartItems.length
    ? cartItems.reduce(
        (prev: number, cartItem: ProductQty) =>
          prev + cartItem.qty * cartItem.price,
        0
      )
    : 0;

  if (loadingCart) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: ProductQty) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: €{totalCart.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
