# Design Document: Website Content Revamp

## Overview

This design document outlines the technical approach for revamping the Med-Vical International website content. The project involves updating all existing pages with new content, restructuring layouts, updating navigation, creating new pages (Testimonials), removing obsolete pages, and integrating new features including WhatsApp live chat, Google Maps, enhanced contact forms, newsletter subscription, and testimonial submission systems.

### Project Scope

The website is a React/TypeScript single-page application (SPA) using:
- React 18+ with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- shadcn/ui component library
- Vite as the build tool

### Key Objectives

1. Update content across all existing pages to reflect current services and information
2. Restructure page layouts for improved user experience and information hierarchy
3. Implement new interactive features (WhatsApp chat, Google Maps, forms)
4. Create new pages (Testimonials page)
5. Remove obsolete pages safely
6. Ensure mobile responsiveness and accessibility
7. Optimize performance and SEO
8. Maintain brand consistency throughout

### Design Principles

- Component-based architecture with reusable UI components
- Mobile-first responsive design
- Progressive enhancement for feature additions
- Separation of concerns (presentation, business logic, data)
- Accessibility-first approach (WCAG 2.1 AA compliance)
- Performance optimization through code splitting and lazy loading



## Architecture

### System Architecture

The website follows a component-based architecture pattern with clear separation between:

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                     │
├─────────────────────────────────────────────────────────┤
│                    React Application                     │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Routing Layer (React Router)         │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │                  Page Components                  │  │
│  │  (HomePage, ServicesPage, TestimonialsPage, etc) │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Feature Components                   │  │
│  │  (WhatsAppWidget, GoogleMaps, ContactForm, etc)  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │                 UI Components                     │  │
│  │     (Button, Card, Input, Form, Badge, etc)      │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │              State Management                     │  │
│  │    (React Context/Hooks for form state, etc)     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                  External Services                       │
│  • WhatsApp Business API                                │
│  • Google Maps JavaScript API                           │
│  • Email Service (Newsletter/Contact Forms)             │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure



```
src/
├── app/
│   ├── App.tsx                      # Main app component with routing
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Updated navigation
│   │   │   └── Footer.tsx           # Updated footer with newsletter
│   │   ├── features/
│   │   │   ├── WhatsAppWidget.tsx   # NEW: Floating WhatsApp chat
│   │   │   ├── GoogleMapsEmbed.tsx  # NEW: Google Maps integration
│   │   │   ├── ContactForm.tsx      # UPDATED: Enhanced with inquiry types
│   │   │   ├── NewsletterForm.tsx   # NEW: Newsletter subscription
│   │   │   ├── TestimonialCard.tsx  # NEW: Testimonial display
│   │   │   └── TestimonialForm.tsx  # NEW: Testimonial submission
│   │   ├── ui/                      # Existing shadcn/ui components
│   │   └── [existing components]    # About, Hero, Services, etc.
│   ├── pages/
│   │   ├── HomePage.tsx             # UPDATED: New content
│   │   ├── ServicesPage.tsx         # UPDATED: New content
│   │   ├── MedicalCentrePage.tsx    # UPDATED: New content
│   │   ├── PharmacySuppliesPage.tsx # UPDATED: New content
│   │   ├── HealthEducationPage.tsx  # UPDATED: New content (MHS)
│   │   ├── TestimonialsPage.tsx     # NEW: Testimonials page
│   │   └── [other pages]
│   ├── data/
│   │   ├── content.ts               # NEW: Centralized content data
│   │   ├── testimonials.ts          # NEW: Testimonials data
│   │   └── [existing data files]
│   ├── hooks/
│   │   ├── useContactForm.ts        # NEW: Contact form logic
│   │   ├── useNewsletter.ts         # NEW: Newsletter logic
│   │   └── useTestimonials.ts       # NEW: Testimonials logic
│   └── utils/
│       ├── validation.ts            # Form validation utilities
│       └── api.ts                   # API integration utilities
├── config/
│   └── constants.ts                 # Configuration constants
└── styles/                          # Existing styles
```

### Technology Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **State Management**: React Context API and hooks
- **External APIs**:
  - WhatsApp Business API (via wa.me links)
  - Google Maps JavaScript API
  - Email service for forms (to be determined)



## Components and Interfaces

### Layout Components

#### Header Component (Updated)

