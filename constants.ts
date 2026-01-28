
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
    en: 'What is Cross-Cultural Communication?', 
    vn: 'Giao tiếp liên văn hóa là gì?', 
    jp: '異文化コミュニケーションとは？', 
    kr: '상호문화 소통이란 무엇인가요?', 
    'zh-tw': '什麼是跨文化溝通？', 
    'zh-cn': '什么是跨文化沟通？' 
  },
  subtitle: { 
    en: 'Using "Dream of the Red Chamber" as a base to understand classical literature and daily communication. We use simple Chinese to help you understand the deeper meanings when Taiwanese people speak.', 
    vn: 'Sử dụng "Hồng Lâu Mộng" làm nền tảng để hiểu văn học cổ điển và giao tiếp hàng ngày. Chúng tôi dùng tiếng Trung đơn giản để giúp bạn hiểu ẩn ý của người Đài Loan.', 
    jp: '『紅楼夢』をベースに、古典文学と日常のコミュニケーションを理解します。簡単な中国語で、台湾人が話す言葉の深い意味を理解する手助けをします。', 
    kr: '『홍루몽』을 바탕으로 고전 문학과 일상의 소통을 이해합니다. 쉬운 중국어를 통해 대만 사람들이 말하는 깊은 의미를 이해하도록 도와줍니다.', 
    'zh-tw': '以《紅樓夢》為基礎，帶你了解中國古典文學與日常溝通。我們用最簡單的中文，幫助你在學習路上，聽得懂台灣人說話的深層含義。', 
    'zh-cn': '以《红楼梦》为基础，带你了解中国古典文学与日常沟通。我们用最简单的中文，帮助你在学习路上，听得懂台湾人说话的深层含义。' 
  }
};

export const HOME_ANALYSIS: Record<string, MultiLangText> = {
  badge: {
    en: 'Cultural Case Study',
    vn: 'Nghiên cứu điển hình văn hóa',
    jp: '文化ケーススタディ',
    kr: '문화 사례 연구',
    'zh-tw': '文化案例研究',
    'zh-cn': '文化案例研究'
  },
  caseStudyTitle: {
    en: 'Cultural Changes: "Zao Sheng Gui Zi"',
    vn: 'Thay đổi văn hóa: "Sớm sinh quý tử"',
    jp: '文化の変遷：「早生貴子」',
    kr: '문화적 변천: "조생귀자"',
    'zh-tw': '從「早生貴子」看文化變遷',
    'zh-cn': '从「早生贵子」看文化变迁'
  },
  explanationPast: {
    en: 'In the past, "Zao Sheng Gui Zi" (Have a baby soon) was a common wedding blessing, representing good wishes for the couple.',
    vn: 'Trong quá khứ, "Sớm sinh quý tử" là một lời chúc đám cưới phổ biến, thể hiện những lời chúc tốt đẹp dành cho cặp đôi.',
    jp: 'かつて「早生貴子」（早く子供を授かるように）は一般的な結婚の祝福の言葉であり、新婚夫婦への願いを表していました。',
    kr: '과거에는 "조생귀자"(빨리 아들을 낳기를)가 일반적인 결혼 축사였으며, 부부에게 보내는 좋은 소망을 의미했습니다.',
    'zh-tw': '在過去，「早生貴子」是一句常見的結婚祝福話，代表對新人的美好祝願。',
    'zh-cn': '在过去，「早生贵子」是一句常见的结婚祝福话，代表对新人的美好祝愿。'
  },
  explanationPresent: {
    en: 'However, in modern Taiwan, this phrase often brings pressure to young people. A popular modern saying is: "No marriage, no kids, a happy life."',
    vn: 'Tuy nhiên, ở Đài Loan hiện đại, cụm từ này thường mang lại áp lực cho giới trẻ. Một câu nói hiện đại phổ biến là: "Không kết hôn, không sinh con, hạnh phúc cả đời."',
    jp: 'しかし、現代の台湾では、この言葉は若者にプレッシャーを与えることがよくあります。最近では「結婚せず、産まず、幸せな一生」という言葉も流行っています。',
    kr: '하지만 현대 대만에서는 이 말이 청년들에게 부담을 주는 경우가 많습니다. 현대 사회에서는 심지어 "결혼 안 하고 아이 안 낳는 것이 행복한 일생이다"라는 말도 유행합니다.',
    'zh-tw': '但在現代台灣，這句話卻常帶給年輕人壓力。現代社會甚至流行說：「不婚不生，幸福一生」。',
    'zh-cn': '但在现代台湾，这句话却常带给年轻人压力。现代社会甚至流行说：「不婚不生，幸福一生」。'
  },
  opinionTitle: {
    en: 'What is your opinion?',
    vn: 'Ý kiến của bạn là gì?',
    jp: 'あなたはどう思いますか？',
    kr: '당신의 의견은 무엇인가요?',
    'zh-tw': '你對此有什麼看法？',
    'zh-cn': '你对此有什么看法？'
  },
  placeholder: {
    en: 'Share your thoughts... (e.g., Is it a blessing or pressure?)',
    vn: 'Chia sẻ suy nghĩ của bạn... (Ví dụ: Bạn thấy đây là lời chúc hay áp lực?)',
    jp: '考えを共有してください...（例：これは祝福ですか、それともプレッシャーですか？）',
    kr: '의견을 공유해주세요... (예: 이 말이 축복이라고 생각하시나요, 부담이라고 생각하시나요?)',
    'zh-tw': '分享你的意見... (例如：你覺得這句話是祝福還是壓力？)',
    'zh-cn': '分享你的意见... (例如：你觉得这句话是祝福还是压力？)'
  },
  submitBtn: {
    en: 'Submit My View',
    vn: 'Gửi ý kiến của tôi',
    jp: '意見を送信する',
    kr: '의견 보내기',
    'zh-tw': '送出我的看法',
    'zh-cn': '送出我的看法'
  },
  thanks: {
    en: 'Thanks for sharing!',
    vn: 'Cảm ơn bạn đã chia sẻ!',
    jp: '共有ありがとうございます！',
    kr: '공유해주셔서 감사합니다!',
    'zh-tw': '感謝你的分享！',
    'zh-cn': '感谢你的分享！'
  }
};

