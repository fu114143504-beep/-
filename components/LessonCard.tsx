
import React, { useState } from 'react';
import { Scenario, Language } from '../types';

interface LessonCardProps {
  scenario: Scenario;
  lang: Language;
}

const LessonCard: React.FC<LessonCardProps> = ({ scenario, lang }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Helper to handle Chinese variants (zh-tw, zh-cn)
  const isChinese = lang.startsWith('zh');

  return (
    <div className="w-full perspective-1000 min-h-[520px]">
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front: The Classic Context */}
        <div className={`absolute inset-0 bg-white rounded-xl shadow-xl border-t-8 border-[#8b0000] p-8 flex flex-col backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-widest">{scenario.category}</span>
            <div className="flex gap-1">
               <span className="text-[10px] text-slate-300 font-bold uppercase">{lang} mode</span>
               <span className="text-xl">📜</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#333]">{scenario.title}</h3>
          
          <div className="bg-[#fdfbf7] p-4 rounded-lg mb-6 border-l-4 border-[#d4af37]">
            <p className="text-xs text-slate-500 uppercase font-bold mb-2 tracking-tighter">Classic Context (紅樓背景)</p>
            <p className="text-sm text-blue-900 leading-relaxed italic">"{scenario.bookContext}"</p>
          </div>

          <div className="mt-auto text-center">
            <p className="text-3xl font-serif font-black text-[#8b0000] mb-2">{scenario.phrase}</p>
            <p className="text-sm text-blue-900 mb-6 italic">"{scenario.literalMeaning}"</p>
            <button className="text-[#8b0000] text-xs font-bold border border-[#8b0000] px-6 py-2 rounded-full hover:bg-[#8b0000] hover:text-white transition-all">
              {lang === 'vn' ? 'Giải mã chiến lược' : isChinese ? '查看語境策略' : 'Decode Strategy'}
            </button>
          </div>
        </div>

        {/* Back: Modern Strategy & Interaction */}
        <div className={`absolute inset-0 bg-[#2a2a2a] text-white rounded-xl shadow-2xl p-8 flex flex-col backface-hidden rotate-y-180 ${!isFlipped ? 'opacity-0' : 'opacity-100 overflow-y-auto'}`}>
          <div className="mb-6">
            <h4 className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-2">Modern Parallel (現代對照)</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{scenario.modernParallel}</p>
          </div>

          <div className="mb-6 bg-[#3a3a3a] p-4 rounded-lg border-l-2 border-red-500">
            <h4 className="text-red-400 font-bold text-[10px] uppercase mb-1">
              {lang === 'vn' ? 'Ý nghĩa ẩn giấu' : isChinese ? '隱藏意圖 (深層含義)' : 'The Hidden Intent'}
            </h4>
            <p className="text-lg font-serif mb-4 leading-snug">{scenario.hiddenMeaning[lang]}</p>
            
            <h4 className="text-green-400 font-bold text-[10px] uppercase mb-1">
              {lang === 'vn' ? 'Chiến lược đề xuất' : isChinese ? '建議應對策略' : 'Recommended Strategy'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{scenario.strategy[lang]}</p>
          </div>

          <div className="mt-auto">
            <div className="bg-black/20 p-4 rounded-xl text-xs space-y-3">
              <p><span className="text-[#d4af37] font-bold">A:</span> {scenario.exampleDialog.speakerA}</p>
              <p><span className="text-slate-400 font-bold">B:</span> {scenario.exampleDialog.speakerB}</p>
              <p className="text-[10px] italic text-blue-900 pt-2 border-t border-white/5">{scenario.exampleDialog.explanation[lang]}</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default LessonCard;