**Purpose**: Main navigation with updated structure reflecting three divisions

**Props Interface**:
```typescript
interface HeaderProps {
  // No props needed - uses React Router hooks internally
}
```

**Key Features**:
- Updated navigation menu with three main divisions (MMC, MPPS, MHS)
- Dropdown menu for services
- Mobile-responsive hamburger menu
- Sticky header with backdrop blur
- Active route highlighting
- Link to simHealth Africa (external)

**Navigation Structure**:
```
Home
About Us
Our Services ▼
  ├─ All Services
  ├─ Med-Vical Medical Centre (MMC)
  ├─ Med-Vical Pharmacy & Supplies (MPPS)
  └─ Med-Vical Health (MHS)
Health Education
Testimonials (NEW)
Contact Us
simHealth Africa (External Link)
```

#### Footer Component (Updated)

**Purpose**: Site footer with newsletter subscription and updated links

**Props Interface**:
```typescript
interface FooterProps {
  // No props needed
}
```

**Key Features**:
- Newsletter subscription form
- Updated quick links
- Office locations with contact info
- Social media links
- Brand tagline and accreditation badges
- Link to simHealth Africa



### Feature Components

#### WhatsAppWidget Component (NEW)

**Purpose**: Floating WhatsApp chat button for quick customer contact

**Props Interface**:
```typescript
interface WhatsAppWidgetProps {
  phoneNumber: string;           // WhatsApp business number
  defaultMessage?: string;        // Pre-filled message
  position?: 'bottom-right' | 'bottom-left';
  division?: 'MMC' | 'MPPS' | 'MHS';  // Auto-route to correct division
}
```

**Behavior**:
- Floating button fixed to bottom-right corner
- Click opens WhatsApp chat in new tab
- Pre-populated message based on current page/division
- Smooth animation on hover
- Mobile-optimized touch target
- Different phone numbers for different divisions

**Implementation**:
- Uses `wa.me` API for WhatsApp links
- Context-aware messaging based on page
- Accessible with proper ARIA labels

#### GoogleMapsEmbed Component (NEW)

**Purpose**: Display office locations on interactive Google Map

**Props Interface**:
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
}

interface GoogleMapsEmbedProps {
  locations: Location[];
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  height?: string;
  className?: string;
}
```

**Key Features**:
- Multiple location markers (Benin City, Lagos, Abuja)
- Info windows with location details
- Directions link for each location
- Responsive sizing
- Loading state
- Error handling for API failures

**Implementation**:
- Google Maps JavaScript API
- Custom markers with Med-Vical branding
- Lazy loading for performance



#### ContactForm Component (UPDATED)

**Purpose**: Enhanced contact form with inquiry type selection

**Props Interface**:
```typescript
type InquiryType = 
  | 'general'
  | 'medical-services'
  | 'pharmacy-supplies'
  | 'health-programs'
  | 'emergency';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  defaultInquiryType?: InquiryType;
  className?: string;
}
```

**Validation Rules**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Required, valid phone format
- Inquiry Type: Required selection
- Message: Required, min 10 characters

**Key Features**:
- Inquiry type dropdown with icons
- Real-time validation
- Loading state during submission
- Success/error feedback
- Accessible form labels and error messages
- Auto-routing to appropriate department based on inquiry type

#### NewsletterForm Component (NEW)

**Purpose**: Email subscription for newsletters

**Props Interface**:
```typescript
interface NewsletterFormData {
  email: string;
  name?: string;
}

interface NewsletterFormProps {
  onSubmit: (data: NewsletterFormData) => Promise<void>;
  inline?: boolean;  // For footer vs. standalone display
  className?: string;
}
```

**Validation Rules**:
- Email: Required, valid email format
- Name: Optional, min 2 characters if provided

**Key Features**:
- Simple email input with submit button
- Duplicate email detection
- Privacy policy link
- Success confirmation
- Error handling
- GDPR-compliant consent checkbox



#### TestimonialCard Component (NEW)

**Purpose**: Display individual testimonial with patient information

**Props Interface**:
```typescript
interface Testimonial {
  id: string;
  name: string;
  isAnonymous: boolean;
  date: string;
  rating: number;  // 1-5 stars
  text: string;
  photo?: string;
  service?: string;  // Which division/service
  verified: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}
