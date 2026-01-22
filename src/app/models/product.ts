export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  tag: 'new' | 'bestseller' | 'featured';
  image: string;
}
