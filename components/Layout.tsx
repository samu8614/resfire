
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.abstract, path: '/abstract' },
    { name: t.nav.workPackages, path: '/work-packages' },
    { name: t.nav.team, path: '/team' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-950">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-600/20">
              <i className="fa-solid fa-fire-extinguisher text-white text-xl"></i>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">RESFIRE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-all duration-300 relative group ${
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
                className="flex items-center space-x-2 text-stone-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors bg-stone-800/50 px-4 py-2 rounded-full border border-stone-700/50"
              >
                <span>{languages.find(l => l.code === language)?.flag} {t.nav.language}</span>
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-stone-900/95 backdrop-blur-xl rounded-2xl py-2 shadow-2xl border border-stone-700/50 overflow-hidden animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-sm hover:bg-orange-600 hover:text-white transition-all flex items-center space-x-3 ${
                        language === lang.code ? 'text-orange-500 bg-stone-800/50' : 'text-stone-300'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-semibold">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl transition-all duration-300`}></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-stone-900 border-b border-stone-800 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-xl font-bold uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-stone-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-stone-800">
              <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{t.nav.language}</p>
              <div className="grid grid-cols-1 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-4 p-3 rounded-xl border transition-all ${
                      language === lang.code ? 'border-orange-500 bg-orange-600/10 text-orange-500' : 'border-stone-800 bg-stone-800/50 text-stone-400'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-bold">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-950 py-20 border-t border-stone-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                <i className="fa-solid fa-fire-extinguisher text-white text-sm"></i>
              </div>
              <span className="text-xl font-black text-white tracking-tighter">RESFIRE</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              {t.home.hero_desc}
            </p>
            <div className="flex space-x-4">
              {['linkedin-in', 'x-twitter', 'github', 'instagram'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300">
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t.nav.workPackages}</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-medium">
              <li><Link to="/abstract" className="hover:text-orange-500 transition-colors">{t.nav.abstract}</Link></li>
              <li><Link to="/work-packages" className="hover:text-orange-500 transition-colors">{t.nav.workPackages}</Link></li>
              <li><Link to="/team" className="hover:text-orange-500 transition-colors">{t.nav.team}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-stone-500 text-xs leading-relaxed">Suscríbete para recibir actualizaciones trimestrales sobre nuestra investigación y avances tecnológicos.</p>
            <div className="flex">
              <input type="email" placeholder="email@example.com" className="bg-stone-900 border border-stone-800 rounded-l-xl px-4 py-3 text-sm text-stone-300 w-full focus:outline-none focus:border-orange-600" />
              <button className="bg-orange-600 text-white px-4 rounded-r-xl hover:bg-orange-700 transition-colors">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-stone-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          <span>&copy; {new Date().getFullYear()} Resfire Project. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-400">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
