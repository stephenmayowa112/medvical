import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { NewsletterForm } from './features/NewsletterForm';

export function NewsletterCTA() {
  return (
    <section id="newsletter" className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 mx-auto">
            <Mail className="w-8 h-8 text-white" aria-hidden="true" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Informed, Stay Healthy
            </h2>
            <p className="mt-3 text-blue-100 text-lg">
              Subscribe to our newsletter for health tips, service updates, and exclusive content from Med-Vical International.
            </p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <NewsletterForm inline className="[&_input]:bg-white/90 [&_input]:text-gray-900 [&_input::placeholder]:text-gray-500 [&_label]:text-blue-100 [&_button]:bg-white [&_button]:text-blue-700 [&_button:hover]:bg-blue-50" />
          </motion.div>

          {/* Trust note */}
          <p className="text-blue-200 text-xs">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
