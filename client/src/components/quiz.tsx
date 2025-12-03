import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, PawPrint } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import type { QuizQuestion, PetType, OwnerType } from '@shared/schema';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [direction, setDirection] = useState(0);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (type: T) => {
    const newAnswers = { ...answers, [question.id]: type };
    setAnswers(newAnswers);
    setDirection(1);

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

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8 overflow-hidden">
      <div className="max-w-2xl w-full mx-auto relative z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mb-4 hover:bg-white/20"
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-sm font-medium text-muted-foreground bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                Step {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-3xl animate-bounce">{emoji}</span>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-3 bg-secondary/30" indicatorClassName="bg-gradient-to-r from-primary to-purple-500" />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 z-10"
                style={{ left: `${progress}%`, x: '-50%' }}
                animate={{ left: `${progress}%` }}
              >
                <div className="bg-white p-1 rounded-full shadow-md">
                  <PawPrint className="w-4 h-4 text-primary fill-primary" />
                </div>
              </motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel border-white/40 dark:border-white/10 p-6 md:p-10 space-y-6 md:space-y-8 relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="text-center space-y-3 md:space-y-4 relative z-10">
                <p className="text-sm font-bold text-primary tracking-widest uppercase">
                  Question {currentQuestion + 1}
                </p>
                <h2 className="text-xl md:text-3xl font-bold text-card-foreground leading-relaxed break-keep px-2">
                  {formattedQuestion}
                </h2>
              </div>

              <div className="space-y-3 md:space-y-4 relative z-10">
                {question.options.map((option, index) => {
                  const optionText = language === 'en' && option.textEn
                    ? option.textEn
                    : option.text;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => handleAnswer(option.type as T)}
                        className="w-full p-6 md:p-8 text-left h-auto rounded-2xl text-base md:text-lg border-2 hover:border-primary/50 hover:bg-primary/5 transition-all whitespace-normal break-words"
                        data-testid={`button-option-${index}`}
                      >
                        <span className="flex items-start gap-3 md:gap-4 w-full">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0 mt-0.5">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1 leading-relaxed">{optionText}</span>
                        </span>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
