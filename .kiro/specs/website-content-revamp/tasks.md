# Implementation Plan: Website Content Revamp

## Overview

This implementation plan breaks down the Med-Vical International website content revamp into actionable coding tasks. The project involves updating content across all pages, restructuring layouts, implementing new features (WhatsApp widget, Google Maps, enhanced forms, newsletter, testimonials), creating new pages, and ensuring mobile responsiveness, accessibility, SEO, and performance optimization.

The implementation follows a logical sequence: foundation setup → core features → page updates → new pages → testing & optimization.

## Tasks

- [x] 1. Set up project foundation and data structures
  - [x] 1.1 Create centralized content data structure
    - Create `src/app/data/content.ts` with TypeScript interfaces for page content
    - Define `DivisionInfo` interface and data for MMC, MPPS, MHS divisions
    - Define `OfficeLocation` interface and data for Benin City, Lagos, Abuja offices
    - Export all content data for use across components
    - _Requirements: 1.7, 15.1, 15.2, 15.3, 15.4_
  
  - [ ]* 1.2 Write unit tests for content data structure
    - Test that all divisions have required fields (id, name, services, contact info)
    - Test that all office locations have complete address and contact information
    - _Requirements: 15.2, 15.3, 15.4_

- [x] 2. Implement WhatsApp integration feature
  - [x] 2.1 Create WhatsAppWidget component
    - Create `src/app/components/features/WhatsAppWidget.tsx`
    - Implement floating button with fixed positioning (bottom-right)
    - Add props for phoneNumber, defaultMessage, division, position
    - Generate WhatsApp links using `wa.me` API with pre-filled messages
    - Style with brand colors and smooth hover animations
    - Ensure 44x44px minimum touch target for mobile
    - Add ARIA labels for accessibility
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 13.4_
  
  - [x] 2.2 Create WhatsApp configuration utility
    - Create `src/app/utils/whatsapp.ts`
    - Define WhatsAppConfig with phone numbers for each division
    - Implement `generateWhatsAppLink()` function with message encoding
    - Add context-aware default messages based on division
    - _Requirements: 6.2, 6.4_
  
  - [ ]* 2.3 Write unit tests for WhatsApp widget
    - Test correct link generation for each division (MMC, MPPS, MHS)
    - Test pre-filled message encoding
    - Test component renders with correct positioning
    - Test accessibility attributes (ARIA labels)
    - _Requirements: 6.2, 6.4_
  
  - [ ]* 2.4 Write property test for WhatsApp link generation
    - **Property 8: WhatsApp Links Open Correctly**
    - **Validates: Requirements 6.2**
    - Test that for any division, the generated link contains the correct phone number
  
  - [ ]* 2.5 Write property test for WhatsApp pre-filled messages
    - **Property 9: WhatsApp Pre-filled Messages**
    - **Validates: Requirements 6.4**
    - Test that for any WhatsApp link, the URL includes encoded pre-populated message


- [x] 3. Implement Google Maps integration
  - [x] 3.1 Create GoogleMapsEmbed component
    - Create `src/app/components/features/GoogleMapsEmbed.tsx`
    - Implement Google Maps JavaScript API integration
    - Add props for locations array, defaultCenter, defaultZoom, height
    - Create custom markers for each office location with Med-Vical branding
    - Implement info windows with location details (address, phone, hours)
    - Add directions link for each location
    - Implement loading state and error handling
    - Ensure responsive sizing for mobile devices
    - Add lazy loading for performance
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [x] 3.2 Create Google Maps configuration
    - Create `src/config/maps.ts` for API key and configuration
    - Add environment variable for Google Maps API key
    - Define custom map styles matching brand colors
    - _Requirements: 7.1_
  
  - [ ]* 3.3 Write unit tests for Google Maps component
    - Test component renders with loading state
    - Test error handling for API failures
    - Test marker creation for all locations
    - Test info window content display
    - _Requirements: 7.2, 7.3_
  
  - [ ]* 3.4 Write property test for map markers
    - **Property 10: Map Markers Display Location Details**
    - **Validates: Requirements 7.3**
    - Test that for any office location, clicking the marker displays info window with address and contact info
  
  - [ ]* 3.5 Write property test for map directions
    - **Property 11: Map Provides Directions**
    - **Validates: Requirements 7.4**
    - Test that for any office location, the location has a directions link
  
  - [ ]* 3.6 Write property test for mobile map functionality
    - **Property 12: Maps Responsive on Mobile**
    - **Validates: Requirements 7.5**
    - Test that for any mobile viewport size, map maintains full functionality

