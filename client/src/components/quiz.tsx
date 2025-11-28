import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import type { QuizQuestion, PetType, OwnerType } from '@shared/schema';

interface QuizProps<T extends PetType | OwnerType = PetType | OwnerType> {
  questions: QuizQuestion[];
  petName?: string;
  title: string;
  emoji: string;
  onComplete: (result: T) => void;
  onBack: () => void;
}

export function Quiz<T extends PetType | OwnerType = PetType | OwnerType>({ questions, petName, title, emoji, onComplete, onBack }: QuizProps<T>) {
  const { language } = useI18n();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, T>>({});

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (type: T) => {
    const newAnswers = { ...answers, [question.id]: type };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, T>) => {
    const typeCounts: Record<string, number> = {};
    
    Object.values(finalAnswers).forEach(type => {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    });

    const resultType = Object.entries(typeCounts).reduce((a, b) => 
      b[1] > a[1] ? b : a
    )[0] as T;

    onComplete(resultType);
  };

  const questionText = language === 'en' && question.questionEn 
    ? question.questionEn 
    : question.question;

  const formattedQuestion = petName 
    ? questionText.replace(/\[이름\]|\[name\]/g, petName)
    : questionText;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl w-full mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mb-4"
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-2xl">{emoji}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-6 md:p-10 space-y-6 md:space-y-8">
            <div className="text-center space-y-3 md:space-y-4">
              <p className="text-sm font-medium text-primary">
                Q{currentQuestion + 1}
              </p>
              <h2 className="text-lg md:text-2xl font-bold text-card-foreground leading-relaxed break-words px-2">
                {formattedQuestion}
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              {question.options.map((option, index) => {
                const optionText = language === 'en' && option.textEn 
                  ? option.textEn 
                  : option.text;
                
                return (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleAnswer(option.type as T)}
                    className="w-full p-4 md:p-7 text-left h-auto rounded-xl text-sm md:text-lg hover:scale-[1.01] transition-all"
                    data-testid={`button-option-${index}`}
                  >
                    <span className="flex items-start gap-2 md:gap-3">
                      <span className="text-primary font-semibold flex-shrink-0 text-sm md:text-base">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="flex-1 leading-relaxed break-words">{optionText}</span>
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
