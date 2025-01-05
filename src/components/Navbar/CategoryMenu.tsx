const categories = [
  { id: 'masculino', name: 'Masculino' },
  { id: 'feminino', name: 'Feminino' },
  { id: 'esportes', name: 'Esportes' },
  { id: 'colecoes', name: 'Coleções' }
];

export function CategoryMenu() {
  return (
    <nav className="relative">
      {categories.map((category) => (
        <div key={category.id} className="group relative">
          <button className="flex items-center justify-between p-3 text-white hover:bg-zinc-800 rounded-md">
            <span>{category.name}</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 w-56 bg-zinc-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="p-4 space-y-2">
              {/* Subcategorias podem ser adicionadas aqui */}
              <a href="#" className="block text-zinc-400 hover:text-white transition-colors">
                Subcategoria 1
              </a>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