- [x] 4. Implement enhanced contact form
  - [x] 4.1 Create ContactForm component with inquiry types
    - Create `src/app/components/features/ContactForm.tsx`
    - Implement form fields: name, email, phone, inquiryType, message
    - Add inquiry type dropdown with options: general, medical-services, pharmacy-supplies, health-programs, emergency
    - Integrate React Hook Form for form state management
    - Implement Zod validation schema for all fields
    - Add real-time validation with error messages
    - Implement loading state during submission
    - Display success/error feedback messages
    - Add proper label associations for accessibility
    - Style with brand guidelines
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 18.5_
  
  - [x] 4.2 Create form validation utilities
    - Create `src/app/utils/validation.ts`
    - Define Zod schemas for contact form, newsletter, testimonial forms
    - Implement validation rules (email format, phone format, min/max lengths)
    - Export reusable validation functions
    - _Requirements: 8.4, 9.2_
  
  - [x] 4.3 Create form submission hook
    - Create `src/app/hooks/useContactForm.ts`
    - Implement form submission logic with error handling
    - Add retry logic for network failures
    - Implement department routing based on inquiry type
    - _Requirements: 8.5, 8.6, 20.1, 20.4_
  
  - [ ]* 4.4 Write unit tests for contact form
    - Test form renders all required fields
    - Test validation errors display for invalid inputs
    - Test successful submission calls onSubmit with correct data
    - Test error handling and retry options
    - Test inquiry type selection
    - _Requirements: 8.2, 8.4, 8.5_
  
  - [ ]* 4.5 Write property test for contact form validation
    - **Property 13: Contact Form Validation**
    - **Validates: Requirements 8.4**
    - Test that for any submission with invalid/missing required fields, form rejects submission with validation errors
  
  - [ ]* 4.6 Write property test for contact form success confirmation
    - **Property 14: Contact Form Success Confirmation**
    - **Validates: Requirements 8.5**
    - Test that for any valid submission, form displays confirmation message
  
  - [ ]* 4.7 Write property test for form submission error messages
    - **Property 36: Form Submission Error Messages**
    - **Validates: Requirements 20.1**
    - Test that for any form submission failure, form displays user-friendly error message

- [x] 5. Implement newsletter subscription system
  - [x] 5.1 Create NewsletterForm component
    - Create `src/app/components/features/NewsletterForm.tsx`
    - Implement email input field with optional name field
    - Add inline and standalone display variants
    - Integrate form validation with Zod
    - Implement submission with success/error feedback
    - Add GDPR-compliant consent checkbox
    - Add privacy policy link
    - Implement duplicate email detection
    - Style for footer and standalone use
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_
  
  - [x] 5.2 Create newsletter subscription hook
    - Create `src/app/hooks/useNewsletter.ts`
    - Implement subscription logic with API integration
    - Add duplicate email checking
    - Implement error handling and retry logic
    - _Requirements: 9.3, 9.5_
  
  - [ ]* 5.3 Write unit tests for newsletter form
    - Test email validation
    - Test successful subscription displays confirmation
    - Test duplicate email detection
    - Test GDPR consent checkbox requirement
    - _Requirements: 9.2, 9.3, 9.5_
  
  - [ ]* 5.4 Write property test for newsletter email validation
    - **Property 15: Newsletter Email Validation**
    - **Validates: Requirements 9.2**
    - Test that for any invalid email format, form rejects submission with validation error
  
  - [ ]* 5.5 Write property test for newsletter subscription success
    - **Property 16: Newsletter Subscription Success**
    - **Validates: Requirements 9.3**
    - Test that for any valid email, system adds email to subscription list and displays success confirmation
  
  - [ ]* 5.6 Write property test for newsletter duplicate detection
    - **Property 17: Newsletter Duplicate Detection**
    - **Validates: Requirements 9.5**
    - Test that for any already-subscribed email, system informs user without creating duplicate

