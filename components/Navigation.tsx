
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
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-[#8b0000]/10 px-1 py-2 flex justify-around items-end z-50 md:relative md:border-t-0 md:flex-col md:w-64 md:h-screen md:justify-start md:pt-16 md:bg-[#fdfbf7] md:border-r md:border-slate-200 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:shadow-none">
      <div className="hidden md:block mb-16 px-10 text-center group cursor-pointer" onClick={() => setView('home')}>
        <div className="w-20 h-20 bg-[#8b0000] rounded-[1.5rem] mx-auto mb-6 flex items-center justify-center text-white text-4xl font-serif shadow-2xl border-4 border-[#d4af37] transform group-hover:rotate-6 transition-all duration-300">紅</div>
        <h1 className="text-2xl font-serif font-black text-[#8b0000] leading-none mb-2">紅樓語境</h1>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">Culture Lab</p>
      </div>
      
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setView(item.id)}
          className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6 md:w-full md:px-10 md:py-6 transition-all flex-shrink-0 ${
            currentView === item.id 
              ? 'text-[#8b0000] font-black md:bg-[#f5e6d3] md:border-r-8 border-[#8b0000]' 
              : 'text-slate-400 hover:text-[#b22222]'
          }`}
        >
          <span className={`text-xl md:text-3xl transition-transform ${currentView === item.id ? 'scale-110' : 'scale-100'}`}>{item.icon}</span>
          <span className="text-[9px] md:text-base font-black tracking-tight md:tracking-normal whitespace-nowrap font-serif">
            {NAV_LABELS[item.id][lang]}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
