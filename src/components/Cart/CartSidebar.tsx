import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/format';

interface CartSidebarProps {
  items: Product[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onProceedToCheckout: () => void;
}

export function CartSidebar({ items, onClose, onRemove, onProceedToCheckout }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-zinc-900 shadow-xl z-50">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-zinc-400" />
              <h2 className="text-xl font-semibold text-white">Seu Carrinho</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-400">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-2 rounded-lg bg-zinc-800/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-zinc-400">{formatPrice(item.price)}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400">Total:</span>
            <span className="text-xl font-bold text-white">{formatPrice(total)}</span>
          </div>
          <button
            onClick={onProceedToCheckout}
            disabled={items.length === 0}
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}