
import React from 'react';
import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { MapPin } from 'lucide-react';

const MapPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleFindTaxi = () => {
    toast({
      title: t('taxisFound'),
      description: `4 ${t('taxisNearby')}`,
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-quantum-purple">{t('findTaxi')}</h2>
        <Button onClick={() => navigate(-1)} variant="outline" className="border-quantum-purple text-quantum-purple">
          {t('back')}
        </Button>
      </div>
      
      <div className="w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100 relative">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg text-center">
              <img 
                src="https://placeholder.pics/svg/300x200/DEDEDE/555555/Minibus%20Taxi" 
                alt="Minibus Taxi" 
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{t('findNearbyTaxis')}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {t('pinLocation')}
              </p>
              <Button 
                onClick={handleFindTaxi}
                className={`${isMobile ? 'w-full' : 'px-8'} bg-quantum-purple hover:bg-quantum-purple/90 text-white flex items-center gap-2`}
              >
                <MapPin className="w-4 h-4" />
                {t('findNearbyTaxis')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MapPage;
