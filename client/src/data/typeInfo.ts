import type { TypeInfo, PetType, OwnerType } from '@shared/schema';

// 강아지 타입 정보 (4가지)
export const dogTypes: Record<string, TypeInfo> = {
  'D-E': {
    id: 'D-E',
    name: '활발한 탐험가',
    nameEn: 'Active Explorer',
    emoji: '🐕',
    description: '세상은 넓고 탐험할 곳은 너무 많아!',
    descriptionEn: 'The world is wide and there\'s so much to explore!',
    traits: [
      '에너지 넘치는 호기심 덩어리',
      '산책은 모험! 모든 냄새를 다 맡아야 해',
      '새로운 것에 대한 끝없는 열정',
      '조금 피곤할 수 있지만, 함께 있으면 세상이 즐거워요'
    ],
    traitsEn: [
      'Bundle of energetic curiosity',
      'Walks are adventures! Must sniff everything',
      'Endless passion for new things',
      'Might be tiring, but makes the world so much fun'
    ],
    stats: { energy: 10, affection: 8, independence: 6, curiosity: 10, calmness: 2 }
  },
  'D-F': {
    id: 'D-F',
    name: '충직한 미식가',
    nameEn: 'Loyal Foodie',
    emoji: '🍖',
    description: '주인님, 혹시 지금... 뭐 맛있는 거 드세요?',
    descriptionEn: 'Are you... eating something delicious right now?',
    traits: [
      '먹는 것이 삶의 낙! 간식은 최고의 보상',
      '아련한 눈빛 발사로 간식 획득률 99%',
      '음식이 있는 곳엔 항상 출동',
      '충직하고 주인을 진심으로 사랑해요'
    ],
    traitsEn: [
      'Food is life! Treats are the best reward',
      '99% success rate with puppy eyes',
      'Always appears where food is',
      'Loyal and genuinely loves their owner'
    ],
    stats: { energy: 6, affection: 9, independence: 4, curiosity: 8, calmness: 5 }
  },
  'D-Z': {
    id: 'D-Z',
    name: '느긋한 현자',
    nameEn: 'Chill Philosopher',
    emoji: '😌',
    description: '굳이...? 그렇게까지...? 난 그냥 여기서 쉴게.',
    descriptionEn: 'Do we have to...? I\'ll just rest here.',
    traits: [
      '여유롭고 침착한 성격',
      '필요 이상으로 에너지를 쓰지 않아요',
      '조용하게 관찰하는 것을 좋아함',
      '평화로운 일상을 사랑하는 반려견'
    ],
    traitsEn: [
      'Relaxed and calm personality',
      'Doesn\'t waste unnecessary energy',
      'Enjoys quietly observing',
      'Loves peaceful daily life'
    ],
    stats: { energy: 2, affection: 6, independence: 8, curiosity: 4, calmness: 10 }
  },
  'D-S': {
    id: 'D-S',
    name: '사교적인 댕청이',
    nameEn: 'Social Butterfly',
    emoji: '🐶',
    description: '날 봐! 날 예뻐해 줘! 세상 모든 사람이 날 사랑해!',
    descriptionEn: 'Look at me! Love me! Everyone loves me!',
    traits: [
      '사교성 최고! 누구나 친구',
      '애교가 몸에 배어 있어요',
      '주인과의 스킨십을 가장 좋아함',
      '밝고 긍정적인 에너지로 가득'
    ],
    traitsEn: [
      'Super social! Everyone is a friend',
      'Natural charmer',
      'Loves physical affection with owner',
      'Full of bright and positive energy'
    ],
    stats: { energy: 8, affection: 10, independence: 2, curiosity: 7, calmness: 3 }
  }
};

// 고양이 타입 정보 (4가지)
export const catTypes: Record<string, TypeInfo> = {
  'C-R': {
    id: 'C-R',
    name: '우아한 지배자',
    nameEn: 'Elegant Ruler',
    emoji: '👑',
    description: '집사, 내가 지금부터 너의 존재를 잠시 허락하겠다.',
    descriptionEn: 'Human, I shall permit your presence... for now.',
    traits: [
      '품격과 위엄을 갖춘 고양이',
      '모든 것을 내려다보는 여유',
      '천천히 깜빡이는 눈으로 사랑 표현',
      '관심을 원할 때만 집사를 찾아옴'
    ],
    traitsEn: [
      'Dignified and majestic cat',
      'Looks down on everything with leisure',
      'Shows love with slow blinks',
      'Only seeks human when wanting attention'
    ],
    stats: { energy: 5, affection: 4, independence: 10, curiosity: 6, calmness: 8 }
  },
  'C-G': {
    id: 'C-G',
    name: '혼돈의 도깨비',
    nameEn: 'Chaotic Gremlin',
    emoji: '🌪️',
    description: '새벽 3시? 지금부터 파티 타임이다!',
    descriptionEn: '3 AM? Party time begins now!',
    traits: [
      '에너지 넘치는 사냥꾼',
      '우다다 타임은 필수! 새벽 운동회 개최',
      '모든 것이 장난감이 될 수 있어요',
      '츄르에 이성을 잃는 귀여운 모습'
    ],
    traitsEn: [
      'Energetic hunter',
      'Zoomies are essential! 3 AM sprint sessions',
      'Everything can be a toy',
      'Loses all control over Churu treats'
    ],
    stats: { energy: 10, affection: 5, independence: 7, curiosity: 10, calmness: 1 }
  },
  'C-C': {
    id: 'C-C',
    name: '애교 전문가',
    nameEn: 'Affection Expert',
    emoji: '💕',
    description: '골골골골... 집사 무릎 위가 세상에서 제일 좋아.',
    descriptionEn: 'Purr purr purr... Your lap is the best place in the world.',
    traits: [
      '애교가 넘치는 사랑둥이',
      '집사 곁을 항상 지키는 충성심',
      '꾹꾹이와 골골송은 기본 옵션',
      '부르면 대답하며 달려오는 강아지 같은 고양이'
    ],
    traitsEn: [
      'Overflowing with charm and love',
      'Always stays by human\'s side',
      'Kneading and purring come standard',
      'Dog-like cat that comes when called'
    ],
    stats: { energy: 6, affection: 10, independence: 3, curiosity: 7, calmness: 5 }
  },
  'C-N': {
    id: 'C-N',
    name: '공허의 닌자',
    nameEn: 'Shadow Ninja',
    emoji: '🐈‍⬛',
    description: '분명 여기 있었는데... 없습니다. (은신술)',
    descriptionEn: 'They were just here... gone. (Stealth mode)',
    traits: [
      '완벽한 은신술을 구사하는 닌자',
      '조용하고 독립적인 성격',
      '낯선 사람은 무서워요',
      '혼자만의 시간을 소중히 여김'
    ],
    traitsEn: [
      'Master of perfect stealth',
      'Quiet and independent personality',
      'Strangers are scary',
      'Values alone time'
    ],
    stats: { energy: 3, affection: 3, independence: 10, curiosity: 5, calmness: 9 }
  }
};

