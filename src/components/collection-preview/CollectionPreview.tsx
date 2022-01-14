import React from 'react';

import { Product } from '../../api/Product/products.models';
import CollectionItem from '../collection-item/CollectionItem';

import './collectionPreview.styles.scss';

interface CollectionPreviewProps {
  id: number;
  routeName: string;
  title: string;
  items: Product[];
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
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
