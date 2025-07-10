
import React, { useRef, useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface MapContainerProps {
  onMapLoad: (map: any) => void;
  onLocationPin: (location: { lat: number; lng: number }) => void;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyDwQEkZKtkCVQTuOoiSL0LH3wagDXkymhY';

const MapContainer: React.FC<MapContainerProps> = ({ onMapLoad, onLocationPin }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    console.log('MapContainer: Starting to load Google Maps');
    
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        console.log('Google Maps already loaded');
        initializeMap();
        return;
      }

      console.log('Loading Google Maps script');
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('Google Maps script loaded successfully');
        initializeMap();
      };
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError('Failed to load Google Maps');
        initializeFallbackMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      try {
        if (!mapRef.current || !window.google || !window.google.maps) {
          console.error('MapContainer: Missing required elements for map initialization');
          initializeFallbackMap();
          return;
        }

        console.log('Initializing Google Maps');
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

        // Add click listener for pinning locations
        map.addListener('click', (event: any) => {
          console.log('Map clicked:', event.latLng);
          if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            onLocationPin({ lat, lng });
          }
        });

        console.log('Google Maps initialized successfully');
        setIsGoogleMapsLoaded(true);
        onMapLoad(map);
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        setMapError('Google Maps API error - billing not enabled');
        initializeFallbackMap();
      }
    };

    const initializeFallbackMap = () => {
      console.log('Initializing fallback map');
      if (!mapRef.current) return;

      // Create a simple interactive fallback map
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gray-200 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Map Unavailable</h3>
              <p class="text-gray-600 mb-4">Google Maps billing is not enabled for this API key.</p>
              <div class="text-sm text-gray-500 mb-4">
                <p>Default location: Johannesburg, South Africa</p>
                <p>Lat: -26.2041, Lng: 28.0473</p>
              </div>
              <button 
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
                onclick="window.mapContainer.pinLocation(-26.2041, 28.0473)"
              >
                Pin Default Location
              </button>
            </div>
          </div>
          <div class="absolute top-4 left-4 bg-white rounded p-2 shadow">
            <p class="text-xs text-gray-600">Click to pin location</p>
          </div>
        </div>
      `;

      // Create global reference for button click
      (window as any).mapContainer = {
        pinLocation: (lat: number, lng: number) => {
          console.log('Fallback map: Pinning location', { lat, lng });
          onLocationPin({ lat, lng });
          toast({
            title: 'Location Pinned',
            description: `Pinned at ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
          });
        }
      };

      // Add click handler to the fallback map
      mapRef.current.addEventListener('click', (event) => {
        const rect = mapRef.current!.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Convert click position to rough coordinates (simplified)
        const lat = -26.2041 + (y - rect.height / 2) * 0.001;
        const lng = 28.0473 + (x - rect.width / 2) * 0.001;
        
        console.log('Fallback map clicked:', { lat, lng });
        onLocationPin({ lat, lng });
      });

      // Signal that fallback map is ready
      onMapLoad(null);
    };

    loadGoogleMaps();
  }, [onMapLoad, onLocationPin]);

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full" />
      {mapError && (
        <div className="absolute top-2 right-2 bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
          {mapError}
        </div>
      )}
    </div>
  );
};

export default MapContainer;
