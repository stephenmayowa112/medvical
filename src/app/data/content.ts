/**
 * Centralized Content Data Structure
 * 
 * This file contains all centralized content data for the Med-Vical International website,
 * including division information and office locations.
 */

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Division identifier for Med-Vical International's three main service areas
 */
export type DivisionId = 'MMC' | 'MPPS' | 'MHS';

/**
 * City identifier for office locations
 */
export type CityId = 'Benin City' | 'Lagos' | 'Abuja';

/**
 * Information about a Med-Vical division
 */
export interface DivisionInfo {
  /** Unique identifier for the division */
  id: DivisionId;
  /** Short name of the division */
  name: string;
  /** Full official name of the division */
  fullName: string;
  /** Brief description of the division's services */
  description: string;
  /** Icon identifier for the division */
  icon: string;
  /** Brand color associated with the division */
  color: string;
  /** List of services offered by the division */
  services: string[];
  /** Contact phone number for the division */
  contactPhone: string;
  /** WhatsApp number for the division */
  whatsappNumber: string;
}

/**
 * Office hours information
 */
export interface OfficeHours {
  /** Weekday operating hours */
  weekday: string;
  /** Weekend operating hours */
  weekend: string;
  /** Emergency service availability */
  emergency: string;
}

/**
 * Geographic coordinates
 */
export interface Coordinates {
  /** Latitude */
  lat: number;
  /** Longitude */
  lng: number;
}

/**
 * Office location information
 */
export interface OfficeLocation {
  /** Unique identifier for the location */
  id: string;
  /** Location name */
  name: string;
  /** City where the office is located */
  city: CityId;
  /** Complete street address */
  address: string;
  /** Contact phone number */
  phone: string;
  /** Contact email address */
  email: string;
  /** Operating hours */
  hours: OfficeHours;
  /** Geographic coordinates for map integration */
  coordinates: Coordinates;
  /** Which divisions operate at this location */
  services: DivisionId[];
}

// ============================================================================
// Division Data
// ============================================================================

/**
 * Med-Vical Medical Centre (MMC) - Healthcare Services Division
 */
export const MMC_DIVISION: DivisionInfo = {
  id: 'MMC',
  name: 'Medical Centre',
  fullName: 'Med-Vical Medical Centre',
  description: 'Comprehensive healthcare services including specialty clinics, NICU/PICU, 24/7 ambulance service, and walk-in clinics. Accredited by NHIA and EDOHIS.',
  icon: 'hospital',
  color: 'blue',
  services: [
    'Specialty Clinics',
    'NICU/PICU',
    '24/7 Ambulance Service',
    'Walk-in Clinic',
    'Diagnostic Services',
    'Emergency Care',
    'Inpatient Services',
    'Outpatient Services',
  ],
  contactPhone: '+2347086080230',
  whatsappNumber: '2347086080230',
};

/**
 * Med-Vical Pharmacy, Products and Supply (MPPS) - Retail and Wholesale Division
 */
export const MPPS_DIVISION: DivisionInfo = {
  id: 'MPPS',
  name: 'Pharmacy & Supplies',
  fullName: 'Med-Vical Pharmacy, Products and Supply',
  description: 'Retail and wholesale pharmacy services, medical supplies, and online ordering via WhatsApp. Quality products with reliable delivery.',
  icon: 'pharmacy',
  color: 'red',
  services: [
    'Retail Pharmacy',
    'Wholesale Medical Supplies',
    'Online Ordering',
    'Product Delivery',
    'Medical Equipment',
    'Pharmaceutical Products',
    'Health & Wellness Products',
  ],
  contactPhone: '+2348087874018',
  whatsappNumber: '2348087874018',
};

/**
 * Med-Vical Health (MHS) - Community Outreach and Engagement Division
 */
export const MHS_DIVISION: DivisionInfo = {
  id: 'MHS',
  name: 'Med-Vical Health',
  fullName: 'Med-Vical Health',
  description: 'Community health programs including school health initiatives, health retainership services, and the AccessHealth platform for community engagement.',
  icon: 'heart',
  color: 'orange',
  services: [
    'School Health Programme',
    'Community Outreach',
    'Health Retainership',
    'AccessHealth Platform',
    'Health Education',
    'Preventive Care Programs',
    'Corporate Wellness',
  ],
  contactPhone: '+2349018911685',
  whatsappNumber: '2349018911685',
};

/**
 * Array of all divisions for easy iteration
 */
