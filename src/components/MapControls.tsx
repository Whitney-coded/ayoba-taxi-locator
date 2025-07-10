
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface MapControlsProps {
  onFindTaxis: () => void;
  isSearching: boolean;
  canSearch: boolean;
  pinnedLocation: { lat: number; lng: number } | null;
  nearbyTaxis: any[];
}

const MapControls: React.FC<MapControlsProps> = ({
  onFindTaxis,
  isSearching,
  canSearch,
  pinnedLocation,
  nearbyTaxis
}) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="absolute bottom-4 left-4 z-10 space-y-2">
        <Button 
          onClick={onFindTaxis} 
          className="bg-sa-green hover:bg-sa-green/90 text-white"
          disabled={isSearching || !canSearch}
        >
          {isSearching ? t('searchingForTaxis') : t('findNearbyTaxis')}
        </Button>
        
        {pinnedLocation && (
          <div className="bg-white p-2 rounded-lg shadow-lg text-sm">
            <p className="font-medium text-sa-black">Pinned Location:</p>
            <p className="text-gray-600">
              {pinnedLocation.lat.toFixed(4)}, {pinnedLocation.lng.toFixed(4)}
            </p>
          </div>
        )}
      </div>
      
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm text-gray-600 mb-2">Click on the map to pin a location</p>
        {nearbyTaxis.length > 0 && (
          <div>
            <p className="font-bold text-sa-black">{nearbyTaxis.length} {t('taxisNearby')}</p>
            <p className="text-sm text-gray-500">{t('estimatedWait')}: 3-5 {t('minutes')}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MapControls;
