
import { FamilyMember, Story, CrisisDilemma, PhraseEntry, MultiLangText } from './types';

export const NAV_LABELS: Record<string, MultiLangText> = {
  home: { en: 'Home', vn: 'Trang chủ', jp: 'ホーム', kr: '홈', 'zh-tw': '首頁', 'zh-cn': '首页' },
  'family-tree': { en: 'Family', vn: 'Gia phả', jp: '家系図', kr: '가계도', 'zh-tw': '家族圖', 'zh-cn': '家族图' },
  stories: { en: 'Stories', vn: 'Câu chuyện', jp: '物語', kr: '이야기', 'zh-tw': '紅樓故事', 'zh-cn': '紅樓故事' },
  crisis: { en: 'Crisis', vn: 'Khủng hoảng', jp: '危機', kr: '위기', 'zh-tw': '文化危機', 'zh-cn': '文化危机' },
  proverbs: { en: 'Proverbs', vn: 'Tục ngữ', jp: 'ことわざ', kr: '속담', 'zh-tw': '諺語', 'zh-cn': '谚语' },
  daily: { en: 'Daily', vn: 'Hàng ngày', jp: '日常会話', kr: '일상 대話', 'zh-tw': '現代對話', 'zh-cn': '現代對話' }
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
    en: 'Learn Cross-Cultural Communication, master the wisdom behind words.', 
    vn: 'Học giao tiếp liên văn hóa, nắm vững trí tuệ đằng sau những lời nói.', 
    jp: '異文化コミュニケーションを学び、言葉の裏にある知恵をマスターしましょう。', 
    kr: '상호문화 소통을 배우고, 말 뒤에 숨겨진 지혜를 터득하세요.', 
    'zh-tw': '學習跨文化溝通，掌握話語背後的智慧。', 
    'zh-cn': '学习跨文化沟通，掌握话语背后的智慧。' 
  },
  tipTitle: { en: '💡 Learning Tips', vn: '💡 Mẹo học tập', jp: '💡 学習のコツ', kr: '💡 학습 팁', 'zh-tw': '💡 學習小撇步', 'zh-cn': '💡 學習小撇步' },
  tipDesc: { en: 'Explore different modules in the sidebar. Switch languages anytime to compare.', vn: 'Khám phá các mô-đun ở thanh bên. Đổi ngôn ngữ bất cứ lúc nào để so sánh.', jp: 'サイドバーの各モジュールを探索してください。いつでも言語を切り替えて比較できます。', kr: '사이드바의 다양한 모듈을 탐색하세요. 언제든 ngôn ngữ을 전환하여 비교할 수 있습니다.', 'zh-tw': '利用側邊欄探索不同模組，您可以隨時切換語言來對比解釋。', 'zh-cn': '利用侧边栏探索不同模组，您可以随时切换语言来对比解释。' },
  significanceTitle: { 
    en: 'Why is Cross-Cultural Communication Important?', 
    vn: 'Tại sao giao tiếp liên văn hóa lại quan trọng?', 
    jp: 'なぜ異文化コミュニケーションが重要なのですか？', 
    kr: '왜 상호문화 소통이 중요한가요?', 
    'zh-tw': '為什麼跨文化溝通很重要？', 
    'zh-cn': '为什么跨文化沟通很重要？' 
  },
  significanceDesc: { 
    en: 'Communication is not just about words; it’s about understanding hearts. In different cultures, the same words can mean different things. Learning cross-cultural communication helps us avoid misunderstandings and build stronger bonds. Through the stories of the Red Chamber, we uncover ancient wisdom to decode the "unsaid" in modern life.',
    vn: 'Giao tiếp không chỉ là ngôn từ; đó là sự thấu hiểu con tim. Trong các nền văn hóa khác nhau, cùng một lời nói có thể mang ý nghĩa khác nhau. Học giao tiếp liên văn hóa giúp chúng ta tránh được những hiểu lầm và xây dựng các mối quan hệ bền chặt hơn. Qua những câu chuyện trong Hồng Lâu Mộng, chúng ta khám phá trí tuệ cổ xưa để giải mã những "lời chưa nói" trong cuộc sống hiện đại.',
    jp: 'コミュニケーションは単なる言葉のやり取りではなく、心を通わせることです。文化が違えば、同じ言葉でも意味が異なることがあります。異文化コミュニケーションを学ぶことで、誤解を避け、より強い絆を築くことができます。紅楼夢の物語を通じて、現代生活における「言外の意」を読み解くための古の知恵を学びましょう。',
    kr: '소통은 단순히 말을 주고받는 것이 아니라 마음을 이해하는 것입니다. 문화마다 같은 말이라도 의미가 다를 수 있습니다. 상호문화 소통을 배우면 오해를 피하고 더 깊은 유대감을 쌓을 수 있습니다. 홍루몽의 이야기를 통해 현대 생활에서 말하지 않아도 통하는 지혜를 발견해 보세요.',
    'zh-tw': '說話不僅是發出聲音，更是理解心靈。在不同的文化中，同樣的一句話可能有不同的意思。學習跨文化溝通，能幫助我們避免誤會，建立更好的關係。透過《紅樓夢》的故事，我們可以看見古人的智慧，學會如何「聽懂」那些沒說出口的話。',
    'zh-cn': '说话不仅是发出声音，更是理解心灵。在不同的文化中，同样的一句话可能有不同的意思。学习跨文化沟通，能帮助我们避免误会，建立更好的关系。透过《红楼梦》的故事，我们可以看见古人的智慧，学会如何「听懂」那些没说出口的话。'
  }
};

export const FAMILY_MEMBERS: FamilyMember[] = [
  { id: 'f1', name: '賈母', family: 'Jia', role: 'blood', generation: 1, relation: { en: 'Supreme Matriarch', vn: 'Lão tổ tông', jp: '最高権威者', kr: '가문의 최고 어른', 'zh-tw': '全家權力最高的老祖宗。', 'zh-cn': '全家权力最高的老祖宗。' }, description: { en: 'The ultimate authority.', vn: 'Người có quyền lực cao nhất.', jp: '最高の権威者。', kr: '최고 권위자.', 'zh-tw': '她是家族的靈魂，非常疼愛孫子寶玉。', 'zh-cn': '她是家族的灵魂，非常疼爱孙子宝玉。' } },
  { id: 'f7', name: '賈政', family: 'Jia', role: 'blood', generation: 2, relation: { en: 'Strict Father', vn: 'Phụ thân nghiêm khắc', jp: '厳格な父', kr: '엄격한 아버지', 'zh-tw': '賈母之子，寶玉之父。', 'zh-cn': '贾母之子，宝玉之父。' }, description: { en: 'Confucian discipline.', vn: 'Trật tự Nho giáo.', jp: '儒教的規律。', kr: '유교적 규율.', 'zh-tw': '為官清正但古板，經常責罰頑劣的寶玉。', 'zh-cn': '为官清正 but 古板，经常责罚顽劣。' } },
  { id: 'f2', name: '賈寶玉', family: 'Jia', role: 'blood', generation: 3, relation: { en: 'The Heir', vn: 'Người thừa kế', jp: '跡継ぎ', kr: '후계자', 'zh-tw': '賈府的核心人物。', 'zh-cn': '賈府的核心人物。' }, description: { en: 'Loves beauty and freedom.', vn: 'Yêu cái đẹp và tự do.', jp: '美と自由を愛する。', kr: '미와 자유를 사랑함.', 'zh-tw': '含玉而生，厭惡科舉功名，深得賈母寵愛。', 'zh-cn': '含玉而生，厭惡科舉功名，深得賈母寵愛。' } },
  { id: 'f3', name: '林黛玉', family: 'Lin', role: 'blood', generation: 3, relation: { en: 'Fragile Poetess', vn: 'Nữ sĩ Lâm Đại Ngọc', jp: 'はかない詩人', kr: '섬세한 시인', 'zh-tw': '賈母之外孫女。', 'zh-cn': '賈母之外孫女。' }, description: { en: 'Sentimental genius.', vn: 'Thiên tài đa cảm.', jp: '感性豊かな天才。', kr: '감수성 풍부한 천재.', 'zh-tw': '才華橫溢，性格敏感多疑，代表純真愛情。', 'zh-cn': '才華橫溢，性格敏感多疑，代表純真愛情。' } },
  { id: 'f4', name: '薛寶釵', family: 'Xue', role: 'blood', generation: 3, relation: { en: 'Capable Cousin', vn: 'Biểu tỷ Tiết Bảo Thoa', jp: '有能な従姉', kr: '유능한 사촌', 'zh-tw': '薛姨媽之女。', 'zh-cn': '薛姨媽之女。' }, description: { en: 'Perfect traditional lady.', vn: 'Tiểu thư mẫu mực.', jp: '完璧な伝統的淑女。', kr: '완벽한 전통 숙녀.', 'zh-tw': '圓融大方，符合封建禮教的典範。', 'zh-cn': '圓融大方，符合封建禮教的典範。' } }
];

