
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyDwQEkZKtkCVQTuOoiSL0LH3wagDXkymhY';

// Mock data for demonstration
const mockTaxis = [
  { id: 1, lat: -26.195, lng: 28.034, heading: 45, route: "Sandton - Randburg" },
  { id: 2, lat: -26.193, lng: 28.038, heading: 120, route: "Sandton - Soweto" },
  { id: 3, lat: -26.190, lng: 28.032, heading: 270, route: "Park Station - Midrand" },
  { id: 4, lat: -26.197, lng: 28.030, heading: 0, route: "Alexandra - Fourways" },
];

const Map: React.FC = () => {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyTaxis, setNearbyTaxis] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [pinnedLocation, setPinnedLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.google || !window.google.maps) return;

    // Default to Johannesburg
    const defaultCenter = { lat: -26.2041, lng: 28.0473 };
    
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: defaultCenter,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    googleMapRef.current = map;

    // Add click listener for pinning locations
    map.addListener('click', (event: any) => {
      if (event.latLng) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setPinnedLocation({ lat, lng });
        
        // Add marker for pinned location
        new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: 'Pinned Location',
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ef4444">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(30, 30)
          }
        });

        toast({
          title: t('locationPinned'),
          description: `Location pinned at ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        });
      }
    });

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
          
          // Add marker for user location
          new window.google.maps.Marker({
            position: userPos,
            map: map,
            title: 'Your Location',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#22c55e">
                  <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(20, 20)
            }
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setUserLocation(defaultCenter);
        }
      );
    } else {
      setUserLocation(defaultCenter);
    }
  };

  const findNearbyTaxis = () => {
    if (!userLocation && !pinnedLocation) return;
    
    setIsSearching(true);
    
    // Use pinned location if available, otherwise use user location
    const searchLocation = pinnedLocation || userLocation;
    
    // Simulate API call to find nearby taxis
    setTimeout(() => {
      setNearbyTaxis(mockTaxis);
      setIsSearching(false);
      
      // Add taxi markers to map
      if (googleMapRef.current && window.google && window.google.maps) {
        mockTaxis.forEach(taxi => {
          new window.google.maps.Marker({
            position: { lat: taxi.lat, lng: taxi.lng },
            map: googleMapRef.current,
            title: taxi.route,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6" transform="rotate(${taxi.heading})">
                  <polygon points="3,11 22,2 13,21 11,13 3,11" fill="#3b82f6"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(24, 24)
            }
          });
        });
      }
      
      toast({
        title: t('taxisFound'),
        description: `${mockTaxis.length} ${t('taxisNearby')}`,
      });
    }, 2000);
  };

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
      <div ref={mapRef} className="w-full h-full" />
      
      <div className="absolute bottom-4 left-4 z-10 space-y-2">
        <Button 
          onClick={findNearbyTaxis} 
          className="bg-sa-green hover:bg-sa-green/90 text-white"
          disabled={isSearching || (!userLocation && !pinnedLocation)}
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
    </div>
  );
};

export default Map;
