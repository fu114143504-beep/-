
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, FamilyMember } from './types';
import { FAMILY_MEMBERS, STORIES, CRISES, DAILY_PHRASES, PROVERBS, HOME_CONTENT } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  // 確保切換頁面時會捲動到頂部
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [view]);

  const renderLanguageSwitcher = () => (
    <div className="fixed top-4 right-4 z-[100] flex flex-wrap gap-1 bg-white/95 backdrop-blur p-2 rounded-2xl shadow-2xl border border-[#d4af37]">
      {[
        { id: 'en', label: 'EN' },
        { id: 'vn', label: 'VN' },
        { id: 'jp', label: 'JP' },
        { id: 'kr', label: 'KR' },
        { id: 'zh-tw', label: '繁' },
        { id: 'zh-cn', label: '簡' }
      ].map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id as Language)}
          className={`px-3 py-2 rounded-xl text-xs font-black transition-all ${
            lang === l.id 
              ? 'bg-[#8b0000] text-white shadow-lg' 
              : 'text-slate-400 hover:text-[#8b0000]'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="space-y-12 py-10 animate-in fade-in zoom-in duration-500">
      <div className="bg-[#8b0000] rounded-[3rem] p-12 md:p-24 text-[#f5e6d3] shadow-2xl border-4 border-[#d4af37] relative overflow-hidden flex flex-col items-center text-center">
         <div className="mb-8 bg-white/20 px-8 py-2 rounded-full text-sm font-black tracking-widest uppercase">
            LEARNING HUB
         </div>
         <h1 className="text-6xl md:text-8xl font-[900] mb-8 leading-tight drop-shadow-2xl">
            {HOME_CONTENT.title[lang]}
         </h1>
         <p className="text-2xl md:text-3xl font-bold opacity-90 max-w-3xl border-t border-white/30 pt-8">
           {HOME_CONTENT.subtitle[lang]}
         </p>
         <div className="absolute top-10 right-10 text-[250px] opacity-5 font-black pointer-events-none select-none">學</div>
         <div className="absolute bottom-10 left-10 text-[250px] opacity-5 font-black pointer-events-none select-none">習</div>
      </div>

      <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border-t-[12px] border-[#8b0000] space-y-10">
         <h2 className="text-4xl md:text-5xl font-black text-[#8b0000] flex items-center gap-6">
           <span className="text-6xl">📖</span> {HOME_CONTENT.significanceTitle[lang]}
         </h2>
         <div className="bg-[#fdfbf7] p-10 md:p-14 rounded-[3rem] border-l-[10px] border-[#d4af37]">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-semibold">
              {HOME_CONTENT.significanceDesc[lang]}
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="p-8 bg-[#fff5f5] rounded-[2rem] text-center border-2 border-[#ffeded] shadow-inner">
               <div className="text-6xl mb-4">🧠</div>
               <div className="text-xl font-black text-[#8b0000]">聽懂內心</div>
            </div>
            <div className="p-8 bg-[#fff5f5] rounded-[2rem] text-center border-2 border-[#ffeded] shadow-inner">
               <div className="text-6xl mb-4">🌏</div>
               <div className="text-xl font-black text-[#8b0000]">尊重文化</div>
            </div>
            <div className="p-8 bg-[#fff5f5] rounded-[2rem] text-center border-2 border-[#ffeded] shadow-inner">
               <div className="text-6xl mb-4">💬</div>
               <div className="text-xl font-black text-[#8b0000]">做好朋友</div>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fcf9f2] text-slate-900 pb-20 md:pb-0 font-serif">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 w-full p-4 md:p-12 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-5xl mx-auto">
          {view === 'home' && renderHome()}

          {view === 'family-tree' && (
            <div className="space-y-12 py-10 animate-in slide-in-from-bottom-5 duration-700">
              <div className="text-center">
                <h2 className="text-5xl font-black text-[#8b0000] border-b-8 border-[#8b0000] inline-block pb-4">
                  {lang === 'vn' ? 'Nhân vật tiêu biểu' : '紅樓人物卡'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {FAMILY_MEMBERS.map(m => (
                  <div key={m.id} onClick={() => setSelectedMember(m)} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hover:scale-105 transition-transform cursor-pointer group">
                    <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform">👤</div>
                    <h3 className="text-2xl font-black text-[#8b0000] mb-2">{m.name}</h3>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{m.relation[lang]}</p>
                  </div>
                ))}
              </div>
              {selectedMember && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-6" onClick={() => setSelectedMember(null)}>
                  <div className="bg-white p-12 rounded-[3.5rem] max-w-lg w-full relative shadow-2xl border-t-[16px] border-[#8b0000]" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-8 text-3xl font-black text-slate-300 hover:text-red-500">✕</button>
                    <h3 className="text-4xl font-black text-[#8b0000] mb-6">{selectedMember.name}</h3>
                    <p className="text-xl text-slate-700 leading-relaxed italic border-l-8 border-[#f5e6d3] pl-6">
                      {selectedMember.description[lang]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'stories' && (
            <div className="space-y-14 py-10 animate-in fade-in duration-700">
              <h2 className="text-5xl font-black text-[#8b0000] mb-4">📜 紅樓語境選讀</h2>
              {STORIES.map(story => (
                <div key={story.id} className="bg-white p-12 rounded-[3rem] shadow-xl border-l-[12px] border-[#8b0000]">
                  <h3 className="text-3xl font-black text-[#8b0000] mb-8">{story.title[lang]}</h3>
                  <p className="text-2xl leading-relaxed text-slate-700 mb-10">{story.content[lang]}</p>
                  <div className="bg-[#fdfbf7] p-8 rounded-[2rem] border-2 border-[#d4af37]">
                    <p className="text-sm font-black text-[#d4af37] uppercase mb-4 tracking-[0.2em]">💡 文化導航指標</p>
                    <p className="text-lg text-slate-600 font-bold italic">{story.culturalLesson[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {view === 'crisis' && (
            <div className="space-y-12 py-10 animate-in fade-in duration-500">
              <h2 className="text-5xl font-black text-[#8b0000] mb-4">⚖️ 文化危機分析</h2>
              {CRISES.map(c => (
                <div key={c.id} className="bg-white overflow-hidden rounded-[3rem] shadow-2xl border border-slate-100">
                  <div className="bg-[#8b0000] p-10 text-white">
                     <h3 className="text-3xl font-bold">{c.topic[lang]}</h3>
                  </div>
                  <div className="p-12 space-y-8">
                    <p className="text-2xl text-slate-700 bg-slate-50 p-8 rounded-[2rem] border-l-[10px] border-[#8b0000] italic leading-relaxed">
                      「{c.context[lang]}」
                    </p>
                    <div className="p-8 bg-red-50 rounded-[2rem] border-2 border-red-100">
                      <h4 className="text-xl font-black text-[#8b0000] mb-3">為什麼外國人會聽不懂？</h4>
                      <p className="text-xl text-slate-800 leading-relaxed font-semibold">{c.crisisExplanation[lang]}</p>
                    </div>
                    <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-inner border-b-[8px] border-[#d4af37]">
                       <h4 className="text-lg font-black mb-4 text-[#d4af37]">🤔 腦力激盪 Q&A：</h4>
                       <p className="text-2xl font-bold leading-snug">{c.discussionQuestion[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(view === 'proverbs' || view === 'daily') && (
            <div className="space-y-8 py-10">
              <h2 className="text-5xl font-black text-[#8b0000] mb-6">
                {view === 'proverbs' ? '🏮 經典諺語' : '☕ 現代場景'}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {(view === 'proverbs' ? PROVERBS : DAILY_PHRASES).map(item => (
                  <div key={item.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 hover:border-[#8b0000] transition-colors">
                    <div className="md:w-2/5 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-10">
                      <p className="text-4xl font-black text-[#8b0000] mb-3">{item.phrase}</p>
                      <p className="text-lg text-slate-400 font-medium italic">"{item.literal[lang]}"</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                       <p className="text-xs font-black text-[#d4af37] uppercase mb-2 tracking-widest">話語隱含深度</p>
                       <p className="text-2xl font-black text-slate-800 mb-6">{item.hidden[lang]}</p>
                       <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-200">
                         <p className="text-xs text-slate-400 font-mono uppercase mb-1">使用場景</p>
                         <p className="text-base text-slate-600 font-mono font-bold">{item.example}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