- [x] 6. Implement testimonial system
  - [x] 6.1 Create testimonial data models
    - Create `src/app/data/testimonials.ts`
    - Define `Testimonial` interface with all required fields
    - Create sample testimonial data for initial display
    - Implement testimonial filtering and sorting utilities
    - _Requirements: 10.1, 10.2_
  
  - [x] 6.2 Create TestimonialCard component
    - Create `src/app/components/features/TestimonialCard.tsx`
    - Implement card layout with patient name/anonymous, date, rating, text
    - Add star rating display (1-5 stars)
    - Display service badge and verified badge
    - Add optional patient photo display
    - Implement variant prop: default, compact, featured
    - Style with brand guidelines and smooth animations
    - _Requirements: 10.2_
  
  - [x] 6.3 Create TestimonialForm component
    - Create `src/app/components/features/TestimonialForm.tsx`
    - Implement form fields: name, email, isAnonymous, rating, text, service, photo
    - Add star rating selector component
    - Add anonymous option toggle
    - Add service dropdown for division selection
    - Implement character counter for testimonial text (20-500 chars)
    - Add photo upload with preview (max 5MB, jpg/png only)
    - Add terms acceptance checkbox
    - Integrate form validation with Zod
    - Display submission confirmation
    - _Requirements: 10.3, 10.4_
  
  - [x] 6.4 Create testimonials management hook
    - Create `src/app/hooks/useTestimonials.ts`
    - Implement testimonial submission logic
    - Add filtering by service/division
    - Add sorting by date/rating
    - Implement approval workflow (pending state)
    - _Requirements: 10.4, 10.5_
  
  - [ ]* 6.5 Write unit tests for testimonial components
    - Test TestimonialCard renders all fields correctly
    - Test anonymous testimonials hide patient name
    - Test TestimonialForm validates all required fields
    - Test photo upload validation (size, format)
    - Test character counter functionality
    - _Requirements: 10.2, 10.4_
  
  - [ ]* 6.6 Write property test for testimonial approval process
    - **Property 18: Testimonial Approval Process**
    - **Validates: Requirements 10.5**
    - Test that for any submitted testimonial, it's stored in pending state and not displayed until approved

- [x] 7. Update Header component with new navigation
  - [x] 7.1 Update Header navigation structure
    - Update `src/app/components/Header.tsx`
    - Restructure navigation to reflect three divisions (MMC, MPPS, MHS)
    - Update services dropdown with division links
    - Add Testimonials link to navigation
    - Add simHealth Africa external link
    - Update mobile menu with new structure
    - Ensure active route highlighting works for all new pages
    - Maintain sticky header and backdrop blur
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 7.2 Write unit tests for updated header
    - Test all three division links are displayed
    - Test Testimonials link is present
    - Test simHealth Africa link opens in new tab
    - Test mobile menu functionality
    - Test dropdown menu behavior
    - _Requirements: 3.2, 11.2_
  
  - [ ]* 7.3 Write property test for navigation links routing
    - **Property 1: Navigation Links Route Correctly**
    - **Validates: Requirements 3.3**
    - Test that for any navigation link, clicking routes to correct page
  
  - [ ]* 7.4 Write property test for new pages in navigation
    - **Property 2: New Pages Accessible via Navigation**
    - **Validates: Requirements 4.2**
    - Test that for any newly created page, it's accessible through navigation system
  
  - [ ]* 7.5 Write property test for external link accessibility
    - **Property 19: External Link Accessibility**
    - **Validates: Requirements 11.5**
    - Test that for any page, simHealth Africa link is accessible

- [-] 8. Update Footer component with newsletter and new content
  - [-] 8.1 Update Footer with newsletter integration
    - Update `src/app/components/Footer.tsx`
    - Integrate NewsletterForm component in footer
    - Update quick links section with new pages
    - Add all three office locations with complete contact info
    - Update social media links
    - Add brand tagline and accreditation badges (NHIA, EDOHIS)
    - Add simHealth Africa link
    - Ensure mobile-responsive layout
    - _Requirements: 9.1, 11.1, 12.2, 12.3, 14.1, 14.2, 14.3, 15.1_
  
  - [ ]* 8.2 Write unit tests for updated footer
    - Test newsletter form is present
    - Test all office locations are displayed with complete info
    - Test accreditation badges are displayed
    - Test simHealth Africa link is present
    - _Requirements: 9.1, 14.1, 14.2, 15.2_
  
  - [ ]* 8.3 Write property test for office location information
    - **Property 22: Office Location Information Complete**
    - **Validates: Requirements 15.2, 15.3, 15.4**
    - Test that for any office location, it includes complete address, phone, and hours

