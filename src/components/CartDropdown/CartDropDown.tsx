import React from 'react';

import FormButton from '../general/FormButton/FormButton';

import './cart-dropdown.scss';

const CartDropdown: React.FC = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

export default CartDropdown;
