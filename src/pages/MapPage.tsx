
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useNavigate } from 'react-router-dom';

// Mock data for demonstration
const mockTaxis = [
  { id: 1, lat: -26.195, lng: 28.034, heading: 45, route: "Sandton - Randburg" },
  { id: 2, lat: -26.193, lng: 28.038, heading: 120, route: "Sandton - Soweto" },
  { id: 3, lat: -26.190, lng: 28.032, heading: 270, route: "Park Station - Midrand" },
  { id: 4, lat: -26.197, lng: 28.030, heading: 0, route: "Alexandra - Fourways" },
];

// MapContent needs to be inside the language provider to access translations
const MapContent = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = React.useState(false);
  const [nearbyTaxis, setNearbyTaxis] = React.useState<any[]>([]);
  const [userLocation, setUserLocation] = React.useState<{ lat: number; lng: number } | null>(null);

  React.useEffect(() => {
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
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-quantum-purple">{t('gpsLocation')}</h2>
        <Button onClick={() => navigate(-1)} variant="outline" className="border-quantum-purple text-quantum-purple">
          {t('back')}
        </Button>
      </div>
      
      <div className="w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100 relative">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            {userLocation ? (
              <div className="w-full h-full relative bg-quantum-gradient bg-opacity-10">
                {/* Simulated map with Quantum styling */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-quantum-purple flex items-center justify-center text-white shadow-lg animate-pulse-location">
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
              <p className="text-gray-500">{t('loadingLocation')}</p>
            )}
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 z-10">
          <Button 
            onClick={findNearbyTaxis} 
            className="bg-quantum-purple hover:bg-quantum-purple/90 text-white"
            disabled={isSearching || !userLocation}
          >
            {isSearching ? t('searchingForTaxis') : t('findNearbyTaxis')}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

// Main component wrapped with LanguageProvider
const MapPage = () => {
  return (
    <LanguageProvider>
      <MapContent />
    </LanguageProvider>
  );
};

export default MapPage;
