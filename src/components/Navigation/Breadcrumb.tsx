import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  category: string;
  subcategory?: string;
}

export function Breadcrumb({ category, subcategory }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
      <a href="/" className="hover:text-white transition-colors">Home</a>
      <ChevronRight size={16} />
      <a href={`/${category}`} className="hover:text-white transition-colors capitalize">
        {category}
      </a>
      {subcategory && (
        <>
          <ChevronRight size={16} />
          <span className="text-white capitalize">{subcategory}</span>
        </>
      )}
    </nav>
  );
}