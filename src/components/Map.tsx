
import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import MapContainer from './MapContainer';
import MapControls from './MapControls';
import { addPinMarker, addUserMarker, addTaxiMarkers } from './MapMarkers';

// Mock data for demonstration
const mockTaxis = [
  { id: 1, lat: -26.195, lng: 28.034, heading: 45, route: "Sandton - Randburg" },
  { id: 2, lat: -26.193, lng: 28.038, heading: 120, route: "Sandton - Soweto" },
  { id: 3, lat: -26.190, lng: 28.032, heading: 270, route: "Park Station - Midrand" },
  { id: 4, lat: -26.197, lng: 28.030, heading: 0, route: "Alexandra - Fourways" },
];

const Map: React.FC = () => {
  const { t } = useLanguage();
  const googleMapRef = useRef<any>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyTaxis, setNearbyTaxis] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [pinnedLocation, setPinnedLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleMapLoad = (map: any) => {
    googleMapRef.current = map;

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userPos);
          map.setCenter(userPos);
          addUserMarker(map, userPos);
        },
        (error) => {
          console.error("Error getting location:", error);
          const defaultCenter = { lat: -26.2041, lng: 28.0473 };
          setUserLocation(defaultCenter);
        }
      );
    } else {
      const defaultCenter = { lat: -26.2041, lng: 28.0473 };
      setUserLocation(defaultCenter);
    }
  };

  const handleLocationPin = (location: { lat: number; lng: number }) => {
    setPinnedLocation(location);
    if (googleMapRef.current) {
      addPinMarker(googleMapRef.current, location);
    }
  };

  const findNearbyTaxis = () => {
    if (!userLocation && !pinnedLocation) return;
    
    setIsSearching(true);
    
    // Simulate API call to find nearby taxis
    setTimeout(() => {
      setNearbyTaxis(mockTaxis);
      setIsSearching(false);
      
      // Add taxi markers to map
      if (googleMapRef.current) {
        addTaxiMarkers(googleMapRef.current, mockTaxis);
      }
      
      toast({
        title: t('taxisFound'),
        description: `${mockTaxis.length} ${t('taxisNearby')}`,
      });
    }, 2000);
  };

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
      <MapContainer 
        onMapLoad={handleMapLoad}
        onLocationPin={handleLocationPin}
      />
      
      <MapControls
        onFindTaxis={findNearbyTaxis}
        isSearching={isSearching}
        canSearch={!!(userLocation || pinnedLocation)}
        pinnedLocation={pinnedLocation}
        nearbyTaxis={nearbyTaxis}
      />
    </div>
  );
};

export default Map;