```

**Key Features**:
- Star rating display
- Patient name or "Anonymous"
- Date formatting
- Service badge
- Verified badge for authenticated testimonials
- Optional patient photo
- Responsive card layout
- Smooth animations

#### TestimonialForm Component (NEW)

**Purpose**: Allow patients to submit testimonials

**Props Interface**:
```typescript
interface TestimonialFormData {
  name: string;
  email: string;
  isAnonymous: boolean;
  rating: number;
  text: string;
  service: string;
  photo?: File;
}

interface TestimonialFormProps {
  onSubmit: (data: TestimonialFormData) => Promise<void>;
  className?: string;
}
```

**Validation Rules**:
- Name: Required unless anonymous
- Email: Required, valid format
- Rating: Required, 1-5 stars
- Text: Required, min 20 characters, max 500 characters
- Service: Required selection
- Photo: Optional, max 5MB, jpg/png only

**Key Features**:
- Star rating selector
- Anonymous option toggle
- Service dropdown
- Character counter for testimonial text
- Photo upload with preview
- Terms acceptance checkbox
- Submission confirmation



### Page Components

#### HomePage (UPDATED)

**Content Updates**:
- Updated hero section with new tagline and messaging
- Three divisions overview (MMC, MPPS, MHS)
- Featured services from each division
- Testimonials carousel
- Updated stats section
- WhatsApp widget integration
- Newsletter signup CTA

**Component Structure**:
```typescript
<HomePage>
  <Hero />                    // Updated content
  <DivisionsOverview />       // NEW: Three divisions
  <Stats />                   // Updated statistics
  <FeaturedServices />        // Updated services
  <TestimonialsCarousel />    // NEW: Testimonials
  <WhyChooseUs />            // Updated content
  <NewsletterCTA />          // NEW: Newsletter signup
  <Contact />                // Updated with new form
</HomePage>
```

#### ServicesPage (UPDATED)

**Content Updates**:
- Overview of all three divisions
- Service cards for MMC, MPPS, MHS
- Links to detailed division pages
- WhatsApp ordering integration
- Contact forms for each division

#### MedicalCentrePage (UPDATED)

**Content Updates**:
- Updated specialty clinics list
- NICU/PICU information
- 24/7 ambulance service details
- Walk-in clinic information
- Diagnostic services
- Appointment booking integration

#### PharmacySuppliesPage (UPDATED)

**Content Updates**:
- Retail vs. wholesale distinction
- Product categories
- Online ordering via WhatsApp
- Delivery information
- Wholesale inquiry form

#### HealthEducationPage (UPDATED - MHS)

**Content Updates**:
- School health programme
- Community outreach initiatives
- Health retainership services
- AccessHealth platform information
- Event calendar
- Educational resources

#### TestimonialsPage (NEW)

**Purpose**: Display and collect patient testimonials

**Component Structure**:
```typescript
<TestimonialsPage>
  <PageHeader />
  <TestimonialsGrid>
    {testimonials.map(t => <TestimonialCard testimonial={t} />)}
  </TestimonialsGrid>
  <TestimonialFormSection>
    <TestimonialForm />
  </TestimonialFormSection>
</TestimonialsPage>
```

**Key Features**:
- Grid layout of testimonials
- Filter by service/division
- Sort by date/rating
- Pagination or infinite scroll
- Submission form at bottom
- Success stories highlight section



## Data Models

### Content Data Model

**Purpose**: Centralized content management for all pages

```typescript
interface PageContent {
  id: string;
  page: string;
  section: string;
  content: {
    heading?: string;
    subheading?: string;
    body?: string;
    cta?: {
      text: string;
      link: string;
    };
    items?: string[];
  };
  metadata: {
    lastUpdated: string;
    author: string;
  };
}

interface DivisionInfo {
  id: 'MMC' | 'MPPS' | 'MHS';
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  services: string[];
  contactPhone: string;
  whatsappNumber: string;
}
```

### Location Data Model

```typescript
interface OfficeLocation {
  id: string;
  name: string;
  city: 'Benin City' | 'Lagos' | 'Abuja';
  address: string;
  phone: string;
  email: string;
  hours: {
    weekday: string;
    weekend: string;
    emergency: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];  // Which divisions operate here
}
```

### Testimonial Data Model

```typescript
interface Testimonial {
  id: string;
  name: string;
  isAnonymous: boolean;
  email: string;  // Not displayed publicly
  date: string;   // ISO date string
  rating: number; // 1-5
  text: string;
  service: string;
  division: 'MMC' | 'MPPS' | 'MHS';
  photo?: string; // URL to photo
  verified: boolean;
  approved: boolean;  // Admin approval status
  createdAt: string;
  updatedAt: string;
}
```

### Contact Form Data Model

```typescript
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  message: string;
  division?: 'MMC' | 'MPPS' | 'MHS';
  status: 'pending' | 'responded' | 'closed';
  submittedAt: string;
  respondedAt?: string;
}

