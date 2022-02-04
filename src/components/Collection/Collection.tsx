import React from 'react';

import { Product } from '../../api/Product/products.models';
import { useAuth } from '../../context/AuthContext';
import { useCartMutations } from '../../context/cart/CartContext';
import FormButton from '../general/FormButton/FormButton';

interface CollectionProps {
  items: Product[];
}

const Collection: React.FC<CollectionProps> = ({ items }) => {
  const { addToCart } = useCartMutations();
  const { user } = useAuth();

  return (
    <section className='collection'>
      <div className='collection__grid'>
        {items.map((product: Product) => (
          <div key={product.id} className='collection__item'>
            <div className='collection__icon'>
              <img src={`${product.imageUrl}`} alt={product.name} />
            </div>
            <div className='collection-footer'>
              <span className='name' key={product.id}>
                {product.name}
              </span>
              <span className='price'>&#8364; {product.price}</span>
            </div>
            <FormButton
              onClick={() => addToCart(product, 1, user?.uid)}
              inverted
            >
              Add to cart
            </FormButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
