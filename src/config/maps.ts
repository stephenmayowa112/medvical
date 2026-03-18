/**
 * Google Maps Configuration
 * 
 * Configuration for Google Maps JavaScript API integration
 * including API key, custom styles, and map settings.
 */

/**
 * Google Maps API Key
 * Set via environment variable VITE_GOOGLE_MAPS_API_KEY
 */
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

/**
 * Google Maps API Configuration
 */
export const GOOGLE_MAPS_CONFIG = {
  apiKey: GOOGLE_MAPS_API_KEY,
  libraries: ['places', 'geometry'] as const,
  version: 'weekly' as const,
};

/**
 * Default Map Settings
 */
export const DEFAULT_MAP_SETTINGS = {
  zoom: 6,
  center: { lat: 6.3350, lng: 5.6037 }, // Benin City (headquarters)
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  zoomControl: true,
};

/**
 * Custom Map Styles - Med-Vical Brand Colors
 * Applies brand colors (blue, red, orange, white) to the map
 */
export const CUSTOM_MAP_STYLES: google.maps.MapTypeStyle[] = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e3f2fd' }], // Light blue for water
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#1976d2' }], // Med-Vical blue
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }], // Light gray
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }], // White roads
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#e0e0e0' }], // Light gray stroke
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#fff3e0' }], // Light orange for highways
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ff9800' }], // Med-Vical orange
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e8f5e9' }], // Light green for parks
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#e3f2fd' }], // Light blue
  },
];

/**
 * Custom Marker Icon Configuration
 * SVG-based marker with Med-Vical branding
 */
export const CUSTOM_MARKER_ICON = {
  path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  fillColor: '#1976d2', // Med-Vical blue
  fillOpacity: 1,
  strokeColor: '#ffffff',
  strokeWeight: 2,
  scale: 2,
  anchor: { x: 12, y: 22 } as google.maps.Point,
};

/**
 * Info Window Styling
 */
export const INFO_WINDOW_STYLES = `
  <style>
    .gm-info-window {
      font-family: 'Roboto', 'Open Sans', sans-serif;
    }
    .info-window-content {
      padding: 12px;
      max-width: 280px;
    }
    .info-window-title {
      font-size: 16px;
      font-weight: 600;
      color: #1976d2;
      margin-bottom: 8px;
    }
    .info-window-address {
      font-size: 14px;
      color: #424242;
      margin-bottom: 4px;
    }
    .info-window-phone {
      font-size: 14px;
      color: #424242;
      margin-bottom: 4px;
    }
    .info-window-hours {
      font-size: 12px;
      color: #757575;
      margin-bottom: 8px;
    }
    .info-window-directions {
      display: inline-block;
      padding: 8px 16px;
      background-color: #1976d2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    .info-window-directions:hover {
      background-color: #1565c0;
    }
  </style>
`;
