export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
<<<<<<< HEAD
  subcategory?: string;
  featured: boolean;
  isNew: boolean;
  onSale: boolean;
  color: string;
  sizes: string[];
  brand: string;
=======
  featured: boolean;
  isNew: boolean;
  onSale: boolean;
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
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