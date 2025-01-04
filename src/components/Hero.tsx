import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

export function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Luxo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <AnimatedText delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-text-shimmer">
            LUXE Collection
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={400}>
          <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-2xl">
            Descubra nossa coleção exclusiva de produtos premium, onde elegância encontra sofisticação.
          </p>
        </AnimatedText>
        
        <AnimatedText delay={600}>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-200 transition-all duration-300 group hover:scale-105">
            Explorar Coleção
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedText>
      </div>
    </div>
  );
}