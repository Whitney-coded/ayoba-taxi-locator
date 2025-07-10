
import { toast } from '@/components/ui/use-toast';

export const addPinMarker = (map: any, location: { lat: number; lng: number }) => {
  console.log('Adding pin marker at:', location);
  
  if (!map || !window.google || !window.google.maps) {
    console.log('Google Maps not available for pin marker');
    toast({
      title: 'Location Pinned',
      description: `Pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
    return;
  }

  try {
    // Clear existing pin markers (optional - remove if you want multiple pins)
    if (map.pinMarker) {
      map.pinMarker.setMap(null);
    }

    // Create new pin marker
    map.pinMarker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Pinned Location',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32),
        anchor: new window.google.maps.Point(16, 32)
      }
    });

    // Center map on pinned location
    map.panTo(location);

    toast({
      title: 'Location Pinned',
      description: `Pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });

    console.log('Pin marker added successfully');
  } catch (error) {
    console.error('Error adding pin marker:', error);
    toast({
      title: 'Location Pinned',
      description: `Pinned at ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
    });
  }
};

export const addUserMarker = (map: any, location: { lat: number; lng: number }) => {
  console.log('Adding user marker at:', location);
  
  if (!map || !window.google || !window.google.maps) {
    console.log('Google Maps not available for user marker');
    return;
  }

  try {
    // Remove existing user marker if it exists
    if (map.userMarker) {
      map.userMarker.setMap(null);
    }

    map.userMarker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Your Location',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#22c55e">
            <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="white" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(24, 24),
        anchor: new window.google.maps.Point(12, 12)
      }
    });

    console.log('User marker added successfully');
  } catch (error) {
    console.error('Error adding user marker:', error);
  }
};

export const addTaxiMarkers = (map: any, taxis: any[]) => {
  console.log('Adding taxi markers:', taxis.length);
  
  if (!map || !window.google || !window.google.maps) {
    console.log('Google Maps not available for taxi markers');
    return;
  }

  try {
    // Clear existing taxi markers
    if (map.taxiMarkers) {
      map.taxiMarkers.forEach((marker: any) => marker.setMap(null));
    }
    map.taxiMarkers = [];

    // Add new taxi markers
    taxis.forEach((taxi, index) => {
      const marker = new window.google.maps.Marker({
        position: { lat: taxi.lat, lng: taxi.lng },
        map: map,
        title: `Taxi ${index + 1}: ${taxi.route}`,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6" transform="rotate(${taxi.heading})">
              <path d="M23 12l-7-7v5H8.5C5.5 10 3 12.5 3 15.5S5.5 21 8.5 21H12v-2H8.5C6.57 19 5 17.43 5 15.5S6.57 12 8.5 12H16v5l7-7z" fill="#3b82f6"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12)
        }
      });

      // Add info window for taxi details
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold;">Taxi ${index + 1}</h3>
            <p style="margin: 0; color: #666;">${taxi.route}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        // Close other info windows
        if (map.currentInfoWindow) {
          map.currentInfoWindow.close();
        }
        infoWindow.open(map, marker);
        map.currentInfoWindow = infoWindow;
      });

      map.taxiMarkers.push(marker);
    });

    console.log('Taxi markers added successfully');
  } catch (error) {
    console.error('Error adding taxi markers:', error);
  }
};
