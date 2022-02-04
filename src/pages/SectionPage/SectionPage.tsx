import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { DIRECTORY } from '../../api/Directory/enums';

import { Product } from '../../api/Product/products.models';
import { ProductService } from '../../api/Product/ProductsService';
import Collection from '../../components/Collection/Collection';

const SectionPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async (section: string) => {
      setLoading(true);
      try {
        const products = await ProductService.getProductsFiltered(section);
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (params.section) {
      if (
        Object.values(DIRECTORY).includes(
          params.section.toLowerCase() as DIRECTORY
        )
      ) {
        fetchProducts(params.section);
      } else {
        navigate('/shop');
      }
    }
  }, [params.section, navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <Collection items={products} />;
};

export default SectionPage;
