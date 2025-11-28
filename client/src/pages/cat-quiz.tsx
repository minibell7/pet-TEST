import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Quiz } from '@/components/quiz';
import { storage } from '@/lib/storage';
import { catQuestions } from '@/data/quizData';
import type { CatType, PetType, OwnerType } from '@shared/schema';

export default function CatQuiz() {
  const [, setLocation] = useLocation();
  const [petName, setPetName] = useState('');

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || state.petSpecies !== 'cat' || !state.petName) {
      setLocation('/');
      return;
    }
    setPetName(state.petName);
  }, [setLocation]);

  const handleComplete = (result: CatType) => {
    storage.setPetResult(result);
    setLocation('/pet-result');
  };

  const handleBack = () => {
    setLocation('/pet-info');
  };

  if (!petName) return null;

  return (
    <Quiz
      questions={catQuestions}
      petName={petName}
      title="고양이 BTI 테스트"
      emoji="🐱"
      onComplete={handleComplete as (result: PetType | OwnerType) => void}
      onBack={handleBack}
    />
  );
}
