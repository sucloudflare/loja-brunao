import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products as allProducts } from '../data/products';

export function useProducts(category: string, subcategory?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeFilters, setActiveFilters] = useState({
    price: '',
    color: '',
    size: '',
    brand: ''
  });

  const filters = {
    price: ['Até R$100', 'R$100 - R$300', 'R$300 - R$500', 'Acima de R$500'],
    colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF', '#00FF00'],
    sizes: ['P', 'M', 'G', 'GG'],
    brands: ['Nike', 'Adidas', 'Puma', 'Under Armour']
  };

  useEffect(() => {
    let filtered = allProducts;
    
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory?.toLowerCase() === subcategory.toLowerCase());
    }

    // Apply active filters
    if (activeFilters.price) {
      // Add price range filtering logic
    }

    if (activeFilters.color) {
      filtered = filtered.filter(p => p.color === activeFilters.color);
    }

    if (activeFilters.size) {
      filtered = filtered.filter(p => p.sizes.includes(activeFilters.size));
    }

    setProducts(filtered);
  }, [category, subcategory, activeFilters]);

  const updateFilters = (type: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? '' : value
    }));
  };

  return { products, filters, updateFilters };
}