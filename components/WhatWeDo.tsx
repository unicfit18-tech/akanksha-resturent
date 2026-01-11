
import React from 'react';

const services = [
  {
    id: 'corporate',
    number: '01',
    title: 'Corporate Events',
    category: 'B2B Excellence',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    description: 'Elevating boardrooms and conferences with precision-timed hospitality and nutritional excellence.'
  },
  {
    id: 'private',
    number: '02',
    title: 'Private Dining',
    category: 'Bespoke Artistry',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    description: 'Transforming private residences into Michelin-inspired spaces for your inner circle.'
  },
  {
    id: 'weddings',
    number: '03',
    title: 'Wedding Galas',
    category: 'Legacy Moments',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    description: 'Grand-scale culinary narratives crafted specifically for the most important day of your life.'
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section id="services-section" className="py-24 md:py-32 bg-[#F9FBFA] relative overflow-hidden">
      {/* Background Subtle Branding */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none flex items-center justify-center">
        <h2 className="text-[30vw] font-serif font-bold text-[#006837] select-none uppercase tracking-tighter">CATERING</h2>
      </div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Our Core Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#006837] leading-tight">
              Culinary <span className="italic text-[#C1272D]">Craftsmanship</span> <br/>
              Delivered At Scale.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-medium leading-relaxed pb-2 border-b border-gray-200">
            From intimate executive dinners to city-wide galas, we deliver hospitality without compromise.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-20px_rgba(0,104,55,0.1)] transition-all duration-700 hover:-translate-y-4 border border-gray-50 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-72 lg:h-80 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black text-[#006837] uppercase tracking-[0.2em] shadow-xl">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 lg:p-12 relative flex-1 flex flex-col">
                {/* Ghost Numbering */}
                <div className="absolute top-10 right-10 text-8xl font-serif font-black text-[#006837]/[0.03] select-none pointer-events-none group-hover:text-[#C1272D]/[0.05] transition-colors duration-700">
                  {service.number}
                </div>

                <h3 className="text-2xl lg:text-3xl font-serif text-[#006837] mb-6 relative inline-block">
                  {service.title}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#C1272D] group-hover:w-full transition-all duration-500 ease-out"></span>
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-10 flex-1">
                  {service.description}
                </p>

                <div className="pt-8 border-t border-gray-50">
                  <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#C1272D] group/btn">
                    Discover More
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#006837] group-hover/btn:bg-[#C1272D] group-hover/btn:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Action */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.5em] mb-8">Not finding what you need?</p>
          <button className="px-12 py-5 bg-[#006837] text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-[#C1272D] transition-all shadow-2xl hover:scale-105 active:scale-95">
            Custom Catering Solutions
          </button>
        </div>
      </div>
    </section>
  );
};
