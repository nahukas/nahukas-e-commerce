import React, { useEffect, useState } from 'react';

import { IDirectory } from '../../api/Directory/directory.models';
import { DirectoryService } from '../../api/Directory/DirectoryService';
import { Product } from '../../api/Product/products.models';
import { ProductService } from '../../api/Product/ProductsService';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export interface Collection extends IDirectory {
  items: Product[];
  routeName: string;
}

const ShopPage: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      return await ProductService.getProducts();
    };

    const fetchDirectory = async () => {
      const products = await fetchProducts();

      if (products) {
        const directory =
          (await DirectoryService.getDirectory()) as Collection[];
        directory.forEach((directory) => {
          const filteredProducts = products.filter(
            (product) =>
              product.category.toLowerCase() === directory.title.toLowerCase()
          );
          directory.items = filteredProducts;
        });
        setCollections(directory);
      }
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