export const STORIES: Story[] = [
  { 
    id: 's1', 
    title: { en: 'I. The Arrival', vn: 'I. Lâm Đại Ngọc tiến Giả phủ', jp: 'I. 黛玉、ジャ府に入る', kr: 'I. 대옥의 입성', 'zh-tw': '一、寄人籬下：林黛玉進賈府', 'zh-cn': '一、寄人篱下：林黛玉进贾府' }, 
    content: { 
      en: 'Young Lin Daiyu, having lost her mother, arrives at the grand Jia Mansion. She is extremely cautious, remembering her mother\'s advice: "Do not say a word too much, do not step an inch too far." This is the classic entry into a high-context hierarchy.', 
      vn: 'Lâm Đại Ngọc mồ côi mẹ, được đón về Giả phủ lộng lẫy. Cô vô cùng cẩn trọng, nhớ lời mẹ dặn: "Không nói thừa một lời, không đi sai một bước". Đây là ví dụ kinh điển về việc gia nhập một xã hội có thứ bậc cao.', 
      jp: '母を亡くした黛玉は、豪華なジャ府に到着します。「一言も多く言わず、一歩も多く歩まない」という慎重な振る舞いは、ハイコンテクストな階級社会への入門そのものです。', 
      kr: '어머니를 여읜 대옥이 가씨 가문에 도착합니다. 말 한마디도 아끼고, 한 걸음도 조심하라는 충고를 되새기며 고맥락 사회에 첫발을 내딛습니다.', 
      'zh-tw': '自幼喪母的林黛玉步入榮國府，步步留心，時時在意。她謹記教誨：「不可多說一句話，不可多走一步路」。她在這裡見到了權威的賈母、精明的王熙鳳，更遇見了那含玉而生的賈寶玉。這場因緣就此在規矩森嚴的大宅門內拉開序幕。', 
      'zh-cn': '自幼丧母的林黛玉步入荣国府，步步留心，时时在意。她谨记教诲：「不可多说一句话，不可多走一步路」。她在这里见到了权威的贾母、精明的王熙凤，更遇见了那含玉而生的贾宝玉。这场因缘就此在规矩森严的大宅门内拉开序幕。' 
    }, 
    culturalLesson: { 
      en: 'Observation and self-restraint are essential for survival.', 
      vn: 'Quan sát và tự kiềm chế là điều cốt yếu để tồn tại.', 
      jp: '観察と自制が生存の鍵です。', 
      kr: '관찰과 자제가 생존의 핵심입니다.', 
      'zh-tw': '在高語境文化中，細微的觀察與謹言慎行是融入社會的關鍵。', 
      'zh-cn': '在高语境文化中，细微的观察与谨言慎行是融入社会的关键。' 
    } 
  },
  { 
    id: 's2', 
    title: { en: 'II. Gold and Jade', vn: 'II. Kim Ngọc lương duyên', jp: 'II. 金玉の縁', kr: 'II. 금옥의 인연', 'zh-tw': '二、金玉良緣：薛寶釵的到來', 'zh-cn': '二、金玉良缘：薛宝钗の到来' }, 
    content: { 
      en: 'Xue Baochai arrives with a golden locket, rumored to match Baoyu\'s jade. This "Gold and Jade" match represents social utility vs. Daiyu\'s "Wood and Stone" spiritual bond.', 
      vn: 'Tiết Bảo Thoa đến with chiếc khóa vàng, tạo nên lời đồn về "Kim Ngọc lương duyên". Điều này tượng trưng cho sự phù hợp xã hội so with mối quan hệ tâm linh của Đại Ngọc.', 
      jp: '有能な宝釵が金の首飾りを持って現れ、宝玉の玉との「金玉の縁」が噂されます。これは社会的適合性と、黛玉との精神的絆の対立を象徴しています。', 
      kr: '보차가 금노리개를 가지고 오자 "금옥의 인연" 소문이 돕니다. 이는 사회적 적합성과 대옥과의 정신적 유대 사이의 갈등을 보여줍니다.', 
      'zh-tw': '端莊大方的薛寶釵帶著金鎖來到賈府，眾人傳言「金鎖要配有玉的」，這便是金玉良緣之說。這給了心思敏感的黛玉巨大的壓力。寶釵處事圓融，深得長輩喜愛；而黛玉孤傲清高，只求真情。在繁華背後，一場關於禮教與情感的博弈悄然展開。', 
      'zh-cn': '端庄大方的薛宝钗带着金锁来到贾府，众人传言「金锁要配有玉的」，这便是金玉良缘之说. 这给了心思敏感的黛玉巨大的压力。宝钗处事圆融，深得长辈喜爱；而黛玉孤傲清高，只求真情. 在繁华背后，一场关于礼教与情感的博弈悄然展开。' 
    }, 
    culturalLesson: { 
      en: 'Collective harmony often overrides individual romance.', 
      vn: 'Sự hòa hợp tập thể thường quan trọng hơn lãng mạn cá nhân.', 
      jp: '集団の調和は個人のロマンスに優先されます。', 
      kr: '집단의 조화가 개인의 애정보다 우선시됩니다.', 
      'zh-tw': '傳統社會中，家族的利益與社會的契合度往往高於個人的情感追求。', 
      'zh-cn': '传统社会中，家族的利益与社会的契合度往往高于个人的情感追求。' 
    } 
  },
  { 
    id: 's3', 
    title: { en: 'III. Prosperity', vn: 'III. Đỉnh cao thịnh vượng', jp: 'III. 栄華の絶頂', kr: 'III. 번영의 정점', 'zh-tw': '三、大觀盛世：元春省親與繁華', 'zh-cn': '三、大观盛世：元春省亲与繁华' }, 
    content: { 
      en: 'The mansion builds the Grand View Garden. It is the peak of their wealth, but the financial roots are rotting.', 
      vn: 'Giả phủ xây dựng Đại Quan Viên. Đây là đỉnh cao giàu sang, nhưng tài chính đang cạn kiệt.', 
      jp: 'ジャ家は壮麗な大観園を建設します。栄華の頂点ですが、その裏では財政の腐敗が進んでいます。', 
      kr: '가문은 장엄한 대관원을 건설합니다. 영광의 정점이지만 내부는 부패로 가득합니다.', 
      'zh-tw': '為了迎接元春省親，賈府耗費巨資建造了大觀園。眾姊妹搬進園中，過著優雅的生活。然而，這場盛世之下，財政早已空虛，內部的腐敗如蛀蟲般侵蝕著根基。大觀園雖美，卻是一個隨時會破滅的華麗幻影。', 
      'zh-cn': '为了迎接元春省亲，贾府耗费巨资建造了大观园。众姊妹搬进园中，过着优雅的生活。然而，这场盛世之下，财政早已空虚，内部的腐败如蛀虫般侵蚀着根基。大观园虽美，却是一个随时会破灭的华丽幻影。' 
    }, 
    culturalLesson: { 
      en: 'Face (public image) is maintained even at the cost of bankruptcy.', 
      vn: 'Thể diện (hình ảnh công khai) được duy trì ngay cả khi phá sản.', 
      jp: '破産してでも「面子」は保たれます。', 
      kr: '파산의 위기에서도 체면은 유지됩니다.', 
      'zh-tw': '表面的繁榮往往是為了維持面子，核心的危機往往被掩蓋在儀式之下。', 
      'zh-cn': '表面的繁荣往往是为了维持面子，核心的危机往往被掩盖在仪式之下。' 
    } 
  },
  { 
    id: 's4', 
    title: { en: 'IV. Burying Flowers', vn: 'IV. Táng hoa', jp: 'IV. 葬花', kr: 'IV. 꽃을 묻다', 'zh-tw': '四、葬花吟：黛玉的孤獨與抗爭', 'zh-cn': '四、葬花吟：黛玉的孤独与抗争' }, 
    content: { 
      en: 'Daiyu buries fallen petals, predicting her own end. Her sensitivity is a direct clash with the cold world.', 
      vn: 'Đại Ngọc chôn cánh hoa tàn, dự đoán cái chết của chính mình. Sự nhạy cảm của cô xung đột with thế giới lạnh lẽo.', 
      jp: '散りゆく花を見た黛玉は、花びらを葬ります。彼女の感性は冷酷な現実と衝突し、悲劇を予見します。', 
      kr: '대옥은 지는 꽃잎을 보며 꽃을 묻습니다. 그녀의 감수성은 냉혹한 현실과 충돌하며 비극적 종말을 예고합니다.', 
      'zh-tw': '看著殘花落盡，黛玉築塚埋花，吟誦出悽婉的《葬花吟》。她將自己比作殘花，預見了自己悲劇性的結局。在大宅門的冷酷現實中，她那顆純淨的靈魂無處安放，是對這個世界真情的無聲控訴。', 
      'zh-cn': '看着残花落尽，黛玉筑冢埋花，吟诵出凄婉的《葬花吟》。她将自己比作残花，预見了自己的悲剧性结局。在大宅门的冷酷现实中，她那颗纯净的灵魂无处安放，是对这个世界真情的无声控诉。' 
    }, 
    culturalLesson: { 
      en: 'The individual is often crushed by rigid collective structures.', 
      vn: 'Cá nhân thường bị nghiền nát bởi cấu trúc tập thể cứng nhắc.', 
      jp: '個人はしばしば硬直した集団構造によって押しつぶされます。', 
      kr: '개인은 종종 경직된 집단 구조에 의해 억눌립니다.', 
      'zh-tw': '在高壓的集體主義結構下，敏感而獨立的靈魂往往面對巨大的孤獨感。', 
      'zh-cn': '在高压的集体主义结构下，敏感而独立的灵魂往往面对巨大的孤独感。' 
    } 
  },
  { 
    id: 's5', 
    title: { en: 'V. The Dream Ends', vn: 'V. Mộng tàn', jp: 'V. 夢の終わり', kr: 'V. 꿈의 끝', 'zh-tw': '五、夢醒時分：賈府的沒落與歸宿', 'zh-cn': '五、梦醒时分：賈府的没落与归宿' }, 
    content: { 
      en: 'The mansion is raided. Baoyu becomes a monk, realizing all worldly glory is just a dream.', 
      vn: 'Giả phủ bị tịch thu tài sản. Bảo Ngọc đi tu sau khi nhận ra vinh quang chỉ là một giấc mộng.', 
      jp: 'ジャ家は没落し、宝玉は出家します。この世のすべての栄華はただの夢であったと悟るのです。', 
      kr: '가문은 몰락하고 보옥은 출가합니다. 세상의 모든 영광이 한낱 꿈이었음을 깨닫습니다.', 
      'zh-tw': '最終，賈府被抄家，昔日的繁華轉眼成空。黛玉在絕望中死去，寶玉看破紅塵，隨僧道而去。這場浩大的「紅樓夢」最終回到了起點：世間一切的繁華，不過是如夢幻泡影般的無常幻象。', 
      'zh-cn': '最终，贾府被抄家，昔日的繁华转眼成空。黛玉在绝望中死去，宝玉看破红尘，随僧道而去. 这场浩大的「红楼梦」最终回到了起点：世间一切的繁华，不过是如梦幻泡影般的无常幻象。' 
    }, 
    culturalLesson: { 
      en: 'All earthly glory is temporary and illusory.', 
      vn: 'Mọi vinh quang trần thế đều tạm thời và ảo tưởng.', 
      jp: '栄華はすべて一時的で、幻想に過ぎません。', 
      kr: '세상의 모든 영광은 일시적이며 환상일 뿐입니다.', 
      'zh-tw': '真正的智慧在於超脫外在的興衰與名利。', 
      'zh-cn': '真正的智慧在于超脱外在的兴衰与名利。' 
    } 
  }
];

