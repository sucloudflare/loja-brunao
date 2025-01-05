import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductSectionsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductSections({ products, onAddToCart }: ProductSectionsProps) {
  const featured = products.filter(p => p.featured);
  const newArrivals = products.filter(p => p.isNew);
  const onSale = products.filter(p => p.onSale);

  const renderSection = (title: string, items: Product[]) => (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((product) => (
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

  return (
    <>
      {renderSection('Destaques', featured)}
      {renderSection('Lançamentos', newArrivals)}
      {renderSection('Ofertas', onSale)}
    </>
  );
}
