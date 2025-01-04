import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Tênis Nike Air Max Plus",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "O clássico reinventado com tecnologia de amortecimento premium",
    category: "calcados",
    featured: true,
    isNew: true,
    onSale: false
  },
  {
    id: 2,
    name: "Jaqueta Tech Fleece",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    description: "Jaqueta moderna com tecnologia térmica avançada",
    category: "roupas",
    featured: true,
    isNew: false,
    onSale: true
  },
  {
    id: 3,
    name: "Mochila Esportiva Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Mochila resistente com compartimentos organizadores",
    category: "acessorios",
    featured: false,
    isNew: true,
    onSale: false
  }
  // Adicione mais 27 produtos seguindo o mesmo padrão
];