/**
 * GoogleMapsEmbed Component
 * 
 * Displays office locations on an interactive Google Map with custom markers,
 * info windows, and directions functionality.
 * 
 * Features:
 * - Multiple location markers with Med-Vical branding
 * - Info windows with location details (address, phone, hours)
 * - Directions link for each location
 * - Responsive sizing for mobile devices
 * - Lazy loading for performance
 * - Loading state and error handling
 */

import { useEffect, useRef, useState } from 'react';
import { MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Alert } from '../ui/alert';
import {
  GOOGLE_MAPS_CONFIG,
  DEFAULT_MAP_SETTINGS,
  CUSTOM_MAP_STYLES,
  CUSTOM_MARKER_ICON,
  INFO_WINDOW_STYLES,
} from '../../../config/maps';

/**
 * Location data structure
 */
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours?: {
    weekday: string;
    weekend: string;
    emergency: string;
  };
}

/**
 * GoogleMapsEmbed component props
 */
export interface GoogleMapsEmbedProps {
  /** Array of office locations to display on the map */
  locations: Location[];
  /** Default center coordinates for the map */
  defaultCenter?: { lat: number; lng: number };
  /** Default zoom level */
  defaultZoom?: number;
  /** Height of the map container */
  height?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Load state for the Google Maps API
 */
type LoadState = 'idle' | 'loading' | 'loaded' | 'error';

/**
 * GoogleMapsEmbed Component
 */
export function GoogleMapsEmbed({
  locations,
  defaultCenter = DEFAULT_MAP_SETTINGS.center,
  defaultZoom = DEFAULT_MAP_SETTINGS.zoom,
  height = '500px',
  className = '',
}: GoogleMapsEmbedProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);
  
  const [loadState, setLoadState] = useState<LoadState>('idle');
  const [error, setError] = useState<string>('');
  const [isInView, setIsInView] = useState(false);

  /**
   * Lazy loading: Observe when the map container enters the viewport
   */
  useEffect(() => {
    if (!mapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  /**
   * Load Google Maps API script
   */
  useEffect(() => {
    if (!isInView || loadState !== 'idle') return;

    // Check if API key is configured
    if (!GOOGLE_MAPS_CONFIG.apiKey) {
      setError('Google Maps API key is not configured. Please set VITE_GOOGLE_MAPS_API_KEY environment variable.');
      setLoadState('error');
      return;
    }

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setLoadState('loaded');
      return;
    }

    setLoadState('loading');

    // Create script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_CONFIG.apiKey}&libraries=${GOOGLE_MAPS_CONFIG.libraries.join(',')}&v=${GOOGLE_MAPS_CONFIG.version}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setLoadState('loaded');
    };

    script.onerror = () => {
      setError('Failed to load Google Maps. Please check your internet connection and try again.');
      setLoadState('error');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove script if component unmounts during loading
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isInView, loadState]);

  /**
   * Initialize map and markers once API is loaded
   */
  useEffect(() => {
    if (loadState !== 'loaded' || !mapRef.current || !window.google) return;

    try {
      // Initialize map
      const map = new google.maps.Map(mapRef.current, {
        center: defaultCenter,
        zoom: defaultZoom,
        styles: CUSTOM_MAP_STYLES,
        mapTypeControl: DEFAULT_MAP_SETTINGS.mapTypeControl,
        streetViewControl: DEFAULT_MAP_SETTINGS.streetViewControl,
        fullscreenControl: DEFAULT_MAP_SETTINGS.fullscreenControl,
        zoomControl: DEFAULT_MAP_SETTINGS.zoomControl,
      });

      mapInstanceRef.current = map;

      // Clear existing markers and info windows
      markersRef.current.forEach(marker => marker.setMap(null));
      infoWindowsRef.current.forEach(infoWindow => infoWindow.close());
      markersRef.current = [];
      infoWindowsRef.current = [];

      // Create markers for each location
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location.coordinates,
          map,
          title: location.name,
          icon: CUSTOM_MARKER_ICON,
          animation: google.maps.Animation.DROP,
        });

        // Create info window content
        const infoWindowContent = createInfoWindowContent(location);
        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
        });

        // Add click listener to marker
        marker.addListener('click', () => {
          // Close all other info windows
          infoWindowsRef.current.forEach(iw => iw.close());
          // Open this info window
          infoWindow.open(map, marker);
        });

        markersRef.current.push(marker);
        infoWindowsRef.current.push(infoWindow);
      });

      // Fit map bounds to show all markers
      if (locations.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        locations.forEach(location => {
          bounds.extend(location.coordinates);
        });
        map.fitBounds(bounds);
        
        // Add padding to bounds
        const padding = { top: 50, right: 50, bottom: 50, left: 50 };
        map.fitBounds(bounds, padding);
      }
    } catch (err) {
      console.error('Error initializing Google Maps:', err);
      setError('Failed to initialize map. Please refresh the page and try again.');
      setLoadState('error');
    }

    // Cleanup function
    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
      infoWindowsRef.current.forEach(infoWindow => infoWindow.close());
      markersRef.current = [];
      infoWindowsRef.current = [];
    };
  }, [loadState, locations, defaultCenter, defaultZoom]);

  /**
   * Create HTML content for info window
   */
  function createInfoWindowContent(location: Location): string {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
    
    return `
      ${INFO_WINDOW_STYLES}
      <div class="info-window-content">
        <div class="info-window-title">${location.name}</div>
        <div class="info-window-address">📍 ${location.address}</div>
        <div class="info-window-phone">📞 ${location.phone}</div>
        ${location.hours ? `
          <div class="info-window-hours">
            <strong>Hours:</strong><br/>
            ${location.hours.weekday}<br/>
            ${location.hours.weekend}<br/>
            ${location.hours.emergency}
          </div>
        ` : ''}
        <a 
          href="${directionsUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="info-window-directions"
        >
          Get Directions
        </a>
      </div>
    `;
  }

  /**
   * Render loading state
   */
  if (loadState === 'loading') {
    return (
      <Card className={className}>
        <CardContent className="flex items-center justify-center p-8" style={{ height }}>
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading map...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  /**
   * Render error state
   */
  if (loadState === 'error') {
    return (
      <Card className={className}>
        <CardContent className="p-8" style={{ height }}>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <div className="ml-2">
              <h3 className="font-semibold">Unable to load map</h3>
              <p className="text-sm mt-1">{error}</p>
            </div>
          </Alert>
          
          {/* Fallback: Display locations as a list */}
          <div className="mt-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Our Locations
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                  <p className="text-sm text-gray-600">📞 {location.phone}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  /**
   * Render map
   */
  return (
    <Card className={className}>
      <CardContent className="p-0">
        <div
          ref={mapRef}
          style={{ height, width: '100%' }}
          className="rounded-lg overflow-hidden"
          role="application"
          aria-label="Interactive map showing Med-Vical office locations"
        />
      </CardContent>
    </Card>
  );
}