type InquiryType = 
  | 'general'
  | 'medical-services'
  | 'pharmacy-supplies'
  | 'health-programs'
  | 'emergency';
```

### Newsletter Subscription Data Model

```typescript
interface NewsletterSubscription {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  source: string;  // Which page they subscribed from
  preferences?: {
    healthTips: boolean;
    promotions: boolean;
    events: boolean;
  };
}
```



### State Management

The application uses React hooks and Context API for state management:

```typescript
// Form state management
interface FormState<T> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

// Newsletter context
interface NewsletterContextValue {
  subscribe: (email: string, name?: string) => Promise<void>;
  isSubscribed: (email: string) => boolean;
  subscriptions: NewsletterSubscription[];
}

// Testimonials context
interface TestimonialsContextValue {
  testimonials: Testimonial[];
  submitTestimonial: (data: TestimonialFormData) => Promise<void>;
  filterByService: (service: string) => Testimonial[];
  sortBy: (field: 'date' | 'rating') => void;
}
```

### API Integration

#### WhatsApp Integration

Uses `wa.me` URL scheme for WhatsApp Business:

```typescript
interface WhatsAppConfig {
  MMC: {
    phone: '2347086080230';
    defaultMessage: 'Hello Med-Vical Medical Centre, I would like to inquire about...';
  };
  MPPS: {
    phone: '2348087874018';
    defaultMessage: 'Hello Med-Vical Supplies, I need information about...';
  };
  MHS: {
    phone: '2349018911685';
    defaultMessage: 'Hello Med-Vical Health, I am interested in...';
  };
}

function generateWhatsAppLink(
  division: 'MMC' | 'MPPS' | 'MHS',
  customMessage?: string
): string {
  const config = WhatsAppConfig[division];
  const message = customMessage || config.defaultMessage;
  return `https://wa.me/${config.phone}?text=${encodeURIComponent(message)}`;
}
```

#### Google Maps Integration

Uses Google Maps JavaScript API:

```typescript
interface GoogleMapsConfig {
  apiKey: string;  // From environment variable
  libraries: ['places', 'geometry'];
  version: 'weekly';
}

// Map initialization
function initializeMap(
  container: HTMLElement,
  locations: Location[]
): google.maps.Map {
  const map = new google.maps.Map(container, {
    center: locations[0].coordinates,
    zoom: 6,
    styles: customMapStyles,  // Brand-colored map
  });

  locations.forEach(location => {
    const marker = new google.maps.Marker({
      position: location.coordinates,
      map,
      title: location.name,
      icon: customMarkerIcon,  // Med-Vical branded marker
    });

    const infoWindow = new google.maps.InfoWindow({
      content: createInfoWindowContent(location),
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });

  return map;
}
```

#### Email Service Integration

For contact forms and newsletter:

```typescript
interface EmailServiceConfig {
  provider: 'SendGrid' | 'AWS SES' | 'Custom';
  apiEndpoint: string;
  apiKey: string;
}

async function sendContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }
}

async function subscribeNewsletter(data: NewsletterFormData): Promise<void> {
  const response = await fetch('/api/newsletter/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to subscribe');
  }
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, the following properties have been identified as testable through automated testing. These properties ensure the website functions correctly across all scenarios.

### Property 1: Navigation Links Route Correctly

*For any* navigation link in the header or footer, clicking that link should navigate the user to the correct corresponding page.

**Validates: Requirements 3.3**

### Property 2: New Pages Accessible via Navigation

*For any* newly created page, that page should be accessible through the navigation system (either in the header menu, footer, or both).

**Validates: Requirements 4.2**

### Property 3: Responsive Design Across Viewports

*For any* page and any viewport size (mobile, tablet, desktop), the page should display a responsive layout appropriate for that viewport without horizontal scrolling or broken layouts.

