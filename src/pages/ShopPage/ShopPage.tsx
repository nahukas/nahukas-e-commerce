import React, { useEffect, useState } from 'react';

import { IDirectory } from '../../api/Directory/directory.models';
import { Product } from '../../api/Product/products.models';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export interface Collection extends IDirectory {
  items: Product[];
  routeName: string;
}

const ShopPage: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('collections.data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        });
        const responseJSON = await response.json();
        setCollections(responseJSON);
      } catch (error) {}
    };

    fetchProducts();
  }, []);

  return (
    <div className='shop-page'>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          id={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
