'use client';

import ScrollAnimation from './ScrollAnimation';

const brands = [
  { name: 'Apple', color: 'from-gray-800 to-gray-600' },
  { name: 'Samsung', color: 'from-blue-700 to-blue-500' },
  { name: 'OnePlus', color: 'from-red-600 to-red-400' },
  { name: 'Xiaomi', color: 'from-orange-500 to-yellow-400' },
  { name: 'Redmi', color: 'from-red-700 to-red-500' },
  { name: 'Realme', color: 'from-yellow-500 to-amber-400' },
  { name: 'Vivo', color: 'from-blue-600 to-cyan-400' },
  { name: 'Oppo', color: 'from-green-600 to-teal-400' },
];

export default function Brands() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Popular{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Brands
              </span>
            </h2>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              We stock a wide range of popular smartphone brands.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <ScrollAnimation key={brand.name}>
              <div
                className="group relative bg-surface-alt rounded-2xl p-5 lg:p-6 text-center shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-default"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${brand.color} mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`} />
                <span className="block text-sm font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                  {brand.name}
                </span>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm bg-surface-alt rounded-2xl px-6 py-4 inline-block border border-border/50">
              * These are sample brand categories. Please confirm availability with the store.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
