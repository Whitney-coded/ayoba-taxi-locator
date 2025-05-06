
import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-sa-gradient flex items-center justify-center text-white font-bold text-xl">S</div>
        <h1 className="text-xl font-bold text-sa-black">{t('appName')}</h1>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
