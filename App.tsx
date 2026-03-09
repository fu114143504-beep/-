
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, ChapterContent } from './types';
import { NAV_LABELS, HOME_CONTENT, CHAPTERS } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
    setActiveCardIndex(0);
    setIsFlipped(false);
  }, [view]);

  const renderLanguageSwitcher = () => (
    <div className="fixed top-2 right-2 z-[100] flex flex-wrap gap-1 bg-[#fdfbf7]/90 backdrop-blur-md p-1 rounded-xl shadow-lg border-2 border-[#d4af37] max-w-[calc(100vw-80px)]">
      {['en', 'vn', 'jp', 'kr', 'zh-tw', 'zh-cn'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l as Language)}
          className={`px-3 py-1 rounded-lg text-xs md:text-[9px] font-black transition-all ${
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
        <div className="bg-[#8b0000] rounded-lg md:rounded-[2.2rem] p-8 md:p-24 text-[#f5e6d3] text-center relative overflow-hidden corner-gold">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='none' stroke='%23d4af37' stroke-width='2'/%3E%3C/svg%3E")`, backgroundSize: '40px' }} />
           
           <h1 className="text-3xl md:text-8xl font-black mb-4 md:mb-8 leading-tight z-10 relative font-serif text-balance tracking-tight">
             {HOME_CONTENT.title[lang]}
           </h1>
           <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 z-10 relative">
             <div className="h-px w-6 md:w-32 bg-[#d4af37]"></div>
             <div className="text-sm md:text-3xl font-serif text-[#d4af37]">❂</div>
             <div className="h-px w-6 md:w-32 bg-[#d4af37]"></div>
           </div>
           <p className="text-base md:text-4xl font-serif leading-relaxed max-w-3xl mx-auto z-10 relative px-1 md:px-4 opacity-95 text-balance text-justify-zh">
             {HOME_CONTENT.subtitle[lang]}
           </p>
        </div>
      </div>

      {/* 章節卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-0">
        {CHAPTERS.map(ch => (
          <button 
            key={ch.id} 
            onClick={() => setView(ch.id)} 
            className="group bg-white p-6 md:p-12 rounded-xl md:rounded-[2rem] shadow-lg border-2 border-[#8b0000]/10 border-t-[8px] md:border-t-[12px] border-t-[#8b0000] text-left hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 relative overflow-hidden"
          >
             <div className="mb-2 inline-block px-3 py-1 bg-[#8b0000]/5 text-[#8b0000] rounded-full text-[10px] md:text-[9px] font-black uppercase tracking-widest">{NAV_LABELS[ch.id][lang]}</div>
             <h3 className="text-2xl md:text-3xl font-black text-[#8b0000] mb-3 font-serif leading-tight text-balance">{ch.keyword}</h3>
             <p className="text-sm md:text-xl text-blue-900 line-clamp-2 md:line-clamp-3 leading-relaxed font-serif italic mb-4 md:mb-6 text-justify-zh">
               {ch.simpleChineseExplanation[lang]}
             </p>
             <div className="flex items-center text-[#8b0000] font-black text-[10px] md:text-[9px] uppercase tracking-[0.2em]">
               <span>開始練習</span>
               <span className="ml-1 text-base">→</span>
             </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderChapter = (ch: ChapterContent) => (
    <div className="space-y-8 md:space-y-20 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-32 px-0">
      {/* 1. 標題區塊 */}
      <div className="relative pt-4 md:pt-12">
        <div className="bg-[#8b0000] p-8 md:p-20 rounded-xl md:rounded-[3.5rem] shadow-2xl border-x-[8px] md:border-x-[24px] border-[#d4af37] flex flex-col items-center text-center text-[#f5e6d3] relative corner-gold overflow-hidden">
          <div className="mb-4 px-3 py-1 border border-[#d4af37]/50 rounded-full text-[10px] md:text-[9px] font-black uppercase tracking-[0.3em] opacity-80">{NAV_LABELS[ch.id][lang]}</div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-serif leading-snug px-1 text-balance">{ch.keyword}</h2>
          
          <div className="w-full bg-[#fdfbf7]/10 backdrop-blur-md p-6 md:p-16 rounded-lg md:rounded-[3rem] border-2 border-dashed border-[#d4af37]/50 shadow-inner">
            <p className="text-xl md:text-5xl font-serif font-black leading-relaxed italic text-balance text-[#f5e6d3]">
              {ch.classicText[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* 2. 簡單中文解說 */}
      <div className="lattice-container bg-white rounded-xl md:rounded-[3rem] shadow-xl p-8 md:p-20 space-y-6 md:space-y-12">
        <div className="border-l-[6px] md:border-l-[10px] border-[#8b0000] pl-6 md:pl-16 relative">
          <h4 className="text-[10px] md:text-sm font-black text-[#8b0000]/60 uppercase tracking-[0.3em] mb-3">簡單中文解釋</h4>
          <p className="text-lg md:text-4xl text-slate-800 leading-snug font-serif font-black text-justify-zh">
            {ch.simpleChineseExplanation[lang]}
          </p>
        </div>
      </div>

      {/* 3. 翻頁式練習 */}
      <div className="space-y-6 md:space-y-12">
        <div className="flex items-center gap-3 px-1">
          <div className="h-1 w-8 md:w-16 bg-[#d4af37] rounded-full"></div>
          <h3 className="text-2xl md:text-4xl font-black text-[#8b0000] font-serif">翻頁練習 (Flip Cards)</h3>
          <div className="flex-1 h-1 bg-[#8b0000]/10 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div 
            className="relative w-full max-w-2xl aspect-[4/3] md:aspect-[16/9] perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* 正面：情境 */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl border-4 border-[#8b0000] p-8 md:p-12 flex flex-col items-center justify-center text-center">
                <div className="absolute top-4 left-4 text-[#8b0000]/20 text-4xl md:text-6xl font-serif">“</div>
                <h4 className="text-[#8b0000] font-black text-xs md:text-sm uppercase tracking-widest mb-6">情境 (Scenario)</h4>
                <p className="text-xl md:text-4xl font-serif font-black text-slate-800 leading-relaxed">
                  {ch.practiceCards[activeCardIndex].scenario[lang]}
                </p>
                <div className="mt-8 text-[#8b0000] font-black text-[10px] md:text-xs animate-pulse">點擊翻面查看答案 →</div>
              </div>

              {/* 反面：答案與解釋 */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#8b0000] rounded-3xl shadow-2xl border-4 border-[#d4af37] p-8 md:p-12 flex flex-col items-center justify-center text-center text-[#f5e6d3]">
                <h4 className="text-[#d4af37] font-black text-xs md:text-sm uppercase tracking-widest mb-4">委婉說法 (Euphemism)</h4>
                <p className="text-2xl md:text-5xl font-serif font-black mb-6 leading-tight">
                  {ch.practiceCards[activeCardIndex].answer[lang]}
                </p>
                <div className="h-px w-16 bg-[#d4af37]/50 mb-6"></div>
                <p className="text-sm md:text-2xl font-serif opacity-90 leading-relaxed">
                  {ch.practiceCards[activeCardIndex].explanation[lang]}
                </p>
                <div className="mt-8 text-[#d4af37] font-black text-[10px] md:text-xs">點擊翻回情境 ←</div>
              </div>
            </div>
          </div>

          {/* 控制按鈕 */}
          <div className="flex items-center gap-6">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveCardIndex((prev) => (prev - 1 + ch.practiceCards.length) % ch.practiceCards.length);
                setIsFlipped(false);
              }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg border-2 border-[#8b0000] flex items-center justify-center text-[#8b0000] text-xl md:text-2xl hover:bg-[#8b0000] hover:text-white transition-all active:scale-90"
            >
              ←
            </button>
            <span className="text-lg md:text-2xl font-black text-[#8b0000] font-serif">
              {activeCardIndex + 1} / {ch.practiceCards.length}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveCardIndex((prev) => (prev + 1) % ch.practiceCards.length);
                setIsFlipped(false);
              }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg border-2 border-[#8b0000] flex items-center justify-center text-[#8b0000] text-xl md:text-2xl hover:bg-[#8b0000] hover:text-white transition-all active:scale-90"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* 4. 更多例句 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-1 w-8 md:w-16 bg-[#d4af37] rounded-full"></div>
          <h3 className="text-2xl md:text-4xl font-black text-[#8b0000] font-serif">更多簡單例句</h3>
          <div className="flex-1 h-1 bg-[#8b0000]/10 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {ch.practiceCards.map((p, i) => (
            <div key={i} className="bg-white p-6 md:p-10 rounded-xl md:rounded-[2rem] shadow-md border-l-8 border-[#8b0000]">
               <p className="font-serif font-black text-slate-800 text-lg md:text-3xl mb-2 leading-tight">「{p.answer[lang]}」</p>
               <p className="text-blue-900 text-xs md:text-xl font-serif italic text-justify-zh leading-tight">{p.scenario[lang]}</p>
            </div>
          ))}
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
