import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { storage } from '@/lib/storage';
import { useI18n } from '@/lib/i18n';

export default function Loading() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || !state.petName || !state.petResult || !state.ownerResult) {
      setLocation('/');
      return;
    }

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const timer = setTimeout(() => {
      setLocation('/final-result');
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4">
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center items-center gap-3">
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🐶</span>
            <span className="text-5xl">❤️</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🙋</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('loading.analyzing')}{dots}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t('loading.almostDone')}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
