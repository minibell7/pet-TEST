import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { storage } from '@/lib/storage';
import { getTypeInfo } from '@/data/typeInfo';
import { useI18n } from '@/lib/i18n';
import type { PetType } from '@shared/schema';

export default function PetResult() {
  const [, setLocation] = useLocation();
  const { language, t } = useI18n();
  const [petName, setPetName] = useState('');
  const [petResult, setPetResult] = useState<PetType | null>(null);

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || !state.petName || !state.petResult) {
      setLocation('/');
      return;
    }
    setPetName(state.petName);
    setPetResult(state.petResult);
  }, [setLocation]);

  if (!petResult) return null;

  const typeInfo = getTypeInfo(petResult);
  if (!typeInfo) return null;

  const typeName = language === 'en' && typeInfo.nameEn ? typeInfo.nameEn : typeInfo.name;
  const typeDescription = language === 'en' && typeInfo.descriptionEn ? typeInfo.descriptionEn : typeInfo.description;
  const typeTraits = language === 'en' && typeInfo.traitsEn ? typeInfo.traitsEn : typeInfo.traits;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl w-full mx-auto space-y-8">
        <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-6">
            <div className="text-8xl md:text-9xl">
              {typeInfo.emoji}
            </div>
            
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('petResult.title', { name: petName })}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground">
                {typeName}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-primary font-medium italic">
              "{typeDescription}"
            </p>
          </div>

          <Card className="bg-accent/30 border-accent-border">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-lg font-semibold text-accent-foreground">
                {t('petResult.subtitle')}
              </h3>
              <ul className="space-y-3">
                {typeTraits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-3 text-accent-foreground/90">
                    <span className="text-primary flex-shrink-0 mt-1">•</span>
                    <span className="leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6 md:p-8 space-y-4 text-center">
            <p className="text-base md:text-lg text-foreground/80 font-medium">
              {t('petResult.analysisComplete')}
            </p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t('petResult.nextStepDesc')}
            </p>
            <Button
              size="lg"
              onClick={() => setLocation('/owner-info')}
              className="w-full h-14 md:h-16 text-lg rounded-xl shadow-lg"
              data-testid="button-continue"
            >
              {t('petResult.continueToOwner')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
