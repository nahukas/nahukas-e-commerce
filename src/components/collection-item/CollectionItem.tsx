import React from 'react';

import { useCartMutations } from '../../context/cart/CartContext';
import { Product } from '../../api/Product/products.models';
import FormButton from '../general/FormButton/FormButton';

import './collection-item.styles.scss';
import { useAuth } from '../../context/AuthContext';

interface CollectionItemProps {
  item: Product;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addToCart } = useCartMutations();
  const { user } = useAuth();

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`€${price}`}</span>
      </div>
      <FormButton onClick={() => addToCart(item, 1, user?.uid)} inverted>
        Add to cart
      </FormButton>
    </div>
  );
};

export default CollectionItem;