// 주인 타입 정보 (4가지)
export const ownerTypes: Record<string, TypeInfo> = {
  'O-T': {
    id: 'O-T',
    name: '열정적인 훈련사',
    nameEn: 'Passionate Trainer',
    emoji: '💪',
    description: '우리는 함께 성장하는 거야! 자, \'앉아\'!',
    descriptionEn: 'We grow together! Now, \'sit\'!',
    traits: [
      '체계적인 훈련과 교육을 중시',
      '함께 운동하고 활동하는 것을 좋아함',
      '반려동물의 성장과 발전에 보람을 느낌',
      '규칙을 중요하게 생각하는 스타일'
    ],
    traitsEn: [
      'Values systematic training and education',
      'Enjoys exercising and activities together',
      'Finds fulfillment in pet\'s growth',
      'Believes rules are important'
    ],
    stats: { energy: 9, affection: 7, independence: 8, curiosity: 8, calmness: 6 }
  },
  'O-C': {
    id: 'O-C',
    name: '무한애정 집사',
    nameEn: 'Infinite Love Parent',
    emoji: '😍',
    description: '오구오구, 우리 애기. 먹고 싶은 거 다 먹어.',
    descriptionEn: 'Aww, my baby. Eat whatever you want.',
    traits: [
      '반려동물에 대한 사랑이 넘쳐흐름',
      '스마트폰 앨범의 90%가 우리 애기',
      '무조건적인 애정과 스킨십',
      '귀여우면 모든 게 용서됨'
    ],
    traitsEn: [
      'Overflowing with love for pet',
      '90% of phone gallery is their baby',
      'Unconditional love and affection',
      'Everything is forgiven if cute'
    ],
    stats: { energy: 7, affection: 10, independence: 2, curiosity: 6, calmness: 5 }
  },
  'O-L': {
    id: 'O-L',
    name: '느긋한 동반자',
    nameEn: 'Laid-back Companion',
    emoji: '☺️',
    description: '그냥... 옆에 있어. 그거면 돼.',
    descriptionEn: 'Just... be here. That\'s enough.',
    traits: [
      '평화로운 일상을 함께 즐김',
      '특별한 것 없이도 행복해요',
      '서로의 존재만으로 위안을 얻음',
      '여유롭고 스트레스 없는 관계'
    ],
    traitsEn: [
      'Enjoys peaceful daily life together',
      'Happy without anything special',
      'Comforted by each other\'s presence',
      'Relaxed and stress-free relationship'
    ],
    stats: { energy: 3, affection: 8, independence: 7, curiosity: 4, calmness: 10 }
  },
  'O-P': {
    id: 'O-P',
    name: '걱정 많은 부모',
    nameEn: 'Worried Parent',
    emoji: '😰',
    description: '혹시 어디 아픈 건 아니겠지? 영양제는 챙겨 먹였나?',
    descriptionEn: 'Are you sick? Did I give you your supplements?',
    traits: [
      '반려동물의 건강이 최우선',
      '사료 성분표를 꼼꼼히 분석',
      '조그만 변화에도 민감하게 반응',
      '헌신적인 케어와 관리'
    ],
    traitsEn: [
      'Pet\'s health is top priority',
      'Carefully analyzes food ingredients',
      'Sensitive to even small changes',
      'Dedicated care and management'
    ],
    stats: { energy: 5, affection: 9, independence: 4, curiosity: 9, calmness: 4 }
  }
};

// 타입 ID로 정보 가져오기
export function getTypeInfo(typeId: PetType | OwnerType): TypeInfo | undefined {
  if (typeId.startsWith('D-')) {
    return dogTypes[typeId];
  } else if (typeId.startsWith('C-')) {
    return catTypes[typeId];
  } else if (typeId.startsWith('O-')) {
    return ownerTypes[typeId];
  }
  return undefined;
}
