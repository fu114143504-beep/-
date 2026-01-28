
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, ChapterContent } from './types';
import { NAV_LABELS, HOME_CONTENT, CHAPTERS, FORM_IFRAME } from './constants';
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
    <div className="fixed top-3 right-3 z-[100] flex flex-wrap gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-xl shadow-lg border border-[#d4af37]/50">
      {['en', 'vn', 'jp', 'kr', 'zh-tw', 'zh-cn'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l as Language)}
          className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-all ${
            lang === l ? 'bg-[#8b0000] text-white shadow-md' : 'text-slate-400 hover:text-[#8b0000]'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="space-y-6 md:space-y-10 animate-in fade-in zoom-in duration-500 pb-10">
      {/* 英雄區塊 */}
      <div className="bg-[#8b0000] rounded-[2rem] p-8 md:p-20 text-[#f5e6d3] shadow-2xl border-4 border-[#d4af37] text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 p-4 md:p-8 text-7xl md:text-9xl opacity-5 font-serif font-black select-none pointer-events-none transform -rotate-12">教</div>
         <h1 className="text-3xl md:text-7xl font-black mb-4 md:mb-8 leading-tight z-10 relative font-serif text-balance px-2">
           {HOME_CONTENT.title[lang]}
         </h1>
         <div className="w-12 md:w-20 h-1.5 md:h-2.5 bg-[#d4af37] mx-auto mb-6 md:mb-10 rounded-full"></div>
         <p className="text-sm md:text-2xl font-medium opacity-90 leading-relaxed max-w-2xl mx-auto z-10 relative px-4 text-pretty">
           {HOME_CONTENT.subtitle[lang]}
         </p>
         <div className="absolute bottom-0 right-0 p-4 md:p-8 text-7xl md:text-9xl opacity-5 font-serif font-black select-none pointer-events-none transform rotate-12">學</div>
      </div>
      
      {/* 章節卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
        {CHAPTERS.map(ch => (
          <button 
            key={ch.id} 
            onClick={() => setView(ch.id)} 
            className="group bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-md border-t-8 border-[#8b0000] text-left hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 relative overflow-hidden"
          >
             <div className="absolute top-4 right-4 text-4xl md:text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🏮</div>
             <div className="mb-2 inline-block px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-500 font-bold uppercase tracking-wider">{NAV_LABELS[ch.id][lang]}</div>
             <h3 className="text-lg md:text-2xl font-black text-[#8b0000] mb-2 font-serif leading-tight">{ch.title[lang]}</h3>
             <p className="text-xs md:text-base text-slate-500 line-clamp-2 leading-relaxed font-medium italic mb-4">
               {ch.modernExplanation[lang]}
             </p>
             <div className="flex items-center text-[#8b0000] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all">
               進入課程 <span className="ml-2 text-base">→</span>
             </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderChapter = (ch: ChapterContent) => (
    <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-500 pb-24 px-1 md:px-0">
      {/* 1. 原文頭部區塊 */}
      <div className="bg-[#8b0000] p-6 md:p-16 rounded-[1.5rem] md:rounded-[3rem] shadow-xl border-b-4 md:border-b-8 border-[#d4af37] flex flex-col items-center text-center text-[#f5e6d3] relative">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-4">{NAV_LABELS[ch.id][lang]}</div>
        <h2 className="text-xl md:text-5xl font-black mb-6 md:mb-10 font-serif leading-snug px-2 text-balance">{ch.title[lang]}</h2>
        <div className="w-full bg-white/10 backdrop-blur-md p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] border-2 border-dashed border-[#d4af37]/40">
          <p className="text-lg md:text-4xl font-serif font-black leading-relaxed italic text-balance">
            「{ch.classicText}」
          </p>
          <div className="mt-4 text-[9px] md:text-xs font-bold uppercase tracking-widest opacity-50">—— 摘自《紅樓夢》</div>
        </div>
      </div>

      {/* 2. 解說與影片 */}
      <div className="bg-white p-6 md:p-16 rounded-[1.5rem] md:rounded-[3rem] shadow-lg space-y-8 md:space-y-12 border border-slate-100">
        <div className="border-l-4 md:border-l-8 border-[#d4af37] pl-5 md:pl-10">
          <h4 className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-2 md:mb-4">語境深度剖析</h4>
          <p className="text-base md:text-3xl text-slate-800 leading-relaxed md:leading-snug font-serif font-bold text-pretty">
            {ch.modernExplanation[lang]}
          </p>
        </div>
        
        {/* 影片區域 */}
        <div className="relative aspect-[16/9] bg-black rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 md:border-8 border-[#f5e6d3] w-full max-w-5xl mx-auto">
           <iframe 
             className="absolute inset-0 w-full h-full"
             src={`https://www.youtube.com/embed/${ch.videoUrl}?modestbranding=1&rel=0&controls=1`} 
             title="Lesson Video"
             frameBorder="0" 
             allowFullScreen
           ></iframe>
        </div>
      </div>

      {/* 3. 價值觀對比 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-[#fdfbf7] p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-[#d4af37]/30 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
             <span className="text-xl md:text-3xl">🏛️</span>
             <h4 className="text-[#8b0000] font-black uppercase tracking-widest text-[10px] md:text-xs">古代價值觀</h4>
           </div>
           <p className="text-sm md:text-xl font-bold text-slate-700 leading-relaxed md:leading-loose">{ch.contrast.ancient[lang]}</p>
        </div>
        <div className="bg-blue-50 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-blue-100 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
             <span className="text-xl md:text-3xl">📱</span>
             <h4 className="text-blue-800 font-black uppercase tracking-widest text-[10px] md:text-xs">現代價值觀</h4>
           </div>
           <p className="text-sm md:text-xl font-bold text-slate-700 leading-relaxed md:leading-loose">{ch.contrast.modern[lang]}</p>
        </div>
      </div>

      {/* 4. 語言學習網格 */}
      <div className="space-y-6 md:space-y-10">
        <div className="flex items-center gap-3 md:gap-5 px-2">
          <div className="h-6 md:h-12 w-1.5 md:w-3 bg-[#8b0000] rounded-full"></div>
          <h3 className="text-xl md:text-4xl font-black text-[#8b0000] font-serif">語言學習中心</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {/* 生詞卡 */}
          <div className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem] shadow-xl border-t-8 border-emerald-500">
             <h4 className="font-black text-emerald-700 mb-6 md:mb-10 flex items-center gap-3 text-lg md:text-2xl">
               <span className="bg-emerald-100 p-2 rounded-xl text-xl">🌟</span> 現代實用生詞
             </h4>
             <ul className="space-y-4 md:space-y-8">
               {ch.vocab.map((v, i) => (
                 <li key={i} className="flex flex-col border-b border-slate-50 pb-4 last:border-0">
                   <span className="font-black text-lg md:text-3xl text-slate-800 hover:text-emerald-600 transition-colors cursor-default">{v.word}</span>
                   <span className="text-slate-500 text-xs md:text-base mt-1 md:mt-3 font-medium leading-relaxed">{v.meaning[lang]}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          {/* 語法卡 */}
          <div className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem] shadow-xl border-t-8 border-indigo-500">
             <h4 className="font-black text-indigo-700 mb-6 md:mb-10 flex items-center gap-3 text-lg md:text-2xl">
               <span className="bg-indigo-100 p-2 rounded-xl text-xl">⚙️</span> 跨文化語法點
             </h4>
             <ul className="space-y-6 md:space-y-10">
               {ch.grammar.map((g, i) => (
                 <li key={i} className="bg-slate-50 p-4 md:p-8 rounded-xl md:rounded-[2rem] border-l-4 border-indigo-200">
                   <p className="font-black text-slate-800 text-base md:text-2xl mb-2 md:mb-4">{g.point}</p>
                   <p className="text-slate-500 text-[11px] md:text-lg leading-relaxed font-medium">{g.usage[lang]}</p>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>

      {/* 5. 現代場景閱讀 */}
      <div className="bg-[#1a1a1a] text-[#f5e6d3] p-8 md:p-20 rounded-[1.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden border-b-[8px] md:border-b-[16px] border-[#d4af37]">
         <div className="absolute top-4 right-4 text-6xl md:text-[15rem] opacity-5 font-serif pointer-events-none select-none italic">"</div>
         <h3 className="text-[#d4af37] font-black mb-6 md:mb-10 uppercase text-[10px] md:text-xs tracking-[0.4em]">沉浸式場景閱讀</h3>
         <p className="text-lg md:text-3xl leading-relaxed md:leading-loose italic opacity-95 font-serif text-pretty">
           <span className="text-4xl md:text-7xl font-black text-[#d4af37] float-left mr-3 md:mr-6 leading-none mt-1">「</span>
           {ch.modernEssay[lang]}
         </p>
      </div>

      {/* 6. 表單區塊 */}
      <div className="mt-12 md:mt-24 pt-12 md:pt-24 border-t-4 border-dashed border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-xl md:text-4xl font-black text-slate-800 font-serif mb-2">練習與反饋</h3>
          <p className="text-xs md:text-lg text-slate-400 font-medium px-4">完成下方練習以加深印象。</p>
        </div>
        <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100" dangerouslySetInnerHTML={{ __html: FORM_IFRAME }} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fcf9f2] text-slate-900 pb-20 md:pb-0 font-sans overflow-x-hidden">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 w-full p-4 md:p-16 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-5xl mx-auto">
          {view === 'home' && renderHome()}
          {CHAPTERS.map(ch => view === ch.id ? <div key={ch.id}>{renderChapter(ch)}</div> : null)}
        </div>
      </main>
    </div>
  );
};

export default App;
