
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Assistant from './components/Assistant';
import { WORK_PACKAGES, PUBLICATIONS, CONFERENCES, PODCASTS, NEWS, PARTNERS } from './constants';
import { LanguageProvider, useTranslation } from './context/LanguageContext';

const Abstract = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
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
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 bg-emerald-600/10 border border-emerald-500/20 rounded-full backdrop-blur-xl animate-fade-in shadow-[0_0_20px_rgba(16,185,129,0.15)]">
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

          <div className="max-w-4xl mx-auto w-full pt-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] group">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/6yTn5olrZ5o?autoplay=0&controls=1&rel=0&modestbranding=1" 
                title="Resfire Project Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a href="#/work-packages" className="group relative px-12 py-5 bg-orange-600 text-white font-black rounded-full transition-all shadow-2xl shadow-orange-600/30 uppercase tracking-[0.2em] text-xs overflow-hidden">
              <span className="relative z-10">{t.home.cta_secondary}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
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

      {/* Scientific Vision Section */}
      <section className="pt-32 pb-32 bg-stone-950">
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
          </div>
        </div>
      </section>
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

        <div className="grid gap-12">
          {WORK_PACKAGES.map((wp) => {
            const content = wp.content[language];
            return (
              <div key={wp.id} className="group relative min-h-[400px] md:min-h-[500px] rounded-[3.5rem] overflow-hidden border border-white/5 flex flex-col justify-end p-10 md:p-16 transition-all">
                <div className="absolute inset-0">
                  <img src={wp.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={content.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in-up">
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl md:text-6xl font-black text-orange-600/40">{wp.id}</span>
                    <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase">
                      {content.title}
                    </h3>
                    <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-3xl opacity-80 font-medium">
                      {content.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {content.tasks.map((task, i) => (
                      <span key={i} className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-stone-200">
                        {task}
                      </span>
                    ))}
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

const Outputs = () => {
  const { t } = useTranslation();
  const { category } = useParams();

  const categories = [
    { 
      id: 'publications', 
      title: t.outputs.publications, 
      icon: 'fa-file-lines', 
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'podcasts', 
      title: t.outputs.podcasts, 
      icon: 'fa-microphone-lines', 
      img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'news', 
      title: t.outputs.news, 
      icon: 'fa-newspaper', 
      img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  return (
    <div className="pt-48 pb-32 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Knowledge Hub</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">{t.outputs.title}</h2>
          <p className="text-xl text-stone-400 font-medium max-w-2xl">{t.outputs.subtitle}</p>
        </div>

        {!category ? (
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/outputs/${cat.id}`}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all shadow-2xl"
              >
                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                <div className="absolute bottom-12 left-10 right-10 space-y-6">
                  <div className="w-14 h-14 bg-stone-900 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <i className={`fa-solid ${cat.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{cat.title}</h3>
                  <div className="text-[10px] font-black uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    {t.outputs.view_all} <i className="fa-solid fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in space-y-12">
            <Link to="/outputs" className="inline-flex items-center space-x-2 text-stone-500 hover:text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px] transition-colors">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back to Hub</span>
            </Link>

            {category === 'publications' && (
              <div className="space-y-20">
                {/* Articles Section */}
                <div className="grid gap-8">
                  {PUBLICATIONS.map(pub => (
                    <div key={pub.id} className="bg-stone-900/30 p-10 rounded-[3rem] border border-white/10 transition-all group">
                      <div className="flex items-start space-x-6">
                         <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 flex-shrink-0">
                            <i className="fa-solid fa-book-open"></i>
                         </div>
                         <div className="space-y-4">
                            <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-medium">
                              {pub.authors} ({pub.year}).{' '}
                              <a 
                                href={pub.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 underline hover:text-blue-400 transition-colors"
                              >
                                {pub.title}
                              </a>. {pub.journal}; DOI:{pub.doi}.
                            </p>
                            <div className="flex space-x-4">
                               <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">Active DOI</span>
                               <span className="px-3 py-1 bg-white/5 text-stone-400 text-[8px] font-black uppercase tracking-widest rounded-full border border-white/10">Full Text Available</span>
                            </div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conferences Section */}
                <div className="space-y-12">
                  <div className="flex items-center space-x-6">
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Conferences</h3>
                    <div className="flex-grow h-px bg-white/5"></div>
                    <i className="fa-solid fa-microphone-lines text-stone-700 text-2xl"></i>
                  </div>
                  
                  <div className="grid gap-8">
                    {CONFERENCES.map(conf => (
                      <div key={conf.id} className="bg-stone-900/20 p-8 rounded-[2.5rem] border border-white/5 hover:border-orange-500/20 transition-all flex items-start space-x-6">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-stone-500 mt-1">
                          <i className="fa-solid fa-users-rectangle text-sm"></i>
                        </div>
                        <div className="space-y-3">
                          <p className="text-lg text-stone-300 leading-relaxed">
                            <span className="font-black text-white">{conf.authors}</span> ({conf.year}). {conf.title}. {conf.event}. <span className="text-orange-500 font-bold">{conf.date}</span>, {conf.location}.
                          </p>
                          <div className="inline-flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-stone-500">
                             <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                             <span>Invited Speaker</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {category === 'podcasts' && (
              <div className="grid gap-12">
                {PODCASTS.map(podcast => (
                  <div key={podcast.id} className="space-y-8 bg-stone-900/40 p-10 rounded-[4rem] border border-white/5">
                    <div className="flex items-center justify-between">
                       <div className="space-y-1">
                          <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">{podcast.platform} Feature</span>
                          <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{podcast.title}</h3>
                       </div>
                       <div className="hidden md:block text-stone-600 font-black text-4xl opacity-20 italic">#{podcast.date}</div>
                    </div>
                    
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${podcast.videoId}?autoplay=0&controls=1&rel=0`}
                        title={podcast.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="flex flex-wrap gap-4">
                       <span className="px-4 py-2 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-stone-400 border border-white/10">Full Discussion</span>
                       <span className="px-4 py-2 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-stone-400 border border-white/10">Expert Commentary</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category === 'news' && (
              <div className="grid md:grid-cols-2 gap-10">
                {NEWS.map(item => (
                  <a 
                    key={item.id} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col space-y-6"
                  >
                    <div className="aspect-video bg-stone-950 rounded-[2.5rem] overflow-hidden border border-white/5 relative shadow-xl">
                       <img 
                        src={item.image} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" 
                        alt={item.title}
                       />
                       <div className="absolute top-6 left-6 px-4 py-1.5 bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">Press Appearance</div>
                       <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">Read Article</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-white text-sm"></i>
                       </div>
                    </div>
                    <div className="space-y-3 px-2">
                      <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                        <span>{item.source}</span>
                        <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-48 pb-32 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Collaboration</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">{t.team.title}</h2>
          <p className="text-xl text-stone-400 font-medium max-w-2xl">{t.team.subtitle}</p>
        </div>

        <div className="grid gap-10">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="group glass-card p-10 md:p-16 rounded-[4rem] border border-white/5 hover:border-orange-500/20 transition-all">
               <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-orange-600/10 border border-orange-500/20 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">Institutional Partner</div>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase group-hover:text-orange-500 transition-colors">
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline decoration-orange-600 underline-offset-8"
                      >
                        {partner.name}
                      </a>
                    </h3>
                    <div className="w-24 h-1 bg-orange-600 rounded-full"></div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-grow max-w-5xl">
                      <p className="text-xl md:text-2xl text-stone-300 font-medium leading-relaxed opacity-90">
                        {partner.description}
                      </p>
                    </div>
                    {partner.logo && (
                      <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[3rem] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-all overflow-hidden group/logo">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="w-full h-auto object-contain max-h-24 grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 transform group-hover/logo:scale-105" 
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex items-center space-x-4">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-500">
                        <i className="fa-solid fa-microscope text-xl"></i>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500">Academic & Research Leadership</span>
                  </div>
               </div>
            </div>
          ))}
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
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 text-center md:text-left">
            <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Collaborate With Us</span>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">{t.contact.title}</h2>
            <p className="text-xl text-stone-400 font-medium leading-relaxed max-w-3xl">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Principal Researchers Column (Left) */}
            <div className="space-y-10 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 whitespace-nowrap">Principal Researchers</span>
                <div className="h-px flex-grow bg-white/10"></div>
              </div>

              <div className="grid gap-6">
                {/* Research Contact 1 */}
                <div className="bg-stone-900/40 p-8 rounded-[3rem] border border-white/5 flex items-center space-x-8 group animate-fade-in-up hover:border-orange-500/30 transition-all">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-500/50 transition-all flex-shrink-0 shadow-2xl">
                    <img src="regos2.jpg" alt="Adrián Regos Sanz" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-white text-2xl tracking-tight uppercase group-hover:text-orange-500 transition-colors">Adrián Regos Sanz</h4>
                    <p className="text-stone-500 text-[9px] font-bold uppercase tracking-[0.3em]">Researcher & Project Coordinator</p>
                    <a href="mailto:aregos@mbg.csic.es" className="text-stone-400 font-bold tracking-widest uppercase text-[11px] hover:text-white transition-colors flex items-center space-x-2 pt-1">
                      <i className="fa-solid fa-envelope text-[10px] text-orange-500"></i>
                      <span>aregos@mbg.csic.es</span>
                    </a>
                  </div>
                </div>

                {/* Research Contact 2 */}
                <div className="bg-stone-900/40 p-8 rounded-[3rem] border border-white/5 flex items-center space-x-8 group animate-fade-in-up hover:border-orange-500/30 transition-all" style={{ animationDelay: '100ms' }}>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-500/50 transition-all flex-shrink-0 shadow-2xl">
                    <img src="Brotons.jpg" alt="Lluís Brotons Alabau" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-white text-2xl tracking-tight uppercase group-hover:text-orange-500 transition-colors">Lluís Brotons Alabau</h4>
                    <p className="text-stone-500 text-[9px] font-bold uppercase tracking-[0.3em]">Scientific Advisor & Partner Lead</p>
                    <a href="mailto:l.brotons@creaf.uab.cat" className="text-stone-400 font-bold tracking-widest uppercase text-[11px] hover:text-white transition-colors flex items-center space-x-2 pt-1">
                      <i className="fa-solid fa-envelope text-[10px] text-orange-500"></i>
                      <span>l.brotons@creaf.uab.cat</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-stone-900 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-1">{t.contact.hub}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed max-w-[200px]">{t.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column (Right) */}
            <div className="relative group min-h-[500px] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" 
                alt="Scientific Resilience Forest" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[4s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
            </div>
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
            <Route path="/" element={<Abstract />} />
            <Route path="/work-packages" element={<WorksPackages />} />
            <Route path="/outputs" element={<Outputs />} />
            <Route path="/outputs/:category" element={<Outputs />} />
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
