
import { AppView, MultiLangText, ChapterContent } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Home', vn: 'Trang chủ', jp: 'ホーム', kr: '홈', 'zh-tw': '首頁', 'zh-cn': '首页' },
  chapter1: { en: 'Politeness', vn: 'Lễ phép', jp: '礼儀', kr: '예의', 'zh-tw': '禮貌標記', 'zh-cn': '礼貌标记' },
  chapter2: { en: 'Contrast', vn: 'Đối lập', jp: '対比', kr: '대조', 'zh-tw': '對比標記', 'zh-cn': '对比标记' },
  chapter3: { en: 'Downtoners', vn: 'Giảm nhẹ', jp: '緩衝', kr: '완화', 'zh-tw': '緩調詞', 'zh-cn': '缓调词' },
  chapter4: { en: 'Hedges', vn: 'Né tránh', jp: '回避', kr: '회피', 'zh-tw': '規避詞', 'zh-cn': '规避词' },
  chapter5: { en: 'Understaters', vn: 'Nói giảm', jp: '控えめ', kr: '절제', 'zh-tw': '低調陳述詞', 'zh-cn': '低调陈述词' },
  chapter6: { en: 'Verbal Classifiers', vn: 'Động lượng', jp: '動量詞', kr: '동량사', 'zh-tw': '動量詞應用', 'zh-cn': '动量词应用' },
  chapter7: { en: 'Reduplication', vn: 'Lặp động từ', jp: '動詞重畳', kr: '동사 중첩', 'zh-tw': '動詞重疊', 'zh-cn': '动词重叠' },
  chapter8: { en: 'Modal Adverbs', vn: 'Trạng từ tình thái', jp: '情態副詞', kr: '양태 부사', 'zh-tw': '情態副詞', 'zh-cn': '情态副词' }
};

export const HOME_CONTENT = {
  title: { 
    en: 'Chinese Euphemisms Lab', 
    vn: 'Phòng học Tiếng Trung khéo léo', 
    jp: '中国語の遠回し表現ラボ', 
    kr: '중국어 완곡 어법 연구실', 
    'zh-tw': '華語委婉語：初級跨文化教室', 
    'zh-cn': '华语委婉语：初级跨文化教室' 
  },
  subtitle: { 
    en: 'Master the art of polite communication in Chinese society.', 
    vn: 'Làm chủ nghệ thuật giao tiếp lịch sự trong xã hội Trung Hoa.', 
    jp: '中華圏社会における丁寧なコミュニケーションの技術をマスターしましょう。', 
    kr: '중국 사회에서 정중한 의사소통의 기술을 마스터하세요.', 
    'zh-tw': '學習華語社會中的「說話藝術」。透過委婉語，讓你在交流中更有禮貌，輕鬆融入華人社交圈。', 
    'zh-cn': '学习华语 society 中的「说话艺术」。透过委婉语，让你在交流中更有礼貌，轻松融入华人社交圈。' 
  }
};

