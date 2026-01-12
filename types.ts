
export type Language = 'en' | 'vn' | 'jp' | 'kr' | 'zh-tw' | 'zh-cn';

export type AppView = 
  | 'home' 
  | 'family-tree' 
  | 'stories' 
  | 'crisis' 
  | 'proverbs' 
  | 'daily' 
  | 'analyzer' 
  | 'ai-tutor';

export interface MultiLangText {
  en: string;
  vn: string;
  jp: string;
  kr: string;
  'zh-tw': string;
  'zh-cn': string;
}

export interface FamilyMember {
  id: string;
  name: string;
  family: 'Jia' | 'Lin' | 'Xue' | 'Shi' | 'Other';
  role: 'blood' | 'spouse' | 'servant' | 'other';
  generation: number; // 1: Elder, 2: Parents, 3: Main Generation, 4: Junior/Staff
  relation: MultiLangText;
  description: MultiLangText;
}

export interface Story {
  id: string;
  title: MultiLangText;
  content: MultiLangText;
  culturalLesson: MultiLangText;
}

export interface CrisisDilemma {
  id: string;
  topic: MultiLangText;
  context: MultiLangText;
  theoryName: MultiLangText;
  theorySimpleDesc: MultiLangText;
  crisisExplanation: MultiLangText;
  positiveView: MultiLangText;
  negativeView: MultiLangText;
  discussionQuestion: MultiLangText;
}

export interface PhraseEntry {
  id: string;
  phrase: string;
  literal: MultiLangText;
  hidden: MultiLangText;
  example: string;
}

export interface Scenario {
  id: string;
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