export const FAMILY_MEMBERS: FamilyMember[] = [
  { id: 'f1', name: '賈母', family: 'Jia', role: 'blood', generation: 1, relation: { en: 'Supreme Matriarch', vn: 'Lão tổ tông', jp: '最高権威者', kr: '가문의 최고 어른', 'zh-tw': '老祖宗。', 'zh-cn': '老祖宗。' }, description: { en: 'The ultimate authority in the Jia family, she deeply loves her grandson Baoyu.', vn: 'Người có quyền lực cao nhất trong gia đình họ Giả, bà rất yêu thương cháu nội Bảo Ngọc.', jp: 'ジャ家の最高権威者で、孫の宝玉をとても可愛がっています。', kr: '가씨 가문의 최고 권위자이며 손자 보옥을 매우 아낍니다.', 'zh-tw': '她是全家地位最高的人，非常疼愛孫子寶玉。', 'zh-cn': '她是全家地位最高的人，非常疼愛孫子寶玉。' } },
  { id: 'f2', name: '賈寶玉', family: 'Jia', role: 'blood', generation: 3, relation: { en: 'The Main Character', vn: 'Nhân vật chính', jp: '主人公', kr: '주인공', 'zh-tw': '男主角。', 'zh-cn': '男主角。' }, description: { en: 'Born with a jade in his mouth, he dislikes official duties and loves beautiful things.', vn: 'Sinh ra đã ngậm ngọc, anh không thích làm quan, chỉ thích những điều tốt đẹp.', jp: '玉をくわえて生まれた男の子で、官職を嫌い、美しいものだけを好みます。', kr: '옥을 입에 물고 태어난 소년으로, 관직을 싫어하고 아름다운 것들만 좋아합니다.', 'zh-tw': '含著玉出生的男孩子，他不喜歡當官，只喜歡美好的事物。', 'zh-cn': '含著玉出生的男孩子，他不喜歡當官，只喜歡美好的事物。' } },
  { id: 'f3', name: '林黛玉', family: 'Lin', role: 'blood', generation: 3, relation: { en: 'The Female Lead', vn: 'Nữ chính', jp: 'ヒロイン', kr: '여주인공', 'zh-tw': '女主角。', 'zh-cn': '女主角。' }, description: { en: 'Extremely talented but sensitive and easily saddened.', vn: 'Vô cùng tài hoa nhưng tâm hồn nhạy cảm, dễ u sầu.', jp: '非常に才能がありますが、繊細で傷つきやすい女の子です。', kr: '재능이 뛰어나지만 마음이 여리고 쉽게 슬퍼하는 소녀입니다.', 'zh-tw': '非常有才華但心思細膩、容易傷心的女孩子。', 'zh-cn': '非常有才華但心思細膩、容易傷心的女孩子。' } }
];