- [ ] 9. Update HomePage with new content and features
  - [ ] 9.1 Update HomePage content and structure
    - Update `src/app/pages/HomePage.tsx`
    - Update Hero component with new tagline and messaging
    - Create DivisionsOverview component showcasing MMC, MPPS, MHS
    - Update Stats component with current statistics
    - Create FeaturedServices component with services from each division
    - Create TestimonialsCarousel component for homepage
    - Update WhyChooseUs component with new content
    - Create NewsletterCTA component for homepage
    - Update Contact component with new ContactForm
    - Integrate WhatsAppWidget on homepage
    - _Requirements: 1.1, 1.2, 6.1_
  
  - [ ]* 9.2 Write unit tests for updated HomePage
    - Test all sections render correctly
    - Test divisions overview displays all three divisions
    - Test testimonials carousel displays testimonials
    - Test WhatsApp widget is present
    - _Requirements: 1.1_
  
  - [ ]* 9.3 Write property test for WhatsApp widget presence
    - **Property 7: WhatsApp Widget on All Pages**
    - **Validates: Requirements 6.1**
    - Test that for any page, WhatsApp widget is present and accessible

- [ ] 10. Update ServicesPage with division structure
  - [ ] 10.1 Update ServicesPage content
    - Update `src/app/pages/ServicesPage.tsx`
    - Create overview section for all three divisions
    - Create service cards for MMC, MPPS, MHS with descriptions
    - Add links to detailed division pages
    - Integrate WhatsApp ordering for each division
    - Add ContactForm with division-specific inquiry types
    - Update page layout and styling
    - _Requirements: 1.3, 6.3_
  
  - [ ]* 10.2 Write unit tests for ServicesPage
    - Test all three divisions are displayed
    - Test links to division pages work correctly
    - Test WhatsApp integration for each division
    - _Requirements: 1.3_

- [ ] 11. Update MedicalCentrePage with new content
  - [ ] 11.1 Update MedicalCentrePage content
    - Update `src/app/pages/MedicalCentrePage.tsx`
    - Update specialty clinics list with current offerings
    - Add NICU/PICU information section
    - Add 24/7 ambulance service details with emergency contact
    - Add walk-in clinic information
    - Add diagnostic services section
    - Integrate appointment booking CTA
    - Add WhatsAppWidget with MMC-specific messaging
    - Update page layout and styling
    - _Requirements: 1.4, 14.5_
  
  - [ ]* 11.2 Write unit tests for MedicalCentrePage
    - Test specialty clinics section renders
    - Test NICU/PICU information is displayed
    - Test 24/7 ambulance service details are present
    - Test appointment booking CTA is functional
    - _Requirements: 1.4, 14.5_

- [ ] 12. Update PharmacySuppliesPage with new content
  - [ ] 12.1 Update PharmacySuppliesPage content
    - Update `src/app/pages/PharmacySuppliesPage.tsx`
    - Add retail vs. wholesale distinction section
    - Update product categories with current offerings
    - Add online ordering via WhatsApp section
    - Add delivery information
    - Create wholesale inquiry form
    - Add WhatsAppWidget with MPPS-specific messaging
    - Update page layout and styling
    - _Requirements: 1.5, 6.3_
  
  - [ ]* 12.2 Write unit tests for PharmacySuppliesPage
    - Test retail/wholesale sections are displayed
    - Test product categories render correctly
    - Test WhatsApp ordering integration
    - Test wholesale inquiry form
    - _Requirements: 1.5_

