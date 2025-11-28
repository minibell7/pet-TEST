// Pet-BTI 데이터 스키마 정의
// 이 앱은 완전한 클라이언트 사이드 앱이므로 DB 스키마가 아닌 타입 정의만 포함

// 반려동물 종류
export type PetSpecies = 'dog' | 'cat';

// 강아지 타입 (4가지)
export type DogType = 'D-E' | 'D-F' | 'D-Z' | 'D-S';

// 고양이 타입 (4가지)
export type CatType = 'C-R' | 'C-G' | 'C-C' | 'C-N';

// 반려동물 타입 (강아지 또는 고양이)
export type PetType = DogType | CatType;

// 주인 타입 (4가지)
export type OwnerType = 'O-T' | 'O-C' | 'O-L' | 'O-P';

// 퀴즈 질문 인터페이스
export interface QuizQuestion {
  id: number;
  question: string; // '[이름]' 플레이스홀더 포함
  questionEn?: string; // 영어 버전 (선택적)
  options: {
    text: string;
    textEn?: string; // 영어 버전 (선택적)
    type: PetType | OwnerType;
  }[];
}

// 타입 정보 인터페이스
export interface TypeInfo {
  id: PetType | OwnerType;
  name: string;
  nameEn?: string; // 영어 이름 (선택적)
  emoji: string;
  description: string;
  descriptionEn?: string; // 영어 설명 (선택적)
  traits: string[];
  traitsEn?: string[]; // 영어 특징들 (선택적)
  stats?: {
    energy: number;
    affection: number;
    independence: number;
    curiosity: number;
    calmness: number;
  };
}

// 궁합 팁 인터페이스
export interface CompatibilityTip {
  icon: string; // 이모지
  category: string; // 팁 카테고리 (예: '놀이 팁', '주의점')
  categoryEn?: string; // 영어 카테고리
  content: string; // 팁 내용
  contentEn?: string; // 영어 팁 내용
}

// 궁합 결과 인터페이스
export interface CompatibilityResult {
  petType: PetType;
  ownerType: OwnerType;
  emoji: string;
  title: string;
  titleEn?: string; // 영어 제목 (선택적)
  subtitle: string; // 한 줄 설명
  subtitleEn?: string; // 영어 한 줄 설명
  description: string;
  descriptionEn?: string; // 영어 설명 (선택적)
  tips?: CompatibilityTip[]; // 실용 팁 (선택적)
  detailReport?: {
    analysis: string;
    analysisEn: string;
    missions: string[];
    missionsEn: string[];
    letterToOwner: string;
    letterToOwnerEn: string;
    letterToPet: string;
    letterToPetEn: string;
  };
}

// 상세 궁합 분석 인터페이스
export interface DetailedCompatibility {
  petType: PetType;
  ownerType: OwnerType;
  scores: {
    affection: number; // 애정도 (1-5)
    energy: number; // 에너지 매칭 (1-5)
    training: number; // 훈련/상호이해 (1-5)
    comfort: number; // 일상 편안함 (1-5)
  };
  analysis: string[]; // 상세 분석 (여러 문단)
  tips: string[]; // 함께 생활하는 팁
  warnings: string[]; // 주의사항
  activities: {
    outdoor: string[]; // 야외 활동
    indoor: string[]; // 실내/두뇌 활동
    training: string[]; // 훈련 & 교육
  };
  care: {
    health: string[]; // 건강 관리
    emotional: string[]; // 정서적 케어
    environment: string[]; // 환경 세팅
    routine: string[]; // 일상 루틴
  };
  specialNote: string; // 이 조합의 특별한 점
}

// localStorage 상태 인터페이스
export interface AppState {
  petSpecies?: PetSpecies;
  petName?: string;
  petResult?: PetType;
  ownerName?: string;
  ownerResult?: OwnerType;
}
