import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { storage } from '@/lib/storage';
import { useI18n } from '@/lib/i18n';
import { ArrowLeft } from 'lucide-react';

export default function OwnerInfo() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();
  const [ownerName, setOwnerName] = useState('');
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | null>(null);

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies || !state.petName || !state.petResult) {
      setLocation('/');
      return;
    }
    setPetSpecies(state.petSpecies);
  }, [setLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName.trim()) return;

    storage.setOwnerName(ownerName.trim());
    setLocation('/owner-quiz');
  };

  if (!petSpecies) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl w-full mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLocation('/pet-result')}
          className="mb-8"
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl md:text-8xl">
              {petSpecies === 'dog' ? '💪' : '🧑‍🍳'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
              {t('ownerInfo.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('ownerInfo.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder={t('ownerInfo.namePlaceholder')}
              className="text-lg p-6 rounded-xl text-center"
              autoFocus
              data-testid="input-owner-name"
            />

            <Button
              type="submit"
              size="lg"
              disabled={!ownerName.trim()}
              className="w-full h-14 md:h-16 text-lg rounded-xl shadow-lg"
              data-testid="button-next"
            >
              {t('common.next')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
