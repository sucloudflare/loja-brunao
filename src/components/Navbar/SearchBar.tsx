import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
<<<<<<< HEAD
      <div className={`flex items-center ${isExpanded ? 'w-64' : 'w-10'} transition-all duration-300`}>
=======
      <div className={`flex items-center ${isExpanded ? 'w-full max-w-lg' : 'w-10'} transition-all duration-300`}>
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
        <input
          type="text"
          placeholder="Buscar produtos..."
          className={`bg-zinc-800 text-white rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
<<<<<<< HEAD
            isExpanded ? 'opacity-100' : 'opacity-0 w-0'
=======
            isExpanded ? 'opacity-100' : 'opacity-0'
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
          }`}
          onBlur={() => setIsExpanded(false)}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-0 p-2 text-zinc-400 hover:text-white transition-colors"
        >
<<<<<<< HEAD
          <Search size={20} />
=======
          <Search size={19} />
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
