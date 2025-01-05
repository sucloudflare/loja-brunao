import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Banner() {
  return (
    <div className="relative h-screen">
      <iframe
        className="absolute inset-0 w-full h-full object-cover right-[600px]"
        src="https://www.youtube.com/embed/qw5gGZx054c?autoplay=1&loop=1&playlist=qw5gGZx054c&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="Video Banner"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />

      {/* Overlay com opacidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              PERFORMANCE ELEVADO
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 mb-8 animate-fade-in delay-200">
              Nova coleção de tênis de alta performance para atletas que buscam o máximo.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group animate-fade-in delay-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Comprar Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
