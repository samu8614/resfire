
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Assistant from './components/Assistant';
import { WORK_PACKAGES } from './constants';
import { LanguageProvider, useTranslation } from './context/LanguageContext';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section - Updated with Green Forest and Project Text */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2560" 
            className="w-full h-full object-cover animate-slow-zoom opacity-70"
            alt="Healthy Resilient Mediterranean Forest"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto space-y-12">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 bg-emerald-600/10 border border-emerald-500/20 rounded-full backdrop-blur-xl animate-fade-in shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-400">{t.home.hero_sub}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter animate-fade-in-up">
            {t.home.hero_title}
          </h1>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-4xl mx-auto">
              {t.home.hero_desc_p1}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-10 mt-10">
              <p className="text-stone-300 text-sm md:text-base leading-relaxed opacity-80">
                {t.home.hero_desc_p2}
              </p>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed opacity-80">
                {t.home.hero_desc_p3}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a href="#/abstract" className="group relative px-12 py-5 bg-orange-600 text-white font-black rounded-full transition-all shadow-2xl shadow-orange-600/30 uppercase tracking-[0.2em] text-xs overflow-hidden">
              <span className="relative z-10">{t.home.cta_primary}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#/work-packages" className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-full transition-all backdrop-blur-md uppercase tracking-[0.2em] text-xs">
              {t.home.cta_secondary}
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-600 opacity-50">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* Monitoring Dashboard Section */}
      <section className="py-24 bg-stone-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="space-y-2">
                <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px]">Project Metrics</span>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase">Real-Time Resilience</h3>
             </div>
             <div className="px-6 py-3 bg-stone-900 border border-white/5 rounded-2xl flex items-center space-x-4">
                <div className="flex space-x-1">
                   <div className="w-1 h-4 bg-emerald-500/40 rounded-full animate-[pulse_1s_infinite]"></div>
                   <div className="w-1 h-6 bg-emerald-500 rounded-full animate-[pulse_1.2s_infinite]"></div>
                   <div className="w-1 h-3 bg-emerald-500/60 rounded-full animate-[pulse_0.8s_infinite]"></div>
                </div>
                <span className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">Sensors Synchronized</span>
             </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { label: 'Global Risk Index', val: 'Low', color: 'text-emerald-500', icon: 'fa-earth-americas' },
              { label: 'Active Sensors', val: '14,209', color: 'text-orange-500', icon: 'fa-tower-broadcast' },
              { label: 'Detection Rate', val: '98.4%', color: 'text-blue-500', icon: 'fa-satellite-dish' },
              { label: 'Resilience Score', val: 'Optimal', color: 'text-purple-500', icon: 'fa-shield-heart' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-stone-800 hover:border-l-orange-500 transition-all group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-5 text-6xl group-hover:scale-110 transition-transform">
                   <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 group-hover:text-stone-300 block">{stat.label}</span>
                <div className={`text-4xl font-black ${stat.color} tracking-tight`}>{stat.val}</div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className={`h-full bg-current ${stat.color} opacity-30 animate-[loading_2s_ease-in-out_infinite]`} style={{ width: '60%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grid Section */}
      <section className="py-32 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5">
              <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-12 h-1 bg-orange-500 mb-6"></div>
                <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">Innovation</h4>
                <p className="text-stone-400 text-xs uppercase tracking-[0.2em] font-bold">Predictive satellite algorithms</p>
              </div>
            </div>
            <div className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5 lg:translate-y-16">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-12 h-1 bg-emerald-500 mb-6"></div>
                <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">Ecology</h4>
                <p className="text-stone-400 text-xs uppercase tracking-[0.2em] font-bold">Climate-adaptive planting</p>
              </div>
            </div>
            <div className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5">
              <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-12 h-1 bg-blue-500 mb-6"></div>
                <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">Impact</h4>
                <p className="text-stone-400 text-xs uppercase tracking-[0.2em] font-bold">Resilient local communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Abstract = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-48 pb-32 bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Scientific Vision</span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">{t.abstract.title}</h2>
              <div className="w-20 h-2 bg-orange-600 rounded-full"></div>
              <p className="text-xl text-stone-300 leading-relaxed font-medium opacity-90">{t.abstract.p1}</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-orange-600/10 blur-[100px] rounded-full group-hover:bg-orange-600/20 transition-all duration-1000"></div>
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl z-10">
                 <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Satellite Earth" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 shadow-[0_0_15px_rgba(234,88,12,0.8)] animate-[scan_4s_linear_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 bg-stone-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] space-y-8 hover:bg-stone-900/80 transition-all group">
              <div className="w-14 h-14 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
              </div>
              <h4 className="text-3xl font-black text-white tracking-tighter uppercase">{t.abstract.challenge_title}</h4>
              <p className="text-stone-400 text-lg leading-relaxed">{t.abstract.challenge_desc}</p>
            </div>
            <div className="p-12 bg-stone-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] space-y-8 hover:bg-stone-900/80 transition-all group">
              <div className="w-14 h-14 bg-emerald-600/20 text-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-microchip text-2xl"></i>
              </div>
              <h4 className="text-3xl font-black text-white tracking-tighter uppercase">{t.abstract.solution_title}</h4>
              <p className="text-stone-400 text-lg leading-relaxed">{t.abstract.solution_desc}</p>
            </div>
          </div>
          
          <div className="bg-stone-900/30 p-16 rounded-[4rem] text-center border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
               <i className="fa-solid fa-quote-right text-9xl"></i>
             </div>
            <p className="text-2xl md:text-3xl text-stone-300 leading-relaxed font-serif italic max-w-4xl mx-auto relative z-10">
              "{t.abstract.p2}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorksPackages = () => {
  const { t, language } = useTranslation();
  return (
    <div className="pt-48 pb-32 bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">The Roadmap</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">{t.work_packages.title}</h2>
          <p className="text-xl text-stone-400 font-medium max-w-2xl">{t.work_packages.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {WORK_PACKAGES.map((wp) => {
            const content = wp.content[language];
            return (
              <div key={wp.id} className="group relative overflow-hidden bg-stone-900/40 border border-white/5 rounded-[3rem] p-12 transition-all hover:bg-stone-900/60">
                <div className="absolute top-0 right-0 p-8">
                   <span className="text-8xl font-black text-white/5 select-none">{wp.id}</span>
                </div>
                <div className="relative z-10 flex flex-col h-full space-y-10">
                  <div className={`w-20 h-20 ${wp.color} rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl transform group-hover:rotate-12 transition-transform`}>
                    <i className={`fa-solid ${wp.icon}`}></i>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-white leading-tight tracking-tighter uppercase">{content.title}</h3>
                    <p className="text-stone-400 text-lg leading-relaxed">{content.description}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">{t.work_packages.milestones}</h4>
                    <div className="flex flex-wrap gap-2">
                      {content.tasks.map((task, idx) => (
                        <div key={idx} className="px-4 py-2 bg-stone-950/50 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-stone-300">
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-48 pb-32 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Collaborate With Us</span>
              <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">{t.contact.title}</h2>
              <p className="text-xl text-stone-400 font-medium leading-relaxed">{t.contact.subtitle}</p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-stone-900 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-1">General Inquiries</h4>
                  <p className="text-stone-400 font-bold tracking-widest uppercase">RESEARCH@RESFIRE.ORG</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-stone-900 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-1">{t.contact.hub}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed max-w-[200px]">{t.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-orange-600/5 border-l-2 border-orange-600 rounded-r-3xl">
              <p className="italic text-stone-300 text-lg leading-relaxed">"{t.contact.quote}"</p>
              <p className="mt-6 font-black text-orange-500 text-[10px] uppercase tracking-[0.4em]">{t.contact.director}</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-stone-900 border border-white/5 p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <i className="fa-solid fa-paper-plane text-8xl text-stone-500"></i>
             </div>
            <form className="grid gap-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{t.contact.form_first}</label>
                  <input type="text" className="w-full bg-stone-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-600 transition-colors" placeholder="First Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{t.contact.form_last}</label>
                  <input type="text" className="w-full bg-stone-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-600 transition-colors" placeholder="Last Name" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{t.contact.form_email}</label>
                <input type="email" className="w-full bg-stone-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-600 transition-colors" placeholder="email@organization.org" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{t.contact.form_msg}</label>
                <textarea rows={5} className="w-full bg-stone-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-600 transition-colors resize-none" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-orange-600/20 uppercase tracking-[0.4em] text-xs">
                {t.contact.form_btn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/work-packages" element={<WorksPackages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Assistant />
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;
