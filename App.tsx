
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, FamilyMember } from './types';
import { FAMILY_MEMBERS, STORIES, CRISES, DAILY_PHRASES, PROVERBS, HOME_CONTENT } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [view]);

  const renderLanguageSwitcher = () => (
    <div className="fixed top-4 right-4 z-[60] flex flex-wrap gap-1 bg-white/95 backdrop-blur p-1.5 rounded-2xl shadow-2xl border border-[#d4af37]">
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
          className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
            lang === l.id 
              ? 'bg-[#8b0000] text-white' 
              : 'text-slate-400 hover:text-[#8b0000]'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fcf9f2] text-slate-800 pb-20 md:pb-0 overflow-hidden">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 w-full p-4 md:p-10 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-4xl mx-auto">
          {view === 'home' && (
            <div className="space-y-10 animate-in fade-in zoom-in duration-500 py-10">
              <div className="bg-[#8b0000] rounded-[3rem] p-12 md:p-20 text-[#f5e6d3] shadow-2xl border-4 border-[#d4af37] relative overflow-hidden flex flex-col items-center text-center">
                 <div className="mb-6 bg-white/20 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase">
                    Learning World
                 </div>
                 <h1 className="text-5xl md:text-8xl font-[900] mb-6 leading-tight drop-shadow-lg">
                    {HOME_CONTENT.title[lang]}
                 </h1>
                 <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl border-t border-white/30 pt-6">
                   {HOME_CONTENT.subtitle[lang]}
                 </p>
                 <div className="absolute top-10 right-10 text-[200px] opacity-5 font-black pointer-events-none">學</div>
                 <div className="absolute bottom-10 left-10 text-[200px] opacity-5 font-black pointer-events-none">溝</div>
              </div>

              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border-t-8 border-[#8b0000] space-y-8">
                 <h2 className="text-3xl md:text-4xl font-black text-[#8b0000] flex items-center gap-4">
                   <span className="text-5xl">📌</span> {HOME_CONTENT.significanceTitle[lang]}
                 </h2>
                 <div className="bg-[#fdfbf7] p-8 rounded-[2rem] border-l-8 border-[#d4af37]">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                      {HOME_CONTENT.significanceDesc[lang]}
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-3xl text-center border border-slate-100">
                       <div className="text-4xl mb-3">👂</div>
                       <div className="font-black text-slate-800">聽懂內心</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl text-center border border-slate-100">
                       <div className="text-4xl mb-3">🌏</div>
                       <div className="font-black text-slate-800">尊重文化</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl text-center border border-slate-100">
                       <div className="text-4xl mb-3">🤝</div>
                       <div className="font-black text-slate-800">做好朋友</div>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {view === 'family-tree' && (
            <div className="space-y-12 animate-in slide-in-from-bottom-5 duration-700 py-10">
              <div className="text-center">
                <h2 className="text-4xl font-black text-[#8b0000] border-b-4 border-[#8b0000] inline-block pb-2">
                  {lang === 'vn' ? 'Nhân vật tiêu biểu' : '紅樓人物'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FAMILY_MEMBERS.map(m => (
                  <div key={m.id} onClick={() => setSelectedMember(m)} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-3xl mb-2">👤</div>
                    <h3 className="text-xl font-bold text-[#8b0000]">{m.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{m.relation[lang]}</p>
                  </div>
                ))}
              </div>
              {selectedMember && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                  <div className="bg-white p-8 rounded-[2rem] max-w-md w-full relative">
                    <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-2xl">✕</button>
                    <h3 className="text-3xl font-black text-[#8b0000] mb-4">{selectedMember.name}</h3>
                    <p className="text-lg text-slate-700 leading-relaxed italic">{selectedMember.description[lang]}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'stories' && (
            <div className="space-y-10 animate-in fade-in duration-700 py-10">
              {STORIES.map(story => (
                <div key={story.id} className="bg-white p-10 rounded-[2rem] shadow-lg border-l-8 border-[#8b0000]">
                  <h3 className="text-3xl font-black text-[#8b0000] mb-6">📖 {story.title[lang]}</h3>
                  <p className="text-xl leading-relaxed text-slate-700 mb-8">{story.content[lang]}</p>
                  <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#d4af37]">
                    <p className="text-sm font-black text-[#d4af37] uppercase mb-2">💡 重點小提醒</p>
                    <p className="text-base text-slate-600 italic">{story.culturalLesson[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {view === 'crisis' && (
            <div className="space-y-10 animate-in fade-in duration-500 py-10">
              {CRISES.map(c => (
                <div key={c.id} className="bg-white overflow-hidden rounded-[2rem] shadow-xl border border-slate-100">
                  <div className="bg-[#8b0000] p-6 text-white">
                     <h3 className="text-2xl font-bold">{c.topic[lang]}</h3>
                  </div>
                  <div className="p-8 space-y-6">
                    <p className="text-lg text-slate-700 bg-slate-50 p-4 rounded-xl border-l-4 border-[#8b0000] italic">
                      "{c.context[lang]}"
                    </p>
                    <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                      <h4 className="font-black text-[#8b0000] mb-2">為什麼會產生誤會？</h4>
                      <p className="text-slate-800">{c.crisisExplanation[lang]}</p>
                    </div>
                    <div className="bg-slate-900 text-white p-6 rounded-2xl">
                       <h4 className="font-black mb-2 text-[#d4af37]">🤔 你會怎麼做？</h4>
                       <p className="text-xl">{c.discussionQuestion[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(view === 'proverbs' || view === 'daily') && (
            <div className="space-y-6 py-10">
              {(view === 'proverbs' ? PROVERBS : DAILY_PHRASES).map(item => (
                <div key={item.id} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 border-r md:border-slate-100 pr-4">
                    <p className="text-3xl font-black text-[#8b0000] mb-1">{item.phrase}</p>
                    <p className="text-sm text-slate-400">"{item.literal[lang]}"</p>
                  </div>
                  <div className="flex-1">
                     <p className="text-xs font-bold text-[#d4af37] uppercase mb-1">話中有話</p>
                     <p className="text-xl font-bold text-slate-800">{item.hidden[lang]}</p>
                     <p className="mt-4 text-xs text-slate-300 font-mono">例子：{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
