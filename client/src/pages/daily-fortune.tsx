import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { storage } from '@/lib/storage';
import { getDailyFortune } from '@/data/fortuneData';
import { getTypeInfo } from '@/data/typeInfo';
import { ArrowLeft, Sparkles, RefreshCw } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';
import type { PetType, OwnerType } from '@shared/schema';

const PET_TYPES: PetType[] = ['D-E', 'D-F', 'D-Z', 'D-S', 'C-R', 'C-G', 'C-C', 'C-N'];
const OWNER_TYPES: OwnerType[] = ['O-T', 'O-C', 'O-L', 'O-P'];

export default function DailyFortune() {
  const [, setLocation] = useLocation();
  const { language, t } = useI18n();
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [selectedPetType, setSelectedPetType] = useState<PetType | null>(null);
  const [selectedOwnerType, setSelectedOwnerType] = useState<OwnerType | null>(null);
  const [showFortune, setShowFortune] = useState(false);

  useEffect(() => {
    const state = storage.getState();
    if (state.petResult && state.ownerResult) {
      setPetName(state.petName || '');
      setOwnerName(state.ownerName || '');
      setSelectedPetType(state.petResult);
      setSelectedOwnerType(state.ownerResult);
      setShowFortune(true);
    }
  }, []);

  const handleBack = () => {
    setLocation('/');
  };

  const handleViewFortune = () => {
    if (selectedPetType && selectedOwnerType) {
      setShowFortune(true);
    }
  };

  const today = new Date();
  const dateString = today.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-12">
      <div className="max-w-3xl w-full mx-auto space-y-8">
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
          <div className="text-6xl md:text-8xl">🔮</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('dailyFortune.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {dateString}
          </p>
        </div>

        {!showFortune ? (
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-center">
                {t('dailyFortune.selectTypes')}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('dailyFortune.selectTypesDesc')}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t('dailyFortune.petType')}
                </label>
                <Select value={selectedPetType || ''} onValueChange={(value) => setSelectedPetType(value as PetType)}>
                  <SelectTrigger data-testid="select-pet-type">
                    <SelectValue placeholder={t('dailyFortune.selectPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {PET_TYPES.map((type) => {
                      const info = getTypeInfo(type);
                      if (!info) return null;
                      const name = language === 'en' && info.nameEn ? info.nameEn : info.name;
                      return (
                        <SelectItem key={type} value={type}>
                          {info.emoji} {name} ({type})
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t('dailyFortune.ownerType')}
                </label>
                <Select value={selectedOwnerType || ''} onValueChange={(value) => setSelectedOwnerType(value as OwnerType)}>
                  <SelectTrigger data-testid="select-owner-type">
                    <SelectValue placeholder={t('dailyFortune.selectPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {OWNER_TYPES.map((type) => {
                      const info = getTypeInfo(type);
                      if (!info) return null;
                      const name = language === 'en' && info.nameEn ? info.nameEn : info.name;
                      return (
                        <SelectItem key={type} value={type}>
                          {info.emoji} {name} ({type})
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="default"
                size="lg"
                onClick={handleViewFortune}
                disabled={!selectedPetType || !selectedOwnerType}
                className="w-full"
                data-testid="button-view-fortune"
              >
                {t('dailyFortune.viewFortune')}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {petName && ownerName && (
              <p className="text-center text-sm text-muted-foreground">
                {petName} & {ownerName}
              </p>
            )}

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-card-foreground">
                      {t('dailyFortune.eightFortunes')}
                    </h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowFortune(false)}
                    data-testid="button-change-types"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getDailyFortune(selectedPetType!, selectedOwnerType!).fortunes.map((fortuneItem, index) => {
                    const category = language === 'en' ? fortuneItem.categoryEn : fortuneItem.category;
                    const message = language === 'en' ? fortuneItem.messageEn : fortuneItem.message;
                    
                    return (
                      <div 
                        key={index} 
                        className="bg-white/50 dark:bg-black/20 rounded-lg p-4 md:p-6 space-y-3 hover-elevate"
                        data-testid={`fortune-card-${index}`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-lg text-card-foreground">
                            {category}
                          </p>
                          <p className="text-xl">
                            {'⭐'.repeat(fortuneItem.stars)}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {message}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-muted-foreground mb-4">
                💡 {t('dailyFortune.updateDaily')}
              </p>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full md:w-auto" data-testid="button-home">
                  {t('dailyFortune.backToHome')}
                </Button>
              </Link>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
