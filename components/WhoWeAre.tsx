
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-32 bg-[#F9F7F2] overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-block px-5 py-2 bg-[#0D2C22] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              Heritage & Vision
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#0D2C22] leading-[1.1] mb-10">
              Preserving <br/>
              <span className="italic text-[#C1272D]">Authenticity</span> <br/>
              In Every Pour.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              House of Curry isn't just about food; it's a commitment to the meticulous craft of flavor. We bridge the gap between ancient spice routes and modern corporate professionalism.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#C1272D] shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0D2C22]">Uncompromising Sourcing</h4>
                  <p className="text-xs text-gray-400">Hand-picked spices from original heritage farms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#0D2C22] shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0D2C22]">Innovation Lab</h4>
                  <p className="text-xs text-gray-400">Fusing tradition with modern presentation artistry.</p>
                </div>
              </div>
            </div>
            <button className="text-[#0D2C22] font-bold uppercase tracking-widest text-xs border-b-2 border-[#D4AF37] pb-2 hover:text-[#C1272D] transition-colors">
              Discover Our Full Story
            </button>
          </div>

          {/* Asymmetrical Image Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-7 space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl transform hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Heritage" />
              </div>
            </div>
            <div className="col-span-5 pt-20">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail" />
              </div>
              <div className="p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100">
                <p className="text-4xl font-serif text-[#C1272D] mb-2">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Authenticity Guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
