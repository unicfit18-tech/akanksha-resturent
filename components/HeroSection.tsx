
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Kinetic Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[35vw] font-serif font-black leading-none whitespace-nowrap">
          CURRY
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Top Accent */}
        <div className="reveal flex items-center gap-4 mb-8">
          <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px]">The Alchemist of Spice</span>
          <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-gray-900 leading-[0.9] tracking-tighter reveal [animation-delay:200ms]">
            Mastering <br/>
            <span className="italic text-[#C1272D] relative">
              The Art
              <span className="absolute -right-8 -top-4 text-sm font-sans font-bold text-[#D4AF37] tracking-widest not-italic">© 2024</span>
            </span> <br/>
            Of Flavor.
          </h1>
        </div>

        {/* Floating Featured Image */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] reveal [animation-delay:400ms] group">
          <img 
            src="https://images.unsplash.com/photo-1540333563398-9942f1696084?q=80&w=2000&auto=format&fit=crop" 
            alt="Signature Dish" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Action Badge */}
          <div className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-6 group/badge cursor-pointer hover:bg-[#D4AF37] transition-colors duration-500">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover/badge:text-white transition-colors">Experience Now</p>
              <p className="text-xl font-serif font-bold text-gray-900 group-hover/badge:text-white transition-colors">Our 2024 Collection</p>
            </div>
            <div className="w-12 h-12 bg-[#0D2C22] rounded-full flex items-center justify-center text-white group-hover/badge:bg-white group-hover/badge:text-[#0D2C22] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-16 max-w-lg text-center reveal [animation-delay:600ms]">
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Elevating heritage recipes into multi-sensory hospitality experiences for corporate giants and private celebrations worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-12">
            <div className="text-center">
              <span className="block text-2xl font-serif text-[#0D2C22]">12+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Years of Legacy</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-[#C1272D]">50k+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Monthly Guests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Decorative Bar */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-8">
        <span className="h-32 w-[1px] bg-gray-200"></span>
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 whitespace-nowrap text-gray-300">HOUSE OF CURRY EXPERTISE</span>
        <span className="h-32 w-[1px] bg-gray-200"></span>
      </div>
    </section>
  );
};
