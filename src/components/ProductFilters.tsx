import React from 'react';
import { Filter } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
}

export function ProductFilters({ selectedCategory, onCategoryChange, onPriceRangeChange }: ProductFiltersProps) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-lg mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-zinc-400" />
        <h3 className="text-lg font-medium">Filtros</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Categoria</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full bg-zinc-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-white/20 outline-none"
          >
            <option value="">Todas as Categorias</option>
            <option value="roupas">Roupas</option>
            <option value="calcados">Calçados</option>
            <option value="acessorios">Acessórios</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Faixa de Preço</label>
          <select
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="w-full bg-zinc-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-white/20 outline-none"
          >
            <option value="">Todos os Preços</option>
            <option value="0-100">Até R$ 100</option>
            <option value="100-300">R$ 100 - R$ 300</option>
            <option value="300-500">R$ 300 - R$ 500</option>
            <option value="500+">Acima de R$ 500</option>
          </select>
        </div>
      </div>
    </div>
  );
}