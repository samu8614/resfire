
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Assistant from './components/Assistant';
import { WORK_PACKAGES, TEAM_MEMBERS, NEWS_ARTICLES } from './constants';
import { LanguageProvider, useTranslation } from './context/LanguageContext';

const Home = () => {
  const { t, language } = useTranslation();
  return (
    <div className="relative">
      <div className="h-screen bg-forest-overlay flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">{t.home.hero_sub}</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
            {t.home.hero_title.split(' ').slice(0, 2).join(' ')} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t.home.hero_title.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {t.home.hero_desc}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <a href="#/abstract" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all shadow-lg shadow-orange-600/20 w-full md:w-auto">
              {t.home.cta_primary}
            </a>
            <a href="#/work-packages" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all w-full md:w-auto">
              {t.home.cta_secondary}
            </a>
          </div>
        </div>
      </div>
      
      <div className="py-24 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-emerald-600/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold">{t.home.feat1_title}</h3>
              <p className="text-stone-400 leading-relaxed">{t.home.feat1_desc}</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-orange-600/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-leaf text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold">{t.home.feat2_title}</h3>
              <p className="text-stone-400 leading-relaxed">{t.home.feat2_desc}</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-satellite-dish text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold">{t.home.feat3_title}</h3>
              <p className="text-stone-400 leading-relaxed">{t.home.feat3_desc}</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="space-y-2">
                <h2 className="text-4xl font-black text-white">{t.home.news_title}</h2>
                <div className="w-20 h-1 bg-orange-600"></div>
              </div>
              <button className="text-orange-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center space-x-2 group">
                <span>{t.home.news_btn}</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {NEWS_ARTICLES.map((article, i) => {
                const content = article.content[language];
                return (
                  <div key={i} className="glass-card p-6 rounded-3xl hover:bg-stone-900 transition-all group">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">{article.date}</span>
                      <span className="px-3 py-1 bg-orange-600/10 text-orange-500 text-[10px] font-bold rounded-full border border-orange-600/20">{article.tag}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors leading-tight">{content.title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6">{content.desc}</p>
                    <a href="#" className="text-xs font-bold text-white uppercase tracking-widest border-b-2 border-orange-600 pb-1">Read More</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Abstract = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white">{t.abstract.title}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Forest recovery" 
            className="w-full h-[400px] object-cover rounded-3xl shadow-2xl border border-stone-800"
          />

          <div className="space-y-8 text-lg text-stone-300 leading-relaxed">
            <p>{t.abstract.p1}</p>
            <div className="grid md:grid-cols-2 gap-8 py-8">
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="text-orange-500 font-bold mb-4 uppercase tracking-tighter">{t.abstract.challenge_title}</h4>
                <p className="text-sm">{t.abstract.challenge_desc}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="text-emerald-500 font-bold mb-4 uppercase tracking-tighter">{t.abstract.solution_title}</h4>
                <p className="text-sm">{t.abstract.solution_desc}</p>
              </div>
            </div>
            <p>{t.abstract.p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorksPackages = () => {
  const { t, language } = useTranslation();
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">{t.work_packages.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">{t.work_packages.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {WORK_PACKAGES.map((wp) => {
            const content = wp.content[language];
            return (
              <div key={wp.id} className="group relative overflow-hidden glass-card rounded-3xl p-8 hover:bg-white/5 transition-all border-l-4" style={{ borderColor: wp.color.replace('bg-', '') }}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 ${wp.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    <i className={`fa-solid ${wp.icon}`}></i>
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase">{wp.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{content.title}</h3>
                <p className="text-stone-400 mb-8 leading-relaxed">{content.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">{t.work_packages.milestones}</h4>
                  {content.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-sm text-stone-300">
                      <i className="fa-solid fa-check text-emerald-500"></i>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const { t, language } = useTranslation();
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">{t.team.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">{t.team.subtitle}</p>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => {
            const content = member.content[language];
            return (
              <div key={member.id} className="glass-card rounded-3xl overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">{content.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-400 text-sm leading-relaxed">{content.description}</p>
                  <div className="flex space-x-4 mt-6">
                    <a href="#" className="text-stone-500 hover:text-white transition-colors text-sm"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="text-stone-500 hover:text-white transition-colors text-sm"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="text-stone-500 hover:text-white transition-colors text-sm"><i className="fa-solid fa-envelope"></i></a>
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
    <div className="pt-32 pb-24 min-h-screen bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white">{t.contact.title}</h2>
              <p className="text-stone-400">{t.contact.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.contact.hub}</h4>
                  <p className="text-stone-400 text-sm">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.contact.email}</h4>
                  <p className="text-stone-400 text-sm">research@resfire-project.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.contact.press}</h4>
                  <p className="text-stone-400 text-sm">+34 91 123 4567</p>
                </div>
              </div>
            </div>

            <div className="p-8 glass-card rounded-2xl border-orange-500/20 border-l-4">
              <p className="italic text-stone-300 text-sm">{t.contact.quote}</p>
              <p className="mt-4 font-bold text-orange-500 text-xs uppercase tracking-widest">{t.contact.director}</p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
               <i className="fa-solid fa-paper-plane text-orange-500/20 text-6xl -rotate-12"></i>
            </div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.contact.form_first}</label>
                  <input type="text" className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.contact.form_last}</label>
                  <input type="text" className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.contact.form_email}</label>
                <input type="email" className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.contact.form_org}</label>
                <input type="text" className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Research Lab / NGO" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.contact.form_msg}</label>
                <textarea rows={4} className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-orange-500 transition-colors" placeholder="..."></textarea>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20 uppercase tracking-[0.2em]">
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
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Assistant />
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;
