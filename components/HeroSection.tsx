
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* Visual Side */}
      <div className="w-full lg:w-[48%] relative h-[45vh] lg:h-screen overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540333563398-9942f1696084?q=80&w=2000&auto=format&fit=crop" 
          alt="Culinary Art" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
        
        {/* Floating Narrative Badge */}
        <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] max-w-xs hidden xl:block animate-fade-in-up">
          <div className="flex gap-1 text-[#C1272D] mb-4">
            {[1,2,3,4,5].map(i => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
          </div>
          <p className="text-[#006837] font-serif italic text-2xl mb-3 leading-tight">"Where every spice tells a story of heritage."</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">The House of Curry Standard</p>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-[52%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0 bg-white">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-10 animate-fade-in-up">
            <span className="w-16 h-[2px] bg-[#C1272D]"></span>
            <span className="text-[#C1272D] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              EST. 2012 / Elite Hospitality
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#006837] leading-[1.05] mb-12 animate-fade-in-up">
            Curating <br/>
            <span className="italic text-[#C1272D]">Unforgettable</span> <br/>
            Moments.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-14 font-light leading-relaxed max-w-md animate-fade-in-up">
            Blending regional heritage with modern precision to deliver elite catering experiences for the world's most prestigious events.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up">
            <button className="w-full sm:w-auto px-12 py-5 bg-[#006837] text-white rounded-2xl font-bold hover:bg-[#C1272D] transition-all shadow-2xl uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 group">
              Get A Proposal
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border-2 border-[#006837]/10 text-[#006837] rounded-2xl font-bold hover:bg-[#006837]/5 transition-all uppercase tracking-widest text-[11px]">
              Explore Menus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
