import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Quiz } from '@/components/quiz';
import { storage } from '@/lib/storage';
import { ownerQuestions } from '@/data/quizData';
import type { OwnerType, PetType } from '@shared/schema';

export default function OwnerQuiz() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || !state.petName || !state.petResult) {
      setLocation('/');
      return;
    }
  }, [setLocation]);

  const handleComplete = (result: OwnerType) => {
    storage.setOwnerResult(result);
    setLocation('/owner-result');
  };

  const handleBack = () => {
    setLocation('/pet-result');
  };

  return (
    <Quiz
      questions={ownerQuestions}
      title="주인 BTI 테스트"
      emoji="🙋"
      onComplete={handleComplete as (result: PetType | OwnerType) => void}
      onBack={handleBack}
    />
  );
}
