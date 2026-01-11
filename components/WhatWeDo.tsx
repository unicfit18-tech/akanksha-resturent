
import React from 'react';

const services = [
  {
    title: "CAFETERIA SERVICES",
    desc: "Serving fresh meals that enhance your team's productivity and workplace happiness.",
    icon: <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>,
    dark: true
  },
  {
    title: "CORPORATE CATERING",
    desc: "Elevating everyday meals into exceptional corporate dining experiences your team deserves.",
    icon: <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m4 0h4a2 2 0 0 1 2 2v1m-6 4h4m-8 0h3m1 8h9m2-12h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-1"/>,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "INDUSTRIAL CATERING",
    desc: "Reliable catering tailored for industries, ensuring workforce satisfaction and nutrition.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
    dark: true
  },
  {
    title: "PACKED FOOD SERVICES",
    desc: "Hygienic, convenient, and timely packed meals—ideal for office lunches and special events.",
    icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>,
    dark: false
  },
  {
    title: "EVENT CATERING",
    desc: "Mastering the art of large-scale event hospitality with regional authenticity.",
    icon: <path d="M3 6h18M3 12h18M3 18h18"/>,
    dark: false
  },
  {
    title: "HOSPITAL CAFETERIA",
    desc: "Nutritious and highly hygienic meal solutions for healthcare environments.",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    dark: true
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section id="services-section" className="py-24 bg-[#f8fcf7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
             <span className="w-12 h-[2px] bg-[#a3e635]"></span>
             <span className="bg-white px-5 py-1 rounded-full text-[#003d29] font-bold text-[10px] tracking-widest border border-[#a3e635]/20">WHAT WE DO</span>
             <span className="w-12 h-[2px] bg-[#a3e635]"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#003d29] leading-tight">
            We Have Services For <span className="italic text-[#a3e635] relative">Catering</span> <br/>
            Tailored To Your Event.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`relative rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden min-h-[400px] ${
                s.dark ? 'bg-[#003d29] text-white' : 'bg-white text-[#003d29] shadow-xl border border-[#a3e635]/10'
              }`}
            >
              {s.image && (
                <div className="absolute inset-0 opacity-20">
                   <img src={s.image} className="w-full h-full object-cover" alt="bg" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 ${s.dark ? 'bg-white/10' : 'bg-[#d9f99d]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={s.dark ? '#a3e635' : '#003d29'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-black uppercase tracking-wider mb-6 leading-snug">{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-auto ${s.dark ? 'text-white/60' : 'text-gray-500'}`}>
                  {s.desc}
                </p>

                <button className={`mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:gap-4 ${s.dark ? 'text-[#a3e635]' : 'text-[#003d29]'}`}>
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
