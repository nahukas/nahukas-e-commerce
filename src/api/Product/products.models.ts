export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

export interface ProductQty extends Product {
  qty: number;
}
