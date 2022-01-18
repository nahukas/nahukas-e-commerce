import { Product } from '../Product/products.models';

export interface IDirectory {
  title: string;
  imageUrl: string;
  id: string;
}

export interface IDirectoryWithItems extends IDirectory {
  items: Product[];
}
