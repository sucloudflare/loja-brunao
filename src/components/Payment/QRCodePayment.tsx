import React from 'react';
import { QrCode } from 'lucide-react';

interface QRCodePaymentProps {
  total: number;
  qrCodeUrl: string;
}

export function QRCodePayment({ total, qrCodeUrl }: QRCodePaymentProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <QrCode className="text-white" size={24} />
        <h3 className="text-lg font-medium text-white">Pagamento via PIX</h3>
      </div>
      
      <div className="bg-white p-4 rounded-lg mb-4">
        <img
          src={qrCodeUrl}
          alt="QR Code para pagamento"
          className="w-full max-w-[200px] mx-auto"
        />
      </div>
      
      <div className="text-center">
        <p className="text-zinc-400 mb-2">Total a pagar:</p>
        <p className="text-2xl font-bold text-white">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </p>
      </div>
      
      <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
        Copiar código PIX
      </button>
    </div>
  );
}