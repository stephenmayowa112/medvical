import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  ClipboardList,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { contactFormSchema, ContactFormData } from '../../utils/validation';
import { useContactForm } from '../../hooks/useContactForm';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';

interface ContactFormProps {
  defaultInquiryType?: ContactFormData['inquiryType'];
  className?: string;
}

const inquiryTypeOptions = [
  { value: 'general', label: 'General Inquiry', icon: ClipboardList },
  { value: 'medical-services', label: 'Medical Services', icon: Mail },
  { value: 'pharmacy-supplies', label: 'Pharmacy/Supplies', icon: ClipboardList },
  { value: 'health-programs', label: 'Health Programs', icon: ClipboardList },
  { value: 'emergency', label: 'Emergency Services', icon: AlertCircle },
] as const;

export function ContactForm({ defaultInquiryType, className }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      inquiryType: defaultInquiryType || 'general',
      message: '',
    },
  });

  const { submitForm, isSubmitting, isSuccess, error, reset } = useContactForm({
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await submitForm(data);
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Success Message */}
          {isSuccess && (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Thank you for contacting us! We've received your message and will respond shortly.
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                {error}
                <div className="mt-2 text-sm">
                  You can also reach us directly at:
                  <ul className="list-disc list-inside mt-1">
                    <li>Phone: +234 708 608 0230</li>
                    <li>Email: info@medvical.com</li>
                  </ul>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <User className="inline-block w-4 h-4 mr-2" />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
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

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input 
                    type="tel"
                    placeholder="+234 XXX XXX XXXX" 
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Inquiry Type Field */}
          <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <ClipboardList className="inline-block w-4 h-4 mr-2" />
                  Inquiry Type
                </FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {inquiryTypeOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <SelectItem key={option.value} value={option.value}>
                          <span className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {option.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <MessageSquare className="inline-block w-4 h-4 mr-2" />
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe your inquiry in detail..."
                    className="min-h-32 resize-y"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
