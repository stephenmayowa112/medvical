/**
 * TestimonialForm Component
 * 
 * Form for submitting patient testimonials with validation.
 * Includes star rating selector, anonymous option, service selection,
 * character counter, and photo upload with preview.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Star, Upload, X, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { testimonialFormSchema, type TestimonialFormData } from '../../utils/validation';
import { ALL_DIVISIONS } from '../../data/content';

// ============================================================================
// Type Definitions
// ============================================================================

export interface TestimonialFormProps {
  /** Callback function when form is submitted */
  onSubmit: (data: TestimonialFormData) => Promise<void>;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function TestimonialForm({ onSubmit, className = '' }: TestimonialFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      isAnonymous: false,
      rating: 0,
    },
  });

  const testimonialText = watch('text') || '';
  const characterCount = testimonialText.length;
  const minChars = 20;
  const maxChars = 500;

  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError('Photo must be less than 5MB');
        return;
      }

      // Validate file type
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        setSubmitError('Photo must be a JPG or PNG file');
        return;
      }

      setValue('photo', file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSubmitError(null);
    }
  };

  // Remove photo
  const handleRemovePhoto = () => {
    setValue('photo', undefined);
    setPhotoPreview(null);
  };

  // Handle star rating click
  const handleRatingClick = (value: number) => {
    setRating(value);
    setValue('rating', value);
  };

  // Handle anonymous toggle
  const handleAnonymousToggle = (checked: boolean) => {
    setIsAnonymous(checked);
    setValue('isAnonymous', checked);
    if (checked) {
      setValue('name', undefined);
    }
  };

  // Handle form submission
  const handleFormSubmit = async (data: TestimonialFormData) => {
    if (!termsAccepted) {
      setSubmitError('Please accept the terms and conditions');
      return;
    }

    if (rating === 0) {
      setSubmitError('Please provide a rating');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await onSubmit(data);
      setSubmitSuccess(true);
      
      // Reset form
      reset();
      setRating(0);
      setIsAnonymous(false);
      setPhotoPreview(null);
      setTermsAccepted(false);
      
      // Scroll to success message
      setTimeout(() => {
        document.getElementById('testimonial-success')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to submit testimonial. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Success message */}
      {submitSuccess && (
        <Alert id="testimonial-success" className="mb-6 bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Thank you for your testimonial! Your submission has been received and will be reviewed before being published.
          </AlertDescription>
        </Alert>
      )}

      {/* Error message */}
      {submitError && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">{submitError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name field */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Your Name {!isAnonymous && <span className="text-red-500">*</span>}
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            disabled={isAnonymous || isSubmitting}
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Anonymous toggle */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="anonymous"
            checked={isAnonymous}
            onCheckedChange={handleAnonymousToggle}
            disabled={isSubmitting}
          />
          <Label
            htmlFor="anonymous"
            className="text-sm font-normal cursor-pointer"
          >
            Submit anonymously
          </Label>
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          <p className="text-xs text-gray-500">
            Your email will not be displayed publicly
          </p>
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Star rating selector */}
        <div className="space-y-2">
          <Label>
            Rating <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                disabled={isSubmitting}
                className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoverRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-300'
                  }`}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="ml-2 text-sm text-gray-600">
                {rating} star{rating > 1 ? 's' : ''}
              </span>
            )}
          </div>
          {errors.rating && (
            <p className="text-sm text-red-600">{errors.rating.message}</p>
          )}
        </div>

        {/* Service selection */}
        <div className="space-y-2">
          <Label htmlFor="service">
            Service <span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(value) => setValue('service', value)}
            disabled={isSubmitting}
          >
            <SelectTrigger
              id="service"
              className={errors.service ? 'border-red-500' : ''}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {ALL_DIVISIONS.map((division) => (
                <React.Fragment key={division.id}>
                  <SelectItem
                    value={division.name}
                    className="font-semibold"
                    disabled
                  >
                    {division.fullName}
                  </SelectItem>
                  {division.services.map((service) => (
                    <SelectItem
                      key={`${division.id}-${service}`}
                      value={service}
                      className="pl-6"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </React.Fragment>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Testimonial text */}
        <div className="space-y-2">
          <Label htmlFor="text">
            Your Testimonial <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="text"
            placeholder="Share your experience with Med-Vical..."
            rows={5}
            disabled={isSubmitting}
            {...register('text')}
            className={errors.text ? 'border-red-500' : ''}
          />
          <div className="flex justify-between items-center text-xs">
            <span
              className={`${
                characterCount < minChars
                  ? 'text-red-600'
                  : characterCount > maxChars
                  ? 'text-red-600'
                  : 'text-gray-500'
              }`}
            >
              {characterCount} / {maxChars} characters
              {characterCount < minChars && ` (minimum ${minChars})`}
            </span>
          </div>
          {errors.text && (
            <p className="text-sm text-red-600">{errors.text.message}</p>
          )}
        </div>

        {/* Photo upload */}
        <div className="space-y-2">
          <Label htmlFor="photo">Photo (Optional)</Label>
          {!photoPreview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
              <input
                id="photo"
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handlePhotoChange}
                disabled={isSubmitting}
                className="hidden"
              />
              <label
                htmlFor="photo"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Click to upload photo
                </span>
                <span className="text-xs text-gray-400">
                  JPG or PNG, max 5MB
                </span>
              </label>
            </div>
          ) : (
            <div className="relative inline-block">
              <img
                src={photoPreview}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={handleRemovePhoto}
                disabled={isSubmitting}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                aria-label="Remove photo"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          {errors.photo && (
            <p className="text-sm text-red-600">{errors.photo.message}</p>
          )}
        </div>

        {/* Terms acceptance */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            disabled={isSubmitting}
          />
          <Label
            htmlFor="terms"
            className="text-sm font-normal cursor-pointer leading-relaxed"
          >
            I agree that my testimonial may be published on the Med-Vical website
            and marketing materials. I confirm that the information provided is
            accurate and truthful.
          </Label>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting || !termsAccepted}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
        </Button>
      </form>
    </div>
  );
}

export default TestimonialForm;
