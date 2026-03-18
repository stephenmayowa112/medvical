import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, type DivisionId } from '../../data/content';

/**
 * Props for the WhatsAppWidget component
 */
export interface WhatsAppWidgetProps {
  /** WhatsApp business number (optional - will use division default if not provided) */
  phoneNumber?: string;
  /** Pre-filled message for WhatsApp chat */
  defaultMessage?: string;
  /** Position of the floating button */
  position?: 'bottom-right' | 'bottom-left';
  /** Division to auto-route to correct contact */
  division?: DivisionId;
}

/**
 * WhatsAppWidget Component
 * 
 * A floating WhatsApp chat button that allows users to quickly contact Med-Vical
 * via WhatsApp. The button is fixed to the bottom corner of the screen and opens
 * a WhatsApp conversation with pre-filled messages.
 * 
 * Features:
 * - Fixed positioning (bottom-right or bottom-left)
 * - Division-specific routing (MMC, MPPS, MHS)
 * - Pre-populated messages based on context
 * - Smooth hover animations
 * - 44x44px minimum touch target for mobile accessibility
 * - ARIA