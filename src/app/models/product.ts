export interface ProductSpec {
  label: string;
  value: string;
  icon?: string; 
}


export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  tag: 'new' | 'bestseller' | 'featured';
  image: string;
  type?: 'phone' | 'watch' | 'camera' | 'tablet' | 'audio' | 'other';
  description?: string;

  colors?: string[];
  storages?: string[];
  specs?: ProductSpec[];

}
