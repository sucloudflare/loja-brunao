import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4"> {/* Mantendo o tamanho maior (7xl) */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2"> {/* Mantendo gap menor */}
            <Menu className="h-6 w-6 lg:hidden" /> {/* Ícone de menu ajustado */}
            <h1 className="text-2xl font-bold tracking-wider">BRUNAO</h1>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">NOVIDADES</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ROUPAS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">CALÇADOS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ACESSÓRIOS</a>
          </nav>

          <div className="flex items-center gap-6"> {/* Gap maior para mais espaçamento */}
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            <button
              onClick={onCartClick}
              className="relative p-2"
            >
              <ShoppingBag className="h-5 w-5 text-gray-300 hover:text-white" /> {/* Corrigido para "gray-300" */}
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
