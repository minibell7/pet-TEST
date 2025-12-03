import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { storage } from '@/lib/storage';
import { getTypeInfo } from '@/data/typeInfo';
import { getCompatibility } from '@/data/compatibilityData';
import { Share2, Download, RotateCcw, ArrowLeft, Sparkles, Camera, Star } from 'lucide-react';
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
  const [isGenerating, setIsGenerating] = useState(false);
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
  }, [setLocation]);

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
          fontFamily: 'Pretendard, system-ui, sans-serif',
        }
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'pet-bti-photocard.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Pet-BTI Photo Card',
          text: 'Check out our Pet-BTI result! 📸'
        });
      } else {
        const link = document.createElement('a');
        link.download = 'pet-bti-photocard.png';
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
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-md w-full mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <LanguageToggle />
        </div>

        {/* Photo Card Area */}
        <div className="relative group perspective-1000">
          <div
            ref={resultRef}
            className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-black/60 dark:to-black/30 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 shadow-2xl overflow-hidden"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="h-full flex flex-col items-center justify-between relative z-10">
              {/* Top Section: Compatibility Score */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/30 dark:bg-black/30 border border-white/20 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold tracking-wider">PET-BTI MATCH</span>
                </div>
                <div className="text-6xl animate-bounce mt-4 filter drop-shadow-lg">
                  {compatibility.emoji}
                </div>
              </div>

              {/* Middle Section: Characters */}
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="text-center space-y-2">
                  <div className="text-5xl filter drop-shadow-md">{petTypeInfo.emoji}</div>
                  <div className="text-xs font-bold opacity-70">{petName}</div>
                </div>
                <div className="text-2xl text-primary/50">✕</div>
                <div className="text-center space-y-2">
                  <div className="text-5xl filter drop-shadow-md">{ownerTypeInfo.emoji}</div>
                  <div className="text-xs font-bold opacity-70">{ownerName}</div>
                </div>
              </div>

              {/* Bottom Section: Result Text */}
              <div className="text-center space-y-3 w-full bg-white/30 dark:bg-black/30 p-4 rounded-2xl border border-white/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
                  {compatibilityTitle}
                </h2>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {compatibilityDescription}
                </p>
              </div>

              {/* Footer */}
              <div className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">
                pet-bti.mini-bell.com
              </div>
            </div>
          </div>

          {/* 3D Tilt Effect Hint */}
          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-muted-foreground animate-pulse">
            {t('common.shareImageDesc')}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleShareImage}
            disabled={isGenerating}
            className="h-14 rounded-xl bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            {isGenerating ? (
              <span className="animate-pulse">Saving...</span>
            ) : (
              <>
                <Camera className="w-5 h-5 mr-2" />
                Save Card
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => setLocation('/compatibility-detail')}
            className="h-14 rounded-xl border-2 hover:bg-accent/5"
          >
            View Detail
          </Button>
        </div>

        {/* Recommended Features (Clutter-free) */}
        <div className="space-y-4 pt-8 border-t border-border/50">
          <h3 className="text-lg font-bold text-center opacity-80">More Fun Features</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card
              className="p-4 cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-purple-500/20"
              onClick={() => setLocation('/daily-fortune')}
            >
              <div className="text-center space-y-2">
                <div className="text-2xl">🔮</div>
                <div className="text-sm font-bold">Daily Fortune</div>
              </div>
            </Card>
            <Card
              className="p-4 cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-orange-500/5 to-yellow-500/5 border-orange-500/20"
              onClick={() => setLocation('/pet-translator')}
            >
              <div className="text-center space-y-2">
                <div className="text-2xl">🗣️</div>
                <div className="text-sm font-bold">Translator</div>
              </div>
            </Card>
          </div>

          <Button
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground"
            onClick={handleRestart}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart Test
          </Button>
        </div>
      </div>
    </div>
  );
}
