/**
 * useTestimonials Hook
 * 
 * Custom hook for managing testimonials including submission,
 * filtering, sorting, and approval workflow.
 */

import { useState, useEffect, useCallback } from 'react';
import type { Testimonial, TestimonialFilters, TestimonialSortField, TestimonialSortOrder } from '../data/testimonials';
import { SAMPLE_TESTIMONIALS, filterTestimonials, sortTestimonials } from '../data/testimonials';
import type { TestimonialFormData } from '../utils/validation';
import type { DivisionId } from '../data/content';

// ============================================================================
// Type Definitions
// ============================================================================

interface UseTestimonialsOptions {
  /** Initial filter options */
  initialFilters?: TestimonialFilters;
  /** Initial sort field */
  initialSortField?: TestimonialSortField;
  /** Initial sort order */
  initialSortOrder?: TestimonialSortOrder;
}

interface UseTestimonialsReturn {
  /** Array of testimonials (filtered and sorted) */
  testimonials: Testimonial[];
  /** All testimonials (unfiltered) */
  allTestimonials: Testimonial[];
  /** Loading state */
  isLoading: boolean;
  /** Error state */
  error: string | null;
  /** Current filters */
  filters: TestimonialFilters;
  /** Current sort field */
  sortField: TestimonialSortField;
  /** Current sort order */
  sortOrder: TestimonialSortOrder;
  /** Submit a new testimonial */
  submitTestimonial: (data: TestimonialFormData) => Promise<void>;
  /** Update filters */
  setFilters: (filters: TestimonialFilters) => void;
  /** Update sort field */
  setSortField: (field: TestimonialSortField) => void;
  /** Update sort order */
  setSortOrder: (order: TestimonialSortOrder) => void;
  /** Filter by division */
  filterByDivision: (division: DivisionId | undefined) => void;
  /** Filter by service */
  filterByService: (service: string | undefined) => void;
  /** Filter by minimum rating */
  filterByRating: (rating: number | undefined) => void;
  /** Clear all filters */
  clearFilters: () => void;
  /** Refresh testimonials */
  refresh: () => Promise<void>;
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Custom hook for managing testimonials
 * 
 * @param options - Configuration options
 * @returns Testimonials state and management functions
 */
export function useTestimonials(options: UseTestimonialsOptions = {}): UseTestimonialsReturn {
  const {
    initialFilters = {},
    initialSortField = 'date',
    initialSortOrder = 'desc',
  } = options;

  // State
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<TestimonialFilters>(initialFilters);
  const [sortField, setSortField] = useState<TestimonialSortField>(initialSortField);
  const [sortOrder, setSortOrder] = useState<TestimonialSortOrder>(initialSortOrder);

  // Load testimonials (simulated API call)
  const loadTestimonials = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // In a real application, this would be an API call
      // For now, we use sample data from localStorage or default samples
      const storedTestimonials = localStorage.getItem('testimonials');
      const testimonials = storedTestimonials
        ? JSON.parse(storedTestimonials)
        : SAMPLE_TESTIMONIALS;

      setAllTestimonials(testimonials);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load testimonials');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load testimonials on mount
  useEffect(() => {
    loadTestimonials();
  }, [loadTestimonials]);

  // Apply filters and sorting
  const testimonials = sortTestimonials(
    filterTestimonials(allTestimonials, filters),
    sortField,
    sortOrder
  );

  // Submit testimonial
  const submitTestimonial = useCallback(async (data: TestimonialFormData): Promise<void> => {
    try {
      // Determine division based on service
      let division: DivisionId = 'MMC';
      
      // Simple service-to-division mapping
      const mhsServices = ['School Health Programme', 'Community Outreach', 'Health Retainership', 'AccessHealth Platform', 'Health Education', 'Preventive Care Programs', 'Corporate Wellness'];
      const mppsServices = ['Retail Pharmacy', 'Wholesale Medical Supplies', 'Online Ordering', 'Product Delivery', 'Medical Equipment', 'Pharmaceutical Products', 'Health & Wellness Products'];
      
      if (mhsServices.includes(data.service)) {
        division = 'MHS';
      } else if (mppsServices.includes(data.service)) {
        division = 'MPPS';
      }

      // Create new testimonial
      const newTestimonial: Testimonial = {
        id: `test-${Date.now()}`,
        name: data.isAnonymous ? 'Anonymous' : (data.name || 'Anonymous'),
        isAnonymous: data.isAnonymous,
        email: data.email,
        date: new Date().toISOString().split('T')[0],
        rating: data.rating,
        text: data.text,
        service: data.service,
        division,
        photo: data.photo ? URL.createObjectURL(data.photo) : undefined,
        verified: false,
        approved: false, // Pending approval
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real application, this would be an API call
      // For now, we store in localStorage
      const updatedTestimonials = [...allTestimonials, newTestimonial];
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      
      // Update state
      setAllTestimonials(updatedTestimonials);
    } catch (err) {
      throw new Error(
        err instanceof Error 
          ? err.message 
          : 'Failed to submit testimonial. Please try again.'
      );
    }
  }, [allTestimonials]);

  // Filter by division
  const filterByDivision = useCallback((division: DivisionId | undefined) => {
    setFilters(prev => ({ ...prev, division }));
  }, []);

  // Filter by service
  const filterByService = useCallback((service: string | undefined) => {
    setFilters(prev => ({ ...prev, service }));
  }, []);

  // Filter by rating
  const filterByRating = useCallback((rating: number | undefined) => {
    setFilters(prev => ({ ...prev, rating }));
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  // Refresh testimonials
  const refresh = useCallback(async () => {
    await loadTestimonials();
  }, [loadTestimonials]);

  return {
    testimonials,
    allTestimonials,
    isLoading,
    error,
    filters,
    sortField,
    sortOrder,
    submitTestimonial,
    setFilters,
    setSortField,
    setSortOrder,
    filterByDivision,
    filterByService,
    filterByRating,
    clearFilters,
    refresh,
  };
}

export default useTestimonials;
