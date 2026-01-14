
import { FamilyMember, Story, CrisisDilemma, PhraseEntry, MultiLangText } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Welcome', vn: 'Chào mừng', jp: 'ようこそ', kr: '환영', 'zh-tw': '首頁', 'zh-cn': '首页' },
  'family-tree': { en: 'People', vn: 'Nhân vật', jp: '登場人物', kr: '인물', 'zh-tw': '家族圖', 'zh-cn': '家族图' },
  stories: { en: 'Stories', vn: 'Câu chuyện', jp: '物語', kr: '이야기', 'zh-tw': '紅樓故事', 'zh-cn': '紅樓故事' },
  crisis: { en: 'Context', vn: 'Ngữ cảnh', jp: '文脈', kr: '맥락', 'zh-tw': '文化危機', 'zh-cn': '文化危机' },
  proverbs: { en: 'Proverbs', vn: 'Tục ngữ', jp: 'ことわざ', kr: '속담', 'zh-tw': '諺語', 'zh-cn': '谚语' },
  daily: { en: 'Daily', vn: 'Hàng ngày', jp: '日常', kr: '일상', 'zh-tw': '現代對話', 'zh-cn': '現代對話' }
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
  { id: 'f1', name: '賈母', family: 'Jia', role: 'blood', generation: 1, relation: { en: 'Supreme Matriarch', vn: 'Lão tổ tông', jp: '最高権威者', kr: '가문의 최고 어른', 'zh-tw': '老祖宗。', 'zh-cn': '老祖宗。' }, description: { en: 'The ultimate authority.', vn: 'Người có quyền lực cao nhất.', jp: '最高の権威者。', kr: '최고 권위자.', 'zh-tw': '她是全家地位最高的人，非常疼愛孫子寶玉。', 'zh-cn': '她是全家地位最高的人，非常疼愛孫子寶玉。' } },
  { id: 'f2', name: '賈寶玉', family: 'Jia', role: 'blood', generation: 3, relation: { en: 'The Heir', vn: 'Người thừa kế', jp: '跡継ぎ', kr: '후계자', 'zh-tw': '男主角。', 'zh-cn': '男主角。' }, description: { en: 'Loves beauty and freedom.', vn: 'Yêu cái đẹp và tự do.', jp: '美と自由を愛する。', kr: '미와 자유를 사랑함.', 'zh-tw': '含著玉出生的男孩子，他不喜歡當官，只喜歡美好的事物。', 'zh-cn': '含著玉出生的男孩子，他不喜歡當官，只喜歡美好的事物。' } },
  { id: 'f3', name: '林黛玉', family: 'Lin', role: 'blood', generation: 3, relation: { en: 'Fragile Poetess', vn: 'Nữ sĩ Lâm Đại Ngọc', jp: 'はかない詩人', kr: '섬세한 시인', 'zh-tw': '女主角。', 'zh-cn': '女主角。' }, description: { en: 'Sentimental genius.', vn: 'Thiên tài đa cảm.', jp: '感性豊かな天才。', kr: '감수성 풍부한 천재.', 'zh-tw': '非常有才華但心思細膩、容易傷心的女孩子。', 'zh-cn': '非常有才華但心思細膩、容易傷心的女孩子。' } }
];