**Validates: Requirements 2.5, 4.4, 13.1, 13.2, 13.3**

### Property 4: Removed Pages Not in Navigation

*For any* page that has been removed from the site, that page should not appear in any navigation menus (header, footer, or sitemaps).

**Validates: Requirements 5.2**

### Property 5: Removed Pages Not in Routing

*For any* page that has been removed, that page's route should not exist in the routing configuration.

**Validates: Requirements 5.3**

### Property 6: Removed Pages Return 404 or Redirect

*For any* removed page URL, attempting to access that URL directly should either redirect to an appropriate alternative page or display a 404 error page.

**Validates: Requirements 5.4**

### Property 7: WhatsApp Widget on All Pages

*For any* page on the website, the WhatsApp widget should be present and accessible to users.

**Validates: Requirements 6.1**

### Property 8: WhatsApp Links Open Correctly

*For any* division (MMC, MPPS, MHS), clicking the WhatsApp button for that division should open a WhatsApp conversation with the correct phone number for that division.

**Validates: Requirements 6.2**

### Property 9: WhatsApp Pre-filled Messages

*For any* WhatsApp ordering link, the link should include a pre-populated message with relevant context about the inquiry.

**Validates: Requirements 6.4**

### Property 10: Map Markers Display Location Details

*For any* office location marker on the Google Map, clicking that marker should display an info window containing the location's address and contact information.

**Validates: Requirements 7.3**

### Property 11: Map Provides Directions

*For any* office location on the Google Map, the location should have a directions link that allows users to get directions to that location.

**Validates: Requirements 7.4**

### Property 12: Maps Responsive on Mobile

*For any* mobile viewport size, the Google Maps integration should maintain full functionality including marker interaction and directions links.

**Validates: Requirements 7.5**

### Property 13: Contact Form Validation

*For any* contact form submission with invalid or missing required fields (name, email, phone, inquiry type, or message), the form should reject the submission and display appropriate validation errors.

**Validates: Requirements 8.4**

### Property 14: Contact Form Success Confirmation

*For any* valid contact form submission, upon successful submission the form should display a confirmation message to the user.

**Validates: Requirements 8.5**

### Property 15: Newsletter Email Validation

*For any* email address entered in the newsletter subscription form, if the email format is invalid, the form should reject the submission with a validation error.

**Validates: Requirements 9.2**

### Property 16: Newsletter Subscription Success

*For any* valid email address submitted to the newsletter form, the system should add that email to the subscription list and display a success confirmation.

**Validates: Requirements 9.3**

### Property 17: Newsletter Duplicate Detection

*For any* email address that is already subscribed to the newsletter, attempting to subscribe again should inform the user that they are already subscribed without creating a duplicate entry.

**Validates: Requirements 9.5**

### Property 18: Testimonial Approval Process

*For any* testimonial submitted through the testimonial form, the testimonial should be stored in a pending state and not displayed publicly until approved by an administrator.

**Validates: Requirements 10.5**

### Property 19: External Link Accessibility

*For any* page on the website, the simHealth Africa external link should be accessible from that page (via navigation or footer).

**Validates: Requirements 11.5**

### Property 20: Logo Consistency

*For any* page on the website, the Med-Vical logo should be displayed in the header.

**Validates: Requirements 12.5**

### Property 21: Touch-Friendly Interactive Elements

*For any* interactive element (button, form input, navigation link) on mobile viewports, the element should have a touch target of at least 44x44 pixels for accessibility.

**Validates: Requirements 13.4**

### Property 22: Office Location Information Complete

*For any* office location displayed on the website, the location should include complete address information, contact phone number, and office hours.

**Validates: Requirements 15.2, 15.3, 15.4**

### Property 23: Page Load Performance

*For any* page on the website, the initial content should load and become interactive within 3 seconds on a standard broadband connection.

**Validates: Requirements 17.1**

### Property 24: Image Lazy Loading

*For any* image that is below the fold (not visible in initial viewport), the image should be lazy-loaded rather than loaded immediately on page load.

**Validates: Requirements 17.2**

### Property 25: Static Asset Caching

*For any* static asset (images, CSS, JavaScript), the asset should be served with appropriate cache headers to enable browser caching for repeat visits.

**Validates: Requirements 17.5**

### Property 26: Image Alt Text

