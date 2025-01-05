import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc/900 h-screen h-full flex items-center flex text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE</h3>
            <p className="text-zinc-400">
              Sua loja de moda premium com as melhores marcas e tendências.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>contato@luxe.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © 2024 LUXE. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
