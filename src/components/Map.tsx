
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, CarTaxiFront } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Map: React.FC = () => {
  const { t } = useLanguage();
  const [isSearching, setIsSearching] = useState(false);
  const [nearbyTaxis, setNearbyTaxis] = useState<any[]>([]);
  const isMobile = useIsMobile();

  const findNearbyTaxis = () => {
    setIsSearching(true);
    
    // Simulate API call to find nearby taxis
    setTimeout(() => {
      setNearbyTaxis([1, 2, 3, 4]); // Just to simulate finding taxis
      setIsSearching(false);
      
      toast({
        title: t('taxisFound'),
        description: `4 ${t('taxisNearby')}`,
      });
    }, 2000);
  };

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <CarTaxiFront size={isMobile ? 80 : 120} className="text-quantum-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-quantum-purple">{t('findNearbyTaxis')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('pinLocation')}
            </p>
            <Button 
              onClick={findNearbyTaxis} 
              className={`${isMobile ? 'w-full' : 'px-8'} bg-quantum-purple hover:bg-quantum-purple/90 text-white flex items-center gap-2 justify-center`}
              disabled={isSearching}
            >
              <MapPin className="w-5 h-5" />
              {isSearching ? t('searchingForTaxis') : t('findNearbyTaxis')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
