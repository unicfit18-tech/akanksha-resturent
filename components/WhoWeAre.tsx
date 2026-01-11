
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="about-section" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Storytelling Column */}
          <div className="lg:col-span-6 relative">
            {/* Primary Image: The Craft */}
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,104,55,0.15)] group">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Culinary Craft" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006837]/40 via-transparent to-transparent"></div>
            </div>

            {/* Secondary Image: The Heritage Detail */}
            <div className="absolute -bottom-12 -right-6 md:-right-12 w-1/2 rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop" 
                alt="Spice Detail" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Heritage Seal */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-2 hidden xl:flex">
              <div className="w-full h-full rounded-full border border-dashed border-[#C1272D]/30 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                 <span className="text-[8px] font-bold text-[#006837] uppercase tracking-[0.2em] text-center px-4 leading-tight">
                   Excellence Since 2012 • House of Curry •
                 </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[#C1272D] text-2xl italic font-bold">H</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                The Heritage Narrative
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-[#006837] leading-[1.1] mb-8">
              Preserving <br/>
              <span className="italic text-[#C1272D] relative inline-block">
                Authenticity
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#C1272D" strokeWidth="2" fill="transparent" />
                </svg>
              </span> <br/>
              In Every Pour.
            </h2>

            <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-12 max-w-xl">
              <p>
                House of Curry was founded on a singular belief: that the most profound culinary experiences are born from the intersection of <span className="text-[#006837] font-semibold">ancient spice routes</span> and modern professional hospitality.
              </p>
              <p>
                Our master blenders treat spice like an alchemist treats gold—meticulously sourcing, aging, and tempering every ingredient to create a sensory narrative that reflects the prestige of your event.
              </p>
            </div>

            {/* Performance Matrix */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div className="group cursor-default">
                <p className="text-4xl font-serif text-[#006837] mb-2 group-hover:text-[#C1272D] transition-colors">12+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">Years of Heritage</p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-serif text-[#006837] mb-2 group-hover:text-[#C1272D] transition-colors">500+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">Galas Curated</p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-serif text-[#006837] mb-2 group-hover:text-[#C1272D] transition-colors">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">Organic Sourcing</p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-serif text-[#006837] mb-2 group-hover:text-[#C1272D] transition-colors">45+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">Master Artisans</p>
              </div>
            </div>

            {/* Narrative Action */}
            <div className="mt-12">
              <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#006837] group hover:text-[#C1272D] transition-colors">
                <span className="pb-1 border-b-2 border-[#C1272D]/20 group-hover:border-[#C1272D] transition-all">Explore Our Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
