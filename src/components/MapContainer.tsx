
import React, { useRef, useEffect } from 'react';

interface MapContainerProps {
  onMapLoad: (map: any) => void;
  onLocationPin: (location: { lat: number; lng: number }) => void;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyDwQEkZKtkCVQTuOoiSL0LH3wagDXkymhY';

const MapContainer: React.FC<MapContainerProps> = ({ onMapLoad, onLocationPin }) => {
  const mapRef = useRef<HTMLDivElement>(null);

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

    const initializeMap = () => {
      if (!mapRef.current || !window.google || !window.google.maps) return;

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
        if (event.latLng) {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          onLocationPin({ lat, lng });
        }
      });

      onMapLoad(map);
    };

    loadGoogleMaps();
  }, [onMapLoad, onLocationPin]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default MapContainer;
