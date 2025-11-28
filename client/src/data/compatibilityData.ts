import type { CompatibilityResult, DogType, CatType, OwnerType, PetType } from '@shared/schema';

// 강아지 & 주인 궁합 매트릭스 (16가지)
const dogCompatibility: Record<string, CompatibilityResult> = {
  'D-E_O-T': {
    petType: 'D-E',
    ownerType: 'O-T',
    emoji: '🔥',
    title: '환상의 파트NERGY!',
    titleEn: 'Perfect Partnership ENERGY!',
    subtitle: '함께 뛰고 배우며 에너지를 긍정적으로 승화시키는, 지치지 않는 모험 파트너!',
    subtitleEn: 'Unstoppable adventure partners who run and learn together, channeling energy positively!',
    description: '탐험가 강아지의 무한 에너지와 훈련사 주인의 열정이 만나 완벽한 시너지를 발휘합니다. 함께 목표를 향해 달리는 최고의 파트너!',
    descriptionEn: 'Explorer dog\'s infinite energy meets trainer owner\'s passion for perfect synergy. Best partners running toward goals together!',
    tips: [
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '어질리티(장애물), 프리스비(원반)처럼 \'함께 목표를 달성하는\' 스포츠 놀이에 도전해보세요. 시너지가 폭발합니다!',
        contentEn: 'Try sports like agility (obstacles) and frisbee where you achieve goals together. Synergy explodes!'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '"오늘은 쉬자!" 보호자님도 강아지도 \'아무것도 안 하는\' 휴식 훈련이 필요합니다. 과유불급!',
        contentEn: '"Let\'s rest today!" Both guardian and dog need rest training where you do nothing. Too much is as bad as too little!'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '새로운 산책 코스를 계속 개발하고, \'기다려\' 훈련을 마스터하면 서로의 신뢰가 더욱 깊어집니다.',
        contentEn: 'Keep developing new walking routes and master \'wait\' training to deepen mutual trust.'
      }
    ],
    detailReport: {
      analysis: '서로의 에너지가 폭발하는 환상의 짝꿍입니다! 강아지의 모험심을 보호자님의 열정이 완벽하게 이끌어줍니다.',
      analysisEn: 'A fantastic duo with exploding energy! Your passion perfectly guides the dog\'s adventurous spirit.',
      missions: ['함께 등산하기', '어질리티 훈련 도전', '새로운 산책로 개척'],
      missionsEn: ['Hiking together', 'Try agility training', 'Explore new walking paths'],
      letterToOwner: '주인님! 저랑 같이 뛰어놀아줘서 너무 고마워요! 우리는 최고의 팀이에요!',
      letterToOwnerEn: 'Owner! Thanks for running with me! We are the best team!',
      letterToPet: '나의 최고의 파트너! 너와 함께라면 어디든 갈 수 있어. 오늘도 신나게 달리자!',
      letterToPetEn: 'My best partner! I can go anywhere with you. Let\'s run happily today too!'
    }
  },
  'D-E_O-C': {
    petType: 'D-E',
    ownerType: 'O-C',
    emoji: '😅',
    title: '달콤살벌한 혼돈',
    titleEn: 'Sweet Chaos',
    subtitle: '강아지의 무한 체력과 집사의 무한 애정이 만나 펼쳐지는, 사랑하지만 조금 피곤한 일상!',
    subtitleEn: 'Dog\'s infinite stamina meets guardian\'s infinite affection - loving but a bit tiring daily life!',
    description: '무한 애정으로 탐험가의 모든 행동을 감싸주지만 때로는 숨 가쁠 수 있어요. 끝없는 체력의 강아지와 모든 걸 받아주는 집사의 달콤한 조합!',
    descriptionEn: 'Infinite affection embraces every explorer move, though sometimes breathless. Sweet combo of endless energy dog and accepting parent!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '칭찬과 애정 표현은 최고! 하지만 \'안 돼\'라는 명확한 규칙 한두 가지만 정해두면 서로 더 행복해집니다.',
        contentEn: 'Praise and affection are great! But setting one or two clear \'no\' rules makes both happier.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '밖에서 신나게 뛰어놀았다면, 집에서는 꼭 껴안고 교감하는 \'정적인 시간\'도 가져보세요.',
        contentEn: 'After energetic outdoor play, have some \'quiet bonding time\' with cuddles at home.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '강아지가 \'애정 = 모든 것 허용\'으로 오해하지 않도록, 보호자님의 일관성이 필요합니다.',
        contentEn: 'Your consistency is needed so dog doesn\'t mistake \'affection = everything allowed\'.'
      }
    ],
    detailReport: {
      analysis: '강아지의 무한한 에너지를 보호자님의 사랑으로 감싸주는 관계입니다. 가끔은 지칠 수 있지만, 그만큼 사랑도 깊어요.',
      analysisEn: 'A relationship where your love embraces the dog\'s infinite energy. Sometimes tiring, but the love is deep.',
      missions: ['산책 후 발 닦아주며 마사지', '터그 놀이 10분', '함께 낮잠 자기'],
      missionsEn: ['Massage paws after walk', '10 min tug play', 'Nap together'],
      letterToOwner: '주인님은 나를 정말 사랑하나 봐요! 나도 주인님이 세상에서 제일 좋아요!',
      letterToOwnerEn: 'You must really love me! I love you the most in the world too!',
      letterToPet: '너의 그 넘치는 에너지도 다 사랑스러워. 다치지만 말고 건강하게만 자라다오.',
      letterToPetEn: 'Even your overflowing energy is adorable. Just grow up healthy without getting hurt.'
    }
  },
  'D-E_O-L': {
    petType: 'D-E',
    ownerType: 'O-L',
    emoji: '🌊',
    title: '파도와 바위',
    titleEn: 'Wave & Rock',
    subtitle: '끊임없이 에너지를 발산하는 파도(강아지)와 묵묵히 받아주는 바위(보호자) 같은 정반대 매력의 조합.',
    subtitleEn: 'Opposite charms: endless energy wave (dog) meets steadfast rock (guardian).',
    description: '탐험가는 세상을 누비고, 동반자는 여유롭게 기다려줍니다. 서로 다른 템포지만 완벽한 조화를 이뤄요.',
    descriptionEn: 'Explorer roams the world while companion waits patiently. Different tempos, perfect harmony.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '서로의 다름을 존중하는 것이 핵심! 강아지는 보호자 곁에서 \'쉬는 법\'을, 보호자는 강아지 덕분에 \'움직이는 즐거움\'을 배웁니다.',
        contentEn: 'Respecting differences is key! Dog learns to rest beside guardian, guardian learns joy of movement from dog.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '보호자님이 편안하게 앉아서 공을 던져주는 놀이, 또는 자동 장난감을 활용해보세요.',
        contentEn: 'Play fetch while sitting comfortably, or use automatic toys.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '강아지가 혼자서도 에너지를 풀 수 있도록, 튼튼한 터그 장난감이나 노즈워크 매트를 구비해두는 것을 추천합니다.',
        contentEn: 'Provide sturdy tug toys or nosework mats so dog can release energy independently.'
      }
    ],
    detailReport: {
      analysis: '서로 다른 템포를 가진 두 존재가 만나 의외의 조화를 이룹니다. 강아지는 보호자에게 활력을, 보호자는 강아지에게 휴식을 줍니다.',
      analysisEn: 'Two beings with different tempos create unexpected harmony. Dog gives vitality, you give rest.',
      missions: ['벤치에 앉아서 롱리드 산책', '집에서 노즈워크 하기', '조용한 공원에서 멍때리기'],
      missionsEn: ['Long leash walk sitting on bench', 'Indoor nosework', 'Spacing out in quiet park'],
      letterToOwner: '주인님은 항상 여유로워 보여요. 저도 주인님 옆에 있으면 마음이 편해져요.',
      letterToOwnerEn: 'You always look relaxed. I feel comfortable beside you too.',
      letterToPet: '너 덕분에 내가 밖에도 나가고 웃게 돼. 나의 활력소, 고마워.',
      letterToPetEn: 'Thanks to you, I go out and smile. Thank you, my energizer.'
    }
  },
  'D-E_O-P': {
    petType: 'D-E',
    ownerType: 'O-P',
    emoji: '💊',
    title: '걱정 탐험대',
    titleEn: 'Worried Explorers',
    subtitle: '깐깐한 부모님의 철저한 안전 계획 아래, 강아지는 오늘도 안전하게 세상을 탐험합니다!',
    subtitleEn: 'Under meticulous parent\'s thorough safety plan, dog explores the world safely today too!',
    description: '호기심 많은 탐험가를 24시간 걱정하는 부모님. "다칠까 봐 걱정돼!"지만 그 활발함이 건강의 증거라는 걸 알고 있어요.',
    descriptionEn: 'Parent worries 24/7 about curious explorer. "What if they get hurt!" but knows that energy means health.',
    tips: [
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '산책 전후로 발바닥 소독과 진드기 검사는 필수! 보호자님의 꼼꼼함이 탐험가의 안전을 지킵니다.',
        contentEn: 'Paw disinfection and tick checks before/after walks are essential! Your thoroughness protects explorer.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '밖에서 다칠까 봐 걱정된다면, 실내 어질리티나 두뇌를 쓰는 \'트릭 훈련\'으로 에너지를 소모시켜 주세요.',
        contentEn: 'Worried about outdoor injuries? Try indoor agility or brain-stimulating trick training.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '모든 것을 통제하려 하면 강아지가 스트레스를 받을 수 있어요. 안전이 확인된 공간에서는 조금 자유롭게 놔주셔도 좋습니다.',
        contentEn: 'Over-control may stress dog. In verified safe spaces, allow some freedom.'
      }
    ],
    detailReport: {
      analysis: '보호자님의 꼼꼼한 케어 덕분에 강아지는 안전하게 모험을 즐길 수 있습니다. 완벽한 서포터와 플레이어의 관계!',
      analysisEn: 'Thanks to your meticulous care, dog enjoys adventures safely. Perfect supporter and player relationship!',
      missions: ['안전한 애견 운동장 방문', '건강 검진 받기', '천연 간식 만들기'],
      missionsEn: ['Visit safe dog park', 'Health checkup', 'Make natural treats'],
      letterToOwner: '주인님은 항상 나를 지켜줘요! 주인님 뒤에 숨으면 무서운 게 없어요!',
      letterToOwnerEn: 'You always protect me! I fear nothing when hiding behind you!',
      letterToPet: '네가 다치지 않고 행복하게 뛰어노는 게 나의 가장 큰 기쁨이야.',
      letterToPetEn: 'Seeing you run happily without getting hurt is my greatest joy.'
    }
  },
  'D-F_O-T': {
    petType: 'D-F',
    ownerType: 'O-T',
    emoji: '🎯',
    title: '간식 훈련 마스터',
    titleEn: 'Treat Training Master',
    subtitle: '최고의 훈련은 최고의 간식에서 나온다! \'기다려\'와 \'손\' 훈련에 가장 특화된 조합.',
    subtitleEn: 'Best training comes from best treats! Perfect combo for \'wait\' and \'paw\' training.',
    description: '미식가의 식탐과 훈련사의 체계가 만나 완벽한 훈련 파트너십! 간식을 활용한 효과적인 교육으로 최고의 반려견을 만들어가요.',
    descriptionEn: 'Foodie\'s appetite meets trainer\'s system for perfect training partnership! Effective treat-based education creates the best companion.',
    tips: [
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '모든 훈련을 간식과 연관 지어 보세요. 강아지는 \'천재견\'이 되고 보호자님은 \'최고의 조련사\'가 될 수 있습니다!',
        contentEn: 'Link all training with treats. Dog becomes \'genius dog\' and you become \'best trainer\'!'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '간식은 훈련용 \'보상\'이지 \'주식\'이 아닙니다! 비만이 되지 않도록 하루 총 급여량을 꼭 계산하세요.',
        contentEn: 'Treats are training \'rewards\', not \'main meals\'! Calculate daily portions to prevent obesity.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '간식을 숨기는 \'노즈워크\' 놀이는 미식가 강아지의 두뇌와 후각을 동시에 만족시키는 최고의 놀이입니다.',
        contentEn: '\'Nosework\' hiding treats satisfies foodie dog\'s brain and sense of smell simultaneously.'
      }
    ],
    detailReport: {
      analysis: '간식을 매개로 완벽한 소통이 이루어지는 관계입니다. 훈련 성과가 가장 빠르게 나타나는 엘리트 커플!',
      analysisEn: 'Perfect communication through treats. Elite couple with fastest training results!',
      missions: ['새로운 개인기 하나 배우기', '기다려 훈련 1분 도전', '간식 숨기기 놀이'],
      missionsEn: ['Learn one new trick', '1 min wait challenge', 'Hide treats game'],
      letterToOwner: '주인님 말만 잘 들으면 맛있는 게 나와요! 공부가 제일 재미있어요!',
      letterToOwnerEn: 'Yummy things come when I listen to you! Studying is most fun!',
      letterToPet: '똑똑한 우리 강아지, 하나를 가르치면 열을 아네! 간식 줄 맛이 난다.',
      letterToPetEn: 'Smart doggy, learns so fast! It\'s a joy to give treats.'
    }
  },
  'D-F_O-C': {
    petType: 'D-F',
    ownerType: 'O-C',
    emoji: '🍰',
    title: '무한 간식 리필',
    titleEn: 'Infinite Treat Refill',
    subtitle: '"오구오구"와 "냠냠"이 만나 행복이 두 배가 되는, 완벽한 애정의 순환. (하지만 체중계가 두려워!)',
    subtitleEn: '"Aww" meets "nom nom" for double happiness - perfect affection cycle. (But scale is scary!)',
    description: '아련한 눈빛에 무너지는 집사와 그걸 아는 미식가의 달콤한 공생. "한 입만 더~"가 10번째 간식이 되는 일상이에요.',
    descriptionEn: 'Parent melts at puppy eyes, and foodie knows it - sweet symbiosis. "Just one more bite~" becomes the 10th treat.',
    tips: [
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '강아지의 \'아련한 눈빛\' 스킬에 넘어가면 비만견이 되는 것은 시간문제! 간식 대신 \'격한 칭찬\'과 \'스킨십\'으로 애정을 표현해 보세요.',
        contentEn: 'Fall for \'puppy eyes\' skill and obesity is inevitable! Express affection with \'enthusiastic praise\' and \'physical touch\' instead of treats.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지는 보호자님을 \'세상에서 가장 맛있는 걸 주는 사람\'으로 인식합니다. 이 신뢰를 바탕으로 \'이 닦기\' 같은 건강 습관도 길러주세요.',
        contentEn: 'Dog sees you as \'person who gives yummiest things\'. Use this trust to build health habits like teeth brushing.'
      },
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '간식도 건강하게! 고구마, 당근, 브로콜리 등 건강한 야채 간식으로 대체하는 것을 추천합니다.',
        contentEn: 'Healthy treats too! Recommend substituting with healthy veggie treats like sweet potato, carrot, broccoli.'
      }
    ],
    detailReport: {
      analysis: '서로 먹여주고 먹는 기쁨을 나누는 행복한 관계입니다. 사랑이 과해서 체중이 늘어날 수 있으니 주의!',
      analysisEn: 'Happy relationship sharing joy of feeding and eating. Beware of weight gain from too much love!',
      missions: ['다이어트 사료로 바꾸기', '간식 대신 양배추 주기', '함께 산책하며 칼로리 태우기'],
      missionsEn: ['Switch to diet food', 'Cabbage instead of treats', 'Burn calories walking together'],
      letterToOwner: '주인님은 천사예요! 맛있는 걸 계속 줘요. 사랑해요!',
      letterToOwnerEn: 'You are an angel! You keep giving yummy things. I love you!',
      letterToPet: '잘 먹는 모습만 봐도 배가 불러. 그래도 건강을 위해 조금만 줄이자.',
      letterToPetEn: 'I\'m full just watching you eat. But let\'s reduce a bit for health.'
    }
  },
  'D-F_O-L': {
    petType: 'D-F',
    ownerType: 'O-L',
    emoji: '☕',
    title: '평화로운 식탁',
    titleEn: 'Peaceful Dining',
    subtitle: '느긋하게 밥 먹는(혹은 밥 달라고 조르는) 강아지와, 그걸 느긋하게 바라보는 보호자. 평화 그 자체!',
    subtitleEn: 'Leisurely eating (or begging) dog and guardian who watches leisurely. Peace itself!',
    description: '미식가는 천천히 맛있는 걸 즐기고, 동반자는 그 모습을 흐뭇하게 지켜봅니다. 느긋하게 먹고 편안히 쉬는 둘만의 시간!',
    descriptionEn: 'Foodie savors slowly while companion watches contentedly. Leisurely eating and comfortable rest - their special time!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '맛있는 것을 나눠 먹는 것만큼 행복한 일도 없죠. 보호자님이 식사할 때 강아지도 옆에서 \'퍼즐 토이\'로 식사를 즐기게 해주세요.',
        contentEn: 'Nothing happier than sharing yummy things. When you eat, let dog enjoy meals with \'puzzle toy\' nearby.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '식탐이 많다면 \'슬로우 식기\'를 사용해 보세요. 천천히 먹는 습관이 소화에도 좋습니다.',
        contentEn: 'If food-motivated, try \'slow feeder\'. Slow eating habit is good for digestion too.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '밥시간을 정확하게 지키는 것이 이 조합의 평화를 유지하는 비결입니다. 강아지의 \'견체시계\'는 정확하니까요!',
        contentEn: 'Keeping meal times precise maintains this combo\'s peace. Dog\'s \'internal clock\' is accurate!'
      }
    ],
    detailReport: {
      analysis: '느긋하게 미식을 즐기는 품격 있는 관계입니다. 급하게 먹지 않고 음미할 줄 아는 여유가 있어요.',
      analysisEn: 'Classy relationship enjoying gourmet slowly. Leisure to savor without rushing.',
      missions: ['슬로우 식기로 밥 먹기', '조용한 곳에서 간식 타임', '함께 클래식 음악 듣기'],
      missionsEn: ['Eat with slow feeder', 'Quiet treat time', 'Listen to classical music'],
      letterToOwner: '주인님과 함께 밥 먹을 때가 제일 편안해요. 우리 천천히 먹어요.',
      letterToOwnerEn: 'Most comfortable when eating with you. Let\'s eat slowly.',
      letterToPet: '너랑 있으면 시간이 느리게 가는 것 같아. 이 평화로움이 참 좋다.',
      letterToPetEn: 'Time seems to slow down with you. I love this peace.'
    }
  },
  'D-F_O-P': {
    petType: 'D-F',
    ownerType: 'O-P',
    emoji: '📊',
    title: '성분표 전문가',
    titleEn: 'Ingredient Expert',
    subtitle: '깐깐한 영양사(보호자) 덕분에, 미식가(강아지)는 오늘도 최고의 성분으로 만든 건강한 미식을 즐깁니다!',
    subtitleEn: 'Thanks to meticulous nutritionist (guardian), foodie (dog) enjoys healthy gourmet made with best ingredients today!',
    description: '사료 성분을 꼼꼼히 분석하고 최고의 간식만 엄선하는 걱정 많은 부모의 헌신적인 사랑. 미식가를 위한 완벽한 영양 관리!',
    descriptionEn: 'Worried parent\'s devoted love carefully analyzing ingredients and selecting only best treats. Perfect nutrition management for foodie!',
    tips: [
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '보호자님의 지식이 빛을 발할 때! 알레르기 유발 성분을 피하고 영양 밸런스가 맞는 최고의 사료를 찾아주세요.',
        contentEn: 'Your knowledge shines! Avoid allergenic ingredients and find best food with proper nutrition balance.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지가 "이거 아니면 안 먹어!" 편식을 시작할 수 있습니다. 건강을 위해 때로는 단호하게 대처하는 것도 필요합니다.',
        contentEn: 'Dog may start picky eating "Only this or nothing!" Sometimes firm approach is needed for health.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '간식을 활용한 노즈워크 놀이도 좋지만, 식탐이 너무 강하다면 \'공놀이\' 등 활동적인 놀이로 체중 관리를 병행해 주세요.',
        contentEn: 'Treat-based nosework is good, but if too food-motivated, combine with active play like fetch for weight management.'
      }
    ],
    detailReport: {
      analysis: '건강과 영양을 최우선으로 생각하는 웰빙 커플입니다. 강아지의 건강 수명이 가장 길어질 수 있는 조합!',
      analysisEn: 'Well-being couple prioritizing health and nutrition. Combo for longest healthy lifespan!',
      missions: ['영양제 챙겨 먹기', '사료 성분 공부하기', '매일 몸무게 체크'],
      missionsEn: ['Take supplements', 'Study food ingredients', 'Daily weight check'],
      letterToOwner: '주인님이 주는 건 맛이 좀 없...지만 몸이 튼튼해지는 기분이에요!',
      letterToOwnerEn: 'What you give tastes... okay, but I feel stronger!',
      letterToPet: '좋은 것만 먹이고 싶어. 아프지 말고 오래오래 같이 살자.',
      letterToPetEn: 'I want to feed you only the best. Stay healthy and live long with me.'
    }
  },
  'D-Z_O-T': {
    petType: 'D-Z',
    ownerType: 'O-T',
    emoji: '🎓',
    title: '인내심 수업',
    titleEn: 'Patience Lesson',
    subtitle: '보호자는 열정적으로 훈련하고, 강아지는 소파에서 구경하고... 서로의 다름을 존중하며 인내심을 배우는 쿨한 관계.',
    subtitleEn: 'Guardian trains passionately, dog watches from couch... Cool relationship learning patience by respecting differences.',
    description: '열정적인 훈련사의 끈기와 느긋한 현자의 여유가 만나 천천히 하지만 확실하게! 서두르지 않는 훈련이 더 깊은 유대감을 만듭니다.',
    descriptionEn: 'Passionate trainer\'s persistence meets chill philosopher\'s leisure - slow but sure! Unhurried training builds deeper bonds.',
    tips: [
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '강아지가 귀찮아한다면 훈련 강도를 낮춰주세요. 하루 5분, \'앉아\'나 \'기다려\' 같은 정적인 훈련부터 시작해 보세요.',
        contentEn: 'If dog seems bothered, lower training intensity. Start with 5-minute static training like \'sit\' or \'wait\'.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지의 성향을 바꾸려 하기보다, 보호자님이 \'느긋함\'을 배우는 계기로 삼아보세요. 함께 낮잠 자는 것도 훌륭한 교감입니다.',
        contentEn: 'Rather than changing dog\'s nature, use as chance to learn \'leisureliness\'. Napping together is great bonding too.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '격한 놀이보다 \'간식 숨기기\'나 \'가벼운 산책\'처럼 강아지의 페이스에 맞는 활동을 찾아주세요.',
        contentEn: 'Find activities matching dog\'s pace like \'hide treats\' or \'light walks\' rather than intense play.'
      }
    ],
    detailReport: {
      analysis: '서로의 속도를 맞춰가는 과정에서 깊은 신뢰가 쌓입니다. 훈련사는 인내심을, 강아지는 규칙을 배웁니다.',
      analysisEn: 'Deep trust builds as you match speeds. Trainer learns patience, dog learns rules.',
      missions: ['5분간 눈 맞추기', '천천히 걷기 훈련', '기다려 훈련 심화'],
      missionsEn: ['5 min eye contact', 'Slow walking training', 'Advanced wait training'],
      letterToOwner: '주인님, 조금만 천천히 해요. 저는 생각할 시간이 필요해요.',
      letterToOwnerEn: 'Master, slow down a bit. I need time to think.',
      letterToPet: '네 덕분에 기다림의 미학을 배워. 천천히 가도 괜찮아.',
      letterToPetEn: 'Thanks to you I learn aesthetics of waiting. It\'s okay to go slow.'
    }
  },
  'D-Z_O-C': {
    petType: 'D-Z',
    ownerType: 'O-C',
    emoji: '🛋️',
    title: '소파 친구들',
    titleEn: 'Couch Buddies',
    subtitle: '푹신한 이불 속에서 함께 뒹굴뒹굴, 세상에서 가장 아늑한 시간을 보내는 것이 행복인 조합.',
    subtitleEn: 'Rolling together in fluffy blankets - combo where spending coziest time is happiness.',
    description: '느긋한 현자와 애정 넘치는 집사의 평화로운 일상. 함께 누워서 낮잠 자고 껴안고 뒹굴뒹굴~ 행복은 이 소파 위에 있어요.',
    descriptionEn: 'Chill philosopher and loving parent\'s peaceful daily life. Napping together, cuddling, rolling around~ Happiness is on this couch.',
    tips: [
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '함께 넷플릭스를 보거나 낮잠을 자는 것이 이 조합의 최고의 힐링 타임입니다.',
        contentEn: 'Watching Netflix together or napping is this combo\'s best healing time.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '느긋한 강아지일수록 \'칭찬\'과 \'스킨십\'에 더 깊게 반응합니다. 지금처럼 아낌없이 사랑을 표현해 주세요.',
        contentEn: 'More laid-back dogs respond deeper to \'praise\' and \'physical touch\'. Express love generously as you do now.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '너무 움직이지 않으면 둘 다 살찔 수 있어요! 하루 한 번, 아주 짧게라도 \'동네 한 바퀴 산책\'은 필수입니다.',
        contentEn: 'Too little movement may make both gain weight! Short \'neighborhood walk\' once daily is essential.'
      }
    ],
    detailReport: {
      analysis: '함께 뒹굴거리는 것이 최고의 행복인 소울메이트입니다. 서로의 체온을 느끼며 쉬는 시간이 가장 소중해요.',
      analysisEn: 'Soulmates where rolling around together is happiness. Resting feeling each other\'s warmth is precious.',
      missions: ['소파에서 함께 낮잠', '서로 기대어 TV 보기', '부드러운 마사지'],
      missionsEn: ['Nap together on sofa', 'Watch TV leaning on each other', 'Gentle massage'],
      letterToOwner: '주인님 품이 세상에서 제일 푹신해요. 우리 평생 이렇게 누워있어요.',
      letterToOwnerEn: 'Your arms are softest in the world. Let\'s lie here forever.',
      letterToPet: '너랑 껴안고 있으면 모든 스트레스가 풀려. 나의 힐링 요정.',
      letterToPetEn: 'Hugging you relieves all stress. My healing fairy.'
    }
  },
  'D-Z_O-L': {
    petType: 'D-Z',
    ownerType: 'O-L',
    emoji: '🧘',
    title: '완벽한 힐링',
    titleEn: 'Perfect Healing',
    subtitle: '조용히 곁에 머무는 것을 좋아하는 두 영혼이 만나 최고의 \'안정감\'과 \'평화\'를 이룹니다.',
    subtitleEn: 'Two souls who love staying quietly together create ultimate \'stability\' and \'peace\'.',
    description: '최고의 케미! 현자와 동반자의 만남은 평온함 그 자체. 특별한 것 없이도 함께 있는 것만으로 충분한 완벽한 조화입니다.',
    descriptionEn: 'Best chemistry! Philosopher meets companion in pure tranquility. Perfect harmony where just being together is enough.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '이 조합은 말이 필요 없습니다. 그냥 같은 공간에서 서로의 존재를 느끼는 것만으로도 완벽한 교감을 나눕니다.',
        contentEn: 'This combo needs no words. Perfect bonding just by feeling each other\'s presence in same space.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '조용한 음악, 편안한 소파, 푹신한 방석. 두 분의 힐링을 위한 \'편안한 환경\'을 조성해 주세요.',
        contentEn: 'Quiet music, comfortable sofa, fluffy cushion. Create \'comfortable environment\' for both\'s healing.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '가끔은 서로 다른 방에서 \'개인의 시간\'을 갖는 것도 이 성숙한 관계를 유지하는 비결입니다.',
        contentEn: 'Sometimes having \'personal time\' in different rooms is secret to maintaining this mature relationship.'
      }
    ],
    detailReport: {
      analysis: '말하지 않아도 통하는 완벽한 텔레파시 커플. 공기처럼 편안하고 물처럼 자연스러운 관계입니다.',
      analysisEn: 'Telepathic couple understanding without words. Comfortable like air, natural like water.',
      missions: ['말없이 서로 바라보기', '같은 공간에서 각자 할 일 하기', '조용한 산책'],
      missionsEn: ['Stare without words', 'Do own things in same space', 'Quiet walk'],
      letterToOwner: '말하지 않아도 알아요. 주인님이 저를 얼마나 사랑하는지.',
      letterToOwnerEn: 'I know without words. How much you love me.',
      letterToPet: '존재만으로도 위로가 되는 너. 우리는 전생에 부부였을까?',
      letterToPetEn: 'Comforting just by existing. Were we a couple in past life?'
    }
  },
  'D-Z_O-P': {
    petType: 'D-Z',
    ownerType: 'O-P',
    emoji: '🏥',
    title: '과잉 보호 현자',
    titleEn: 'Overprotected Sage',
    subtitle: '현명한 강아지는 걱정 많은 부모님을 덜 피곤하게 만드는 법을 알고 있지만, 부모님은 오늘도 노심초사!',
    subtitleEn: 'Wise dog knows how to tire worried parent less, but parent worries anxiously today too!',
    description: '"너무 조용한 거 아니야?" 걱정 가득한 부모와 그냥 원래 조용한 현자. 건강염려증 부모님의 사랑을 조용히 받아주는 평화로운 관계.',
    descriptionEn: '"Are you too quiet?" Worried parent and naturally quiet philosopher. Peaceful relationship accepting hypochondriac parent\'s love.',
    tips: [
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '강아지가 느긋한 건지, 아파서 기운이 없는 건지 잘 관찰해 주세요. 보호자님의 꼼꼼함이 현자의 건강을 지킵니다.',
        contentEn: 'Observe well if dog is laid-back or weak from illness. Your thoroughness protects philosopher\'s health.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지는 생각보다 튼튼합니다! 보호자님이 조금만 걱정을 내려놓으시면, 강아지는 더 편안함을 느낄 거예요.',
        contentEn: 'Dogs are sturdier than you think! If you ease worries a bit, dog will feel more comfortable.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '건강 검진은 정기적으로! 보호자님의 걱정을 덜어줄 가장 확실한 방법은 \'정기 검진\'입니다.',
        contentEn: 'Regular health checkups! \'Regular checkups\' are surest way to ease your worries.'
      }
    ],
    detailReport: {
      analysis: '조용한 강아지를 보며 "어디 아픈가?" 걱정하지만, 사실은 그저 평화로운 상태일 뿐입니다. 안심하세요!',
      analysisEn: 'Worrying "Is he sick?" seeing quiet dog, but actually just peaceful. Relax!',
      missions: ['심박수 체크하며 안심하기', '따뜻한 찜질 해주기', '건강 일기 쓰기'],
      missionsEn: ['Check heart rate to relax', 'Warm compress', 'Write health diary'],
      letterToOwner: '저 안 아파요! 그냥 자는 게 좋은 거예요. 걱정 마세요!',
      letterToOwnerEn: 'I\'m not sick! Just like sleeping. Don\'t worry!',
      letterToPet: '너무 조용해서 숨 쉬나 확인해봤어. 건강하게만 있어줘.',
      letterToPetEn: 'Checked if breathing cause too quiet. Just stay healthy.'
    }
  },
  'D-S_O-T': {
    petType: 'D-S',
    ownerType: 'O-T',
    emoji: '🌟',
    title: '사회성 챔피언',
    titleEn: 'Social Champion',
    subtitle: '함께 배우고 뽐내는 것을 즐깁니다. 동네 애견 카페나 모임의 주인공은 바로 이 커플!',
    subtitleEn: 'Enjoy learning and showing off together. This couple is star of neighborhood dog cafe or gatherings!',
    description: '사교적인 댕청이의 밝은 에너지와 훈련사의 체계적 교육이 만나 완벽한 반려견! 어디를 가도 사랑받는 매너 좋은 반려견입니다.',
    descriptionEn: 'Social butterfly\'s bright energy meets trainer\'s systematic education for perfect companion! Well-mannered and loved everywhere.',
    tips: [
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '\'개인기\' 훈련에 최적화! \'돌아\', \'빵야\', \'코\' 등 사람들의 이목을 끄는 훈련을 하면 강아지의 만족도가 매우 높습니다.',
        contentEn: 'Perfect for \'trick\' training! Training attention-grabbing tricks like \'spin\', \'bang\', \'touch\' brings high dog satisfaction.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '매일 새로운 사람, 새로운 강아지를 만날 수 있는 \'사회화 산책\'을 즐겨보세요. 둘 다 행복해집니다.',
        contentEn: 'Enjoy \'socialization walks\' meeting new people and dogs daily. Both become happy.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '너무 흥분해서 다른 강아지나 사람에게 달려들지 않도록, \'기다려\'와 \'이리 와\' 훈련은 필수입니다!',
        contentEn: 'To prevent over-excitement and jumping on others, \'wait\' and \'come\' training are essential!'
      }
    ],
    detailReport: {
      analysis: '어딜 가나 인기 만점! 사람들의 시선을 즐기는 스타 커플입니다. 함께 개인기를 연습하고 뽐내는 것이 즐거움!',
      analysisEn: 'Popular everywhere! Star couple enjoying attention. Fun to practice and show off tricks!',
      missions: ['새로운 개인기 영상 찍기', '애견 동반 카페 투어', '커플룩 입고 산책'],
      missionsEn: ['Film new trick video', 'Dog cafe tour', 'Walk in couple look'],
      letterToOwner: '주인님! 저기 봐요! 사람들이 나 예쁘대요! 빨리 간식 줘요!',
      letterToOwnerEn: 'Look! People say I\'m pretty! Give me treats quick!',
      letterToPet: '우리 애기 천재 아니야? 어떻게 이렇게 잘해? 너무 자랑스러워!',
      letterToPetEn: 'Isn\'t my baby a genius? How so good? So proud!'
    }
  },
  'D-S_O-C': {
    petType: 'D-S',
    ownerType: 'O-C',
    emoji: '💖',
    title: '애교 폭발 콤비',
    titleEn: 'Cuteness Overload Combo',
    subtitle: '애교쟁이 강아지와 무한애정 보호자가 만나, 365일 사랑이 넘쳐흐르는 조합.',
    subtitleEn: 'Charmer dog meets infinite-affection guardian - combo overflowing with love 365 days.',
    description: '세상에서 가장 사랑스러운 조합! 서로를 향한 애정이 넘쳐서 주변 사람들도 행복해져요.',
    descriptionEn: 'Most adorable combination ever! Overflowing affection makes everyone around happy.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지의 애교는 보호자님의 사랑을 먹고 자랍니다. 지금처럼 아낌없이 표현해 주세요!',
        contentEn: 'Dog\'s charm grows on your love. Express generously as you do now!'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '\'분리불안\'이 생기기 쉬운 조합입니다. 보호자님이 없어도 혼자 잘 놀 수 있도록 \'켄넬 훈련\'이나 \'혼자 있기 훈련\'을 병행해 주세요.',
        contentEn: 'Combo prone to \'separation anxiety\'. Practice \'kennel training\' or \'alone time training\' so dog plays well alone.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '강아지는 보호자님의 \'반응\'을 즐깁니다. 숨바꼭질, 까꿍 놀이 등 보호자님이 크게 리액션해주는 놀이를 좋아합니다.',
        contentEn: 'Dog enjoys your \'reactions\'. Loves play like hide-and-seek, peekaboo where you react enthusiastically.'
      }
    ],
    detailReport: {
      analysis: '사랑이 넘쳐흐르는 핑크빛 관계. 강아지의 애교에 보호자는 녹아내리고, 그 사랑에 강아지는 더 사랑스러워집니다.',
      analysisEn: 'Pink relationship overflowing with love. You melt at dog\'s charm, dog becomes cuter with that love.',
      missions: ['하루 100번 뽀뽀하기', '사랑해라고 말해주기', '커플 사진 찍기'],
      missionsEn: ['100 kisses daily', 'Say I love you', 'Take couple photos'],
      letterToOwner: '주인님 껌딱지가 될 거야! 화장실도 같이 갈래요!',
      letterToOwnerEn: 'Gonna be your gum! I\'ll follow to bathroom too!',
      letterToPet: '너 없으면 어떻게 살았을까? 나의 비타민, 나의 전부.',
      letterToPetEn: 'How did I live without you? My vitamin, my everything.'
    }
  },
  'D-S_O-L': {
    petType: 'D-S',
    ownerType: 'O-L',
    emoji: '🌈',
    title: '긍정 에너지',
    titleEn: 'Positive Energy',
    subtitle: '느긋한 보호자 곁에서 끊임없이 관심을 요구하며 긍정 에너지를 뿜어내는 귀염둥이.',
    subtitleEn: 'Cutie constantly seeking attention beside laid-back guardian, radiating positive energy.',
    description: '밝은 에너지의 댕청이가 동반자에게 활력을 주고, 동반자의 여유가 댕청이를 안정시켜요. 서로에게 좋은 영향을 주는 관계입니다.',
    descriptionEn: 'Bright energy butterfly energizes companion, while companion\'s calm stabilizes butterfly. Mutually beneficial relationship.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지의 넘치는 에너지가 가끔 귀찮을 수 있지만, 보호자님의 삶에 엄청난 활력소가 됩니다!',
        contentEn: 'Dog\'s overflowing energy may sometimes bother, but becomes tremendous vitality source for your life!'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '보호자님이 편안하게 앉아서 할 수 있는 \'터그 놀이\'나 \'간단한 공 던지기\'로 에너지를 소모시켜 주세요.',
        contentEn: 'Drain energy with \'tug play\' or \'simple fetch\' you can do while sitting comfortably.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '강아지가 혼자서도 잘 놀 수 있도록 다양한 장난감을 구비해 주고, 보호자님은 가끔 \'관객\'이 되어 칭찬해 주세요.',
        contentEn: 'Provide various toys so dog plays well alone, and you become occasional \'audience\' giving praise.'
      }
    ],
    detailReport: {
      analysis: '강아지의 밝은 에너지가 보호자의 삶을 환하게 비춰줍니다. 우울할 틈이 없는 해피 바이러스 커플!',
      analysisEn: 'Dog\'s bright energy lights up your life. Happy virus couple with no time for depression!',
      missions: ['공원에서 신나게 달리기', '장난감으로 터그 놀이', '웃는 얼굴 사진 찍기'],
      missionsEn: ['Run happily in park', 'Tug play with toy', 'Take smiling photo'],
      letterToOwner: '주인님! 우울해하지 마요! 내가 있잖아요! 헤헤헤!',
      letterToOwnerEn: 'Don\'t be sad! I\'m here! Hehehe!',
      letterToPet: '너만 보면 웃음이 나. 나의 행복 전도사.',
      letterToPetEn: 'I smile seeing you. My happiness evangelist.'
    }
  },
  'D-S_O-P': {
    petType: 'D-S',
    ownerType: 'O-P',
    emoji: '❤️',
    title: '과보호 연합',
    titleEn: 'Overprotection Alliance',
    subtitle: '애교로 걱정을 녹이는 강아지와, 헌신적인 케어로 보답하는 부모님의 만남.',
    subtitleEn: 'Dog melting worries with charm meets parent responding with devoted care.',
    description: '"괜찮아요~" 애교에 걱정이 사르르 녹아버려요. 애교로 걱정을 녹이는 강아지와, 헌신으로 보답하는 부모님!',
    descriptionEn: '"I\'m fine~" charm dissolves all worries away. Dog melts worries with charm, parent responds with devotion!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '강아지의 애교가 보호자님의 걱정을 줄여주는 \'힐링 포인트\'가 됩니다.',
        contentEn: 'Dog\'s charm becomes \'healing point\' reducing your worries.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '"우리 애기는 순해서 괜찮아"라는 생각에 사회화 시기를 놓칠 수 있습니다. 보호자님의 통제 하에 다양한 경험을 시켜주세요.',
        contentEn: 'May miss socialization period thinking "My baby is gentle so it\'s okay". Give various experiences under your control.'
      },
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '사람을 너무 좋아해서 아무나 따라가거나 아무거나 받아먹지 않도록, \'낯선 사람 경계\' 훈련도 필요합니다.',
        contentEn: 'Train \'stranger caution\' so dog doesn\'t follow anyone or accept food from strangers due to loving people too much.'
      }
    ],
    detailReport: {
      analysis: '너무 사랑해서 걱정도 많은 관계. 하지만 강아지는 그 걱정마저 사랑으로 받아들이고 애교로 보답합니다.',
      analysisEn: 'Love so much, worry so much. But dog accepts worry as love and repays with charm.',
      missions: ['인식표 꼭 착용하기', '안전한 실내 놀이터 가기', '사랑의 대화 나누기'],
      missionsEn: ['Wear ID tag', 'Go to safe indoor playground', 'Have loving conversation'],
      letterToOwner: '주인님, 걱정 마세요. 저는 항상 주인님 곁에 있을 거예요.',
      letterToOwnerEn: 'Don\'t worry. I\'ll always be by your side.',
      letterToPet: '잃어버릴까 봐, 다칠까 봐 항상 조마조마해. 너무 소중해서 그래.',
      letterToPetEn: 'Anxious you might get lost or hurt. Because you\'re so precious.'
    }
  }
};

