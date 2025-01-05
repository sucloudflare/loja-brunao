export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subcategory?: string;
  featured: boolean;
  isNew: boolean;
  onSale: boolean;
  color: string;
  sizes: string[];
  brand: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'pix' | 'boleto';
  label: string;
  icon: string;
}