import React, { useState } from 'react';
import { Star, TrendingUp, Clock, Mail, ChevronRight, Menu, X, ShoppingBag, Search } from 'lucide-react';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

function MenuItem({ icon, text, isActive = false }: MenuItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group hover:bg-white/10 ${
        isActive ? 'bg-white/10' : ''
      }`}
    >
      <span className="text-zinc-400 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="text-zinc-300 group-hover:text-white transition-colors">
        {text}
      </span>
      <ChevronRight
        size={16}
        className="ml-auto text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
      />
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controle do estado do menu mobile
  const [cartItemsCount, setCartItemsCount] = useState(0); // Contagem de itens no carrinho

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Alterna o menu
  const closeMenu = () => setIsMenuOpen(false); // Fecha o menu

  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* Ícone de menu para mobile */}
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" onClick={toggleMenu} />
            <h1 className="text-2xl font-bold tracking-wider">BRUNO SHOP</h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">NOVIDADES</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ROUPAS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">CALÇADOS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">ACESSÓRIOS</a>
          </nav>

          {/* Ícones de pesquisa e carrinho */}
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            <button className="relative p-2">
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

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40">
          <div className="absolute top-8 right-4"> {/* Ajuste do X para baixo */}
            <button onClick={closeMenu} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="w-72 bg-zinc-900/50 backdrop-blur-xl p-4 rounded-2xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Menu</h2>
              <p className="text-sm text-zinc-400">Navegue por categorias</p>
            </div>

            <nav className="space-y-1">
              <MenuItem icon={<Star size={20} />} text="Produtos em Destaque" isActive />
              <MenuItem icon={<TrendingUp size={20} />} text="Mais Vendidos" />
              <MenuItem icon={<Clock size={20} />} text="Produtos Recentes" />
              <MenuItem icon={<Mail size={20} />} text="Contato" />
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl">
              <h3 className="text-sm font-medium text-white mb-2">Precisa de ajuda?</h3>
              <p className="text-xs text-zinc-400 mb-3">
                Nossa equipe está disponível 24/7 para ajudar você.
              </p>
              <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
