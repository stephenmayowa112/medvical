import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

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
    <footer className="bg-gray-900 text-gray-300 py-12 overflow-hidden relative">
      {/* Subtle floating glow */}
      <motion.div
        className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={columnItem}>
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/logo.png" alt="Med-Vical International" className="h-12 w-auto" />
              <div>
                <span className="font-bold text-white text-lg block leading-tight">MED-VICAL INTERNATIONAL</span>
                <span className="text-blue-400 text-xs italic">...family friendly, client-centred</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Pharmacy, Hospital/Lab Equipment & Consumables, Personal Healthcare & Consumer Products, & Healthcare Services
            </p>
            <p className="text-sm mb-4">
              Best Hospital in Benin City Nigeria. Providing exceptional medical care for maternity,
              laboratory services, and emergency treatment since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-all shadow-lg shadow-transparent ${socialColors[i]}`}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={columnItem}>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { href: '/#about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/store', label: 'Store' },
                { to: '/health-education', label: 'Health Education' },
                { to: '/clinic-registration', label: 'Clinic Registration' },
                { href: '/#contact', label: 'Contact' },
              ].map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={columnItem}>
            <h3 className="text-white font-medium mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/services', label: 'All Services' },
                { to: '/services/medical-centre', label: 'Medical Centre' },
                { to: '/services/medical-supplies', label: 'Medical Supplies' },
                { to: '/store', label: 'Pharmacy Store' },
              ].map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <Link to={link.to} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={columnItem}>
            <h3 className="text-white font-medium mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li>44 Boundary Road, GRA<br />Benin City, Edo State, Nigeria</li>
              <li>Phone: 09018911685</li>
              <li>Email: info@medvical.com</li>
              <li className="pt-2">
                <span className="text-white">Emergency:</span><br />
                Available 24/7
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; 2026 Med-Vical International. Best Hospital in Benin City Nigeria. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}