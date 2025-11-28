// localStorage 유틸리티
import type { AppState, PetSpecies, PetType, OwnerType } from '@shared/schema';

const STORAGE_KEY = 'pet-bti-state';

export const storage = {
  // 전체 상태 가져오기
  getState(): AppState {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  // 전체 상태 저장하기
  setState(state: AppState): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  },

  // 반려동물 종류 저장
  setPetSpecies(species: PetSpecies): void {
    const state = this.getState();
    this.setState({ ...state, petSpecies: species });
  },

  // 반려동물 이름 저장
  setPetName(name: string): void {
    const state = this.getState();
    this.setState({ ...state, petName: name });
  },

  // 반려동물 결과 저장
  setPetResult(result: PetType): void {
    const state = this.getState();
    this.setState({ ...state, petResult: result });
  },

  // 보호자/집사 이름 저장
  setOwnerName(name: string): void {
    const state = this.getState();
    this.setState({ ...state, ownerName: name });
  },

  // 주인 결과 저장
  setOwnerResult(result: OwnerType): void {
    const state = this.getState();
    this.setState({ ...state, ownerResult: result });
  },

  // 상태 초기화
  clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear state:', error);
    }
  }
};
