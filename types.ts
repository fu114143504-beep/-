
export type Language = 'en' | 'vn' | 'jp' | 'kr' | 'zh-tw' | 'zh-cn';

export type AppView = 
  | 'home' 
  | 'chapter1' 
  | 'chapter2' 
  | 'chapter3' 
  | 'chapter4'
  | 'feedback';

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
  formIframe?: string; // 新增章節專屬表單
}

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
