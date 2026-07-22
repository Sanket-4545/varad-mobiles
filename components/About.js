'use client';

import { Store, Smartphone, Users } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary-light/10 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-black/5 border border-border/50">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Smartphone, label: 'Smartphones', value: 'Top Brands' },
                    { icon: Store, label: 'Store', value: 'Local & Trusted' },
                    { icon: Users, label: 'Service', value: 'Customer First' },
                    { icon: Smartphone, label: 'Accessories', value: 'Variety Available' },
                  ].map((item) => (
                    <div key={item.label} className="bg-surface-alt rounded-xl p-4 text-center">
                      <item.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">{item.value}</p>
                      <p className="text-xs text-text-muted">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                  Varad Mobiles
                </span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Varad Mobiles is a local mobile phone store located in the heart of Barshi, Maharashtra. 
                  We specialize in offering a curated selection of smartphones, mobile accessories, and 
                  related products to our community.
                </p>
                <p>
                  Our focus is on providing genuine products, helpful guidance, and attractive deals 
                  to ensure every customer finds the right device for their needs and budget.
                </p>
                <p>
                  Whether you&apos;re looking for the latest flagship smartphone, reliable accessories, 
                  or simply seeking advice on your next purchase, we are here to help.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Genuine Products', 'Helpful Guidance', 'Competitive Pricing'].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-white border border-border/50 text-sm font-medium text-text-secondary shadow-sm">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
