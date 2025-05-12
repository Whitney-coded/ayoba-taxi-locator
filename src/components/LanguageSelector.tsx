
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SupportedLanguage } from '../utils/translations';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: SupportedLanguage; name: string }[] = [
    { code: 'en', name: t('english') },
    { code: 'zu', name: t('zulu') },
    { code: 'xh', name: t('xhosa') },
    { code: 'af', name: t('afrikaans') },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2 flex items-center gap-2">
          <span className="rounded-full w-5 h-5 bg-quantum-purple flex items-center justify-center text-white text-xs font-bold">
            {language.toUpperCase()}
          </span>
          <span>{languages.find(l => l.code === language)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`${language === lang.code ? 'bg-quantum-purple text-white' : ''}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