export const STORIES: Story[] = [
  { id: 's1', title: { en: 'I. The Arrival', vn: 'I. Lâm Đại Ngọc tiến Giả phủ', jp: 'I. 黛玉、ジャ府に入る', kr: 'I. 대옥의 입성', 'zh-tw': '一、寄人籬下：林黛玉進賈府', 'zh-cn': '一、寄人篱下：林黛玉进贾府' }, content: { en: 'Young Lin Daiyu arrives at the grand Jia Mansion. She is extremely cautious, remembering her mother\'s advice: "Do not say a word too much."', vn: 'Lâm Đại Ngọc mồ côi mẹ, được đón về Giả phủ. Cô vô cùng cẩn trọng, nhớ lời mẹ dặn: "Không nói thừa một lời".', jp: '母を亡くした黛玉は、豪華なジャ府に到着します。「一言も多く言わない」という慎重な振る舞いをします。', kr: '어머니를 여읜 대옥이 가씨 가문에 도착합니다. 말 한마디도 아끼라는 충고를 되새깁니다.', 'zh-tw': '自幼喪母的林黛玉步入榮國府，步步留心，時時在意。她謹記教誨：「不可多說一句話，不可多走一步路」。', 'zh-cn': '自幼丧母的林黛玉步入荣国府，步步留心，时时在意。她谨记教诲：「不可多说一句话，不可多走一步路」。' }, culturalLesson: { en: 'Observation is key in high-context culture.', vn: 'Quan sát là yếu tố then chốt.', jp: '観察が重要です。', kr: '관찰이 중요합니다.', 'zh-tw': '在高語境文化中，細微的觀察與謹言慎行是融入社會的關鍵。', 'zh-cn': '在高语境文化中，细微的观察与谨言慎行是融入社会的关键。' } },
  { id: 's2', title: { en: 'II. Gold and Jade', vn: 'II. Kim Ngọc lương duyên', jp: 'II. 金玉の縁', kr: 'II. 금옥의 인연', 'zh-tw': '二、金玉良緣：薛寶釵的到來', 'zh-cn': '二、金玉良缘：薛宝钗の到来' }, content: { en: 'Xue Baochai arrives with a golden locket. People say it matches Baoyu\'s jade. This puts pressure on Daiyu.', vn: 'Tiết Bảo Thoa đến với chiếc khóa vàng, tạo nên lời đồn về "Kim Ngọc lương duyên". Điều này gây áp lực cho Đại Ngọc.', jp: '宝釵が金の首飾りを持って現れ、宝玉の玉との縁が噂されます。これが黛玉の壓力になります。', kr: '보차가 금노리개를 가지고 오자 소문이 돕니다. 대옥에게는 압박이 됩니다.', 'zh-tw': '端莊大方的薛寶釵帶著金鎖來到賈府，眾人傳言「金鎖要配有玉的」，這給了敏感的黛玉巨大的壓力。', 'zh-cn': '端庄大方的薛宝钗带着金锁来到贾府，众人传言「金锁要配有玉的」，这给了敏感的黛玉巨大的压力。' }, culturalLesson: { en: 'Collective harmony vs individual romance.', vn: 'Hòa hợp tập thể và lãng mạn cá nhân.', jp: '集団の調和。', kr: '집단의 조화.', 'zh-tw': '傳統社會中，家族的利益往往高於個人的情感追求。', 'zh-cn': '传统社会中，家族的利益往往高于个人的情感追求。' } },
  { id: 's3', title: { en: 'III. Prosperity', vn: 'III. Đỉnh cao thịnh vượng', jp: 'III. 栄華の絶頂', kr: 'III. 번영의 정점', 'zh-tw': '三、大觀盛世：元春省親與繁華', 'zh-cn': '三、大观盛世：元春省亲与繁华' }, content: { en: 'The mansion builds the Grand View Garden. It is the peak of their wealth, but financial roots are rotting.', vn: 'Giả phủ xây dựng Đại Quan Viên. Đây là đỉnh cao giàu sang, nhưng tài chính đang cạn kiệt.', jp: '栄華の頂点ですが、その裏では財政の腐敗が進んでいます。', kr: '영광의 정점이지만 내부는 부패하고 있습니다.', 'zh-tw': '為了迎接元春省親，賈府耗費巨資建造了大觀園。然而盛世之下，財政早已空虛。', 'zh-cn': '为了迎接元春省亲，贾府耗费巨资建造了大观园。然而盛世之下，财政早已空虚。' }, culturalLesson: { en: 'Maintaining Face at all costs.', vn: 'Giữ thể diện bằng mọi giá.', jp: '面子を保つ。', kr: '체면 유지.', 'zh-tw': '表面的繁榮往往是為了維持面子，核心的危機往往被掩蓋在儀式之下。', 'zh-cn': '表面的繁荣往往是为了维持面子，核心的危机往往被掩盖在仪式之下。' } },
  { id: 's4', title: { en: 'IV. Burying Flowers', vn: 'IV. Táng hoa', jp: 'IV. 葬花', kr: 'IV. 꽃을 묻다', 'zh-tw': '四、葬花吟：黛玉的孤獨與抗爭', 'zh-cn': '四、葬花吟：黛玉的孤独与抗争' }, content: { en: 'Daiyu buries fallen petals, predicting her own end. Her sensitivity clashes with the cold world.', vn: 'Đại Ngọc chôn cánh hoa tàn. Sự nhạy cảm của cô xung đột với thế giới lạnh lẽo.', jp: '散りゆく花を見た黛玉は花を葬ります。彼女の感性は現実と衝突します。', kr: '대옥은 꽃잎을 묻으며 종말을 예고합니다. 감수성과 현실의 충돌입니다.', 'zh-tw': '看著殘花落盡，黛玉築塚埋花。在大宅門的冷酷現實中，她那顆純淨的靈魂無處安放。', 'zh-cn': '看着残花落尽，黛玉筑冢埋花。在大宅门的冷酷现实中，她那颗纯净的灵魂无处安放。' }, culturalLesson: { en: 'Individual crushed by structures.', vn: 'Cá nhân bị nghiền nát.', jp: '個人と集団。', kr: '개인과 집단.', 'zh-tw': '在高壓的集體主義結構下，敏感而獨立的靈魂往往面對巨大的孤獨感。', 'zh-cn': '在高压的集体主义结构下，敏感而独立的灵魂往往面对巨大的孤独感。' } },
  { id: 's5', title: { en: 'V. The Dream Ends', vn: 'V. Mộng tàn', jp: 'V. 夢の終わり', kr: 'V. 꿈의 끝', 'zh-tw': '五、夢醒時分：賈府的沒落與歸宿', 'zh-cn': '五、梦醒时分：賈府的没落与归宿' }, content: { en: 'The mansion is raided. Baoyu becomes a monk, realizing worldly glory is just a dream.', vn: 'Giả phủ bị tịch thu tài sản. Bảo Ngọc đi tu sau khi nhận ra vinh quang chỉ là một giấc mộng.', jp: 'ジャ家は没落し、宝玉は出家します。すべては夢であったと悟ります。', kr: '가문은 몰락하고 보옥은 출가합니다. 모든 영광이 꿈이었음을 깨닫습니다.', 'zh-tw': '最終賈府被抄家，昔日的繁華轉眼成空。寶玉看破紅塵，隨僧道而去。', 'zh-cn': '最终贾府被抄家，昔日的繁华转眼成空。宝玉看破红尘，随僧道而去。' }, culturalLesson: { en: 'Earthly glory is temporary.', vn: 'Vinh quang là tạm thời.', jp: '諸行無常。', kr: '무상함.', 'zh-tw': '真正的智慧在於超脫外在的興衰與名利。', 'zh-cn': '真正的智慧在于超脱外在的兴衰与名利。' } }
];

