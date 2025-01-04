import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentIntent {
  clientSecret: string;
  amount: number;
}

export async function createPaymentIntent(amount: number): Promise<PaymentIntent> {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });
  
  return response.json();
}

export async function processPixPayment(amount: number) {
  const response = await fetch('/api/generate-pix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });
  
  return response.json();
}

export async function initializePayment(amount: number) {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to initialize');

  const { clientSecret } = await createPaymentIntent(amount);
  
  return { stripe, clientSecret };
}