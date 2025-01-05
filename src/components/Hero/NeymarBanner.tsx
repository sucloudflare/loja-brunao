import React from 'react';
import { ArrowRight } from 'lucide-react';

export function NeymarBanner() {
  return (
    <>
      {/* Banner principal */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Imagem de fundo */}
        <img
          src="https://images.unsplash.com/photo-1577223625816-7546f13df25d"
          alt="Neymar Jr Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white mb-6">
                NEYMAR JR COLLECTION
              </h2>
              <p className="text-xl text-zinc-300 mb-8">
                Descubra a nova coleção exclusiva do Neymar Jr. Estilo único que combina performance e personalidade.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-zinc-200 transition-all duration-300 group">
                Explorar Coleção
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Player do Spotify (fora do banner) */}
      <div className="mt-8 px-4">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/4hKLzFvNwHF6dPosGT30ed?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
        ></iframe>
      </div>
    </>
  );
}
