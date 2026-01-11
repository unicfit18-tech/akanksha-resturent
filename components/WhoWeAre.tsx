
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#f8fcf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Large Portrait Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl border-white border-[12px]">
              <img 
                src="https://images.unsplash.com/photo-1577214286171-eaf19967bf5e?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Professional Chefs" 
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12 pt-8">
            <div className="inline-block px-4 py-1.5 bg-[#d9f99d] text-[#003d29] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#a3e635]/30">
              WHO WE ARE
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#003d29] leading-tight mb-8">
              Crafting Culinary Experiences With <br/>
              <span className="italic text-[#a3e635] relative">
                Passion
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#a3e635" strokeWidth="4" fill="transparent" />
                </svg>
              </span> And Precision.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl">
              House of Curry is a leading Corporate & Industrial catering service provider. Promoted by seasoned hospitality experts, we serve healthy and nutritious meals to over 12,000 employees daily across major corporate hubs.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-stretch mb-12">
              {/* Stat Box */}
              <div className="bg-[#003d29] p-10 rounded-[2rem] text-white flex-1 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-4 border-b border-white/10 pb-4">
                    <span className="text-5xl font-bold">25,000</span>
                    <span className="text-2xl text-[#a3e635]">+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">Employees</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Providing premium catering services to more than 12,000 employees on a daily basis.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Points Box */}
              <div className="flex-1 py-4">
                <p className="italic text-gray-400 mb-8 border-l-4 border-[#a3e635] pl-6 text-sm leading-relaxed">
                  "We serve in all major corporate hubs across the region, including Fortune 500 companies and tech giants like Microsoft, Amazon, and Google."
                </p>
                <ul className="space-y-4">
                  {['Fresh, Locally Sourced Ingredients', 'Customized Menus for Every Occasion', 'Rigorous Hygiene & Quality Control'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-[#a3e635] rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <span className="font-bold text-[#003d29] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Gallery Peek */}
            <div className="flex gap-4 overflow-hidden">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg border-4 border-white">
                    <img src={`https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=300&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover" alt="Service" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
