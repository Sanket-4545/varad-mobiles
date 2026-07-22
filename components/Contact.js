'use client';

import { MapPin, Phone, MessageCircle, Navigation, Store, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Contact() {
  const phone = '08830018300';
  const whatsappUrl = 'https://wa.me/918830018300';
  const address = 'Mahaveer Marg, Opp. Sunil Xerox, Mangire Mala, Barshi, Maharashtra 413401';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Varad Mobiles, Mahaveer Marg, Barshi, Maharashtra 413401')}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">
                Touch
              </span>
            </h2>
            <p className="text-white/70 text-base lg:text-lg max-w-2xl mx-auto">
              Visit our store, give us a call, or send a message. We&apos;d love to hear from you.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <ScrollAnimation>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-secondary-light" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Varad Mobiles</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Mahaveer Marg, Opp. Sunil Xerox,
                    <br />
                    Mangire Mala, Barshi,
                    <br />
                    Maharashtra 413401
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                  <a href={`tel:${phone}`} className="text-white/70 text-sm hover:text-secondary-light transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-white/70 text-sm">
                    Mon - Sat: 10:00 AM - 9:00 PM
                    <br />
                    Sun: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="space-y-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white hover:bg-white/90 text-primary font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
              <p className="text-white/50 text-xs text-center pt-2">
                <MapPin className="w-3 h-3 inline mr-1" />
                Open in Google Maps for directions
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
