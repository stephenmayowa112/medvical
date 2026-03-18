# NewsletterForm Component

## Overview

The `NewsletterForm` component provides email subscription functionality for Med-Vical International's newsletter. It supports both inline (footer) and standalone display variants with GDPR-compliant consent handling.

## Features

- **Email validation** with Zod schema
- **Optional name field** for personalization
- **Duplicate email detection** to prevent multiple subscriptions
- **GDPR-compliant consent checkbox** with privacy policy link
- **Inline and standalone variants** for different use cases
- **Success/error feedback** with user-friendly messages
- **Retry logic** with exponential backoff for network failures
- **Loading states** during submission

## Usage

### Inline Variant (Footer)

```tsx
import { NewsletterForm } from './components/features';

function Footer() {
  return (
    <footer>
      <div className="newsletter-section">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get health tips and updates</p>
        <NewsletterForm inline />
      </div>
    </footer>
  );
}
```

### Standalone Variant (Dedicated Section)

```tsx
import { NewsletterForm } from './components/features';

function NewsletterSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2>Stay Updated</h2>
        <p>Subscribe to receive health tips, news, and exclusive content</p>
        <NewsletterForm className="max-w-md mx-auto" />
      </div>
    </section>
  );
}
```

## Props

```typescript
interface NewsletterFormProps {
  inline?: boolean;      // Display as inline form (default: false)
  className?: string;    // Additional CSS classes
}
```

### `inline`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When `true`, displays a compact form suitable for footers with email-only input. When `false`, displays a full form with optional name field.

### `className`
- **Type**: `string`
- **Optional**: Yes
- **Description**: Additional CSS classes to apply to the form container.

## Validation Rules

### Email (Required)
- Must be a valid email format
- Cannot be empty
- Checked for duplicates before submission

### Name (Optional)
- Minimum 2 characters if provided
- Maximum 100 characters
- Only shown in standalone variant

### Consent (Required)
- User must check the GDPR consent checkbox
- Links to privacy policy for transparency

## API Integration

The component uses the `useNewsletter` hook which handles:

1. **Duplicate Detection**: Checks if email is already subscribed
2. **API Submission**: Posts to `/api/newsletter/subscribe` endpoint
3. **Retry Logic**: Automatically retries failed requests with exponential backoff (1s, 2s, 4s)
4. **Error Handling**: Provides user-friendly error messages

### Expected API Endpoint

```typescript
POST /api/newsletter/subscribe

Request Body:
{
  email: string;
  name?: string;
  subscribedAt: string;  // ISO date
  source: string;        // Page URL where subscription occurred
}

Response:
{
  success: boolean;
  message: string;
}
```

## States

### Loading State
- Displays spinner in submit button
- Disables all form inputs
- Shows "Subscribing..." text

### Success State
- Shows green success alert
- Displays confirmation message
- Resets form fields
- Different messages for inline vs standalone

### Error State
- Shows red error alert
- Displays specific error message
- Handles duplicate email errors separately
- Form remains filled for retry

## Accessibility

- All inputs have proper labels
- Form validation errors are announced
- Keyboard navigation supported
- Focus management during submission
- ARIA labels for icon buttons
- Privacy policy link opens in new tab with `rel="noopener noreferrer"`

## GDPR Compliance

The component includes:

1. **Explicit Consent**: Required checkbox before submission
2. **Privacy Policy Link**: Direct link to privacy policy
3. **Unsubscribe Notice**: Informs users they can unsubscribe anytime (standalone variant)
4. **Transparent Data Usage**: Clear messaging about newsletter content

## Styling

The component uses:
- Tailwind CSS utility classes
- shadcn/ui components (Form, Input, Button, Alert, Checkbox)
- Lucide React icons
- Dark mode support via Tailwind dark: variants

### Inline Variant Styling
- Horizontal layout with email input and icon button
- Compact spacing
- Minimal labels

### Standalone Variant Styling
- Vertical layout with full labels
- Generous spacing
- Full-width submit button

## Error Messages

### Duplicate Email
```
"This email is already subscribed to our newsletter."
```

### Network Error
```
"An unexpected error occurred. Please try again later."
```

### Validation Errors
- "Email is required"
- "Please enter a valid email address"
- "Name must be at least 2 characters" (if name provided)

## Integration with useNewsletter Hook

The component relies on the `useNewsletter` hook which provides:

```typescript
interface UseNewsletterReturn {
  subscribe: (data: NewsletterFormData) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  reset: () => void;
}
```

## Requirements Validation

This component validates the following requirements:

- **9.1**: Newsletter subscription functionality in footer ✓
- **9.2**: Email format validation ✓
- **9.3**: Add email to subscription list ✓
- **9.4**: Display confirmation message ✓
- **9.5**: Duplicate email detection ✓
- **9.6**: GDPR compliance with privacy policy link ✓

## Future Enhancements

Potential improvements:
- Email verification via confirmation link
- Subscription preferences (health tips, promotions, events)
- Multi-language support
- Integration with email marketing platforms (Mailchimp, SendGrid)
- Analytics tracking for subscription sources
- A/B testing for conversion optimization
