import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  subcategories: {
    title: string;
    items: string[];
  }[];
}

const categories: Category[] = [
  {
    id: 'lancamentos',
    name: 'Lançamentos',
    subcategories: [
      {
        title: 'Destaques',
        items: ['Novidades', 'Coleções Exclusivas', 'Edições Limitadas']
      }
    ]
  },
  {
    id: 'masculino',
    name: 'Masculino',
    subcategories: [
      {
        title: 'Calçados',
        items: ['Tênis Casual', 'Tênis Esportivo', 'Chuteiras', 'Sandálias']
      },
      {
        title: 'Roupas',
        items: ['Camisetas', 'Shorts', 'Jaquetas', 'Calças']
      },
      {
        title: 'Acessórios',
        items: ['Meias', 'Bonés', 'Mochilas', 'Bolas']
      }
    ]
  },
  {
    id: 'feminino',
    name: 'Feminino',
    subcategories: [
      {
        title: 'Calçados',
        items: ['Tênis Casual', 'Tênis Esportivo', 'Training', 'Sandálias']
      },
      {
        title: 'Roupas',
        items: ['Tops', 'Shorts', 'Jaquetas', 'Leggings']
      },
      {
        title: 'Acessórios',
        items: ['Meias', 'Bonés', 'Bolsas', 'Equipamentos']
      }
    ]
  },
  {
    id: 'esportes',
    name: 'Esportes',
    subcategories: [
      {
        title: 'Modalidades',
        items: ['Futebol', 'Corrida', 'Academia', 'Basquete']
      },
      {
        title: 'Coleções',
        items: ['Performance', 'Training', 'Lifestyle']
      }
    ]
  }
];

export function MegaMenu() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {categories.map((category) => (
        <div key={category.id} className="group relative">
          <button className="flex items-center space-x-1 text-zinc-300 hover:text-white py-2">
            <span>{category.name}</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 w-screen bg-gradient-to-b from-zinc-900 to-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 shadow-2xl border-t border-zinc-800">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-8">
                {category.subcategories.map((subcategory, index) => (
                  <div key={index}>
                    <h3 className="text-white font-medium mb-4 text-lg">{subcategory.title}</h3>
                    <ul className="space-y-2">
                      {subcategory.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href="#" 
                            className="text-zinc-400 hover:text-white transition-colors block py-1 hover:translate-x-1 transform duration-200"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}