import React from 'react';

import { Item } from '../collection-preview/CollectionPreview';

import './collection-item.styles.scss';

const CollectionItem: React.FC<Item> = ({ name, price, imageUrl }) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url('${imageUrl}')` }} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
