import { Product } from '../Product/products.models';

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  createdAt: string;
  products: Product[];
}
