import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Banner() {
  return (
    <div className="relative h-screen w-full">
      {/* Vídeo para desktop */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        src="https://www.youtube.com/embed/qw5gGZx054c?autoplay=1&loop=1&playlist=qw5gGZx054c&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1"
        title="Video Banner Desktop"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />

      {/* Vídeo para dispositivos móveis */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        src="https://www.youtube.com/embed/yaZFGUy6Hwc?autoplay=1&loop=1&playlist=yaZFGUy6Hwc&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1"
        title="Video Banner Mobile"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />

      {/* Overlay com opacidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Título e conteúdo sobre o vídeo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="text-center">
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
  );
}
