import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Mail, 
  User, 
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send
} from 'lucide-react';
import { newsletterFormSchema, NewsletterFormData } from '../../utils/validation';
import { useNewsletter } from '../../hooks/useNewsletter';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Checkbox } from '../ui/checkbox';

interface NewsletterFormProps {
  inline?: boolean;  // For footer vs. standalone display
  className?: string;
}

export function NewsletterForm({ inline = false, className }: NewsletterFormProps) {
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const { subscribe, isSubmitting, isSuccess, error, reset } = useNewsletter({
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    await subscribe(data);
  };

  // Inline variant for footer
  if (inline) {
    return (
      <div className={className}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Success Message */}
            {isSuccess && (
              <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-sm text-green-800 dark:text-green-200">
                  Thank you for subscribing! Check your email for confirmation.
                </AlertDescription>
              </Alert>
            )}

            {/* Error Message */}
            {error && (
              <Alert className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-sm text-red-800 dark:text-red-200">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input 
                        type="email"
                        placeholder="Enter your email" 
                        {...field}
                        disabled={isSubmitting}
                        className="flex-1"
                      />
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        size="icon"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* GDPR Consent */}
            <div className="flex items-start gap-2">
              <Checkbox 
                id="consent-inline" 
                required
                disabled={isSubmitting}
              />
              <label 
                htmlFor="consent-inline" 
                className="text-xs text-muted-foreground leading-tight cursor-pointer"
              >
                I agree to receive newsletters and accept the{' '}
                <a 
                  href="/privacy-policy" 
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </form>
        </Form>
      </div>
    );
  }

  // Standalone variant for dedicated sections
  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Success Message */}
          {isSuccess && (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Thank you for subscribing to our newsletter! You'll receive health tips, updates, and exclusive content from Med-Vical International.
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Name Field (Optional) */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <User className="inline-block w-4 h-4 mr-2" />
                  Name (Optional)
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your name" 
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Mail className="inline-block w-4 h-4 mr-2" />
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com" 
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* GDPR Consent Checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox 
              id="consent-standalone" 
              required
              disabled={isSubmitting}
            />
            <label 
              htmlFor="consent-standalone" 
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              I agree to receive newsletters from Med-Vical International and accept the{' '}
              <a 
                href="/privacy-policy" 
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Subscribe to Newsletter
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
