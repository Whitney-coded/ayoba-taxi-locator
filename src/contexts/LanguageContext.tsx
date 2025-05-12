
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, SupportedLanguage } from '../utils/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  const t = (key: string): string => {
    if (!key) return '';
    
    // Handle key lookup safely
    const currentTranslations = translations[language];
    if (currentTranslations && key in currentTranslations) {
      return currentTranslations[key];
    }
    
    // Fallback to English
    const englishTranslations = translations['en'];
    if (englishTranslations && key in englishTranslations) {
      return englishTranslations[key];
    }
    
    // Last resort fallback to the key itself
    return key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
