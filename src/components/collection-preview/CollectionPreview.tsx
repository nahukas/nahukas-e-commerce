import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './collectionPreview.styles.scss';

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionPreviewProps {
  id: number;
  routeName: string;
  title: string;
  items: Item[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items
}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, name, imageUrl, price }) => (
          <CollectionItem
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
          />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
