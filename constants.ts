
import { FamilyMember, Story, CrisisDilemma, PhraseEntry, MultiLangText } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Welcome', vn: 'Chào mừng', jp: 'ようこそ', kr: '환영', 'zh-tw': '首頁', 'zh-cn': '首页' },
  'family-tree': { en: 'People', vn: 'Nhân vật', jp: '登場人物', kr: '인물', 'zh-tw': '家族圖', 'zh-cn': '家族图' },
  stories: { en: 'Stories', vn: 'Câu chuyện', jp: '物語', kr: '이야기', 'zh-tw': '故事', 'zh-cn': '故事' },
  crisis: { en: 'Context', vn: 'Ngữ cảnh', jp: '文脈', kr: '맥락', 'zh-tw': '語境', 'zh-cn': '语境' },
  proverbs: { en: 'Proverbs', vn: 'Tục ngữ', jp: 'ことわざ', kr: '속담', 'zh-tw': '諺語', 'zh-cn': '谚语' },
  daily: { en: 'Daily', vn: 'Hàng ngày', jp: '日常', kr: '일상', 'zh-tw': '現代對話', 'zh-cn': '现代对话' }
};

export const HOME_CONTENT = {
  title: { 
    en: 'Welcome to the Learning World', 
    vn: 'Chào mừng đến với Thế giới Học tập', 
    jp: '学習の世界へようこそ', 
    kr: '배움의 세계에 오신 것을 환영합니다', 
    'zh-tw': '歡迎來到學習天地', 
    'zh-cn': '欢迎来到学习天地' 
  },
  subtitle: { 
    en: 'Learn Cross-Cultural Communication.', 
    vn: 'Học giao tiếp liên văn hóa.', 
    jp: '異文化コミュニケーションを学びましょう。', 
    kr: '상호문화 소통을 배워보세요.', 
    'zh-tw': '學習跨文化溝通。', 
    'zh-cn': '學習跨文化沟通。' 
  },
  significanceTitle: { 
    en: 'Why is this important?', 
    vn: 'Tại sao điều này quan trọng?', 
    jp: 'なぜこれが重要なのですか？', 
    kr: '왜 이것이 중요한가요?', 
    'zh-tw': '為什麼這很重要？', 
    'zh-cn': '为什么這很重要？' 
  },
  significanceDesc: { 
    en: 'Speaking is not just about voice, but understanding others. Different cultures have different ways of thinking. Learning this helps us make better friends and avoid mistakes.',
    vn: 'Nói không chỉ là âm thanh, mà là hiểu người khác. Các nền văn hóa khác nhau có cách suy nghĩ khác nhau. Học điều này giúp chúng ta kết bạn tốt hơn và tránh sai lầm.',
    jp: '話すことは単なる声ではなく、他者を理解することです。文化が違えば考え方も違います。これを学ぶことで、より良い友人を作り、間違いを避けることができます。',
    kr: '말하는 것은 단순히 소리가 아니라 타인을 이해하는 것입니다. 문화마다 생각하는 방식이 다릅니다. 이것을 배우면 더 좋은 친구를 사귀고 실수를 줄일 수 있습니다.',
    'zh-tw': '說話不只是發出聲音，而是要「聽懂」別人的心。不同國家的人，想法會不一樣。學習跨文化溝通，可以幫我們交到好朋友，不會產生誤會。這就是「話中有話」的智慧！',
    'zh-cn': '说话不只是发出声音，而是要「听懂」别人的心。不同国家的人，想法会不一样。学习跨文化沟通，可以帮我们交到好朋友，不会产生误会。这就是「话中有话」的智慧！'
  }
};

export const FAMILY_MEMBERS: FamilyMember[] = [
  { id: 'f1', name: '賈母', family: 'Jia', role: 'blood', generation: 1, relation: { en: 'Supreme Matriarch', vn: 'Lão tổ tông', jp: '最高権威者', kr: '가문의 최고 어른', 'zh-tw': '老祖宗。', 'zh-cn': '老祖宗。' }, description: { en: 'The ultimate authority.', vn: 'Người có quyền lực cao nhất.', jp: '最高の権威者。', kr: '최고 권위자.', 'zh-tw': '全家地位最高的人。', 'zh-cn': '全家地位最高的人。' } },
  { id: 'f2', name: '賈寶玉', family: 'Jia', role: 'blood', generation: 3, relation: { en: 'The Heir', vn: 'Người thừa kế', jp: '跡継ぎ', kr: '후계자', 'zh-tw': '男主角。', 'zh-cn': '男主角。' }, description: { en: 'Loves beauty and freedom.', vn: 'Yêu cái đẹp và tự do.', jp: '美と自由を愛する。', kr: '미와 자유를 사랑함.', 'zh-tw': '含著玉出生的男孩子。', 'zh-cn': '含著玉出生的男孩子。' } },
  { id: 'f3', name: '林黛玉', family: 'Lin', role: 'blood', generation: 3, relation: { en: 'Fragile Poetess', vn: 'Nữ sĩ Lâm Đại Ngọc', jp: 'はかない詩人', kr: '섬세한 시인', 'zh-tw': '女主角。', 'zh-cn': '女主角。' }, description: { en: 'Sentimental genius.', vn: 'Thiên tài đa cảm.', jp: '感性豊かな天才。', kr: '감수성 풍부한 천재.', 'zh-tw': '非常有才華但愛哭的女孩子。', 'zh-cn': '非常有才華但愛哭的女孩子。' } }
];

