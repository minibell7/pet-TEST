import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { storage } from '@/lib/storage';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useI18n } from '@/lib/i18n';
import { Sparkles, Cake } from 'lucide-react';
import type { PetSpecies } from '@shared/schema';

export default function Landing() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();

  const handlePetSelection = (species: PetSpecies) => {
    storage.setPetSpecies(species);
    setLocation('/pet-info');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div className="max-w-2xl w-full mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {t('landing.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {t('landing.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-foreground/80">
            {t('landing.question')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Button
              size="lg"
              onClick={() => handlePetSelection('dog')}
              className="h-24 md:h-28 text-2xl md:text-3xl rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
              data-testid="button-select-dog"
            >
              <span className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">🐶</span>
                <span>{t('landing.dog')}</span>
              </span>
            </Button>

            <Button
              size="lg"
              onClick={() => handlePetSelection('cat')}
              className="h-24 md:h-28 text-2xl md:text-3xl rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
              data-testid="button-select-cat"
            >
              <span className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">🐱</span>
                <span>{t('landing.cat')}</span>
              </span>
            </Button>
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-border/40">
          <p className="text-lg font-semibold text-foreground/80">
            {t('landing.quickFeatures')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/daily-fortune">
              <Card className="p-6 hover-elevate cursor-pointer transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔮</div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-lg text-card-foreground flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {t('landing.dailyFortune')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('landing.dailyFortuneDesc')}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/age-calculator">
              <Card className="p-6 hover-elevate cursor-pointer transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎂</div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-lg text-card-foreground flex items-center gap-2">
                      <Cake className="w-5 h-5" />
                      {t('landing.ageCalculator')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('landing.ageCalculatorDesc')}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
