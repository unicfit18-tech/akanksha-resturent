
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-[#003d29]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
             <span className="w-12 h-[2px] bg-[#a3e635]"></span>
             <span className="bg-[#a3e635]/10 px-5 py-1 rounded-full text-[#a3e635] font-bold text-[10px] tracking-widest border border-[#a3e635]/20 uppercase">HOW ITS WORK</span>
             <span className="w-12 h-[2px] bg-[#a3e635]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            We Ensure A Smooth And Stress-Free <br/>
            <span className="italic text-[#a3e635] relative">Catering</span> Experience.
          </h2>
        </div>

        {/* Primary Step Box */}
        <div className="bg-[#f8fcf7] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Text Side */}
          <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-10">
               <span className="text-8xl font-serif font-black text-[#a3e635]/20 leading-none">01.</span>
               <div className="w-20 h-[4px] bg-[#a3e635]"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#003d29] mb-8">
              Consultation & Custom <br/> Menu Planning
            </h3>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              We start by understanding your event goals, preferences, and guest needs—so every detail feels effortless and personal.
            </p>

            <ul className="space-y-6">
              {[
                'One-on-one consultation to discuss theme, size & special requests',
                'Explore our curated menus or create your own',
                'Finalize logistics, styling, and service format with ease'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-[#a3e635] rounded-lg flex items-center justify-center text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <span className="text-[#003d29] font-bold leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-12 px-10 py-4 bg-[#d9f99d] text-[#003d29] rounded-2xl font-bold uppercase tracking-widest text-xs self-start hover:bg-[#a3e635] transition-all">
              Next Step
            </button>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative h-[500px] lg:h-auto overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop" 
               alt="Catering Setup" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-[#003d29]/10"></div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-4 mt-12">
           {[1,2,3,4].map(i => (
             <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 1 ? 'w-16 bg-[#a3e635]' : 'w-4 bg-white/20 hover:bg-white/40 cursor-pointer'}`}></div>
           ))}
        </div>
      </div>
    </section>
  );
};