export const STORIES: Story[] = [
  { 
    id: 's1', 
    title: { en: 'Daiyu Arrives', vn: 'Đại Ngọc đến', jp: '黛玉、来る', kr: '대옥의 도착', 'zh-tw': '林黛玉進賈府', 'zh-cn': '林黛玉进贾府' }, 
    content: { 
      en: 'Daiyu is very careful. She says: "Do not say a word too much."', 
      vn: 'Đại Ngọc rất cẩn thận. Cô nói: "Không nói thừa một lời".', 
      jp: '黛玉はとても慎重です。「一言も多く言わない」と言います。', 
      kr: '대옥은 매우 조심스럽습니다. 그녀는 "말 한마디도 아끼라"고 합니다.', 
      'zh-tw': '林黛玉來到賈家。她很小心，因為這裡規矩很多。她心裡想：「不要多說一句話。」', 
      'zh-cn': '林黛玉來到贾家。她很小心，因为這裡规矩很多。她心里想：「不要多說一句话。」' 
    }, 
    culturalLesson: { 
      en: 'Observation is key.', 
      vn: 'Quan sát là chì cách.', 
      jp: '観察が重要です。', 
      kr: '관찰이 중요합니다.', 
      'zh-tw': '先觀察別人在做什麼，再決定自己怎麼做。', 
      'zh-cn': '先观察别人在做什么，再决定自己怎么做。' 
    } 
  }
];

export const CRISES: CrisisDilemma[] = [
  {
    id: 'c1',
    topic: { en: 'Praise or Evaluation?', vn: 'Khen hay Đánh giá?', jp: '賞賛か評価か？', kr: '칭찬인가 평가인가?', 'zh-tw': '稱讚的背後', 'zh-cn': '称赞的背后' },
    theoryName: { en: 'Face Theory', vn: 'Lý thuyết Thể diện', jp: '面子理論', kr: '체면 이론', 'zh-tw': '面子理論', 'zh-cn': '面子理论' },
    theorySimpleDesc: { en: 'About social image.', vn: 'Về hình ảnh xã hội.', jp: '社会的イメージ。', kr: '사회적 이미지.', 'zh-tw': '每個人都愛面子。', 'zh-cn': '每个人都爱面子。' },
    context: { en: 'Auntie says: "You look like a doll."', vn: 'Dì nói: "Cháu như búp bê".', jp: '「お人形さんみたい」と言われる。', kr: '할머니가 "인형 같다"고 함.', 'zh-tw': '長輩稱讚你：「你長得真好看。」', 'zh-cn': '长辈称赞你：「你长得真好看。」' },
    crisisExplanation: { en: 'Praise is also a judgement.', vn: 'Khen ngợi cũng là sự đánh giá.', jp: '賞賛は評価でもあります。', kr: '칭찬은 곧 평가입니다.', 'zh-tw': '稱讚代表別人在看著你、評價你。', 'zh-cn': '称赞代表别人在看着你、评价你。' },
    positiveView: { en: 'Kindness.', vn: 'Sự tử tế.', jp: '親切。', kr: '친절.', 'zh-tw': '對方在表達友好。', 'zh-cn': '对方在表达友好。' },
    negativeView: { en: 'Pressure.', vn: 'Áp lực.', jp: 'プレッシャー。', kr: '압박.', 'zh-tw': '感覺自己被盯著看。', 'zh-cn': '感觉自己被盯着看。' },
    discussionQuestion: { en: 'How do you react to praise?', vn: 'Bạn phản ứng thế nào khi được khen?', jp: '褒められたらどうする？', kr: '칭찬을 받으면 어떻게 하나요?', 'zh-tw': '被稱讚時，你會尷尬嗎？', 'zh-cn': '被称赞时，你会尴尬吗？' }
  }
];

export const PROVERBS: PhraseEntry[] = [
  { id: 'p1', phrase: '三思而後行', literal: { en: 'Think thrice before act.', vn: 'Tam tư.', jp: '三思。', kr: '심사숙고.', 'zh-tw': '做事以前，多想三次。', 'zh-cn': '做事以前，多想三次。' }, hidden: { en: 'Be careful.', vn: 'Thận trọng.', jp: '慎重に。', kr: '신중하라.', 'zh-tw': '不要急，慢慢想。', 'zh-cn': '不要急，慢慢想。' }, example: '做事要三思而後行。' }
];

export const DAILY_PHRASES: PhraseEntry[] = [
  { id: 'd1', phrase: '改天再約吧', literal: { en: 'Another day.', vn: 'Hôm khác nhé.', jp: 'また今度。', kr: '다음에 봐요.', 'zh-tw': '換個時間再見。', 'zh-cn': '换个时间再见。' }, hidden: { en: 'Polite "No".', vn: 'Từ chối lịch sự.', jp: '丁寧な「いいえ」。', kr: '정중한 거절.', 'zh-tw': '意思就是：我現在不想去。', 'zh-cn': '意思就是：我現在不想去。' }, example: 'A: 明天去玩嗎？ B: 改天再約吧。' }
];
