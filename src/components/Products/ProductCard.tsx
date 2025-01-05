import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { formatPrice } from '../../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const cardRef = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className="opacity-0 group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-zinc-500 uppercase tracking-wider">{product.category}</span>
        </div>
        <h3 className="text-lg font-medium text-white mb-1">{product.name}</h3>
        <p className="text-sm text-zinc-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}