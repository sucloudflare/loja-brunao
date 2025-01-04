export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  featured: boolean;
  isNew: boolean;
  onSale: boolean;
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