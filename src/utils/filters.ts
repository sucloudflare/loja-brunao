import { Product } from '../types';

export function filterProducts(
  products: Product[],
  category: string,
  priceRange: string
): Product[] {
  return products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    
    if (!matchesCategory) return false;
    
    if (!priceRange) return true;
    
    const price = product.price;
    switch (priceRange) {
      case '0-100':
        return price <= 100;
      case '100-300':
        return price > 100 && price <= 300;
      case '300-500':
        return price > 300 && price <= 500;
      case '500+':
        return price > 500;
      default:
        return true;
    }
  });
}