export const CRISES: CrisisDilemma[] = [
  {
    id: 'c1',
    topic: { en: 'Scenario 1: Face and Praise', vn: 'Kịch bản 1: Thể diện và Lời khen', jp: 'シナリオ1：面子と賞賛', kr: '시나리오 1: 체면과 칭찬', 'zh-tw': '情境一：稱讚與面子', 'zh-cn': '情境一：称赞与面子' },
    theoryName: { en: 'Face Theory', vn: 'Lý thuyết Thể diện', jp: '面子理論', kr: '체면 이론', 'zh-tw': '面子理論', 'zh-cn': '面子理论' },
    theorySimpleDesc: { en: 'Social image management.', vn: 'Quản lý hình ảnh xã hội.', jp: '社会的イメージ管理。', kr: '사회적 이미지 관리.', 'zh-tw': '稱讚是給對方「面子」，也是一種「評價」。', 'zh-cn': '称赞是给对方「面子」，也是一种「评价」。' },
    context: { en: 'Elders praise Daiyu as "Like a beauty in a painting."', vn: 'Trưởng bối khen Đại Ngọc: "Như mỹ nhân trong tranh".', jp: '長老たちが黛玉を褒める。', kr: '어른들이 대옥을 칭찬함.', 'zh-tw': '賈母稱讚黛玉「像個畫裡的人兒似的」。', 'zh-cn': '贾母称赞黛玉「像个画里的人儿似的」。' },
    crisisExplanation: { en: 'Praising represents observation and evaluation.', vn: 'Khen ngợi thể hiện sự quan sát và đánh giá.', jp: '賞賛は観察と評価の表明です。', kr: '칭찬은 관찰과 평가의 표현입니다.', 'zh-tw': '稱讚代表你的一舉一動正在被「評分」。', 'zh-cn': '称赞代表你的一举一动正在被「评分」。' },
    positiveView: { en: 'Shows hospitality.', vn: 'Thể hiện sự hiếu khách.', jp: 'おもてなし。', kr: '환대.', 'zh-tw': '熱情歡迎。', 'zh-cn': '热情欢迎。' },
    negativeView: { en: 'Judgemental focus.', vn: 'Tập trung vào sự phán xét.', jp: '審判的視点。', kr: '판단적 시각.', 'zh-tw': '感覺被評論。', 'zh-cn': '感觉被评论。' },
    discussionQuestion: { en: 'How to introduce a friend properly?', vn: 'Làm sao để giới thiệu bạn bè đúng cách?', jp: '友人の紹介方法は？', kr: '친구를 어떻게 소개할까?', 'zh-tw': '如果你要介紹親友要怎麼說？', 'zh-cn': '如果你要介绍亲友要怎么说？' }
  },
  {
    id: 'c2',
    topic: { en: 'Scenario 2: Nicknames and Power', vn: 'Kịch bản 2: Biệt danh and Quyền lực', jp: 'シナリオ2：愛称と権力', kr: '시나리오 2: 별명과 권력', 'zh-tw': '情境二：介紹詞與權力關係', 'zh-cn': '情境二：介绍词与权力关系' },
    theoryName: { en: 'Social Identity', vn: 'Danh tính xã hội', jp: '社会的アイデンティティ', kr: '사회적 정체성', 'zh-tw': '社會身分', 'zh-cn': '社会身份' },
    theorySimpleDesc: { en: 'Hierarchy in terms.', vn: 'Thứ bậc trong xưng hô.', jp: '呼称の階層。', kr: '호칭의 위계.', 'zh-tw': '上位者可以使用貶義詞顯示親近。', 'zh-cn': '上位者可以使用贬义词显示亲近。' },
    context: { en: 'Grandmother calls Xifeng a "Spicy Girl".', vn: 'Bà gọi Hy Phượng là "đứa đanh đá".', jp: '祖母が熙鳳を「はねっかえり」と呼ぶ。', kr: '할머니가 희봉을 "매운 여자"라고 부름.', 'zh-tw': '賈母笑稱鳳姐是「潑辣貨」。', 'zh-cn': '賈母笑稱鳳姐是「潑辣貨」。' },
    crisisExplanation: { en: 'This signifies trust and favor.', vn: 'Điều này thể hiện sự tin tưởng and ưu ái.', jp: 'これは信頼の証です。', kr: '이는 신뢰의 표시입니다.', 'zh-tw': '這展現了極高的親密感。', 'zh-cn': '这展现了极高的亲密感。' },
    positiveView: { en: 'Deep familial love.', vn: 'Tình cảm gia đình sâu sắc.', jp: '深い家族愛。', kr: '깊은 가족애.', 'zh-tw': '親暱。', 'zh-cn': '亲昵。' },
    negativeView: { en: 'Potential disrespect.', vn: 'Tiềm ẩn sự thiếu tôn trọng.', jp: '不敬の可能性。', kr: '불경의 가능성.', 'zh-tw': '被看輕。', 'zh-cn': '被看轻。' },
    discussionQuestion: { en: 'Can you use slang with elders?', vn: 'Có thể dùng từ lóng with người lớn?', jp: '長老に俗語を使える？', kr: '어른에게 속어를 써도 될까?', 'zh-tw': '你覺得對長輩開玩笑合適嗎？', 'zh-cn': '你觉得对长辈开玩笑合适吗？' }
  },
  {
    id: 'c3',
    topic: { en: 'Scenario 3: Indirect Refusal', vn: 'Kịch bản 3: Từ chối gián tiếp', jp: 'シナリオ3：間接的な拒絶', kr: '시나리오 3: 간접적인 거절', 'zh-tw': '情境三：委婉地說「不」', 'zh-cn': '情境三：委婉地说「不」' },
    theoryName: { en: 'Politeness Strategy', vn: 'Chiến lược lịch sự', jp: '丁寧さの戦略', kr: '공손성 전략', 'zh-tw': '禮貌原則', 'zh-cn': '礼貌原则' },
    theorySimpleDesc: { en: 'Saving face while saying no.', vn: 'Giữ thể diện khi từ chối.', jp: '面子を保つ。', kr: '체면 유지.', 'zh-tw': '拒絕時給予台階。', 'zh-cn': '拒绝时给予台阶。' },
    context: { en: 'Baochai says "I see later."', vn: 'Bảo Thoa bảo "Để sau nhé".', jp: '宝釵が「また後で」と答える。', kr: '보차가 "나중에 보자"고 함.', 'zh-tw': '「改天再聚」通常代表現在不想聚。', 'zh-cn': '「改天再聚」通常代表现在不想聚。' },
    crisisExplanation: { en: 'Direct refusal is seen as aggressive.', vn: 'Từ chối trực tiếp bị coi là hung hăng.', jp: '直接的な拒絶は攻撃的です。', kr: '직설적인 거절은 공격적입니다.', 'zh-tw': '直接說「不行」會傷感情。', 'zh-cn': '直接说「不行」会伤感情。' },
    positiveView: { en: 'Maintains harmony.', vn: 'Duy trì sự hòa hợp.', jp: '調和の維持。', kr: '조화 유지.', 'zh-tw': '顧全大局。', 'zh-cn': '顾全大局。' },
    negativeView: { en: 'Inefficient communication.', vn: 'Giao tiếp thiếu hiệu quả.', jp: '非効率。', kr: '비효율적 소통.', 'zh-tw': '讓人誤會。', 'zh-cn': '让人误会。' },
    discussionQuestion: { en: 'How to say no to a party invite?', vn: 'Làm sao từ chối lời mời tiệc?', jp: 'パーティーの断り方は？', kr: '파티 초대 거절법?', 'zh-tw': '你收過哪些客氣的拒絕？', 'zh-cn': '你收过哪些客气的拒绝？' }
  },
  {
    id: 'c4',
    topic: { en: 'Scenario 4: Collective Face', vn: 'Kịch bản 4: Thể diện tập thể', jp: 'シナリオ4：集団の面子', kr: '시나리오 4: 집단 체면', 'zh-tw': '情境四：家醜不可外揚', 'zh-cn': '情境四：家丑不可外扬' },
    theoryName: { en: 'Group Loyalty', vn: 'Lòng trung thành with nhóm', jp: 'グループの忠誠心', kr: '집단 충성심', 'zh-tw': '集體主義', 'zh-cn': '集体主义' },
    theorySimpleDesc: { en: 'Family honor over self.', vn: 'Danh dự gia đình trên hết.', jp: '家族の誉れ。', kr: '가문의 영예.', 'zh-tw': '個人的榮辱與家族相連。', 'zh-cn': '个人的荣辱与家族相连。' },
    context: { en: 'Jia Mansion covers scandals.', vn: 'Giả phủ che đậy các bê bối.', jp: 'スキャンダルを隠す。', kr: '스캔들을 은폐함.', 'zh-tw': '家族的事不對外人說。', 'zh-cn': '家族的事不对外人说。' },
    crisisExplanation: { en: 'Revealing flaws is seen as betrayal.', vn: 'Tiết lộ lỗi lầm bị coi là phản bội.', jp: '欠点を話すのは裏切りです。', kr: '결점을 말하는 것은 배신입니다.', 'zh-tw': '對家人的忠誠至關重要。', 'zh-cn': '对家人的忠诚至关重要。' },
    positiveView: { en: 'Protects family.', vn: 'Bảo vệ gia đình.', jp: '家族の保護。', kr: '가족 보호.', 'zh-tw': '團結。', 'zh-cn': '团结。' },
    negativeView: { en: 'Lack of transparency.', vn: 'Thiếu sự minh bạch.', jp: '不透明性。', kr: '불투명성.', 'zh-tw': '隱瞞真相。', 'zh-cn': '隐瞒真相。' },
    discussionQuestion: { en: 'Should friends know family fights?', vn: 'Có nên kể chuyện cãi nhau trong nhà cho bạn bè?', jp: '家族の喧嘩を友人に話すべき？', kr: '가족 다툼을 친구에게 말해야 할까?', 'zh-tw': '你贊同這點嗎？', 'zh-cn': '你赞同这点吗？' }
  },
  {
    id: 'c5',
    topic: { en: 'Scenario 5: Gift Giving Debt', vn: 'Kịch bản 5: Nợ quà tặng', jp: 'シナリオ5：贈答의 債務', kr: '시나리오 5: 선물의 빚', 'zh-tw': '情境五：送禮的人情債', 'zh-cn': '情境五：送礼的人情债' },
    theoryName: { en: 'Guanxi', vn: 'Quan hệ', jp: '関係（グアンシ）', kr: '괸시 (인맥)', 'zh-tw': '互惠原理', 'zh-cn': '互惠原理' },
    theorySimpleDesc: { en: 'Favor exchange.', vn: 'Trao đổi ân huệ.', jp: '恩義の交換。', kr: '은혜의 교환.', 'zh-tw': '收禮代表未來要還人情。', 'zh-cn': '收礼代表未来要还人情。' },
    context: { en: 'Xifeng sends expensive silk.', vn: 'Hy Phượng gửi lụa đắt tiền.', jp: '高価な絹を送る。', kr: '비싼 비단을 보냄.', 'zh-tw': '收了禮，就得幫忙。', 'zh-cn': '收了礼，就得帮忙。' },
    crisisExplanation: { en: 'A gift is often a request.', vn: 'Quà tặng thường là một yêu cầu.', jp: '贈り物は要請であることが多い。', kr: '선물은 부탁인 경우가 많습니다.', 'zh-tw': '還禮壓力。', 'zh-cn': '还礼压力。' },
    positiveView: { en: 'Strengthens network.', vn: 'Củng cố mạng lưới.', jp: '絆の強化。', kr: '인맥 강화.', 'zh-tw': '聯繫。', 'zh-cn': '联系。' },
    negativeView: { en: 'Burden.', vn: 'Gánh nặng.', jp: '負擔。', kr: '부담.', 'zh-tw': '被迫。', 'zh-cn': '被迫。' },
    discussionQuestion: { en: 'What gift is too expensive?', vn: 'Món quà nào là quá đắt?', jp: '受け取れない物は？', kr: '부담스러운 선물은?', 'zh-tw': '你會隨便接受禮物嗎？', 'zh-cn': '你会随便接受礼物吗？' }
  },
  {
    id: 'c6',
    topic: { en: 'Scenario 6: Power Distance', vn: 'Kịch bản 6: Quyền lực', jp: 'シナリオ6：権力格差', kr: '시나리오 6: 권력 거리', 'zh-tw': '情境六：長幼有序', 'zh-cn': '情境六：长幼有序' },
    theoryName: { en: 'Hierarchy', vn: 'Thứ bậc', jp: '階層制', kr: '위계 질서', 'zh-tw': '權力距離', 'zh-cn': '权力距离' },
    theorySimpleDesc: { en: 'Respect for authority.', vn: 'Tôn trọng quyền uy.', jp: '権威への敬意。', kr: '권위 존중.', 'zh-tw': '晚輩不能直接反駁。', 'zh-cn': '晚辈不能直接反驳。' },
    context: { en: 'Baoyu stands while father speaks.', vn: 'Bảo Ngọc đứng khi cha nói.', jp: '父の前で立ち尽くす。', kr: '아버지 앞에서 서 있음.', 'zh-tw': '守禮。', 'zh-cn': '守礼。' },
    crisisExplanation: { en: 'Sitting first is seen as arrogance.', vn: 'Ngồi trước bị coi là kiêu ngạo.', jp: '先に座ることは傲慢です。', kr: '먼저 앉는 것은 오만입니다.', 'zh-tw': '長輩沒坐，晚輩不坐。', 'zh-cn': '长辈没坐，晚辈不坐。' },
    positiveView: { en: 'Order.', vn: 'Trật tự.', jp: '秩序。', kr: '질서.', 'zh-tw': '教養。', 'zh-cn': '教养。' },
    negativeView: { en: 'Suppression.', vn: 'Kìm hãm.', jp: '抑制。', kr: '억제.', 'zh-tw': '壓抑。', 'zh-cn': '压抑。' },
    discussionQuestion: { en: 'Debate elders?', vn: 'Tranh luận người lớn?', jp: '長老と議論？', kr: '어른과 토론?', 'zh-tw': '你敢反駁父母嗎？', 'zh-cn': '你敢反驳父母吗？' }
  },
  {
    id: 'c7',
    topic: { en: 'Scenario 7: Sarcasm', vn: 'Kịch bản 7: Châm biếm', jp: 'シナリオ7：皮肉', kr: '시나리오 7: 비꼼', 'zh-tw': '情境七：話中有話', 'zh-cn': '情境七：话中有话' },
    theoryName: { en: 'Ambiguity', vn: 'Mơ hồ', jp: '曖昧さ', kr: '모호성', 'zh-tw': '高語境溝通', 'zh-cn': '高语境沟通' },
    theorySimpleDesc: { en: 'Implicit meaning.', vn: 'Ý nghĩa ngầm.', jp: '暗黙の意味。', kr: '암시적 의미.', 'zh-tw': '意思不在字面。', 'zh-cn': '意思不在字面。' },
    context: { en: 'Daiyu mocks Baoyu.', vn: 'Đại Ngọc mỉa mai Bảo Ngọc.', jp: '宝玉を皮肉る。', kr: '보옥을 비꼬는 대옥.', 'zh-tw': '諷刺。', 'zh-cn': '讽刺。' },
    crisisExplanation: { en: 'Taking insult as literal.', vn: 'Hiểu nhầm lời mỉa mai.', jp: '皮肉をそのまま受け取る。', kr: '비꼬는 말을 그대로 믿음.', 'zh-tw': '遲鈍。', 'zh-cn': '迟钝。' },
    positiveView: { en: 'Saves face.', vn: 'Giữ thể diện.', jp: '面子。', kr: '체면.', 'zh-tw': '委婉。', 'zh-cn': '委婉。' },
    negativeView: { en: 'Confusion.', vn: 'Bối rối.', jp: '混乱。', kr: '혼란.', 'zh-tw': '累。', 'zh-cn': '累。' },
    discussionQuestion: { en: 'Blunt or subtle?', vn: 'Thẳng hay khéo?', jp: '直球？', kr: '직설? 완곡?', 'zh-tw': '聽得出諷刺嗎？', 'zh-cn': '听得出讽刺吗？' }
  },
  {
    id: 'c8',
    topic: { en: 'Scenario 8: Modesty', vn: 'Kịch bản 8: Khiêm tốn', jp: 'シナリオ8：謙虚', kr: '시나리오 8: 겸손', 'zh-tw': '情境八：過度謙虛', 'zh-cn': '情境八：过度谦虚' },
    theoryName: { en: 'Modesty Maxim', vn: 'Khiêm tốn', jp: '謙遜の最大化', kr: '겸손 격률', 'zh-tw': '謙遜美德', 'zh-cn': '谦逊美德' },
    theorySimpleDesc: { en: 'Denying praise.', vn: 'Phủ nhận lời khen.', jp: '賞賛の否定。', kr: '칭찬 부정.', 'zh-tw': '說「哪有」。', 'zh-cn': '说「哪有」。' },
    context: { en: 'Baochai minimizes herself.', vn: 'Bảo Thoa khiêm tốn.', jp: '自身を過小評価。', kr: '자신을 낮춤.', 'zh-tw': '說「還好」。', 'zh-cn': '说「还好」。' },
    crisisExplanation: { en: 'Looks like lying.', vn: 'Giống như nói dối.', jp: '嘘に見える。', kr: '거짓말 같음.', 'zh-tw': '自大。', 'zh-cn': '自大。' },
    positiveView: { en: 'Avoids envy.', vn: 'Tránh đố kỵ.', jp: '嫉妬回避。', kr: '시기 방지.', 'zh-tw': '減少敵意。', 'zh-cn': '减少敌意。' },
    negativeView: { en: 'Falsehood.', vn: 'Giả tạo.', jp: '虚偽。', kr: '가식.', 'zh-tw': '虛偽。', 'zh-cn': '虚伪。' },
    discussionQuestion: { en: 'Thank you or No?', vn: 'Cảm ơn hay Không?', jp: 'ありがとう？', kr: '감사? 부정?', 'zh-tw': '被誇時怎麼辦？', 'zh-cn': '被夸时怎么办？' }
  },
  {
    id: 'c9',
    topic: { en: 'Scenario 9: Ritual', vn: 'Kịch bản 9: Nghi thức', jp: 'シナリオ9：儀礼', kr: '시나리오 9: 형식', 'zh-tw': '情境九：客套的儀式', 'zh-cn': '情境九：客套的仪式' },
    theoryName: { en: 'Social Script', vn: 'Kịch bản xã hội', jp: '社会的スクリプト', kr: '사회적 스크립트', 'zh-tw': '社交表演', 'zh-cn': '社交表演' },
    theorySimpleDesc: { en: 'Acting as expected.', vn: 'Hành động như mong đợi.', jp: '期待通りの振る舞い。', kr: '기대대로 행동.', 'zh-tw': '表演禮貌。', 'zh-cn': '表演礼貌。' },
    context: { en: 'Fighting for bill.', vn: 'Tranh trả tiền.', jp: '会計の奪い合い。', kr: '계산서 다툼.', 'zh-tw': '必要動作。', 'zh-cn': '必要动作。' },
    crisisExplanation: { en: 'Seen as chaotic.', vn: 'Bị coi là lộn xộn.', jp: '騒々しい。', kr: '시끄러움.', 'zh-tw': '不禮貌。', 'zh-cn': '不礼貌。' },
    positiveView: { en: 'Generosity.', vn: 'Rộng lượng.', jp: '寛大。', kr: '관대.', 'zh-tw': '熱情。', 'zh-cn': '热情。' },
    negativeView: { en: 'Waste.', vn: 'Lãng phí.', jp: '無駄。', kr: '낭비.', 'zh-tw': '虛假。', 'zh-cn': '虚假。' },
    discussionQuestion: { en: 'Go Dutch?', vn: 'Chia tiền?', jp: '割り勘？', kr: '더치페이?', 'zh-tw': '支持 AA 嗎？', 'zh-cn': '支持 AA 吗？' }
  },
  {
    id: 'c10',
    topic: { en: 'Scenario 10: Ending visit', vn: 'Kịch bản 10: Kết thúc', jp: 'シナリオ10：終了', kr: '시나리오 10: 종료', 'zh-tw': '情境十：逐客令', 'zh-cn': '情境十：逐客令' },
    theoryName: { en: 'Subtext', vn: 'Ngầm định', jp: '文脈シグナル', kr: '맥락 신호', 'zh-tw': '終止信號', 'zh-cn': '终止信号' },
    theorySimpleDesc: { en: 'Closing without saying.', vn: 'Kết thúc không lời.', jp: '言わずに終わる。', kr: '말없이 끝내기.', 'zh-tw': '端茶送客。', 'zh-cn': '端茶送客。' },
    context: { en: 'Host looks at clock.', vn: 'Chủ nhìn đồng hồ.', jp: '時計を見る。', kr: '시계를 봄.', 'zh-tw': '問渴不渴。', 'zh-cn': '问渴不渴。' },
    crisisExplanation: { en: 'Stay too long.', vn: 'Ở lại quá lâu.', jp: '居座り。', kr: '민폐.', 'zh-tw': '暗示。', 'zh-cn': '暗示。' },
    positiveView: { en: 'Gentle.', vn: 'Nhẹ nhàng.', jp: '優しい。', kr: '부드러움.', 'zh-tw': '不傷和氣。', 'zh-cn': '不伤和气。' },
    negativeView: { en: 'Easy miss.', vn: 'Dễ bỏ lỡ.', jp: '見落とし。', kr: '놓치기 쉬움.', 'zh-tw': '不乾脆。', 'zh-cn': '不干脆。' },
    discussionQuestion: { en: 'How to leave?', vn: 'Làm sao rời đi?', jp: '去る方法は？', kr: '나오는 법?', 'zh-tw': '直接說嗎？', 'zh-cn': '直接说吗？' }
  }
];

