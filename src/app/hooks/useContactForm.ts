import { useState } from 'react';
import { ContactFormData } from '../utils/validation';

interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  maxRetries?: number;
}

interface UseContactFormReturn {
  submitForm: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  reset: () => void;
}

// Department routing based on inquiry type
const getDepartmentEmail = (inquiryType: ContactFormData['inquiryType']): string => {
  const departmentMap: Record<ContactFormData['inquiryType'], string> = {
    'general': 'info@medvical.com',
    'medical-services': 'mmc@medvical.com',
    'pharmacy-supplies': 'mpps@medvical.com',
    'health-programs': 'mhs@medvical.com',
    'emergency': 'emergency@medvical.com'
  };
  
  return departmentMap[inquiryType];
};

// Simulate API call with retry logic
const submitToAPI = async (
  data: ContactFormData,
  retryCount: number = 0,
  maxRetries: number = 3
): Promise<void> => {
  try {
    // TODO: Replace with actual API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        department: getDepartmentEmail(data.inquiryType),
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit form: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Retry logic for network failures
    if (retryCount < maxRetries) {
      // Exponential backoff: wait 1s, 2s, 4s
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      return submitToAPI(data, retryCount + 1, maxRetries);
    }
    
    throw error;
  }
};

export const useContactForm = (options: UseContactFormOptions = {}): UseContactFormReturn => {
  const { onSuccess, onError, maxRetries = 3 } = options;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      await submitToAPI(data, 0, maxRetries);
      
      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An unexpected error occurred. Please try again or contact us directly.';
      
      setError(errorMessage);
      onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
    reset
  };
};
