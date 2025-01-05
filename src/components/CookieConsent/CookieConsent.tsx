import React from 'react';
import { X } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
}

export function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-300 text-sm">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-zinc-200 transition-colors text-sm"
          >
            Aceitar
          </button>
          <button
            onClick={onAccept}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}