import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
      >
        <source
          src="https://videos.pexels.com/video-files/5452293/5452293-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
              <span className="text-sm text-white font-medium">...family friendly, client-centred</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white drop-shadow-lg">
              Top Private Hospital in Benin City, Nigeria
            </h1>
            <p className="text-lg text-gray-200">
              Trusted, affordable and patient-centered healthcare — from maternity care and paediatrics to surgery, lab diagnostics and 24/7 emergency services.
            </p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="inline-flex bg-white/15 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-white text-lg">✓</span>
                </motion.div>
                <div>
                  <p className="font-semibold text-sm text-white">Open 24/7</p>
                  <p className="text-xs text-gray-300">Emergency Services</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}