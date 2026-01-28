
import React from 'react';
import { AppView, Language } from '../types';
import { NAV_LABELS } from '../constants';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  lang: Language;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, lang }) => {
  const navItems: { id: AppView, icon: string }[] = [
    { id: 'home', icon: '🏠' },
    { id: 'chapter1', icon: '🧒' },
    { id: 'chapter2', icon: '🏮' },
    { id: 'chapter3', icon: '❤️' },
    { id: 'chapter4', icon: '⚖️' },
    { id: 'feedback', icon: '✉️' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t-4 border-[#8b0000] px-1 py-2 flex justify-around items-end z-50 md:relative md:border-t-0 md:flex-col md:w-64 md:h-screen md:justify-start md:pt-10 md:bg-[#fdfbf7] md:border-r-[8px] md:border-[#8b0000] pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:shadow-none flex-shrink-0">
      <div className="hidden md:block mb-10 px-6 text-center group cursor-pointer" onClick={() => setView('home')}>
        <div className="w-16 h-16 bg-[#8b0000] rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#d4af37] text-3xl font-serif shadow-lg border-2 border-[#d4af37] transform group-hover:rotate-[15deg] transition-all duration-500">
          紅
        </div>
        <h1 className="text-xl font-serif font-black text-[#8b0000] leading-none mb-1 tracking-tighter">紅樓語境</h1>
        <p className="text-[8px] text-[#d4af37] uppercase tracking-[0.4em] font-black font-serif">Culture Laboratory</p>
      </div>
      
      <div className="flex justify-around items-center w-full md:flex-col md:gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5 md:w-full md:px-6 md:py-4 transition-all flex-shrink-0 relative overflow-hidden ${
              currentView === item.id 
                ? 'text-[#8b0000] font-black md:bg-[#f5e6d3] md:border-r-4 border-[#d4af37]' 
                : 'text-slate-300 hover:text-[#8b0000]'
            }`}
          >
            <span className={`text-lg md:text-2xl transition-all duration-500 ${currentView === item.id ? 'scale-110 drop-shadow-sm' : 'scale-100 grayscale opacity-40'}`}>{item.icon}</span>
            <span className="text-[9px] md:text-lg font-black tracking-tight md:tracking-normal whitespace-nowrap font-serif">
              {NAV_LABELS[item.id][lang]}
            </span>
            
            {/* 行動端選中指示條 */}
            {currentView === item.id && (
              <div className="absolute top-0 md:hidden w-6 h-1 bg-[#d4af37] rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* 底部裝飾 (僅桌面版) */}
      <div className="hidden md:block mt-auto mb-8 px-6 text-center opacity-10">
        <div className="text-4xl font-serif text-[#8b0000]">❂</div>
      </div>
    </nav>
  );
};

export default Navigation;
