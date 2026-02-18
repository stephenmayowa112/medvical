import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200">
              <span className="text-sm text-blue-700 font-medium">...family friendly, client-centred</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Top Private Hospital in Benin City, Nigeria
            </h1>
            <p className="text-base md:text-lg font-semibold text-[#2a8cc4]">
              Pharmacy, Hospital/Lab Equipment & Consumables, Personal Healthcare & Consumer Products, & Healthcare Services
            </p>
            <p className="text-lg text-gray-600">
              Med-Vical International is one of the most trusted hospitals in Benin Nigeria,
              providing high-quality, affordable and patient-centered healthcare. If you are searching
              for the best hospital in Benin City for maternity care, laboratory tests, surgery,
              pediatrics or emergency treatment, Med-Vical is your reliable healthcare partner.
            </p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image removed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}