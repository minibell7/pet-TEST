import type { QuizQuestion, DogType, CatType, OwnerType } from '@shared/schema';

// 강아지 퀴즈 10문항
export const dogQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "주방에서 '바스락' 봉지 뜯는 소리가 들렸을 때?",
    questionEn: "When they hear a 'crinkle' sound from the kitchen?",
    options: [
      { text: "자다가도 벌떡! 0.1초 만에 주방으로 순간이동한다.", textEn: "Teleports to the kitchen in 0.1 seconds.", type: 'D-F' as DogType },
      { text: "귀만 쫑긋거리고, 진짜 맛있는 냄새가 날 때까지 기다린다.", textEn: "Just perks ears, waits for the real smell.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 2,
    question: "현관문 도어락 소리(또는 차고 문 소리)가 들릴 때?",
    questionEn: "When they hear the garage door open?",
    options: [
      { text: "꼬리로 헬리콥터 이륙 준비! 현관 앞에서 탭댄스를 춘다.", textEn: "Helicopter tail ready for takeoff! Tap dancing at the door.", type: 'D-S' as DogType },
      { text: "누가 왔나? 짖으면서 경계 태세로 문 앞을 지킨다.", textEn: "Barking to guard the door until identified.", type: 'D-E' as DogType }
    ]
  },
  {
    id: 3,
    question: "산책 중, 저 멀리 다른 강아지가 보일 때?",
    questionEn: "Spotting another dog during a walk?",
    options: [
      { text: "\"친구다!!!\" 꼬리를 흔들며 인사하고 싶어서 난리 난다.", textEn: "\"New Friend!!!\" Pulls leash to go say hi.", type: 'D-S' as DogType },
      { text: "내 갈 길 간다. 쿨하게 무시하고 전봇대 냄새에 집중한다.", textEn: "Ignores them. Focuses on sniffing the hydrant.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 4,
    question: "새 장난감(삑삑이)을 선물 받았을 때?",
    questionEn: "Getting a new squeaky toy?",
    options: [
      { text: "5분 안에 삑삑이 사망. 솜이 터져 나올 때까지 흔든다.", textEn: "Squeaker dead in 5 mins. Destroys it completely.", type: 'D-E' as DogType },
      { text: "소중하게 물고 자기 집으로 가져가서 보물처럼 지킨다.", textEn: "Gently takes it to their bed and guards it.", type: 'D-F' as DogType }
    ]
  },
  {
    id: 5,
    question: "주인이 슬픈 표정으로 한숨을 쉴 때?",
    questionEn: "When you sigh with a sad face?",
    options: [
      { text: "조용히 다가와서 내 손이나 얼굴을 핥아준다.", textEn: "Quietly comes and licks your hand or face.", type: 'D-S' as DogType },
      { text: "\"산책 가면 기분 풀릴걸?\" 목줄을 물어온다.", textEn: "Brings the leash. \"Walkies will fix it!\"", type: 'D-E' as DogType }
    ]
  },
  {
    id: 6,
    question: "넓은 잔디밭(또는 공원)에 풀어줬을 때?",
    questionEn: "Unleashed in a big dog park?",
    options: [
      { text: "우다다다! 보이지 않을 정도로 미친 듯이 뛰어다닌다.", textEn: "Zoomies! Runs around like a crazy rocket.", type: 'D-E' as DogType },
      { text: "주인 다리 사이나 벤치 근처에서 맴돈다.", textEn: "Stays close to your legs or the bench.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 7,
    question: "실수로 바닥에 맛있는 고기 한 점을 떨어뜨렸을 때!",
    questionEn: "You accidentally drop a piece of bacon!",
    options: [
      { text: "바닥에 닿기도 전에 공중에서 낚아채 삼킨다. (진공청소기)", textEn: "Snaps it out of the air before it hits the floor.", type: 'D-F' as DogType },
      { text: "\"먹어도 돼?\" 하는 눈빛으로 주인을 쳐다본다.", textEn: "Looks at you asking \"Can I eat this?\"", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 8,
    question: "낯선 사람(택배 기사님/우편 배달부)이 왔을 때?",
    questionEn: "When the mailman/delivery person comes?",
    options: [
      { text: "우리 집을 지켜야 해! 용맹하게 짖어서 쫓아낸다.", textEn: "Must protect the house! Barks bravely.", type: 'D-E' as DogType },
      { text: "누구세요? 꼬리 흔들며 반갑다고 마중 나간다.", textEn: "Who's that? Wags tail and welcomes them.", type: 'D-S' as DogType }
    ]
  },
  {
    id: 9,
    question: "밥그릇에 사료가 가득 차 있을 때?",
    questionEn: "When the food bowl is full?",
    options: [
      { text: "숨도 안 쉬고 흡입한다. 설거지까지 완벽하게.", textEn: "Inhales it without breathing. Licks bowl clean.", type: 'D-F' as DogType },
      { text: "한두 알 물고 가서 뱉어놓고, 나중에 심심하면 먹는다.", textEn: "Takes one bite, spits it out, eats later.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 10,
    question: "주인이 화장실에 들어갔을 때?",
    questionEn: "When you go to the bathroom?",
    options: [
      { text: "문 긁고 낑낑거린다. \"나만 두고 어디 갔어!\"", textEn: "Scratches door. \"Don't leave me alone!\"", type: 'D-S' as DogType },
      { text: "문 앞에서 엎드려 기다리거나, 자기 할 일 하러 간다.", textEn: "Lays by the door or goes to do their own thing.", type: 'D-Z' as DogType }
    ]
  }
];

// 고양이 퀴즈 10문항
export const catQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "새벽 3시, 온 집안이 고요할 때...",
    questionEn: "3 AM, when the house is silent...",
    options: [
      { text: "우다다 타임! 보이지 않는 적과 싸우며 뛰어다닌다.", textEn: "Zoomies! Fighting invisible demons everywhere.", type: 'C-G' as CatType },
      { text: "집사 배 위나 다리 사이에서 꿀잠 자고 있다.", textEn: "Sleeping peacefully on your stomach.", type: 'C-C' as CatType }
    ]
  },
  {
    id: 2,
    question: "비싼 캣타워 vs. 방금 온 택배 박스",
    questionEn: "Expensive Cat Tower vs. Cardboard Box",
    options: [
      { text: "박스 최고! 좁아터져도 일단 몸을 구겨 넣는다.", textEn: "Box is life! Squeezes in no matter how small.", type: 'C-G' as CatType },
      { text: "캣타워 꼭대기에서 집사를 내려다보며 군림한다.", textEn: "Judges you from the top of the tower.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 3,
    question: "집사가 컴퓨터(노트북) 작업을 시작하면?",
    questionEn: "When you start working on your laptop?",
    options: [
      { text: "키보드 위에 눕거나 모니터 앞을 가로막는다. \"나만 봐.\"", textEn: "Sits on keyboard. \"Pay attention to me.\"", type: 'C-C' as CatType },
      { text: "책상 구석이나 의자 뒤에서 조용히 지켜본다.", textEn: "Watches quietly from the corner.", type: 'C-N' as CatType }
    ]
  },
  {
    id: 4,
    question: "창밖으로 새나 벌레가 지나갈 때?",
    questionEn: "Seeing a bird or bug outside the window?",
    options: [
      { text: "\"깍깍!\" 채터링을 하며 사냥 본능을 불태운다.", textEn: "\"Ek ek ek!\" Chatters with hunting instinct.", type: 'C-G' as CatType },
      { text: "귀찮다는 듯 눈만 끔뻑이고 다시 잔다.", textEn: "Blinks once and goes back to sleep.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 5,
    question: "낯선 손님이 집에 들어왔을 때?",
    questionEn: "When a stranger enters the house?",
    options: [
      { text: "침대 밑, 옷장 위 등 블랙홀로 사라진다. (못 찾음)", textEn: "Vanishes into the void (Under bed/closet).", type: 'C-N' as CatType },
      { text: "누구냐? 냄새 맡으며 다리 사이로 쓱 지나간다.", textEn: "Sniffs them and rubs against their legs.", type: 'C-C' as CatType }
    ]
  },
  {
    id: 6,
    question: "집사가 화장실 청소를 하거나 물건을 옮길 때?",
    questionEn: "When you clean or move furniture?",
    options: [
      { text: "졸졸 따라다니며 참견하고 방해한다.", textEn: "Follows you everywhere and interferes.", type: 'C-G' as CatType },
      { text: "높은 곳에서 \"잘하고 있군\" 감시만 한다.", textEn: "Supervises from a high spot.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 7,
    question: "츄르(간식) 봉지를 꺼내 들었을 때?",
    questionEn: "When you grab the Churu/Treat bag?",
    options: [
      { text: "야옹! 야옹! 빨리 내놔라! (목소리가 3옥타브 올라감)", textEn: "Meow! Meow! Give it now! (Voice gets high)", type: 'C-C' as CatType },
      { text: "천천히 다가와서 우아하게 앉아 기다린다.", textEn: "Approaches slowly and sits elegantly.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 8,
    question: "집사가 이름을 불렀을 때?",
    questionEn: "When you call their name?",
    options: [
      { text: "꼬리를 세우고 \"야옹~\" 대답하며 달려온다. (개냥이)", textEn: "Runs to you meowing with tail up.", type: 'C-C' as CatType },
      { text: "귀만 씰룩. \"들리지만 가고 싶진 않아.\"", textEn: "Ear twitch. \"I hear you, but no.\"", type: 'C-N' as CatType }
    ]
  },
  {
    id: 9,
    question: "집사가 낚싯대 장난감을 흔들 때?",
    questionEn: "Waving the wand toy?",
    options: [
      { text: "공중제비 돌고 난리 난다. 숨이 찰 때까지 사냥!", textEn: "Backflips and jumps! Hunts until panting.", type: 'C-G' as CatType },
      { text: "누워서 앞발로만 툭... 툭... (귀찮음)", textEn: "Lays down and taps with one paw... (Lazy)", type: 'C-R' as CatType }
    ]
  },
  {
    id: 10,
    question: "가만히 있는데 갑자기 눈이 마주쳤을 때?",
    questionEn: "Making eye contact out of nowhere?",
    options: [
      { text: "눈을 천천히 깜빡여준다. (눈키스)", textEn: "Slow blinks at you. (Cat kiss)", type: 'C-C' as CatType },
      { text: "뭘 봐? 고개를 홱 돌려버린다.", textEn: "What? Looks away immediately.", type: 'C-N' as CatType }
    ]
  }
];

// 주인 퀴즈 10문항
export const ownerQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "반려동물이 실수로 내 에어팟을 씹어놨을 때...",
    questionEn: "Pet chewed up your AirPods...",
    options: [
      { text: "하... 귀여우니까 봐준다. (사진 찍어서 SNS에 올림)", textEn: "Sigh... Too cute to be mad. (Posts on SNS)", type: 'O-C' as OwnerType },
      { text: "단호하게 \"안 돼!\" 훈육하고 터그 놀이로 스트레스를 풀어준다.", textEn: "Firm \"No!\" and redirects to toy play.", type: 'O-T' as OwnerType }
    ]
  },
  {
    id: 2,
    question: "반려동물 사료를 고를 때 나는?",
    questionEn: "Choosing pet food?",
    options: [
      { text: "그레인프리? 휴먼그레이드? 성분표를 10분 이상 정독한다.", textEn: "Grain-free? Human-grade? Reads label for 10 mins.", type: 'O-P' as OwnerType },
      { text: "기호성 테스트! 일단 샘플 먹여보고 잘 먹는 걸로 산다.", textEn: "Taste test! Buys whatever they eat best.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 3,
    question: "주말 아침, 눈을 떴는데 반려동물이 나를 보고 있을 때?",
    questionEn: "Waking up to your pet staring at you?",
    options: [
      { text: "일단 끌어안고 10분 더 뒹굴거린다. \"더 자자~\"", textEn: "Cuddle and snooze for 10 more mins.", type: 'O-C' as OwnerType },
      { text: "바로 일어나서 산책 준비 or 아침 밥을 챙겨준다.", textEn: "Get up immediately for walk or breakfast.", type: 'O-T' as OwnerType }
    ]
  },
  {
    id: 4,
    question: "반려동물이 재채기를 '에취!' 했을 때?",
    questionEn: "Your pet sneezes once?",
    options: [
      { text: "\"감기인가? 병원 가야 하나?\" 검색창을 켠다.", textEn: "\"Is it a cold? Vet?\" Starts Googling.", type: 'O-P' as OwnerType },
      { text: "\"아이구 시원해?\" 하고 엉덩이를 두드려준다.", textEn: "\"Bless you!\" and pats them.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 5,
    question: "내가 치킨(또는 피자)을 먹는데 애절하게 쳐다볼 때?",
    questionEn: "Begging while you eat chicken/pizza?",
    options: [
      { text: "절대 안 됨. 사람 음식은 건강에 해로움.", textEn: "Absolutely not. Human food is bad.", type: 'O-T' as OwnerType },
      { text: "살코기 부분만 물에 씻어서 아주 조...금 준다.", textEn: "Washes a tiny piece of meat and gives it.", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 6,
    question: "반려동물 용품 쇼핑 중, 내 장바구니에는?",
    questionEn: "Shopping for pet supplies, your cart has?",
    options: [
      { text: "관절 영양제, 유산균, 치석 제거 껌...", textEn: "Joint supplements, probiotics, dental chews...", type: 'O-P' as OwnerType },
      { text: "신상 장난감, 귀여운 옷, 예쁜 목줄...", textEn: "New toys, cute outfits, pretty leash...", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 7,
    question: "산책 중 다른 강아지가 으르렁거릴 때?",
    questionEn: "Another dog growls during walk?",
    options: [
      { text: "내 새끼 지켜! 바로 안아 올리거나 길을 건넌다.", textEn: "Protect my baby! Pick up or cross street.", type: 'O-P' as OwnerType },
      { text: "차분하게 \"괜찮아\" 하고 무시하며 지나간다.", textEn: "Calmly say \"It's okay\" and walk past.", type: 'O-T' as OwnerType }
    ]
  },
  {
    id: 8,
    question: "반려동물과 함께하는 삶에서 가장 중요한 것은?",
    questionEn: "Most important thing in pet life?",
    options: [
      { text: "규칙적인 생활과 올바른 예절 교육.", textEn: "Routine and proper training.", type: 'O-T' as OwnerType },
      { text: "스트레스 없이 서로 편안하고 행복한 것.", textEn: "Stress-free, comfortable happiness.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 9,
    question: "핸드폰 갤러리를 열었을 때?",
    questionEn: "Opening your phone gallery?",
    options: [
      { text: "비슷해 보이지만 다 다른 우리 애기 사진 5,000장.", textEn: "5,000 photos of my pet (all look same but different).", type: 'O-C' as OwnerType },
      { text: "반려동물 사진 반, 내 일상 사진 반.", textEn: "Half pet photos, half my life.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 10,
    question: "반려동물을 보며 자주 하는 생각은?",
    questionEn: "What you think often looking at your pet?",
    options: [
      { text: "\"아프지 말고 오래오래만 살아줘.\"", textEn: "\"Just stay healthy and live forever.\"", type: 'O-P' as OwnerType },
      { text: "\"너 때문에 내가 웃는다. 고마워.\"", textEn: "\"You make me smile. Thank you.\"", type: 'O-C' as OwnerType }
    ]
  }
];
