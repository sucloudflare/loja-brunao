import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductFilters } from './components/ProductFilters';
import { Cart } from './components/Cart';
import { SideMenu } from './components/SideMenu';
import { products } from './data/products';
import { filterProducts } from './utils/filters';
import { Product } from './types';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const filteredProducts = filterProducts(products, selectedCategory, priceRange);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        cartItemsCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-8">
          <aside className="hidden lg:block sticky top-24 h-fit">
            <SideMenu />
          </aside>

          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Coleção em Destaque</h2>
              <p className="text-zinc-400">Descubra nossos produtos premium mais recentes</p>
            </div>

            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onPriceRangeChange={setPriceRange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {isCartOpen && (
        <Cart 
          items={cartItems}
          onRemoveFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;