export const ALL_DIVISIONS: DivisionInfo[] = [
  MMC_DIVISION,
  MPPS_DIVISION,
  MHS_DIVISION,
];

// ============================================================================
// Office Location Data
// ============================================================================

/**
 * Benin City Office - Main Headquarters
 */
export const BENIN_CITY_OFFICE: OfficeLocation = {
  id: 'benin-city',
  name: 'Med-Vical International - Benin City',
  city: 'Benin City',
  address: '88 Akpakpava Road, Benin City, Edo State, Nigeria',
  phone: '+2349018911685',
  email: 'info@medvical.com',
  hours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    weekend: 'Saturday: 9:00 AM - 4:00 PM, Sunday: Closed',
    emergency: '24/7 Emergency Services Available',
  },
  coordinates: {
    lat: 6.3350,
    lng: 5.6037,
  },
  services: ['MMC', 'MPPS', 'MHS'],
};

/**
 * Lagos Office
 */
export const LAGOS_OFFICE: OfficeLocation = {
  id: 'lagos',
  name: 'Med-Vical International - Lagos',
  city: 'Lagos',
  address: 'Victoria Island, Lagos, Nigeria',
  phone: '+2348087874018',
  email: 'lagos@medvical.com',
  hours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    weekend: 'Saturday: 9:00 AM - 2:00 PM, Sunday: Closed',
    emergency: 'Emergency referrals to Benin City',
  },
  coordinates: {
    lat: 6.4281,
    lng: 3.4219,
  },
  services: ['MPPS'],
};

/**
 * Abuja Office
 */
export const ABUJA_OFFICE: OfficeLocation = {
  id: 'abuja',
  name: 'Med-Vical International - Abuja',
  city: 'Abuja',
  address: 'Central Business District, Abuja, FCT, Nigeria',
  phone: '+2347086080230',
  email: 'abuja@medvical.com',
  hours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    weekend: 'Saturday: 9:00 AM - 2:00 PM, Sunday: Closed',
    emergency: 'Emergency referrals to Benin City',
  },
  coordinates: {
    lat: 9.0579,
    lng: 7.4951,
  },
  services: ['MPPS'],
};

/**
 * Array of all office locations for easy iteration
 */
export const ALL_OFFICE_LOCATIONS: OfficeLocation[] = [
  BENIN_CITY_OFFICE,
  LAGOS_OFFICE,
  ABUJA_OFFICE,
];

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get division information by ID
 * @param divisionId - The division identifier
 * @returns Division information or undefined if not found
 */
export function getDivisionById(divisionId: DivisionId): DivisionInfo | undefined {
  return ALL_DIVISIONS.find(division => division.id === divisionId);
}

/**
 * Get office location by ID
 * @param locationId - The location identifier
 * @returns Office location or undefined if not found
 */
export function getOfficeLocationById(locationId: string): OfficeLocation | undefined {
  return ALL_OFFICE_LOCATIONS.find(location => location.id === locationId);
}

/**
 * Get office locations by city
 * @param city - The city identifier
 * @returns Array of office locations in the specified city
 */
export function getOfficeLocationsByCity(city: CityId): OfficeLocation[] {
  return ALL_OFFICE_LOCATIONS.filter(location => location.city === city);
}

/**
 * Get office locations that offer a specific division's services
 * @param divisionId - The division identifier
 * @returns Array of office locations offering the division's services
 */
export function getOfficeLocationsByDivision(divisionId: DivisionId): OfficeLocation[] {
  return ALL_OFFICE_LOCATIONS.filter(location => 
    location.services.includes(divisionId)
  );
}

/**
 * Generate WhatsApp link for a division
 * @param divisionId - The division identifier
 * @param customMessage - Optional custom message to pre-fill
 * @returns WhatsApp URL
 */
export function generateWhatsAppLink(
  divisionId: DivisionId,
  customMessage?: string
): string {
  const division = getDivisionById(divisionId);
  if (!division) {
    throw new Error(`Division ${divisionId} not found`);
  }

  const defaultMessages: Record<DivisionId, string> = {
    MMC: 'Hello Med-Vical Medical Centre, I would like to inquire about...',
    MPPS: 'Hello Med-Vical Supplies, I need information about...',
    MHS: 'Hello Med-Vical Health, I am interested in...',
  };

  const message = customMessage || defaultMessages[divisionId];
  return `https://wa.me/${division.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
