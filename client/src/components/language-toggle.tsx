import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full font-medium"
      data-testid="button-language-toggle"
    >
      {language === 'ko' ? 'EN' : '한국어'}
    </Button>
  );
}