- [ ] 13. Update HealthEducationPage (MHS) with new content
  - [ ] 13.1 Update HealthEducationPage content
    - Update `src/app/pages/HealthEducationPage.tsx`
    - Add school health programme section
    - Add community outreach initiatives section
    - Add health retainership services section
    - Add AccessHealth platform information
    - Create event calendar component
    - Add educational resources section
    - Add WhatsAppWidget with MHS-specific messaging
    - Update page layout and styling
    - _Requirements: 1.6_
  
  - [ ]* 13.2 Write unit tests for HealthEducationPage
    - Test school health programme section renders
    - Test community outreach section is displayed
    - Test health retainership information is present
    - Test AccessHealth platform section renders
    - _Requirements: 1.6_

- [ ] 14. Create new TestimonialsPage
  - [ ] 14.1 Create TestimonialsPage component
    - Create `src/app/pages/TestimonialsPage.tsx`
    - Create page header with title and description
    - Implement testimonials grid layout using TestimonialCard
    - Add filter by service/division functionality
    - Add sort by date/rating functionality
    - Implement pagination or infinite scroll
    - Add success stories highlight section
    - Add TestimonialForm section at bottom of page
    - Integrate WhatsAppWidget
    - Style with brand guidelines
    - _Requirements: 4.1, 4.2, 10.1, 10.3_
  
  - [ ] 14.2 Add TestimonialsPage to routing
    - Update `src/app/App.tsx` routing configuration
    - Add route for `/testimonials` path
    - Implement lazy loading for TestimonialsPage
    - _Requirements: 4.2_
  
  - [ ]* 14.3 Write unit tests for TestimonialsPage
    - Test page renders testimonials grid
    - Test filter functionality works
    - Test sort functionality works
    - Test testimonial submission form is present
    - Test pagination/infinite scroll
    - _Requirements: 10.1, 10.3_

- [ ] 15. Remove obsolete pages safely
  - [ ] 15.1 Identify and document obsolete pages
    - Review current pages and identify obsolete ones
    - Document removed pages for reference
    - Verify no critical dependencies exist
    - _Requirements: 5.1, 5.5_
  
  - [ ] 15.2 Remove obsolete page components and routes
    - Remove obsolete page component files
    - Update `src/app/App.tsx` to remove obsolete routes
    - Remove navigation links to obsolete pages from Header and Footer
    - _Requirements: 5.2, 5.3_
  
  - [ ] 15.3 Implement redirects or 404 handling
    - Create 404 error page component
    - Implement redirects for removed pages to appropriate alternatives
    - Update routing to handle non-existent paths
    - _Requirements: 5.4, 20.3_
  
  - [ ]* 15.4 Write unit tests for page removal
    - Test removed pages are not in navigation
    - Test removed page routes return 404 or redirect
    - Test 404 page displays helpful navigation links
    - _Requirements: 5.2, 5.3, 5.4_
  
  - [ ]* 15.5 Write property test for removed pages not in navigation
    - **Property 4: Removed Pages Not in Navigation**
    - **Validates: Requirements 5.2**
    - Test that for any removed page, it doesn't appear in navigation menus
  
  - [ ]* 15.6 Write property test for removed pages not in routing
    - **Property 5: Removed Pages Not in Routing**
    - **Validates: Requirements 5.3**
    - Test that for any removed page, its route doesn't exist in routing configuration
  
  - [ ]* 15.7 Write property test for removed pages 404 handling
    - **Property 6: Removed Pages Return 404 or Redirect**
    - **Validates: Requirements 5.4**
    - Test that for any removed page URL, accessing it returns 404 or redirects
  
  - [ ]* 15.8 Write property test for 404 error handling
    - **Property 37: 404 Error Handling**
    - **Validates: Requirements 20.3**
    - Test that for any non-existent URL, system displays 404 page with navigation links

- [ ] 16. Checkpoint - Ensure all core features work
  - Verify all new components render correctly
  - Test WhatsApp widget on multiple pages
  - Test Google Maps integration
  - Test all forms (contact, newsletter, testimonial)
  - Test navigation to all pages
  - Ensure all tests pass, ask the user if questions arise

