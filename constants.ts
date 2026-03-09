
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
    classicText: {
      en: '"Excuse me, could you please be on time for the next exercise?"',
      vn: '"Ngại quá, lần sau tập thể dục bạn có thể đến đúng giờ được không?"',
      jp: '「すみません、次回の運動は時間を守っていただけますか？」',
      kr: '"죄송하지만, 다음 운동 때는 제시간에 와주실 수 있나요?"',
      'zh-tw': '「不好意思，下次運動可以請你準時嗎？」',
      'zh-cn': '「不好意思，下次運動可以請你準時嗎？」'
    },
    simpleChineseExplanation: {
      en: '"Bu hao yi si" is the most commonly used polite phrase in Chinese. When we want to trouble others, ask questions, or make a small mistake, we can say it first. It makes you sound very polite.',
      vn: '"Bu hao yi si" là cụm từ lịch sự được sử dụng phổ biến nhất trong tiếng Trung. Khi muốn làm phiền người khác, đặt câu hỏi hoặc mắc một lỗi nhỏ, chúng ta có thể nói câu này trước. Nó khiến bạn nghe rất lịch sự.',
      jp: '「不好意思」は中国語で最もよく使われる礼儀正しい言葉です。他人に迷惑をかけたい時、質問したい時、あるいはちょっとした間違いを犯した時、まずこれを言うことができます。とても礼儀正しく聞こえます。',
      kr: '"부하오이쓰(不好意思)"는 중국어에서 가장 흔히 사용되는 정중한 표현입니다. 다른 사람에게 폐를 끼치거나, 질문을 하거나, 작은 실수를 했을 때 먼저 이 말을 할 수 있습니다. 매우 예의 바르게 들립니다.',
      'zh-tw': '「不好意思」是華語中最常用的禮貌詞。當我們想麻煩別人、問問題、或者做錯了一點小事時，都可以先說「不好意思」。這會讓對方覺得你很有禮貌。',
      'zh-cn': '「不好意思」是华语中最常用的礼貌词。当我们想麻烦别人、问问题、或者做错了一点小事时，都可以先说「不好意思」。这会让对方觉得你很有礼貌。'
    },
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
      { 
        scenario: {
          en: "You want to ask for directions, how do you start?",
          vn: "Bạn muốn hỏi đường, bạn bắt đầu nói như thế nào?",
          jp: "道を聞きたい時、どうやって話し始めますか？",
          kr: "길을 묻고 싶을 때 어떻게 말을 시작하나요?",
          'zh-tw': "你想問路，要怎麼開始說話？",
          'zh-cn': "你想问路，要怎么开始说话？"
        }, 
        answer: {
          en: "Excuse me, may I ask where the MRT station is?",
          vn: "Ngại quá, cho hỏi trạm tàu điện ngầm ở đâu?",
          jp: "すみません、地下鉄の駅はどこですか？",
          kr: "죄송합니다, 지하철역이 어디인가요?",
          'zh-tw': "不好意思，請問捷運站在哪裡？",
          'zh-cn': "不好意思，请问捷运站在哪里？"
        }, 
        explanation: {
          en: "Saying 'Excuse me' before asking makes people more willing to help.",
          vn: "Nói 'Ngại quá' trước khi hỏi sẽ khiến người ta sẵn lòng giúp đỡ hơn.",
          jp: "質問する前に「すみません」と言うと、相手はより助けてくれやすくなります。",
          kr: "묻기 전에 '죄송합니다'라고 말하면 사람들이 더 기꺼이 도와줄 것입니다.",
          'zh-tw': "先說「不好意思」再問問題，對方會更願意幫你。",
          'zh-cn': "先说「不好意思」再问问题，对方会更愿意帮你。"
        }
      },
      { 
        scenario: {
          en: "You are in the library and want to ask the person next to you to be quieter.",
          vn: "Bạn đang ở trong thư viện, muốn nhờ người bên cạnh nói khẽ một chút.",
          jp: "図書館にいて、隣の人に少し静かにしてほしい時。",
          kr: "도서관에서 옆 사람에게 조금만 조용히 해달라고 부탁하고 싶을 때.",
          'zh-tw': "你在圖書館，想請旁邊的人小聲一點。",
          'zh-cn': "你在图书馆，想请旁边的人小声一点。"
        }, 
        answer: {
          en: "Excuse me, could you please be a bit quieter?",
          vn: "Ngại quá, bạn có thể nói khẽ một chút được không?",
          jp: "すみません、少し静かにしていただけますか？",
          kr: "죄송합니다, 조금만 조용히 해주실 수 있나요?",
          'zh-tw': "不好意思，可以請你小聲一點嗎？",
          'zh-cn': "不好意思，可以请你小声一点吗？"
        }, 
        explanation: {
          en: "Starting with 'Excuse me' sounds like a request, not a scolding.",
          vn: "Bắt đầu bằng 'Ngại quá' nghe giống như một lời yêu cầu chứ không phải đang mắng mỏ.",
          jp: "「すみません」で始めると、叱っているのではなく依頼しているように聞こえます。",
          kr: "'죄송합니다'로 시작하면 야단치는 것이 아니라 요청하는 것처럼 들립니다.",
          'zh-tw': "用「不好意思」開頭，聽起來不是在罵人，是在請求。",
          'zh-cn': "用「不好意思」开头，听起来不是在骂人，是在请求。"
        }
      },
      { 
        scenario: {
          en: "You are five minutes late for a meeting.",
          vn: "Bạn đến muộn cuộc họp 5 phút.",
          jp: "会議に5分遅刻しました。",
          kr: "회의에 5분 늦었습니다.",
          'zh-tw': "你開會遲到了五分鐘。",
          'zh-cn': "你开会迟到了五分钟。"
        }, 
        answer: {
          en: "Excuse me, I'm late.",
          vn: "Ngại quá, tôi đến muộn.",
          jp: "すみません、遅れました。",
          kr: "죄송합니다, 늦었습니다.",
          'zh-tw': "不好意思，我遲到了。",
          'zh-cn': "不好意思，我迟到了。"
        }, 
        explanation: {
          en: "'Excuse me' is perfect for minor lateness.",
          vn: "'Ngại quá' rất phù hợp cho việc đến muộn một chút.",
          jp: "ちょっとした遅刻には「すみません」が最適です。",
          kr: "약간 늦었을 때는 '죄송합니다'가 아주 적절합니다.",
          'zh-tw': "小小的遲到用「不好意思」非常合適。",
          'zh-cn': "小小的迟到用「不好意思」非常合适。"
        }
      },
      { 
        scenario: {
          en: "You want to pass through, but someone is blocking the way.",
          vn: "Bạn muốn đi qua, nhưng có người đang chắn đường.",
          jp: "通りたいのですが、誰かが道をふさいでいます。",
          kr: "지나가고 싶은데 누군가 길을 막고 있습니다.",
          'zh-tw': "你想借過，前面有人擋住路。",
          'zh-cn': "你想借过，前面有人擋住路。"
        }, 
        answer: {
          en: "Excuse me, let me pass through.",
          vn: "Ngại quá, cho tôi đi nhờ một chút.",
          jp: "すみません、ちょっと通してください。",
          kr: "죄송합니다, 잠시 지나가겠습니다.",
          'zh-tw': "不好意思，借過一下。",
          'zh-cn': "不好意思，借过一下。"
        }, 
        explanation: {
          en: "This is the most common way to ask to pass.",
          vn: "Đây là cách phổ biến nhất để xin đi nhờ.",
          jp: "これは通り抜ける際、最も一般的な言い方です。",
          kr: "지나갈 때 가장 흔히 사용하는 표현입니다.",
          'zh-tw': "這是最常用的借過說法。",
          'zh-cn': "這是最常用的借過說法。"
        }
      }
    ]
  },
  {
    id: 'chapter2',
    keyword: '「但是」',
    title: { en: 'Unit 2: 但是', vn: 'Bài 2: 但是', jp: '第2回：但是', kr: '제2장: 但是', 'zh-tw': '第二單元：「但是」', 'zh-cn': '第二单元：「但是」' },
    classicText: {
      en: '"I have time, but I have things to do."',
      vn: '"Tôi rảnh, nhưng tôi có việc."',
      jp: '「時間はありますが、用事があります。」',
      kr: '"시간은 있지만, 일이 있습니다."',
      'zh-tw': '「我有空，但是我有事。」',
      'zh-cn': '「我有空，但是我有事。」'
    },
    simpleChineseExplanation: {
      en: 'When you want to refuse someone, saying "No" directly is too harsh. We say something nice first, then use "but" to say the real reason. This way, the other person won\'t be as sad.',
      vn: 'Khi bạn muốn từ chối ai đó, nói "Không" trực tiếp là quá gay gắt. Chúng ta nói điều gì đó tốt đẹp trước, sau đó dùng "nhưng" để nói lý do thực sự. Bằng cách này, đối phương sẽ không cảm thấy quá buồn.',
      jp: '誰かを断りたい時、直接「いいえ」と言うのはきつすぎます。まず何か良いことを言い、それから「しかし」を使って本当の理由を言います。そうすれば、相手はそれほど悲しまないでしょう。',
      kr: '누군가를 거절하고 싶을 때 직접적으로 "아니요"라고 말하는 것은 너무 가혹합니다. 먼저 좋은 말을 한 다음 "하지만"을 사용하여 진짜 이유를 말합니다. 이렇게 하면 상대방이 덜 서운해할 것입니다.',
      'zh-tw': '當你想拒絕別人的時候，直接說「不行」或「不要」太兇了。我們先說一點好聽的話，然後用「但是」說出真正的理由。這樣對方比較不會難過。',
      'zh-cn': '當你想拒絕別人的時候，直接說「不行」或「不要」太兇了。我們先說一點好聽的話，然後用「但是」說出真正的理由。這樣對方比較不會難過。'
    },
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
      { 
        scenario: {
          en: "A friend invites you to dinner, but you have an exam tomorrow and can't go.",
          vn: "Một người bạn mời bạn đi ăn tối, nhưng ngày mai bạn có bài kiểm tra và không thể đi.",
          jp: "友達が夕食に誘ってくれましたが、明日試験があるので行けません。",
          kr: "친구가 저녁 식사에 초대했지만, 내일 시험이 있어서 갈 수 없습니다.",
          'zh-tw': "朋友請你吃飯，但你明天要考試，不能去。",
          'zh-cn': "朋友請你吃飯，但你明天要考試，不能去。"
        }, 
        answer: {
          en: "I'd love to go, but I have an exam tomorrow.",
          vn: "Tôi rất muốn đi, nhưng ngày mai tôi có bài kiểm tra.",
          jp: "とても行きたいのですが、明日試験があります。",
          kr: "정말 가고 싶지만, 내일 시험이 있어요.",
          'zh-tw': "我很想去，但是明天有考試。",
          'zh-cn': "我很想去，但是明天有考試。"
        }, 
        explanation: {
          en: "Say 'I'd love to go' first to make your friend happy, then use 'but' for the reason.",
          vn: "Nói 'Tôi rất muốn đi' trước để làm bạn vui, sau đó dùng 'nhưng' để đưa ra lý do.",
          jp: "まず「とても行きたい」と言って友達を喜ばせ、それから「しかし」を使って理由を言います。",
          kr: "먼저 '정말 가고 싶다'고 말해 친구를 기쁘게 한 다음 '하지만'을 사용하여 이유를 말합니다.",
          'zh-tw': "先說「很想去」讓朋友開心，再用「但是」說不能去的理由。",
          'zh-cn': "先說「很想去」讓朋友開心，再用「但是」說不能去的理由。"
        }
      },
      { 
        scenario: {
          en: "Your boss asks you to work overtime, but you already have a date.",
          vn: "Sếp yêu cầu bạn làm thêm giờ, nhưng bạn đã có hẹn.",
          jp: "上司に残業を頼まれましたが、すでにデートの約束があります。",
          kr: "상사가 야근을 요청했지만, 이미 데이트 약속이 있습니다.",
          'zh-tw': "老闆請你加班，但你已經有約會了。",
          'zh-cn': "老闆請你加班，但你已經有約會了。"
        }, 
        answer: {
          en: "I'd be happy to help, but I already have plans tonight.",
          vn: "Tôi rất sẵn lòng giúp đỡ, nhưng tối nay tôi đã có hẹn rồi.",
          jp: "喜んでお手伝いしたいのですが、今夜はすでに予定があります。",
          kr: "기꺼이 도와드리고 싶지만, 오늘 밤에는 이미 약속이 있습니다.",
          'zh-tw': "我很樂意幫忙，但是今天晚上已經有約了。",
          'zh-cn': "我很樂意幫忙，但是今天晚上已經有約了。"
        }, 
        explanation: {
          en: "'Happy to help' is a polite phrase; the real point comes after 'but'.",
          vn: "'Sẵn lòng giúp đỡ' là một câu khách sáo; trọng tâm thực sự nằm sau từ 'nhưng'.",
          jp: "「喜んでお手伝いしたい」は社交辞令で、「しかし」の後が本題です。",
          kr: "'기꺼이 도와드리고 싶다'는 예의상 하는 말이고, 진짜 요점은 '하지만' 뒤에 나옵니다.",
          'zh-tw': "「樂意幫忙」是客氣話，「但是」後面才是重點。",
          'zh-cn': "「樂意幫忙」是客氣話，「但是」後面才是重點。"
        }
      },
      { 
        scenario: {
          en: "Someone wants to borrow money from you, and you don't want to lend it.",
          vn: "Ai đó muốn mượn tiền bạn, và bạn không muốn cho mượn.",
          jp: "誰かがあなたにお金を借りたいと言っていますが、貸したくありません。",
          kr: "누군가 돈을 빌려달라고 하지만, 빌려주고 싶지 않습니다.",
          'zh-tw': "有人想跟你借錢，你不想借。",
          'zh-cn': "有人想跟你借錢，你不想借。"
        }, 
        answer: {
          en: "I'd really like to help you, but I don't have much money lately either.",
          vn: "Tôi rất muốn giúp bạn, nhưng dạo này tôi cũng không có nhiều tiền.",
          jp: "本当にお助けしたいのですが、最近私もあまりお金がありません。",
          kr: "정말 도와드리고 싶지만, 저도 요즘 돈이 별로 없네요.",
          'zh-tw': "我很想幫你，但是最近我也沒什麼錢。",
          'zh-cn': "我很想幫你，但是最近我也沒什麼錢。"
        }, 
        explanation: {
          en: "Use 'but' to introduce your own difficulties.",
          vn: "Sử dụng 'nhưng' để đưa ra khó khăn của chính mình.",
          jp: "「しかし」を使って自分の困難な状況を伝えます。",
          kr: "'하지만'을 사용하여 자신의 어려움을 설명합니다.",
          'zh-tw': "用「但是」引出自己的難處。",
          'zh-cn': "用「但是」引出自己的難處。"
        }
      },
      { 
        scenario: {
          en: "A classmate asks you to help them write their homework.",
          vn: "Một người bạn cùng lớp nhờ bạn giúp viết bài tập về nhà.",
          jp: "クラスメートに宿題を手伝ってほしいと頼まれました。",
          kr: "반 친구가 숙제를 도와달라고 부탁합니다.",
          'zh-tw': "同學請你幫他寫作業。",
          'zh-cn': "同學請你幫他寫作業。"
        }, 
        answer: {
          en: "This question is very interesting, but I think you'll learn more if you write it yourself.",
          vn: "Câu hỏi này rất thú vị, nhưng tôi nghĩ bạn sẽ học được nhiều hơn nếu tự mình viết.",
          jp: "この問題はとても面白いですが、自分で書いたほうがより多くのことを学べると思います。",
          kr: "이 문제는 매우 흥미롭지만, 직접 쓰면 더 많은 것을 배울 수 있을 것 같아요.",
          'zh-tw': "這題很有趣，但是我覺得你自己寫會學到更多。",
          'zh-cn': "這題很有趣，但是我覺得你自己寫會學到更多。"
        }, 
        explanation: {
          en: "Use 'but' to give a positive reason for refusing.",
          vn: "Sử dụng 'nhưng' để đưa ra một lý do tích cực cho việc từ chối.",
          jp: "「しかし」を使って、断るための前向きな理由を伝えます。",
          kr: "'하지만'을 사용하여 거절에 대한 긍정적인 이유를 제시합니다.",
          'zh-tw': "用「但是」給一個正面的理由來拒絕。",
          'zh-cn': "用「但是」給一個正面的理由來拒絕。"
        }
      }
    ]
  },
  {
    id: 'chapter3',
    keyword: '「可能」',
    title: { en: 'Unit 3: 可能', vn: 'Bài 3: 可能', jp: '第3回：可能', kr: '제3장: 可能', 'zh-tw': '第三單元：「可能」', 'zh-cn': '第三单元：「可能」' },
    classicText: {
      en: '"I might not be free this weekend."',
      vn: '"Cuối tuần này có lẽ tôi không rảnh."',
      jp: '「今週末はたぶん時間がありません。」',
      kr: '"이번 주말에는 아마 시간이 없을 것 같아요."',
      'zh-tw': '「這個週末可能沒有空。」',
      'zh-cn': '「這個週末可能沒有空。」'
    },
    simpleChineseExplanation: {
      en: 'Don\'t speak too absolutely. Using "maybe" gives your words flexibility. If you\'re not sure if you can go, or want to refuse politely, saying "maybe..." is the best choice.',
      vn: 'Đừng nói quá tuyệt đối. Sử dụng "có lẽ" làm cho lời nói của bạn linh hoạt hơn. Nếu bạn không chắc có thể đi hay không, hoặc muốn từ chối một cách khéo léo, nói "có lẽ..." là lựa chọn tốt nhất.',
      jp: '物事を断定的に言いすぎないようにしましょう。「たぶん」を使うと言葉に柔軟性が出ます。行けるかどうかわからない時や、遠回しに断りたい時、「たぶん…」と言うのが最善の選択です。',
      kr: '너무 단정적으로 말하지 마세요. "아마도"를 사용하면 말에 유연성이 생깁니다. 갈 수 있을지 확실하지 않거나 정중하게 거절하고 싶을 때 "아마도..."라고 말하는 것이 최선의 선택입니다.',
      'zh-tw': '說話不要說得太死。用「可能」可以讓你的話聽起來有彈性。如果你不確定能不能去，或者想委婉拒絕，說「可能...」是最好的選擇。',
      'zh-cn': '說話不要說得太死。用「可能」可以讓你的話聽起來有彈性。如果你不確定能不能去，或者想委婉拒絕，說「可能...」是最好的選擇。'
    },
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
      { 
        scenario: {
          en: "A friend asks if you'll go to the party tomorrow, and you're still considering.",
          vn: "Một người bạn hỏi bạn có đi dự tiệc vào ngày mai không, và bạn vẫn đang cân nhắc.",
          jp: "友達に明日のパーティーに行くかどうか聞かれましたが、まだ検討中です。",
          kr: "친구가 내일 파티에 갈 건지 묻는데, 아직 고민 중입니다.",
          'zh-tw': "朋友問你明天會不會去派對，你還在考慮。",
          'zh-cn': "朋友問你明天會不會去派對，你還在考慮。"
        }, 
        answer: {
          en: "I might have something to do tomorrow, I'll let you know later.",
          vn: "Ngày mai có lẽ tôi có việc, tôi sẽ báo lại cho bạn sau.",
          jp: "明日はたぶん用事があるので、また後で連絡します。",
          kr: "내일 아마 일이 있을 것 같아요, 나중에 다시 알려줄게요.",
          'zh-tw': "我明天可能會有事，晚點再告訴你。",
          'zh-cn': "我明天可能會有事，晚點再告訴你。"
        }, 
        explanation: {
          en: "Use 'maybe' to give yourself some time to consider.",
          vn: "Sử dụng 'có lẽ' để cho mình thêm thời gian cân nhắc.",
          jp: "「たぶん」を使って、検討するための時間を稼ぎます。",
          kr: "'아마도'를 사용하여 생각할 시간을 갖습니다.",
          'zh-tw': "用「可能」給自己留一點時間考慮。",
          'zh-cn': "用「可能」給自己留一點時間考慮。"
        }
      },
      { 
        scenario: {
          en: "The teacher asks if you've finished your homework, but you haven't.",
          vn: "Giáo viên hỏi bạn đã làm xong bài tập chưa, nhưng bạn vẫn chưa làm xong.",
          jp: "先生に宿題が終わったか聞かれましたが、まだ終わっていません。",
          kr: "선생님이 숙제를 다 했는지 묻는데, 아직 다 못 했습니다.",
          'zh-tw': "老師問你作業寫完了嗎？你還沒寫完。",
          'zh-cn': "老師問你作業寫完了嗎？你還沒寫完。"
        }, 
        answer: {
          en: "I might still need a little more time.",
          vn: "Có lẽ tôi vẫn cần thêm một chút thời gian nữa.",
          jp: "たぶんもう少し時間が必要だと思います。",
          kr: "아마 시간이 조금 더 필요할 것 같아요.",
          'zh-tw': "我可能還需要一點時間。",
          'zh-cn': "我可能還需要一點時間。"
        }, 
        explanation: {
          en: "It sounds more positive than saying 'I haven't finished'.",
          vn: "Nghe có vẻ tích cực hơn là nói 'Tôi vẫn chưa làm xong'.",
          jp: "「まだ終わっていません」と言うよりも前向きに聞こえます。",
          kr: "'아직 다 못 했다'고 말하는 것보다 더 긍정적으로 들립니다.",
          'zh-tw': "比說「還沒寫完」聽起來更積極一點。",
          'zh-cn': "比說「還沒寫完」聽起來更積極一點。"
        }
      },
      { 
        scenario: {
          en: "You want to decline a date you don't like.",
          vn: "Bạn muốn từ chối một cuộc hẹn mà bạn không thích.",
          jp: "気乗りしないデートの誘いを断りたい時。",
          kr: "마음에 들지 않는 데이트 신청을 거절하고 싶을 때.",
          'zh-tw': "你想拒絕一個不喜歡的約會。",
          'zh-cn': "你想拒絕一個不喜歡的約會。"
        }, 
        answer: {
          en: "I might be busy all next week.",
          vn: "Có lẽ tuần sau tôi bận suốt.",
          jp: "来週はずっとたぶん忙しいと思います。",
          kr: "다음 주 내내 아마 바쁠 것 같아요.",
          'zh-tw': "我下週可能都很忙。",
          'zh-cn': "我下週可能都很忙。"
        }, 
        explanation: {
          en: "'Maybe' makes the refusal sound like it's due to objective reasons.",
          vn: "'Có lẽ' làm cho lời từ chối nghe như thể là do nguyên nhân khách quan.",
          jp: "「たぶん」を使うことで、断る理由が客観的な事情によるものであるかのように聞こえます。",
          kr: "'아마도'는 거절이 객관적인 이유 때문인 것처럼 들리게 합니다.",
          'zh-tw': "「可能」讓拒絕聽起來像是由於客觀原因。",
          'zh-cn': "「可能」讓拒絕聽起來像是由於客觀原因。",
        }
      },
      { 
        scenario: {
          en: "Predicting the weather.",
          vn: "Dự báo thời tiết.",
          jp: "天気を予測する時。",
          kr: "날씨를 예측할 때.",
          'zh-tw': "預測天氣。",
          'zh-cn': "預測天氣。"
        }, 
        answer: {
          en: "It might rain in the afternoon, remember to bring an umbrella.",
          vn: "Chiều nay có lẽ sẽ mưa, nhớ mang theo ô nhé.",
          jp: "午後はたぶん雨が降るので、傘を忘れないでください。",
          kr: "오후에 아마 비가 올 거예요, 우산 챙기는 거 잊지 마세요.",
          'zh-tw': "下午可能會下雨，記得帶傘。",
          'zh-cn': "下午可能會下雨，記得帶傘。"
        }, 
        explanation: {
          en: "This is also a common use of 'maybe'.",
          vn: "Đây cũng là một cách dùng phổ biến của 'có lẽ'.",
          jp: "これも「たぶん」の一般的な使い方です。",
          kr: "이것 또한 '아마도'의 흔한 용법입니다.",
          'zh-tw': "這也是「可能」的常見用法。",
          'zh-cn': "這也是「可能」的常見用法。"
        }
      }
    ]
  },
  {
    id: 'chapter4',
    keyword: '比較',
    title: { en: 'Unit 4: 比較', vn: 'Bài 4: 比較', jp: '第4回：比較', kr: '제4장: 比較', 'zh-tw': '第四單元：比較', 'zh-cn': '第四单元：比较' },
    classicText: {
      en: '"I exercise relatively often."',
      vn: '"Tôi khá thường xuyên tập thể dục."',
      jp: '「比較的よく運動します。」',
      kr: '"비교적 자주 운동해요."',
      'zh-tw': '「我比較常去運動。」',
      'zh-cn': '「我比較常去運動。」'
    },
    simpleChineseExplanation: {
      en: 'When you want to express your habits or opinions, but don\'t want the other person to feel like you\'re commanding them or being too confident, you can use "relatively". It makes your words sound like sharing rather than lecturing.',
      vn: 'Khi bạn muốn bày tỏ thói quen hoặc ý kiến của mình, nhưng không muốn đối phương cảm thấy như bạn đang ra lệnh cho họ hoặc quá tự tin, bạn có thể sử dụng "khá". Nó làm cho lời nói của bạn nghe giống như đang chia sẻ hơn là đang lên lớp.',
      jp: '自分の習慣や意見を伝えたいけれど、相手に命令しているように感じさせたり、自信過剰だと思われたくない時、「比較的」を使うことができます。説教ではなく、共有しているように聞こえます。',
      kr: '자신의 습관이나 의견을 표현하고 싶지만, 상대방이 명령을 받거나 너무 자신만만하다고 느끼게 하고 싶지 않을 때 "비교적"을 사용할 수 있습니다. 훈계가 아니라 공유하는 것처럼 들리게 합니다.',
      'zh-tw': '當你想表達自己的習慣或看法，但不想讓對方覺得你在命令他或太有自信時，可以用「比較」。它會讓你的話聽起來像是在分享，而不是在教訓人。',
      'zh-cn': '當你想表達自己的習慣或看法，但不想讓對方覺得你在命令他或太有自信時，可以用「比較」。它會讓你的話聽起來像是在分享，而不是在教訓人。'
    },
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
      { 
        scenario: {
          en: "Someone asks if you like this restaurant, and you think it's just okay.",
          vn: "Ai đó hỏi bạn có thích nhà hàng này không, và bạn thấy nó cũng bình thường.",
          jp: "このレストランが好きかどうか聞かれましたが、まあまあだと思っている時。",
          kr: "누군가 이 식당을 좋아하는지 묻는데, 그냥 그렇다고 생각할 때.",
          'zh-tw': "別人問你喜不喜歡這家餐廳，你覺得還好。",
          'zh-cn': "別人問你喜不喜歡這家餐廳，你覺得還好。"
        }, 
        answer: {
          en: "I relatively prefer another restaurant.",
          vn: "Tôi khá thích một nhà hàng khác hơn.",
          jp: "別のレストランのほうが比較的好きです。",
          kr: "저는 다른 식당을 비교적 더 선호해요.",
          'zh-tw': "我比較喜歡另一家餐廳。",
          'zh-cn': "我比較喜歡另一家餐廳。"
        }, 
        explanation: {
          en: "Instead of saying this one is bad, say you 'relatively prefer' another one.",
          vn: "Thay vì nói quán này dở, hãy nói bạn 'khá thích' một quán khác hơn.",
          jp: "ここが悪いと言う代わりに、別のところが「比較的好き」だと言います。",
          kr: "여기가 별로라고 말하는 대신, 다른 곳을 '비교적 선호한다'고 말합니다.",
          'zh-tw': "不直接說這家不好，而是說「比較喜歡」另一家。",
          'zh-cn': "不直接說這家不好，而是說「比較喜歡」另一家。"
        }
      },
      { 
        scenario: {
          en: "You think this piece of clothing is too expensive.",
          vn: "Bạn thấy bộ quần áo này quá đắt.",
          jp: "この服は高すぎると思った時。",
          kr: "이 옷이 너무 비싸다고 생각할 때.",
          'zh-tw': "你覺得這件衣服太貴了。",
          'zh-cn': "你覺得這件衣服太貴了。"
        }, 
        answer: {
          en: "The price of this clothing is relatively high.",
          vn: "Giá của bộ đồ này khá cao.",
          jp: "この服の価格は比較的高いですね。",
          kr: "이 옷은 가격이 비교적 높은 편이네요.",
          'zh-tw': "這件衣服的價格比較高一點。",
          'zh-cn': "這件衣服的價格比較高一點。"
        }, 
        explanation: {
          en: "Using 'relatively high' instead of 'too expensive' sounds more objective.",
          vn: "Sử dụng 'khá cao' thay vì 'quá đắt' nghe có vẻ khách quan hơn.",
          jp: "「高すぎる」の代わりに「比較的高い」を使うと、より客観的に聞こえます。",
          kr: "'너무 비싸다' 대신 '비교적 높다'를 사용하면 더 객관적으로 들립니다.",
          'zh-tw': "用「比較高」代替「太貴」，聽起來比較客觀。",
          'zh-cn': "用「比較高」代替「太貴」，聽起來比較客觀。"
        }
      },
      { 
        scenario: {
          en: "Introducing your personality.",
          vn: "Giới thiệu tính cách của bạn.",
          jp: "自分の性格を紹介する時。",
          kr: "자신의 성격을 소개할 때.",
          'zh-tw': "介紹自己的個性。",
          'zh-cn': "介紹自己的個性。"
        }, 
        answer: {
          en: "My personality is relatively shy.",
          vn: "Tính cách của tôi khá nhút nhát.",
          jp: "私の性格は比較的内気です。",
          kr: "제 성격은 비교적 수줍음이 많은 편이에요.",
          'zh-tw': "我的個性比較害羞。",
          'zh-cn': "我的個性比較害羞。"
        }, 
        explanation: {
          en: "Using 'relatively' to describe yourself sounds humble.",
          vn: "Sử dụng 'khá' để mô tả bản thân nghe có vẻ khiêm tốn.",
          jp: "自分を表現するのに「比較的」を使うと、控えめな印象を与えます。",
          kr: "자신을 묘사할 때 '비교적'을 사용하면 겸손해 보입니다.",
          'zh-tw': "用「比較」來描述自己，顯得謙虛。",
          'zh-cn': "用「比較」來描述自己，顯得謙虛。"
        }
      },
      { 
        scenario: {
          en: "Discussing the weather.",
          vn: "Thảo luận về thời tiết.",
          jp: "天気を話題にする時。",
          kr: "날씨에 대해 이야기할 때.",
          'zh-tw': "討論天氣。",
          'zh-cn': "討論天氣。"
        }, 
        answer: {
          en: "The weather today is relatively cool.",
          vn: "Thời tiết hôm nay khá mát mẻ.",
          jp: "今日の天気は比較的涼しいですね。",
          kr: "오늘 날씨는 비교적 시원하네요.",
          'zh-tw': "今天的天氣比較涼快。",
          'zh-cn': "今天的天氣比較涼快。"
        }, 
        explanation: {
          en: "This is a very natural way to describe things.",
          vn: "Đây là một cách mô tả rất tự nhiên.",
          jp: "これは物事を説明する際の、非常に自然な言い方です。",
          kr: "이것은 사물을 묘사하는 매우 자연스러운 방식입니다.",
          'zh-tw': "這是一個很自然的描述方式。",
          'zh-cn': "這是一個很自然的描述方式。"
        }
      }
    ]
  },
  {
    id: 'chapter5',
    keyword: '聽說',
    title: { en: 'Unit 5: 聽說', vn: 'Bài 5: 聽說', jp: '第5回：聽說', kr: '제5장: 聽說', 'zh-tw': '第五單元：聽說', 'zh-cn': '第五单元：听说' },
    classicText: {
      en: '"I heard that movie isn\'t good."',
      vn: '"Nghe nói phim đó không hay."',
      jp: '「あの映画、あまり良くないらしいよ。」',
      kr: '"그 영화 별로라고 하더라."',
      'zh-tw': '「聽說那部電影不好看。」',
      'zh-cn': '「聽說那部電影不好看。」'
    },
    simpleChineseExplanation: {
      en: 'If you want to share bad news or don\'t want to be responsible for an opinion, you can say "I heard". This means it wasn\'t said by me, but heard from somewhere else. This way, the other person won\'t blame you.',
      vn: 'Nếu bạn muốn chia sẻ tin xấu hoặc không muốn chịu trách nhiệm về một ý kiến, bạn có thể nói "Nghe nói". Điều này có nghĩa là không phải tôi nói, mà là nghe được từ đâu đó. Bằng cách này, đối phương sẽ không trách bạn.',
      jp: '悪いニュースを共有したい時や、自分の意見として責任を持ちたくない時、「聞いたところでは」と言うことができます。これは私が言ったのではなく、どこかで聞いた話だということを意味します。そうすれば、相手はあなたを責めないでしょう。',
      kr: '나쁜 소식을 전하고 싶거나 자신의 의견에 책임을 지고 싶지 않을 때 "듣기로는"이라고 말할 수 있습니다. 이것은 내가 한 말이 아니라 다른 곳에서 들었다는 것을 의미합니다. 이렇게 하면 상대방이 당신을 탓하지 않을 것입니다.',
      'zh-tw': '如果你想說一個不好的消息，或者不想負責這個觀點，可以說「聽說」。這表示這不是我說的，是別的地方聽來的。這樣對方就不會怪你。',
      'zh-cn': '如果你想說一個不好的消息，或者不想負責這個觀點，可以說「聽說」。這表示這不是我說的，是別的地方聽來的。這樣對方就不會怪你。'
    },
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
      { 
        scenario: {
          en: "You want to tell a friend a shop is expensive without sounding critical.",
          vn: "Bạn muốn nói với bạn mình rằng cửa hàng này đắt tiền mà không muốn nghe có vẻ chỉ trích.",
          jp: "友達に、その店が高いことを批判的に聞こえないように伝えたい時。",
          kr: "친구에게 그 가게가 비싸다는 것을 비판적으로 들리지 않게 말하고 싶을 때.",
          'zh-tw': "你想告訴朋友這家店很貴，不想讓他花冤枉錢。",
          'zh-cn': "你想告訴朋友這家店很貴，不想讓他花冤枉錢。"
        }, 
        answer: {
          en: "I heard things in this shop are a bit expensive.",
          vn: "Nghe nói đồ ở cửa hàng này hơi đắt một chút.",
          jp: "このお店のものはちょっと高いって聞いたよ。",
          kr: "이 가게 물건들이 좀 비싸다고 들었어요.",
          'zh-tw': "聽說這家店的東西有點貴。",
          'zh-cn': "聽說這家店的東西有點貴。"
        }, 
        explanation: {
          en: "Using 'I heard' avoids sounding like you're criticizing their choice.",
          vn: "Dùng 'Nghe nói' tránh nghe có vẻ như bạn đang chỉ trích lựa chọn của họ.",
          jp: "「聞いたところでは」を使うことで、相手の選択を批判しているように聞こえるのを避けられます。",
          kr: "'듣기로는'을 사용하면 상대방의 선택을 비판하는 것처럼 들리는 것을 피할 수 있습니다.",
          'zh-tw': "用「聽說」來提醒朋友，不會顯得你在批評他的選擇。",
          'zh-cn': "用「聽說」來提醒朋友，不會顯得你在批評他的選擇。"
        }
      },
      { 
        scenario: {
          en: "You want to ask about someone's private matter casually.",
          vn: "Bạn muốn hỏi về chuyện riêng tư của ai đó một cách tình cờ.",
          jp: "誰かのプライベートなことについて、さりげなく聞きたい時。",
          kr: "누군가의 사적인 일에 대해 넌지시 묻고 싶을 때.",
          'zh-tw': "你想打聽某人的私事。",
          'zh-cn': "你想打聽某人的私事。"
        }, 
        answer: {
          en: "I heard you bought a new car recently?",
          vn: "Nghe nói gần đây bạn mới mua xe mới à?",
          jp: "最近、新しい車を買ったって聞いたけど？",
          kr: "최근에 새 차 사셨다고 들었는데 맞나요?",
          'zh-tw': "聽說你最近買新車了？",
          'zh-cn': "聽說你最近買新車了？"
        }, 
        explanation: {
          en: "'I heard' is a great conversation starter.",
          vn: "'Nghe nói' là một cách bắt đầu câu chuyện rất tốt.",
          jp: "「聞いたところでは」は、会話のきっかけとして非常に優れています。",
          kr: "'듣기로는'은 대화를 시작하기에 아주 좋은 표현입니다.",
          'zh-tw': "「聽說」是一個很好的聊天開場白。",
          'zh-cn': "「聽說」是一個很好的聊天開場白。"
        }
      },
      { 
        scenario: {
          en: "Conveying uncertain news.",
          vn: "Truyền đạt một tin tức không chắc chắn.",
          jp: "不確かなニュースを伝える時。",
          kr: "불확실한 소식을 전할 때.",
          'zh-tw': "傳達一個不確定的消息。",
          'zh-cn': "傳達一個不確定的消息。"
        }, 
        answer: {
          en: "I heard tomorrow will be a holiday.",
          vn: "Nghe nói ngày mai sẽ được nghỉ lễ.",
          jp: "明日は休みだって聞いたよ。",
          kr: "내일은 휴일이라고 들었어요.",
          'zh-tw': "聽說明天會放假。",
          'zh-cn': "聽說明天會放假。"
        }, 
        explanation: {
          en: "Indicates the source is not yourself.",
          vn: "Cho biết nguồn tin không phải từ chính bạn.",
          jp: "情報源が自分ではないことを示します。",
          kr: "정보의 출처가 자신이 아님을 나타냅니다.",
          'zh-tw': "表示消息來源不是自己。",
          'zh-cn': "表示消息來源不是自己。"
        }
      },
      { 
        scenario: {
          en: "Euphemistically refusing to go somewhere.",
          vn: "Từ chối đi đâu đó một cách khéo léo.",
          jp: "どこかへ行くのを遠回しに断りたい時。",
          kr: "어딘가에 가는 것을 완곡하게 거절하고 싶을 때.",
          'zh-tw': "委婉拒絕去某個地方。",
          'zh-cn': "委婉拒絕去某個地方。"
        }, 
        answer: {
          en: "I heard it's very crowded there now, shall we go somewhere else?",
          vn: "Nghe nói ở đó bây giờ đông người lắm, hay là mình đi chỗ khác nhé?",
          jp: "あそこは今とても混んでいるって聞いたよ。どこか別の場所に行かない？",
          kr: "거기 지금 사람이 아주 많다고 들었는데, 다른 데로 갈까요?",
          'zh-tw': "聽說那邊現在人很多，我們要不要換個地方？",
          'zh-cn': "聽說那邊現在人很多，我們要不要換個地方？"
        }, 
        explanation: {
          en: "Give an objective suggestion using 'I heard'.",
          vn: "Đưa ra một gợi ý khách quan bằng cách dùng 'Nghe nói'.",
          jp: "「聞いたところでは」を使って、客観的な提案をします。",
          kr: "'듣기로는'을 사용하여 객관적인 제안을 합니다.",
          'zh-tw': "用「聽說」給出一個客觀的建議。",
          'zh-cn': "用「聽說」給出一個客觀的建議。"
        }
      }
    ]
  },
  {
    id: 'chapter6',
    keyword: 'v-一下',
    title: { en: 'Unit 6: 一下', vn: 'Bài 6: 一下', jp: '第6回：一下', kr: '제6장: 一下', 'zh-tw': '第六單元：一下', 'zh-cn': '第六单元：一下' },
    classicText: {
      en: '"Let me think about it."',
      vn: '"Để tôi nghĩ một chút."',
      jp: '「ちょっと考えさせてください。」',
      kr: '"잠시만 생각할게요."',
      'zh-tw': '「我想一下。」',
      'zh-cn': '「我想一下。」'
    },
    simpleChineseExplanation: {
      en: 'Adding "a bit" after a verb makes the action sound short and relaxed. When you want to ask for help or give yourself time to consider, you can use "a bit".',
      vn: 'Thêm "một chút" sau động từ làm cho hành động nghe có vẻ ngắn gọn và thoải mái. Khi bạn muốn nhờ giúp đỡ hoặc cho mình thời gian cân nhắc, bạn có thể sử dụng "một chút".',
      jp: '動詞の後に「ちょっと」を付けることで、動作が短時間で気楽なものに聞こえます。助けを求めたい時や、考える時間が欲しい時に使うことができます。',
      kr: '동사 뒤에 "잠시"를 붙이면 동작이 짧고 가볍게 느껴집니다. 도움을 요청하거나 생각할 시간이 필요할 때 사용할 수 있습니다.',
      'zh-tw': '在動詞後面加「一下」，會讓動作聽起來時間很短、很輕鬆。當你想請別人幫忙，或者想給自己一點時間考慮時，都可以用「一下」。',
      'zh-cn': '在动词后面加「一下」，会让动作听起来时间很短、很轻松。当你想请别人帮忙，或者想给自己一点时间考虑时，都可以用「一下」。'
    },
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
      { 
        scenario: {
          en: "You want to borrow a pen from a colleague.",
          vn: "Bạn muốn mượn một cây bút từ đồng nghiệp.",
          jp: "同僚からペンを借りたい時。",
          kr: "동료에게 펜을 빌리고 싶을 때.",
          'zh-tw': "你想借用一下同事的筆。",
          'zh-cn': "你想借用一下同事的筆。"
        }, 
        answer: {
          en: "Can I borrow this pen for a bit?",
          vn: "Tôi có thể mượn cây bút này một chút được không?",
          jp: "このペンをちょっと借りてもいいですか？",
          kr: "이 펜 잠시 빌릴 수 있을까요?",
          'zh-tw': "這支筆可以借我用一下嗎？",
          'zh-cn': "這支筆可以借我用一下嗎？"
        }, 
        explanation: {
          en: "Adding 'a bit' makes borrowing feel minor.",
          vn: "Thêm 'một chút' làm cho việc mượn đồ cảm thấy nhẹ nhàng hơn.",
          jp: "「ちょっと」を付けることで、借りるという行為の負担が軽く感じられます。",
          kr: "'잠시'를 붙이면 빌리는 행위가 가볍게 느껴집니다.",
          'zh-tw': "加了「一下」，借東西的感覺就變得很輕微。",
          'zh-cn': "加了「一下」，借東西的感覺就變得很輕微。"
        }
      },
      { 
        scenario: {
          en: "The clerk asks what you want to buy, but you haven't decided yet.",
          vn: "Nhân viên hỏi bạn muốn mua gì, nhưng bạn vẫn chưa quyết định.",
          jp: "店員に何を買うか聞かれましたが、まだ決まっていない時。",
          kr: "점원이 무엇을 살 건지 묻는데, 아직 결정하지 못했을 때.",
          'zh-tw': "店員問你要買什麼，你還沒決定。",
          'zh-cn': "店員問你要買什麼，你還沒決定。"
        }, 
        answer: {
          en: "I'll just look around for a bit, thanks.",
          vn: "Tôi chỉ xem qua một chút thôi, cảm ơn.",
          jp: "ちょっと見てみるだけです、ありがとうございます。",
          kr: "잠시만 좀 둘러볼게요, 감사합니다.",
          'zh-tw': "我先看一下，謝謝。",
          'zh-cn': "我先看一下，謝謝。"
        }, 
        explanation: {
          en: "This is the most practical euphemism in a store.",
          vn: "Đây là cách nói giảm nói tránh thực tế nhất trong cửa hàng.",
          jp: "これはお店で最も実用的な遠回しな言い方です。",
          kr: "이것은 상점에서 가장 실용적인 완곡한 표현입니다.",
          'zh-tw': "這是在商店裡最實用的委婉說法。",
          'zh-cn': "這是在商店裡最實用的委婉說法。"
        }
      },
      { 
        scenario: {
          en: "You want to ask someone to open the door for you.",
          vn: "Bạn muốn nhờ ai đó mở cửa giúp mình.",
          jp: "誰かにドアを開けてもらいたい時。",
          kr: "다른 사람에게 문을 열어달라고 부탁하고 싶을 때.",
          'zh-tw': "你想請別人幫你開門。",
          'zh-cn': "你想請別人幫你開門。"
        }, 
        answer: {
          en: "Could you help me open the door for a bit?",
          vn: "Bạn có thể giúp tôi mở cửa một chút được không?",
          jp: "ちょっとドアを開けてもらえますか？",
          kr: "문 좀 잠시 열어주실 수 있을까요?",
          'zh-tw': "可以幫我開一下門嗎？",
          'zh-cn': "可以幫我開一下門嗎？"
        }, 
        explanation: {
          en: "Sounds very polite.",
          vn: "Nghe rất lịch sự.",
          jp: "とても丁寧に聞こえます。",
          kr: "매우 정중하게 들립니다.",
          'zh-tw': "聽起來很有禮貌。",
          'zh-cn': "聽起來很有禮貌。"
        }
      },
      { 
        scenario: {
          en: "You need time to think about a question.",
          vn: "Bạn cần thời gian để suy nghĩ về một câu hỏi.",
          jp: "質問について考える時間が必要な時。",
          kr: "질문에 대해 생각할 시간이 필요할 때.",
          'zh-tw': "你需要時間思考一個問題。",
          'zh-cn': "你需要時間思考一個問題。"
        }, 
        answer: {
          en: "I need to think about this question for a bit.",
          vn: "Tôi cần suy nghĩ về câu hỏi này một chút.",
          jp: "この質問について、ちょっと考える必要があります。",
          kr: "이 질문에 대해 잠시 생각할 시간이 필요해요.",
          'zh-tw': "這個問題我需要想一下。",
          'zh-cn': "這個問題我需要想一下。"
        }, 
        explanation: {
          en: "'Think for a bit' indicates you'll give an answer soon.",
          vn: "'Nghĩ một chút' cho biết bạn sẽ sớm đưa ra câu trả lời.",
          jp: "「ちょっと考える」は、すぐに答えを出すことを示唆します。",
          kr: "'잠시 생각하다'는 곧 답변을 줄 것임을 나타냅니다.",
          'zh-tw': "「想一下」表示你很快就會給答案。",
          'zh-cn': "「想一下」表示你很快就會給答案。"
        }
      }
    ]
  },
  {
    id: 'chapter7',
    keyword: '介紹介紹',
    title: { en: 'Unit 7: 介紹介紹', vn: 'Bài 7: 介紹介紹', jp: '第7回：介紹介紹', kr: '제7장: 介紹介紹', 'zh-tw': '第七單元：介紹介紹', 'zh-cn': '第七单元：介绍介绍' },
    classicText: {
      en: '"Let me introduce them to you."',
      vn: '"Để tôi giới thiệu cho bạn."',
      jp: '「ご紹介させていただきますね。」',
      kr: '"소개해 드릴게요."',
      'zh-tw': '「我給你介紹介紹。」',
      'zh-cn': '「我給你介紹介紹。」'
    },
    simpleChineseExplanation: {
      en: 'Saying a verb twice (e.g., introduce-introduce, discuss-discuss) makes the tone very relaxed and casual. This indicates the action is not serious, and everyone can relax. This is very useful in social situations.',
      vn: 'Nói động từ hai lần (ví dụ: giới thiệu-giới thiệu, thảo luận-thảo luận) làm cho giọng điệu trở nên rất thoải mái và thân mật. Điều này cho biết hành động không nghiêm trọng và mọi người có thể thư giãn. Điều này rất hữu ích trong các tình huống xã hội.',
      jp: '動詞を2回繰り返す（例：紹介-紹介、議論-議論）ことで、口調が非常にリラックスしてカジュアルになります。これは動作が深刻なものではなく、誰もがリラックスできることを示します。社交の場で非常に役立ちます。',
      kr: '동사를 두 번 말하는 것(예: 소개-소개, 토론-토론)은 어조를 매우 편안하고 캐주얼하게 만듭니다. 이것은 동작이 심각하지 않으며 모두가 긴장을 풀 수 있음을 나타냅니다. 사교적인 상황에서 매우 유용합니다.',
      'zh-tw': '把動詞說兩次（比如：介紹介紹、討論討論），會讓語氣變得很輕鬆、很隨意。這表示這個動作不嚴肅，大家可以放鬆一點。這在社交場合非常有用。',
      'zh-cn': '把动词说两次（比如：介绍介绍、讨论讨论），会让语气变得很轻松、很随意。这表示这个动作不严肃，大家可以放松一点。这在社交场合非常有用。'
    },
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
      { 
        scenario: {
          en: "You want to discuss a new plan with a colleague.",
          vn: "Bạn muốn thảo luận về một kế hoạch mới với đồng nghiệp.",
          jp: "同僚と新しい計画について話し合いたい時。",
          kr: "동료와 새로운 계획에 대해 논의하고 싶을 때.",
          'zh-tw': "你想跟同事討論一個新計畫。",
          'zh-cn': "你想跟同事討論一個新計畫。"
        }, 
        answer: {
          en: "We can discuss this plan when we have time.",
          vn: "Chúng ta có thể thảo luận về kế hoạch này khi có thời gian.",
          jp: "時間がある時に、この計画について話し合いましょう。",
          kr: "시간 날 때 이 계획에 대해 이야기 좀 나눠봐요.",
          'zh-tw': "我們有空可以討論討論這個計畫。",
          'zh-cn': "我們有空可以討論討論這個計畫。"
        }, 
        explanation: {
          en: "'Discuss-discuss' sounds like everyone is just chatting, no pressure.",
          vn: "'Thảo luận-thảo luận' nghe giống như mọi người đang trò chuyện cùng nhau, không có áp lực.",
          jp: "「話し合い-話し合い」は、プレッシャーなくみんなでおしゃべりしているように聞こえます。",
          kr: "'논의-논의'는 압박감 없이 모두가 수다를 떠는 것처럼 들립니다.",
          'zh-tw': "「討論討論」聽起來像是大家一起聊天，沒有壓力。",
          'zh-cn': "「討論討論」聽起來像是大家一起聊天，沒有壓力。"
        }
      },
      { 
        scenario: {
          en: "You want to go for a walk in the park.",
          vn: "Bạn muốn đi dạo trong công viên.",
          jp: "公園に散歩に行きたい時。",
          kr: "공원에 산책하러 가고 싶을 때.",
          'zh-tw': "你想去公園散步。",
          'zh-cn': "你想去公園散步。"
        }, 
        answer: {
          en: "Let's go for a walk in the park.",
          vn: "Chúng ta hãy đi dạo trong công viên nhé.",
          jp: "公園に散歩に行きましょう。",
          kr: "공원에 산책하러 가요.",
          'zh-tw': "我們去公園走走吧。",
          'zh-cn': "我們去公園走走吧。"
        }, 
        explanation: {
          en: "'Walk-walk' sounds more like a leisure activity than 'walking'.",
          vn: "'Đi dạo-đi dạo' nghe giống như một hoạt động giải trí hơn là 'đi bộ'.",
          jp: "「歩く-歩く」は「歩行」よりもレジャー活動のように聞こえます。",
          kr: "'걷기-걷기'는 '걷는 것'보다 여가 활동처럼 들립니다.",
          'zh-tw': "「走走」比「走路」聽起來更像休閒活動。",
          'zh-cn': "「走走」比「走路」聽起來更像休閒活動。"
        }
      },
      { 
        scenario: {
          en: "You want to see a friend's new phone.",
          vn: "Bạn muốn xem điện thoại mới của một người bạn.",
          jp: "友達の新しい携帯電話を見たい時。",
          kr: "친구의 새 휴대폰을 보고 싶을 때.",
          'zh-tw': "你想看看朋友的新手機。",
          'zh-cn': "你想看看朋友的新手機。"
        }, 
        answer: {
          en: "Your phone is so beautiful, let me see it.",
          vn: "Điện thoại của bạn đẹp quá, cho tôi xem với.",
          jp: "あなたの携帯電話、とても素敵ですね。ちょっと見せてください。",
          kr: "휴대폰이 정말 예쁘네요, 저도 좀 보여주세요.",
          'zh-tw': "你的手機好漂亮，借我看看。",
          'zh-cn': "你的手機好漂亮，借我看看。"
        }, 
        explanation: {
          en: "'See-see' indicates just a casual look.",
          vn: "'Xem-xem' cho biết chỉ là xem qua một chút.",
          jp: "「見る-見る」は、ただカジュアルに見るだけであることを示します。",
          kr: "'보다-보다'는 그냥 가볍게 본다는 것을 나타냅니다.",
          'zh-tw': "「看看」表示只是隨便看一下。",
          'zh-cn': "「看看」表示只是隨便看一下。"
        }
      },
      { 
        scenario: {
          en: "You want to rest for a bit.",
          vn: "Bạn muốn nghỉ ngơi một chút.",
          jp: "少し休みた時。",
          kr: "잠시 쉬고 싶을 때.",
          'zh-tw': "你想休息一下。",
          'zh-cn': "你想休息一下。"
        }, 
        answer: {
          en: "I'm tired, I want to rest for a bit.",
          vn: "Tôi mệt rồi, tôi muốn nghỉ ngơi một chút.",
          jp: "疲れました、少し休みたいです。",
          kr: "피곤하네요, 좀 쉬고 싶어요.",
          'zh-tw': "我累了，想休息休息。",
          'zh-cn': "我累了，想休息休息。"
        }, 
        explanation: {
          en: "The tone is very relaxed.",
          vn: "Giọng điệu rất thoải mái.",
          jp: "口調がとてもリラックスしています。",
          kr: "어조가 매우 편안합니다.",
          'zh-tw': "語氣很放鬆。",
          'zh-cn': "語氣很放鬆。"
        }
      }
    ]
  },
  {
    id: 'chapter8',
    keyword: '好像',
    title: { en: 'Unit 8: 好像', vn: 'Bài 8: 好像', jp: '第8回：好像', kr: '제8장: 好像', 'zh-tw': '第八單元：好像', 'zh-cn': '第八单元：好像' },
    classicText: {
      en: '"He seems a bit unhappy today."',
      vn: '"Hôm nay anh ấy hình như không vui lắm."',
      jp: '「彼は今日、元気がないみたいだね。」',
      kr: '"그는 오늘 기분이 별로인 것 같아요."',
      'zh-tw': '「他今天好像不太高興。」',
      'zh-cn': '「他今天好像不太高興。」'
    },
    simpleChineseExplanation: {
      en: 'When you want to say a negative observation (e.g., he\'s unhappy, this dish is not good), add "seems". This indicates it\'s just your feeling, you might not be right. This way, the other person won\'t feel like you\'re criticizing them.',
      vn: 'Khi bạn muốn đưa ra một nhận xét tiêu cực (ví dụ: anh ấy không vui, món ăn này không ngon), hãy thêm "hình như". Điều này cho biết đó chỉ là cảm nhận của bạn, bạn có thể không đúng. Bằng cách này, đối phương sẽ không cảm thấy như bạn đang chỉ trích họ.',
      jp: '否定的な観察結果（例：彼は不機嫌だ、この料理はおいしくない）を伝えたい時、「〜のようだ」を付けます。これは単なる自分の感覚であり、正しいとは限らないことを示します。そうすれば、相手は批判されているとは感じないでしょう。',
      kr: '부정적인 관찰 내용(예: 그는 기분이 안 좋다, 이 요리는 맛이 없다)을 말하고 싶을 때 "인 것 같다"를 붙이세요. 이것은 단지 자신의 느낌일 뿐이며 자신이 틀릴 수도 있음을 나타냅니다. 이렇게 하면 상대방이 비판받는다고 느끼지 않을 것입니다.',
      'zh-tw': '當你想說一個負面的觀察（比如：他不高興、這道菜不好吃）時，加一個「好像」。這表示這只是我的感覺，我不一定對。這樣對方聽了就不會覺得你在批評他。',
      'zh-cn': '當你想說一個負面的觀察（比如：他不高興、這道菜不好吃）時，加一個「好像」。這表示這只是我的感覺，我不一定對。這樣對方聽了就不會覺得你在批評他。'
    },
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
      { 
        scenario: {
          en: "You think the clothes your friend is wearing today don't suit them.",
          vn: "Bạn thấy bộ quần áo bạn mình mặc hôm nay không hợp với họ lắm.",
          jp: "友達が今日着ている服が、あまり似合っていないと思った時。",
          kr: "친구가 오늘 입은 옷이 별로 어울리지 않는다고 생각할 때.",
          'zh-tw': "你覺得朋友今天穿的衣服不太適合他。",
          'zh-cn': "你覺得朋友今天穿的衣服不太適合他。"
        }, 
        answer: {
          en: "This piece of clothing seems a bit too big.",
          vn: "Bộ quần áo này hình như hơi rộng quá.",
          jp: "この服は、ちょっと大きすぎるみたいだね。",
          kr: "이 옷은 좀 너무 큰 것 같아요.",
          'zh-tw': "這件衣服好像有點太大。",
          'zh-cn': "這件衣服好像有點太大。"
        }, 
        explanation: {
          en: "Instead of saying 'it doesn't suit you', say 'it seems a bit big', which sounds like a suggestion.",
          vn: "Thay vì nói 'nó không hợp với bạn', hãy nói 'hình như hơi rộng', nghe giống như một lời gợi ý.",
          jp: "「似合わない」と言う代わりに「ちょっと大きいみたい」と言うと、アドバイスのように聞こえます。",
          kr: "'어울리지 않는다'고 말하는 대신 '좀 큰 것 같다'고 말하면 조언처럼 들립니다.",
          'zh-tw': "不說「不適合」，說「好像有點大」，聽起來是在幫他建議。",
          'zh-cn': "不說「不適合」，說「好像有點大」，聽起來是在幫他建議。"
        }
      },
      { 
        scenario: {
          en: "You think this dish is too salty.",
          vn: "Bạn thấy món ăn này quá mặn.",
          jp: "この料理がしょっぱすぎると感じた時。",
          kr: "이 요리가 너무 짜다고 생각할 때.",
          'zh-tw': "你覺得這道菜太鹹了。",
          'zh-cn': "你覺得這道菜太鹹了。"
        }, 
        answer: {
          en: "This dish seems a bit salty.",
          vn: "Món này hình như hơi mặn một chút.",
          jp: "この料理は、少ししょっぱいみたいですね。",
          kr: "이 요리는 좀 짠 것 같아요.",
          'zh-tw': "這道菜好像有一點鹹。",
          'zh-cn': "這道菜好像有一點鹹。"
        }, 
        explanation: {
          en: "Using 'seems' to express dissatisfaction is easier for others to accept.",
          vn: "Sử dụng 'hình như' để bày tỏ sự không hài lòng giúp người khác dễ chấp nhận hơn.",
          jp: "不満を伝えるのに「〜のようだ」を使うと、相手も受け入れやすくなります。",
          kr: "불만을 표현할 때 '~인 것 같다'를 사용하면 다른 사람들이 더 쉽게 받아들일 수 있습니다.",
          'zh-tw': "用「好像」來表達不滿，對方比較容易接受。",
          'zh-cn': "用「好像」來表達不滿，對方比較容易接受。"
        }
      },
      { 
        scenario: {
          en: "You can't find your keys.",
          vn: "Bạn không tìm thấy chìa khóa của mình.",
          jp: "鍵が見つからない時。",
          kr: "열쇠를 찾을 수 없을 때.",
          'zh-tw': "你找不到你的鑰匙。",
          'zh-cn': "你找不到你的鑰匙。"
        }, 
        answer: {
          en: "My keys seem to be missing.",
          vn: "Chìa khóa của tôi hình như bị mất rồi.",
          jp: "鍵がなくなっちゃったみたいだ。",
          kr: "열쇠를 잃어버린 것 같아요.",
          'zh-tw': "我的鑰匙好像不見了。",
          'zh-cn': "我的鑰匙好像不見了。"
        }, 
        explanation: {
          en: "This is a very natural speculation.",
          vn: "Đây là một sự suy đoán rất tự nhiên.",
          jp: "これは非常に自然な推測です。",
          kr: "이것은 매우 자연스러운 추측입니다.",
          'zh-tw': "這是一個很自然的推測。",
          'zh-cn': "這是一個很自然的推測。"
        }
      },
      { 
        scenario: {
          en: "You think someone has mistaken you for someone else.",
          vn: "Bạn nghĩ ai đó đã nhận nhầm bạn với người khác.",
          jp: "誰かが人違いをしていると思った時。",
          kr: "누군가 사람을 잘못 봤다고 생각할 때.",
          'zh-tw': "你覺得某人認錯人了。",
          'zh-cn': "你覺得某人認錯人了。"
        }, 
        answer: {
          en: "You seem to have mistaken me for someone else.",
          vn: "Hình như bạn nhận nhầm người rồi.",
          jp: "人違いをされているみたいですよ。",
          kr: "사람을 잘못 보신 것 같아요.",
          'zh-tw': "你好像認錯人了。",
          'zh-cn': "你好像認錯人了。"
        }, 
        explanation: {
          en: "Politely remind the other person.",
          vn: "Nhắc nhở đối phương một cách lịch sự.",
          jp: "相手に丁寧に注意を促します。",
          kr: "상대방에게 정중하게 알려줍니다.",
          'zh-tw': "委婉地提醒對方。",
          'zh-cn': "委婉地提醒對方。"
        }
      }
    ]
  }
];
