import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar o email
    toast.success('Inscrição realizada com sucesso!');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu melhor e-mail"
        className="flex-1 bg-zinc-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
        required
      />
      <button
        type="submit"
        className="bg-white text-black px-6 py-2 rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
      >
        <Send size={18} />
        <span>Inscrever</span>
      </button>
    </form>
  );
}