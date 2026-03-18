/**
 * Testimonial Data Models and Sample Data
 * 
 * This file contains testimonial data structures, sample testimonials,
 * and utility functions for filtering and sorting testimonials.
 */

import type { DivisionId } from './content';

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Testimonial interface with all required fields
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** Patient name (or "Anonymous" if isAnonymous is true) */
  name: string;
  /** Whether the testimonial is submitted anonymously */
  isAnonymous: boolean;
  /** Email address (not displayed publicly) */
  email: string;
  /** Date of testimonial submission (ISO date string) */
  date: string;
  /** Rating from 1-5 stars */
  rating: number;
  /** Testimonial text content */
  text: string;
  /** Service or division the testimonial is about */
  service: string;
  /** Division identifier */
  division: DivisionId;
  /** Optional URL to patient photo */
  photo?: string;
  /** Whether the testimonial has been verified */
  verified: boolean;
  /** Whether the testimonial has been approved for display */
  approved: boolean;
  /** Timestamp when testimonial was created */
  createdAt: string;
  /** Timestamp when testimonial was last updated */
  updatedAt: string;
}

/**
 * Testimonial submission data (before approval)
 */
export interface TestimonialSubmission {
  name?: string;
  email: string;
  isAnonymous: boolean;
  rating: number;
  text: string;
  service: string;
  division: DivisionId;
  photo?: File;
}

/**
 * Filter options for testimonials
 */
export interface TestimonialFilters {
  division?: DivisionId;
  service?: string;
  rating?: number;
  verified?: boolean;
}

/**
 * Sort options for testimonials
 */
export type TestimonialSortField = 'date' | 'rating';
export type TestimonialSortOrder = 'asc' | 'desc';

// ============================================================================
// Sample Testimonial Data
// ============================================================================

/**
 * Sample testimonials for initial display
 */
