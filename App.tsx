
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeDo } from './components/WhatWeDo';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoiceUs } from './components/WhyChoiceUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BlogPosts } from './components/BlogPosts';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { SignatureGalleryCarousel } from './components/SignatureGalleryCarousel';
import { HeroSection } from './components/HeroSection';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedServiceId]);

  const handleServiceClick = useCallback((serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
  }, []);

  const handleViewChange = useCallback((view: PageView) => {
    setCurrentView(view);
    if (view !== 'service-detail') setSelectedServiceId(null);
  }, []);

  const renderHomeContent = () => (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChoiceUs />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <BlogPosts />
    </>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <AboutUs />;
      case 'services': return <Services onServiceSelect={handleServiceClick} />;
      case 'service-detail': 
        return selectedServiceId ? 
          <ServiceDetail serviceId={selectedServiceId} onBack={() => setCurrentView('services')} /> : 
          renderHomeContent();
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return renderHomeContent();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden flex flex-col">
      <Header 
        onViewChange={handleViewChange} 
        currentView={currentView}
        onServiceSelect={handleServiceClick}
      />
      
      <main className="relative flex-1">
        {renderContent()}
        {currentView === 'home' && <SignatureGalleryCarousel />}
      </main>

      {/* Global Contact Action */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => handleViewChange('contact')}
          className="bg-[#006837] hover:bg-[#C1272D] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group border-2 border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest">Enquire Now</span>
        </button>
      </div>

      <footer className="py-16 bg-gray-50 border-t border-gray-100 text-center">
        <div className="mb-10 flex flex-wrap justify-center gap-8 px-6">
           <button onClick={() => handleViewChange('home')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Home</button>
           <button onClick={() => handleViewChange('about')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">About</button>
           <button onClick={() => handleViewChange('services')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Services</button>
           <button onClick={() => handleViewChange('blog')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Blog</button>
           <button onClick={() => handleViewChange('contact')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Contact</button>
        </div>
        <div className="flex justify-center items-center gap-3 mb-6">
           <div className="w-10 h-10 bg-[#C1272D] rounded-xl flex items-center justify-center text-white font-bold shadow-lg">H</div>
           <div className="text-left">
             <span className="block text-sm font-bold uppercase tracking-tighter text-[#006837] leading-none">House of Curry</span>
             <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C1272D]">Excellence in Hospitality</span>
           </div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 px-6 leading-loose">House of Curry &copy; 2024 — Master Spice Blenders & Event Specialists</p>
      </footer>
    </div>
  );
};

export default App;