*For any* image on the website, the image should have an alt attribute with descriptive alternative text.

**Validates: Requirements 18.1**

### Property 27: Color Contrast Compliance

*For any* text element on the website, the text should have sufficient color contrast ratio (minimum 4.5:1 for normal text, 3:1 for large text) against its background.

**Validates: Requirements 18.2**

### Property 28: Keyboard Navigation Support

*For any* interactive element on the website, the element should be accessible and operable via keyboard navigation (Tab, Enter, Space keys).

**Validates: Requirements 18.3**

### Property 29: ARIA Labels Present

*For any* interactive element that lacks visible text labels (icon buttons, etc.), the element should have appropriate ARIA labels for screen reader compatibility.

**Validates: Requirements 18.4**

### Property 30: Form Label Association

*For any* form input field, the input should have a properly associated label element (via htmlFor/id or wrapping label).

**Validates: Requirements 18.5**

### Property 31: Visible Focus Indicators

*For any* interactive element, when the element receives keyboard focus, a visible focus indicator should be displayed.

**Validates: Requirements 18.6**

### Property 32: Page Meta Titles

*For any* page on the website, the page should have a descriptive meta title tag in the document head.

**Validates: Requirements 19.1**

### Property 33: Page Meta Descriptions

*For any* page on the website, the page should have a meta description tag in the document head.

**Validates: Requirements 19.2**

### Property 34: Semantic Heading Hierarchy

*For any* page on the website, heading elements (h1-h6) should follow proper hierarchical order without skipping levels.

**Validates: Requirements 19.3**

### Property 35: Open Graph Tags

*For any* page on the website, the page should include Open Graph meta tags for proper social media sharing.

**Validates: Requirements 19.6**

### Property 36: Form Submission Error Messages

*For any* form submission that fails (network error, server error, etc.), the form should display a user-friendly error message explaining the failure.

**Validates: Requirements 20.1**

### Property 37: 404 Error Handling

*For any* non-existent URL path, navigating to that path should display a 404 error page with helpful navigation links back to the main site.

**Validates: Requirements 20.3**

### Property 38: Network Error Retry Options

*For any* network request that fails, the system should provide retry options or display alternative contact methods to the user.

**Validates: Requirements 20.4**



## Error Handling

### Form Validation Errors

All forms implement client-side validation with clear error messages:

```typescript
interface ValidationError {
  field: string;
  message: string;
}

// Example validation rules
const contactFormValidation = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[0-9+\-\s()]+$/,
      message: 'Invalid phone number format',
    },
  },
  message: {
    required: 'Message is required',
    minLength: { value: 10, message: 'Message must be at least 10 characters' },
  },
};
```

### Network Error Handling

```typescript
async function handleApiRequest<T>(
  request: () => Promise<T>
): Promise<{ data?: T; error?: string }> {
  try {
    const data = await request();
    return { data };
  } catch (error) {
    if (error instanceof NetworkError) {
      return {
        error: 'Network connection failed. Please check your internet connection and try again.',
      };
    }
    if (error instanceof ServerError) {
      return {
        error: 'Server error occurred. Please try again later or contact us directly.',
      };
    }
    return {
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
```

### Component Error Boundaries

```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false, error: undefined };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component error:', error, errorInfo);
    // Log to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>We're sorry for the inconvenience. Please refresh the page or contact us.</p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 404 Error Page

```typescript
function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div className="helpful-links">
        <Link to="/">Go to Homepage</Link>
        <Link to="/services">View Our Services</Link>
        <Link to="/#contact">Contact Us</Link>
      </div>
    </div>
  );
}
```

### API Integration Error Handling

```typescript
// Google Maps API error handling
function handleMapsError(error: google.maps.MapsError) {
  switch (error.code) {
    case 'INVALID_REQUEST':
      return 'Invalid map configuration. Please contact support.';
    case 'OVER_QUERY_LIMIT':
      return 'Map temporarily unavailable. Please try again later.';
    case 'REQUEST_DENIED':
      return 'Map access denied. Please contact support.';
    case 'UNKNOWN_ERROR':
      return 'Map loading failed. Please refresh the page.';
    default:
      return 'Unable to load map. Please try again.';
  }
}

