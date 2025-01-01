import React, { useState } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { SideMenu } from './SideMenu'; // Importe o SideMenu

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controle de estado do menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Função para alternar o menu
  const closeMenu = () => setIsMenuOpen(false); // Função para fechar o menu

  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* Menu icon (responsivo) */}
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" onClick={toggleMenu} />
            <h1 className="text-2xl font-bold tracking-wider">BRUNO SHOP</h1>
          </div>
          
          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">NOVIDADES</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ROUPAS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">CALÇADOS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ACESSÓRIOS</a>
          </nav>

          {/* Icones de pesquisa e carrinho */}
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            <button onClick={onCartClick} className="relative p-2">
              <ShoppingBag className="h-5 w-5 text-gray-300 hover:text-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Renderização do menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-40">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              className="text-white font-bold text-xl"
            >
              Fechar
            </button>
          </div>
          <SideMenu closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
}