export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Mrs. Adaeze Okonkwo',
    isAnonymous: false,
    email: 'adaeze.o@example.com',
    date: '2024-01-15',
    rating: 5,
    text: 'The care I received at Med-Vical Medical Centre was exceptional. The staff were professional, compassionate, and attentive to all my needs. The NICU team took excellent care of my newborn, and I am forever grateful.',
    service: 'NICU Services',
    division: 'MMC',
    verified: true,
    approved: true,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'test-002',
    name: 'Mr. Chukwuma Eze',
    isAnonymous: false,
    email: 'chukwuma.e@example.com',
    date: '2024-01-20',
    rating: 5,
    text: 'I have been ordering medical supplies from Med-Vical Pharmacy for my clinic, and their service is outstanding. Fast delivery, quality products, and competitive prices. Highly recommended for wholesale orders.',
    service: 'Wholesale Medical Supplies',
    division: 'MPPS',
    verified: true,
    approved: true,
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-20T14:15:00Z',
  },
  {
    id: 'test-003',
    name: 'Anonymous',
    isAnonymous: true,
    email: 'patient003@example.com',
    date: '2024-02-01',
    rating: 4,
    text: 'The 24/7 ambulance service saved my life during a medical emergency. The paramedics were quick, professional, and provided excellent care during transport. Thank you Med-Vical!',
    service: '24/7 Ambulance Service',
    division: 'MMC',
    verified: true,
    approved: true,
    createdAt: '2024-02-01T03:45:00Z',
    updatedAt: '2024-02-01T03:45:00Z',
  },
  {
    id: 'test-004',
    name: 'Dr. Ngozi Okoro',
    isAnonymous: false,
    email: 'ngozi.okoro@example.com',
    date: '2024-02-10',
    rating: 5,
    text: 'Med-Vical Health\'s school health programme has been transformative for our institution. The health education sessions are engaging, and the preventive care initiatives have significantly improved student wellness.',
    service: 'School Health Programme',
    division: 'MHS',
    verified: true,
    approved: true,
    createdAt: '2024-02-10T09:00:00Z',
    updatedAt: '2024-02-10T09:00:00Z',
  },
  {
    id: 'test-005',
    name: 'Mrs. Blessing Adekunle',
    isAnonymous: false,
    email: 'blessing.a@example.com',
    date: '2024-02-15',
    rating: 5,
    text: 'The specialty clinics at Med-Vical are world-class. I received excellent treatment for my condition, and the doctors took time to explain everything. The facility is clean, modern, and well-equipped.',
    service: 'Specialty Clinics',
    division: 'MMC',
    verified: true,
    approved: true,
    createdAt: '2024-02-15T11:20:00Z',
    updatedAt: '2024-02-15T11:20:00Z',
  },
  {
    id: 'test-006',
    name: 'Mr. Emeka Nwosu',
    isAnonymous: false,
    email: 'emeka.n@example.com',
    date: '2024-02-20',
    rating: 4,
    text: 'Great pharmacy with a wide range of products. The staff are knowledgeable and always ready to help. Online ordering via WhatsApp is very convenient. Delivery is prompt and reliable.',
    service: 'Retail Pharmacy',
    division: 'MPPS',
    verified: true,
    approved: true,
    createdAt: '2024-02-20T16:30:00Z',
    updatedAt: '2024-02-20T16:30:00Z',
  },
  {
    id: 'test-007',
    name: 'Anonymous',
    isAnonymous: true,
    email: 'patient007@example.com',
    date: '2024-03-01',
    rating: 5,
    text: 'The community outreach programs by Med-Vical Health have made healthcare accessible to underserved areas. Their commitment to community wellness is truly commendable.',
    service: 'Community Outreach',
    division: 'MHS',
    verified: true,
    approved: true,
    createdAt: '2024-03-01T13:00:00Z',
    updatedAt: '2024-03-01T13:00:00Z',
  },
  {
    id: 'test-008',
    name: 'Mrs. Funmilayo Adebayo',
    isAnonymous: false,
    email: 'funmi.a@example.com',
    date: '2024-03-05',
    rating: 5,
    text: 'I visited the walk-in clinic for a minor ailment and was impressed by the efficiency and professionalism. No long waits, friendly staff, and quality care. Will definitely return.',
    service: 'Walk-in Clinic',
    division: 'MMC',
    verified: true,
    approved: true,
    createdAt: '2024-03-05T10:45:00Z',
    updatedAt: '2024-03-05T10:45:00Z',
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Filter testimonials based on provided criteria
 * @param testimonials - Array of testimonials to filter
 * @param filters - Filter criteria
 * @returns Filtered array of testimonials
 */
export function filterTestimonials(
  testimonials: Testimonial[],
  filters: TestimonialFilters
): Testimonial[] {
  return testimonials.filter(testimonial => {
    // Only show approved testimonials
    if (!testimonial.approved) return false;

    // Filter by division
    if (filters.division && testimonial.division !== filters.division) {
      return false;
    }

    // Filter by service
    if (filters.service && testimonial.service !== filters.service) {
      return false;
    }

    // Filter by minimum rating
    if (filters.rating && testimonial.rating < filters.rating) {
      return false;
    }

    // Filter by verified status
    if (filters.verified !== undefined && testimonial.verified !== filters.verified) {
      return false;
    }

    return true;
  });
}

/**
 * Sort testimonials by specified field and order
 * @param testimonials - Array of testimonials to sort
 * @param field - Field to sort by ('date' or 'rating')
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array of testimonials
 */
export function sortTestimonials(
  testimonials: Testimonial[],
  field: TestimonialSortField,
  order: TestimonialSortOrder = 'desc'
): Testimonial[] {
  const sorted = [...testimonials].sort((a, b) => {
    let comparison = 0;

    if (field === 'date') {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      comparison = dateA - dateB;
    } else if (field === 'rating') {
      comparison = a.rating - b.rating;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sorted;
}

/**
 * Get testimonials by division
 * @param testimonials - Array of testimonials
 * @param division - Division identifier
 * @returns Testimonials for the specified division
 */
export function getTestimonialsByDivision(
  testimonials: Testimonial[],
  division: DivisionId
): Testimonial[] {
  return filterTestimonials(testimonials, { division });
}

/**
 * Get testimonials by service
 * @param testimonials - Array of testimonials
 * @param service - Service name
 * @returns Testimonials for the specified service
 */
export function getTestimonialsByService(
  testimonials: Testimonial[],
  service: string
): Testimonial[] {
  return filterTestimonials(testimonials, { service });
}

/**
 * Get testimonials with minimum rating
 * @param testimonials - Array of testimonials
 * @param minRating - Minimum rating (1-5)
 * @returns Testimonials with rating >= minRating
 */
export function getTestimonialsByMinRating(
  testimonials: Testimonial[],
  minRating: number
): Testimonial[] {
  return filterTestimonials(testimonials, { rating: minRating });
}

/**
 * Get only verified testimonials
 * @param testimonials - Array of testimonials
 * @returns Verified testimonials only
 */
export function getVerifiedTestimonials(
  testimonials: Testimonial[]
): Testimonial[] {
  return filterTestimonials(testimonials, { verified: true });
}

/**
 * Get unique services from testimonials
 * @param testimonials - Array of testimonials
 * @returns Array of unique service names
 */
export function getUniqueServices(testimonials: Testimonial[]): string[] {
  const services = testimonials
    .filter(t => t.approved)
    .map(t => t.service);
  return Array.from(new Set(services)).sort();
}

/**
 * Get unique divisions from testimonials
 * @param testimonials - Array of testimonials
 * @returns Array of unique division IDs
 */
export function getUniqueDivisions(testimonials: Testimonial[]): DivisionId[] {
  const divisions = testimonials
    .filter(t => t.approved)
    .map(t => t.division);
  return Array.from(new Set(divisions)).sort();
}

/**
 * Calculate average rating for testimonials
 * @param testimonials - Array of testimonials
 * @returns Average rating (0 if no testimonials)
 */
export function calculateAverageRating(testimonials: Testimonial[]): number {
  const approvedTestimonials = testimonials.filter(t => t.approved);
  
  if (approvedTestimonials.length === 0) return 0;

  const sum = approvedTestimonials.reduce((acc, t) => acc + t.rating, 0);
  return Math.round((sum / approvedTestimonials.length) * 10) / 10;
}

/**
 * Get rating distribution
 * @param testimonials - Array of testimonials
 * @returns Object with count for each rating (1-5)
 */
export function getRatingDistribution(testimonials: Testimonial[]): Record<number, number> {
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
  testimonials
    .filter(t => t.approved)
    .forEach(t => {
      distribution[t.rating] = (distribution[t.rating] || 0) + 1;
    });

  return distribution;
}

/**
 * Format testimonial date for display
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatTestimonialDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
