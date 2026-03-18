# ContactForm Component

## Overview

The `ContactForm` component is an enhanced contact form with inquiry type selection, real-time validation, and error handling. It integrates React Hook Form for form state management and Zod for validation.

## Features

- **Form Fields**: name, email, phone, inquiryType, message
- **Inquiry Types**: 
  - General Inquiry
  - Medical Services
  - Pharmacy/Supplies
  - Health Programs
  - Emergency Services
- **Real-time Validation**: Validates all fields with error messages
- **Loading State**: Shows loading indicator during submission
- **Success/Error Feedback**: Displays appropriate messages after submission
- **Accessibility**: Proper label associations and ARIA attributes
- **Department Routing**: Routes inquiries to appropriate department based on inquiry type
- **Retry Logic**: Automatically retries failed submissions with exponential backoff

## Usage

### Basic Usage

```tsx
import { ContactForm } from './components/features/ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
```

### With Default Inquiry Type

```tsx
import { ContactForm } from './components/features/ContactForm';

function MedicalServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Medical Services Inquiry</h1>
      <ContactForm defaultInquiryType="medical-services" />
    </div>
  );
}
```

### With Custom Styling

```tsx
import { ContactForm } from './components/features/ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <ContactForm className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultInquiryType` | `'general' \| 'medical-services' \| 'pharmacy-supplies' \| 'health-programs' \| 'emergency'` | `'general'` | Pre-selects an inquiry type |
| `className` | `string` | `undefined` | Additional CSS classes for the form container |

## Validation Rules

- **Name**: Required, 2-100 characters
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number format
- **Inquiry Type**: Required selection
- **Message**: Required, 10-1000 characters

## Department Routing

The form automatically routes inquiries to the appropriate department:

- **General Inquiry** → info@medvical.com
- **Medical Services** → mmc@medvical.com
- **Pharmacy/Supplies** → mpps@medvical.com
- **Health Programs** → mhs@medvical.com
- **Emergency Services** → emergency@medvical.com

## Error Handling

The form includes comprehensive error handling:

1. **Validation Errors**: Real-time field validation with error messages
2. **Network Errors**: Automatic retry with exponential backoff (up to 3 retries)
3. **Submission Errors**: User-friendly error messages with alternative contact methods

## Accessibility

The component follows accessibility best practices:

- Proper label associations using `htmlFor` and `id`
- ARIA attributes for form controls
- Error messages linked to form fields
- Keyboard navigation support
- Focus indicators
- Screen reader compatible

## Dependencies

- `react-hook-form`: Form state management
- `@hookform/resolvers/zod`: Zod integration for React Hook Form
- `zod`: Schema validation
- `lucide-react`: Icons
- shadcn/ui components: `Form`, `Input`, `Textarea`, `Select`, `Button`, `Alert`

## Related Files

- **Validation Schema**: `src/app/utils/validation.ts`
- **Form Hook**: `src/app/hooks/useContactForm.ts`
- **Type Definitions**: Exported from validation schema

## Requirements Validated

This component validates the following requirements:

- **8.1**: Contact forms provided on relevant pages
- **8.2**: Form fields for name, email, phone, inquiry type, and message
- **8.3**: Inquiry type options (General, Medical Services, Pharmacy/Supplies, Health Programs, Emergency)
- **8.4**: Validation of all required fields before submission
- **8.5**: Confirmation message on successful submission and department routing
- **8.6**: Error message with alternative contact methods on failure
- **18.5**: Proper label associations for accessibility
- **20.1**: User-friendly error messages on form submission failure
- **20.4**: Retry options for network failures