export const STORIES: Story[] = [
  { id: 's1', title: { en: 'I. Staying Cautious: Daiyu Enters the Mansion', vn: 'I. Cẩn trọng: Lâm Đại Ngọc vào phủ họ Giả', jp: 'I. 慎重に：黛玉、ジャ府に入る', kr: 'I. 조심스럽게: 대옥이 가부로 들어감', 'zh-tw': '一、寄人籬下：林黛玉進賈府', 'zh-cn': '一、寄人篱下：林黛玉进贾府' }, content: { en: 'Young Lin Daiyu arrives at the grand Mansion. She is extremely cautious, remembering the advice: "Do not say a word too much."', vn: 'Lâm Đại Ngọc mồ côi mẹ, được đón về Giả phủ. Cô vô cùng cẩn trọng, nhớ lời dặn: "Không nói thừa một lời".', jp: '母を亡くした黛玉は、豪華なジャ府に到着します。「一言も多く言わない」という慎重な振る舞いをします。', kr: '어머니를 여읜 대옥이 가씨 가문에 도착합니다. 말 한마디도 아끼라는 충고를 되새깁니다.', 'zh-tw': '自幼喪母的林黛玉步入榮國府，步步留心，時時在意。她謹記教誨：「不可多說一句話，不可多走一步路」。', 'zh-cn': '自幼丧母的林黛玉步入荣国府，步步留心，时时在意。她谨记教诲：「不可多说一句话，不可多走一步路」。' }, culturalLesson: { en: 'In high-context culture, careful observation and speech are keys to fitting in.', vn: 'Trong văn hóa ngữ cảnh cao, quan sát tỉ mỉ và cẩn trọng lời nói là chìa khóa để hòa nhập.', jp: 'ハイコンテクスト文化では、細かな観察と言葉選びが社会に溶け込む鍵となります。', kr: '고맥락 문화에서는 미세한 관찰과 신중한 언행이 사회에 적응하는 핵심입니다.', 'zh-tw': '在高語境文化中，細微的觀察與謹言慎行是融入社會的關鍵。', 'zh-cn': '在高语境文化中，細微的觀察與謹言慎行是融入社會的關鍵。' } },
  { id: 's2', title: { en: 'II. Golden Match: Baochai Arrives', vn: 'II. Mối duyên vàng ngọc: Bảo Thoa đến', jp: 'II. 金玉の縁：寶釵の到来', kr: 'II. 금옥의 인연: 보차의 도착', 'zh-tw': '二、金玉良緣：薛寶釵的到來', 'zh-cn': '二、金玉良缘：薛宝钗の到来' }, content: { en: 'The elegant Xue Baochai arrives with a golden locket. Rumors spread that it must match Baoyu\'s jade, pressuring Daiyu.', vn: 'Tiết Bảo Thoa đoan trang mang theo chiếc khóa vàng đến, mọi người đồn rằng "khóa vàng phải đi với ngọc", gây áp lực cho Đại Ngọc.', jp: '端正な寶釵が金の首飾りを持って現れ、寶玉の玉との縁が噂されます。これが黛玉の壓力になります。', kr: '단정하고 우아한 보차가 금노리개를 가지고 오자 소문이 돕니다. 대옥에게는 압박이 됩니다.', 'zh-tw': '端莊大方的薛寶釵帶著金鎖來到賈府，眾人傳言「金鎖要配有玉的」，這給了敏感的黛玉巨大的壓力。', 'zh-cn': '端庄大方的薛宝钗带着金锁来到贾府，众人传言「金锁要配有玉的」，这给了敏感的黛玉巨大的壓力。' }, culturalLesson: { en: 'In traditional society, family interests often outweigh individual romance.', vn: 'Trong xã hội truyền thống, lợi ích gia đình thường cao hơn tình cảm cá nhân.', jp: '伝統社会では、個人の感情よりも家族の利益が優先されることが多いです。', kr: '전통 사회에서는 가족의 이익이 개인의 감정 추구보다 우선시되곤 합니다.', 'zh-tw': '傳統社會中，家族的利益往往高於個人的情感追求。', 'zh-cn': '傳統社會中，家族的利益往往高於個人的情感追求。' } }
];

