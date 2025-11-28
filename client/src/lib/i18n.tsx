import { createContext, useContext, useState } from 'react';
import { ko } from '@/locales/ko';
import { en } from '@/locales/en';

export type Language = 'ko' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = { ko, en };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pet-bti-language');
    if (saved) return saved as Language;
    
    // 브라우저 언어 자동 감지
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ko') ? 'ko' : 'en';
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('pet-bti-language', lang);
    setLanguageState(lang);
  };

  const t = (key: string, params?: Record<string, string>) => {
    let text = getNestedValue(translations[language], key);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }
    
    return text;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
