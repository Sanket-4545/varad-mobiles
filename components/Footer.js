'use client';

import { Smartphone, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Varad<span className="text-secondary-light">Mobiles</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted mobile phone store in Barshi, Maharashtra. We offer smartphones, accessories, and reliable service.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'Offers', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 text-sm hover:text-secondary-light transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary-light mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Mahaveer Marg, Opp. Sunil Xerox,
                  <br />
                  Mangire Mala, Barshi,
                  <br />
                  Maharashtra 413401
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-light flex-shrink-0" />
                <a href="tel:08830018300" className="text-white/60 text-sm hover:text-secondary-light transition-colors">
                  08830018300
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Follow Us</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Social media pages coming soon. Stay tuned for updates!
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'YouTube'].map((social) => (
                <span
                  key={social}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40 text-xs font-medium hover:bg-white/20 hover:text-white transition-all duration-200 cursor-default"
                >
                  {social.slice(0, 2)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center sm:text-left">
            &copy; {year} Sanket Dadasaheb Bhojane. All rights reserved.
          </p>
          <p className="text-white/50 text-xs text-center">
            This is a demo website. Product availability and prices may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