export const CRISES: CrisisDilemma[] = [
  { id: 'c1', topic: { en: 'Praise and "Face"', vn: 'Khen ngợi và "Thể diện"', jp: '賞賛と「面子」', kr: '칭찬과 "체면"', 'zh-tw': '情境一：稱讚與面子', 'zh-cn': '情境一：称赞与面子' }, theoryName: { en: 'Face Theory', vn: 'Lý thuyết Thể diện', jp: '面子理論', kr: '체면 이론', 'zh-tw': '面子理論', 'zh-cn': '面子理论' }, theorySimpleDesc: { en: 'Praise gives "face" but is also an evaluation.', vn: 'Khen ngợi là trao "thể diện", nhưng cũng là một sự đánh giá.', jp: '賞賛は相手に「面子」を与えますが、同時に一種の「評価」でもあります。', kr: '칭찬은 상대에게 "체면"을 세워주는 것이지만, 동시에 일종의 "평가"이기도 합니다.', 'zh-tw': '稱讚是給對方「面子」，也是一種「評價」。', 'zh-cn': '稱讚是給對方「面子」，也是一種「評價」。' }, context: { en: 'Grandmother Jia praises Daiyu as "Like a person in a painting."', vn: 'Giả mẫu khen Đại Ngọc "giống như người trong tranh vậy".', jp: 'ジャ家のおばあさんが黛玉を「絵から抜け出したようだ」と褒めます。', kr: '가씨 할머니가 대옥을 "마치 그림 속 사람 같다"고 칭찬합니다.', 'zh-tw': '賈母稱讚黛玉「像個畫裡的人兒似的」。', 'zh-cn': '賈母稱讚黛玉「像個畫裡的人兒似的」。' }, crisisExplanation: { en: 'Being praised means your actions are being "scored".', vn: 'Được khen ngợi có nghĩa là mọi hành động của bạn đang được "chấm điểm".', jp: '褒められるということは、あなたの一挙手一投足が「採点」されていることを意味します。', kr: '칭찬을 받는다는 것은 당신의 일거수일투족이 "평가"받고 있음을 의미합니다.', 'zh-tw': '稱讚代表你的一舉一動正在被「評分」。', 'zh-cn': '稱讚代表你的一舉一動正在被「評分」。' }, positiveView: { en: 'Friendliness.', vn: 'Sự thân thiện.', jp: '親しみやすさ。', kr: '우호적임.', 'zh-tw': '對方在表達友好。', 'zh-cn': '對方在表達友好。' }, negativeView: { en: 'Pressure.', vn: 'Áp lực.', jp: 'プレッシャー。', kr: '압박감.', 'zh-tw': '感覺自己被盯著看。', 'zh-cn': '感覺自己被盯著看。' }, discussionQuestion: { en: 'Do you feel awkward when praised?', vn: 'Bạn có cảm thấy khó xử khi được khen không?', jp: '褒められたとき、気まずく感じますか？', kr: '칭찬을 받을 때 어색함을 느끼나요?', 'zh-tw': '被稱讚時，你會尷尬嗎？', 'zh-cn': '被稱讚時，你會尷尬嗎？' } }
];

export const PROVERBS: PhraseEntry[] = [
  { id: 'p1', phrase: '三思而後行', literal: { en: 'Think three times before acting.', vn: 'Nghĩ ba lần rồi hãy làm.', jp: '行う前に三度考えよ。', kr: '행동하기 전에 세 번 생각하라.', 'zh-tw': '做事以前，多想三次。', 'zh-cn': '做事以前，多想三次。' }, hidden: { en: 'Do not rush, think carefully.', vn: 'Đừng vội vàng, hãy suy nghĩ kỹ.', jp: '急がず、じっくり考えて。', kr: '서두르지 말고 천천히 생각하라.', 'zh-tw': '不要急，慢慢想。', 'zh-cn': '不要急，慢慢想。' }, example: '做事要三思而後行。' }
];

export const DAILY_PHRASES: PhraseEntry[] = [
  { id: 'd1', phrase: '改天再約吧', literal: { en: 'Let\'s meet another day.', vn: 'Hôm khác hẹn lại nhé.', jp: 'またいつか会いましょう。', kr: '다음에 다시 만나요.', 'zh-tw': '換個時間再見。', 'zh-cn': '换个時間再見。' }, hidden: { en: 'Polite refusal: "I don\'t want to go now."', vn: 'Từ chối lịch sự: "Bây giờ tôi không muốn đi".', jp: '丁寧な拒絶：「今は行きたくない」という意味です。', kr: '정중한 거절: "지금은 가고 싶지 않다"는 뜻입니다.', 'zh-tw': '意思就是：我現在不想去。', 'zh-cn': '意思就是：我現在不想去。' }, example: 'A: 明天去玩嗎？ B: 改天再約吧。' }
];
