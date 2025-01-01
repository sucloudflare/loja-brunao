import React, { useState } from 'react';
import { Star, TrendingUp, Clock, Mail, ChevronRight, X } from 'lucide-react'; // Adicionando o ícone X

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

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(true); // Estado para abrir/fechar o menu

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <>
        {/* Sobreposição de fundo, apenas para escurecer o conteúdo atrás do menu */}
        <div
          className="fixed inset-0 bg-black/50 z-40" // Sobreposição de fundo escurecido
          onClick={closeMenu} // Fecha o menu ao clicar fora
        ></div>

        {/* Menu Lateral */}
        <div className="fixed w-72 h-full bg-zinc-900/50 backdrop-blur-xl p-4 rounded-2xl z-50">
          {/* Botão de fechar X no lado direito */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white p-2 hover:bg-zinc-700 rounded-full"
          >
            <X size={24} />
          </button>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Menu</h2>
            <p className="text-sm text-zinc-400">Navegue por categorias</p>
          </div>

          <nav className="space-y-1">
            <MenuItem
              icon={<Star size={20} />}
              text="Produtos em Destaque"
              isActive
            />
            <MenuItem
              icon={<TrendingUp size={20} />}
              text="Mais Vendidos"
            />
            <MenuItem
              icon={<Clock size={20} />}
              text="Produtos Recentes"
            />
            <MenuItem
              icon={<Mail size={20} />}
              text="Contato"
            />
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
      </>
    )
  );
}
