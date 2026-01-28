
export type Language = 'en' | 'vn' | 'jp' | 'kr' | 'zh-tw' | 'zh-cn';

export type AppView = 
  | 'home' 
  | 'chapter1' 
  | 'chapter2' 
  | 'chapter3' 
  | 'chapter4';

export interface MultiLangText {
  en: string;
  vn: string;
  jp: string;
  kr: string;
  'zh-tw': string;
  'zh-cn': string;
}

export interface Vocabulary {
  word: string;
  meaning: MultiLangText;
}

export interface Grammar {
  point: string;
  usage: MultiLangText;
}

export interface ChapterContent {
  id: AppView;
  title: MultiLangText;
  classicText: string;
  modernExplanation: MultiLangText;
  videoUrl: string;
  contrast: {
    ancient: MultiLangText;
    modern: MultiLangText;
  };
  vocab: Vocabulary[];
  grammar: Grammar[];
  modernEssay: MultiLangText;
}

// Fixed Error: Module '"../types"' has no exported member 'Scenario' in LessonCard.tsx
export interface Scenario {
  category: string;
  title: string;
  bookContext: string;
  phrase: string;
  literalMeaning: string;
  modernParallel: string;
  hiddenMeaning: MultiLangText;
  strategy: MultiLangText;
  exampleDialog: {
    speakerA: string;
    speakerB: string;
    explanation: MultiLangText;
  };
}