- [ ] 17. Implement mobile responsiveness across all pages
  - [ ] 17.1 Implement responsive layouts for all components
    - Review all page components for mobile responsiveness
    - Update layouts to use mobile-first responsive design
    - Ensure proper breakpoints for mobile, tablet, desktop
    - Test touch-friendly interactive elements (44x44px minimum)
    - Optimize images for mobile devices
    - Test text readability across all device sizes
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_
  
  - [ ]* 17.2 Write unit tests for mobile responsiveness
    - Test components render correctly at mobile breakpoints
    - Test touch target sizes meet minimum requirements
    - Test mobile menu functionality
    - Test image optimization for mobile
    - _Requirements: 13.1, 13.4, 13.5_
  
  - [ ]* 17.3 Write property test for responsive design
    - **Property 3: Responsive Design Across Viewports**
    - **Validates: Requirements 2.5, 4.4, 13.1, 13.2, 13.3**
    - Test that for any page and viewport size, page displays responsive layout without horizontal scrolling
  
  - [ ]* 17.4 Write property test for touch-friendly elements
    - **Property 21: Touch-Friendly Interactive Elements**
    - **Validates: Requirements 13.4**
    - Test that for any interactive element on mobile, element has minimum 44x44px touch target

- [ ] 18. Implement accessibility features
  - [ ] 18.1 Add accessibility attributes to all components
    - Add alt text to all images across all pages
    - Ensure color contrast ratios meet WCAG 2.1 AA standards
    - Implement keyboard navigation support for all interactive elements
    - Add ARIA labels to icon buttons and unlabeled elements
    - Associate labels with form inputs properly
    - Ensure visible focus indicators for keyboard navigation
    - Test with screen reader compatibility
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6_
  
  - [ ]* 18.2 Write unit tests for accessibility
    - Test all images have alt attributes
    - Test form inputs have associated labels
    - Test ARIA labels are present on icon buttons
    - Test focus indicators are visible
    - _Requirements: 18.1, 18.4, 18.5, 18.6_
  
  - [ ]* 18.3 Write property test for image alt text
    - **Property 26: Image Alt Text**
    - **Validates: Requirements 18.1**
    - Test that for any image, it has an alt attribute with descriptive text
  
  - [ ]* 18.4 Write property test for color contrast
    - **Property 27: Color Contrast Compliance**
    - **Validates: Requirements 18.2**
    - Test that for any text element, it has sufficient color contrast ratio against background
  
  - [ ]* 18.5 Write property test for keyboard navigation
    - **Property 28: Keyboard Navigation Support**
    - **Validates: Requirements 18.3**
    - Test that for any interactive element, it's accessible via keyboard navigation
  
  - [ ]* 18.6 Write property test for ARIA labels
    - **Property 29: ARIA Labels Present**
    - **Validates: Requirements 18.4**
    - Test that for any interactive element without visible text, it has appropriate ARIA labels
  
  - [ ]* 18.7 Write property test for form label association
    - **Property 30: Form Label Association**
    - **Validates: Requirements 18.5**
    - Test that for any form input, it has a properly associated label element
  
  - [ ]* 18.8 Write property test for visible focus indicators
    - **Property 31: Visible Focus Indicators**
    - **Validates: Requirements 18.6**
    - Test that for any interactive element, when focused, a visible focus indicator is displayed

- [ ] 19. Implement SEO optimization
  - [ ] 19.1 Add SEO meta tags to all pages
    - Add descriptive meta titles to all pages
    - Add meta descriptions to all pages
    - Ensure semantic heading hierarchy (h1-h6) on all pages
    - Add structured data markup for healthcare services
    - Update sitemap.xml with all new pages
    - Add Open Graph tags for social media sharing
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6_
  
  - [ ]* 19.2 Write unit tests for SEO
    - Test all pages have meta title tags
    - Test all pages have meta description tags
    - Test heading hierarchy is correct on all pages
    - Test Open Graph tags are present
    - _Requirements: 19.1, 19.2, 19.3, 19.6_
  
  - [ ]* 19.3 Write property test for page meta titles
    - **Property 32: Page Meta Titles**
    - **Validates: Requirements 19.1**
    - Test that for any page, it has a descriptive meta title tag
  
  - [ ]* 19.4 Write property test for page meta descriptions
    - **Property 33: Page Meta Descriptions**
    - **Validates: Requirements 19.2**
    - Test that for any page, it has a meta description tag
  
  - [ ]* 19.5 Write property test for semantic heading hierarchy
    - **Property 34: Semantic Heading Hierarchy**
    - **Validates: Requirements 19.3**
    - Test that for any page, heading elements follow proper hierarchical order
  
  - [ ]* 19.6 Write property test for Open Graph tags
    - **Property 35: Open Graph Tags**
    - **Validates: Requirements 19.6**
    - Test that for any page, it includes Open Graph meta tags

