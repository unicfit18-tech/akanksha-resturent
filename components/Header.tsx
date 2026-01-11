
import React, { useState, useEffect } from 'react';
import { PageView } from '../types';

interface HeaderProps {
  onViewChange?: (view: PageView) => void;
  currentView?: PageView;
  onServiceSelect?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onViewChange, currentView = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAltPage = currentView !== 'home';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 ${scrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl px-8 py-3 rounded-full shadow-2xl border border-gray-100' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onViewChange?.('home')}
        >
          <div className="w-10 h-10 bg-[#C1272D] rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
            H
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-serif font-black tracking-tight leading-none ${scrolled || isAltPage ? 'text-[#006837]' : 'text-[#006837]'}`}>
              House of Curry
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#C1272D]">Excellence in Hospitality</span>
          </div>
        </div>

        {/* Links */}
        <div className={`hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest ${scrolled || isAltPage ? 'text-gray-600' : 'text-gray-800'}`}>
          {['home', 'about', 'services', 'blog'].map((view) => (
            <button 
              key={view}
              onClick={() => onViewChange?.(view as PageView)}
              className={`hover:text-[#006837] transition-colors relative group ${currentView === view ? 'text-[#006837]' : ''}`}
            >
              {view}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-[#006837] transform transition-transform duration-300 ${currentView === view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => onViewChange?.('contact')}
          className="px-8 py-3 bg-[#006837] text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#C1272D] shadow-lg"
        >
          Enquire Now
        </button>
      </nav>
    </header>
  );
};
