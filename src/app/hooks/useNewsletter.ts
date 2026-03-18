import { useState } from 'react';
import { NewsletterFormData } from '../utils/validation';

interface UseNewsletterOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  maxRetries?: number;
}

interface UseNewsletterReturn {
  subscribe: (data: NewsletterFormData) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  reset: () => void;
}

// Store subscribed emails in memory (in production, this would be in a database)
const subscribedEmails = new Set<string>();

// Simulate API call with retry logic
const submitToAPI = async (
  data: NewsletterFormData,
  retryCount: number = 0,
  maxRetries: number = 3
): Promise<void> => {
  try {
    // Check for duplicate email
    if (subscribedEmails.has(data.email.toLowerCase())) {
      throw new Error('DUPLICATE_EMAIL');
    }

    // TODO: Replace with actual API endpoint
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        subscribedAt: new Date().toISOString(),
        source: window.location.pathname,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to subscribe: ${response.statusText}`);
    }

    // Add email to subscribed set
    subscribedEmails.add(data.email.toLowerCase());

    const result = await response.json();
    return result;
  } catch (error) {
    // Don't retry duplicate email errors
    if (error instanceof Error && error.message === 'DUPLICATE_EMAIL') {
      throw error;
    }

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

export const useNewsletter = (options: UseNewsletterOptions = {}): UseNewsletterReturn => {
  const { onSuccess, onError, maxRetries = 3 } = options;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (data: NewsletterFormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      await submitToAPI(data, 0, maxRetries);
      
      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      let errorMessage: string;
      
      if (err instanceof Error && err.message === 'DUPLICATE_EMAIL') {
        errorMessage = 'This email is already subscribed to our newsletter.';
      } else {
        errorMessage = err instanceof Error 
          ? err.message 
          : 'An unexpected error occurred. Please try again later.';
      }
      
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
    subscribe,
    isSubmitting,
    isSuccess,
    error,
    reset
  };
};