export const PROVERBS: PhraseEntry[] = [
  { id: 'p1', phrase: '世事洞明皆學問', literal: { en: 'Understanding affairs is learning.', vn: 'Thế sự thông minh đều là học vấn.', jp: '世の中を知ることは学びである。', kr: '세상일을 아는 것이 배움이다.', 'zh-tw': '看透世俗的人情世故就是一門學問。', 'zh-cn': '看透世俗的人情世故就是一门学问。' }, hidden: { en: 'EQ is wisdom.', vn: 'EQ là trí tuệ.', jp: '社会的知性。', kr: '사회적 지능.', 'zh-tw': '人情世故很重要。', 'zh-cn': '人情世故很重要。' }, example: '世事洞明皆學問。' },
  { id: 'p2', phrase: '人情練達即文章', literal: { en: 'Social skill is a classic.', vn: 'Nhân tình luyện đạt tức văn chương.', jp: '人間関係の熟達は名文。', kr: '인간관계의 능숙함은 명문.', 'zh-tw': '社交技巧決定高度。', 'zh-cn': '社交技巧决定高度。' }, hidden: { en: 'Manners matter.', vn: 'Lễ tiết quan trọng.', jp: 'マナー。', kr: '예절.', 'zh-tw': '處理關係。', 'zh-cn': '处理关系。' }, example: '人情練達即文章。' },
  { id: 'p3', phrase: '機關算盡太聰明', literal: { en: 'Calculating too much.', vn: 'Cơ quan toán tận.', jp: '計算しすぎ。', kr: '지나친 계산.', 'zh-tw': '心機用盡害自己。', 'zh-cn': '心机用尽害自己。' }, hidden: { en: 'Don\'t scheme.', vn: 'Đừng mưu mô.', jp: '策士。', kr: '계략.', 'zh-tw': '警示。', 'zh-cn': '警示。' }, example: '機關算盡太聰明。' },
  { id: 'p4', phrase: '烈火烹油，鮮花著錦', literal: { en: 'Peak prosperity.', vn: 'Hỏa phanh du.', jp: '絶頂。', kr: '전성기.', 'zh-tw': '繁華背後的危機。', 'zh-cn': '繁华背后的危机。' }, hidden: { en: 'Peak before fall.', vn: 'Đỉnh trước sụp.', jp: '落とし穴。', kr: '추락 전.', 'zh-tw': '警告。', 'zh-cn': '警告。' }, example: '烈火烹油。' },
  { id: 'p5', phrase: '滴水之恩，當湧泉相報', literal: { en: 'Drop of help, spring of return.', vn: 'Ăn quả nhớ kẻ trồng cây.', jp: '恩返し。', kr: '보은.', 'zh-tw': '感恩圖報。', 'zh-cn': '感恩图报。' }, hidden: { en: 'Reciprocity.', vn: 'Sự có đi có lại.', jp: '互恵。', kr: '호혜.', 'zh-tw': '不忘恩。', 'zh-cn': '不忘恩。' }, example: '滴水之恩。' },
  { id: 'p6', phrase: '冤家宜解不宜結', literal: { en: 'Friends not foes.', vn: 'Thêm bạn bớt thù.', jp: '和解。', kr: '화해.', 'zh-tw': '化解矛盾。', 'zh-cn': '化解矛盾。' }, hidden: { en: 'Harmony.', vn: 'Hòa hợp.', jp: '調和。', kr: '조화.', 'zh-tw': '不樹敵。', 'zh-cn': '不樹敵。' }, example: '冤家宜解。' },
  { id: 'p7', phrase: '樹倒猢猻散', literal: { en: 'Tree falls, monkeys scatter.', vn: 'Cây đổ khỉ tan.', jp: '没落。', kr: '몰락.', 'zh-tw': '利益關係破裂。', 'zh-cn': '利益关系破裂。' }, hidden: { en: 'Fragile bonds.', vn: 'Liên kết lỏng lẻo.', jp: '薄情。', kr: '박정.', 'zh-tw': '現實。', 'zh-cn': '现实。' }, example: '樹倒猢猻散。' },
  { id: 'p8', phrase: '牆倒眾人推', literal: { en: 'Wall falls, everyone pushes.', vn: 'Dậu đổ bìm leo.', jp: '便乗。', kr: '편승.', 'zh-tw': '落井下石。', 'zh-cn': '落井下石。' }, hidden: { en: 'Cruelty.', vn: 'Sự tàn nhẫn.', jp: '冷酷。', kr: '냉혹.', 'zh-tw': '人性。', 'zh-cn': '人性。' }, example: '牆倒眾人推。' },
  { id: 'p9', phrase: '唇亡齒寒', literal: { en: 'Lips gone, teeth cold.', vn: 'Môi hở răng lạnh.', jp: '運命共同体。', kr: '운명 공동체.', 'zh-tw': '關係密切。', 'zh-cn': '关系密切。' }, hidden: { en: 'Interdependence.', vn: 'Phụ thuộc lẫn nhau.', jp: '相互依存。', kr: '상호 의존.', 'zh-tw': '團結。', 'zh-cn': '团结。' }, example: '唇亡齒寒。' },
  { id: 'p10', phrase: '畫龍點睛', literal: { en: 'Finish the dragon.', vn: 'Vẽ rồng điểm mắt.', jp: '仕上げ。', kr: '화룡점정.', 'zh-tw': '關鍵一筆。', 'zh-cn': '关键一笔。' }, hidden: { en: 'Critical touch.', vn: 'Điểm nhấn.', jp: '重要。', kr: '중요.', 'zh-tw': '精彩。', 'zh-cn': '精彩。' }, example: '畫龍點睛。' },
  { id: 'p11', phrase: '塞翁失馬', literal: { en: 'Old man lost horse.', vn: 'Tái ông thất mã.', jp: '予測不能。', kr: '새옹지마.', 'zh-tw': '禍福難料。', 'zh-cn': '禍福難料。' }, hidden: { en: 'Luck changes.', vn: 'May rủi thay đổi.', jp: '変化。', kr: '변화.', 'zh-tw': '安慰。', 'zh-cn': '安慰。' }, example: '塞翁失馬。' },
  { id: 'p12', phrase: '破釜沉舟', literal: { en: 'Break pots, sink boats.', vn: 'Phá phủ trầm chu.', jp: '決意。', kr: '결의.', 'zh-tw': '不留後路。', 'zh-cn': '不留后路。' }, hidden: { en: 'Determination.', vn: 'Quyết tâm.', jp: '不退転。', kr: '불퇴전.', 'zh-tw': '勇氣。', 'zh-cn': '勇气。' }, example: '破釜沉舟。' },
  { id: 'p13', phrase: '守株待兔', literal: { en: 'Wait for rabbit.', vn: 'Ôm cây đợi thỏ.', jp: '幸運待ち。', kr: '요행 바라기.', 'zh-tw': '死板。', 'zh-cn': '死板。' }, hidden: { en: 'Laziness.', vn: 'Lười biếng.', jp: '怠慢。', kr: '나태.', 'zh-tw': '諷刺。', 'zh-cn': '讽刺。' }, example: '守株待兔。' },
  { id: 'p14', phrase: '亡羊補牢', literal: { en: 'Fix fold after loss.', vn: 'Mất bò lo chuồng.', jp: '補填。', kr: '보완.', 'zh-tw': '事後補救。', 'zh-cn': '事后补救。' }, hidden: { en: 'Better late.', vn: 'Muộn tốt hơn không.', jp: '遅くとも。', kr: '늦어도.', 'zh-tw': '及時。', 'zh-cn': '及时。' }, example: '亡羊補牢。' },
  { id: 'p15', phrase: '拔苗助長', literal: { en: 'Pull sprouts.', vn: 'Nhổ mạ.', jp: '急ぎすぎ。', kr: '조급함.', 'zh-tw': '欲速則不達。', 'zh-cn': '欲速则不达。' }, hidden: { en: 'Patience.', vn: 'Kiên nhẫn.', jp: '忍耐。', kr: '인내.', 'zh-tw': '反面教材。', 'zh-cn': '反面教材。' }, example: '拔苗助長。' },
  { id: 'p16', phrase: '三思而後行', literal: { en: 'Think thrice.', vn: 'Tam tư.', jp: '熟考。', kr: '심사숙고.', 'zh-tw': '慎重。', 'zh-cn': '慎重。' }, hidden: { en: 'Caution.', vn: 'Thận trọng.', jp: '慎重。', kr: '신중.', 'zh-tw': '教導。', 'zh-cn': '教导。' }, example: '三思。' },
  { id: 'p17', phrase: '有志者事竟成', literal: { en: 'Will makes way.', vn: 'Có chí thì nên.', jp: '志。', kr: '의지.', 'zh-tw': '堅持。', 'zh-cn': '坚持。' }, hidden: { en: 'Persistence.', vn: 'Kiên trì.', jp: '継続。', kr: '지속.', 'zh-tw': '鼓勵。', 'zh-cn': '鼓励。' }, example: '事竟成。' },
  { id: 'p18', phrase: '患難見真情', literal: { en: 'Truth in trouble.', vn: 'Gian nan.', jp: '逆境。', kr: '역경.', 'zh-tw': '真朋友。', 'zh-cn': '真朋友。' }, hidden: { en: 'Loyalty.', vn: 'Trung thành.', jp: '忠誠。', kr: '충성.', 'zh-tw': '體會。', 'zh-cn': '體會。' }, example: '真情。' },
  { id: 'p19', phrase: '禍從口出', literal: { en: 'Disaster from mouth.', vn: 'Họa từ miệng.', jp: '失言。', kr: '실언.', 'zh-tw': '謹言。', 'zh-cn': '謹言。' }, hidden: { en: 'Silence.', vn: 'Im lặng.', jp: '沈黙。', kr: '침묵.', 'zh-tw': '警告。', 'zh-cn': '警告。' }, example: '口出。' },
  { id: 'p20', phrase: '禮多人不怪', literal: { en: 'More courtesy.', vn: 'Lễ nhiều.', jp: '礼儀。', kr: '예의.', 'zh-tw': '禮貌安全。', 'zh-cn': '禮貌安全。' }, hidden: { en: 'Etiquette.', vn: 'Lễ tiết.', jp: 'マナー。', kr: '매너.', 'zh-tw': '客氣。', 'zh-cn': '客气。' }, example: '人不怪。' }
];

