import React from 'react';
import { ProductGrid } from '../Products/ProductGrid';
import { FilterSidebar } from '../Filters/FilterSidebar';
import { useProducts } from '../../hooks/useProducts';
import { Breadcrumb } from '../Navigation/Breadcrumb';

interface CategoryPageProps {
  category: string;
  subcategory?: string;
}

export function CategoryPage({ category, subcategory }: CategoryPageProps) {
  const { products, filters, updateFilters } = useProducts(category, subcategory);

  return (
    <div className="pt-24 bg-gradient-to-b from-zinc-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <Breadcrumb category={category} subcategory={subcategory} />
        
        <h1 className="text-4xl font-bold text-white mb-8 capitalize">
          {subcategory || category}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar filters={filters} onFilterChange={updateFilters} />
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}