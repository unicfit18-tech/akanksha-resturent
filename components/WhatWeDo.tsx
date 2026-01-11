
import React from 'react';

const services = [
  {
    id: 'corporate',
    tag: 'Professional',
    title: 'Boardroom Elegance',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    desc: 'High-stakes catering for high-stakes meetings.'
  },
  {
    id: 'private',
    tag: 'Intimate',
    title: 'Private Sanctuaries',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    desc: 'Bespoke Michelin-inspired home experiences.'
  },
  {
    id: 'weddings',
    tag: 'Celebration',
    title: 'Wedding Masterpieces',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    desc: 'Curating the sensory narrative of your love story.'
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-32 bg-[#0D2C22] text-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Scaling The <br/>
              <span className="italic text-[#D4AF37]">Extraordinary.</span>
            </h2>
          </div>
          <div className="max-w-xs pb-4 border-l-2 border-[#D4AF37]/30 pl-8">
            <p className="text-white/60 text-lg font-light italic">"Precision at volume is our signature."</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-[#0D2C22]/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-1.5 bg-white text-[#0D2C22] rounded-full text-[9px] font-bold uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-3xl font-serif mb-2">{item.title}</h3>
                   <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                     {item.desc}
                   </p>
                </div>
              </div>
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">
                Explore Capability 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
