import React from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  { id: 'lancamentos', name: 'Lançamentos' },
  { id: 'masculino', name: 'Masculino' },
  { id: 'feminino', name: 'Feminino' },
  { id: 'esportes', name: 'Esportes' },
  { id: 'colecoes', name: 'Coleções' }
];

export function CategoryMenu() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {categories.map((category) => (
        <div key={category.id} className="group relative">
          <button className="flex items-center space-x-1 text-zinc-300 hover:text-white py-2">
            <span>{category.name}</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 w-48 bg-zinc-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="p-4 space-y-2">
              {/* Subcategorias podem ser adicionadas aqui */}
              <a href="#" className="block text-zinc-400 hover:text-white transition-colors">
                Novidades
              </a>
              <a href="#" className="block text-zinc-400 hover:text-white transition-colors">
                Destaques
              </a>
              <a href="#" className="block text-zinc-400 hover:text-white transition-colors">
                Promoções
              </a>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}