export const CRISES: CrisisDilemma[] = [
  { id: 'c1', topic: { en: 'Praise and Face', vn: 'Khen và Thể diện', jp: '賞賛と面子', kr: '칭찬과 체면', 'zh-tw': '情境一：稱讚與面子', 'zh-cn': '情境一：称赞与面子' }, theoryName: { en: 'Face Theory', vn: 'Lý thuyết Thể diện', jp: '面子理論', kr: '체면 이론', 'zh-tw': '面子理論', 'zh-cn': '面子理论' }, theorySimpleDesc: { en: 'Social image management.', vn: 'Quản lý hình ảnh xã hội.', jp: '社会的イメージ管理。', kr: '사회적 이미지 관리.', 'zh-tw': '稱讚是給對方「面子」，也是一種「評價」。', 'zh-cn': '称赞是给对方「面子」，也是一种「评价」。' }, context: { en: 'Elders praise Daiyu as "Like a doll."', vn: 'Trưởng bối khen Đại Ngọc "như búp bê".', jp: '「お人形さんみたい」と褒められる。', kr: '어른들이 대옥을 칭찬함.', 'zh-tw': '賈母稱讚黛玉「像個畫裡的人兒似的」。', 'zh-cn': '贾母称赞黛玉「像个画里的人儿似的」。' }, crisisExplanation: { en: 'Praising represents evaluation.', vn: 'Khen ngợi thể hiện sự đánh giá.', jp: '賞賛は評価でもあります。', kr: '칭찬은 곧 평가입니다.', 'zh-tw': '稱讚代表你的一舉一動正在被「評分」。', 'zh-cn': '称赞代表你的一举一动正在被「评分」。' }, positiveView: { en: 'Hospitality.', vn: 'Hiếu khách.', jp: '親切。', kr: '친절.', 'zh-tw': '對方在表達友好。', 'zh-cn': '对方在表达友好。' }, negativeView: { en: 'Judgmental pressure.', vn: 'Áp lực phán xét.', jp: 'プレッシャー。', kr: '압박.', 'zh-tw': '感覺自己被盯著看。', 'zh-cn': '感觉自己被盯着看。' }, discussionQuestion: { en: 'How do you react to elder praise?', vn: 'Bạn phản ứng thế nào khi người lớn khen?', jp: '長老に褒められたら？', kr: '칭찬을 받으면 어떻게 하나요?', 'zh-tw': '被稱讚時，你會尷尬嗎？', 'zh-cn': '被称赞时，你会尴尬吗？' } },
  { id: 'c2', topic: { en: 'Indirect Refusal', vn: 'Từ chối gián tiếp', jp: '間接的な拒絶', kr: '간접적 거절', 'zh-tw': '情境二：委婉地說「不」', 'zh-cn': '情境二：委婉地说「不」' }, theoryName: { en: 'Politeness Strategy', vn: 'Chiến lược lịch sự', jp: '丁寧さ', kr: '공손성', 'zh-tw': '禮貌原則', 'zh-cn': '礼貌原则' }, theorySimpleDesc: { en: 'Saving face while saying no.', vn: 'Giữ thể diện khi từ chối.', jp: '面子を保つ拒絶。', kr: '체면 유지.', 'zh-tw': '拒絕時給予台階。', 'zh-cn': '拒绝时给予台阶。' }, context: { en: 'Baochai says "I see later."', vn: 'Bảo Thoa bảo "để sau nhé".', jp: '宝釵が「また後で」と言う。', kr: '보차가 "나중에 보자"고 함.', 'zh-tw': '「改天再聚」通常代表現在不想聚。', 'zh-cn': '「改天再聚」通常代表现在不想聚。' }, crisisExplanation: { en: 'Direct NO is seen as aggressive.', vn: 'Nói KHÔNG trực tiếp bị coi là hung hăng.', jp: '直球は攻撃的です。', kr: '직설적인 "아니오"는 공격적입니다.', 'zh-tw': '直接說「不行」會傷感情。', 'zh-cn': '直接说「不行」会伤感情。' }, positiveView: { en: 'Harmony.', vn: 'Hòa hợp.', jp: '調和。', kr: '조화.', 'zh-tw': '顧全大局。', 'zh-cn': '顾全大局。' }, negativeView: { en: 'Confusion.', vn: 'Bối rối.', jp: '混亂。', kr: '혼란.', 'zh-tw': '讓人誤會。', 'zh-cn': '让人误会。' }, discussionQuestion: { en: 'How do you say no to a party?', vn: 'Làm sao từ chối tiệc?', jp: 'パーティーの断り方は？', kr: '초대 거절 방법은?', 'zh-tw': '你收過哪些客氣的拒絕？', 'zh-cn': '你收过哪些客气的拒绝？' } }
];

