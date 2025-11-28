import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Quiz } from '@/components/quiz';
import { storage } from '@/lib/storage';
import { dogQuestions } from '@/data/quizData';
import type { DogType, PetType, OwnerType } from '@shared/schema';

export default function DogQuiz() {
  const [, setLocation] = useLocation();
  const [petName, setPetName] = useState('');

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || state.petSpecies !== 'dog' || !state.petName) {
      setLocation('/');
      return;
    }
    setPetName(state.petName);
  }, [setLocation]);

  const handleComplete = (result: DogType) => {
    storage.setPetResult(result);
    setLocation('/pet-result');
  };

  const handleBack = () => {
    setLocation('/pet-info');
  };

  if (!petName) return null;

  return (
    <Quiz
      questions={dogQuestions}
      petName={petName}
      title="강아지 BTI 테스트"
      emoji="🐶"
      onComplete={handleComplete as (result: PetType | OwnerType) => void}
      onBack={handleBack}
    />
  );
}
