import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { NewsletterForm } from '../Newsletter/NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-16">
<<<<<<< HEAD
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
=======
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
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
          
          <div>
<<<<<<< HEAD
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-zinc-400 mb-4">
              Receba ofertas exclusivas e novidades.
=======
            <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Ofertas exclusivas e novidades diretamente no seu e-mail.
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
            </p>
            <NewsletterForm />
          </div>
        </div>
        
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © 2024 LUXE. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
=======
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4 sm:mb-0">
            © 2024 LUXE. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
