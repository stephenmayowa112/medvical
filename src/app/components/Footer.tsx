import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { NewsletterForm } from './features/NewsletterForm';
import { ALL_OFFICE_LOCATIONS } from '../data/content';

const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const columnItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45 } },
};

const socialColors = [
  'hover:bg-blue-600 hover:shadow-blue-600/30',
  'hover:bg-sky-500 hover:shadow-sky-500/30',
  'hover:bg-pink-600 hover:shadow-pink-600/30',
  'hover:bg-blue-700 hover:shadow-blue-700/30',
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 overflow-hidden relative">
      {/* Subtle floating glow */}
      <motion.div
        className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2">
              <h3 className="text-white text-xl font-semibold mb-1">Stay Informed with Health Tips</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for health updates, service announcements, and wellness tips from Med-Vical International.
              </p>
            </div>
            <div className="md:w-1/2">
              <NewsletterForm inline className="[&_input]:bg-gray-800 [&_input]:border-gray-700 [&_input]:text-white [&_input]:placeholder-gray-500 [&_label]:text-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Column */}
          <motion.div variants={columnItem}>
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/logo.png" alt="Med-Vical International" className="h-12 w-auto" />
              <div>
                <span className="font-bold text-white text-base block leading-tight">MED-VICAL INTERNATIONAL</span>
                <span className="text-blue-400 text-xs italic">...family friendly, client-centred</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Delivering healthcare services and products with integrity and excellence.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-gray-800 rounded px-2 py-1 text-xs">
                <Shield className="w-3 h-3 text-blue-400" aria-hidden="true" />
                <span className="text-gray-300">NHIA Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-800 rounded px-2 py-1 text-xs">
                <Shield className="w-3 h-3 text-green-400" aria-hidden="true" />
                <span className="text-gray-300">EDOHIS Accredited</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/medvical_international/' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={`Follow us on ${social.label}`}
                    className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-all shadow-lg shadow-transparent ${socialColors[i]}`}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={columnItem}>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { href: '/#about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/services/medical-centre', label: 'Medical Centre (MMC)' },
                { to: '/services/pharmacy-supplies', label: 'Pharmacy & Supplies (MPPS)' },
                { to: '/med-vical-health', label: 'Med-Vical Health (MHS)' },
                { to: '/testimonials', label: 'Testimonials' },
                { href: '/#contact', label: 'Contact Us' },
              ].map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</a>
                  )}
                </motion.li>
              ))}
              <motion.li key="simhealth" whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <a
                  href="https://simhealthafrica.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  simHealth Africa
                  <ExternalLink className="w-3 h-3" aria-label="(opens in new tab)" />
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Office Locations */}
          <motion.div variants={columnItem} className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Our Offices</h3>
            <div className="grid sm:grid-cols-1 gap-5">
              {ALL_OFFICE_LOCATIONS.map((location) => (
                <div key={location.id} className="text-sm space-y-1">
                  <p className="text-white font-medium">{location.city}</p>
                  <p className="flex items-start gap-1.5 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-400" aria-hidden="true" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-400">
                    <Phone className="w-3.5 h-3.5 shrink-0 text-blue-400" aria-hidden="true" />
                    <a href={`tel:${location.phone}`} className="hover:text-blue-400 transition-colors">{location.phone}</a>
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-400">
                    <Mail className="w-3.5 h-3.5 shrink-0 text-blue-400" aria-hidden="true" />
                    <a href={`mailto:${location.email}`} className="hover:text-blue-400 transition-colors">{location.email}</a>
                  </p>
                  <p className="flex items-start gap-1.5 text-gray-400">
                    <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-400" aria-hidden="true" />
                    <span>{location.hours.weekday}</span>
                  </p>
                  {location.hours.emergency && (
                    <p className="text-xs text-orange-400 font-medium pl-5">{location.hours.emergency}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Med-Vical International. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">·</span>
            <a href="/terms-of-service" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <span className="text-gray-700">·</span>
            <p className="italic text-gray-600">"Family-Friendly, Client-Centred"</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