export const PROVERBS: PhraseEntry[] = [
  { id: 'p1', phrase: '三思而後行', literal: { en: 'Think thrice.', vn: 'Tam tư.', jp: '三思。', kr: '심사숙고.', 'zh-tw': '做事以前，多想三次。', 'zh-cn': '做事以前，多想三次。' }, hidden: { en: 'Be careful.', vn: 'Thận trọng.', jp: '慎重に。', kr: '신중하라.', 'zh-tw': '不要急，慢慢想。', 'zh-cn': '不要急，慢慢想。' }, example: '做事要三思而後行。' },
  { id: 'p2', phrase: '世事洞明皆學問', literal: { en: 'EQ is wisdom.', vn: 'EQ là trí tuệ.', jp: '世情。', kr: '세상사.', 'zh-tw': '看透人情就是學問。', 'zh-cn': '看透人情就是学问。' }, hidden: { en: 'Social skill.', vn: 'Kỹ năng xã hội.', jp: '知恵。', kr: '지혜.', 'zh-tw': '社交很重要。', 'zh-cn': '社交很重要。' }, example: '世事洞明皆學問。' }
];

export const DAILY_PHRASES: PhraseEntry[] = [
  { id: 'd1', phrase: '改天再約吧', literal: { en: 'Another day.', vn: 'Hôm khác nhé.', jp: 'また今度。', kr: '다음에 봐요.', 'zh-tw': '換個時間再見。', 'zh-cn': '换个时间再见。' }, hidden: { en: 'Polite "No".', vn: 'Từ chối lịch sự.', jp: '丁寧な拒絶。', kr: '정중한 거절.', 'zh-tw': '意思就是：我現在不想去。', 'zh-cn': '意思就是：我现在不想去。' }, example: 'A: 明天去玩嗎？ B: 改天再約吧。' },
  { id: 'd2', phrase: '你吃飯了嗎？', literal: { en: 'Have you eaten?', vn: 'Ăn chưa?', jp: '食べた？', kr: '밥 먹었니?', 'zh-tw': '簡單的問候。', 'zh-cn': '简单的问候。' }, hidden: { en: 'Greeting.', vn: 'Lời chào.', jp: '挨拶。', kr: '인사.', 'zh-tw': '不代表要請客。', 'zh-cn': '不代表要请客。' }, example: '你吃飯了嗎？' }
];
