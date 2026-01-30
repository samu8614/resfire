
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import { Language } from '../types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.abstract, path: '/' },
    { name: t.nav.workPackages, path: '/work-packages' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'pt', label: 'PT', flag: '🇵🇹' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 selection:bg-orange-600">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">RESFIRE</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-orange-500 font-bold">Scientific Prevention</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-orange-500 relative group ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-stone-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-black hover:bg-white/10 transition-colors uppercase tracking-widest"
              >
                <span>{languages.find(l => l.code === language)?.flag} {language}</span>
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-32 bg-stone-900 border border-stone-800 rounded-xl py-2 shadow-2xl animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors ${language === lang.code ? 'text-orange-500' : 'text-stone-400'}`}
                    >
                      {lang.label} {lang.flag}
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
          <div className="flex flex-col p-10 space-y-10 h-full justify-center items-center">
             <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 text-3xl text-stone-500"><i className="fa-solid fa-xmark"></i></button>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-5xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">{link.name}</Link>
            ))}
            <div className="flex space-x-4 pt-10">
               {languages.map(lang => (
                 <button key={lang.code} onClick={() => setLanguage(lang.code)} className={`text-xl ${language === lang.code ? 'opacity-100' : 'opacity-30'}`}>{lang.flag}</button>
               ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-stone-950 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-black text-2xl tracking-tighter">RESFIRE</span>
              </div>
              <p className="text-stone-400 max-w-sm text-sm leading-relaxed">
                Global initiative for forest preservation through advanced data science and ecological engineering.
              </p>
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
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
            <div className="flex flex-col">
              <p className="text-stone-600 text-[10px] uppercase tracking-[0.2em] font-bold">Scientific Prevention &bull; 2024</p>
              <p className="text-orange-500/50 text-[8px] uppercase tracking-[0.4em] font-black mt-1">v1.1.0 - Deployment Active</p>
            </div>
            <div className="flex space-x-6">
              {['linkedin', 'x-twitter', 'github', 'instagram'].map(social => (
                <a key={social} href="#" className="text-stone-600 hover:text-orange-500 transition-all hover:-translate-y-1 text-lg">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
              &copy; {new Date().getFullYear()} Resfire Project.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
