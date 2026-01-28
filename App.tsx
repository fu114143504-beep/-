
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, FamilyMember } from './types';
import { FAMILY_MEMBERS, STORIES, CRISES, DAILY_PHRASES, PROVERBS, HOME_CONTENT, HOME_ANALYSIS } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [opinion, setOpinion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const mainRef = useRef<HTMLElement>(null);

  // 影片 ID：Xf6ANQc6aVM (早生貴子)
  const VIDEO_ID = "Xf6ANQc6aVM";

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [view]);

  const handleOpinionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (opinion.trim()) {
      setSubmitted(true);
      setOpinion('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const renderLanguageSwitcher = () => (
    <div className="fixed top-2 right-2 z-[100] flex flex-wrap gap-1 bg-white/95 backdrop-blur p-1.5 rounded-xl shadow-lg border border-[#d4af37]">
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
          className={`px-2 py-1 rounded-lg text-[10px] font-black transition-all ${
            lang === l.id 
              ? 'bg-[#8b0000] text-white shadow-sm' 
              : 'text-slate-400 hover:text-[#8b0000]'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="space-y-6 py-4 animate-in fade-in zoom-in duration-500">
      {/* 標題區域：手機優化 */}
      <div className="bg-[#8b0000] rounded-[1.5rem] p-6 md:p-12 text-[#f5e6d3] shadow-xl border-2 border-[#d4af37] relative overflow-hidden flex flex-col items-center text-center">
         <h1 className="text-2xl md:text-5xl font-[900] mb-3 leading-tight px-4">
            {HOME_CONTENT.title[lang]}
         </h1>
         <div className="w-10 h-1 bg-[#d4af37] mb-4 rounded-full opacity-50"></div>
         <p className="text-sm md:text-xl font-medium opacity-90 max-w-2xl leading-relaxed px-4">
           {HOME_CONTENT.subtitle[lang]}
         </p>
         <div className="absolute -bottom-2 -right-2 text-[80px] opacity-5 font-black pointer-events-none select-none">學</div>
      </div>

      {/* 影音與互動區域 */}
      <div className="bg-white p-5 md:p-10 rounded-[1.5rem] shadow-lg border-t-4 border-[#d4af37] space-y-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-200 uppercase tracking-tighter">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            {HOME_ANALYSIS.badge[lang]}
          </div>
          <h2 className="text-lg md:text-2xl font-black text-[#8b0000] mt-3">
            {HOME_ANALYSIS.caseStudyTitle[lang]}
          </h2>
        </div>

        {/* 影片 */}
        <div className="relative group mx-auto max-w-[260px] md:max-w-xs">
           <div className="relative aspect-[9/16] bg-black rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-[#f5e6d3]">
             <iframe 
               className="absolute inset-0 w-full h-full"
               src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&controls=1&enablejsapi=1`} 
               title="跨文化對話範例"
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
             ></iframe>
           </div>
        </div>

        {/* 解說文字 */}
        <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-[#8b0000] space-y-3">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {HOME_ANALYSIS.explanationPast[lang]}
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed font-bold">
            {HOME_ANALYSIS.explanationPresent[lang]}
          </p>
        </div>

        {/* 意見收集框 */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <h3 className="text-base font-black text-slate-800 mb-4 text-center">
            {HOME_ANALYSIS.opinionTitle[lang]}
          </h3>
          <form onSubmit={handleOpinionSubmit} className="space-y-4">
            <textarea 
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
              placeholder={HOME_ANALYSIS.placeholder[lang]}
              className="w-full p-4 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#8b0000] focus:border-transparent outline-none min-h-[100px] resize-none"
            />
            <button 
              type="submit"
              disabled={!opinion.trim()}
              className="w-full bg-[#8b0000] text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#a50000] active:scale-95 transition-all disabled:opacity-50"
            >
              {submitted ? HOME_ANALYSIS.thanks[lang] : HOME_ANALYSIS.submitBtn[lang]}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fcf9f2] text-slate-900 pb-20 md:pb-0 font-serif overflow-x-hidden">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 w-full p-4 md:p-12 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-4xl mx-auto">
          {view === 'home' && renderHome()}

          {view === 'family-tree' && (
            <div className="space-y-6 py-4 animate-in slide-in-from-bottom-5 duration-700">
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#8b0000] border-b-4 border-[#8b0000] inline-block pb-2">
                  {lang === 'vn' ? 'Nhân vật tiêu biểu' : '紅樓人物卡'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FAMILY_MEMBERS.map(m => (
                  <div key={m.id} onClick={() => setSelectedMember(m)} className="bg-white p-5 rounded-xl shadow-md border border-slate-100 hover:scale-[1.02] transition-transform cursor-pointer group">
                    <div className="text-3xl mb-2 group-hover:rotate-12 transition-transform">👤</div>
                    <h3 className="text-lg font-black text-[#8b0000] mb-1">{m.name}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.relation[lang]}</p>
                  </div>
                ))}
              </div>
              {selectedMember && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-6" onClick={() => setSelectedMember(null)}>
                  <div className="bg-white p-6 rounded-2xl max-w-sm w-full relative shadow-2xl border-t-8 border-[#8b0000]" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-2xl font-black text-slate-300 hover:text-red-500">✕</button>
                    <h3 className="text-xl font-black text-[#8b0000] mb-4">{selectedMember.name}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-[#f5e6d3] pl-4">
                      {selectedMember.description[lang]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'stories' && (
            <div className="space-y-8 py-4 animate-in fade-in duration-700">
              <h2 className="text-2xl font-black text-[#8b0000] mb-2">📜 紅樓語境選讀</h2>
              {STORIES.map(story => (
                <div key={story.id} className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-[#8b0000]">
                  <h3 className="text-lg font-black text-[#8b0000] mb-3">{story.title[lang]}</h3>
                  <p className="text-base leading-relaxed text-slate-700 mb-4">{story.content[lang]}</p>
                  <div className="bg-[#fdfbf7] p-4 rounded-lg border border-[#d4af37]">
                    <p className="text-[10px] font-black text-[#d4af37] uppercase mb-1 tracking-widest">💡 文化導航</p>
                    <p className="text-xs text-slate-600 font-bold italic">{story.culturalLesson[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {view === 'crisis' && (
            <div className="space-y-6 py-4 animate-in fade-in duration-500">
              <h2 className="text-2xl font-black text-[#8b0000] mb-2">⚖️ 文化危機分析</h2>
              {CRISES.map(c => (
                <div key={c.id} className="bg-white overflow-hidden rounded-2xl shadow-xl border border-slate-100">
                  <div className="bg-[#8b0000] p-4 text-white text-lg font-bold">
                     {c.topic[lang]}
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-base text-slate-700 bg-slate-50 p-4 rounded-xl border-l-4 border-[#8b0000] italic leading-relaxed">
                      「{c.context[lang]}」
                    </p>
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                      <h4 className="text-xs font-black text-[#8b0000] mb-1">關鍵解析</h4>
                      <p className="text-sm text-slate-800 leading-relaxed font-semibold">{c.crisisExplanation[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(view === 'proverbs' || view === 'daily') && (
            <div className="space-y-4 py-4">
              <h2 className="text-2xl font-black text-[#8b0000] mb-4">
                {view === 'proverbs' ? '🏮 經典諺語' : '☕ 現代場景'}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {(view === 'proverbs' ? PROVERBS : DAILY_PHRASES).map(item => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 flex flex-col gap-3">
                    <div className="border-b border-slate-100 pb-2">
                      <p className="text-xl font-black text-[#8b0000] mb-1">{item.phrase}</p>
                      <p className="text-xs text-slate-400 italic">"{item.literal[lang]}"</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-[#d4af37] uppercase mb-1 tracking-widest">隱含深度</p>
                       <p className="text-base font-black text-slate-800">{item.hidden[lang]}</p>
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
