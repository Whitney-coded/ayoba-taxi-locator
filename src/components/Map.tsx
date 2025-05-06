
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// Mock data for demonstration
const mockTaxis = [
  { id: 1, lat: -26.195, lng: 28.034, heading: 45, route: "Sandton - Randburg" },
  { id: 2, lat: -26.193, lng: 28.038, heading: 120, route: "Sandton - Soweto" },
  { id: 3, lat: -26.190, lng: 28.032, heading: 270, route: "Park Station - Midrand" },
  { id: 4, lat: -26.197, lng: 28.030, heading: 0, route: "Alexandra - Fourways" },
];

const Map: React.FC = () => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyTaxis, setNearbyTaxis] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // In a real implementation, this would integrate with Mapbox or Google Maps
    // For now, we'll just simulate the map with a placeholder
    
    // Simulate getting user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to Johannesburg
          setUserLocation({ lat: -26.2041, lng: 28.0473 });
        }
      );
    } else {
      // Default to Johannesburg
      setUserLocation({ lat: -26.2041, lng: 28.0473 });
    }
  }, []);

  const findNearbyTaxis = () => {
    if (!userLocation) return;
    
    setIsSearching(true);
    
    // Simulate API call to find nearby taxis
    setTimeout(() => {
      setNearbyTaxis(mockTaxis);
      setIsSearching(false);
      
      toast({
        title: t('taxisFound'),
        description: `${mockTaxis.length} ${t('taxisNearby')}`,
      });
    }, 2000);
  };

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
      <div ref={mapContainerRef} className="w-full h-full relative">
        {/* Simulated map UI for demonstration */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          {userLocation ? (
            <div className="w-full h-full relative bg-sa-gradient bg-opacity-10">
              {/* Simulated map with South African styling */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-sa-red flex items-center justify-center text-white shadow-lg animate-pulse-location">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              
              {/* Render nearby taxis */}
              {nearbyTaxis.map((taxi) => (
                <div 
                  key={taxi.id}
                  className="absolute taxi-marker"
                  style={{ 
                    top: `calc(50% + ${(taxi.lat - (userLocation?.lat || 0)) * 1000}px)`, 
                    left: `calc(50% + ${(taxi.lng - (userLocation?.lng || 0)) * 1000}px)` 
                  }}
                >
                  <Navigation className="w-4 h-4" style={{ transform: `rotate(${taxi.heading}deg)` }} />
                </div>
              ))}
              
              <div className="absolute bottom-4 right-4 p-3 bg-white rounded-lg shadow-lg max-w-xs">
                <p className="font-medium">{t('currentLocation')}: {userLocation ? 'GPS Location' : 'Unknown'}</p>
                {nearbyTaxis.length > 0 && (
                  <div className="mt-2">
                    <p className="font-bold">{nearbyTaxis.length} {t('taxisNearby')}</p>
                    <p className="text-sm text-gray-500">{t('estimatedWait')}: 3-5 {t('minutes')}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">{t('pinLocation')}</p>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 z-10">
        <Button 
          onClick={findNearbyTaxis} 
          className="bg-sa-green hover:bg-sa-green/90 text-white"
          disabled={isSearching || !userLocation}
        >
          {isSearching ? t('searchingForTaxis') : t('findNearbyTaxis')}
        </Button>
      </div>
    </div>
  );
};

export default Map;
