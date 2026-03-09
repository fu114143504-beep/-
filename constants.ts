
import { AppView, MultiLangText, ChapterContent } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Home', vn: 'Trang chủ', jp: 'ホーム', kr: '홈', 'zh-tw': '首頁', 'zh-cn': '首页' },
  chapter1: { en: 'Excuse Me', vn: 'Xin lỗi', jp: 'すみません', kr: '죄송합니다', 'zh-tw': '「不好意思」', 'zh-cn': '「不好意思」' },
  chapter2: { en: 'But', vn: 'Nhưng', jp: 'しかし', kr: '하지만', 'zh-tw': '「但是」', 'zh-cn': '「但是」' },
  chapter3: { en: 'Maybe', vn: 'Có lẽ', jp: 'たぶん', kr: '아마도', 'zh-tw': '「可能」', 'zh-cn': '「可能」' },
  chapter4: { en: 'Relatively', vn: 'Khá', jp: '比較的', kr: '비교적', 'zh-tw': '「比較」', 'zh-cn': '「比较」' },
  chapter5: { en: 'I Heard', vn: 'Nghe nói', jp: '聞いた', kr: '듣기로는', 'zh-tw': '「聽說」', 'zh-cn': '「听说」' },
  chapter6: { en: 'A Bit', vn: 'Một chút', jp: 'ちょっと', kr: '잠시', 'zh-tw': '「一下」', 'zh-cn': '「一下」' },
  chapter7: { en: 'Introduce', vn: 'Giới thiệu', jp: '紹介', kr: '소개', 'zh-tw': '「介紹介紹」', 'zh-cn': '「介绍介绍」' },
  chapter8: { en: 'Seems', vn: 'Hình như', jp: 'みたい', kr: '듯하다', 'zh-tw': '「好像」', 'zh-cn': '「好像」' }
};

export const HOME_CONTENT = {
  title: { 
    en: 'Chinese Euphemisms Lab', 
    vn: 'Phòng học Tiếng Trung khéo léo', 
    jp: '中国語の遠回し表現ラボ', 
    kr: '중국어 완곡 어법 연구실', 
    'zh-tw': '華語委婉語：初級教室', 
    'zh-cn': '华语委婉语：初级教室' 
  },
  subtitle: { 
    en: 'Master the art of polite communication in Chinese society.', 
    vn: 'Làm chủ nghệ thuật giao tiếp lịch sự trong xã hội Trung Hoa.', 
    jp: '中華圏社会における丁寧なコミュニケーションの技術をマスターしましょう。', 
    kr: '중국 사회에서 정중한 의사소통의 기술을 마스터하세요.', 
    'zh-tw': '學習華語社會中的「說話藝術」。透過委婉語，讓你在交流中更有禮貌。', 
    'zh-cn': '学习华语社会中的「说话艺术」。透过委婉语，让你在交流中更有礼貌。' 
  }
};

