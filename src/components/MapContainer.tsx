
import React, { useRef, useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface MapContainerProps {
  onMapLoad: (map: any) => void;
  onLocationPin: (location: { lat: number; lng: number }) => void;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyDwQEkZKtkCVQTuOoiSL0LH3wagDXkymhY';

const MapContainer: React.FC<MapContainerProps> = ({ onMapLoad, onLocationPin }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleMapInstance = useRef<any>(null);

  useEffect(() => {
    console.log('MapContainer: Initializing Google Maps');
    setIsLoading(true);
    
    const initializeGoogleMaps = () => {
      if (!mapRef.current) {
        console.error('Map container ref not available');
        return;
      }

      try {
        console.log('Creating Google Maps instance');
        const defaultCenter = { lat: -26.2041, lng: 28.0473 }; // Johannesburg
        
        googleMapInstance.current = new window.google.maps.Map(mapRef.current, {
          zoom: 13,
          center: defaultCenter,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }]
            }
          ]
        });

        // Add click listener for location pinning
        googleMapInstance.current.addListener('click', (event: any) => {
          console.log('Map clicked at:', event.latLng.lat(), event.latLng.lng());
          const location = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };
          onLocationPin(location);
        });

        console.log('Google Maps initialized successfully');
        setIsLoading(false);
        onMapLoad(googleMapInstance.current);
        
        toast({
          title: 'Map Loaded',
          description: 'Google Maps is ready to use',
        });

      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        setIsLoading(false);
        toast({
          title: 'Map Error',
          description: 'Failed to load Google Maps',
          variant: 'destructive'
        });
      }
    };

    const loadGoogleMapsScript = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        console.log('Google Maps already available');
        initializeGoogleMaps();
        return;
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        console.log('Google Maps script already exists, waiting for load');
        existingScript.addEventListener('load', initializeGoogleMaps);
        return;
      }

      console.log('Loading Google Maps script');
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Google Maps script loaded successfully');
        initializeGoogleMaps();
      };
      
      script.onerror = (error) => {
        console.error('Failed to load Google Maps script:', error);
        setIsLoading(false);
        toast({
          title: 'Script Load Error',
          description: 'Failed to load Google Maps script',
          variant: 'destructive'
        });
      };
      
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    // Cleanup function
    return () => {
      if (googleMapInstance.current) {
        // Clear all listeners
        window.google?.maps?.event?.clearInstanceListeners(googleMapInstance.current);
      }
    };
  }, [onMapLoad, onLocationPin]);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sa-green mx-auto mb-2"></div>
            <p className="text-gray-600">Loading Google Maps...</p>
          </div>
        </div>
      )}
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
};

export default MapContainer;
