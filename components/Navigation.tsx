
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
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t-4 border-[#8b0000] px-1 py-3 flex justify-around items-end z-50 md:relative md:border-t-0 md:flex-col md:w-72 md:h-screen md:justify-start md:pt-16 md:bg-[#fdfbf7] md:border-r-[12px] md:border-[#8b0000] pb-safe shadow-[0_-5px_30px_rgba(0,0,0,0.15)] md:shadow-none">
      <div className="hidden md:block mb-16 px-10 text-center group cursor-pointer" onClick={() => setView('home')}>
        <div className="w-24 h-24 bg-[#8b0000] rounded-[1.8rem] mx-auto mb-8 flex items-center justify-center text-[#d4af37] text-5xl font-serif shadow-[0_15px_35px_rgba(139,0,0,0.4)] border-4 border-[#d4af37] transform group-hover:rotate-[15deg] transition-all duration-500">
          紅
        </div>
        <h1 className="text-3xl font-serif font-black text-[#8b0000] leading-none mb-3 tracking-tighter">紅樓語境</h1>
        <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.5em] font-black font-serif">Culture Laboratory</p>
      </div>
      
      <div className="flex justify-around items-center w-full md:flex-col md:gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-8 md:w-full md:px-10 md:py-8 transition-all flex-shrink-0 relative overflow-hidden ${
              currentView === item.id 
                ? 'text-[#8b0000] font-black md:bg-[#f5e6d3] md:border-r-[10px] border-[#d4af37]' 
                : 'text-slate-300 hover:text-[#8b0000]'
            }`}
          >
            <span className={`text-xl md:text-4xl transition-all duration-500 ${currentView === item.id ? 'scale-125 md:scale-110 drop-shadow-md' : 'scale-100 grayscale opacity-50'}`}>{item.icon}</span>
            <span className="text-[10px] md:text-2xl font-black tracking-tighter md:tracking-tight whitespace-nowrap font-serif">
              {NAV_LABELS[item.id][lang]}
            </span>
            
            {/* 行動端選中指示條 */}
            {currentView === item.id && (
              <div className="absolute top-0 md:hidden w-8 h-1.5 bg-[#d4af37] rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
