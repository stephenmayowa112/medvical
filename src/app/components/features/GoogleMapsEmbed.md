# GoogleMapsEmbed Component

## Overview

The `GoogleMapsEmbed` component displays Med-Vical International office locations on an interactive Google Map with custom branding, markers, and info windows.

## Features

- ✅ **Multiple Location Markers**: Displays all office locations (Benin City, Lagos, Abuja)
- ✅ **Custom Branding**: Med-Vical branded markers and map styles
- ✅ **Info Windows**: Click markers to view location details (address, phone, hours)
- ✅ **Directions**: Direct link to Google Maps directions for each location
- ✅ **Lazy Loading**: Map loads only when scrolled into view for better performance
- ✅ **Responsive Design**: Fully functional on mobile, tablet, and desktop
- ✅ **Error Handling**: Graceful fallback with location list if map fails to load
- ✅ **Loading State**: Shows loading indicator while map initializes

## Setup

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geometry API
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Configure Environment Variable

Create a `.env` file in the project root:

```bash
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

### 3. Verify Configuration

The API key is automatically loaded from the environment variable in `src/config/maps.ts`:

```typescript
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
```

## Usage

### Basic Usage

```tsx
import { GoogleMapsEmbed } from './components/features/GoogleMapsEmbed';
import { ALL_OFFICE_LOCATIONS } from './data/content';

function ContactPage() {
  return (
    <div>
      <h2>Our Locations</h2>
      <GoogleMapsEmbed locations={ALL_OFFICE_LOCATIONS} />
    </div>
  );
}
```

### Custom Configuration

```tsx
<GoogleMapsEmbed 
  locations={ALL_OFFICE_LOCATIONS}
  defaultCenter={{ lat: 6.3350, lng: 5.6037 }}  // Benin City
  defaultZoom={8}
  height="600px"
  className="rounded-lg shadow-xl"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `locations` | `Location[]` | Required | Array of office locations to display |
| `defaultCenter` | `{ lat: number; lng: number }` | Benin City coordinates | Initial map center |
| `defaultZoom` | `number` | `6` | Initial zoom level (1-20) |
| `height` | `string` | `"500px"` | Height of the map container |
| `className` | `string` | `""` | Additional CSS classes |

## Location Data Structure

```typescript
interface Location {
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
```

## Customization

### Map Styles

Custom map styles are defined in `src/config/maps.ts` using Med-Vical brand colors:

```typescript
export const CUSTOM_MAP_STYLES: google.maps.MapTypeStyle[] = [
  // Blue for water
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e3f2fd' }] },
  // Orange for highways
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ff9800' }] },
  // ... more styles
];
```

### Marker Icon

Custom marker icon with Med-Vical blue:

```typescript
export const CUSTOM_MARKER_ICON = {
  path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z...',
  fillColor: '#1976d2',  // Med-Vical blue
  fillOpacity: 1,
  strokeColor: '#ffffff',
  strokeWeight: 2,
  scale: 2,
};
```

### Info Window Styles

Info window styling is defined in `INFO_WINDOW_STYLES` constant with Med-Vical branding.

## Error Handling

The component handles errors gracefully:

1. **Missing API Key**: Shows error message with instructions
2. **API Load Failure**: Shows error with fallback location list
3. **Map Initialization Error**: Displays error and location list

Example fallback display:

```
❌ Unable to load map
Google Maps API key is not configured...

📍 Our Locations
- Med-Vical International - Benin City
  88 Akpakpava Road, Benin City
  📞 +2349018911685
  → Get Directions
```

## Performance

- **Lazy Loading**: Map only loads when scrolled into viewport
- **Intersection Observer**: Uses native browser API for efficient detection
- **Script Cleanup**: Removes script tag on component unmount
- **Marker Optimization**: Reuses marker instances when possible

## Accessibility

- `role="application"` for screen readers
- `aria-label` describing the map purpose
- Keyboard-accessible info windows
- High contrast markers and text

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch interactions

## Troubleshooting

### Map Not Displaying

1. Check if API key is set in `.env` file
2. Verify API key has Maps JavaScript API enabled
3. Check browser console for errors
4. Ensure domain is whitelisted in API key restrictions

### Markers Not Appearing

1. Verify location coordinates are valid (lat/lng)
2. Check if locations array is not empty
3. Ensure coordinates are within valid ranges:
   - Latitude: -90 to 90
   - Longitude: -180 to 180

### Info Windows Not Opening

1. Check browser console for JavaScript errors
2. Verify location data includes all required fields
3. Test with browser dev tools to inspect click events

## Requirements Validation

This component satisfies the following requirements:

- ✅ **Requirement 7.1**: Integrate Google Maps on Contact Us page
- ✅ **Requirement 7.2**: Display all office locations (Benin City, Lagos, Abuja)
- ✅ **Requirement 7.3**: Display location details when marker clicked
- ✅ **Requirement 7.4**: Provide directions functionality
- ✅ **Requirement 7.5**: Maintain full functionality and mobile-responsive design

## Related Files

- `src/app/components/features/GoogleMapsEmbed.tsx` - Main component
- `src/config/maps.ts` - Configuration and styles
- `src/app/data/content.ts` - Location data
- `.env.example` - Environment variable template
