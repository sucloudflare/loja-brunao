import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './components/Navbar/SearchBar';
<<<<<<< HEAD
import { MegaMenu } from './components/Navigation/MegaMenu';
import { MobileMenu } from './components/Navbar/MobileMenu';
import { Banner } from './components/Hero/Banner';
import { NeymarBanner } from './components/Hero/NeymarBanner';
import { ProductSections } from './components/Products/ProductSections';
import { AthletesSection } from './components/Athletes/AthletesSection';
=======
import { CategoryMenu } from './components/Navbar/CategoryMenu';
import { MobileMenu } from './components/Navbar/MobileMenu';
import { Banner } from './components/Hero/Banner';
import { ProductSections } from './components/Products/ProductSections';
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
import { CartSidebar } from './components/Cart/CartSidebar';
import { QRCodePayment } from './components/Payment/QRCodePayment';
import { Footer } from './components/Footer/Footer';
import { CookieConsent } from './components/CookieConsent/CookieConsent';
<<<<<<< HEAD
import { Menu, ShoppingBag } from 'lucide-react';
=======
import { Menu } from 'lucide-react';
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
import { products } from './data/products';
import { Product } from './types';
import { useCookieConsent } from './hooks/useCookieConsent';
import { sendOrderConfirmation } from './services/email';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const { showConsent, acceptCookies } = useCookieConsent();

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleCheckout = async () => {
    setShowPayment(true);
    setIsCartOpen(false);
    
    await sendOrderConfirmation({
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price, 0),
      paymentMethod: 'PIX',
      email: 'cliente@exemplo.com'
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-right" />
      
      <header className="fixed w-full z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4 lg:gap-12">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-white"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold text-white">LUXE</h1>
<<<<<<< HEAD
              <MegaMenu />
=======
              <CategoryMenu />
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
            </div>
            
            <div className="flex items-center gap-6">
              <SearchBar />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-white"
              >
<<<<<<< HEAD
                <ShoppingBag size={24} />
=======
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="pt-20">
        <Banner />
        <ProductSections products={products} onAddToCart={addToCart} />
<<<<<<< HEAD
        <NeymarBanner />
        <AthletesSection />
=======
>>>>>>> 1d1f998a0f24ed4c069103bc379e110b52e77bc5
      </main>

      <Footer />

      {isCartOpen && (
        <CartSidebar
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onProceedToCheckout={handleCheckout}
        />
      )}

      {showPayment && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="max-w-md w-full">
            <QRCodePayment
              total={cartItems.reduce((sum, item) => sum + item.price, 0)}
              qrCodeUrl="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426655440000"
            />
          </div>
        </div>
      )}

      {showConsent && <CookieConsent onAccept={acceptCookies} />}
    </div>
  );
}

export default App;