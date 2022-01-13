import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '../firebase.utils';
import { Product } from './products.models';

export class ProductService {
  public static async getProducts(): Promise<Product[]> {
    const productsRef = collection(firestore, 'products');
    const userCartSnapShot = await getDocs(productsRef);

    const products: Product[] = [];

    userCartSnapShot.forEach((snapshot) => {
      products.push(snapshot.data() as Product);
    });

    return products;
  }
}
