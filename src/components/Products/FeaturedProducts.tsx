import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function FeaturedProducts({ products, onAddToCart }: FeaturedProductsProps) {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 opacity-0">
<<<<<<< HEAD
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
      <div className="container mx-auto px-4 max-w-screen-xl"> {/* Limita a largura máxima */}
        <h2 className="text-3xl font-bold text-white mb-8">Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
