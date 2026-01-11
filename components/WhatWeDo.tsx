
import React from 'react';

const services = [
  {
    id: 'corporate',
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    description: 'Bespoke catering for boardrooms, conferences, and high-impact galas.'
  },
  {
    id: 'private',
    title: 'Private Dining',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    description: 'Michelin-inspired home experiences for your most intimate circles.'
  },
  {
    id: 'weddings',
    title: 'Wedding Galas',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    description: 'The ultimate culinary journey for your most special day.'
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C1272D] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#006837]">
            Culinary <span className="italic text-[#C1272D]">Excellence</span> at Scale
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif text-[#006837] mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#C1272D] group-hover:gap-5 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