// WhatsApp link fallback
function handleWhatsAppError() {
  // If WhatsApp link fails to open, show alternative contact methods
  return {
    phone: '09018911685',
    email: 'info@medvical.com',
    message: 'Unable to open WhatsApp. Please call or email us directly.',
  };
}
```

### Form Submission Error Recovery

```typescript
interface FormErrorRecovery {
  retryable: boolean;
  retryDelay?: number;
  alternativeAction?: {
    label: string;
    action: () => void;
  };
}

function getFormErrorRecovery(error: Error): FormErrorRecovery {
  if (error instanceof NetworkError) {
    return {
      retryable: true,
      retryDelay: 3000,
      alternativeAction: {
        label: 'Call us instead',
        action: () => window.location.href = 'tel:+2349018911685',
      },
    };
  }

  if (error instanceof ValidationError) {
    return {
      retryable: false,
      alternativeAction: {
        label: 'Need help?',
        action: () => window.open('https://wa.me/2349018911685', '_blank'),
      },
    };
  }

  return {
    retryable: true,
    retryDelay: 5000,
  };
}
```



## Testing Strategy

### Dual Testing Approach

The testing strategy employs both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, error conditions, and integration points between components
- **Property-based tests**: Verify universal properties across all inputs through randomized testing

Both approaches are complementary and necessary for comprehensive coverage. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

Unit tests focus on:

1. **Component Rendering**: Verify components render correctly with various props
2. **User Interactions**: Test button clicks, form submissions, navigation
3. **Edge Cases**: Empty states, loading states, error states
4. **Integration Points**: Component communication, context providers
5. **Specific Examples**: Known scenarios from requirements

**Testing Framework**: Vitest + React Testing Library

**Example Unit Tests**:

```typescript
// ContactForm component tests
describe('ContactForm', () => {
  it('renders all required fields', () => {
    render(<ContactForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Inquiry Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('displays validation errors for empty submission', async () => {
    render(<ContactForm onSubmit={jest.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('calls onSubmit with form data when valid', async () => {
    const onSubmit = jest.fn();
    render(<ContactForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        inquiryType: 'general',
        message: 'Test message',
      });
    });
  });
});

// WhatsAppWidget tests
describe('WhatsAppWidget', () => {
  it('generates correct WhatsApp link for MMC division', () => {
    render(<WhatsAppWidget division="MMC" phoneNumber="2347086080230" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/2347086080230'));
  });

  it('includes pre-filled message in link', () => {
    const message = 'Hello, I need help';
    render(<WhatsAppWidget division="MMC" phoneNumber="2347086080230" defaultMessage={message} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining(encodeURIComponent(message)));
  });
});

// Navigation tests
describe('Header Navigation', () => {
  it('displays all three division links', () => {
    render(<Header />);
    expect(screen.getByText('Med-Vical Medical Centre')).toBeInTheDocument();
    expect(screen.getByText('Med-Vical Pharmacy & Supplies')).toBeInTheDocument();
    expect(screen.getByText('Med-Vical Health')).toBeInTheDocument();
  });

  it('opens mobile menu on hamburger click', () => {
    render(<Header />);
    const hamburger = screen.getByLabelText('Toggle menu');
    fireEvent.click(hamburger);
    expect(screen.getByRole('navigation')).toHaveClass('mobile-menu-open');
  });
});
```

### Property-Based Testing

Property-based tests verify universal properties across randomized inputs. Each test runs a minimum of 100 iterations with generated data.

**Testing Library**: fast-check (JavaScript property-based testing library)

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with reference to design document property
- Tag format: `Feature: website-content-revamp, Property {number}: {property_text}`

**Example Property Tests**:

```typescript
import fc from 'fast-check';

// Property 1: Navigation Links Route Correctly
// Feature: website-content-revamp, Property 1: Navigation links route correctly
describe('Property: Navigation Links Route Correctly', () => {
  it('should navigate to correct page for any navigation link', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...navigationLinks),
        (link) => {
          render(<App />);
          const navLink = screen.getByRole('link', { name: link.label });
          fireEvent.click(navLink);
          
          // Verify URL matches expected route
          expect(window.location.pathname).toBe(link.href);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 13: Contact Form Validation
// Feature: website-content-revamp, Property 13: Contact form validation
describe('Property: Contact Form Validation', () => {
  it('should reject any submission with invalid or missing required fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.option(fc.string(), { nil: '' }),
          email: fc.option(fc.emailAddress(), { nil: '' }),
          phone: fc.option(fc.string(), { nil: '' }),
          message: fc.option(fc.string(), { nil: '' }),
        }),
        async (formData) => {
          // Skip if all fields are valid
          const isValid = 
            formData.name && formData.name.length >= 2 &&
            formData.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) &&
            formData.phone && formData.phone.length > 0 &&
            formData.message && formData.message.length >= 10;
          
          if (isValid) return true;
          
          const onSubmit = jest.fn();
          render(<ContactForm onSubmit={onSubmit} />);
          
          if (formData.name) fireEvent.change(screen.getByLabelText('Name'), { target: { value: formData.name } });
          if (formData.email) fireEvent.change(screen.getByLabelText('Email'), { target: { value: formData.email } });
          if (formData.phone) fireEvent.change(screen.getByLabelText('Phone'), { target: { value: formData.phone } });
          if (formData.message) fireEvent.change(screen.getByLabelText('Message'), { target: { value: formData.message } });
          
          fireEvent.click(screen.getByRole('button', { name: /submit/i }));
          
          await waitFor(() => {
            // Should show validation errors and not call onSubmit
            expect(onSubmit).not.toHaveBeenCalled();
            expect(screen.getByText(/required|invalid/i)).toBeInTheDocument();
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 3: Responsive Design Across Viewports
// Feature: website-content-revamp, Property 3: Responsive design across viewports
describe('Property: Responsive Design', () => {
  it('should display responsive layout for any viewport size', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        fc.integer({ min: 320, max: 1920 }),
        fc.integer({ min: 568, max: 1080 }),
        (page, width, height) => {
          // Set viewport size
          global.innerWidth = width;
          global.innerHeight = height;
          window.dispatchEvent(new Event('resize'));
          
          render(<App />);
          navigateTo(page);
          
          // Verify no horizontal scroll
          const body = document.body;
          expect(body.scrollWidth).toBeLessThanOrEqual(width);
          
          // Verify responsive classes applied
          const container = screen.getByTestId('page-container');
          expect(container).toHaveClass(/responsive|mobile|tablet|desktop/);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 26: Image Alt Text
// Feature: website-content-revamp, Property 26: Image alt text
describe('Property: Image Alt Text', () => {
  it('should have alt attribute for any image on the website', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        (page) => {
          render(<App />);
          navigateTo(page);
          
          const images = screen.getAllByRole('img');
          images.forEach(img => {
            expect(img).toHaveAttribute('alt');
            expect(img.getAttribute('alt')).not.toBe('');
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 28: Keyboard Navigation Support
// Feature: website-content-revamp, Property 28: Keyboard navigation support
describe('Property: Keyboard Navigation', () => {
  it('should be accessible via keyboard for any interactive element', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        (page) => {
          render(<App />);
          navigateTo(page);
          
          const interactiveElements = screen.getAllByRole(/button|link|textbox|checkbox|radio/);
          
          interactiveElements.forEach(element => {
            // Should be focusable
            element.focus();
            expect(document.activeElement).toBe(element);
            
            // Should respond to Enter or Space
            const isButton = element.getAttribute('role') === 'button' || element.tagName === 'BUTTON';
            if (isButton) {
              fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });
              // Verify action occurred (implementation-specific)
            }
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### End-to-End Testing

E2E tests verify complete user workflows:

**Testing Framework**: Playwright

**Key Workflows**:
1. User submits contact form and receives confirmation
2. User subscribes to newsletter
3. User navigates through all pages
4. User clicks WhatsApp button and link opens
5. User interacts with Google Maps
6. User submits testimonial
7. Mobile user navigates site
8. User encounters and recovers from errors

### Accessibility Testing

**Tools**:
- axe-core for automated accessibility testing
- Manual testing with screen readers (NVDA, JAWS)
- Keyboard-only navigation testing

**Tests**:
- Color contrast ratios
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Form labels and error messages

### Performance Testing

**Tools**:
- Lighthouse CI for performance metrics
- WebPageTest for real-world performance
- Bundle analyzer for code splitting verification

**Metrics**:
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.8s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms

### Test Coverage Goals

- Unit test coverage: > 80% of components and utilities
- Property test coverage: All identified properties (38 properties)
- E2E test coverage: All critical user workflows
- Accessibility test coverage: All pages and interactive components

