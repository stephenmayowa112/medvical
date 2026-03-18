import { z } from 'zod';

// Phone number validation regex (supports various formats)
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(phoneRegex, 'Please enter a valid phone number'),
  
  inquiryType: z.enum([
    'general',
    'medical-services',
    'pharmacy-supplies',
    'health-programs',
    'emergency'
  ], {
    errorMap: () => ({ message: 'Please select an inquiry type' })
  }),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters')
});

// Newsletter subscription validation schema
export const newsletterFormSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .optional()
});

// Testimonial submission validation schema
export const testimonialFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .optional(),
  
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  isAnonymous: z.boolean().default(false),
  
  rating: z.number()
    .min(1, 'Please provide a rating')
    .max(5, 'Rating must be between 1 and 5'),
  
  text: z.string()
    .min(20, 'Testimonial must be at least 20 characters')
    .max(500, 'Testimonial must not exceed 500 characters'),
  
  service: z.string()
    .min(1, 'Please select a service'),
  
  photo: z.instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, 'Photo must be less than 5MB')
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
      'Photo must be a JPG or PNG file'
    )
    .optional()
}).refine(
  (data) => data.isAnonymous || (data.name && data.name.length >= 2),
  {
    message: 'Name is required unless submitting anonymously',
    path: ['name']
  }
);

// Type exports for TypeScript
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
export type TestimonialFormData = z.infer<typeof testimonialFormSchema>;

// Reusable validation functions
export const validateEmail = (email: string): boolean => {
  return z.string().email().safeParse(email).success;
};

export const validatePhone = (phone: string): boolean => {
  return phoneRegex.test(phone);
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};