- [ ] 20. Implement performance optimization
  - [ ] 20.1 Optimize page load performance
    - Implement lazy loading for images below the fold
    - Optimize image sizes and formats (WebP where supported)
    - Implement code splitting for page components
    - Configure static asset caching headers
    - Minimize bundle sizes through tree shaking
    - Test page load times meet 3-second target
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_
  
  - [ ]* 20.2 Write unit tests for performance features
    - Test lazy loading is implemented for below-fold images
    - Test code splitting for page components
    - Test asset caching configuration
    - _Requirements: 17.2, 17.4, 17.5_
  
  - [ ]* 20.3 Write property test for page load performance
    - **Property 23: Page Load Performance**
    - **Validates: Requirements 17.1**
    - Test that for any page, initial content loads within 3 seconds
  
  - [ ]* 20.4 Write property test for image lazy loading
    - **Property 24: Image Lazy Loading**
    - **Validates: Requirements 17.2**
    - Test that for any below-fold image, it's lazy-loaded
  
  - [ ]* 20.5 Write property test for static asset caching
    - **Property 25: Static Asset Caching**
    - **Validates: Requirements 17.5**
    - Test that for any static asset, it's served with appropriate cache headers

- [ ] 21. Implement error handling and user feedback
  - [ ] 21.1 Add comprehensive error handling
    - Implement error boundaries for component errors
    - Add network error handling with retry options
    - Create user-friendly error messages for all failure scenarios
    - Implement fallback UI for failed components
    - Add error logging for debugging
    - Test error recovery workflows
    - _Requirements: 20.1, 20.2, 20.4_
  
  - [ ]* 21.2 Write unit tests for error handling
    - Test error boundaries catch component errors
    - Test network error handling displays retry options
    - Test form submission errors display user-friendly messages
    - Test 404 page displays correctly
    - _Requirements: 20.1, 20.2, 20.3_
  
  - [ ]* 21.3 Write property test for network error retry
    - **Property 38: Network Error Retry Options**
    - **Validates: Requirements 20.4**
    - Test that for any failed network request, system provides retry options or alternative contact methods

- [ ] 22. Implement brand guidelines compliance
  - [ ] 22.1 Apply brand guidelines across all components
    - Ensure color palette (blue, red, orange, white) is used consistently
    - Display tagline "Family-Friendly, Client-Centred" prominently
    - Display subtext "Delivering healthcare products and services with integrity and excellence"
    - Apply clean typography (Roboto/Open Sans) consistently
    - Display Med-Vical logo consistently in header
    - Display accreditation badges (NHIA, EDOHIS) appropriately
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 14.1, 14.2, 14.3_
  
  - [ ]* 22.2 Write unit tests for brand compliance
    - Test tagline is displayed on homepage
    - Test logo is present in header
    - Test accreditation badges are displayed
    - Test color palette is applied consistently
    - _Requirements: 12.2, 12.3, 12.5, 14.1, 14.2_
  
  - [ ]* 22.3 Write property test for logo consistency
    - **Property 20: Logo Consistency**
    - **Validates: Requirements 12.5**
    - Test that for any page, Med-Vical logo is displayed in header

- [ ] 23. Final checkpoint and integration testing
  - Run all unit tests and ensure they pass
  - Run all property-based tests and ensure they pass
  - Test complete user workflows end-to-end
  - Test all pages on mobile, tablet, and desktop devices
  - Test all forms submit correctly
  - Test WhatsApp integration on all pages
  - Test Google Maps functionality
  - Test navigation across all pages
  - Test accessibility with screen readers
  - Run Lighthouse audit for performance, accessibility, SEO
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties from the design document
- Unit tests validate specific examples, edge cases, and integration points
- Checkpoints ensure incremental validation at key milestones
- All new features integrate with existing React/TypeScript codebase structure
- Implementation follows mobile-first responsive design principles
- All components maintain accessibility compliance (WCAG 2.1 AA)
- Performance optimization is built into the implementation process
