
import { AppView, MultiLangText, ChapterContent } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Welcome', vn: 'Chào mừng', jp: 'ようこそ', kr: '환영', 'zh-tw': '賓至如歸', 'zh-cn': '宾至如归' },
  chapter1: { en: 'Offspring', vn: 'Hồi 1', jp: '第1回', kr: '제1장', 'zh-tw': '兒孫滿堂', 'zh-cn': '儿孙满堂' },
  chapter2: { en: 'Humility', vn: 'Hồi 2', jp: '第2回', kr: '제2章', 'zh-tw': '謙卑之道', 'zh-cn': '謙卑之道' },
  chapter3: { en: 'Sincerity', vn: 'Hồi 3', jp: '第3回', kr: '제3장', 'zh-tw': '心心相印', 'zh-cn': '心心相印' },
  chapter4: { en: 'Discipline', vn: 'Hồi 4', jp: '第4回', kr: '제4장', 'zh-tw': '鐵面無私', 'zh-cn': '铁面无私' },
  feedback: { en: 'Feedback', vn: 'Phản hồi', jp: 'フィードバック', kr: '피드백', 'zh-tw': '回饋建議', 'zh-cn': '回馈建议' }
};

export const HOME_CONTENT = {
  title: { 
    en: 'Cultural Context Lab', 
    vn: 'Phòng thí nghiệm văn hóa', 
    jp: '文化語境ラボ', 
    kr: '문화 맥락 연구실', 
    'zh-tw': '紅樓語境：中文跨文化教室', 
    'zh-cn': '紅樓語境：中文跨文化教室' 
  },
  subtitle: { 
    en: 'Learning the "hidden meaning" of modern Chinese through classical wisdom.', 
    vn: 'Học "ý nghĩa ẩn giấu" của tiếng Trung hiện đại thông qua trí tuệ cổ điển.', 
    jp: '古典の知恵を通じて現代中国語の「隠れた意味」を学びます。', 
    kr: '고전의 지혜를 통해現代中国語の "숨겨진 의미"를 배웁니다。', 
    'zh-tw': '透過《紅樓夢》的智慧，學習現代中文的「弦外之音」。讓你在台灣與華人社會中，說話更有溫度，聽話更有深度。', 
    'zh-cn': '透過《紅樓夢》的智慧，學習現代中文的「弦外之音」。讓你在台灣與華人社會中，說話更有溫度，聽話更有深度。' 
  }
};

