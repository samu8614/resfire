
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import { Language } from '../types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isOutputsOpen, setIsOutputsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
    setIsOutputsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIsOutputsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOutputsOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: t.nav.abstract, path: '/' },
    { name: t.nav.workPackages, path: '/work-packages' },
    { 
      name: t.nav.outputs, 
      path: '/outputs',
      subMenu: [
        { name: t.outputs.publications, path: '/outputs/publications', icon: 'fa-file-lines' },
        { name: t.outputs.podcasts, path: '/outputs/podcasts', icon: 'fa-microphone-lines' },
        { name: t.outputs.news, path: '/outputs/news', icon: 'fa-newspaper' },
      ]
    },
    { name: t.nav.team, path: '/team' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'pt', label: 'PT', flag: '🇵🇹' },
    { code: 'gl', label: 'GL', flag: 'GAL' },
    { code: 'ca', label: 'CA', flag: 'CAT' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 selection:bg-orange-600">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">RESFIRE</span>
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-orange-500 font-black mt-1">PID2023-152690OB-C21</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group"
                onMouseEnter={link.subMenu ? handleMouseEnter : undefined} 
                onMouseLeave={link.subMenu ? handleMouseLeave : undefined}
              >
                <Link
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-orange-500 relative flex items-center space-x-2 py-2 ${
                    location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-orange-500' : 
                    location.pathname === '/' && link.path === '/' ? 'text-orange-500' : 'text-stone-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.subMenu && (
                    <i className={`fa-solid fa-chevron-down text-[7px] transition-transform duration-300 ${isOutputsOpen ? 'rotate-180 text-orange-500' : 'opacity-40'}`}></i>
                  )}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname.startsWith(link.path) && (link.path !== '/' || location.pathname === '/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>

                {link.subMenu && isOutputsOpen && (
                  <div className="absolute left-0 top-full w-64 pt-4 z-[100] animate-fade-in">
                    <div className="bg-stone-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                      <div className="flex flex-col">
                        {link.subMenu.map(sub => (
                          <Link 
                            key={sub.path} 
                            to={sub.path}
                            className={`flex items-center space-x-4 px-4 py-3.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${
                              location.pathname === sub.path 
                                ? 'bg-orange-600 text-white shadow-lg' 
                                : 'text-stone-400 hover:text-orange-500 hover:bg-white/5'
                            }`}
                          >
                            <i className={`fa-solid ${sub.icon} text-xs opacity-50`}></i>
                            <span className="flex-grow">{sub.name}</span>
                            <i className="fa-solid fa-arrow-right text-[7px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-black hover:bg-white/10 transition-colors uppercase tracking-widest"
              >
                <span>{languages.find(l => l.code === language)?.label}</span>
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-32 bg-stone-900 border border-stone-800 rounded-xl py-2 shadow-2xl animate-fade-in-up z-[110]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors ${language === lang.code ? 'text-orange-500' : 'text-stone-400'}`}
                    >
                      {lang.label} <span className="text-[8px] opacity-50 ml-1">{lang.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 ease-in-out bg-stone-950 fixed inset-0 z-40 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="flex flex-col p-10 h-full justify-center items-center text-center overflow-y-auto pt-24 space-y-10">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col items-center space-y-4">
                <Link to={link.path} className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">{link.name}</Link>
                {link.subMenu && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {link.subMenu.map(sub => (
                      <Link key={sub.path} to={sub.path} className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 hover:text-orange-500 px-4 py-2 bg-white/5 rounded-full border border-white/5">{sub.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-wrap gap-4 pt-10 border-t border-white/10 w-full justify-center">
               {languages.map(lang => (
                 <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }} className={`px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${language === lang.code ? 'text-orange-500 border-orange-500/50' : 'text-stone-500 border-transparent'}`}>
                   {lang.label}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-stone-950 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-8">
              <div className="flex flex-col">
                <span className="font-black text-4xl tracking-tighter text-white leading-none">RESFIRE</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-black mt-1">PID2023-152690OB-C21</span>
              </div>
              
              {/* Institutional Logos relocated and in original colors */}
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                <img src="AEI-logo.png" alt="AEI Logo" className="h-10 md:h-12 w-auto object-contain" />
                <img src="logo-mbg.jpg" alt="MBG Logo" className="h-10 md:h-12 w-auto object-contain" />
                <img src="CREAF-SO-logo.webp" alt="CREAF Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
              
              <div className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
                &copy; {new Date().getFullYear()} Resfire Project.
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="text-stone-500 hover:text-white transition-colors text-sm font-medium">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6 text-right md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-stone-500 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-500 hover:text-white transition-colors text-sm font-medium">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
