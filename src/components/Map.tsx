
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CarTaxiFront } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';

const Map: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Show a simple minibus taxi image with a message
  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://placeholder.pics/svg/300x200/DEDEDE/555555/Minibus%20Taxi" 
                alt="Minibus Taxi" 
                className="w-full max-w-[250px] h-auto object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-quantum-purple">{t('appName')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('welcomeMessage')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
