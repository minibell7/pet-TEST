import type { PetSpecies } from '@shared/schema';

export interface PetAge {
  years: number;
  months: number;
  humanYears: number;
  lifeStage: string;
  lifeStageEn: string;
  careTip: string;
  careTipEn: string;
}

// 강아지 나이를 사람 나이로 환산
function calculateDogAge(years: number): number {
  if (years <= 0) return 0;
  if (years <= 1) return Math.round(years * 15);
  if (years <= 2) return Math.round(15 + (years - 1) * 9);
  return Math.round(24 + (years - 2) * 5);
}

// 고양이 나이를 사람 나이로 환산
function calculateCatAge(years: number): number {
  if (years <= 0) return 0;
  if (years <= 1) return Math.round(years * 15);
  if (years <= 2) return Math.round(15 + (years - 1) * 9);
  return Math.round(24 + (years - 2) * 4);
}

// 생애 주기 및 케어 팁
function getLifeStageInfo(species: PetSpecies, years: number): {
  stage: string;
  stageEn: string;
  tip: string;
  tipEn: string;
} {
  if (species === 'dog') {
    if (years < 1) {
      return {
        stage: '강아지 (유년기)',
        stageEn: 'Puppy (Infancy)',
        tip: '사회화 교육과 기본 훈련이 중요해요',
        tipEn: 'Socialization and basic training are important',
      };
    } else if (years < 2) {
      return {
        stage: '청소년기',
        stageEn: 'Adolescence',
        tip: '활발한 활동과 지속적인 훈련이 필요해요',
        tipEn: 'Active exercise and continuous training needed',
      };
    } else if (years < 7) {
      return {
        stage: '성견기',
        stageEn: 'Adult',
        tip: '규칙적인 운동과 균형잡힌 식단이 중요해요',
        tipEn: 'Regular exercise and balanced diet are important',
      };
    } else if (years < 10) {
      return {
        stage: '중년기',
        stageEn: 'Middle Age',
        tip: '정기적인 건강검진과 체중 관리가 필요해요',
        tipEn: 'Regular health checkups and weight management needed',
      };
    } else {
      return {
        stage: '노년기',
        stageEn: 'Senior',
        tip: '편안한 환경과 관절 건강에 신경 써주세요',
        tipEn: 'Provide comfortable environment and care for joints',
      };
    }
  } else {
    // cat
    if (years < 1) {
      return {
        stage: '고양이 (유년기)',
        stageEn: 'Kitten (Infancy)',
        tip: '호기심을 채워주고 안전한 환경을 만들어주세요',
        tipEn: 'Satisfy curiosity and create a safe environment',
      };
    } else if (years < 2) {
      return {
        stage: '청소년기',
        stageEn: 'Adolescence',
        tip: '활발한 놀이와 충분한 자극이 필요해요',
        tipEn: 'Active play and sufficient stimulation needed',
      };
    } else if (years < 7) {
      return {
        stage: '성묘기',
        stageEn: 'Adult',
        tip: '적정 체중 유지와 정기적인 놀이가 중요해요',
        tipEn: 'Maintain proper weight and regular play is important',
      };
    } else if (years < 11) {
      return {
        stage: '중년기',
        stageEn: 'Mature',
        tip: '건강검진과 치아 관리에 신경 써주세요',
        tipEn: 'Regular checkups and dental care are important',
      };
    } else {
      return {
        stage: '노년기',
        stageEn: 'Senior',
        tip: '부드러운 음식과 따뜻한 환경이 좋아요',
        tipEn: 'Soft food and warm environment are best',
      };
    }
  }
}

// 생년월일로 나이 계산
export function calculatePetAge(
  species: PetSpecies,
  birthDate: string
): PetAge | null {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  const today = new Date();
  
  if (birth > today) return null; // 미래 날짜
  
  // 년수와 개월수 계산
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const totalYears = years + months / 12;
  
  // 사람 나이 환산
  const humanYears = species === 'dog' 
    ? calculateDogAge(totalYears)
    : calculateCatAge(totalYears);
  
  // 생애 주기 정보
  const lifeStageInfo = getLifeStageInfo(species, totalYears);
  
  return {
    years,
    months,
    humanYears,
    lifeStage: lifeStageInfo.stage,
    lifeStageEn: lifeStageInfo.stageEn,
    careTip: lifeStageInfo.tip,
    careTipEn: lifeStageInfo.tipEn,
  };
}

// localStorage에 생년월일 저장
export function savePetBirthDate(birthDate: string): void {
  try {
    const state = localStorage.getItem('pet-bti-state');
    const currentState = state ? JSON.parse(state) : {};
    currentState.petBirthDate = birthDate;
    localStorage.setItem('pet-bti-state', JSON.stringify(currentState));
  } catch (error) {
    console.error('Failed to save birth date:', error);
  }
}

// localStorage에서 생년월일 가져오기
export function getPetBirthDate(): string | null {
  try {
    const state = localStorage.getItem('pet-bti-state');
    if (!state) return null;
    const currentState = JSON.parse(state);
    return currentState.petBirthDate || null;
  } catch {
    return null;
  }
}