// 고양이 & 주인 궁합 매트릭스 (16가지)
const catCompatibility: Record<string, CompatibilityResult> = {
  'C-R_O-T': {
    petType: 'C-R',
    ownerType: 'O-T',
    emoji: '👑',
    title: '군신관계',
    titleEn: 'Monarch & Subject',
    subtitle: '지배자(고양이)의 위엄을 존중하는 훈련사(보호자)의 완벽한 파트너십.',
    subtitleEn: 'Perfect partnership where trainer (guardian) respects ruler (cat)\'s dignity.',
    description: '왕의 품격을 이해하고 존중하는 신하의 헌신적인 섬김. 지배자의 위엄을 존중하는 완벽한 파트너십!',
    descriptionEn: 'Subject\'s devoted service understanding and honoring the monarch\'s grace. Perfect partnership respecting ruler\'s dignity!',
    tips: [
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '고양이는 강아지와 다릅니다! \'훈련\'하려 하지 말고 \'사냥놀이\'를 통해 자연스럽게 가르쳐보세요. \'하이파이브\' 정도는 가능합니다.',
        contentEn: 'Cats differ from dogs! Don\'t try to \'train\', teach naturally through \'hunting play\'. \'High-five\' is possible.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이가 먼저 다가올 때까지 기다려주는 \'인내심\'이 훈련보다 중요합니다.',
        contentEn: '\'Patience\' waiting until cat approaches first is more important than training.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '\'수직 공간\'! 지배자가 편안하게 아래를 내려다볼 수 있는 \'캣타워\'나 \'선반\'은 필수입니다.',
        contentEn: '\'Vertical space\'! \'Cat tower\' or \'shelf\' where ruler can comfortably look down is essential.'
      }
    ],
    detailReport: {
      analysis: '왕과 신하의 관계처럼, 서로의 영역과 역할을 존중하는 완벽한 파트너십입니다. 훈련사님의 리더십은 고양이에게 안정감을 줍니다.',
      analysisEn: 'Like a king and subject, a perfect partnership respecting each other\'s territory and role. Your leadership gives the cat stability.',
      missions: ['하루 15분 사냥놀이 의식', '하이파이브 훈련 도전', '수직 공간 재배치'],
      missionsEn: ['15 min hunting ritual', 'High-five challenge', 'Rearrange vertical space'],
      letterToOwner: '자네, 꽤 쓸만하군. 앞으로도 나를 잘 보필하도록.',
      letterToOwnerEn: 'You are quite useful. Continue to serve me well.',
      letterToPet: '너의 그 도도함마저 매력적이야. 평생 너를 모실게.',
      letterToPetEn: 'Even your arrogance is charming. I will serve you forever.'
    }
  },
  'C-R_O-C': {
    petType: 'C-R',
    ownerType: 'O-C',
    emoji: '🙇‍♂️',
    title: '왕과 숭배자',
    titleEn: 'Monarch & Worshiper',
    subtitle: '고귀한 왕(고양이)의 모든 행동을 숭배하며 간식을 바치는 집사(보호자)의 행복한 일상.',
    subtitleEn: 'Happy daily life of butler (guardian) worshiping noble monarch (cat)\'s every move with treat offerings.',
    description: '"폐하, 츄르를 가져왔습니다!" 충성심 가득한 관계. 고귀한 왕의 모든 행동을 숭배하는 행복한 일상!',
    descriptionEn: '"Your Majesty, I brought Churu!" Loyal relationship. Happy daily life worshiping noble monarch\'s every move!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '왕은 귀찮게 하는 것을 싫어합니다. 보호자님의 애정 표현이 \'과잉\'이 되지 않도록 고양이의 표정을 잘 관찰하세요.',
        contentEn: 'Monarch dislikes being bothered. Observe cat\'s expression well so your affection doesn\'t become \'excessive\'.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '고양이가 \'집사 = 간식 주는 사람\'으로만 인식할 수 있습니다. \'사냥놀이\'를 통해 유대감을 쌓는 것이 더 중요합니다.',
        contentEn: 'Cat may only see \'butler = treat giver\'. Building bonds through \'hunting play\' is more important.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '왕의 심기를 거스르지 않도록, 화장실 청소와 밥그릇 관리는 매일 완벽하게 해주세요!',
        contentEn: 'Not to displease monarch, do litter box cleaning and food bowl management perfectly daily!'
      }
    ],
    detailReport: {
      analysis: '고양이를 왕처럼 모시는 집사님 덕분에 고양이는 매일이 행복합니다. 하지만 가끔은 집사님의 사랑이 부담스러울 수도 있어요!',
      analysisEn: 'Thanks to the butler treating the cat like a king, the cat is happy every day. But sometimes your love might be overwhelming!',
      missions: ['눈 키스(천천히 깜빡이기) 3번', '맛있는 간식 조공하기', '빗질해주며 찬양하기'],
      missionsEn: ['3 slow blinks', 'Offer tasty treats', 'Praise while brushing'],
      letterToOwner: '음, 츄르 맛이 좋구나. 특별히 머리를 쓰다듬는 것을 허락하노라.',
      letterToOwnerEn: 'Hmm, the Churu tastes good. I specially allow you to pet my head.',
      letterToPet: '나의 주인님, 나의 왕이시여. 부디 건강만 하소서.',
      letterToPetEn: 'My master, my king. Please just stay healthy.'
    }
  },
  'C-R_O-L': {
    petType: 'C-R',
    ownerType: 'O-L',
    emoji: '🏛️',
    title: '우아한 동거',
    titleEn: 'Elegant Coexistence',
    subtitle: '서로의 영역과 시간을 완벽하게 존중하는, 가장 이상적이고 우아한 룸메이트.',
    subtitleEn: 'Most ideal and elegant roommates perfectly respecting each other\'s territory and time.',
    description: '지배자는 높은 곳에서, 동반자는 아래에서 각자의 영역을 지키며 조화롭게 살아갑니다. 서로의 공간을 존중하는 우아한 관계!',
    descriptionEn: 'Ruler above, companion below - harmoniously guarding their territories. Elegant relationship respecting each other\'s space!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '이 조합은 \'간섭하지 않는 것\'이 최고의 사랑 방식입니다. 조용히 같은 공간에서 각자의 할 일을 하세요.',
        contentEn: 'For this combo, \'not interfering\' is best way of love. Quietly do your own things in same space.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 먼저 다가와 몸을 비빌 때, 그때가 바로 스킨십 타임입니다! 그 외에는 쿨하게 지내세요.',
        contentEn: 'When cat approaches first and rubs body, that\'s physical touch time! Otherwise stay cool.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '각자의 \'개인 공간\'이 중요합니다. 보호자님의 의자와 고양이의 캣타워는 적절한 거리를 유지해 주세요.',
        contentEn: 'Each one\'s \'personal space\' is important. Maintain proper distance between your chair and cat\'s tower.'
      }
    ],
    detailReport: {
      analysis: '서로의 독립성을 존중하는 가장 고양이다운 관계입니다. 굳이 붙어있지 않아도 서로의 존재만으로 편안함을 느낍니다.',
      analysisEn: 'The most cat-like relationship respecting each other\'s independence. Comfortable just by being there without needing to stick together.',
      missions: ['같은 공간에서 각자 책/창밖 보기', '조용히 곁에 앉아있기', '서로의 낮잠 시간 지켜주기'],
      missionsEn: ['Read/Look out window in same room', 'Sit quietly nearby', 'Respect nap times'],
      letterToOwner: '너는 조용해서 좋아. 내 곁에 있어도 방해가 안 돼.',
      letterToOwnerEn: 'I like that you are quiet. You don\'t disturb me even when nearby.',
      letterToPet: '너의 그 우아한 자태를 보는 것만으로도 나는 행복해.',
      letterToPetEn: 'Just watching your elegant figure makes me happy.'
    }
  },
  'C-R_O-P': {
    petType: 'C-R',
    ownerType: 'O-P',
    emoji: '💎',
    title: '프리미엄 케어',
    titleEn: 'Premium Care',
    subtitle: '깐깐한 어의(보호자)의 프리미엄 보살핌 아래, 고양이(옥체)는 오늘도 평안합니다.',
    subtitleEn: 'Under meticulous royal physician (guardian)\'s premium care, cat (royal body) is at peace today too.',
    description: '"최고만을 드려야 해!" 럭셔리한 고양이 라이프의 완성. 왕족 대우를 받는 지배자와 최고급 케어를 제공하는 부모!',
    descriptionEn: '"Only the best!" Luxury cat life perfected. Royal treatment for ruler and premium care from parent!',
    tips: [
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '지배자는 아픈 티를 내지 않습니다! 보호자님의 \'걱정\'과 \'관찰력\'이 고양이의 건강을 지키는 핵심입니다.',
        contentEn: 'Ruler doesn\'t show illness! Your \'worry\' and \'observation\' are key to protecting cat\'s health.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '최고급 사료, 깨끗한 물, 완벽한 화장실. 보호자님의 깐깐함이 지배자의 삶의 질을 높여줍니다.',
        contentEn: 'Premium food, clean water, perfect litter box. Your meticulousness raises ruler\'s quality of life.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '고양이가 스트레스 받지 않도록, 과도한 건강 체크나 잦은 병원 방문은 오히려 독이 될 수 있습니다.',
        contentEn: 'So cat doesn\'t stress, excessive health checks or frequent vet visits may be harmful.'
      }
    ],
    detailReport: {
      analysis: '최고급 케어를 제공하는 집사와 그에 걸맞은 품격을 지닌 고양이. 럭셔리하고 건강한 묘생을 보장하는 완벽한 환경입니다.',
      analysisEn: 'Butler providing premium care and cat with matching dignity. Perfect environment guaranteeing a luxury and healthy cat life.',
      missions: ['음수량 체크하기', '최고급 모래로 전체 갈이', '건강 검진 예약하기'],
      missionsEn: ['Check water intake', 'Full litter change with premium sand', 'Book health checkup'],
      letterToOwner: '내 화장실이 아주 깨끗하군. 마음에 들어. 계속 이렇게 관리해.',
      letterToOwnerEn: 'My litter box is very clean. I like it. Keep managing it like this.',
      letterToPet: '최고의 것만 해줄게. 너는 그럴 자격이 있으니까.',
      letterToPetEn: 'I\'ll give you only the best. Because you deserve it.'
    }
  },
  'C-G_O-T': {
    petType: 'C-G',
    ownerType: 'O-T',
    emoji: '⚡',
    title: '에너지 관리사',
    titleEn: 'Energy Manager',
    subtitle: '넘치는 에너지를 \'사냥놀이 훈련\'으로 승화시키는, 환상의 액티비티 짝꿍!',
    subtitleEn: 'Fantasy activity duo channeling overflowing energy into \'hunting play training\'!',
    description: '훈련사의 체계적인 놀이 시간 관리로 도깨비의 에너지를 건강하게 발산시켜요. 혼돈의 에너지를 긍정적으로 활용!',
    descriptionEn: 'Trainer\'s systematic playtime management helps gremlin release energy healthily. Channeling chaotic energy positively!',
    tips: [
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '매일 최소 2번, 15분 이상 \'격렬한 사냥놀이\'는 필수입니다! 보호자님의 열정이 고양이의 사고를 막아줍니다.',
        contentEn: 'Minimum twice daily, 15+ minutes of \'intense hunting play\' is essential! Your passion prevents cat\'s accidents.'
      },
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '\'점프\', \'물어와\' 훈련이 가능한 고양이입니다! 낚싯대 장난감을 활용해 에너지를 방출시켜 주세요.',
        contentEn: 'Cat capable of \'jump\', \'fetch\' training! Use wand toys to release energy.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '에너지가 남으면 새벽에 \'우다다\'가 시작됩니다. 자기 전에 확실하게 놀아주는 것이 숙면의 비결입니다.',
        contentEn: 'Leftover energy starts \'zoomies\' at dawn. Playing thoroughly before bed is secret to good sleep.'
      }
    ],
    detailReport: {
      analysis: '고양이의 폭발적인 에너지를 훈련사님의 체계적인 놀이로 완벽하게 해소합니다. 스트레스 없는 건강한 고양이로 자랄 거예요!',
      analysisEn: 'Cat\'s explosive energy is perfectly released through trainer\'s systematic play. Will grow into a stress-free healthy cat!',
      missions: ['낚싯대 흔들기 20분', '숨바꼭질 놀이', '새로운 장난감 소개'],
      missionsEn: ['20 min wand toy', 'Hide and seek', 'Introduce new toy'],
      letterToOwner: '너랑 노는 게 제일 재밌어! 더 빨리 흔들어봐! 더 높이!',
      letterToOwnerEn: 'Playing with you is most fun! Shake it faster! Higher!',
      letterToPet: '너의 그 에너지가 나에게도 활력을 줘. 오늘도 신나게 놀자!',
      letterToPetEn: 'Your energy gives me vitality too. Let\'s play happily today!'
    }
  },
  'C-G_O-C': {
    petType: 'C-G',
    ownerType: 'O-C',
    emoji: '🎪',
    title: '서커스 하우스',
    titleEn: 'Circus House',
    subtitle: '"하고 싶은 거 다 해!" 도깨비(고양이)의 사고를 보호자가 사랑으로 수습하는 유쾌한 조합.',
    subtitleEn: '"Do whatever you want!" Pleasant combo where guardian handles gremlin (cat)\'s accidents with love.',
    description: '새벽 운동회도 귀여워! 혼돈도 사랑스러워! 도깨비가 뭘 해도 웃으며 사진 찍는 집사. 매일이 즐거운 축제 같은 일상!',
    descriptionEn: '3 AM zoomies are cute! Chaos is adorable! Parent smiles and takes photos of everything gremlin does. Daily life like a fun festival!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이가 사고를 쳐도 \'사랑\'으로 받아주는 보호자님 덕분에 고양이는 행복합니다. 하지만 위험한 물건은 미리 치워주세요!',
        contentEn: 'Cat is happy thanks to you accepting accidents with \'love\'. But remove dangerous items in advance!'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '깨질 물건은 모두 수납장으로! 고양이가 마음껏 뛰어놀 수 있는 \'안전한 놀이터\'를 만들어주세요.',
        contentEn: 'All breakables to cabinets! Create \'safe playground\' where cat can jump around freely.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '고양이의 호기심을 자극하는 \'자동 장난감\'이나 \'퍼즐 토이\'를 제공하면 보호자님이 잠시 쉴 수 있습니다.',
        contentEn: 'Providing \'automatic toys\' or \'puzzle toys\' stimulating cat\'s curiosity lets you rest briefly.'
      }
    ],
    detailReport: {
      analysis: '사고뭉치 고양이와 모든 걸 용서하는 집사. 매일이 시트콤 같지만, 웃음이 끊이지 않는 즐거운 집입니다.',
      analysisEn: 'Troublemaker cat and forgiving butler. Daily life like a sitcom, but a happy home full of laughter.',
      missions: ['고양이 엽기 사진 찍기', '어지러진 물건 정리하기(웃으면서)', '새로운 박스 선물하기'],
      missionsEn: ['Take funny cat photos', 'Tidy up mess (smiling)', 'Gift new box'],
      letterToOwner: '내가 화분 좀 깼어. 근데 나 귀엽지? 용서해줄 거지?',
      letterToOwnerEn: 'I broke a pot. But I\'m cute, right? You\'ll forgive me?',
      letterToPet: '네가 무슨 짓을 해도 귀여워. 다치지만 말아줘.',
      letterToPetEn: 'Whatever you do is cute. Just don\'t get hurt.'
    }
  },
  'C-G_O-L': {
    petType: 'C-G',
    ownerType: 'O-L',
    emoji: '🌙',
    title: '낮과 밤의 조화',
    titleEn: 'Day & Night Harmony',
    subtitle: '낮에는 보호자가 쉬고, 밤(새벽)에는 고양이가 뛴다! 서로의 활동 시간이 다른, 묘한 룸메이트.',
    subtitleEn: 'Guardian rests by day, cat runs by night (dawn)! Peculiar roommates with different activity times.',
    description: '서로 다른 생체리듬이지만 각자의 시간을 존중하며 잘 지내요. 낮엔 동반자가 평화롭게, 밤엔 도깨비가 활발하게!',
    descriptionEn: 'Different rhythms but respecting each other\'s time perfectly. Companion peaceful by day, gremlin active by night!',
    tips: [
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이의 \'우다다\'는 자연스러운 본능입니다. 보호자님의 \'숙면\'을 위해 귀마개를 준비하는 것도 방법입니다.',
        contentEn: 'Cat\'s \'zoomies\' are natural instinct. Preparing earplugs for your \'good sleep\' is also a way.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이가 보호자님을 \'가구\'처럼 생각할 수 있습니다. 하루 10분이라도 \'사냥놀이\'로 존재감을 어필해 주세요.',
        contentEn: 'Cat may think of you like \'furniture\'. Appeal your presence with 10 minutes of \'hunting play\' daily.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '보호자님이 주무시는 동안 고양이가 혼자 놀 수 있도록, \'스크래처\'와 \'숨숨집\'을 충분히 제공해 주세요.',
        contentEn: 'Provide plenty of \'scratchers\' and \'hiding spots\' so cat can play alone while you sleep.'
      }
    ],
    detailReport: {
      analysis: '낮과 밤, 서로 다른 시간을 살지만 묘하게 잘 맞는 룸메이트. 서로의 라이프스타일을 존중하는 쿨한 관계입니다.',
      analysisEn: 'Day and night, living different times but strangely fitting roommates. Cool relationship respecting each other\'s lifestyle.',
      missions: ['자기 전 10분 놀아주기', '자동 급식기 설정', '새벽 우다다 감상하기'],
      missionsEn: ['Play 10 min before bed', 'Set auto feeder', 'Watch dawn zoomies'],
      letterToOwner: '너 잘 때가 내가 활동할 시간이야. 내 운동회에 초대할게.',
      letterToOwnerEn: 'When you sleep is my active time. I invite you to my sports day.',
      letterToPet: '밤새 잘 놀았니? 나는 덕분에 잘 잤어(아마도).',
      letterToPetEn: 'Did you play well all night? I slept well thanks to you (maybe).'
    }
  },
  'C-G_O-P': {
    petType: 'C-G',
    ownerType: 'O-P',
    emoji: '🚨',
    title: '새벽 비상벨',
    titleEn: 'Dawn Emergency Alert',
    subtitle: '호기심 많은 도깨비가 사고 칠까 봐, 걱정 많은 보호자는 오늘도 잠 못 이루고 비상 대기 중!',
    subtitleEn: 'Worried guardian can\'t sleep today either, on emergency standby fearing curious gremlin\'s accidents!',
    description: '"새벽 3시에 뛰어다니면 관절이...!" 도깨비의 우다다 타임마다 걱정하는 부모님. 그래도 건강한 증거라며 안심해요.',
    descriptionEn: '"Running at 3 AM might hurt your joints...!" Parent worries at every zoomie time. But reassured it\'s a sign of health.',
    tips: [
      {
        icon: '🏠',
        category: '안전 팁',
        categoryEn: 'Safety Tips',
        content: '전선, 비닐봉지, 작은 액세서리. 고양이가 삼킬 수 있는 모든 물건은 즉시 치워주세요! 보호자님의 걱정이 현실이 될 수 있습니다!',
        contentEn: 'Wires, plastic bags, small accessories. Remove all swallowable items immediately! Your worries may become reality!'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '\'방묘창\'과 \'방묘문\'은 선택이 아닌 필수입니다. 호기심 때문에 창밖으로 나가는 사고를 막아야 합니다.',
        contentEn: '\'Cat-proof windows\' and \'cat-proof doors\' are essential, not optional. Prevent accidents of going out window from curiosity.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '낮 시간에 충분히 놀아주어 에너지를 소모시키면, 밤에 사고 칠 확률이 줄어듭니다.',
        contentEn: 'Playing sufficiently during day to drain energy reduces chance of nighttime accidents.'
      }
    ],
    detailReport: {
      analysis: '활발한 고양이를 보며 노심초사하는 집사님. 하지만 고양이는 집사님의 걱정 덕분에 안전하게 에너지를 발산하고 있어요.',
      analysisEn: 'Butler anxious watching active cat. But thanks to your worry, cat releases energy safely.',
      missions: ['관절 매트 깔아주기', '안전한 장난감으로 교체', '캣휠 설치 고려하기'],
      missionsEn: ['Install joint mats', 'Switch to safe toys', 'Consider cat wheel'],
      letterToOwner: '나 튼튼해! 걱정 마! 더 높이 뛸 수 있다고!',
      letterToOwnerEn: 'I\'m strong! Don\'t worry! I can jump higher!',
      letterToPet: '제발 천천히 좀 다녀. 심장이 떨어질 것 같아.',
      letterToPetEn: 'Please slow down. My heart is dropping.'
    }
  },
  'C-C_O-T': {
    petType: 'C-C',
    ownerType: 'O-T',
    emoji: '🎖️',
    title: '모범생 냥냥이',
    titleEn: 'Model Student Kitty',
    subtitle: '훈련도 애교로 소화! 열정적인 보호자에게 끝없는 보람과 성취감을 안겨줍니다.',
    subtitleEn: 'Handles training with charm! Gives passionate guardian endless reward and achievement.',
    description: '애교 전문가의 순종적인 성격과 훈련사의 체계가 만나 이상적인 관계를 만듭니다. 훈련도 잘 따르고 애교도 많은 완벽한 반려묘!',
    descriptionEn: 'Affection expert\'s obedient nature meets trainer\'s system ideally. Perfect companion following training well and full of charm!',
    tips: [
      {
        icon: '🎓',
        category: '훈련 팁',
        categoryEn: 'Training Tips',
        content: '\'앉아\', \'손\', \'하이파이브\' 등 간단한 훈련을 시도해 보세요. 애교 전문가 고양이는 보호자님을 기쁘게 하기 위해 기꺼이 배울 것입니다.',
        contentEn: 'Try simple training like \'sit\', \'paw\', \'high-five\'. Affection expert cat will gladly learn to please you.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '훈련의 기본은 \'긍정 강화\'입니다. 성공했을 때 아낌없는 칭찬과 스킨십을 해주세요.',
        contentEn: 'Training basics are \'positive reinforcement\'. Give generous praise and physical touch when successful.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '보호자님과 \'교감\'하는 놀이를 좋아합니다. \'숨바꼭질\'이나 \'가져와\' 놀이도 가능한 타입입니다.',
        contentEn: 'Loves play that \'bonds\' with you. Type capable of \'hide-and-seek\' or \'fetch\' play too.'
      }
    ],
    detailReport: {
      analysis: '모범생 고양이와 열정적인 훈련사님의 만남! 서로 합이 척척 맞는 최고의 파트너입니다.',
      analysisEn: 'Model student cat meets passionate trainer! Best partners with perfect chemistry.',
      missions: ['새로운 개인기 도전', '간식 보상 훈련', '함께 사진 찍기'],
      missionsEn: ['Challenge new trick', 'Treat reward training', 'Take photos together'],
      letterToOwner: '주인님이 가르쳐주는 건 다 재밌어요! 또 뭐 할까요?',
      letterToOwnerEn: 'Everything you teach is fun! What shall we do next?',
      letterToPet: '너처럼 똑똑하고 사랑스러운 고양이는 없을 거야. 나의 자랑.',
      letterToPetEn: 'There\'s no cat as smart and lovely as you. My pride.'
    }
  },
  'C-C_O-C': {
    petType: 'C-C',
    ownerType: 'O-C',
    emoji: '💞',
    title: '무한 애정 루프',
    titleEn: 'Infinite Affection Loop',
    subtitle: '사랑을 주는 보호자와 사랑을 받는 고양이, 서로에게서 헤어 나올 수 없는 완벽한 애정 조합.',
    subtitleEn: 'Guardian giving love and cat receiving love - perfect affection combo unable to part from each other.',
    description: '사랑이 넘쳐흐르는 최고의 조합! 골골송 + 꾹꾹이 + 안기기 = 행복 충전 100%. 서로를 향한 애정이 끝이 없어요!',
    descriptionEn: 'Best combination overflowing with love! Purring + kneading + cuddling = 100% happiness charged. Endless affection for each other!',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '더 이상 바랄 것이 없습니다! 지금처럼 서로 아낌없이 사랑하고 표현하며 행복하세요.',
        contentEn: 'Nothing more to wish for! Be happy loving and expressing generously to each other as you do now.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '\'분리불안\'이 생길 수 있습니다. 고양이가 보호자님을 너무 의존하지 않도록, 가끔은 \'혼자만의 시간\'을 갖게 해주세요.',
        contentEn: '\'Separation anxiety\' may develop. Let cat have \'alone time\' occasionally so not too dependent on you.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 \'골골송\'을 부를 때, 보호자님도 낮은 목소리로 답가(대화)를 해보세요. 놀라운 교감을 경험할 수 있습니다.',
        contentEn: 'When cat \'purrs\', respond with low voice (conversation). You can experience amazing bonding.'
      }
    ],
    detailReport: {
      analysis: '사랑이 넘치는 집사와 애교쟁이 고양이. 서로에게서 눈을 떼지 못하는 꿀 떨어지는 관계입니다.',
      analysisEn: 'Love-filled butler and charmer cat. Sweet relationship unable to take eyes off each other.',
      missions: ['하루 10분 안아주기', '사랑한다고 말하기', '골골송 녹음하기'],
      missionsEn: ['Hug 10 mins daily', 'Say I love you', 'Record purring'],
      letterToOwner: '주인님 품이 제일 따뜻해요. 평생 안아주세요.',
      letterToOwnerEn: 'Your arms are warmest. Hug me forever.',
      letterToPet: '너의 골골송은 나의 자장가야. 사랑해.',
      letterToPetEn: 'Your purr is my lullaby. I love you.'
    }
  },
  'C-C_O-L': {
    petType: 'C-C',
    ownerType: 'O-L',
    emoji: '☁️',
    title: '포근한 일상',
    titleEn: 'Cozy Daily Life',
    subtitle: '느긋한 보호자의 무릎은 골골송 장인(고양이)에게 세상에서 가장 완벽한 휴식처입니다.',
    subtitleEn: 'Laid-back guardian\'s lap is most perfect resting place in world for purring master (cat).',
    description: '애교쟁이 고양이가 무릎에 올라와 골골송을 부르면, 동반자는 그저 쓰다듬어주며 평화로운 시간을 보냅니다. 완벽한 힐링 타임!',
    descriptionEn: 'When charmer cat jumps on lap and purrs, companion simply strokes and enjoys peaceful time. Perfect healing time!',
    tips: [
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '보호자님이 소파에 앉아 책을 읽거나 TV를 볼 때, 고양이를 무릎에 앉히고 부드럽게 쓰다듬어 주세요. 이것이 최고의 힐링입니다.',
        contentEn: 'When you sit on sofa reading or watching TV, let cat on lap and stroke gently. This is best healing.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이가 애교를 부릴 때(무릎에 올라올 때)는, 하던 일을 잠시 멈추고 그 순간을 함께 즐겨주세요.',
        contentEn: 'When cat shows affection (jumps on lap), pause what you\'re doing and enjoy that moment together.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '보호자님의 \'최애\' 의자나 소파 옆에 고양이가 올라오기 편하도록 \'스툴\'이나 \'계단\'을 놓아주는 것도 좋습니다.',
        contentEn: 'Good to place \'stool\' or \'steps\' beside your favorite chair or sofa for easy cat access.'
      }
    ],
    detailReport: {
      analysis: '평화로운 일상을 공유하는 소울메이트. 함께 있는 것만으로도 힐링이 되는 따뜻한 관계입니다.',
      analysisEn: 'Soulmates sharing peaceful daily life. Warm relationship where just being together is healing.',
      missions: ['무릎냥이 타임 즐기기', '함께 창밖 구경하기', '조용한 음악 감상'],
      missionsEn: ['Enjoy lap cat time', 'Watch window together', 'Listen to quiet music'],
      letterToOwner: '주인님 무릎은 내 지정석이에요. 다른 고양이는 안 돼요!',
      letterToOwnerEn: 'Your lap is my reserved seat. No other cats allowed!',
      letterToPet: '네가 무릎에 올라오면 나는 움직일 수가 없어. 그래도 좋아.',
      letterToPetEn: 'I can\'t move when you\'re on my lap. But I like it.'
    }
  },
  'C-C_O-P': {
    petType: 'C-C',
    ownerType: 'O-P',
    emoji: '🩺',
    title: '건강 챙기미',
    titleEn: 'Health Caretaker',
    subtitle: '애교냥이는 눈에 넣어도 아프지 않을 소중한 보물! 보호자님의 꼼꼼한 케어가 애교냥이의 건강을 지킵니다.',
    subtitleEn: 'Charmer cat is precious treasure that wouldn\'t hurt even in your eye! Your meticulous care protects charmer\'s health.',
    description: '애교로 부모님의 걱정을 달래주는 착한 고양이. "우리 애기 오늘도 건강하네~" 서로를 돌보는 따뜻한 관계입니다!',
    descriptionEn: 'Sweet cat soothing parent\'s worries with charm. "My baby is healthy today too~" Warm relationship caring for each other!',
    tips: [
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '애교가 많은 고양이는 스킨십이 잦아 몸의 이상(멍울, 피부병)을 빨리 발견하기 좋습니다. 쓰다듬으면서 자주 체크해 주세요.',
        contentEn: 'Affectionate cats have frequent touch, good for quickly finding body abnormalities (lumps, skin issues). Check often while stroking.'
      },
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이는 보호자님의 걱정스러운 표정이나 목소리를 감지할 수 있습니다. 편안한 마음으로 사랑을 주세요.',
        contentEn: 'Cat can sense your worried expression or voice. Give love with comfortable mind.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '"혹시 분리불안은 아닐까?" "관심을 너무 요구하는데... 외로운가?" 걱정보다는 \'현재의 애정표현\'에 집중해 주세요!',
        contentEn: '"Is it separation anxiety?" "Seeking too much attention... lonely?" Focus on \'current affection expression\' rather than worries!'
      }
    ],
    detailReport: {
      analysis: '애교 많은 고양이를 보며 행복해하면서도, 혹시나 아플까 걱정하는 부모님. 사랑이 깊은 만큼 걱정도 깊어요.',
      analysisEn: 'Parent happy with affectionate cat but worried if sick. Worry is as deep as love.',
      missions: ['건강 일기 작성', '정기적인 스킨십 체크', '영양제 급여'],
      missionsEn: ['Write health diary', 'Regular touch check', 'Give supplements'],
      letterToOwner: '주인님, 걱정 마세요. 저는 건강하고 행복해요!',
      letterToOwnerEn: 'Don\'t worry. I\'m healthy and happy!',
      letterToPet: '너무 예뻐서 닳을까 봐 걱정돼. 아프지 말고 건강하자.',
      letterToPetEn: 'Worried you might wear out cause you\'re so pretty. Stay healthy.'
    }
  },
  'C-N_O-T': {
    petType: 'C-N',
    ownerType: 'O-T',
    emoji: '🎯',
    title: '인내의 훈련사',
    titleEn: 'Patient Trainer',
    subtitle: '닌자(고양이)의 시간을 존중하는 훈련사(보호자). 훈련이 아닌 \'인내\'와 \'기다림\'으로 천천히 신뢰를 쌓아갑니다.',
    subtitleEn: 'Trainer (guardian) respecting ninja (cat)\'s time. Slowly building trust with \'patience\' and \'waiting\', not training.',
    description: '닌자를 훈련시키기는 쉽지 않지만, 천천히 신뢰를 쌓아가는 훈련사의 끈기! 시간이 걸리지만 깊은 유대감을 형성해요.',
    descriptionEn: 'Training ninja isn\'t easy, but trainer\'s persistence builds trust slowly! Takes time but forms deep bonds.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '\'훈련\'을 시도하지 마세요! 대신, 매일 같은 시간에 \'간식\'을 주거나 \'조용한 목소리\'로 이름을 불러주는 것부터 시작하세요.',
        contentEn: 'Don\'t attempt \'training\'! Instead, start by giving \'treats\' same time daily or calling name with \'quiet voice\'.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 숨어있을 때 억지로 꺼내려 하지 마세요. 고양이 스스로 \'안전하다\'고 느낄 때까지 기다려주는 것이 최고의 훈련입니다.',
        contentEn: 'Don\'t force out when cat is hiding. Waiting until cat feels \'safe\' on own is best training.'
      },
      {
        icon: '🎾',
        category: '놀이 팁',
        categoryEn: 'Play Tips',
        content: '낚싯대 장난감을 \'멀리서\' 흔들어주며 고양이가 스스로 다가오도록 유도해 보세요.',
        contentEn: 'Wave wand toy \'from distance\' to encourage cat to approach on own.'
      }
    ],
    detailReport: {
      analysis: '조용한 닌자 고양이와 인내심 강한 훈련사님. 서두르지 않고 천천히 다가가는 모습이 아름답습니다.',
      analysisEn: 'Quiet ninja cat and patient trainer. Beautiful approach without rushing.',
      missions: ['멀리서 눈인사하기', '간식 던져주고 모른 척하기', '이름 부르고 기다리기'],
      missionsEn: ['Eye greet from afar', 'Toss treat and ignore', 'Call name and wait'],
      letterToOwner: '기다려줘서 고마워요. 언젠가는 내가 먼저 다갈게요.',
      letterToOwnerEn: 'Thanks for waiting. Someday I\'ll approach first.',
      letterToPet: '네가 마음을 열 때까지 언제까지나 기다릴게.',
      letterToPetEn: 'I\'ll wait forever until you open your heart.'
    }
  },
  'C-N_O-C': {
    petType: 'C-N',
    ownerType: 'O-C',
    emoji: '🔍',
    title: '숨바꼭질 전문가',
    titleEn: 'Hide & Seek Expert',
    subtitle: '숨어있는 고양이를 찾아내어, 멀리서나마 애정을 표현하는 보호자님의 끝없는 짝사랑!',
    subtitleEn: 'Guardian\'s endless one-sided love finding hidden cat and expressing affection from afar!',
    description: '"어디 갔어? 우리 애기~?" 매일 닌자를 찾아 헤매는 집사. 가끔 나타나주는 것만으로도 감동의 눈물을 흘려요.',
    descriptionEn: '"Where did you go? My baby~?" Parent searching for ninja daily. Even occasional appearances bring tears of joy.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '고양이가 숨어있는 장소를 발견했더라도, 모른 척해주는 \'배려\'가 필요합니다. 그곳은 고양이의 \'안전지대\'입니다.',
        contentEn: 'Even if you find cat\'s hiding spot, \'consideration\' to pretend not knowing is needed. That\'s cat\'s \'safe zone\'.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 숨어있는 곳 근처에 \'간식\'을 살짝 놓아두고 자리를 비켜주세요. "당신을 해치지 않아"라는 신호를 보내는 것입니다.',
        contentEn: 'Place \'treat\' near cat\'s hiding spot and step away. Sending signal "I won\'t harm you".'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '억지로 안거나 만지려 하면 닌자는 더 깊이 숨어버립니다. 보호자님의 애정 표현은 \'눈 깜빡이기\'로 대신해 주세요.',
        contentEn: 'Forcing hold or touch makes ninja hide deeper. Express your affection with \'slow blinks\' instead.'
      }
    ],
    detailReport: {
      analysis: '숨바꼭질의 달인과 술래의 만남. 얼굴 보기 힘들어도 사랑하는 마음은 통하고 있어요.',
      analysisEn: 'Hide-and-seek master meets tagger. Love connects even if hard to see face.',
      missions: ['숨은 고양이 찾기(눈으로만)', '숨숨집에 간식 배달', '조용히 사랑한다고 말하기'],
      missionsEn: ['Find hidden cat (eyes only)', 'Deliver treats to hiding spot', 'Whisper I love you'],
      letterToOwner: '나 여기 있어요. 마음으로 다 보고 있어요.',
      letterToOwnerEn: 'I\'m here. Watching everything with my heart.',
      letterToPet: '어디에 있든 너를 사랑해. 밥만 잘 먹어줘.',
      letterToPetEn: 'Love you wherever you are. Just eat well.'
    }
  },
  'C-N_O-L': {
    petType: 'C-N',
    ownerType: 'O-L',
    emoji: '🌫️',
    title: '은은한 동행',
    titleEn: 'Subtle Companionship',
    subtitle: '가끔 마주치지만, 서로가 그 공간에 존재한다는 것만으로 위안이 되는 조용한 룸메이트.',
    subtitleEn: 'Quiet roommates occasionally meeting, comforted just by each other\'s presence in same space.',
    description: '조용히 공존하는 독립적인 관계. 닌자는 혼자만의 시간을, 동반자는 여유로운 일상을 즐기며 서로를 존중해요.',
    descriptionEn: 'Quietly coexisting independent relationship. Ninja enjoys alone time, companion enjoys leisurely life, respecting each other.',
    tips: [
      {
        icon: '💝',
        category: '관계 팁',
        categoryEn: 'Relationship Tips',
        content: '이 조합은 서로에게 \'완벽한 거리\'를 제공합니다. 서로를 귀찮게 하지 않는 것이 최고의 배려입니다.',
        contentEn: 'This combo provides \'perfect distance\' to each other. Not bothering each other is best consideration.'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 용기를 내어 같은 공간에 나왔을 때, 모른 척 스마트폰을 보거나 다른 일을 해주세요. 고양이가 보호자님을 \'안전한 가구\'처럼 느끼게 해주는 것이 좋습니다.',
        contentEn: 'When cat gathers courage to enter same space, pretend not to notice and look at phone or do other things. Good to make cat feel you\'re \'safe furniture\'.'
      },
      {
        icon: '🏠',
        category: '환경 팁',
        categoryEn: 'Environment Tips',
        content: '닌자가 숨을 수 있는 \'숨숨집\'이나 \'박스\'를 집안 곳곳에 마련해 주세요.',
        contentEn: 'Prepare \'hiding houses\' or \'boxes\' throughout home for ninja to hide.'
      }
    ],
    detailReport: {
      analysis: '서로의 영역을 존중하는 쿨한 룸메이트. 각자의 시간을 즐기며 조용히 공존하는 평화로운 관계입니다.',
      analysisEn: 'Cool roommates respecting territories. Peaceful relationship enjoying own time and quietly coexisting.',
      missions: ['같은 공간에서 따로 놀기', '서로의 낮잠 존중하기', '가끔 눈 마주치면 깜빡이기'],
      missionsEn: ['Play separately in same room', 'Respect naps', 'Blink when eyes meet'],
      letterToOwner: '당신은 좋은 룸메이트예요. 조용해서 마음에 들어요.',
      letterToOwnerEn: 'You are a good roommate. I like that you\'re quiet.',
      letterToPet: '너의 고요함이 나에게 평화를 줘. 고마워.',
      letterToPetEn: 'Your silence gives me peace. Thank you.'
    }
  },
  'C-N_O-P': {
    petType: 'C-N',
    ownerType: 'O-P',
    emoji: '🏥',
    title: '병원 뺨치는 케어',
    titleEn: 'Hospital-Level Care',
    subtitle: '닌자(고양이)는 아픈 티를 절대 내지 않습니다. 보호자님의 \'걱정\'과 \'매의 눈\'만이 닌자의 건강을 지킬 수 있습니다!',
    subtitleEn: 'Ninja (cat) never shows illness. Only your \'worry\' and \'eagle eye\' can protect ninja\'s health!',
    description: '닌자(고양이)가 아프지 않도록, 걱정 부모님이 완벽한 건강관리를 제공합니다. 숨어 있어도 건강은 꼼꼼히 체크!',
    descriptionEn: 'To keep ninja healthy, worried parent provides perfect healthcare. Even when hiding, health is thoroughly checked!',
    tips: [
      {
        icon: '🩺',
        category: '건강 팁',
        categoryEn: 'Health Tips',
        content: '매일 \'화장실 감자/맛동산\'을 체크하는 것이 닌자의 건강 상태를 파악하는 가장 중요한 지표입니다!',
        contentEn: 'Daily \'litter box monitoring\' is most important indicator for understanding ninja\'s health status!'
      },
      {
        icon: '📅',
        category: '일상 팁',
        categoryEn: 'Daily Tips',
        content: '고양이가 숨어있더라도 \'밥 먹는 양\'과 \'물 마시는 양\'은 매일 꼼꼼하게 체크해야 합니다.',
        contentEn: 'Even when cat is hiding, \'food intake\' and \'water intake\' must be checked meticulously daily.'
      },
      {
        icon: '⚠️',
        category: '주의점',
        categoryEn: 'Caution',
        content: '건강검진을 위한 \'이동장 훈련\'이 필수입니다. 이동장을 \'숨숨집\'처럼 편안하게 느낄 수 있도록 평소에 열어두세요.',
        contentEn: '\'Carrier training\' for health checkups is essential. Keep carrier open normally so cat feels it\'s comfortable like \'hiding house\'.'
      }
    ],
    detailReport: {
      analysis: '아픈 티를 안 내는 고양이와 그걸 찾아내는 명탐정 보호자님. 닌자의 건강을 지키는 완벽한 수호자입니다.',
      analysisEn: 'Cat hiding illness and detective guardian finding it. Perfect guardian protecting ninja\'s health.',
      missions: ['매일 감자/맛동산 체크', '음수량 기록하기', '체중 변화 그래프 그리기'],
      missionsEn: ['Daily litter check', 'Record water intake', 'Graph weight changes'],
      letterToOwner: '귀찮게 좀 하지 마... 그래도 챙겨줘서 고마워.',
      letterToOwnerEn: 'Don\'t bother me... but thanks for caring.',
      letterToPet: '네가 건강한 게 나의 행복이야. 아프면 제발 티 좀 내줘.',
      letterToPetEn: 'Your health is my happiness. Please show if you\'re sick.'
    }
  }
};

// 궁합 결과 가져오기
export function getCompatibility(petType: PetType, ownerType: OwnerType): CompatibilityResult | undefined {
  const key = `${petType}_${ownerType}`;

  if (petType.startsWith('D-')) {
    return dogCompatibility[key];
  } else if (petType.startsWith('C-')) {
    return catCompatibility[key];
  }

  return undefined;
}
