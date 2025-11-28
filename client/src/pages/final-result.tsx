import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { storage } from '@/lib/storage';
import { getTypeInfo } from '@/data/typeInfo';
import { getCompatibility } from '@/data/compatibilityData';
import { getDailyFortune } from '@/data/fortuneData';
import { calculatePetAge, savePetBirthDate, getPetBirthDate } from '@/lib/ageCalculator';
import { Share2, Download, RotateCcw, ArrowLeft, Sparkles, Cake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';
import { toPng } from 'html-to-image';
import type { PetType, OwnerType, PetSpecies } from '@shared/schema';

export default function FinalResult() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { language, t } = useI18n();
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [petResult, setPetResult] = useState<PetType | null>(null);
  const [ownerResult, setOwnerResult] = useState<OwnerType | null>(null);
  const [petSpecies, setPetSpecies] = useState<PetSpecies | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [petAge, setPetAge] = useState<ReturnType<typeof calculatePetAge> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || !state.petName || !state.petResult || !state.ownerName || !state.ownerResult) {
      setLocation('/');
      return;
    }
    setPetName(state.petName);
    setOwnerName(state.ownerName);
    setPetResult(state.petResult);
    setOwnerResult(state.ownerResult);
    setPetSpecies(state.petSpecies);

    // 저장된 생년월일 불러오기
    const savedBirthDate = getPetBirthDate();
    if (savedBirthDate) {
      setBirthDate(savedBirthDate);
      const age = calculatePetAge(state.petSpecies, savedBirthDate);
      setPetAge(age);
    }
  }, [setLocation]);

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBirthDate = e.target.value;
    setBirthDate(newBirthDate);
    savePetBirthDate(newBirthDate);

    if (petSpecies && newBirthDate) {
      const age = calculatePetAge(petSpecies, newBirthDate);
      setPetAge(age);
    }
  };

  const handleRestart = () => {
    storage.clear();
    setLocation('/');
  };

  const handleBack = () => {
    setLocation('/owner-result');
  };

  const handleShareImage = async () => {
    if (!resultRef.current) return;

    setIsGenerating(true);
    try {
      const dataUrl = await toPng(resultRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        skipFonts: true,
        cacheBust: true,
        style: {
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'pet-bti-result.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Pet-BTI 결과',
          text: 'Pet-BTI 궁합 테스트 결과예요! 🐶🐱'
        });
      } else {
        const link = document.createElement('a');
        link.download = 'pet-bti-result.png';
        link.href = dataUrl;
        link.click();

        toast({
          title: t('toast.imageDownloaded'),
          description: t('toast.imageDownloadedDesc'),
        });
      }
    } catch (error) {
      console.error('Share failed:', error);
      toast({
        title: t('toast.shareFailed'),
        description: t('toast.shareFailedDesc'),
        variant: 'destructive'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareLink = async () => {
    const shareUrl = 'https://pet-bti.mini-bell.com';
    const shareText = language === 'ko'
      ? '나랑 반려동물 궁합 테스트 해봐! 🐶🐱'
      : 'Take the Pet-BTI compatibility test with me! 🐶🐱';
    const fullMessage = `${shareText}\n\n${shareUrl}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Pet-BTI',
          text: fullMessage,
        });
        toast({
          title: t('toast.linkShared'),
          description: t('toast.linkSharedDesc'),
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullMessage);
        toast({
          title: t('toast.linkCopied'),
          description: t('toast.linkCopiedDesc'),
        });
      } else {
        toast({
          title: t('toast.copyNotAvailable'),
          description: shareUrl,
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Share link failed:', error);
      try {
        await navigator.clipboard.writeText(fullMessage);
        toast({
          title: t('toast.linkCopied'),
          description: t('toast.linkCopiedDesc'),
        });
      } catch (clipboardError) {
        toast({
          title: t('toast.copyFailed'),
          description: t('toast.copyFailedDesc'),
          variant: 'destructive'
        });
      }
    }
  };

  if (!petResult || !ownerResult) return null;

  const petTypeInfo = getTypeInfo(petResult);
  const ownerTypeInfo = getTypeInfo(ownerResult);
  const compatibility = getCompatibility(petResult, ownerResult);

  if (!petTypeInfo || !ownerTypeInfo || !compatibility) return null;

  const petTypeName = language === 'en' && petTypeInfo.nameEn ? petTypeInfo.nameEn : petTypeInfo.name;
  const ownerTypeName = language === 'en' && ownerTypeInfo.nameEn ? ownerTypeInfo.nameEn : ownerTypeInfo.name;
  const compatibilityTitle = language === 'en' && compatibility.titleEn ? compatibility.titleEn : compatibility.title;
  const compatibilityDescription = language === 'en' && compatibility.descriptionEn ? compatibility.descriptionEn : compatibility.description;

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

        <div ref={resultRef} className="space-y-8 bg-background p-6 rounded-2xl">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('finalResult.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('finalResult.subtitle', { name: petName })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-card border-card-border">
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <div className="text-6xl">{petTypeInfo.emoji}</div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">{petName}</span> {t('finalResult.petTypeLabel')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                    {petTypeName}
                  </h3>
                  <p className="text-sm text-muted-foreground italic px-4 break-words">
                    "{language === 'en' && petTypeInfo.descriptionEn ? petTypeInfo.descriptionEn : petTypeInfo.description}"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-card-border">
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <div className="text-6xl">{ownerTypeInfo.emoji}</div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">{ownerName}</span>{language === 'ko' ? '님의' : '\'s'} {t('finalResult.ownerTypeLabel')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                    {ownerTypeName}
                  </h3>
                  <p className="text-sm text-muted-foreground italic px-4 break-words">
                    "{language === 'en' && ownerTypeInfo.descriptionEn ? ownerTypeInfo.descriptionEn : ownerTypeInfo.description}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="text-8xl md:text-9xl">
                {compatibility.emoji}
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {compatibilityTitle}
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  {compatibilityDescription}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-2 pt-4">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold text-primary">🔗 pet-bti.mini-bell.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            className="w-full h-14 text-lg rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
            onClick={() => setLocation('/compatibility-detail')}
          >
            📄 {language === 'ko' ? '상세 리포트 보기 (무료)' : 'View Detailed Report (Free)'}
          </Button>
        </div>

        {compatibility.tips && compatibility.tips.length > 0 && (
          <Card className="bg-card border-card-border">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground text-center">
                  ✨ {t('finalResult.practicalTips')}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {t('finalResult.practicalTipsDesc')}
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {compatibility.tips.map((tip, index) => {
                  const category = language === 'en' && tip.categoryEn ? tip.categoryEn : tip.category;
                  const content = language === 'en' && tip.contentEn ? tip.contentEn : tip.content;

                  return (
                    <AccordionItem key={index} value={`tip-${index}`}>
                      <AccordionTrigger className="text-left hover-elevate active-elevate-2 px-2" data-testid={`accordion-tip-${index}`}>
                        <span className="flex items-center gap-2">
                          <span className="text-2xl">{tip.icon}</span>
                          <span className="font-semibold">{category}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-2 text-muted-foreground">
                        <p className="leading-relaxed">{content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        )}

        {petResult && ownerResult && (
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-card-foreground">
                  {t('dailyFortune.title')}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('dailyFortune.subtitle', {
                  petName,
                  ownerName,
                  date: new Date().toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { month: 'long', day: 'numeric' })
                })}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {getDailyFortune(petResult, ownerResult).fortunes.map((fortune, index) => {
                  const category = language === 'en' ? fortune.categoryEn : fortune.category;
                  const message = language === 'en' ? fortune.messageEn : fortune.message;

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
                          {'⭐'.repeat(fortune.stars)}
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
        )}

        {petSpecies && (
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Cake className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-card-foreground">
                  {t('ageCalculator.title', { name: petName })}
                </h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  {t('ageCalculator.birthDateLabel')}
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
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-6 text-center space-y-4">
                  <div className="space-y-2">
                    <p className="text-4xl md:text-5xl font-bold text-primary">
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
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Button
              variant="default"
              size="lg"
              onClick={handleShareImage}
              disabled={isGenerating}
              className="w-full h-14 rounded-xl"
              data-testid="button-share-image"
            >
              {isGenerating ? (
                <>
                  <Download className="w-5 h-5 mr-2 animate-pulse" />
                  {t('common.generating')}
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  {t('common.shareImage')}
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {t('common.shareImageDesc')}
            </p>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              size="lg"
              onClick={handleShareLink}
              className="w-full h-12 rounded-xl"
              data-testid="button-share-link"
            >
              <Share2 className="w-5 h-5 mr-2" />
              {t('common.shareLink')}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {t('common.shareLinkDesc')}
            </p>
          </div>

          <Button
            variant="ghost"
            size="lg"
            onClick={handleRestart}
            className="w-full h-12 rounded-xl"
            data-testid="button-restart"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            {t('common.restart')}
          </Button>
        </div>
      </div>
    </div>
  );
}
