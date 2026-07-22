'use client';

import { Smartphone, Headset, BadgePercent, HeartHandshake, MapPin, CaseSensitive } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const reasons = [
  {
    icon: Smartphone,
    title: 'Wide Range of Smartphones',
    description: 'From flagship to budget-friendly, we offer smartphones across popular brands.',
  },
  {
    icon: Headset,
    title: 'Helpful Product Guidance',
    description: 'Not sure which phone to buy? We help you find the perfect match.',
  },
  {
    icon: BadgePercent,
    title: 'Attractive Deals',
    description: 'Regular offers, exchange deals, and discounts to help you save more.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    description: 'Your satisfaction is our priority. We treat every customer with respect.',
  },
  {
    icon: MapPin,
    title: 'Convenient Barshi Location',
    description: 'Easily accessible shop on Mahaveer Marg in the heart of Barshi.',
  },
  {
    icon: CaseSensitive,
    title: 'Mobile Accessories',
    description: 'Find cases, chargers, earphones, screen guards, and more.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Us
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              Here&apos;s what makes Varad Mobiles the preferred choice for mobile shoppers in Barshi.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollAnimation key={reason.title}>
                <div
                  className="group flex gap-4 p-5 lg:p-6 rounded-2xl bg-surface-alt border border-border/50 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1.5">{reason.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
