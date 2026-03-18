import { MessageCircle } from 'lucide-react';
import { type DivisionId } from '../../data/content';
import { generateWhatsAppLink } from '../../utils/whatsapp';

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
 * - ARIA labels for screen readers
 * 
 * @example
 * ```tsx
 * // Basic usage with division
 * <WhatsAppWidget division="MMC" />
 * 
 * // Custom message and position
 * <WhatsAppWidget 
 *   division="MPPS"
 *   defaultMessage="I need to order medical supplies"
 *   position="bottom-left"
 * />
 * ```
 */
export function WhatsAppWidget({
  phoneNumber,
  defaultMessage,
  position = 'bottom-right',
  division = 'MMC',
}: WhatsAppWidgetProps) {
  // Generate WhatsApp link using the utility function
  const whatsappUrl = generateWhatsAppLink(division, defaultMessage);

  // Position classes based on prop
  const positionClasses = position === 'bottom-left' 
    ? 'left-4 sm:left-6' 
    : 'right-4 sm:right-6';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-4 sm:bottom-6 ${positionClasses} z-50
        flex items-center justify-center
        w-14 h-14 sm:w-16 sm:h-16
        bg-[#25D366] hover:bg-[#20BA5A]
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110
        group
      `}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle 
        className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
        strokeWidth={2}
        aria-hidden="true"
      />
      
      {/* Tooltip on hover (desktop only) */}
      <span className="
        absolute right-full mr-3 px-3 py-2
        bg-gray-900 text-white text-sm font-medium
        rounded-lg whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        hidden sm:block
      ">
        Chat with us on WhatsApp
      </span>
      
      {/* Pulse animation ring */}
      <span className="
        absolute inset-0 rounded-full
        bg-[#25D366] opacity-75
        animate-ping
        [animation-duration:2s]
      " />
    </a>
  );
}