export const CHAPTERS: ChapterContent[] = [
  {
    id: 'chapter1',
    title: { en: 'Chapter 1: The Blessing of Children', vn: 'Sớm sinh quý tử', jp: '早生貴子', kr: '조생귀자', 'zh-tw': '第一回：「早生貴子」的跨文化祝福', 'zh-cn': '第一回：「早生貴子」的跨文化祝福' },
    classicText: "「一節一節，子孫繁衍，這才是家門之慶。」",
    modernExplanation: {
      en: 'The phrase "Zao Sheng Gui Zi" (Early birth of a son) is a classic Chinese blessing representing family continuity.',
      vn: 'Cụm từ "Tảo sinh quý tử" là một lời chúc phúc cổ điển của Trung Quốc đại diện cho sự tiếp nối gia đình.',
      jp: '「早生貴子」という言葉は、家族の継続を表す古典的な中国の祝福です。',
      kr: '“조생귀자”라는 문구는 가족의 연속성을 나타내는 고전적인 중국의 축복입니다.',
      'zh-tw': '在華人社會中，「早生貴子」不僅是一句祝福語，它背後代表了古代對於家族延續與興旺的期待。對於外國朋友來說，理解這句話能讓你更懂長輩的關心。',
      'zh-cn': '在華人社會中，「早生貴子」不僅是一句祝福語，它背後代表了古代對於家族延續與興旺的期待。對於外國朋友來說，理解這句話能讓你更懂長輩的關心。'
    },
    videoUrl: "Xf6ANQc6aVM",
    contrast: {
      ancient: { en: 'Offspring is the duty to ancestors.', vn: 'Con cái là nghĩa vụ với tổ tiên.', jp: '子孫は祖先への義務です。', kr: '자손은 조상에 대한 의무입니다.', 'zh-tw': '古代：多子多福，生孩子是為了延續家族香火與地位。', 'zh-cn': '古代：多子多福，生孩子是為了延續家族香火與地位。' },
      modern: { en: 'Personal choice and happiness over duty.', vn: 'Lựa chọn cá nhân hơn là nghĩa vụ.', jp: '義務よりも個人の選擇と幸せ。', kr: '의무보다 개인의 선택과 행복.', 'zh-tw': '現代：個人自由與幸福重於一切，生不生孩子是個人的權利。', 'zh-cn': '現代：個人自由與幸福重於一切，生不生孩子是個人的權利。' }
    },
    vocab: [
      { word: '早生貴子', meaning: { en: 'Early birth of a son', vn: 'Sớm sinh quý tử', jp: '早生貴子', kr: '조생귀자', 'zh-tw': '給新婚夫妻的傳統祝福。', 'zh-cn': '給新婚夫妻的傳統祝福。' } },
      { word: '祝福', meaning: { en: 'Blessing', vn: 'Chúc phúc', jp: '祝福', kr: '축복', 'zh-tw': '希望別人得到好運。', 'zh-cn': '希望別人得到好運。' } },
      { word: '傳承', meaning: { en: 'Inheritance/Legacy', vn: 'Truyền thừa', jp: '継承', kr: '전승', 'zh-tw': '把好的東西傳給下一代。', 'zh-cn': '把好的東西傳給下一代。' } },
      { word: '長輩', meaning: { en: 'Elders', vn: 'Bề trên', jp: '目上の人', kr: '어른', 'zh-tw': '家族中地位或年紀較高的人。', 'zh-cn': '家族中地位或年紀較高的人。' } },
      { word: '順其自然', meaning: { en: 'Go with the flow', vn: 'Thuận theo tự nhiên', jp: '成り行きに任せる', kr: '순리대로 하다', 'zh-tw': '不過度勉強，讓事情自然發生。', 'zh-cn': '不過度勉強，讓事情自然發生。' } }
    ],
    grammar: [
      { point: '「早日...」', usage: { en: 'Doing something early', vn: 'Sớm...', jp: '早く…する', kr: '조속히...', 'zh-tw': '表示希望某件好事趕快發生（例如：早日康復）。', 'zh-cn': '表示希望某件好事趕快發生（例如：早日康復）。' } },
      { point: '「為了...」', usage: { en: 'For the sake of...', vn: 'Để...', jp: '…のために', kr: '...을 위해서', 'zh-tw': '用來引出動作的目的。', 'zh-cn': '用來引出動作的目的。' } },
      { point: '「只要...就...」', usage: { en: 'As long as...', vn: 'Chỉ cần... thì...', jp: '…さえすれば…', kr: '...하기만 하면 ...하다', 'zh-tw': '表達一種條件與結果的關係。', 'zh-cn': '表達一種條件與結果的關係。' } },
      { point: '「既然...那...」', usage: { en: 'Since...', vn: 'Đã... thì...', jp: '…なら…', kr: '...이왕이면 ...', 'zh-tw': '用來引出事實後面的建議。', 'zh-cn': '用來引出事實後面的建議。' } },
      { point: '「難道...嗎？」', usage: { en: 'Could it be...?', vn: 'Chẳng lẽ... sao?', jp: 'まさか…か？', kr: '설마 ...인가?', 'zh-tw': '反問句，加強說話的語氣。', 'zh-cn': '反問句，加強說話的語氣。' } }
    ],
    modernEssay: {
      en: 'In modern Taiwan, "Zao Sheng Gui Zi" is still common at weddings, but its tone has changed...',
      vn: 'Ở Đài Loan hiện đại, câu nói này vẫn phổ biến nhưng sắc thái đã thay đổi...',
      jp: '現代の台湾でも結婚式でよく使われますが、ニュアンスが変わりました...',
      kr: '현대 대만에서도 결혼식에서 자주 쓰이지만 뉘앙스가 바뀌었습니다...',
      'zh-tw': '在現代的台灣婚禮上，長輩們還是會舉杯說「早生貴子」。年輕的小明雖然覺得這有點壓力，但他知道這是一種文化傳承。他笑著回答說：「謝謝，我們順其自然，希望以後的生活一直幸福就好。」這就是現代人處理古典期待的智慧。',
      'zh-cn': '在現代的台灣婚禮上，長輩們還是會舉杯說「早生貴子」。年輕的小明雖然覺得這有點壓力，但他知道這是一種文化傳承。他笑著回答說：「謝謝，我們順其自然，希望以後的生活一直幸福就好。」這就是現代人處理古典期待的智慧。'
    }
  },
  {
    id: 'chapter2',
    title: { en: 'Chapter 2: The Art of Humility', vn: 'Nghệ thuật khiêm tốn', jp: '謙遜の技術', kr: '겸손의 技術', 'zh-tw': '第二回：劉姥姥進大觀園與幽默感', 'zh-cn': '第二回：劉姥姥進大觀園與幽默感' },
    classicText: "「老劉，老劉，食量大如牛，吃一個老母豬不抬頭。」",
    modernExplanation: {
      en: 'Granny Liu uses self-deprecating humor to cross social boundaries and win hearts.',
      vn: 'Lưu Lão Lão sử dụng sự hài hước để xóa tan rào cản xã hội.',
      jp: '劉姥姥は自虐的なユーモアを使って社會の壁を越え、心を掴みます。',
      kr: '유노파는 자기 비하적인 유머를 사용하여 사회적 장벽을 넘고 마음을 사로잡습니다.',
      'zh-tw': '劉姥姥進大觀園時，故意裝笨逗大家開心。這種「幽默感」其實是一種生存智慧，讓地位高的人放下戒心。',
      'zh-cn': '劉姥姥進大觀園時，故意裝笨逗大家開心。這種「幽默感」其實是一種生存智慧，讓地位高的人放下戒心。'
    },
    videoUrl: "vTld20VCpAg",
    formIframe: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-0Wf-oOkmT36N6GtveQl44y6c-QIk7fw6HwvxxJ3oBGgYhA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>`,
    contrast: {
      ancient: { en: 'Strict class hierarchy; bowing is mandatory.', vn: 'Phân chia giai cấp nghiêm ngặt.', jp: '厳格な階級制度。', kr: '엄격한 계급 제도.', 'zh-tw': '古代：階級明確，低地位者必須取悅高地位者。', 'zh-cn': '古代：階級明確，低地位者必須取悅高地位者。' },
      modern: { en: 'Flat hierarchy; humor is for rapport building.', vn: 'Giao tiếp bình đẳng hơn.', jp: 'フラットな関係。', kr: '수평적 관계.', 'zh-tw': '現代：追求平等，幽默被視為一種「軟實力」與人格魅力。', 'zh-cn': '現代：追求平等，幽默被視為一種「軟實力」與人格魅力。' }
    },
    vocab: [
      { word: '幽默感', meaning: { en: 'Sense of humor', vn: 'Khiếu hài hước', jp: 'ユーモア', kr: '유머 감각', 'zh-tw': '說話有趣，讓人想笑。', 'zh-cn': '說話有趣，讓人想笑。' } },
      { word: '尷尬', meaning: { en: 'Awkward', vn: 'Ngại ngùng', jp: '氣まずい', kr: '어색하다', 'zh-tw': '覺得不好意思或不自在。', 'zh-cn': '覺得不好意思或不自在。' } },
      { word: '自嘲', meaning: { en: 'Self-deprecation', vn: 'Tự giễu', jp: '自虐', kr: '자학', 'zh-tw': '開自己的玩笑。', 'zh-cn': '開自己的玩笑。' } },
      { word: '氣氛', meaning: { en: 'Atmosphere', vn: 'Bầu không khí', jp: '雰囲気', kr: '분위기', 'zh-tw': '環境給人的感覺。', 'zh-cn': '環境給人的感覺。' } },
      { word: '圓滑', meaning: { en: 'Smooth/Socially adept', vn: 'Trơn tru/Khéo léo', jp: '円滑', kr: '원만하다', 'zh-tw': '說話做事很靈活，不傷感情。', 'zh-cn': '說話做事很靈活，不傷感情。' } }
    ],
    grammar: [
      { point: '「怪不得...」', usage: { en: 'No wonder...', vn: 'Chẳng trách...', jp: '道理で…', kr: '어쩐지...', 'zh-tw': '用於知道原因後表示驚訝或明白。', 'zh-cn': '用於知道原因後表示驚訝或明白。' } },
      { point: '「竟然...」', usage: { en: 'Unexpectedly', vn: 'Bất ngờ', jp: '意外にも', kr: '뜻밖에도', 'zh-tw': '表示事情出乎意料之外。', 'zh-cn': '表示事情出乎意料之外。' } },
      { point: '「...得要命」', usage: { en: 'Extremely...', vn: '...đến mức mạng', jp: '死ぬほど…', kr: '죽을 만큼...', 'zh-tw': '誇張修飾詞，表示程度非常深（如：尷尬得要命）。', 'zh-cn': '誇張修飾詞，表示程度非常深（如：尷尬得要命）。' } },
      { point: '「不但...反而...」', usage: { en: 'Not only... but on the contrary...', vn: 'Không những... mà trái lại...', jp: '…だけでなく、かえって…', kr: '...뿐만 아니라 오히려...', 'zh-tw': '表示情況與預期完全相反。', 'zh-cn': '表示情況與預期完全相反。' } },
      { point: '「話說回來...」', usage: { en: 'On the other hand...', vn: 'Nói đi cũng phải nói lại...', jp: '話を戻すと…', kr: '다시 말해서...', 'zh-tw': '用於轉折，帶回主要的議題。', 'zh-cn': '用於轉折，帶回主要的議題。' } }
    ],
    modernEssay: {
      en: 'In modern business, Granny Liu\'s "low profile" strategy is still effective for new markets...',
      vn: 'Trong kinh doanh hiện đại, chiến lược này vẫn hiệu quả...',
      jp: '現代のビジネスでも、この「低姿勢」戦略は有効です...',
      kr: '현대 비즈니스에서도 이 "낮은 자세" 전략은 효과적입니다...',
      'zh-tw': '約翰第一次代表公司去見台灣的大客戶，氣氛一開始很緊張。他想起劉姥姥的故事，於是幽默地說：「我的中文可能跟我的廚藝一樣，還需要多練習！」大家不但沒笑他，反而氣氛輕鬆了起來。這就是跨文化溝通中的「自嘲」藝術。',
      'zh-cn': '約翰第一次代表公司去見台灣的大客戶，氣氛一開始很緊張。他想起劉姥姥的故事，於是幽默地說：「我的中文可能跟我的廚藝一樣，還需要多練習！」大家不但沒笑他，反而氣氛輕鬆了起來。這就是跨文化溝通中的「自嘲」藝術。'
    }
  },
  {
    id: 'chapter3',
    title: { en: 'Chapter 3: True Heart vs Rules', vn: 'Chân tâm và quy tắc', jp: '本心と規則', kr: '진심과 규칙', 'zh-tw': '第三回：賈寶玉的真心與情感表達', 'zh-cn': '第三回：賈寶玉的真心與情感表達' },
    classicText: "「都道是金玉良姻，俺只念木石前盟。」",
    modernExplanation: {
      en: 'Baoyu values genuine emotion over social expectations, reflecting universal human conflict.',
      vn: 'Bảo Ngọc coi trọng cảm xúc hơn là kỳ vọng xã hội.',
      jp: '寶玉は社會的期待よりも純粹な感情を重視し、普遍的な葛藤を反映しています。',
      kr: '보옥은 사회적 기대보다 진정한 감정을 중시하며 보편적인 갈등을 반영합니다.',
      'zh-tw': '賈寶玉是一個很不傳統的人，他覺得「感情」比「規矩」更重要。這句話雖然簡單，卻包含了華人社會中最難說出口的真話。',
      'zh-cn': '賈寶玉是一個很不傳統的人，他覺得「感情」比「規矩」更重要。這句話雖然簡單，卻包含了華人社會中最難說出口的真話。'
    },
    videoUrl: "Xf6ANQc6aVM", // Placeholder
    contrast: {
      ancient: { en: 'Duty and social roles define human connections.', vn: 'Nghĩa vụ xác định các mối quan hệ.', jp: '義務と社会的役割が人間関係を定義します。', kr: '의무와 사회적 역할이 인간관계를 정의합니다.', 'zh-tw': '古代：婚姻是利益交換，真心往往被犧牲。', 'zh-cn': '古代：婚姻是利益交換，真心往往被犧牲。' },
      modern: { en: 'Individual sincerity and transparency are core values.', vn: 'Sự chân thành cá nhân là cốt lõi.', jp: '個人の誠実さと透明性が核心的價值です。', kr: '개인의 성실함과 투명성이 핵심 가치입니다.', 'zh-tw': '現代：追求真誠的伴侶關係，但在家庭壓力中依然糾結。', 'zh-cn': '現代：追求真誠的伴侶關係，但在家庭壓力中依然糾結。' }
    },
    vocab: [
      { word: '真心', meaning: { en: 'Sincerity/True heart', vn: 'Chân tâm', jp: '本心', kr: '진심', 'zh-tw': '心裡最真實的想法。', 'zh-cn': '心裡最真實的想法。' } },
      { word: '到底', meaning: { en: 'In the end/Really', vn: 'Rốt cuộc', jp: '一体', kr: '도대체', 'zh-tw': '究竟（強調尋求答案）。', 'zh-cn': '究竟（強調尋求答案）。' } },
      { word: '糾結', meaning: { en: 'Tangled/Conflict', vn: 'Rắc rối/Giao tranh', jp: '葛藤', kr: '갈등', 'zh-tw': '想不通，心理很亂。', 'zh-cn': '想不通，心理很亂。' } },
      { word: '壓力', meaning: { en: 'Pressure', vn: 'Áp lực', jp: 'プレッシャー', kr: '압박', 'zh-tw': '環境給人的沉重負擔。', 'zh-cn': '環境給人的沉重負擔。' } },
      { word: '弦外之音', meaning: { en: 'Hidden implication', vn: 'Ý tại ngôn ngoại', jp: '言外の意味', kr: '속뜻', 'zh-tw': '說話沒直說，要聽懂暗示。', 'zh-cn': '說話沒直說，要聽懂暗示。' } }
    ],
    grammar: [
      { point: '「到底...不...」', usage: { en: 'Whether or not...', vn: 'Rốt cuộc có... hay không', jp: '一体…なのか？', kr: '도대체 ...인가?', 'zh-tw': '用於詢問最終確定的情況。', 'zh-cn': '用於詢問最終確定的情況。' } },
      { point: '「寧可...也不...」', usage: { en: 'Would rather... than...', vn: 'Thà... còn hơn...', jp: '…するくらいなら…', kr: '...할지언정 ...하지 않다', 'zh-tw': '表示一種極端的選擇。', 'zh-cn': '表示一種極端的選擇。' } },
      { point: '「與其...不如...」', usage: { en: 'Instead of... better to...', vn: 'Thay vì... thì...', jp: '…よりはむしろ…', kr: '...하기보다 ...하는 편이 낫다', 'zh-tw': '表示比較後的較好建議。', 'zh-cn': '表示比較後的較好建議。' } },
      { point: '「要不是...就...」', usage: { en: 'If not for... then...', vn: 'If not for... then...', jp: 'もし…でなかったら…', kr: '...이 아니었다면 ...했을 것이다', 'zh-tw': '用來引出與事實相反的假設。', 'zh-cn': '用來引出與事實相反的假設。' } },
      { point: '「搞了半天...原來...」', usage: { en: 'After a long time, it turns out...', vn: 'Mãi một hồi mới biết...', jp: '散々やって…結局…', kr: '한참을 그랬는데 결국...', 'zh-tw': '表示經過一番曲折後才發現真相。', 'zh-cn': '表示經過一番曲折後才發現真相。' } }
    ],
    modernEssay: {
      en: 'Modern lovers still play the "hide and seek" game of emotions, requiring cross-cultural wisdom...',
      vn: 'Những người yêu nhau hiện đại vẫn chơi trò "trốn tìm" cảm xúc...',
      jp: '現代の恋人たちも感情の「かくれんぼ」をしており、知恵が必要です...',
      kr: '현대 연인들도 감정의 "숨바꼭질"을 하고 있으며 지혜가 필요합니다...',
      'zh-tw': '瑪麗抱怨她的台灣男友總是「不明說」心裡的話。她想起寶玉的這句「你心裡到底有沒有我？」。她後來才明白，在東方文化中，直接問出口需要極大的勇氣。搞了半天，原來溫柔的暗示也是一種「真心」的表現。',
      'zh-cn': '瑪麗抱怨她的台灣男友總是「不明說」心裡的話。她想起寶玉的這句「你心裡到底有沒有我？」。她後來才明白，在東方文化中，直接問出口需要極大的勇氣。搞了半天，原來溫柔的暗示也是一種「真心」的表現。'
    }
  },
  {
    id: 'chapter4',
    title: { en: 'Chapter 4: Iron-Faced Fairness', vn: 'Công bằng sắt đá', jp: '鉄の公平さ', kr: '철의 공정함', 'zh-tw': '第四回：探春理財與職場的鐵面無私', 'zh-cn': '第四回：探春理財與職場的鐵面無私' },
    classicText: "「凡事都要有個規矩。若是沒了規矩，這家子就不成家子了。」",
    modernExplanation: {
      en: 'Tanchun introduces modern-like management reforms, prioritizing rules over favoritism.',
      vn: 'Thám Xuân giới thiệu các cải cách quản lý, ưu tiên quy tắc.',
      jp: '探春は、贔屓よりも規則を優先する、現代のような管理改革を導入しました。',
      kr: '탐춘은 편애보다 규칙을 우선시하는 현대적인 관리 개혁을 도입했습니다.',
      'zh-tw': '賈探春是一個很有管理頭腦的人。在混亂的賈府裡，她堅持「按規矩辦事」，甚至不給親戚面子。這在講究「人情」的環境中非常不容易。',
      'zh-cn': '賈探春是一個很有管理頭腦的人。在混亂的賈府裡，她堅持「按規矩辦事」，甚至不給親戚面子。這在講究「人情」的環境中非常不容易。'
    },
    videoUrl: "Xf6ANQc6aVM", // Placeholder
    contrast: {
      ancient: { en: 'Favoritism and human interest drive systems.', vn: 'Ân huệ và quan hệ định hình hệ thống.', jp: '贔屓と人情がシステムを動かします。', kr: '편애와 인정이 시스템을 움직입니다.', 'zh-tw': '古代：關係好的人可以不守規矩，造成組織混亂。', 'zh-cn': '古代：關係好的人可以不守規矩，造成組織混亂。' },
      modern: { en: 'SOPs and institutional transparency are key.', vn: 'SOP và sự minh bạch là chìa khóa.', jp: 'SOPと制度의透明性が鍵です。', kr: 'SOP와 제도의 투명성이 핵심입니다.', 'zh-tw': '現代：標準作業程序 (SOP) 重於個人關係，效率第一。', 'zh-cn': '現代：標準作業程序 (SOP) 重於個人關係，效率第一。' }
    },
    vocab: [
      { word: '鐵面無私', meaning: { en: 'Impartial/Strictly fair', vn: 'Thiết diện vô tư', jp: '鉄面無私', kr: '철면무사', 'zh-tw': '做事很公平，不看感情。', 'zh-cn': '做事很公平，不看感情。' } },
      { word: '制度', meaning: { en: 'System/Institution', vn: 'Chế độ', jp: '制度', kr: '제도', 'zh-tw': '大家都要遵守的規定。', 'zh-cn': '大家都要遵守的規定。' } },
      { word: '按部就班', meaning: { en: 'Step by step/Following order', vn: 'Theo bộ tựu ban', jp: '順序立てて', kr: '절차대로', 'zh-tw': '照著一定的順序做事。', 'zh-cn': '照著一定的順序做事。' } },
      { word: '落實', meaning: { en: 'Implement/Ensure', vn: 'Thực hiện', jp: '実行する', kr: '실천하다', 'zh-tw': '真正做到，而不只是說說。', 'zh-cn': '真正做到，而不只是說說。' } },
      { word: '原則', meaning: { en: 'Principle', vn: 'Nguyên tắc', jp: '原則', kr: '원칙', 'zh-tw': '說話做事的基本準則。', 'zh-cn': '說話做事的基本準則。' } }
    ],
    grammar: [
      { point: '「若是...就...」', usage: { en: 'If... then...', vn: 'Nếu như... thì...', jp: 'もし…なら…', kr: '만약 ...라면 ...하다', 'zh-tw': '表達一種假設的邏輯推論。', 'zh-cn': '表達一種假設的邏輯推論。' } },
      { point: '「凡事...都...」', usage: { en: 'Every/All...', vn: 'Mọi việc... đều...', jp: 'すべて…は…', kr: '모든 ...은 ...하다', 'zh-tw': '表示沒有例外的全部。', 'zh-cn': '表示沒有例外的全部。' } },
      { point: '「...得一塌糊塗」', usage: { en: 'A total mess...', vn: '...đến mức rối loạn', jp: 'めちゃくちゃ…', kr: '엉망진창으로...', 'zh-tw': '誇張地形容非常混亂或糟糕的程度。', 'zh-cn': '誇張地形容非常混亂或糟糕的程度。' } },
      { point: '「歸根結底...」', usage: { en: 'In the final analysis...', vn: 'Suy cho cùng...', jp: '結局のところ…', kr: '결국...', 'zh-tw': '用來引出最根本的原因。', 'zh-cn': '用來引出最根本的原因。' } },
      { point: '「大不了...」', usage: { en: 'At worst...', vn: 'Cùng lắm là...', jp: 'たかが…', kr: '해봤자...', 'zh-tw': '表示面對最壞結果時的豁達態度。', 'zh-cn': '表示面對最壞結果時的豁達態度。' } }
    ],
    modernEssay: {
      en: 'Modern managers in Asian firms balance "law" and "love", echoing Tanchun\'s reform spirit...',
      vn: 'Các nhà quản lý hiện đại cân bằng "pháp" và "tình"...',
      jp: '現代のマネージャーは「法」と「情」のバランスをとっています...',
      kr: '현대 매니저들은 "법"과 "정"의 균형을 맞추고 있습니다...',
      'zh-tw': '在現代的公司管理中，如果制度定得一塌糊塗，員工就不會努力工作。探春的故事告訴我們，凡是成功的組織都必須落實原則。雖然有人會覺得這樣太過鐵面無私，但歸根結底，公平才是職場生存最重要的大事。',
      'zh-cn': '在現代的公司管理中，如果制度定得一塌糊塗，員工就不會努力工作。探春的故事告訴我們，凡是成功的組織都必須落實原則。雖然有人會覺得這樣太過鐵面無私，但歸根結底，公平才是職場生存最重要的大事。'
    }
  }
];

export const FORM_IFRAME = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9vRFKEnXZC_tTlQZCnFI9tnLgpiCUShwD4ZNiw-3zrSvcBA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>`;
