export interface ProductCategory {
  id: number;
  title: string;
  routeName: string;
  items: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductQty extends Product {
  qty: number;
}

export interface ProductWithCategory extends Product {
  category: string;
}
