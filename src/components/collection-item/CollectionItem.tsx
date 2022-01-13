import React from 'react';

import { useAuth } from '../../context/AuthContext';
import { Item } from '../collection-preview/CollectionPreview';

import './collection-item.styles.scss';

const CollectionItem: React.FC<Item> = ({ name, price, imageUrl }) => {
  const { addProduct } = useAuth();

  const handleAddItem = (name: string) => {
    const productToAdd = {
      id: '1231231asdfa',
      name,
      qty: Math.floor(Math.random() * 10)
    };
    addProduct(productToAdd);
  };

  return (
    <div className='collection-item' onClick={() => handleAddItem(name)}>
      <div
        className='image'
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
