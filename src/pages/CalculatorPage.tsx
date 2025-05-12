
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import Calculator from '@/components/Calculator';

const CalculatorPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-sa-black">{t('taxiCalculator')}</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">{t('calculatorDescription')}</p>
        
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
