
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop" 
                alt="Heritage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006837]/30 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 bg-[#C1272D] p-10 rounded-[2.5rem] shadow-2xl text-white hidden md:block">
              <p className="text-5xl font-serif mb-2">12+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Heritage</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-5 py-2 bg-emerald-50 text-[#006837] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-emerald-100">
              Our Legacy
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#006837] leading-[1.1] mb-10">
              Preserving <br/>
              <span className="italic text-[#C1272D]">Authenticity</span> <br/>
              In Every Detail.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-xl">
              House of Curry bridges the gap between ancient spice routes and modern professional hospitality. We believe that true catering is an art form—one that requires precision, passion, and a deep respect for regional flavors.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-2xl font-serif text-[#006837] mb-2">500+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Events Yearly</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif text-[#C1272D]">100%</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Organic Sourcing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
