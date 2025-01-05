import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6 lg:hidden" />
            <h1 className="text-2xl font-bold tracking-wider">LUXE</h1>
=======
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 lg:hidden" /> {/* Ajustado para aumentar o ícone no mobile */}
            <h1 className="text-2xl font-bold tracking-wider">BRUNAO</h1>
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">NOVIDADES</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ROUPAS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">CALÇADOS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ACESSÓRIOS</a>
          </nav>

<<<<<<< HEAD
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
=======
          <div className="flex items-center gap-6"> {/* Aumentado o gap entre os ícones */}
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" /> {/* Ajustado tamanho do ícone */}
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
            <button
              onClick={onCartClick}
              className="relative p-2"
            >
<<<<<<< HEAD
              <ShoppingBag className="h-5 w-5 text-gray-300 hover:text-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
=======
              <ShoppingBag className="h-5 w-5 text-gray-280 hover:text-white" /> {/* Ajustado o tamanho do ícone */}
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
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