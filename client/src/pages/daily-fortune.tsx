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
import { ArrowLeft, Sparkles, RefreshCw, Star, Gift } from 'lucide-react';
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

  const today = new Date();
  const dateString = today.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  // Random Lucky Item Generator (Simple implementation)
  const getLuckyItem = () => {
    const items = language === 'ko'
      ? ['간식', '산책', '장난감', '새 옷', '포옹', '낮잠']
      : ['Treat', 'Walk', 'Toy', 'New Outfit', 'Hug', 'Nap'];
    const colors = language === 'ko'
      ? ['빨강', '파랑', '노랑', '초록', '보라', '핑크']
      : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Pink'];

    const randomItem = items[today.getDate() % items.length];
    const randomColor = colors[today.getDay() % colors.length];

    return { item: randomItem, color: randomColor };
  };

  const lucky = getLuckyItem();

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-3xl w-full mx-auto space-y-8">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <LanguageToggle />
        </div>

        <div className="text-center space-y-4">
          <div className="text-6xl md:text-8xl animate-bounce">🔮</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('dailyFortune.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {dateString}
          </p>
        </div>

        {!showFortune ? (
          <Card className="glass-panel border-white/20">
            <CardHeader>
              <h3 className="text-xl font-bold text-center">
                {t('dailyFortune.selectTypes')}
              </h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <Select value={selectedPetType || ''} onValueChange={(value) => setSelectedPetType(value as PetType)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t('dailyFortune.petType')} />
                  </SelectTrigger>
                  <SelectContent>
                    {PET_TYPES.map((type) => {
                      const info = getTypeInfo(type);
                      if (!info) return null;
                      return (
                        <SelectItem key={type} value={type}>
                          {info.emoji} {language === 'en' ? info.nameEn : info.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <Select value={selectedOwnerType || ''} onValueChange={(value) => setSelectedOwnerType(value as OwnerType)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t('dailyFortune.ownerType')} />
                  </SelectTrigger>
                  <SelectContent>
                    {OWNER_TYPES.map((type) => {
                      const info = getTypeInfo(type);
                      if (!info) return null;
                      return (
                        <SelectItem key={type} value={type}>
                          {info.emoji} {language === 'en' ? info.nameEn : info.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <Button
                size="lg"
                onClick={() => setShowFortune(true)}
                disabled={!selectedPetType || !selectedOwnerType}
                className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
              >
                {t('dailyFortune.viewFortune')}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Lucky Item Card */}
            <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-yellow-200">
              <CardContent className="p-6 flex items-center justify-around text-center">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Lucky Item</p>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2">
                    <Gift className="w-6 h-6" /> {lucky.item}
                  </div>
                </div>
                <div className="w-px h-12 bg-yellow-300 dark:bg-yellow-700" />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Lucky Color</p>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: lucky.color.toLowerCase() }} />
                    {lucky.color}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {getDailyFortune(selectedPetType!, selectedOwnerType!).fortunes.map((fortuneItem, index) => {
                const category = language === 'en' ? fortuneItem.categoryEn : fortuneItem.category;
                const message = language === 'en' ? fortuneItem.messageEn : fortuneItem.message;

                return (
                  <Card
                    key={index}
                    className="glass-panel hover-elevate border-white/20 overflow-hidden relative"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                          {index === 0 ? '❤️' : index === 1 ? '💰' : index === 2 ? '💪' : '🤝'} {category}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < fortuneItem.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {message}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFortune(false)}
              className="w-full rounded-xl"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Another
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
