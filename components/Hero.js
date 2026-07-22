'use client';

import { Phone, ArrowRight, MapPin, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 lg:mb-8 animate-fade-in-up">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/80">Mahaveer Marg, Barshi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Your Trusted
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Mobile Store
              </span>
              <br />
              in Barshi
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 animate-fade-in-up">
              Discover the latest smartphones, exciting offers, and reliable service — all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                Explore Mobiles
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary-light/20 rounded-[3rem] blur-2xl transform rotate-6" />
              <div className="relative w-72 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] border-4 border-gray-700 shadow-2xl shadow-secondary/20 overflow-hidden animate-float">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-center">
                  <div className="w-20 h-1.5 bg-gray-700 rounded-full" />
                </div>
                <div className="h-full flex flex-col items-center justify-center px-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-6 shadow-lg shadow-secondary/30">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-center font-semibold text-lg mb-2">Varad Mobiles</p>
                  <p className="text-gray-400 text-center text-sm">Premium Smartphones</p>
                  <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                    {['Apple', 'Samsung', 'OnePlus', 'Vivo'].map((brand) => (
                      <div key={brand} className="px-3 py-2 rounded-xl bg-white/10 text-center text-xs text-white/80 font-medium">
                        {brand}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="mt-4 text-accent text-sm font-medium">New Arrivals Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
