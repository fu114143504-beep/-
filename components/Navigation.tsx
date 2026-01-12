
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
    { id: 'home', icon: '🏯' },
    { id: 'family-tree', icon: '🌳' },
    { id: 'stories', icon: '📖' },
    { id: 'crisis', icon: '⚖️' },
    { id: 'proverbs', icon: '💡' },
    { id: 'daily', icon: '💬' },
    { id: 'analyzer', icon: '🔍' },
    { id: 'ai-tutor', icon: '👨‍🏫' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 flex justify-around items-center z-50 md:relative md:border-t-0 md:flex-col md:w-48 md:h-screen md:justify-start md:pt-8 md:bg-[#fdfbf7] overflow-x-auto md:overflow-hidden">
      <div className="hidden md:block mb-8 px-6 text-center">
        <h1 className="text-xl font-serif font-bold text-[#8b0000]">紅樓語境</h1>
        <p className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold">ZenContext Lab</p>
      </div>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setView(item.id)}
          className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 md:w-full md:px-6 md:py-3 transition-all flex-shrink-0 ${
            currentView === item.id 
              ? 'text-[#8b0000] font-bold md:bg-[#f5e6d3] md:border-l-4 border-[#8b0000]' 
              : 'text-slate-400 hover:text-[#b22222]'
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-[8px] md:text-sm whitespace-nowrap">{NAV_LABELS[item.id][lang]}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
