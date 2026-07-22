'use client';

import { Repeat, CreditCard, Banknote, Sparkles, ArrowRight, Phone } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const offers = [
  {
    icon: Repeat,
    title: 'Exchange Offers',
    description: 'Trade in your old smartphone and get great value on your new purchase.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: CreditCard,
    title: 'Bank & Card Offers',
    description: 'Exciting discounts and cashback with major bank cards and UPI payments.',
    gradient: 'from-purple-600 to-pink-400',
  },
  {
    icon: Banknote,
    title: 'EMI Options',
    description: 'Easy EMI plans available with flexible tenures to suit your budget.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Sparkles,
    title: 'Smartphone Deals',
    description: 'Special bundle offers and festive discounts on select smartphone models.',
    gradient: 'from-amber-500 to-orange-400',
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Special{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Offers
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              Check out our exciting offers and deals. Contact us for the latest promotions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <ScrollAnimation key={offer.title}>
                <div
                  className="group relative bg-surface-alt rounded-2xl p-6 lg:p-8 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-white/0 rounded-bl-[4rem]" />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offer.gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{offer.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{offer.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-orange-500 hover:from-accent-hover hover:to-orange-600 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Ask About Today&apos;s Offers
            </a>
            <p className="mt-4 text-text-muted text-xs">
              * These are sample offer categories. Actual offers should be confirmed with the store.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
