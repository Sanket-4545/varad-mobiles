'use client';

import { Smartphone, Tag, ShieldCheck, Headset } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const features = [
  {
    icon: Smartphone,
    title: 'Latest Smartphones',
    description: 'Explore the latest smartphones from popular brands.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Tag,
    title: 'Best Offers',
    description: 'Get attractive deals and exciting offers on selected products.',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description: 'Shop with confidence with genuine and quality products.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Headset,
    title: 'Friendly Service',
    description: 'Get helpful guidance and customer-friendly service.',
    gradient: 'from-purple-500 to-pink-400',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Varad Mobiles
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              We are committed to providing the best mobile experience for our customers.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollAnimation key={feature.title}>
                <div
                  className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
