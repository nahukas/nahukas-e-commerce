import React, { useEffect, useState } from 'react';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage: React.FC = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchDirectory = async () => {
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

    fetchDirectory();
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