export const CHAPTERS: ChapterContent[] = [
  {
    id: 'chapter1',
    title: { en: 'Unit 1: Politeness Markers', vn: 'Bài 1: Dấu hiệu lễ phép', jp: '第1回：礼儀のマーカー', kr: '제1장: 예의 표시', 'zh-tw': '第一單元：禮貌標記 (Politeness Markers)', 'zh-cn': '第一单元：礼貌标记' },
    classicText: "「不好意思，下次運動可以請你準時嗎？」",
    modernExplanation: {
      en: 'Politeness markers express respect and apology to cater to the other party\'s "negative face".',
      vn: 'Các dấu hiệu lễ phép thể hiện sự tôn trọng và xin lỗi để phù hợp với "thể diện" của đối phương.',
      jp: '礼儀のマーカーは、相手の「ネガティブ・フェイス」に配慮し、尊敬や謝罪を表します。',
      kr: '예의 표시는 상대방의 "소극적 체면"을 고려하여 존경과 사과를 표현합니다.',
      'zh-tw': '在華語文化中，當我們需要提醒別人或是表達歉意時，常會使用「禮貌標記」來緩衝語氣。例如「不好意思」可以用來引出後面的請求，讓對方聽起來比較舒服。',
      'zh-cn': '在华语文化中，当我们需要提醒别人或是表达歉意时，常会使用「礼貌标记」来缓冲语气。例如「不好意思」可以用来引出后面的请求，让对方听起来比较舒服。'
    },
    contrast: {
      ancient: { en: 'Direct: "You are late. Be on time next time."', vn: 'Trực tiếp: "Bạn đến muộn. Lần sau hãy đúng giờ."', jp: '直接的：「遅刻です。次は遅れないで。」', kr: '직설적: "늦었습니다. 다음에는 제시간에 오세요."', 'zh-tw': '直接表達：你遲到了，下次要記得準時到。', 'zh-cn': '直接表达：你迟到了，下次要记得准时到. ' },
      modern: { en: 'Euphemistic: "Sorry, could you please be on time next time?"', vn: 'Ủy mị: "Xin lỗi, lần sau bạn có thể đúng giờ không?"', jp: '遠回し：「すみませんが、次は時間を守っていただけますか？」', kr: '완곡적: "죄송하지만, 다음에는 제시간에 와주실 수 있나요?"', 'zh-tw': '委婉表達：不好意思，下次運動可以請你準時嗎？', 'zh-cn': '委婉表达：不好意思，下次运动可以请你准时吗？' }
    },
    vocab: [
      { word: '不好意思', meaning: { en: 'Excuse me / I\'m sorry', vn: 'Xin lỗi / Ngại quá', jp: 'すみません', kr: '죄송합니다 / 실례합니다', 'zh-tw': '最常用的禮貌標記，用於小事道歉或引出請求。', 'zh-cn': '最常用的礼貌标记，用于小事道歉 or 引出请求。' } },
      { word: '抱歉', meaning: { en: 'Sorry / My apologies', vn: 'Xin lỗi (trang trọng)', jp: '申し訳ありません', kr: '죄송합니다 (격식)', 'zh-tw': '比「不好意思」更正式一點的道歉。', 'zh-cn': '比「不好意思」更正式一点的道歉。' } },
      { word: '謝謝你的好意', meaning: { en: 'Thank you for your kindness', vn: 'Cảm ơn ý tốt của bạn', jp: 'お気遣いありがとうございます', kr: '친절에 감사드립니다', 'zh-tw': '用來委婉拒絕別人的幫助或提議。', 'zh-cn': '用来委婉拒绝别人的帮助或提议。' } }
    ],
    grammar: [
      { point: '「不好意思 + [請求]」', usage: { en: 'Excuse me, [request]', vn: 'Ngại quá, [yêu cầu]', jp: 'すみませんが、[依頼]', kr: '죄송하지만, [요청]', 'zh-tw': '用來禮貌地向別人提出要求。', 'zh-cn': '用来礼貌地向别人提出要求。' } },
      { point: '「可以請你...嗎？」', usage: { en: 'Could you please...?', vn: 'Có thể phiền bạn... không?', jp: '…していただけますか？', kr: '...해주실 수 있나요?', 'zh-tw': '委婉的疑問句，比直接命令更有禮貌。', 'zh-cn': '委婉的疑问句，比直接命令更有礼貌。' } }
    ],
    modernEssay: {
      en: 'In a museum meeting scenario: "Sorry, I was late last time. I will be on time next week."',
      vn: 'Trong tình huống gặp nhau ở bảo tàng: "Xin lỗi, lần trước tôi đến muộn. Tuần sau tôi sẽ đúng giờ."',
      jp: '博物館での待ち合わせ：「すみません、前回は遅れました。来週は必ず時間を守ります。」',
      kr: '박물관에서의 만남: "죄송합니다, 지난번에는 늦었습니다. 다음 주에는 꼭 제시간에 오겠습니다."',
      'zh-tw': '國安跟中明約好在博物館見面。中明想起上次遲到的事，主動說：「真不好意思，上次我遲到了，下個星期我一定會準時到。」這句「不好意思」成功緩解了可能的尷尬，也展現了他的禮貌。',
      'zh-cn': '国安跟中明约好在博物馆见面。中明想起上次迟到的事，主动说：「真不好意思，上次我迟到了，下个星期我一定会准时到。」这句「不好意思」成功缓解了可能的尴尬，也展现了他的礼貌。'
    }
  },
  {
    id: 'chapter2',
    title: { en: 'Unit 2: Contrastive Markers', vn: 'Bài 2: Dấu hiệu đối lập', jp: '第2回：対比のマーカー', kr: '제2장: 대조 표시', 'zh-tw': '第二單元：對比標記 (Contrastive Markers)', 'zh-cn': '第二单元：对比标记' },
    classicText: "「我有空，但是我有事。」",
    modernExplanation: {
      en: 'Contrastive markers like "but" are used to soften a different opinion or explain a situation indirectly.',
      vn: 'Các dấu hiệu đối lập như "nhưng" được dùng để làm nhẹ bớt ý kiến khác biệt hoặc giải thích tình huống gián tiếp.',
      jp: '「しかし」などの對比のマーカーは、異なる意見を和らげたり、状況を間接的に説明したりするために使われます。',
      kr: '“하지만”과 같은 대조 표시는 다른 의견을 완화하거나 상황을 간접적으로 설명할 때 사용됩니다.',
      'zh-tw': '運用具轉折的副詞，婉轉地表達自己不同的看法，或描述自己的狀況。例如「但是」可以用來引出拒絕的理由，而不會顯得太生硬。',
      'zh-cn': '运用具转折的副词，婉转地表达自己不同的看法，或描述自己的状况。例如「但是」可以用来引出拒绝的理由，而不会显得太生硬。'
    },
    contrast: {
      ancient: { en: 'Direct: "I can\'t meet you. I have other things to do."', vn: 'Trực tiếp: "Tôi không thể gặp bạn. Tôi có việc khác."', jp: '直接的：「会えません。用事があります。」', kr: '직설적: "만날 수 없습니다. 다른 일이 있습니다."', 'zh-tw': '直接表達：我明天不能去學校，我明天有事。', 'zh-cn': '直接表达：我明天不能去学校，我明天有事。' },
      modern: { en: 'Euphemistic: "I am free, but I have something to attend to."', vn: 'Ủy mị: "Tôi rảnh, nhưng tôi có việc bận."', jp: '遠回し：「時間はありますが、少し用事がありまして。」', kr: '완곡적: "시간은 있지만, 볼일이 좀 있어서요."', 'zh-tw': '委婉表達：我有空，但是我有事。（委婉說明自己不想見面）', 'zh-cn': '委婉表达：我有空，但是我有事。（委婉说明自己不想见面）' }
    },
    vocab: [
      { word: '但是', meaning: { en: 'But / However', vn: 'Nhưng', jp: 'しかし', kr: '하지만', 'zh-tw': '最常用的轉折詞。', 'zh-cn': '最常用的转折词。' } },
      { word: '不過', meaning: { en: 'But / Only', vn: 'Nhưng / Có điều', jp: 'ただ', kr: '하지만 / 다만', 'zh-tw': '語氣比「但是」稍微輕一點。', 'zh-cn': '语气比「但是」稍微轻一点。' } }
    ],
    grammar: [
      { point: '「[肯定] + 但是 + [否定/理由]」', usage: { en: 'Yes, but...', vn: 'Vâng, nhưng...', jp: 'はい、しかし…', kr: '네, 하지만...', 'zh-tw': '先肯定對方，再提出自己的難處。', 'zh-cn': '先肯定对方，再提出自己的难处。' } }
    ],
    modernEssay: {
      en: 'When asked to meet: "I have time, but I have something else to do tomorrow."',
      vn: 'Khi được hỏi gặp mặt: "Tôi có thời gian, nhưng ngày mai tôi có việc khác."',
      jp: '會う約束を求められた時：「時間はありますが、明日はちょっと用事がありまして。」',
      kr: '만남을 요청받았을 때: "시간은 있는데, 내일은 다른 일이 좀 있어서요."',
      'zh-tw': '宜文問友美什麼時候見面，友美說：「如果有空，我再跟你約時間。」宜文接著說：「有空啊，但是我明天不會來學校，等妳決定了再給我打電話吧。」這裡的「但是」委婉地表達了時間上的不便。',
      'zh-cn': '宜文问友美什么时候见面，友美说：「如果有空，我再跟你约时间。」宜文接着说：「有空啊，但是 food 我明天不会来学校，等妳决定了再给我打电话吧。」这里的「但是」委婉地表达了时间上的不便。'
    }
  },
  {
    id: 'chapter3',
    title: { en: 'Unit 3: Downtoners', vn: 'Bài 3: Từ giảm nhẹ', jp: '第3回：緩衝の表現', kr: '제3장: 완화 표현', 'zh-tw': '第三單元：緩調詞 (Downtoners)', 'zh-cn': '第三单元：缓调词' },
    classicText: "「這個週末可能沒有空。」",
    modernExplanation: {
      en: 'Downtoners like "maybe" reduce the impact of a negative response on the listener.',
      vn: 'Các từ giảm nhẹ như "có lẽ" làm giảm tác động của câu trả lời tiêu cực đối với người nghe.',
      jp: '「たぶん」などの緩衝の表現は、否定的な返答が聞き手に與える衝撃を和らげます。',
      kr: '“아마도”와 같은 완화 표현은 부정적인 답변이 듣는 사람에게 주는 충격을 줄여줍니다.',
      'zh-tw': '減緩話語對受話者可能造成的衝擊。使用「可能」或「恐怕」可以讓拒絕聽起來不那麼絕對。',
      'zh-cn': '减缓话语对受话者可能造成的冲击。使用「可能」或「恐怕」可以让拒绝听起来不那么绝对。'
    },
    contrast: {
      ancient: { en: 'Direct: "I am busy this weekend. I can\'t go."', vn: 'Trực tiếp: "Cuối tuần này tôi bận. Tôi không đi được."', jp: '直接的：「今週末は忙しいです。行けません。」', kr: '직설적: "이번 주말은 바쁩니다. 못 갑니다."', 'zh-tw': '直接表達：我這個週末沒空，我不能去。', 'zh-cn': '直接表达：我这个周末没空，我不能去。' },
      modern: { en: 'Euphemistic: "I might not be free this weekend."', vn: 'Ủy mị: "Cuối tuần này có lẽ tôi không rảnh."', jp: '遠回し：「今週末は、もしかしたら時間が取れないかもしれません。」', kr: '완곡적: "이번 주말에는 아마 시간이 안 될 것 같습니다."', 'zh-tw': '委婉表達：這個週末可能沒有空。（委婉拒絕）', 'zh-cn': '委婉表达：这个周末可能没有空。（委婉拒绝）' }
    },
    vocab: [
      { word: '可能', meaning: { en: 'Maybe / Likely', vn: 'Có lẽ', jp: 'たぶん', kr: '아마도', 'zh-tw': '表示不確定。', 'zh-cn': '表示不确定。' } },
      { word: '恐怕', meaning: { en: 'I\'m afraid that...', vn: 'E là...', jp: '恐らく', kr: '아마 ...일 것이다', 'zh-tw': '帶有一點遺憾的推測。', 'zh-cn': '带有一点遗憾的推测。' } }
    ],
    grammar: [
      { point: '「可能 + [否定內容]」', usage: { en: 'Might not...', vn: 'Có lẽ không...', jp: '…ないかもしれません', kr: '...하지 않을 수도 있습니다', 'zh-tw': '用來委婉地表達不方便。', 'zh-cn': '用来委婉地表达不方便。' } }
    ],
    modernEssay: {
      en: 'Declining an invitation: "I might be busy this weekend, let\'s see."',
      vn: 'Từ chối lời mời: "Cuối tuần này có lẽ tôi bận, để xem sao."',
      jp: '誘いを断る時：「今週末はたぶん忙しいので、また今度ね。」',
      kr: '초대를 거절할 때: "이번 주말에는 아마 바쁠 것 같아요, 다음에 봐요."',
      'zh-tw': '友美問宜文週末要不要見面，宜文說：「可能這個週末吧。如果你有空，我再跟你約時間。」這裡的「可能」給了自己彈性，也避免了直接拒絕的尷尬。',
      'zh-cn': '友美问宜文周末要不要见面，宜文说：「可能这个周末吧。如果你有空，我再跟你约时间。」这里的「可能」给了自己弹性，也避免了直接拒绝的尴尬。'
    }
  },
  {
    id: 'chapter4',
    title: { en: 'Unit 4: Hedges', vn: 'Bài 4: Từ né tránh', jp: '第4回：回避の表現', kr: '제4장: 회피 표현', 'zh-tw': '第四單元：規避詞 (Hedges)', 'zh-cn': '第四单元：规避词' },
    classicText: "「我比較常去運動。」",
    modernExplanation: {
      en: 'Hedges avoid clear assertions to prevent being too precise or potentially offending.',
      vn: 'Các từ né tránh giúp tránh những khẳng định quá rõ ràng để không quá chính xác hoặc có thể gây mếch lòng.',
      jp: '回避の表現は、斷定を避けることで、正確すぎたり相手を不快にさせたりするのを防ぎます。',
      kr: '회피 표현은 너무 정확하거나 상대방을 불쾌하게 할 수 있는 단정적인 표현을 피하게 해줍니다.',
      'zh-tw': '避免清楚的陳述，以避免言語過於精確而激怒對方。使用「比較」可以讓語氣聽起來比較客觀、不那麼武斷。',
      'zh-cn': '避免清楚的陈述，以避免言语过于精确而激怒对方。使用「比较」可以让语气听起来比较客观、不那么武断。'
    },
    contrast: {
      ancient: { en: 'Direct: "I exercise every day."', vn: 'Trực tiếp: "Tôi tập thể dục mỗi ngày."', jp: '直接的：「毎日運動しています。」', kr: '직설적: "매일 운동합니다."', 'zh-tw': '直接表達：我天天都去運動。', 'zh-cn': '直接表达：我天天都去运动。' },
      modern: { en: 'Euphemistic: "I exercise relatively often."', vn: 'Ủy mị: "Tôi khá thường xuyên tập thể dục."', jp: '遠回し：「比較的よく運動するようにしています。」', kr: '완곡적: "비교적 자주 운동하는 편입니다."', 'zh-tw': '委婉表達：我比較常去運動。（規避清楚陳述）', 'zh-cn': '委婉表达：我比较常去运动。（规避清楚陈述）' }
    },
    vocab: [
      { word: '比較', meaning: { en: 'Relatively / More', vn: 'Khá / Hơn', jp: '比較的', kr: '비교적', 'zh-tw': '程度副詞。', 'zh-cn': '程度副词。' } },
      { word: '比較少', meaning: { en: 'Relatively less', vn: 'Khá ít', jp: 'あまり…ない', kr: '비교적 적게', 'zh-tw': '表示頻率或程度較低。', 'zh-cn': '表示频率或程度较低。' } }
    ],
    grammar: [
      { point: '「比較 + [形容詞/動詞]」', usage: { en: 'Relatively [adj/verb]', vn: 'Khá [tính từ/động từ]', jp: '比較的…', kr: '비교적 ...하다', 'zh-tw': '讓陳述聽起來不那麼絕對。', 'zh-cn': '让陈述听起来不那么绝对。' } }
    ],
    modernEssay: {
      en: 'Talking about habits: "It\'s been quite hot lately, I don\'t go out much."',
      vn: 'Nói về thói quen: "Dạo này khá nóng, tôi ít ra ngoài."',
      jp: '習慣について話す時：「最近は比較的暑いので、あまり外に出ません。」',
      kr: '습관에 대해 이야기할 때: "요즘은 비교적 더워서 밖으로 잘 안 나가요."',
      'zh-tw': '有人問你最近有沒有運動，如果你不想說得太死，可以說：「最近天氣比較熱，我不常去運動。」這裡的「比較」讓你的回答聽起來很自然，也不會讓人覺得你在找藉口。',
      'zh-cn': '有人问你最近有没有运动，如果你不想说得太死，可以说：「最近天气比较热，我不常去运动。」这里的「比较」让你回答听起来很自然，也不会让人觉得你在找借口。'
    }
  },
  {
    id: 'chapter5',
    title: { en: 'Unit 5: Understaters', vn: 'Bài 5: Nói giảm nói tránh', jp: '第5回：控えめな表現', kr: '제5장: 절제된 표현', 'zh-tw': '第五單元：低調陳述詞 (Understaters)', 'zh-cn': '第五单元：低调陈述词' },
    classicText: "「聽說那部電影不好看。」",
    modernExplanation: {
      en: 'Understaters like "I heard" reduce the directness of a suggestion or statement.',
      vn: 'Các từ nói giảm như "nghe nói" làm giảm tính trực tiếp của một gợi ý hoặc khẳng định.',
      jp: '「聞いたところでは」などの控えめな表現は、提案や発言の直接性を和らげます。',
      kr: '“듣기로는”과 같은 절제된 표현은 제안이나 발언의 직접성을 완화합니다.',
      'zh-tw': '降低說話者建議或陳述事物的程度。使用「聽說」可以把觀點推給第三方，避免自己顯得太主觀。',
      'zh-cn': '降低说话者建议或陈述事物的程度。使用「听说」可以把观点推给第三方，避免自己显得太主观。'
    },
    contrast: {
      ancient: { en: 'Direct: "That movie is bad. I don\'t want to see it."', vn: 'Trực tiếp: "Phim đó dở lắm. Tôi không muốn xem."', jp: '直接的：「あの映画はつまらないです。見たくありません。」', kr: '직설적: "그 영화는 재미없습니다. 보고 싶지 않아요."', 'zh-tw': '直接表達：那部電影很難看，我不想看。', 'zh-cn': '直接表达：那部电影很难看，我不想看。' },
      modern: { en: 'Euphemistic: "I heard that movie isn\'t very good."', vn: 'Ủy mị: "Nghe nói phim đó không hay lắm."', jp: '遠回し：「あの映画、あまり評判が良くないみたいですよ。」', kr: '완곡적: "그 영화 별로라는 소문을 들었어요."', 'zh-tw': '委婉表達：聽說那部電影不好看。（委婉說明自己不想看）', 'zh-cn': '委婉表达：听说那部电影不好看。（委婉说明自己不想看）' }
    },
    vocab: [
      { word: '聽說', meaning: { en: 'I heard / It is said', vn: 'Nghe nói', jp: '聞いたところでは', kr: '듣기로는', 'zh-tw': '引用他人的話。', 'zh-cn': '引用他人的话。' } },
      { word: '我看新聞說', meaning: { en: 'I saw on the news...', vn: 'Tôi xem tin tức thấy nói...', jp: 'ニュースで見ましたが', kr: '뉴스에서 봤는데...', 'zh-tw': '引用媒體來源。', 'zh-cn': '引用媒体来源。' } },
      { word: '據說', meaning: { en: 'According to...', vn: 'Theo như...', jp: '伝えられるところによれば', kr: '전해지는 바에 의하면', 'zh-tw': '較正式的引用。', 'zh-cn': '较正式的引用。' } }
    ],
    grammar: [
      { point: '「聽說 + [內容]」', usage: { en: 'I heard that...', vn: 'Nghe nói là...', jp: '…だそうですね', kr: '...라고 하더라고요', 'zh-tw': '用來引出非直接的觀點。', 'zh-cn': '用来引出非直接的观点。' } }
    ],
    modernEssay: {
      en: 'Suggesting an activity: "I heard this movie is interesting, shall we go together?"',
      vn: 'Gợi ý một hoạt động: "Nghe nói phim này hay lắm, chúng ta đi xem chung không?"',
      jp: '活動を提案する時：「この映画、面白いらしいですよ。一緒に行きませんか？」',
      kr: '활동을 제안할 때: "이 영화 재미있다고 하던데, 같이 보러 갈래요?"',
      'zh-tw': '如果你不想去看某部電影，但又不想直接拒絕朋友，你可以說：「聽說那部電影評價不太好，我們要不要換一部？」這樣既表達了你的想法，又給了朋友面子。',
      'zh-cn': '如果你不想去看某部电影，但又不想直接拒绝朋友，你可以说：「听说那部电影评价不太好，我们要不要换一部？」这样既表达了你的想法，又给了朋友面子。'
    }
  },
  {
    id: 'chapter6',
    title: { en: 'Unit 6: Verbal Classifiers', vn: 'Bài 6: Động lượng từ', jp: '第6回：動量詞の活用', kr: '제6장: 동량사 활용', 'zh-tw': '第六單元：動量詞應用 (Verbal Classifiers)', 'zh-cn': '第六单元：动量词应用' },
    classicText: "「我想一下。」",
    modernExplanation: {
      en: 'Using "a bit" or "for a while" (yíxià) makes an action sound less demanding or temporary.',
      vn: 'Sử dụng "một chút" (yíxià) làm cho hành động nghe có vẻ ít đòi hỏi hơn hoặc chỉ là tạm thời.',
      jp: '「ちょっと」や「しばらく」（一下）を使うことで、動作がそれほど負担ではない、あるいは一時的なものであるという印象を與えます。',
      kr: '“잠시”나 “조금”(一下)을 사용하는 것은 동작이 덜 부담스럽거나 일시적이라는 느낌을 줍니다.',
      'zh-tw': '避免清楚的陳述，以避免言語過於精確而激怒對方。使用「一下」可以縮短動作感知的時間，讓請求聽起來更輕鬆。',
      'zh-cn': '避免清楚的陈述，以避免言语过于精确而激怒对方。使用「一下」可以缩短动作感知的时间，让请求听起来更轻松。'
    },
    contrast: {
      ancient: { en: 'Direct: "I need to think. Wait for me."', vn: 'Trực tiếp: "Tôi cần suy nghĩ. Đợi tôi."', jp: '直接的：「考えます。待ってください。」', kr: '직설적: "생각해 보겠습니다. 기다려 주세요."', 'zh-tw': '直接表達：我要思考，你等我。', 'zh-cn': '直接表达：我要思考，你等我。' },
      modern: { en: 'Euphemistic: "Let me think for a moment."', vn: 'Ủy mị: "Để tôi nghĩ một chút."', jp: '遠回し：「ちょっと考えさせてください。」', kr: '완곡적: "잠시만 생각해 볼게요."', 'zh-tw': '委婉表達：我想一下。（委婉說明價格太高或需要思考）', 'zh-cn': '委婉表达：我想一下。（委婉说明价格太高或需要思考）' }
    },
    vocab: [
      { word: '一下', meaning: { en: 'A bit / For a moment', vn: 'Một chút', jp: 'ちょっと', kr: '잠시 / 조금', 'zh-tw': '表示動作時間短促。', 'zh-cn': '表示动作时间短促。' } },
      { word: '算一下', meaning: { en: 'Calculate a bit', vn: 'Tính một chút', jp: '計算してみる', kr: '계산해 보다', 'zh-tw': '禮貌地要求計算。', 'zh-cn': '礼貌地要求计算。' } },
      { word: '等一下', meaning: { en: 'Wait a moment', vn: 'Đợi một chút', jp: 'ちょっと待って', kr: '잠시만요', 'zh-tw': '請對方稍等。', 'zh-cn': '请对方稍等。' } }
    ],
    grammar: [
      { point: '「動詞 + 一下」', usage: { en: 'Do [verb] for a bit', vn: 'Làm [động từ] một chút', jp: 'ちょっと…する', kr: '잠시 ...하다', 'zh-tw': '讓動作聽起來更隨意、不嚴肅。', 'zh-cn': '让动作听起来更随意、不严肃。' } }
    ],
    modernEssay: {
      en: 'In a shop: "The price is a bit high, let me think about it."',
      vn: 'Trong cửa hàng: "Giá hơi cao, để tôi nghĩ lại một chút."',
      jp: '店で：「値段が少し高いですね、ちょっと考えさせてください。」',
      kr: '상점에서: "가격이 좀 비싸네요, 잠시만 생각해 볼게요."',
      'zh-tw': '當店員問你要不要買這件衣服時，如果你覺得太貴，可以說：「這件衣服很漂亮，但我再想一下。」這裡的「一下」給了你離開的理由，也不會讓店員難堪。',
      'zh-cn': '当店员问你要不要买这件衣服时，如果你觉得太贵，可以说：「这件衣服很漂亮，但我再想一下。」这里的「一下」给了你离开的理由，也不会让店员难堪。'
    }
  },
  {
    id: 'chapter7',
    title: { en: 'Unit 7: Reduplication', vn: 'Bài 7: Lặp động từ', jp: '第7回：動詞の重畳', kr: '제7장: 동사 중첩', 'zh-tw': '第七單元：動詞重疊 (Reduplication)', 'zh-cn': '第七单元：动词重叠' },
    classicText: "「我給你介紹介紹。」",
    modernExplanation: {
      en: 'Repeating a verb (AA or ABAB) makes the tone more casual, relaxed, and polite.',
      vn: 'Lặp lại động từ (AA hoặc ABAB) làm cho giọng điệu trở nên thân mật, thư giãn và lịch sự hơn.',
      jp: '動詞を繰り返す（AAまたはABAB）ことで、口調がよりカジュアルでリラックスしたものになり、丁寧さが増します。',
      kr: '동사를 중첩하는 것(AA 또는 ABAB)은 어조를 더 캐주얼하고 편안하며 정중하게 만듭니다.',
      'zh-tw': '降低說話者建議或陳述事物的程度。動詞重疊（如：介紹介紹）會讓動作聽起來很輕鬆，像是在嘗試或隨意進行。',
      'zh-cn': '降低说话者建议或陈述事物的程度。动词重叠（如：介绍介绍）会让动作听起来很轻松，像是在尝试或随意进行。'
    },
    contrast: {
      ancient: { en: 'Direct: "I will introduce them to you."', vn: 'Trực tiếp: "Tôi sẽ giới thiệu họ cho bạn."', jp: '直接的：「彼らを紹介します。」', kr: '직설적: "그들을 소개해 주겠습니다."', 'zh-tw': '直接表達：我介紹我的同學給你認識。', 'zh-cn': '直接表达：我介绍我的同学给你认识。' },
      modern: { en: 'Euphemistic: "Let me introduce them to you (briefly/casually)."', vn: 'Ủy mị: "Để tôi giới thiệu họ cho bạn (một chút)."', jp: '遠回し：「彼らを紹介させていただきますね。」', kr: '완곡적: "그들을 소개해 드릴게요."', 'zh-tw': '委婉表達：他們都是我的同學，我給你介紹介紹。（比較委婉）', 'zh-cn': '委婉表达：他们都是我的同学，我给你介绍介绍。（比较委婉）' }
    },
    vocab: [
      { word: '介紹介紹', meaning: { en: 'Introduce a bit', vn: 'Giới thiệu một chút', jp: '紹介する', kr: '소개하다', 'zh-tw': '輕鬆地介紹。', 'zh-cn': '轻松地介绍。' } },
      { word: '討論討論', meaning: { en: 'Discuss a bit', vn: 'Thảo luận một chút', jp: '相談する', kr: '의논하다', 'zh-tw': '隨意地討論。', 'zh-cn': '随意地讨论。' } },
      { word: '打掃打掃', meaning: { en: 'Clean up a bit', vn: 'Dọn dẹp một chút', jp: '掃除する', kr: '청소하다', 'zh-tw': '簡單地打掃。', 'zh-cn': '简单地打扫。' } }
    ],
    grammar: [
      { point: '「動詞重疊 (AA / ABAB)」', usage: { en: 'Softens the tone of the action', vn: 'Làm nhẹ giọng điệu của hành động', jp: '動作の口調を和らげる', kr: '동작의 어조를 부드럽게 함', 'zh-tw': '表示嘗試、時間短或語氣輕鬆。', 'zh-cn': '表示尝试、时间短 or 语气轻松。' } }
    ],
    modernEssay: {
      en: 'Introducing friends: "These are my classmates, let me introduce you guys."',
      vn: 'Giới thiệu bạn bè: "Đây là bạn cùng lớp của tôi, để tôi giới thiệu các bạn với nhau."',
      jp: '友達を紹介する時：「クラスメートです。紹介しますね。」',
      kr: '친구를 소개할 때: "제 반 친구들이에요. 서로 소개해 줄게요."',
      'zh-tw': '在聚會上，你想介紹新朋友給老朋友認識。如果你說「我要介紹他」，聽起來有點嚴肅。如果你說「我來給你們介紹介紹」，氣氛立刻就會變得輕鬆愉快。',
      'zh-cn': '在聚会上，你想介绍新朋友给老朋友认识。如果你说「我要介绍他」，听起来有点严肃。如果你说「我来给你们介绍介绍」，气氛立刻就会变得轻松愉快。'
    }
  },
  {
    id: 'chapter8',
    title: { en: 'Unit 8: Modal Adverbs', vn: 'Bài 8: Trạng từ tình thái', jp: '第8回：情態副詞の役割', kr: '제8장: 양태 부사의 역할', 'zh-tw': '第八單元：情態副詞 (Modal Adverbs)', 'zh-cn': '第八单元：情态副词' },
    classicText: "「他今天好像不太高興。」",
    modernExplanation: {
      en: 'Modal adverbs like "seem" (hǎoxiàng) soften the impact of an observation on the listener.',
      vn: 'Trạng từ tình thái như "hình như" (hǎoxiàng) làm nhẹ bớt tác động của một nhận xét đối với người nghe.',
      jp: '「…のようだ」（好像）などの情態副詞は、觀察結果が聞き手に與える衝撃を和らげます。',
      kr: '“...인 것 같다”(好像)와 같은 양태 부사는 관찰 내용이 듣는 사람에게 주는 충격을 완화합니다.',
      'zh-tw': '減緩話語對受話者可能造成的衝擊。使用「好像」或「似乎」可以讓你的觀察聽起來像是一種推測，而不是直接的指責或斷定。',
      'zh-cn': '减缓话语对受话者可能造成的冲击。使用「好像」或「似乎」可以让你的观察听起来像是一种推測，而不是直接的指责或断定。'
    },
    contrast: {
      ancient: { en: 'Direct: "He is unhappy today. Don\'t talk to him."', vn: 'Trực tiếp: "Hôm nay anh ấy không vui. Đừng nói chuyện với anh ấy."', jp: '直接的：「彼は今日不機嫌です。話しかけないで。」', kr: '직설적: "그는 오늘 기분이 안 좋습니다. 말 걸지 마세요."', 'zh-tw': '直接表達：他不高興，你不要跟他講話。', 'zh-cn': '直接表达：他不高兴，你不要跟他讲话。' },
      modern: { en: 'Euphemistic: "He seems a bit unhappy today."', vn: 'Ủy mị: "Hình như hôm nay anh ấy không được vui lắm."', jp: '遠回し：「彼は今日、あまり元気がないみたいですね。」', kr: '완곡적: "그는 오늘 기분이 별로 안 좋아 보여요."', 'zh-tw': '委婉表達：他今天好像不太高興。（減緩對話者可能造成的衝擊）', 'zh-cn': '委婉表达：他今天好像不太高兴。（减缓对话者可能造成的冲击）' }
    },
    vocab: [
      { word: '好像', meaning: { en: 'Seems like / As if', vn: 'Hình như / Giống như', jp: '…のようだ', kr: '...인 것 같다', 'zh-tw': '表示推測。', 'zh-cn': '表示推测。' } },
      { word: '似乎', meaning: { en: 'Apparently / It seems', vn: 'Dường như', jp: 'どうやら', kr: '듯하다', 'zh-tw': '較正式的推測。', 'zh-cn': '較正式的推測。' } }
    ],
    grammar: [
      { point: '「好像 + [觀察內容]」', usage: { en: 'It seems that...', vn: 'Hình như là...', jp: '…みたいです', kr: '...인 것 같아요', 'zh-tw': '用來禮貌地表達自己的觀察。', 'zh-cn': '用来礼貌地表达自己的观察。' } }
    ],
    modernEssay: {
      en: 'Observing a situation: "It seems like it might rain, maybe we should stay in."',
      vn: 'Quan sát tình huống: "Hình như trời sắp mưa, có lẽ chúng ta nên ở nhà."',
      jp: '状況を観察する時：「雨が降りそうですね。中にいた方がいいかもしれません。」',
      kr: '상황을 관찰할 때: "비가 올 것 같아요. 안에 있는 게 좋겠어요."',
      'zh-tw': '如果你看到同事心情不好，直接問「你為什麼生氣？」可能會讓他更不舒服。如果你說「你今天好像有點累，要不要休息一下？」，這就是一種充滿關懷的委婉表達。',
      'zh-cn': '如果你看到同事心情不好，直接问「你为什么生气？」可能会让他更不舒服。如果你说「你今天好像有点累，要不要休息一下？」，这就是一种充满关怀的委婉表达。'
    }
  }
];
