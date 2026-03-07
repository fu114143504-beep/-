
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, ChapterContent } from './types';
import { NAV_LABELS, HOME_CONTENT, CHAPTERS } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [view]);

  const renderLanguageSwitcher = () => (
    <div className="fixed top-2 right-2 z-[100] flex flex-wrap gap-1 bg-[#fdfbf7]/90 backdrop-blur-md p-1 rounded-xl shadow-lg border-2 border-[#d4af37] max-w-[calc(100vw-80px)]">
      {['en', 'vn', 'jp', 'kr', 'zh-tw', 'zh-cn'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l as Language)}
          className={`px-2 py-0.5 rounded-lg text-[9px] font-black transition-all ${
            lang === l ? 'bg-[#8b0000] text-[#f5e6d3] shadow-md' : 'text-[#8b0000]/50 hover:text-[#8b0000]'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="space-y-6 md:space-y-12 animate-in fade-in zoom-in duration-700 pb-20">
      {/* 英雄區塊 */}
      <div className="relative group overflow-hidden rounded-xl md:rounded-[2.5rem] shadow-2xl border-2 md:border-4 border-[#8b0000] bg-white p-0.5">
        <div className="bg-[#8b0000] rounded-lg md:rounded-[2.2rem] p-6 md:p-24 text-[#f5e6d3] text-center relative overflow-hidden corner-gold">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='none' stroke='%23d4af37' stroke-width='2'/%3E%3C/svg%3E")`, backgroundSize: '40px' }} />
           
           <h1 className="text-2xl md:text-8xl font-black mb-4 md:mb-8 leading-tight z-10 relative font-serif text-balance tracking-tight">
             {HOME_CONTENT.title[lang]}
           </h1>
           <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 z-10 relative">
             <div className="h-px w-6 md:w-32 bg-[#d4af37]"></div>
             <div className="text-xs md:text-3xl font-serif text-[#d4af37]">❂</div>
             <div className="h-px w-6 md:w-32 bg-[#d4af37]"></div>
           </div>
           <p className="text-sm md:text-4xl font-serif leading-relaxed max-w-3xl mx-auto z-10 relative px-1 md:px-4 opacity-95 text-balance text-justify-zh">
             {HOME_CONTENT.subtitle[lang]}
           </p>
        </div>
      </div>

      {/* 章節卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 px-0">
        {CHAPTERS.map(ch => (
          <button 
            key={ch.id} 
            onClick={() => setView(ch.id)} 
            className="group bg-white p-4 md:p-12 rounded-xl md:rounded-[2rem] shadow-lg border-2 border-[#8b0000]/10 border-t-[6px] md:border-t-[12px] border-t-[#8b0000] text-left hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 relative overflow-hidden"
          >
             <div className="mb-1 inline-block px-2 py-0.5 bg-[#8b0000]/5 text-[#8b0000] rounded-full text-[9px] font-black uppercase tracking-widest">{NAV_LABELS[ch.id][lang]}</div>
             <h3 className="text-lg md:text-3xl font-black text-[#8b0000] mb-2 font-serif leading-tight text-balance">{ch.title[lang]}</h3>
             <p className="text-xs md:text-xl text-slate-600 line-clamp-2 md:line-clamp-3 leading-relaxed font-serif italic mb-3 md:mb-6 text-justify-zh">
               {ch.modernExplanation[lang]}
             </p>
             <div className="flex items-center text-[#8b0000] font-black text-[9px] uppercase tracking-[0.2em]">
               <span>研習此回</span>
               <span className="ml-1 text-base">→</span>
             </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderChapter = (ch: ChapterContent) => (
    <div className="space-y-6 md:space-y-20 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-32 px-0">
      {/* 1. 原文頭部區塊 */}
      <div className="relative pt-4 md:pt-12">
        <div className="bg-[#8b0000] p-6 md:p-20 rounded-xl md:rounded-[3.5rem] shadow-2xl border-x-[8px] md:border-x-[24px] border-[#d4af37] flex flex-col items-center text-center text-[#f5e6d3] relative corner-gold overflow-hidden">
          <div className="mb-3 px-2 py-0.5 border border-[#d4af37]/50 rounded-full text-[9px] font-black uppercase tracking-[0.3em] opacity-80">{NAV_LABELS[ch.id][lang]}</div>
          <h2 className="text-xl md:text-6xl font-black mb-6 font-serif leading-snug px-1 text-balance">{ch.title[lang]}</h2>
          
          <div className="w-full bg-[#fdfbf7]/10 backdrop-blur-md p-4 md:p-16 rounded-lg md:rounded-[3rem] border-2 border-dashed border-[#d4af37]/50 shadow-inner">
            <p className="text-lg md:text-5xl font-serif font-black leading-relaxed italic text-balance text-[#f5e6d3]">
              {ch.classicText}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-4 h-px bg-[#d4af37]/50"></div>
              <div className="text-[9px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">日常委婉語應用</div>
              <div className="w-4 h-px bg-[#d4af37]/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 解說 */}
      <div className="lattice-container bg-white rounded-xl md:rounded-[3rem] shadow-xl p-4 md:p-20 space-y-6 md:space-y-12">
        <div className="border-l-[4px] md:border-l-[10px] border-[#8b0000] pl-3 md:pl-16 relative">
          <h4 className="text-[9px] md:text-sm font-black text-[#8b0000]/60 uppercase tracking-[0.3em] mb-2">文化語境深探</h4>
          <p className="text-base md:text-4xl text-slate-800 leading-snug font-serif font-black text-justify-zh">
            {ch.modernExplanation[lang]}
          </p>
        </div>
      </div>

      {/* 3. 價值觀對比 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
        <div className="bg-white p-6 md:p-16 rounded-xl border-2 border-[#8b0000]/10 shadow-lg relative overflow-hidden group">
           <h4 className="text-[#8b0000] font-black uppercase tracking-[0.2em] text-[9px] mb-3 flex items-center gap-2">🚫 直接表達：容易尷尬</h4>
           <p className="text-base md:text-3xl font-serif font-bold text-slate-700 leading-relaxed text-justify-zh">{ch.contrast.ancient[lang]}</p>
        </div>
        <div className="bg-[#fcf9f2] p-6 md:p-16 rounded-xl border-2 border-[#d4af37]/30 shadow-lg relative overflow-hidden group">
           <h4 className="text-[#d4af37] font-black uppercase tracking-[0.2em] text-[9px] mb-3 flex items-center gap-2">✅ 委婉表達：更有禮貌</h4>
           <p className="text-base md:text-3xl font-serif font-bold text-slate-700 leading-relaxed text-justify-zh">{ch.contrast.modern[lang]}</p>
        </div>
      </div>

      {/* 4. 語言實踐 - 字體調小，排版緊湊 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-1 w-8 md:w-16 bg-[#d4af37] rounded-full"></div>
          <h3 className="text-lg md:text-4xl font-black text-[#8b0000] font-serif">語言實踐</h3>
          <div className="flex-1 h-1 bg-[#8b0000]/10 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 生詞卡 */}
          <div className="bg-white p-5 md:p-10 rounded-xl md:rounded-[2rem] shadow-md border-t-4 md:border-t-[8px] border-emerald-600">
             <h4 className="font-serif font-black text-emerald-800 mb-6 flex items-center gap-2 text-base md:text-2xl">✒️ 常見語彙</h4>
             <ul className="space-y-4">
               {ch.vocab.map((v, i) => (
                 <li key={i} className="flex flex-col border-b border-slate-50 pb-3 last:border-0">
                   <span className="font-serif font-black text-lg md:text-xl text-slate-800 leading-tight">{v.word}</span>
                   <span className="text-slate-500 text-[10px] md:text-base mt-0.5 font-serif italic text-justify-zh leading-tight">{v.meaning[lang]}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          {/* 語法卡 */}
          <div className="bg-white p-5 md:p-10 rounded-xl md:rounded-[2rem] shadow-md border-t-4 md:border-t-[8px] border-indigo-600">
             <h4 className="font-serif font-black text-indigo-800 mb-6 flex items-center gap-2 text-base md:text-2xl">⚙️ 句式應用</h4>
             <ul className="space-y-3">
               {ch.grammar.map((g, i) => (
                 <li key={i} className="bg-slate-50 p-4 md:p-6 rounded-lg md:rounded-xl border-l-4 border-indigo-200">
                   <p className="font-serif font-black text-slate-800 text-sm md:text-lg mb-1 leading-tight">{g.point}</p>
                   <p className="text-slate-600 text-[10px] md:text-sm font-serif italic text-justify-zh leading-tight">{g.usage[lang]}</p>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>

      {/* 5. 現代場景閱讀 - 加上引號 */}
      <div className="relative p-0.5">
        <div className="bg-[#fff0f5] text-[#8b0000] p-6 md:p-24 rounded-xl md:rounded-[4rem] shadow-xl relative overflow-hidden border-b-[8px] md:border-b-[20px] border-[#ffc0cb]">
           <h3 className="text-[#8b0000] font-black mb-4 uppercase text-[9px] tracking-[0.3em] border-b border-[#8b0000]/10 pb-2 inline-block">沉浸式場景感悟</h3>
           <p className="text-base md:text-4xl leading-relaxed italic font-serif text-justify-zh">
             「{ch.modernEssay[lang]}」
           </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fdfbf7] text-slate-900 pb-20 md:pb-0 font-sans overflow-x-hidden">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 w-full p-2 md:p-12 md:pl-16 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-6xl mx-auto px-1 md:px-0">
          {view === 'home' && renderHome()}
          {CHAPTERS.map(ch => view === ch.id ? <div key={ch.id}>{renderChapter(ch)}</div> : null)}
        </div>
      </main>
    </div>
  );
};

export default App;
