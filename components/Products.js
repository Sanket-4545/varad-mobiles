'use client';

import { useState } from 'react';
import { Smartphone, X } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const products = [
  {
    name: 'iPhone 16',
    brand: 'Apple',
    description: 'Latest flagship with powerful A-series chip and advanced camera system.',
    color: 'from-gray-800 to-gray-600',
  },
  {
    name: 'Galaxy S25',
    brand: 'Samsung',
    description: 'Premium Android experience with stunning display and AI features.',
    color: 'from-blue-700 to-blue-500',
  },
  {
    name: 'OnePlus 13',
    brand: 'OnePlus',
    description: 'Fast and smooth flagship with incredible charging speed.',
    color: 'from-red-600 to-red-400',
  },
  {
    name: 'Redmi Note Series',
    brand: 'Xiaomi',
    description: 'Feature-packed smartphones with great value for money.',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    name: 'Realme Number Series',
    brand: 'Realme',
    description: 'Style and performance combined at an accessible price point.',
    color: 'from-yellow-500 to-amber-400',
  },
  {
    name: 'Vivo V Series',
    brand: 'Vivo',
    description: 'Excellent camera performance with sleek modern design.',
    color: 'from-blue-600 to-cyan-400',
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Smartphones
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              Explore our collection of popular smartphones. Contact us for current pricing and availability.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ScrollAnimation key={product.name}>
              <div
                className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full">
                      {product.brand}
                    </span>
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center justify-center w-full py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg group-hover:shadow-primary/20">
                    View Details
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm bg-white rounded-2xl px-6 py-4 inline-block border border-border/50">
              * These are sample/demo products shown for illustration. Contact the store for actual stock.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 lg:p-8 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-primary">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProduct.color} flex items-center justify-center mb-6 mx-auto`}>
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <p className="text-text-secondary text-center text-sm leading-relaxed mb-2">
              Contact Varad Mobiles for current price and availability.
            </p>
            <p className="text-text-muted text-xs text-center mb-6">
              Call us at{' '}
              <a href="tel:08830018300" className="text-secondary font-medium hover:underline">
                08830018300
              </a>
            </p>
            <a
              href="#contact"
              onClick={() => setSelectedProduct(null)}
              className="block text-center w-full py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