export const CHAPTERS: ChapterContent[] = [
  {
    id: 'chapter1',
    keyword: '「不好意思」',
    title: { en: 'Unit 1: 不好意思', vn: 'Bài 1: 不好意思', jp: '第1回：不好意思', kr: '제1장: 不好意思', 'zh-tw': '第一單元：「不好意思」', 'zh-cn': '第一单元：「不好意思」' },
    classicText: "「不好意思，下次運動可以請你準時嗎？」",
    simpleChineseExplanation: "「不好意思」是華語中最常用的禮貌詞。當我們想麻煩別人、問問題、或者做錯了一點小事時，都可以先說「不好意思」。這會讓對方覺得你很有禮貌。",
    modernExplanation: {
      en: 'Politeness markers express respect and apology to cater to the other party\'s "negative face".',
      vn: 'Các dấu hiệu lễ phép thể hiện sự tôn trọng và xin lỗi.',
      jp: '礼儀のマーカーは、相手への敬意や謝罪を表します。',
      kr: '예의 표시는 상대방에 대한 존경과 사과를 표현합니다.',
      'zh-tw': '「不好意思」可以用來引出後面的請求，讓對方聽起來比較舒服。',
      'zh-cn': '「不好意思」可以用来引出后面的请求，让对方听起来比较舒服。'
    },
    contrast: {
      ancient: { en: 'Direct: "You are late."', vn: 'Trực tiếp: "Bạn đến muộn."', jp: '直接的：「遅刻です。」', kr: '직설적: "늦었습니다."', 'zh-tw': '直接說：你遲到了。', 'zh-cn': '直接说：你迟到了。' },
      modern: { en: 'Euphemistic: "Sorry, please be on time."', vn: 'Ủy mị: "Xin lỗi, hãy đúng giờ."', jp: '遠回し：「すみませんが、時間を守ってください。」', kr: '완곡적: "죄송하지만, 제시간에 와주세요."', 'zh-tw': '委婉說：不好意思，請準時。', 'zh-cn': '委婉说：不好意思，请准时。' }
    },
    vocab: [
      { word: '不好意思', meaning: { en: 'Excuse me', vn: 'Xin lỗi', jp: 'すみません', kr: '죄송합니다', 'zh-tw': '最常用的禮貌標記。', 'zh-cn': '最常用的礼貌标记。' } }
    ],
    grammar: [
      { point: '不好意思 + [請求]', usage: { en: 'Excuse me, [request]', vn: 'Ngại quá, [yêu cầu]', jp: 'すみませんが、[依頼]', kr: '죄송하지만, [요청]', 'zh-tw': '禮貌地提出要求。', 'zh-cn': '礼貌地提出要求。' } }
    ],
    modernEssay: {
      en: 'Use "Sorry" to soften requests.',
      vn: 'Dùng "Xin lỗi" để làm nhẹ yêu cầu.',
      jp: '「すみません」を使って依頼を和らげます。',
      kr: '요청을 완화하기 위해 "죄송합니다"를 사용합니다.',
      'zh-tw': '在生活中，多說「不好意思」可以減少衝突。',
      'zh-cn': '在生活中，多说「不好意思」可以减少冲突。'
    },
    practiceCards: [
      { scenario: "你想問路，要怎麼開始說話？", answer: "不好意思，請問捷運站在哪裡？", explanation: "先說「不好意思」再問問題，對方會更願意幫你。" },
      { scenario: "你在圖書館，想請旁邊的人小聲一點。", answer: "不好意思，可以請你小聲一點嗎？", explanation: "用「不好意思」開頭，聽起來不是在罵人，是在請求。" },
      { scenario: "你開會遲到了五分鐘。", answer: "不好意思，我遲到了。", explanation: "小小的遲到用「不好意思」非常合適。" },
      { scenario: "你想借過，前面有人擋住路。", answer: "不好意思，借過一下。", explanation: "這是最常用的借過說法。" }
    ]
  },
  {
    id: 'chapter2',
    keyword: '「但是」',
    title: { en: 'Unit 2: 但是', vn: 'Bài 2: 但是', jp: '第2回：但是', kr: '제2장: 但是', 'zh-tw': '第二單元：「但是」', 'zh-cn': '第二单元：「但是」' },
    classicText: "「我有空，但是我有事。」",
    simpleChineseExplanation: "當你想拒絕別人的時候，直接說「不行」或「不要」太兇了。我們先說一點好聽的話，然後用「但是」說出真正的理由。這樣對方比較不會難過。",
    modernExplanation: {
      en: 'Contrastive markers soften a different opinion.',
      vn: 'Các dấu hiệu đối lập làm nhẹ bớt ý kiến khác biệt.',
      jp: '対比のマーカーは、異なる意見を和らげます。',
      kr: '대조 표시는 다른 의견을 완화합니다.',
      'zh-tw': '「但是」可以用來引出拒絕的理由，而不會顯得太生硬。',
      'zh-cn': '「但是」可以用来引出拒绝的理由，而不会显得太生硬。'
    },
    contrast: {
      ancient: { en: 'Direct: "I can\'t go."', vn: 'Trực tiếp: "Tôi không đi."', jp: '直接的：「行けません。」', kr: '직설적: "못 가요."', 'zh-tw': '直接說：我不去。', 'zh-cn': '直接说：我不去。' },
      modern: { en: 'Euphemistic: "I have time, but I have things to do."', vn: 'Ủy mị: "Tôi rảnh, nhưng có việc."', jp: '遠回し：「時間はありますが、用事があります。」', kr: '완곡적: "시간은 있지만, 일이 있습니다."', 'zh-tw': '委婉說：我有空，但是我有事。', 'zh-cn': '委婉说：我有空，但是我有事。' }
    },
    vocab: [
      { word: '但是', meaning: { en: 'But', vn: 'Nhưng', jp: 'しかし', kr: '하지만', 'zh-tw': '轉折詞。', 'zh-cn': '转折词。' } }
    ],
    grammar: [
      { point: '肯定內容 + 但是 + 拒絕理由', usage: { en: 'Positive + but + reason', vn: 'Khẳng định + nhưng + lý do', jp: '肯定 + しかし + 理由', kr: '긍정 + 하지만 + 이유', 'zh-tw': '先肯定再拒絕。', 'zh-cn': '先肯定再拒绝。' } }
    ],
    modernEssay: {
      en: 'Use "but" to decline politely.',
      vn: 'Dùng "nhưng" để từ chối lịch sự.',
      jp: '「しかし」を使って丁寧に断ります。',
      kr: '정중하게 거절하기 위해 "하지만"을 사용합니다.',
      'zh-tw': '拒絕別人時，給一個理由會更好。',
      'zh-cn': '拒绝别人时，给一个理由会更好。'
    },
    practiceCards: [
      { scenario: "朋友請你吃飯，但你明天要考試，不能去。", answer: "我很想去，但是明天有考試。", explanation: "先說「很想去」讓朋友開心，再用「但是」說不能去的理由。" },
      { scenario: "老闆請你加班，但你已經有約會了。", answer: "我很樂意幫忙，但是今天晚上已經有約了。", explanation: "「樂意幫忙」是客氣話，「但是」後面才是重點。" },
      { scenario: "有人想跟你借錢，你不想借。", answer: "我很想幫你，但是最近我也沒什麼錢。", explanation: "用「但是」引出自己的難處。" },
      { scenario: "同學請你幫他寫作業。", answer: "這題很有趣，但是我覺得你自己寫會學到更多。", explanation: "用「但是」給一個正面的理由來拒絕。" }
    ]
  },
  {
    id: 'chapter3',
    keyword: '「可能」',
    title: { en: 'Unit 3: 可能', vn: 'Bài 3: 可能', jp: '第3回：可能', kr: '제3장: 可能', 'zh-tw': '第三單元：「可能」', 'zh-cn': '第三单元：「可能」' },
    classicText: "「這個週末可能沒有空。」",
    simpleChineseExplanation: "說話不要說得太死。用「可能」可以讓你的話聽起來有彈性。如果你不確定能不能去，或者想委婉拒絕，說「可能...」是最好的選擇。",
    modernExplanation: {
      en: 'Downtoners reduce the impact of a negative response.',
      vn: 'Các từ giảm nhẹ làm giảm tác động của câu trả lời tiêu cực.',
      jp: '緩衝の表現は、否定的な返答の衝撃を和らげます。',
      kr: '완화 표현은 부정적인 답변의 충격을 줄여줍니다.',
      'zh-tw': '使用「可能」可以讓拒絕聽起來不那麼絕對。',
      'zh-cn': '使用「可能」可以让拒绝听起来不那么绝对。'
    },
    contrast: {
      ancient: { en: 'Direct: "I am busy."', vn: 'Trực tiếp: "Tôi bận."', jp: '直接的：「忙しいです。」', kr: '직설적: "바빠요."', 'zh-tw': '直接說：我沒空。', 'zh-cn': '直接说：我没空。' },
      modern: { en: 'Euphemistic: "I might not be free."', vn: 'Ủy mị: "Có lẽ tôi không rảnh."', jp: '遠回し：「たぶん時間がありません。」', kr: '완곡적: "아마 시간이 없을 것 같아요."', 'zh-tw': '委婉說：我可能沒空。', 'zh-cn': '委婉说：我可能没空。' }
    },
    vocab: [
      { word: '可能', meaning: { en: 'Maybe', vn: 'Có lẽ', jp: 'たぶん', kr: '아마도', 'zh-tw': '表示不確定。', 'zh-cn': '表示不确定。' } }
    ],
    grammar: [
      { point: '可能 + 內容', usage: { en: 'Maybe + content', vn: 'Có lẽ + nội dung', jp: 'たぶん + 内容', kr: '아마도 + 내용', 'zh-tw': '委婉表達。', 'zh-cn': '委婉表达。' } }
    ],
    modernEssay: {
      en: 'Use "maybe" to avoid direct conflict.',
      vn: 'Dùng "có lẽ" để tránh xung đột trực tiếp.',
      jp: '「たぶん」を使って直接的な衝突を避けます。',
      kr: '직접적인 충돌을 피하기 위해 "아마도"를 사용합니다.',
      'zh-tw': '說話留餘地，是華人的溝通智慧。',
      'zh-cn': '说话留余地，是华人的沟通智慧。'
    },
    practiceCards: [
      { scenario: "朋友問你明天會不會去派對，你還在考慮。", answer: "我明天可能會有事，晚點再告訴你。", explanation: "用「可能」給自己留一點時間考慮。" },
      { scenario: "老師問你作業寫完了嗎？你還沒寫完。", answer: "我可能還需要一點時間。", explanation: "比說「還沒寫完」聽起來更積極一點。" },
      { scenario: "你想拒絕一個不喜歡的約會。", answer: "我下週可能都很忙。", explanation: "「可能」讓拒絕聽起來像是由於客觀原因。" },
      { scenario: "預測天氣。", answer: "下午可能會下雨，記得帶傘。", explanation: "這也是「可能」的常見用法。" }
    ]
  },
  {
    id: 'chapter4',
    keyword: '比較',
    title: { en: 'Unit 4: 比較', vn: 'Bài 4: 比較', jp: '第4回：比較', kr: '제4장: 比較', 'zh-tw': '第四單元：比較', 'zh-cn': '第四单元：比较' },
    classicText: "「我比較常去運動。」",
    simpleChineseExplanation: "當你想表達自己的習慣或看法，但不想讓對方覺得你在命令他或太有自信時，可以用「比較」。它會讓你的話聽起來像是在分享，而不是在教訓人。",
    modernExplanation: {
      en: 'Hedges avoid clear assertions to prevent offending.',
      vn: 'Các từ né tránh giúp tránh những khẳng định quá rõ ràng.',
      jp: '回避の表現は、断定を避けることで相手を不快にさせるのを防ぎます。',
      kr: '회피 표현은 단정적인 표현을 피하여 상대방을 불쾌하게 하는 것을 방지합니다.',
      'zh-tw': '使用「比較」可以讓語氣聽起來比較客觀。',
      'zh-cn': '使用「比较」可以让语气听起来比较客观。'
    },
    contrast: {
      ancient: { en: 'Direct: "I exercise every day."', vn: 'Trực tiếp: "Tôi tập thể dục mỗi ngày."', jp: '直接的：「毎日運動します。」', kr: '직설적: "매일 운동해요."', 'zh-tw': '直接說：我天天運動。', 'zh-cn': '直接说：我天天运动。' },
      modern: { en: 'Euphemistic: "I exercise relatively often."', vn: 'Ủy mị: "Tôi khá thường xuyên tập thể dục."', jp: '遠回し：「比較的よく運動します。」', kr: '완곡적: "비교적 자주 운동해요."', 'zh-tw': '委婉說：我比較常運動。', 'zh-cn': '委婉说：我比较常运动。' }
    },
    vocab: [
      { word: '比較', meaning: { en: 'Relatively', vn: 'Khá', jp: '比較的', kr: '비교적', 'zh-tw': '程度副詞。', 'zh-cn': '程度副词。' } }
    ],
    grammar: [
      { point: '比較 + 形容詞/動詞', usage: { en: 'Relatively [adj/verb]', vn: 'Khá [tính từ/động từ]', jp: '比較的…', kr: '비교적 ...하다', 'zh-tw': '讓陳述聽起來不那麼絕對。', 'zh-cn': '让陈述听起来不那么绝对。' } }
    ],
    modernEssay: {
      en: 'Use "relatively" to sound objective.',
      vn: 'Dùng "khá" để nghe có vẻ khách quan.',
      jp: '「比較的」を使って客観的に聞こえるようにします。',
      kr: '객관적으로 들리게 하기 위해 "비교적"을 사용합니다.',
      'zh-tw': '「比較」能讓你的觀點聽起來更溫和。',
      'zh-cn': '「比较」能让你的观点听起来更温和。'
    },
    practiceCards: [
      { scenario: "別人問你喜不喜歡這家餐廳，你覺得還好。", answer: "我比較喜歡另一家餐廳。", explanation: "不直接說這家不好，而是說「比較喜歡」另一家。" },
      { scenario: "你覺得這件衣服太貴了。", answer: "這件衣服的價格比較高一點。", explanation: "用「比較高」代替「太貴」，聽起來比較客觀。" },
      { scenario: "介紹自己的個性。", answer: "我的個性比較害羞。", explanation: "用「比較」來描述自己，顯得謙虛。" },
      { scenario: "討論天氣。", answer: "今天的天氣比較涼快。", explanation: "這是一個很自然的描述方式。" }
    ]
  },
  {
    id: 'chapter5',
    keyword: '聽說',
    title: { en: 'Unit 5: 聽說', vn: 'Bài 5: 聽說', jp: '第5回：聽說', kr: '제5장: 聽說', 'zh-tw': '第五單元：聽說', 'zh-cn': '第五单元：听说' },
    classicText: "「聽說那部電影不好看。」",
    simpleChineseExplanation: "如果你想說一個不好的消息，或者不想負責這個觀點，可以說「聽說」。這表示這不是我說的，是別的地方聽來的。這樣對方就不會怪你。",
    modernExplanation: {
      en: 'Understaters reduce directness by citing others.',
      vn: 'Các từ nói giảm làm giảm tính trực tiếp bằng cách trích dẫn người khác.',
      jp: '控えめな表現は、他人の言葉を引用することで直接性を和らげます。',
      kr: '절제된 표현은 타인의 말을 인용하여 직접성을 완화합니다.',
      'zh-tw': '使用「聽說」可以把觀點推給第三方。',
      'zh-cn': '使用「听说」可以把观点推给第三方。'
    },
    contrast: {
      ancient: { en: 'Direct: "That movie is bad."', vn: 'Trực tiếp: "Phim đó dở."', jp: '直接的：「あの映画はつまらない。」', kr: '직설적: "그 영화 재미없어."', 'zh-tw': '直接說：電影很難看。', 'zh-cn': '直接说：电影很难看。' },
      modern: { en: 'Euphemistic: "I heard that movie isn\'t good."', vn: 'Ủy mị: "Nghe nói phim đó không hay."', jp: '遠回し：「あの映画、あまり良くないらしいよ。」', kr: '완곡적: "그 영화 별로라고 하더라."', 'zh-tw': '委婉說：聽說電影不好看。', 'zh-cn': '委婉说：听说电影不好看。' }
    },
    vocab: [
      { word: '聽說', meaning: { en: 'I heard', vn: 'Nghe nói', jp: '聞いたところでは', kr: '듣기로는', 'zh-tw': '引用他人的話。', 'zh-cn': '引用他人的话。' } }
    ],
    grammar: [
      { point: '聽說 + 內容', usage: { en: 'I heard that...', vn: 'Nghe nói là...', jp: '…だそうですね', kr: '...라고 하더라고요', 'zh-tw': '引出非直接觀點。', 'zh-cn': '引出非直接观点。' } }
    ],
    modernEssay: {
      en: 'Shift responsibility with "I heard".',
      vn: 'Chuyển trách nhiệm bằng "Nghe nói".',
      jp: '「聞いたところでは」を使って責任を転嫁します。',
      kr: '책임을 전가하기 위해 "듣기로는"을 사용합니다.',
      'zh-tw': '不想當壞人時，「聽說」很有用。',
      'zh-cn': '不想当坏人时，「听说」很有用。'
    },
    practiceCards: [
      { scenario: "你想告訴朋友這家店很貴，不想讓他花冤枉錢。", answer: "聽說這家店的東西有點貴。", explanation: "用「聽說」來提醒朋友，不會顯得你在批評他的選擇。" },
      { scenario: "你想打聽某人的私事。", answer: "聽說你最近買新車了？", explanation: "「聽說」是一個很好的聊天開場白。" },
      { scenario: "傳達一個不確定的消息。", answer: "聽說明天會放假。", explanation: "表示消息來源不是自己。" },
      { scenario: "委婉拒絕去某個地方。", answer: "聽說那邊現在人很多，我們要不要換個地方？", explanation: "用「聽說」給出一個客觀的建議。" }
    ]
  },
  {
    id: 'chapter6',
    keyword: 'v-一下',
    title: { en: 'Unit 6: 一下', vn: 'Bài 6: 一下', jp: '第6回：一下', kr: '제6장: 一下', 'zh-tw': '第六單元：一下', 'zh-cn': '第六单元：一下' },
    classicText: "「我想一下。」",
    simpleChineseExplanation: "在動詞後面加「一下」，會讓動作聽起來時間很短、很輕鬆。當你想請別人幫忙，或者想給自己一點時間考慮時，都可以用「一下」。",
    modernExplanation: {
      en: 'Using "a bit" makes an action sound less demanding.',
      vn: 'Sử dụng "một chút" làm cho hành động nghe có vẻ ít đòi hỏi hơn.',
      jp: '「ちょっと」を使うことで、動作の負担が軽く感じられます。',
      kr: '“잠시”를 사용하는 것은 동작의 부담을 줄여줍니다.',
      'zh-tw': '使用「一下」可以縮短動作感知的時間。',
      'zh-cn': '使用「一下」可以缩短动作感知的时间。'
    },
    contrast: {
      ancient: { en: 'Direct: "Wait for me."', vn: 'Trực tiếp: "Đợi tôi."', jp: '直接的：「待って。」', kr: '직설적: "기다려."', 'zh-tw': '直接說：你等我。', 'zh-cn': '直接说：你等我。' },
      modern: { en: 'Euphemistic: "Wait a moment."', vn: 'Ủy mị: "Đợi một chút."', jp: '遠回し：「ちょっと待って。」', kr: '완곡적: "잠시만 기다려 줘."', 'zh-tw': '委婉說：等我一下。', 'zh-cn': '委婉说：等我一下。' }
    },
    vocab: [
      { word: '一下', meaning: { en: 'A bit', vn: 'Một chút', jp: 'ちょっと', kr: '잠시', 'zh-tw': '表示動作時間短促。', 'zh-cn': '表示动作时间短促。' } }
    ],
    grammar: [
      { point: '動詞 + 一下', usage: { en: 'Do [verb] for a bit', vn: 'Làm [động từ] một chút', jp: 'ちょっと…する', kr: '잠시 ...하다', 'zh-tw': '讓語氣更輕鬆。', 'zh-cn': '让语气更轻松。' } }
    ],
    modernEssay: {
      en: 'Soften requests with "a bit".',
      vn: 'Làm nhẹ yêu cầu bằng "một chút".',
      jp: '「ちょっと」を使って依頼を和らげます。',
      kr: '요청을 완화하기 위해 "잠시"를 사용합니다.',
      'zh-tw': '「一下」能讓你的請求聽起來不像是命令。',
      'zh-cn': '「一下」能让你的请求听起来不像是命令。'
    },
    practiceCards: [
      { scenario: "你想借用一下同事的筆。", answer: "這支筆可以借我用一下嗎？", explanation: "加了「一下」，借東西的感覺就變得很輕微。" },
      { scenario: "店員問你要買什麼，你還沒決定。", answer: "我先看一下，謝謝。", explanation: "這是在商店裡最實用的委婉說法。" },
      { scenario: "你想請別人幫你開門。", answer: "可以幫我開一下門嗎？", explanation: "聽起來很有禮貌。" },
      { scenario: "你需要時間思考一個問題。", answer: "這個問題我需要想一下。", explanation: "「想一下」表示你很快就會給答案。" }
    ]
  },
  {
    id: 'chapter7',
    keyword: '介紹介紹',
    title: { en: 'Unit 7: 介紹介紹', vn: 'Bài 7: 介紹介紹', jp: '第7回：介紹介紹', kr: '제7장: 介紹介紹', 'zh-tw': '第七單元：介紹介紹', 'zh-cn': '第七单元：介绍介绍' },
    classicText: "「我給你介紹介紹。」",
    simpleChineseExplanation: "把動詞說兩次（比如：介紹介紹、討論討論），會讓語氣變得很輕鬆、很隨意。這表示這個動作不嚴肅，大家可以放鬆一點。這在社交場合非常有用。",
    modernExplanation: {
      en: 'Reduplication makes the tone more casual and polite.',
      vn: 'Lặp lại động từ làm cho giọng điệu trở nên thân mật hơn.',
      jp: '動詞の重畳は、口調をよりカジュアルで丁寧にします。',
      kr: '동사 중첩은 어조를 더 캐주얼하고 정중하게 만듭니다.',
      'zh-tw': '動詞重疊會讓動作聽起來很輕鬆。',
      'zh-cn': '动词重叠会让动作听起来很轻松。'
    },
    contrast: {
      ancient: { en: 'Direct: "I will introduce them."', vn: 'Trực tiếp: "Tôi sẽ giới thiệu họ."', jp: '直接的：「紹介します。」', kr: '직설적: "소개할게요."', 'zh-tw': '直接說：我介紹同學給你認識。', 'zh-cn': '直接说：我介绍同学给你认识。' },
      modern: { en: 'Euphemistic: "Let me introduce them (casually)."', vn: 'Ủy mị: "Để tôi giới thiệu (một chút)."', jp: '遠回し：「紹介させていただきますね。」', kr: '완곡적: "소개해 드릴게요."', 'zh-tw': '委婉說：我給你介紹介紹。', 'zh-cn': '委婉说：我给你介绍介绍。' }
    },
    vocab: [
      { word: '介紹介紹', meaning: { en: 'Introduce a bit', vn: 'Giới thiệu một chút', jp: '紹介する', kr: '소개하다', 'zh-tw': '輕鬆地介紹。', 'zh-cn': '轻松地介绍。' } }
    ],
    grammar: [
      { point: '動詞重疊 (AA / ABAB)', usage: { en: 'Softens the tone', vn: 'Làm nhẹ giọng điệu', jp: '口調を和らげる', kr: '어조를 부드럽게 함', 'zh-tw': '表示語氣輕鬆。', 'zh-cn': '表示语气轻松。' } }
    ],
    modernEssay: {
      en: 'Use reduplication for a relaxed atmosphere.',
      vn: 'Dùng lặp động từ để tạo không khí thoải mái.',
      jp: 'リラックスした雰囲気のために動詞の重畳を使います。',
      kr: '편안한 분위기를 위해 동사 중첩을 사용합니다.',
      'zh-tw': '重疊動詞，讓對話更有溫度。',
      'zh-cn': '重叠动词，让对话更有温度。'
    },
    practiceCards: [
      { scenario: "你想跟同事討論一個新計畫。", answer: "我們有空可以討論討論這個計畫。", explanation: "「討論討論」聽起來像是大家一起聊天，沒有壓力。" },
      { scenario: "你想去公園散步。", answer: "我們去公園走走吧。", explanation: "「走走」比「走路」聽起來更像休閒活動。" },
      { scenario: "你想看看朋友的新手機。", answer: "你的手機好漂亮，借我看看。", explanation: "「看看」表示只是隨便看一下。" },
      { scenario: "你想休息一下。", answer: "我累了，想休息休息。", explanation: "語氣很放鬆。" }
    ]
  },
  {
    id: 'chapter8',
    keyword: '好像',
    title: { en: 'Unit 8: 好像', vn: 'Bài 8: 好像', jp: '第8回：好像', kr: '제8장: 好像', 'zh-tw': '第八單元：好像', 'zh-cn': '第八单元：好像' },
    classicText: "「他今天好像不太高興。」",
    simpleChineseExplanation: "當你想說一個負面的觀察（比如：他不高興、這道菜不好吃）時，加一個「好像」。這表示這只是我的感覺，我不一定對。這樣對方聽了就不會覺得你在批評他。",
    modernExplanation: {
      en: 'Modal adverbs soften the impact of an observation.',
      vn: 'Trạng từ tình thái làm nhẹ bớt tác động của một nhận xét.',
      jp: '情態副詞は、観察結果の衝撃を和らげます。',
      kr: '양태 부사는 관찰 내용의 충격을 완화합니다.',
      'zh-tw': '使用「好像」可以讓你的觀察聽起來像是一種推測。',
      'zh-cn': '使用「好像」可以让你的观察听起来像是一种推测。'
    },
    contrast: {
      ancient: { en: 'Direct: "He is unhappy."', vn: 'Trực tiếp: "Anh ấy không vui."', jp: '直接的：「彼は不機嫌だ。」', kr: '직설적: "그는 기분이 안 좋아."', 'zh-tw': '直接說：他不高興。', 'zh-cn': '直接说：他不高兴。' },
      modern: { en: 'Euphemistic: "He seems a bit unhappy."', vn: 'Ủy mị: "Hình như anh ấy không vui lắm."', jp: '遠回し：「彼は元気がないみたいだね。」', kr: '완곡적: "그는 기분이 별로인 것 같아."', 'zh-tw': '委婉說：他好像不太高興。', 'zh-cn': '委婉说：他好像不太高兴。' }
    },
    vocab: [
      { word: '好像', meaning: { en: 'Seems like', vn: 'Hình như', jp: '…のようだ', kr: '...인 것 같다', 'zh-tw': '表示推測。', 'zh-cn': '表示推测。' } }
    ],
    grammar: [
      { point: '好像 + 觀察內容', usage: { en: 'It seems that...', vn: 'Hình như là...', jp: '…みたいです', kr: '...인 것 같아요', 'zh-tw': '禮貌地表達觀察。', 'zh-cn': '礼貌地表达观察。' } }
    ],
    modernEssay: {
      en: 'Use "seems" to avoid sounding judgmental.',
      vn: 'Dùng "hình như" để tránh nghe có vẻ phán xét.',
      jp: '「…のようだ」を使って決めつけを避けます。',
      kr: '판단하는 것처럼 들리지 않게 하기 위해 "...인 것 같다"를 사용합니다.',
      'zh-tw': '「好像」是人際關係的潤滑劑。',
      'zh-cn': '「好像」是人际关系的润滑剂。'
    },
    practiceCards: [
      { scenario: "你覺得朋友今天穿的衣服不太適合他。", answer: "這件衣服好像有點太大。 ", explanation: "不說「不適合」，說「好像有點大」，聽起來是在幫他建議。" },
      { scenario: "你覺得這道菜太鹹了。", answer: "這道菜好像有一點鹹。", explanation: "用「好像」來表達不滿，對方比較容易接受。" },
      { scenario: "你找不到你的鑰匙。", answer: "我的鑰匙好像不見了。", explanation: "這是一個很自然的推測。" },
      { scenario: "你覺得某人認錯人了。", answer: "你好像認錯人了。", explanation: "委婉地提醒對方。" }
    ]
  }
];