export const DAILY_PHRASES: PhraseEntry[] = [
  { id: 'd1', phrase: '改天再約吧', literal: { en: 'Meet another day.', vn: 'Hẹn hôm khác nhé.', jp: 'またいつか。', kr: '다음에 봐요.', 'zh-tw': '換個時間見面。', 'zh-cn': '换个时间见面。' }, hidden: { en: 'Polite refusal.', vn: 'Từ chối lịch sự.', jp: '丁寧な拒絶。', kr: '예의 바른 거절.', 'zh-tw': '這代表對方現在沒興趣。', 'zh-cn': '这代表对方现在没兴趣。' }, example: 'A: 明天去玩嗎？ B: 改天再約吧。' },
  { id: 'd2', phrase: '你吃飯了嗎？', literal: { en: 'Have you eaten?', vn: 'Bạn ăn cơm chưa?', jp: 'ご飯食べた？', kr: '밥 먹었니?', 'zh-tw': '吃飯。', 'zh-cn': '吃饭。' }, hidden: { en: 'Greeting.', vn: 'Lời chào.', jp: '挨拶。', kr: '인사.', 'zh-tw': '只是問候，不一定是請客。', 'zh-cn': '只是问候，不一定是请客。' }, example: '吃飯了嗎？' },
  { id: 'd3', phrase: '有空來我家坐坐', literal: { en: 'Visit when free.', vn: 'Rảnh ghé chơi.', jp: '遊びに来て。', kr: '놀러와.', 'zh-tw': '客套邀約。', 'zh-cn': '客套邀约。' }, hidden: { en: 'Closing.', vn: 'Lời chào kết.', jp: 'お世辞。', kr: '인사치레.', 'zh-tw': '別當真。', 'zh-cn': '别当真。' }, example: '有空來坐。' },
  { id: 'd4', phrase: '我們再研究研究', literal: { en: 'Study more.', vn: 'Nghiên cứu thêm.', jp: '検討。', kr: '검토.', 'zh-tw': '委婉推託。', 'zh-cn': '委婉推托。' }, hidden: { en: 'Implicit NO.', vn: 'Không ngầm.', jp: '拒絶。', kr: '거절.', 'zh-tw': '代表不會成功。', 'zh-cn': '代表不会成功。' }, example: '再研究。' },
  { id: 'd5', phrase: '我再考慮一下', literal: { en: 'Think about it.', vn: 'Suy nghĩ lại.', jp: '考える。', kr: '생각해볼게.', 'zh-tw': '婉拒。', 'zh-cn': '婉拒。' }, hidden: { en: 'Probably NO.', vn: 'Có lẽ không.', jp: '不採用。', kr: '불채택.', 'zh-tw': '不用等回覆了。', 'zh-cn': '不用等回复了。' }, example: '再考慮。' },
  { id: 'd6', phrase: '隨便', literal: { en: 'Whatever.', vn: 'Tùy tiện.', jp: '何でも。', kr: '아무거나.', 'zh-tw': '你決定。', 'zh-cn': '你决定。' }, hidden: { en: 'Happy choice.', vn: 'Chọn cái tôi vui.', jp: '好みに合わせて。', kr: '내 맘대로.', 'zh-tw': '選錯我會生氣。', 'zh-cn': '选错我会生气。' }, example: '隨便。' },
  { id: 'd7', phrase: '哪裡哪裡', literal: { en: 'Where where?', vn: 'Đâu có.', jp: 'どこが。', kr: '아니에요.', 'zh-tw': '否認讚美。', 'zh-cn': '否认赞美。' }, hidden: { en: 'Modesty.', vn: 'Khiêm tốn.', jp: '謙遜。', kr: '겸손.', 'zh-tw': '「我不夠好」。', 'zh-cn': '「我不够好」。' }, example: '哪裡哪裡。' },
  { id: 'd8', phrase: '你太客氣了', literal: { en: 'Too polite.', vn: 'Quá khách sáo.', jp: '丁寧すぎ。', kr: '과하십니다.', 'zh-tw': '接受善意。', 'zh-cn': '接受善意。' }, hidden: { en: 'Thank you.', vn: 'Cảm ơn.', jp: '感謝。', kr: '감사.', 'zh-tw': '縮短距離。', 'zh-cn': '缩短距离。' }, example: '太客氣。' },
  { id: 'd9', phrase: '慢走', literal: { en: 'Walk slowly.', vn: 'Đi thong thả.', jp: 'お気をつけて。', kr: '잘 가.', 'zh-tw': '道別。', 'zh-cn': '道别。' }, hidden: { en: 'Take care.', vn: 'Bảo trọng.', jp: '用心。', kr: '조심.', 'zh-tw': '有溫度的再見。', 'zh-cn': '有温度的再见。' }, example: '慢走。' },
  { id: 'd10', phrase: '你看著辦吧', literal: { en: 'Do as you see fit.', vn: 'Tùy bạn.', jp: '任せる。', kr: '알아서 해.', 'zh-tw': '情緒話。', 'zh-cn': '情緒話。' }, hidden: { en: 'Annoyed.', vn: 'Khó chịu.', jp: '不快。', kr: '짜증.', 'zh-tw': '我生氣了。', 'zh-cn': '我生气了。' }, example: '看著辦。' },
  { id: 'd11', phrase: '沒事', literal: { en: 'Nothing.', vn: 'Không có gì.', jp: '何でもない。', kr: '괜찮아.', 'zh-tw': '隱藏問題。', 'zh-cn': '隐藏问题。' }, hidden: { en: 'Big problem.', vn: 'Vấn đề lớn.', jp: '大問題。', kr: '큰 문제.', 'zh-tw': '口氣冷淡就有事。', 'zh-cn': '语气冷淡就有事。' }, example: '沒事。' },
  { id: 'd12', phrase: '挺好的', literal: { en: 'Pretty good.', vn: 'Rất tốt.', jp: 'いい感じ。', kr: '괜찮네.', 'zh-tw': '安全回答。', 'zh-cn': '安全回答。' }, hidden: { en: 'Acceptable.', vn: 'Tạm ổn.', jp: 'まずまず。', kr: '그저 그래.', 'zh-tw': '不代表非常優秀。', 'zh-cn': '不代表非常优秀。' }, example: '挺好的。' },
  { id: 'd13', phrase: '多喝熱水', literal: { en: 'Drink hot water.', vn: 'Uống nước ấm.', jp: '白湯飲んで。', kr: '물 마셔.', 'zh-tw': '萬用關心。', 'zh-cn': '万用关心。' }, hidden: { en: 'No real help.', vn: 'Không giúp gì hơn.', jp: '助けられない。', kr: '모를 때.', 'zh-tw': '敷衍。', 'zh-cn': '敷衍。' }, example: '多喝水。' },
  { id: 'd14', phrase: '差不多吧', literal: { en: 'Almost the same.', vn: 'Gần nhau.', jp: '大体。', kr: '비슷해.', 'zh-tw': '不完美但可接受。', 'zh-cn': '不完美但可接受。' }, hidden: { en: 'Good enough.', vn: 'Tạm.', jp: '十分。', kr: '적당.', 'zh-tw': '將就。', 'zh-cn': '将就。' }, example: '差不多。' },
  { id: 'd15', phrase: '改天請你吃飯', literal: { en: 'Later meal.', vn: 'Hôm nào ăn.', jp: '今度。', kr: '다음에.', 'zh-tw': '口頭感謝。', 'zh-cn': '口头感谢。' }, hidden: { en: 'Empty promise.', vn: 'Hứa lèo.', jp: '空手。', kr: '말뿐.', 'zh-tw': '很少真的約。', 'zh-cn': '很少真的约。' }, example: '請吃飯。' },
  { id: 'd16', phrase: '老樣子', literal: { en: 'Old look.', vn: 'Như cũ.', jp: '相変わらず。', kr: '늘 그렇지.', 'zh-tw': '沒變化。', 'zh-cn': '没变化。' }, hidden: { en: 'Boring.', vn: 'Nhàm chán.', jp: '退屈。', kr: '지루함.', 'zh-tw': '生活平淡。', 'zh-cn': '生活平淡。' }, example: '老樣子。' },
  { id: 'd17', phrase: '我盡力而為', literal: { en: 'Do my best.', vn: 'Cố gắng hết sức.', jp: '尽力します。', kr: '최선을 다할게.', 'zh-tw': '預告失敗。', 'zh-cn': '预告失败。' }, hidden: { en: 'Probably won\'t.', vn: 'Chắc không.', jp: '無理。', kr: '안 될 거야.', 'zh-tw': '別抱太大希望。', 'zh-cn': '别抱太大希望。' }, example: '盡力。' },
  { id: 'd18', phrase: '這件事不太好辦', literal: { en: 'Hard to do.', vn: 'Khó làm.', jp: '難しい。', kr: '힘들어.', 'zh-tw': '暗示拒絕。', 'zh-cn': '暗示拒绝。' }, hidden: { en: 'Refusal.', vn: 'Từ chối.', jp: '拒絶。', kr: '거절.', 'zh-tw': '需要好處。', 'zh-cn': '需要好处。' }, example: '不好辦。' },
  { id: 'd19', phrase: '意思意思', literal: { en: 'Meaning meaning.', vn: 'Chút lòng thành.', jp: '気持ち。', kr: '성의.', 'zh-tw': '小禮物。', 'zh-cn': '小礼物。' }, hidden: { en: 'Token/Bribe.', vn: 'Quà/Hối lộ.', jp: '賄賂。', kr: '뇌물.', 'zh-tw': '人情往來。', 'zh-cn': '人情往来。' }, example: '意思意思。' },
  { id: 'd20', phrase: '哪有的事', literal: { en: 'Where is that?', vn: 'Làm gì có.', jp: 'そんな。', kr: '그럴 리가.', 'zh-tw': '害羞/否認。', 'zh-cn': '害羞/否认。' }, hidden: { en: 'Embarrassed.', vn: 'Xấu hổ.', jp: '照れ。', kr: '부끄러움.', 'zh-tw': '被說中時。', 'zh-cn': '被说中时。' }, example: '哪有。' },
  { id: 'd21', phrase: '改天再說吧', literal: { en: 'Talk another day.', vn: 'Hôm khác nói.', jp: 'また今度。', kr: '나중에 말해.', 'zh-tw': '終止話題。', 'zh-cn': '终止话题。' }, hidden: { en: 'Stop.', vn: 'Dừng lại.', jp: '終わり。', kr: '그만.', 'zh-tw': '不想聊。', 'zh-cn': '不想聊。' }, example: '再說。' },
  { id: 'd22', phrase: '基本上', literal: { en: 'Basically.', vn: 'Cơ bản.', jp: '基本的に。', kr: '기본적으로.', 'zh-tw': '有例外。', 'zh-cn': '有例外。' }, hidden: { en: 'Maybe not.', vn: 'Có thể không.', jp: 'ではないかも。', kr: '아닐 수도.', 'zh-tw': '打預防針。', 'zh-cn': '打预防针。' }, example: '基本上。' },
  { id: 'd23', phrase: '有機會再說', literal: { en: 'Chance later.', vn: 'Cơ hội sau.', jp: '機会があれば。', kr: '기회가 되면.', 'zh-tw': '渺茫。', 'zh-cn': '渺茫。' }, hidden: { en: 'Never.', vn: 'Không bao giờ.', jp: '絕對ない。', kr: '절대 없어.', 'zh-tw': '再也不。', 'zh-cn': '再也不。' }, example: '有機會。' },
  { id: 'd24', phrase: '我是為你好', literal: { en: 'For your good.', vn: 'Vì tốt cho bạn.', jp: 'あなたのため。', kr: '너를 위해서야.', 'zh-tw': '情緒勒索。', 'zh-cn': '情緒勒索。' }, hidden: { en: 'Control.', vn: 'Kiểm soát.', jp: '支配。', kr: '지배.', 'zh-tw': '強迫接受。', 'zh-cn': '强迫接受。' }, example: '為你好。' },
  { id: 'd25', phrase: '看情況', literal: { en: 'See condition.', vn: 'Xem tình hình.', jp: '状況。', kr: '상황 보고.', 'zh-tw': '不承諾。', 'zh-cn': '不承诺。' }, hidden: { en: 'Undecided.', vn: 'Chưa quyết.', jp: '未定。', kr: '미정.', 'zh-tw': '保留餘地。', 'zh-cn': '保留余地。' }, example: '看情況。' }
];
