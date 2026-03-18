/**
 * TestimonialCard Component
 * 
 * Displays individual testimonial with patient information, rating, and text.
 * Supports multiple variants: default, compact, and featured.
 */

import React from 'react';
import { Star, CheckCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import type { Testimonial } from '../../data/testimonials';
import { formatTestimonialDate } from '../../data/testimonials';
import { getDivisionById } from '../../data/content';

// ============================================================================
// Type Definitions
// ============================================================================

export interface TestimonialCardProps {
  /** Testimonial data to display */
  testimonial: Testimonial;
  /** Card variant style */
  variant?: 'default' | 'compact' | 'featured';
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function TestimonialCard({
  testimonial,
  variant = 'default',
  className = '',
}: TestimonialCardProps) {
  const division = getDivisionById(testimonial.division);
  const displayName = testimonial.isAnonymous ? 'Anonymous' : testimonial.name;

  // Render star rating
  const renderStars = () => {
    return (
      <div className="flex items-center gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className={`transition-all duration-300 hover:shadow-md ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 flex-shrink-0">
              {testimonial.photo && !testimonial.isAnonymous && (
                <AvatarImage src={testimonial.photo} alt={displayName} />
              )}
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <p className="font-semibold text-sm truncate">{displayName}</p>
                {renderStars()}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{testimonial.text}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Featured variant
  if (variant === 'featured') {
    return (
      <Card className={`border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white transition-all duration-300 hover:shadow-xl ${className}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Badge variant="default" className="bg-blue-500">
              Featured
            </Badge>
            {testimonial.verified && (
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-medium">Verified</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Rating */}
          <div className="flex items-center justify-center">
            {renderStars()}
          </div>

          {/* Testimonial text */}
          <blockquote className="text-center text-gray-700 italic text-lg leading-relaxed">
            "{testimonial.text}"
          </blockquote>

          {/* Patient info */}
          <div className="flex flex-col items-center gap-3 pt-4 border-t">
            <Avatar className="h-16 w-16">
              {testimonial.photo && !testimonial.isAnonymous && (
                <AvatarImage src={testimonial.photo} alt={displayName} />
              )}
              <AvatarFallback className="bg-blue-100 text-blue-600">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900">{displayName}</p>
              <p className="text-sm text-gray-500">{testimonial.service}</p>
              <p className="text-xs text-gray-400 mt-1">
                {formatTestimonialDate(testimonial.date)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          {/* Patient info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Avatar className="h-12 w-12 flex-shrink-0">
              {testimonial.photo && !testimonial.isAnonymous && (
                <AvatarImage src={testimonial.photo} alt={displayName} />
              )}
              <AvatarFallback className="bg-gray-100">
                <User className="h-6 w-6 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{displayName}</p>
              <p className="text-sm text-gray-500 truncate">{testimonial.service}</p>
            </div>
          </div>

          {/* Verified badge */}
          {testimonial.verified && (
            <div className="flex items-center gap-1 text-green-600 flex-shrink-0">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium hidden sm:inline">Verified</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Rating */}
        <div className="flex items-center justify-between">
          {renderStars()}
          <span className="text-xs text-gray-400">
            {formatTestimonialDate(testimonial.date)}
          </span>
        </div>

        {/* Testimonial text */}
        <blockquote className="text-gray-700 leading-relaxed">
          "{testimonial.text}"
        </blockquote>

        {/* Service badge */}
        {division && (
          <div className="pt-2">
            <Badge 
              variant="outline" 
              className={`
                ${division.color === 'blue' ? 'border-blue-500 text-blue-700 bg-blue-50' : ''}
                ${division.color === 'red' ? 'border-red-500 text-red-700 bg-red-50' : ''}
                ${division.color === 'orange' ? 'border-orange-500 text-orange-700 bg-orange-50' : ''}
              `}
            >
              {division.name}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
