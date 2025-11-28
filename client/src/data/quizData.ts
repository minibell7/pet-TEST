import type { QuizQuestion, DogType, CatType, OwnerType } from '@shared/schema';

// 강아지 퀴즈 10문항
export const dogQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "'[이름]'이가 \"산책!\"이라는 단어를 들었을 때?",
    questionEn: "When [name] hears the word \"walk\"?",
    options: [
      { text: "미친 듯이 점프하며 현관으로 달려간다.", textEn: "Goes absolutely crazy, jumping and running to the door.", type: 'D-E' as DogType },
      { text: "소파에서 꼬리만 살랑 흔든다.", textEn: "Just wags tail gently from the couch.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 2,
    question: "'[이름]'이를 움직이는 최고의 보상은?",
    questionEn: "The best reward to motivate [name]?",
    options: [
      { text: "\"까까\" 소리.", textEn: "The sound of treats.", type: 'D-F' as DogType },
      { text: "폭풍 칭찬과 스킨십.", textEn: "Tons of praise and cuddles.", type: 'D-S' as DogType }
    ]
  },
  {
    id: 3,
    question: "집에 새로운 손님이 방문했을 때?",
    questionEn: "When a new guest visits your home?",
    options: [
      { text: "좋아서 어쩔 줄 모르며 달려들어 핥는다.", textEn: "Rushes over excitedly and starts licking them.", type: 'D-S' as DogType },
      { text: "자기 구역에서 조용히 손님을 관찰한다.", textEn: "Quietly observes the guest from their own spot.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 4,
    question: "'[이름]'이의 놀이 스타일은?",
    questionEn: "[name]'s play style?",
    options: [
      { text: "공, 원반 등 온몸으로 뛰어다니는 놀이.", textEn: "Active games like fetch and frisbee.", type: 'D-E' as DogType },
      { text: "간식이 숨겨진 노즈워크 퍼즐 놀이.", textEn: "Nose work and puzzle games with hidden treats.", type: 'D-F' as DogType }
    ]
  },
  {
    id: 5,
    question: "주인이 집에 돌아왔을 때?",
    questionEn: "When you come home?",
    options: [
      { text: "온몸으로 반가움을 표현하는 환영 파티를 연다.", textEn: "Throws a full-body welcome party.", type: 'D-S' as DogType },
      { text: "꼬리를 흔들며 다가와 냄새를 맡는다.", textEn: "Approaches wagging tail and sniffing.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 6,
    question: "산책 중 '[이름]'이는 주로...",
    questionEn: "During walks, [name] usually...",
    options: [
      { text: "구석구석 모든 냄새를 맡느라 정신이 없다.", textEn: "Is busy sniffing every corner.", type: 'D-E' as DogType },
      { text: "혹시 바닥에 떨어진 음식이 없나 살핀다.", textEn: "Looks for any dropped food on the ground.", type: 'D-F' as DogType }
    ]
  },
  {
    id: 7,
    question: "새 장난감을 사주었을 때 반응은?",
    questionEn: "When you buy a new toy?",
    options: [
      { text: "일단 물고 뜯고 흔들며 격하게 탐색한다.", textEn: "Immediately bites, tears, and shakes it intensely.", type: 'D-E' as DogType },
      { text: "낯설어하며, 조심스럽게 냄새부터 맡는다.", textEn: "Feels cautious and carefully sniffs it first.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 8,
    question: "'[이름]'이의 최고의 개인기는?",
    questionEn: "[name]'s best talent?",
    options: [
      { text: "간식을 얻어내기 위한 아련한 눈빛 발사.", textEn: "Giving puppy eyes to get treats.", type: 'D-F' as DogType },
      { text: "처음 보는 사람(이나 강아지)과도 금방 친해지기.", textEn: "Making friends instantly with anyone.", type: 'D-S' as DogType }
    ]
  },
  {
    id: 9,
    question: "밥 먹는 시간!",
    questionEn: "Meal time!",
    options: [
      { text: "10초 만에 그릇 바닥까지 핥아 먹는다.", textEn: "Finishes the bowl in 10 seconds.", type: 'D-F' as DogType },
      { text: "주변을 한번 쓱 둘러보고 천천히 먹는다.", textEn: "Looks around first, then eats slowly.", type: 'D-Z' as DogType }
    ]
  },
  {
    id: 10,
    question: "'[이름]'이가 집에서 가장 좋아하는 장소는?",
    questionEn: "[name]'s favorite spot at home?",
    options: [
      { text: "주인 무릎 위, 또는 주인이 가장 잘 보이는 곳.", textEn: "On your lap, or where they can see you best.", type: 'D-S' as DogType },
      { text: "창밖이나 현관문 쪽이 잘 보이는 창가/현관.", textEn: "By the window or door to watch outside.", type: 'D-E' as DogType }
    ]
  }
];

// 고양이 퀴즈 10문항
export const catQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "'[이름]'이에게 사냥놀이(깃털 장난감)를 흔들어주면?",
    questionEn: "When you wave a feather toy for [name]?",
    options: [
      { text: "눈빛이 변하며 즉시 달려들어 사냥을 시작한다.", textEn: "Eyes change and immediately pounces into hunt mode.", type: 'C-G' as CatType },
      { text: "꼬리만 까딱... 까딱... 하다가 가끔 솜방망이질을 한다.", textEn: "Just flicks tail... and occasionally gives gentle paws.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 2,
    question: "집사가 집에 돌아왔을 때 '[이름]'이는?",
    questionEn: "When you come home, [name]...",
    options: [
      { text: "현관문 앞에서 기다렸다는 듯이 다리에 몸을 비빈다.", textEn: "Waits at the door and rubs against your legs.", type: 'C-C' as CatType },
      { text: "캣타워 제일 높은 곳에서 나를 내려다본다.", textEn: "Looks down at you from the top of the cat tower.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 3,
    question: "비싼 새 침대 vs. 방금 온 택배 박스",
    questionEn: "Expensive new bed vs. Delivery box",
    options: [
      { text: "당연히 박스! 일단 들어가고 본다.", textEn: "Obviously the box! Gets in immediately.", type: 'C-G' as CatType },
      { text: "푹신한 새 침대를 꾹꾹이로 테스트해 본다.", textEn: "Tests the soft new bed with kneading.", type: 'C-C' as CatType }
    ]
  },
  {
    id: 4,
    question: "'[이름]'이와 눈이 마주쳤을 때?",
    questionEn: "When you make eye contact with [name]?",
    options: [
      { text: "눈을 천천히 깜빡여준다.", textEn: "Slowly blinks back at you.", type: 'C-R' as CatType },
      { text: "시선을 피하거나 다른 곳으로 숨어버린다.", textEn: "Looks away or hides somewhere else.", type: 'C-N' as CatType }
    ]
  },
  {
    id: 5,
    question: "새벽 3시, '[이름]'이는 주로 무엇을 하나요?",
    questionEn: "At 3 AM, [name] usually...",
    options: [
      { text: "집안을 미친 듯이 뛰어다닌다. (우다다 타임)", textEn: "Runs around the house like crazy. (Zoomies time)", type: 'C-G' as CatType },
      { text: "집사 팔베개를 하고 같이 자고 있다.", textEn: "Sleeps on your arm as a pillow.", type: 'C-C' as CatType }
    ]
  },
  {
    id: 6,
    question: "'[이름]'이가 가장 좋아하는 것은?",
    questionEn: "[name]'s favorite thing?",
    options: [
      { text: "츄르! (이성을 잃는다)", textEn: "Churu treats! (Loses all self-control)", type: 'C-G' as CatType },
      { text: "집사의 무릎 (골골송은 기본 옵션)", textEn: "Your lap (purring included)", type: 'C-C' as CatType }
    ]
  },
  {
    id: 7,
    question: "낯선 손님이 집에 방문했을 때?",
    questionEn: "When a stranger visits?",
    options: [
      { text: "침대 밑이나 옷장 속에 완벽하게 숨는다.", textEn: "Hides perfectly under the bed or in the closet.", type: 'C-N' as CatType },
      { text: "호기심을 보이며, 적당한 거리에서 손님을 관찰한다.", textEn: "Shows curiosity and observes from a safe distance.", type: 'C-R' as CatType }
    ]
  },
  {
    id: 8,
    question: "'[이름]'이의 최고의 개인기는?",
    questionEn: "[name]'s best talent?",
    options: [
      { text: "집사가 부르면 어디서든 대답하며 달려오기.", textEn: "Responding and running to you when called.", type: 'C-C' as CatType },
      { text: "분명 집에 있는데, 아무도 날 찾을 수 없게 숨기.", textEn: "Hiding so well that no one can find them.", type: 'C-N' as CatType }
    ]
  },
  {
    id: 9,
    question: "집사가 무언가에 집중하고 있을 때?",
    questionEn: "When you're focused on something?",
    options: [
      { text: "키보드 위로 올라오거나 책을 덮어버린다. (관심 요구)", textEn: "Sits on your keyboard or closes your book. (Demands attention)", type: 'C-R' as CatType },
      { text: "방해되지 않게 멀리서 지켜보거나, 그냥 잔다.", textEn: "Watches from afar or just sleeps.", type: 'C-N' as CatType }
    ]
  },
  {
    id: 10,
    question: "갑자기 작은 벌레가 나타났을 때?",
    questionEn: "When a small bug suddenly appears?",
    options: [
      { text: "동공이 확장되며 격렬한 사냥 모드로 돌입한다.", textEn: "Pupils dilate and enters intense hunt mode.", type: 'C-G' as CatType },
      { text: "오히려 벌레를 무서워하며 뒷걸음질 친다.", textEn: "Actually gets scared and backs away.", type: 'C-N' as CatType }
    ]
  }
];

// 주인 퀴즈 10문항
export const ownerQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "반려동물이 귀엽지만 '잘못된' 행동을 했을 때?",
    questionEn: "When your pet does something 'wrong' but adorable?",
    options: [
      { text: "즉시 \"안 돼\"라고 말하며 올바른 행동을 가르친다.", textEn: "Immediately say 'No' and teach the right behavior.", type: 'O-T' as OwnerType },
      { text: "일단 귀여워서 사진부터 찍고 나중에 생각한다.", textEn: "Take a photo first because it's too cute.", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 2,
    question: "반려동물 사료나 간식을 고르는 기준은?",
    questionEn: "How do you choose pet food or treats?",
    options: [
      { text: "성분표와 영양 성분을 10분 이상 꼼꼼히 분석한다.", textEn: "Analyze ingredients and nutrition for 10+ minutes.", type: 'O-P' as OwnerType },
      { text: "기호성 테스트! 일단 뭐든 잘 먹는 게 최고다.", textEn: "Taste test! Whatever they enjoy eating is best.", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 3,
    question: "주말 아침, 당신의 이상적인 모습은?",
    questionEn: "Your ideal weekend morning?",
    options: [
      { text: "반려동물과 함께 공원 산책이나 격렬한 놀이 활동하기.", textEn: "Walking in the park or active playtime with your pet.", type: 'O-T' as OwnerType },
      { text: "반려동물을 껴안고 침대에서 함께 늦잠 자기.", textEn: "Sleeping in with your pet cuddled up.", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 4,
    question: "반려동물이 갑자기 재채기를 한 번 했을 때?",
    questionEn: "When your pet sneezes once?",
    options: [
      { text: "즉시 스마트폰으로 \"강아지/고양이 재채기 원인\"을 검색한다.", textEn: "Immediately search 'why does my pet sneeze'.", type: 'O-P' as OwnerType },
      { text: "\"감기 걸렸어?\"하고 웃어넘기거나 별생각 없이 지나간다.", textEn: "Just laugh it off or don't think much of it.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 5,
    question: "반려동물이 내 밥을 빤히 쳐다볼 때?",
    questionEn: "When your pet stares at your food?",
    options: [
      { text: "(사람 음식은 안 좋으니까) 차분히 무시하거나 반려동물 간식을 준다.", textEn: "Calmly ignore or give pet treats instead.", type: 'O-T' as OwnerType },
      { text: "(안전한 거라면) 아주 작은 조각을 몰래 떼어준다.", textEn: "Sneak them a tiny piece if it's safe.", type: 'O-C' as OwnerType }
    ]
  },
  {
    id: 6,
    question: "반려동물을 위해 주로 구매하는 것은?",
    questionEn: "What do you usually buy for your pet?",
    options: [
      { text: "두뇌 활동에 좋은 새로운 노즈워크 장난감이나 퍼즐.", textEn: "Brain-stimulating toys or puzzles.", type: 'O-T' as OwnerType },
      { text: "관절, 피부, 눈 건강 등을 위한 각종 영양제.", textEn: "Supplements for joints, skin, eyes, etc.", type: 'O-P' as OwnerType }
    ]
  },
  {
    id: 7,
    question: "반려동물과 함께하는 가장 행복한 순간은?",
    questionEn: "Happiest moment with your pet?",
    options: [
      { text: "특별한 것 없이, 그냥 조용히 같은 공간에 함께 있을 때.", textEn: "Just quietly being in the same space together.", type: 'O-L' as OwnerType },
      { text: "반려동물과 새로운 기술이나 훈련에 성공했을 때.", textEn: "When successfully teaching a new trick or training.", type: 'O-T' as OwnerType }
    ]
  },
  {
    id: 8,
    question: "산책/외출 시 다른 반려동물을 만났을 때?",
    questionEn: "When meeting other pets outside?",
    options: [
      { text: "'혹시 싸우진 않을까' 걱정하며 안전거리부터 확보한다.", textEn: "Worry about fights and keep a safe distance first.", type: 'O-P' as OwnerType },
      { text: "\"친구 만났네!\" 사회성을 기를 좋은 기회라고 생각한다.", textEn: "Think 'New friend!' - a good socialization opportunity.", type: 'O-T' as OwnerType }
    ]
  },
  {
    id: 9,
    question: "내 스마트폰 카메라 앨범의 90%는?",
    questionEn: "90% of your phone's photo gallery?",
    options: [
      { text: "당연히 우리 애기 자는 모습, 노는 모습, 귀여운 모습.", textEn: "Obviously my baby sleeping, playing, being cute.", type: 'O-C' as OwnerType },
      { text: "반려동물 사진도 있지만, 내 셀카나 풍경 사진도 많다.", textEn: "Pet photos, but also selfies and scenery.", type: 'O-L' as OwnerType }
    ]
  },
  {
    id: 10,
    question: "반려동물과 함께 있을 때 나의 주된 감정은?",
    questionEn: "Your main feeling when with your pet?",
    options: [
      { text: "'더 필요한 건 없나', '어디 아픈 덴 없나' 항상 염려된다.", textEn: "Always worried if they need anything or are sick.", type: 'O-P' as OwnerType },
      { text: "그냥 보고만 있어도 마음이 편안하고 안정된다.", textEn: "Just peaceful and comforted by their presence.", type: 'O-L' as OwnerType }
    ]
  }
];
