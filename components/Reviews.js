'use client';

import { Quote, MessageSquare } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const demoReviews = [
  {
    text: 'Sample customer feedback will be added here after receiving genuine reviews from Varad Mobiles customers.',
    name: '— Awaiting Review',
    role: 'Varad Mobiles Customer',
  },
  {
    text: 'Sample customer feedback will be added here after receiving genuine reviews from Varad Mobiles customers.',
    name: '— Awaiting Review',
    role: 'Varad Mobiles Customer',
  },
  {
    text: 'Sample customer feedback will be added here after receiving genuine reviews from Varad Mobiles customers.',
    name: '— Awaiting Review',
    role: 'Varad Mobiles Customer',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Customers Say
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              We value our customers&apos; feedback. Real reviews will appear here soon.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {demoReviews.map((review, index) => (
            <ScrollAnimation key={index}>
              <div
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md shadow-black/5 border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                <p className="text-text-secondary text-sm leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{review.name}</p>
                    <p className="text-xs text-text-muted">{review.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm bg-white rounded-2xl px-6 py-4 inline-block border border-border/50">
              * These are placeholder reviews. Genuine customer reviews will be added when available.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
