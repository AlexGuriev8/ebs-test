export interface Product {
  name: string;
  category: Category;
  price: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface CartItemType {
  id: number;
  category: string;
  name: string;
  price: number;
  amount: number;
}