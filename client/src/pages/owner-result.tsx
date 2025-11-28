import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { storage } from '@/lib/storage';
import { getTypeInfo } from '@/data/typeInfo';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import type { OwnerType } from '@shared/schema';

export default function OwnerResult() {
  const [, setLocation] = useLocation();
  const { language, t } = useI18n();
  const [result, setResult] = useState<OwnerType | null>(null);
  const [ownerName, setOwnerName] = useState('');

  useEffect(() => {
    const state = storage.getState();
    if (!state.ownerResult || !state.ownerName) {
      setLocation('/');
      return;
    }
    setResult(state.ownerResult);
    setOwnerName(state.ownerName);
  }, [setLocation]);

  const handleContinue = () => {
    setLocation('/loading');
  };

  const handleBack = () => {
    setLocation('/owner-quiz');
  };

  if (!result) return null;

  const typeInfo = getTypeInfo(result);
  if (!typeInfo) return null;

  const typeName = language === 'en' && typeInfo.nameEn ? typeInfo.nameEn : typeInfo.name;
  const description = language === 'en' && typeInfo.descriptionEn ? typeInfo.descriptionEn : typeInfo.description;
  const traits = language === 'en' && typeInfo.traitsEn ? typeInfo.traitsEn : typeInfo.traits;

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-12">
      <div className="max-w-2xl w-full mx-auto space-y-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="mb-4"
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <div className="text-center space-y-4">
          <div className="text-8xl md:text-9xl animate-bounce-slow">
            {typeInfo.emoji}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-bold">{ownerName}</span>{language === 'ko' ? '님의' : '\'s'} {t('ownerResult.typeLabel')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {typeName}
          </h2>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8 md:p-10 space-y-6">
            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed break-words">
                "{description}"
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                {t('ownerResult.characteristics')}
              </h3>
              <ul className="space-y-3">
                {traits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-primary text-xl flex-shrink-0">✓</span>
                    <span className="leading-relaxed break-words">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Button
          size="lg"
          onClick={handleContinue}
          className="w-full h-14 rounded-xl text-lg"
          data-testid="button-continue"
        >
          {t('ownerResult.checkCompatibility')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
