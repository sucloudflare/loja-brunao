import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className={`flex items-center ${isExpanded ? 'w-full max-w-lg' : 'w-10'} transition-all duration-300`}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          className={`bg-zinc-800 text-white rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
          onBlur={() => setIsExpanded(false)}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-0 p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <Search size={19} />
        </button>
      </div>
    </div>
  );
}
