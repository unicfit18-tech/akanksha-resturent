
import React from 'react';

export const WhyChoiceUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fcf7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#a3e635]"></span>
              <span className="bg-white px-5 py-1.5 rounded-full text-[#003d29] font-bold uppercase tracking-[0.2em] text-[10px] border border-[#a3e635]/20">
                WHY CHOICE US
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#003d29] leading-tight mb-12">
              Exceptional Catering Service <br/>
              <span className="italic text-[#a3e635] relative">
                Unforgettable
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#a3e635" strokeWidth="4" fill="transparent" />
                </svg>
              </span> Flavors For Your Guests.
            </h2>

            <div className="space-y-4">
              {[
                'Experienced Chefs',
                'Customizable Menus',
                'Premium Ingredients',
                'Professional Staff'
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-6 border-b border-gray-100 hover:bg-white rounded-2xl transition-all cursor-pointer">
                  <span className={`text-lg font-bold transition-colors ${i === 0 ? 'text-[#003d29]' : 'text-gray-400 group-hover:text-[#003d29]'}`}>
                    {item}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i === 0 ? 'bg-[#a3e635] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#a3e635] group-hover:text-white'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-45deg]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 px-10 py-4 bg-[#d9f99d] text-[#003d29] rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-[#a3e635] transition-all shadow-xl">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-white border-[12px]">
              <img 
                src="https://images.unsplash.com/photo-1547573854-74d2a71d0827?q=80&w=1200&auto=format&fit=crop" 
                alt="Chef at Work" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d29]/60 via-transparent to-transparent"></div>
              
              {/* Floating Action Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform group">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003d29" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-45deg] group-hover:rotate-0 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
