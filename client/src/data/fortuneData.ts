import type { PetType, OwnerType } from '@shared/schema';

export interface Fortune {
  category: string;
  categoryEn: string;
  stars: number;
  message: string;
  messageEn: string;
}

export interface DailyFortune {
  fortunes: Fortune[];
}

// 날짜와 타입 조합으로 시드 생성
function generateSeed(petType: PetType, ownerType: OwnerType, date: string): number {
  const str = `${petType}-${ownerType}-${date}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// 시드 기반 랜덤 (0-1 사이 값)
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// 운세 메시지 풀 (8개 카테고리, 긴 메시지)
const fortuneMessages = {
  walk: {
    high: [
      { ko: '🌟 오늘은 새로운 친구를 만날 확률이 무려 87%! 평소와 다른 산책로를 시도해보세요. 꼬리를 살랑살랑 흔드는 모습이 보이면 주저하지 말고 인사해보세요. 특별한 인연이 될 수도 있어요!', en: '🌟 87% chance of meeting a new friend today! Try a different walking route. When you see those tail wags, don\'t hesitate to say hello - it could be a special connection!' },
      { ko: '✨ 날씨가 완벽해요! 에너지 충전 확률 95%. 공원에서 30분 이상 뛰어놀면 오후 내내 기분이 좋을 거예요. 지금 바로 나가보세요!', en: '✨ Perfect weather! 95% energy boost. Playing in the park for 30+ minutes will keep the good vibes going all afternoon. Head out now!' },
      { ko: '🎉 특별한 장소를 발견할 운명! 평소 지나치던 골목길에 숨겨진 보물 같은 공간이 있어요. 호기심을 따라가 보세요. 78% 확률로 새로운 단골 산책로가 생길 거예요!', en: '🎉 Destined to discover a special place! There\'s a hidden gem in that alley you always pass by. Follow your curiosity - 78% chance of finding your new favorite spot!' },
    ],
    medium: [
      { ko: '🌤️ 평소처럼 즐겁게 산책하세요. 오늘은 친숙한 길이 가장 편안해요. 단골 친구들과 만나면 꼬리 흔들기 지수 73%로 안정적인 하루가 될 거예요.', en: '🌤️ Enjoy your usual walk. Familiar paths feel most comfortable today. Meeting regular friends brings a stable 73% tail-wagging index.' },
      { ko: '☁️ 가까운 곳으로 가볍게 다녀오세요. 20-25분 정도가 딱 좋아요. 무리하지 않는 게 오늘의 핵심! 에너지 보존 62%로 저녁까지 컨디션 유지.', en: '☁️ Take a light walk nearby. 20-25 minutes is perfect. Don\'t overdo it - that\'s today\'s key! 62% energy preservation for evening vitality.' },
    ],
    low: [
      { ko: '💤 오늘은 휴식이 우선! 짧게 10분만 다녀오거나 실내 놀이를 추천해요. 무리한 산책은 컨디션 저하 위험 68%. 집에서 편안하게 쉬는 것도 좋은 선택이에요.', en: '💤 Rest comes first today! Just 10 minutes outside or indoor play is recommended. Excessive walking carries 68% fatigue risk. Relaxing at home is a great choice too.' },
      { ko: '🏠 에너지 충전이 필요한 날. 산책보다는 집에서 느긋하게 보내세요. 창문으로 바깥 구경하기도 좋아요. 내일을 위한 컨디션 회복률 up!', en: '🏠 Energy recharge needed. Better to relax at home than walk. Window-watching is nice too. Recovery rate up for tomorrow!' },
    ],
  },
  health: {
    high: [
      { ko: '💪 컨디션 최고! 면역력 지수 94%로 질병 저항력이 강해요. 활동적으로 놀고 신선한 물을 충분히 마시면 건강 유지 확률 98%! 오늘은 걱정 없는 하루!', en: '💪 Peak condition! Immunity index at 94% with strong disease resistance. Play actively and drink fresh water for 98% health maintenance! A worry-free day!' },
      { ko: '✨ 몸 상태가 아주 좋아요! 활력 에너지 91%. 새로운 운동이나 놀이를 시도하기 완벽한 날. 보호자와 함께하면 행복 호르몬 분비 극대화!', en: '✨ Physical condition excellent! Vitality energy 91%. Perfect day to try new exercises or games. Maximize happy hormones with your guardian!' },
    ],
    medium: [
      { ko: '🌿 안정적인 건강 상태예요. 컨디션 유지율 72%. 평소 루틴대로 식사하고 운동하면 무난한 하루. 급격한 변화는 피하는 게 좋아요.', en: '🌿 Stable health status. Condition maintenance 72%. Stick to usual meal and exercise routine for a smooth day. Avoid sudden changes.' },
    ],
    low: [
      { ko: '🩺 충분한 휴식이 필요해요. 피로도 지수 65%. 물을 자주 마시고 조용한 곳에서 쉬세요. 무리한 활동 자제하면 내일 컨디션 회복률 83%!', en: '🩺 Need plenty of rest. Fatigue index 65%. Drink water often and rest in a quiet place. Avoid strenuous activity for 83% recovery tomorrow!' },
      { ko: '💊 오늘은 몸 상태를 체크해보세요. 작은 신호도 놓치지 마세요. 식욕, 활동량 변화가 있다면 보호자에게 알려야 해요. 건강 주의 필요!', en: '💊 Check your condition today. Don\'t miss small signals. Let your guardian know about appetite or activity changes. Health attention needed!' },
    ],
  },
  snack: {
    high: [
      { ko: '🍖 간식 대박의 날! 맛있는 것 받을 확률 89%. 새로운 간식을 받거나 특별 메뉴가 나올 수도! 귀여운 눈빛 작전 성공률 92%. 하지만 과식은 금물!', en: '🍖 Jackpot treat day! 89% chance of yummy things. New treats or special menu possible! Cute eyes strategy success rate 92%. But no overeating!' },
      { ko: '🎁 보호자 마음이 넉넉한 날! 평소보다 15-20% 더 받을 수 있어요. 좋아하는 간식 나올 확률 HIGH! 감사의 꼬리 흔들기도 잊지 마세요.', en: '🎁 Guardian feeling generous! 15-20% more than usual possible. Favorite treat probability HIGH! Don\'t forget the grateful tail wag.' },
    ],
    medium: [
      { ko: '🍪 평소만큼 맛있는 하루! 적당한 양 60-70%로 균형 유지. 특별한 간식은 없어도 일상의 행복은 계속돼요. 건강한 식습관이 최고!', en: '🍪 Tasty as usual! Balance maintained at 60-70%. Even without special treats, daily happiness continues. Healthy habits are best!' },
    ],
    low: [
      { ko: '🚫 오늘은 간식 절제의 날. 소화율 저하 위험 58%. 과한 요구는 역효과! 물 많이 마시고 내일을 기약해요. 건강이 간식보다 중요!', en: '🚫 Treat moderation day. Digestion risk 58%. Excessive begging backfires! Drink water and wait for tomorrow. Health over treats!' },
    ],
  },
  relationship: {
    high: [
      { ko: '💕 보호자와 교감 완벽! 마음 전달 성공률 96%. 오늘은 새로운 트릭을 배우거나 특별한 시간을 보내기 최적. 서로를 이해하는 순간이 3-4번 찾아올 거예요!', en: '💕 Perfect bond with guardian! Mind-reading success 96%. Optimal for learning new tricks or special moments. 3-4 moments of mutual understanding await!' },
      { ko: '🌈 사랑이 넘치는 하루! 스킨십 만족도 91%. 안아달라고 애교 부리면 100% 성공! 함께 있는 것만으로도 행복 호르몬이 마구마구!', en: '🌈 Day overflowing with love! Physical affection satisfaction 91%. Acting cute for hugs = 100% success! Just being together boosts happiness hormones!' },
    ],
    medium: [
      { ko: '🤝 평온한 관계 지속 중. 신뢰도 74%. 특별한 이벤트는 없어도 안정적인 유대감. 일상의 작은 순간들이 소중해요.', en: '🤝 Peaceful relationship continues. Trust level 74%. No special events but stable bond. Small daily moments are precious.' },
    ],
    low: [
      { ko: '⏸️ 오늘은 서로 공간이 필요한 날. 보호자도 바쁠 수 있어요. 집착보다는 여유롭게 지켜봐요. 인내심 발휘하면 내일 관계 개선 확률 78%!', en: '⏸️ Today both need space. Guardian might be busy. Watch calmly rather than cling. Patience brings 78% relationship improvement tomorrow!' },
    ],
  },
  play: {
    high: [
      { ko: '🎾 놀이 대박! 새로운 장난감 등장 확률 82%! 평소보다 2배 더 신나게 놀 수 있어요. 보호자와의 놀이 시간이 30분 이상 예상! 에너지 풀 충전!', en: '🎾 Play jackpot! 82% chance of new toys! Twice as much fun as usual. 30+ minutes playtime with guardian expected! Full energy charge!' },
      { ko: '⚽ 최고의 놀이 컨디션! 집중력 94%, 반응속도 88%. 공 던지기 게임하면 성공률 극대화! 오늘 새로운 기록 세울 수도!', en: '⚽ Ultimate play condition! Focus 94%, response 88%. Ball game success rate maximized! Might set a new record today!' },
    ],
    medium: [
      { ko: '🧸 평소처럼 즐거운 놀이 시간! 만족도 68%. 좋아하는 장난감으로 15-20분 놀면 딱 좋아요. 과하지도 부족하지도 않은 행복!', en: '🧸 Fun playtime as usual! Satisfaction 68%. 15-20 minutes with favorite toy is perfect. Just right happiness!' },
    ],
    low: [
      { ko: '😴 오늘은 조용한 놀이 추천. 격한 활동은 피로도 up 64%. 퍼즐 장난감이나 코 쓰는 게임이 좋아요. 두뇌 활동으로 만족도 확보!', en: '😴 Quiet play recommended. Intense activity increases fatigue 64%. Puzzle toys or scent games are good. Brain activity brings satisfaction!' },
    ],
  },
  communication: {
    high: [
      { ko: '📡 텔레파시 지수 97%! 보호자가 뭘 생각하는지 바로 알 수 있어요. 눈빛만 봐도 통하는 날! 원하는 걸 표현하면 90% 이상 이루어질 거예요!', en: '📡 Telepathy index 97%! You can instantly know what guardian thinks. Eye contact says it all! 90%+ of wishes come true when expressed!' },
      { ko: '💬 소통 완벽! 보호자가 내 신호를 100% 이해하는 날. 배고플 때, 놀고 싶을 때 정확히 전달돼요. 감정 공유 능력 최대치!', en: '💬 Perfect communication! Guardian understands signals 100%. Hunger, playtime perfectly conveyed. Emotional sharing at maximum!' },
    ],
    medium: [
      { ko: '👂 평범한 소통의 날. 전달률 71%. 중요한 건 잘 전해지지만 세세한 건 놓칠 수도. 명확한 신호가 필요해요!', en: '👂 Normal communication day. Delivery rate 71%. Important things get through but details might be missed. Clear signals needed!' },
    ],
    low: [
      { ko: '🔇 오늘은 소통이 조금 어려운 날. 오해 발생 확률 42%. 보호자도 내 마음을 잘 모를 수 있어요. 참을성을 갖고 여러 번 시도해보세요!', en: '🔇 Communication slightly difficult. Misunderstanding risk 42%. Guardian might not get it. Be patient and try multiple times!' },
    ],
  },
  discovery: {
    high: [
      { ko: '🔍 호기심 폭발! 새로운 발견 확률 88%. 숨겨진 장난감을 찾거나 신기한 냄새를 발견할 수 있어요. 탐험가 본능 깨우는 날! 집 안 구석구석 탐험 추천!', en: '🔍 Curiosity explosion! 88% new discovery chance. Find hidden toys or interesting smells. Explorer instinct awakens! Explore every corner!' },
      { ko: '🗺️ 모험의 날! 평소 안 가던 방에 들어가거나 새로운 코스를 발견하면 행복도 +35%! 세상은 넓고 탐험할 곳은 많아요!', en: '🗺️ Adventure day! Enter rooms you never tried or find new routes for +35% happiness! The world is wide with much to explore!' },
    ],
    medium: [
      { ko: '🧭 작은 발견의 기쁨! 새로운 냄새나 소리를 발견할 확률 54%. 일상 속 작은 변화를 즐겨보세요. 호기심 지수 보통!', en: '🧭 Joy of small discoveries! 54% chance of new scents or sounds. Enjoy small changes in daily life. Moderate curiosity index!' },
    ],
    low: [
      { ko: '📍 오늘은 익숙한 게 편안해요. 새로운 탐험보다는 아는 곳에서 안정감. 발견 욕구 낮음 38%. 안전한 루틴을 지키는 게 좋아요!', en: '📍 Familiar feels comfortable today. Safety in known places over exploration. Discovery desire low 38%. Stick to safe routines!' },
    ],
  },
  rest: {
    high: [
      { ko: '😴 꿀잠 보장! 수면의 질 96%. 오늘 푹 쉬면 내일 에너지 완충 확률 99%! 보호자 무릎이나 좋아하는 자리에서 3-4시간 숙면 추천. 꿈나라 여행 가즈아!', en: '😴 Sweet dreams guaranteed! Sleep quality 96%. Rest well today for 99% full energy tomorrow! 3-4 hours deep sleep on guardian\'s lap recommended. Dream journey awaits!' },
      { ko: '☁️ 최고의 휴식 컨디션! 릴렉스 지수 93%. 따뜻한 곳에서 쉬면 스트레스 해소 98%. 아무 생각 없이 편안하게 보내세요!', en: '☁️ Ultimate rest condition! Relax index 93%. Warm spot reduces stress 98%. Spend time comfortably with no thoughts!' },
    ],
    medium: [
      { ko: '💤 적당한 휴식이 필요해요. 수면 만족도 67%. 2시간 정도 낮잠 자면 오후 활동력 보충! 평범하지만 필요한 휴식!', en: '💤 Moderate rest needed. Sleep satisfaction 67%. 2-hour nap recharges afternoon energy! Simple but necessary rest!' },
    ],
    low: [
      { ko: '😵 휴식이 제대로 안 되는 날. 숙면 방해 요소 58%. 주변이 시끄럽거나 불편할 수 있어요. 조용한 공간 찾아서 쉬는 게 중요!', en: '😵 Rest disrupted day. Sleep interference 58%. Surroundings might be noisy or uncomfortable. Find a quiet space to rest!' },
    ],
  },
};

// 운세 생성
export function getDailyFortune(petType: PetType, ownerType: OwnerType): DailyFortune {
  const today = new Date().toISOString().split('T')[0];
  const seed = generateSeed(petType, ownerType, today);
  
  const fortunes: Fortune[] = [];
  
  // 8가지 운세 카테고리
  const categories = [
    { key: 'walk', ko: '산책운', en: 'Activity Luck' },
    { key: 'health', ko: '건강운', en: 'Health Luck' },
    { key: 'snack', ko: '간식운', en: 'Treat Luck' },
    { key: 'relationship', ko: '관계운', en: 'Bond Luck' },
    { key: 'play', ko: '놀이운', en: 'Play Luck' },
    { key: 'communication', ko: '교감운', en: 'Communication Luck' },
    { key: 'discovery', ko: '발견운', en: 'Discovery Luck' },
    { key: 'rest', ko: '휴식운', en: 'Rest Luck' },
  ];
  
  categories.forEach((category, index) => {
    const categorySeed = seed + index * 1000;
    const random = seededRandom(categorySeed);
    
    let stars: number;
    let level: 'high' | 'medium' | 'low';
    
    if (random > 0.7) {
      stars = 5;
      level = 'high';
    } else if (random > 0.4) {
      stars = random > 0.55 ? 4 : 3;
      level = 'medium';
    } else {
      stars = random > 0.25 ? 3 : 2;
      level = 'low';
    }
    
    const messages = fortuneMessages[category.key as keyof typeof fortuneMessages][level];
    const messageIndex = Math.floor(seededRandom(categorySeed + 100) * messages.length);
    const selectedMessage = messages[messageIndex];
    
    fortunes.push({
      category: category.ko,
      categoryEn: category.en,
      stars,
      message: selectedMessage.ko,
      messageEn: selectedMessage.en,
    });
  });
  
  return { fortunes };
}
