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
<<<<<<< HEAD
    <div className="fixed inset-0 bg-gradient-to-b from-black to-zinc-900 z-50">
      <div className="h-full overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
          >
=======
    <div className="fixed inset-0 bg-black/95 z-50">
      <div className="h-full overflow-y-auto w-full">
        <div className="flex justify-start items-center p-4 border-b border-zinc-800 w-full"> 
          <h2 className="text-xl sm:text-lg md:text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white ml-4"> 
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
            <X size={24} />
          </button>
        </div>
        
<<<<<<< HEAD
        <nav className="p-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="flex items-center justify-between mb-2 p-3 bg-zinc-800/50 rounded-lg">
                <h3 className="text-lg font-medium text-white">{category.name}</h3>
=======
        <nav className="p-4 w-full">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-base md:text-lg font-medium text-white">{category.name}</h3>
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
                <ChevronRight size={20} className="text-zinc-400" />
              </div>
              <div className="space-y-2 pl-4">
                {category.subcategories.map((sub) => (
                  <a
                    key={sub}
                    href="#"
<<<<<<< HEAD
                    className="block text-zinc-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-zinc-800/30"
=======
                    className="block text-zinc-400 hover:text-white transition-colors py-2 text-sm sm:text-xs md:text-sm"
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
