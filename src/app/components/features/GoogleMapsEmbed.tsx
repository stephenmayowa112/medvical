/**
 * GoogleMapsEmbed Component
 *
 * Displays office locations using free iframe embeds (no API key required).
 * Each location gets its own map with a directions link.
 */

import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

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

export interface GoogleMapsEmbedProps {
  locations: Location[];
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  height?: string;
  className?: string;
}

export function GoogleMapsEmbed({
  locations,
  className = '',
}: GoogleMapsEmbedProps) {
  return (
    <Card className={className}>
      <CardContent className="p-0 overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {locations.map((location) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
            const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed&z=15`;

            return (
              <div key={location.id} className="flex flex-col">
                <iframe
                  src={embedUrl}
                  style={{ height: '280px', width: '100%', border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${location.name}`}
                />
                <div className="p-4 bg-white flex-1">
                  <p className="font-semibold text-[#0d3b66] mb-1">{location.city}</p>
                  <p className="text-sm text-gray-600 flex items-start gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-500" aria-hidden="true" />
                    {location.address}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mt-1"
                  >
                    Get Directions
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
