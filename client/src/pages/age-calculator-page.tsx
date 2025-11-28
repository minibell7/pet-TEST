import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { calculatePetAge } from '@/lib/ageCalculator';
import { ArrowLeft, Cake } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';
import type { PetSpecies } from '@shared/schema';

export default function AgeCalculatorPage() {
  const [, setLocation] = useLocation();
  const { language, t } = useI18n();
  const [petSpecies, setPetSpecies] = useState<PetSpecies | null>(null);
  const [petName, setPetName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [petAge, setPetAge] = useState<ReturnType<typeof calculatePetAge> | null>(null);

  const handleBack = () => {
    setLocation('/');
  };

  const handleSpeciesSelect = (species: PetSpecies) => {
    setPetSpecies(species);
    setPetAge(null);
  };

  const handleCalculate = () => {
    if (petSpecies && birthDate) {
      const age = calculatePetAge(petSpecies, birthDate);
      setPetAge(age);
    }
  };

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setBirthDate(newDate);
    if (petSpecies && newDate) {
      const age = calculatePetAge(petSpecies, newDate);
      setPetAge(age);
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-12">
      <div className="max-w-2xl w-full mx-auto space-y-8">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            data-testid="button-back"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <LanguageToggle />
        </div>

        <div className="text-center space-y-4">
          <div className="text-6xl md:text-8xl">🎂</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('ageCalculator.subtitle')}
          </h1>
          <p className="text-muted-foreground">
            {language === 'ko' 
              ? '우리 아이는 사람으로 몇 살일까요?' 
              : 'How old is your pet in human years?'}
          </p>
        </div>

        {!petSpecies ? (
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-center">
                {language === 'ko' ? '반려동물 종류를 선택하세요' : 'Select your pet type'}
              </h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleSpeciesSelect('dog')}
                className="h-32 text-4xl flex-col gap-2 hover-elevate"
                data-testid="button-select-dog"
              >
                <span>🐕</span>
                <span className="text-lg">{language === 'ko' ? '강아지' : 'Dog'}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleSpeciesSelect('cat')}
                className="h-32 text-4xl flex-col gap-2 hover-elevate"
                data-testid="button-select-cat"
              >
                <span>🐱</span>
                <span className="text-lg">{language === 'ko' ? '고양이' : 'Cat'}</span>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Cake className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-card-foreground">
                  {petSpecies === 'dog' 
                    ? (language === 'ko' ? '강아지 나이 계산기' : 'Dog Age Calculator')
                    : (language === 'ko' ? '고양이 나이 계산기' : 'Cat Age Calculator')}
                </h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  {language === 'ko' ? '이름 (선택사항)' : 'Name (Optional)'}
                </label>
                <Input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder={language === 'ko' ? '예: 바둑이, 나비' : 'e.g., Buddy, Luna'}
                  className="w-full"
                  data-testid="input-pet-name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  {t('ageCalculator.birthDateLabel')} *
                </label>
                <Input
                  type="date"
                  value={birthDate}
                  onChange={handleBirthDateChange}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full"
                  data-testid="input-birth-date"
                />
              </div>

              {petAge && (
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-6 md:p-8 text-center space-y-4 mt-4">
                  {petName && (
                    <p className="text-lg font-medium text-muted-foreground">
                      {petName}
                      {language === 'ko' ? '는' : ' is'}
                    </p>
                  )}
                  <div className="space-y-2">
                    <p className="text-5xl md:text-6xl font-bold text-primary">
                      {petAge.humanYears}{t('ageCalculator.years')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ({t('ageCalculator.realAge')}: {petAge.years}{t('ageCalculator.years')} {petAge.months}{t('ageCalculator.months')})
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-card-foreground">
                      {t('ageCalculator.lifeStage')}: {language === 'en' ? petAge.lifeStageEn : petAge.lifeStage}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      💡 {language === 'en' ? petAge.careTipEn : petAge.careTip}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-4 flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setPetSpecies(null);
                    setPetName('');
                    setBirthDate('');
                    setPetAge(null);
                  }}
                  className="flex-1"
                  data-testid="button-reset"
                >
                  {language === 'ko' ? '다시 선택' : 'Reset'}
                </Button>
                <Button
                  variant="default"
                  onClick={handleBack}
                  className="flex-1"
                  data-testid="button-home"
                >
                  {language === 'ko' ? '홈으로' : 'Home'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 p-4">
          <h4 className="font-semibold text-sm mb-2 text-card-foreground">
            {language === 'ko' ? '💡 알고 계셨나요?' : '💡 Did you know?'}
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>
              {language === 'ko' 
                ? '• 강아지: 첫 1년 = 15세, 2년째 = 24세, 이후 매년 +5세' 
                : '• Dogs: 1st year = 15, 2nd year = 24, then +5 years/year'}
            </li>
            <li>
              {language === 'ko' 
                ? '• 고양이: 첫 1년 = 15세, 2년째 = 24세, 이후 매년 +4세' 
                : '• Cats: 1st year = 15, 2nd year = 24, then +4 years/year'}
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
