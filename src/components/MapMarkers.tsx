
import { toast } from '@/components/ui/use-toast';

export const addPinMarker = (map: any, location: { lat: number; lng: number }) => {
  if (!map) {
    console.log('No map available, showing toast for pinned location');
    toast({
      title: 'Location Pinned',
      description: `Location pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
    return;
  }

  if (!window.google || !window.google.maps) {
    console.log('Google Maps not available for pin marker');
    toast({
      title: 'Location Pinned',
      description: `Location pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
    return;
  }

  try {
    new window.google.maps.Marker({
      position: location,
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
      title: 'Location Pinned',
      description: `Location pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
  } catch (error) {
    console.error('Error adding pin marker:', error);
    toast({
      title: 'Location Pinned',
      description: `Location pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
  }
};

export const addUserMarker = (map: any, location: { lat: number; lng: number }) => {
  if (!map || !window.google || !window.google.maps) {
    console.log('Google Maps not available for user marker');
    return;
  }

  try {
    new window.google.maps.Marker({
      position: location,
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
  } catch (error) {
    console.error('Error adding user marker:', error);
  }
};

export const addTaxiMarkers = (map: any, taxis: any[]) => {
  if (!map || !window.google || !window.google.maps) {
    console.log('Google Maps not available for taxi markers');
    return;
  }

  try {
    taxis.forEach(taxi => {
      new window.google.maps.Marker({
        position: { lat: taxi.lat, lng: taxi.lng },
        map: map,
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
  } catch (error) {
    console.error('Error adding taxi markers:', error);
  }
};
