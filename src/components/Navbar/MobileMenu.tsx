import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const categories = [
    { id: 'lancamentos', name: 'Lançamentos', subcategories: ['Novidades', 'Coleções'] },
    { id: 'masculino', name: 'Masculino', subcategories: ['Tênis', 'Roupas', 'Acessórios'] },
    { id: 'feminino', name: 'Feminino', subcategories: ['Tênis', 'Roupas', 'Acessórios'] },
    { id: 'esportes', name: 'Esportes', subcategories: ['Corrida', 'Academia', 'Futebol'] }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50">
      <div className="h-full overflow-y-auto w-full">
        <div className="flex justify-start items-center p-4 border-b border-zinc-800 w-full"> 
          <h2 className="text-xl sm:text-lg md:text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white ml-4"> 
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 w-full">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-base md:text-lg font-medium text-white">{category.name}</h3>
                <ChevronRight size={20} className="text-zinc-400" />
              </div>
              <div className="space-y-2 pl-4">
                {category.subcategories.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors py-2 text-sm sm:text-xs md:text-sm"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
