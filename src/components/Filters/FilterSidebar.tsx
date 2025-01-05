import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    price: string[];
    colors: string[];
    sizes: string[];
    brands: string[];
  };
  onFilterChange: (type: string, value: string) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 bg-zinc-900/50 p-6 rounded-lg h-fit">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-zinc-400" />
          <h2 className="text-lg font-medium text-white">Filtros</h2>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-white font-medium mb-3">Preço</h3>
          <div className="space-y-2">
            {filters.price.map((range) => (
              <label key={range} className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-zinc-600 text-indigo-600 focus:ring-indigo-500"
                  onChange={() => onFilterChange('price', range)}
                />
                {range}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Cores</h3>
          <div className="flex flex-wrap gap-2">
            {filters.colors.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-white transition-colors"
                style={{ backgroundColor: color }}
                onClick={() => onFilterChange('color', color)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Tamanhos</h3>
          <div className="grid grid-cols-4 gap-2">
            {filters.sizes.map((size) => (
              <button
                key={size}
                className="px-3 py-2 text-sm text-zinc-400 border border-zinc-700 rounded hover:border-white hover:text-white transition-colors"
                onClick={() => onFilterChange('size', size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}