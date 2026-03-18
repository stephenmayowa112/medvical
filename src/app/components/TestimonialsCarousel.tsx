import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { TestimonialCard } from './features/TestimonialCard';
import { SAMPLE_TESTIMONIALS } from '../data/testimonials';

const APPROVED = SAMPLE_TESTIMONIALS.filter((t) => t.approved);
const AUTO_PLAY_INTERVAL = 5000;

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = APPROVED.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  // Show up to 3 cards on larger screens
  const visibleCount = 3;
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) =>
    APPROVED[(current + i) % total]
  );

  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">Patient Stories</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real experiences from the people we serve across all three divisions.
          </p>
        </motion.div>

        {/* Desktop: show 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.id}-${current}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                variant={i === 1 ? 'featured' : 'default'}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card with slide animation */}
        <div className="md:hidden relative overflow-hidden mb-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <TestimonialCard testimonial={APPROVED[current]} variant="default" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border-gray-200 hover:border-blue-400"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2" aria-label="Testimonial navigation">
            {APPROVED.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border-gray-200 hover:border-blue-400"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Link to full testimonials page */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/testimonials"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors"
          >
            Read all patient stories →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
