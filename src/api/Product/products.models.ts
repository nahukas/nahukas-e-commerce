export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductQty extends Product {
  qty: number;
}
