
import React, { useState, useEffect, useRef } from 'react';
import { AppView, Language, FamilyMember } from './types';
import { FAMILY_MEMBERS, STORIES, CRISES, DAILY_PHRASES, PROVERBS, HOME_CONTENT } from './constants';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [lang, setLang] = useState<Language>('zh-tw');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Ensure content scrolls to top when view changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [view]);

  const renderLanguageSwitcher = () => (
    <div className="fixed top-4 right-4 z-[60] flex flex-wrap gap-1 bg-white/90 backdrop-blur p-1.5 rounded-2xl shadow-xl border border-[#d4af37] max-w-[280px] md:max-w-none">
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
          className={`px-2.5 py-1.5 rounded-xl text-[10px] font-black transition-all ${
            lang === l.id 
              ? 'bg-[#8b0000] text-[#f5e6d3]' 
              : 'text-slate-400 hover:text-[#8b0000]'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fcf9f2] text-slate-800 pb-20 md:pb-0 font-serif overflow-hidden">
      <Navigation currentView={view} setView={setView} lang={lang} />
      {renderLanguageSwitcher()}

      <main ref={mainRef} className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-10 overflow-y-auto h-screen scroll-smooth">
        {view === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-[#8b0000] rounded-3xl p-10 text-[#f5e6d3] shadow-2xl border-4 border-[#d4af37] relative overflow-hidden">
               <h1 className="text-4xl md:text-6xl font-black mb-4">{HOME_CONTENT.title[lang]}</h1>
               <p className="text-lg opacity-90 max-w-xl">
                 {HOME_CONTENT.subtitle[lang]}
               </p>
               <div className="absolute bottom-[-20px] right-[-20px] text-[150px] opacity-10 select-none">紅</div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f5e6d3] border-t-8 border-t-[#8b0000]">
               <h2 className="text-2xl font-black text-[#8b0000] mb-4 flex items-center gap-2">
                 <span>🇻🇳</span> {HOME_CONTENT.significanceTitle[lang]}
               </h2>
               <p className="text-slate-700 leading-relaxed text-lg italic">
                 {HOME_CONTENT.significanceDesc[lang]}
               </p>
            </div>
          </div>
        )}

        {view === 'family-tree' && (
          <div className="space-y-16 animate-in slide-in-from-bottom-5 duration-700">
            <div className="text-center">
              <h2 className="text-4xl font-black text-slate-900 border-b-4 border-[#8b0000] inline-block pb-2">
                {lang === 'vn' ? 'Giả Phủ Hệ Thống' : '大觀園：家族互動林'}
              </h2>
              <p className="text-slate-500 mt-4 text-sm uppercase tracking-widest font-bold">Interactive Trees • Bloodline Trunk • Side Branches</p>
            </div>

            {['Jia', 'Lin', 'Xue', 'Shi', 'Other'].map(familyName => {
              const members = FAMILY_MEMBERS.filter(m => m.family === familyName);
              if (members.length === 0) return null;

              return (
                <section key={familyName} className="p-8 bg-white rounded-[40px] shadow-sm border border-slate-100 relative overflow-visible mb-12">
                  <div className="absolute top-4 right-8 text-6xl font-black opacity-5 pointer-events-none select-none uppercase">{familyName}</div>
                  <h3 className="text-2xl font-black mb-12 flex items-center gap-2 border-l-4 border-[#8b0000] pl-4">
                    {familyName === 'Jia' ? (lang === 'vn' ? 'Giả Phủ (Trung tâm)' : '賈府 (血緣主幹)') : 
                     familyName === 'Lin' ? (lang === 'vn' ? 'Lâm Phủ' : '林府') :
                     familyName === 'Xue' ? (lang === 'vn' ? 'Tiết Phủ' : '薛府') :
                     familyName === 'Shi' ? (lang === 'vn' ? 'Sử Phủ' : '史府') : (lang === 'vn' ? 'Khác' : '其他')}
                  </h3>

                  <div className="flex flex-col gap-12">
                    {[1, 2, 3, 4].map(gen => {
                      const genMembers = members.filter(m => m.generation === gen);
                      if (genMembers.length === 0) return null;

                      const bloodline = genMembers.filter(m => m.role === 'blood');
                      const others = genMembers.filter(m => m.role !== 'blood');

                      return (
                        <div key={gen} className="relative flex flex-col items-center">
                           <div className="mb-4 text-[10px] font-black tracking-widest text-slate-300 uppercase">Gen {gen}</div>
                           
                           <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full relative">
                              <div className="flex-1 flex flex-wrap justify-end gap-3 order-2 md:order-1">
                                {others.filter((_, i) => i % 2 === 0).map(m => (
                                  <MemberNode key={m.id} member={m} lang={lang} isSelected={selectedMember?.id === m.id} onClick={() => setSelectedMember(m)} />
                                ))}
                              </div>
                              <div className="flex-initial flex flex-wrap justify-center gap-6 z-10 order-1 md:order-2">
                                {bloodline.map(m => (
                                  <MemberNode key={m.id} member={m} lang={lang} isSelected={selectedMember?.id === m.id} onClick={() => setSelectedMember(m)} isBlood />
                                ))}
                              </div>
                              <div className="flex-1 flex flex-wrap justify-start gap-3 order-3">
                                {others.filter((_, i) => i % 2 !== 0).map(m => (
                                  <MemberNode key={m.id} member={m} lang={lang} isSelected={selectedMember?.id === m.id} onClick={() => setSelectedMember(m)} />
                                ))}
                              </div>
                           </div>
                           {gen < 4 && members.some(m => m.generation > gen && m.role === 'blood') && (
                             <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-[#8b0000] opacity-10"></div>
                           )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            {selectedMember && (
              <div className="fixed inset-x-4 bottom-24 md:inset-x-auto md:right-10 md:w-96 z-[70] bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#8b0000] animate-in slide-in-from-right duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-black text-[#8b0000]">{selectedMember.name}</h4>
                    <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mt-1">{selectedMember.family} • {selectedMember.role}</p>
                  </div>
                  <button onClick={() => setSelectedMember(null)} className="text-slate-300 hover:text-red-500 text-xl">✕</button>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl mb-4 text-xs font-bold text-slate-500 uppercase">
                  {selectedMember.relation[lang]}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm italic border-l-4 border-slate-100 pl-4 whitespace-pre-wrap">
                  {selectedMember.description[lang]}
                </p>
              </div>
            )}
          </div>
        )}

        {view === 'stories' && (
          <div className="space-y-12 animate-in fade-in duration-700 pb-24">
            <h2 className="text-4xl font-black text-slate-900 border-b-4 border-[#8b0000] inline-block pb-2 mb-8">
              {lang === 'vn' ? 'Kịch bản Hồng Lâu' : '紅樓故事：經典語境教案'}
            </h2>
            {STORIES.map(story => (
              <div key={story.id} className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 bg-[#8b0000] rounded-full flex items-center justify-center text-white text-2xl">📜</div>
                   <h3 className="text-3xl font-black text-[#8b0000]">{story.title[lang]}</h3>
                </div>
                <p className="text-xl leading-loose mb-10 text-slate-700 font-serif border-l-8 border-[#f5e6d3] pl-8">
                  {story.content[lang]}
                </p>
                <div className="bg-[#fdfbf7] p-8 md:p-10 rounded-[40px] border-t-4 border-[#d4af37]">
                   <p className="text-sm font-black text-[#d4af37] uppercase mb-6 tracking-[0.2em] flex items-center gap-3">
                     <span className="text-xl">💡</span> 文化深度解析 (Cultural Insight)
                   </p>
                   <p className="text-base text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4">
                     {story.culturalLesson[lang]}
                   </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'crisis' && (
          <div className="space-y-10 animate-in fade-in duration-500 pb-24">
            <h2 className="text-3xl font-black text-slate-900 border-b-2 border-[#8b0000] pb-2">
              {lang === 'vn' ? 'Thảo luận đa văn hóa' : '文化危機：跨文化衝突'}
            </h2>
            {CRISES.map(c => (
              <div key={c.id} className="bg-white overflow-hidden rounded-3xl shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                <div className="bg-[#8b0000] p-6 text-white flex justify-between items-center">
                   <h3 className="text-xl font-bold">{c.topic[lang]}</h3>
                   <span className="text-xs font-black tracking-widest opacity-50 uppercase">Scenario {c.id.substring(1)}</span>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-[#d4af37] uppercase mb-2 tracking-widest">Story Context (紅樓情境)</h4>
                    <p className="text-slate-700 leading-relaxed italic border-l-4 border-[#8b0000] pl-4 bg-slate-50 py-2">{c.context[lang]}</p>
                  </div>
                  
                  <div className="bg-[#fdfbf7] p-5 rounded-xl border border-[#f5e6d3]">
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-[#8b0000] uppercase mb-1">Theoretical Background (理論名稱)</h4>
                      <p className="font-black text-lg text-slate-900">{c.theoryName[lang]}</p>
                      <p className="text-sm text-slate-600 mt-1">{c.theorySimpleDesc[lang]}</p>
                    </div>
                    <div className="pt-4 border-t border-[#f5e6d3]">
                      <h4 className="text-xs font-bold text-[#8b0000] uppercase mb-1">Cross-Cultural Crisis (為什麼是危機？)</h4>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">{c.crisisExplanation[lang]}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                      <h4 className="text-[10px] font-black text-green-700 uppercase mb-2 flex items-center gap-1">
                        <span>✅</span> Positive View (正向思考)
                      </h4>
                      <p className="text-xs text-green-900 leading-relaxed">{c.positiveView[lang]}</p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                      <h4 className="text-[10px] font-black text-red-700 uppercase mb-2 flex items-center gap-1">
                        <span>❌</span> Negative View (反向思考)
                      </h4>
                      <p className="text-xs text-red-900 leading-relaxed">{c.negativeView[lang]}</p>
                    </div>
                  </div>

                  <div className="bg-red-900 text-white p-6 rounded-2xl shadow-inner border-2 border-[#d4af37]">
                     <h4 className="font-black mb-3 flex items-center gap-2">
                       <span className="text-2xl">🤔</span>
                       {lang === 'vn' ? 'Quan điểm của bạn' : '你的觀點'}：
                     </h4>
                     <p className="text-xl font-bold">{c.discussionQuestion[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(view === 'proverbs' || view === 'daily') && (
          <div className="space-y-8 animate-in fade-in duration-500 pb-24">
            <h2 className="text-3xl font-black text-slate-900 border-b-2 border-[#8b0000] pb-2">
              {view === 'proverbs' ? '中國諺語' : '日常生活對話'}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {(view === 'proverbs' ? PROVERBS : DAILY_PHRASES).map(item => (
                <div key={item.id} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <p className="text-3xl font-black text-[#8b0000] mb-2">{item.phrase}</p>
                    <p className="text-sm text-slate-400 italic">"{item.literal[lang]}"</p>
                  </div>
                  <div className="flex-1 space-y-4">
                     <div>
                        <p className="text-xs font-bold text-[#d4af37] uppercase mb-1">話中有話</p>
                        <p className="text-lg font-bold text-slate-800">{item.hidden[lang]}</p>
                     </div>
                     <div className="pt-4 border-t border-slate-50">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">使用範例</p>
                        <p className="text-sm bg-slate-50 p-3 rounded-lg font-mono">{item.example}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

interface MemberNodeProps {
  member: FamilyMember;
  lang: Language;
  isSelected: boolean;
  onClick: () => void;
  isBlood?: boolean;
}

const MemberNode: React.FC<MemberNodeProps> = ({ member, lang, isSelected, onClick, isBlood }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-300 rounded-xl px-4 py-3 border-2 shadow-sm text-center select-none group relative ${
      isBlood ? 'w-40 md:w-48 font-black' : 'w-32 md:w-36 text-xs'
    } ${
      isSelected 
      ? 'bg-[#8b0000] text-[#f5e6d3] border-[#d4af37] scale-110 shadow-xl z-20' 
      : 'bg-white border-slate-100 hover:border-[#8b0000] text-slate-700 hover:shadow-md'
    }`}
  >
    <div className="truncate">{member.name}</div>
    <div className={`text-[8px] uppercase tracking-tighter transition-opacity mt-1 ${isSelected ? 'opacity-80' : 'opacity-40'}`}>
       {member.relation[lang]}
    </div>
    {!isBlood && member.role === 'spouse' && (
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center text-[8px] text-white shadow">💍</div>
    )}
    {!isBlood && member.role === 'servant' && (
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center text-[8px] text-white shadow">⚙️</div>
    )}
  </div>
);

export default App;
