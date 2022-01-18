import React, { useEffect, useState } from 'react';
import {
  Product,
  ProductCategory,
  ProductWithCategory
} from '../api/Product/products.models';
import { ProductService } from '../api/Product/ProductsService';

const SetProducts: React.FC = () => {
  const [productsWithCategories, setProductsWithCategories] = useState<
    ProductCategory[]
  >([]);

  useEffect(() => {
    const fetchProductsJSON = async () => {
      try {
        const response = await fetch('collections.data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        });
        const responseJSON = (await response.json()) as ProductCategory[];
        responseJSON.map((productCategory) =>
          productCategory.items.map(async (item: Product) => {
            let test = item as ProductWithCategory;
            test.category = productCategory.title;
            await ProductService.addProducts(test);
          })
        );

        console.log(responseJSON);
        setProductsWithCategories(responseJSON);
      } catch (error) {}
    };

    fetchProductsJSON();
  }, []);

  if (productsWithCategories.length) {
    return (
      <>
        {productsWithCategories.map((productCategory) => {
          return (
            <div key={productCategory.id}>
              <h1>{productCategory.title}</h1>
              {productCategory.items.map((item) => (
                <p>{item.name}</p>
              ))}
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default SetProducts;
