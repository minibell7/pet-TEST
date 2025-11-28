export type BehaviorCategory = 'tail' | 'ears' | 'eyes' | 'posture' | 'sound';

export interface BehaviorItem {
    id: string;
    category: BehaviorCategory;
    action: string;
    actionEn: string;
    meaning: string;
    meaningEn: string;
    tip: string;
    tipEn: string;
    emoji: string;
}

export const DOG_BEHAVIORS: BehaviorItem[] = [
    // Tail
    {
        id: 'd-tail-wag-fast',
        category: 'tail',
        action: '꼬리를 빠르게 흔든다',
        actionEn: 'Wagging tail fast',
        meaning: '너무 신나요! 반가워요!',
        meaningEn: 'I am so excited! Nice to meet you!',
        tip: '함께 놀아주거나 반갑게 인사해주세요.',
        tipEn: 'Play with them or greet them happily.',
        emoji: '😆',
    },
    {
        id: 'd-tail-tucked',
        category: 'tail',
        action: '꼬리를 다리 사이로 말아 넣는다',
        actionEn: 'Tail tucked between legs',
        meaning: '무서워요... 불안해요.',
        meaningEn: 'I am scared... I am anxious.',
        tip: '안심시켜주고 무서운 원인을 제거해주세요.',
        tipEn: 'Reassure them and remove the cause of fear.',
        emoji: '🥺',
    },
    {
        id: 'd-tail-stiff',
        category: 'tail',
        action: '꼬리를 꼿꼿이 세우고 멈춰있다',
        actionEn: 'Tail held high and stiff',
        meaning: '저건 뭐지? 경계하고 있어요.',
        meaningEn: 'What is that? I am alert.',
        tip: '강아지가 무엇을 보고 있는지 확인해주세요.',
        tipEn: 'Check what your dog is looking at.',
        emoji: '🧐',
    },
    // Ears
    {
        id: 'd-ears-perked',
        category: 'ears',
        action: '귀를 쫑긋 세운다',
        actionEn: 'Ears perked up',
        meaning: '궁금해요! 집중하고 있어요.',
        meaningEn: 'I am curious! I am focused.',
        tip: '말을 걸거나 새로운 장난감을 보여주세요.',
        tipEn: 'Talk to them or show them a new toy.',
        emoji: '👂',
    },
    {
        id: 'd-ears-back',
        category: 'ears',
        action: '귀를 뒤로 젖힌다',
        actionEn: 'Ears flattened back',
        meaning: '불편해요. 다가오지 마세요.',
        meaningEn: 'I am uncomfortable. Do not come closer.',
        tip: '스트레스를 받고 있으니 잠시 혼자 두세요.',
        tipEn: 'They are stressed, give them some space.',
        emoji: '😠',
    },
    // Sound
    {
        id: 'd-sound-bark',
        category: 'sound',
        action: '멍멍! 짖는다',
        actionEn: 'Barking',
        meaning: '여기 보세요! 할 말이 있어요!',
        meaningEn: 'Look here! I have something to say!',
        tip: '요구사항이 있는지 확인해보세요.',
        tipEn: 'Check if they need something.',
        emoji: '📢',
    },
    {
        id: 'd-sound-growl',
        category: 'sound',
        action: '으르렁거린다',
        actionEn: 'Growling',
        meaning: '경고합니다. 저리 가세요.',
        meaningEn: 'Warning. Go away.',
        tip: '즉시 행동을 멈추고 물러나세요.',
        tipEn: 'Stop what you are doing and back off.',
        emoji: '⚠️',
    },
];

export const CAT_BEHAVIORS: BehaviorItem[] = [
    // Tail
    {
        id: 'c-tail-up',
        category: 'tail',
        action: '꼬리를 일자로 세운다',
        actionEn: 'Tail held straight up',
        meaning: '기분 최고! 자신감 뿜뿜!',
        meaningEn: 'Feeling great! Confident!',
        tip: '고양이가 당신을 신뢰하고 있다는 뜻이에요.',
        tipEn: 'It means your cat trusts you.',
        emoji: '😺',
    },
    {
        id: 'c-tail-wag',
        category: 'tail',
        action: '꼬리를 탁탁 친다',
        actionEn: 'Thumping/Wagging tail',
        meaning: '짜증나요. 건들지 마세요.',
        meaningEn: 'I am annoyed. Do not touch me.',
        tip: '스킨십을 멈추고 거리를 두세요.',
        tipEn: 'Stop petting and give them space.',
        emoji: '😾',
    },
    {
        id: 'c-tail-puff',
        category: 'tail',
        action: '꼬리가 펑퍼짐하게 부풀었다',
        actionEn: 'Puffed up tail',
        meaning: '깜짝이야! 무서워요!',
        meaningEn: 'Startled! I am scared!',
        tip: '놀란 고양이를 진정시켜주세요.',
        tipEn: 'Calm your startled cat.',
        emoji: '🙀',
    },
    // Ears
    {
        id: 'c-ears-airplane',
        category: 'ears',
        action: '귀가 양옆으로 납작해졌다 (마징가 귀)',
        actionEn: 'Ears flat sideways (Airplane ears)',
        meaning: '화났어요! 공격할 수도 있어요.',
        meaningEn: 'I am angry! I might attack.',
        tip: '매우 예민한 상태니 조심하세요.',
        tipEn: 'Be careful, they are very sensitive.',
        emoji: '✈️',
    },
    // Sound
    {
        id: 'c-sound-purr',
        category: 'sound',
        action: '골골송 (그르릉 소리)',
        actionEn: 'Purring',
        meaning: '너무 편안하고 행복해요.',
        meaningEn: 'I am so comfortable and happy.',
        tip: '부드럽게 쓰다듬어주세요.',
        tipEn: 'Pet them gently.',
        emoji: '🥰',
    },
    {
        id: 'c-sound-hiss',
        category: 'sound',
        action: '하악질 (쉬익 소리)',
        actionEn: 'Hissing',
        meaning: '가까이 오지 마! 저리 가!',
        meaningEn: 'Do not come closer! Go away!',
        tip: '위협을 느끼고 있습니다. 자리를 피해주세요.',
        tipEn: 'They feel threatened. Leave the area.',
        emoji: '💢',
    },
];
