import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { storage } from '@/lib/storage';
import { useI18n } from '@/lib/i18n';
import { ArrowLeft } from 'lucide-react';

export default function PetInfo() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | null>(null);

  useEffect(() => {
    const state = storage.getState();
    if (!state.petSpecies) {
      setLocation('/');
      return;
    }
    setPetSpecies(state.petSpecies);
  }, [setLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName.trim()) return;

    storage.setPetName(petName.trim());
    
    if (petSpecies === 'dog') {
      setLocation('/dog-quiz');
    } else if (petSpecies === 'cat') {
      setLocation('/cat-quiz');
    }
  };

  if (!petSpecies) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl w-full mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLocation('/')}
          className="mb-8"
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl md:text-8xl">
              {petSpecies === 'dog' ? '🐶' : '🐱'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
              {t('petInfo.title')}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder={t('petInfo.namePlaceholder')}
              className="text-lg p-6 rounded-xl text-center"
              autoFocus
              data-testid="input-pet-name"
            />

            <Button
              type="submit"
              size="lg"
              disabled={!petName.trim()}
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
