import emailjs from '@emailjs/browser';

export const sendOrderConfirmation = async (orderDetails: {
  items: any[];
  total: number;
  paymentMethod: string;
  email: string;
}) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: orderDetails.email,
        order_items: orderDetails.items.map(item => item.name).join(', '),
        total: orderDetails.total.toFixed(2),
        payment_method: orderDetails.paymentMethod
      },
      'YOUR_PUBLIC_KEY'
    );
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};