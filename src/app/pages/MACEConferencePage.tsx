import { Presentation, Target, CheckCircle2, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const conferenceTopics = [
  'Essential medical equipment and devices',
  'Essential medical consumables',
  'Essential medicines and specialty drugs',
  'Other essential healthcare products (vaccines, biologicals, nutraceuticals, etc)',
  'Market access and users perspectives',
  'Supply chain and logistics',
  'Local adaptation and technical capabilities',
  'Servicing/repair of hospital/med lab equipment and devices',
  'Training and capacity building',
  'Promoting innovations in healthcare products and technology design, production, market access, & supply chain',
];

export default function MACEConferencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'MACE Conference | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Presentation className="w-3 h-3 mr-1" />
              Conference & Exhibition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MedAccess Conference & Exhibition
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              (MACE Conference)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conference Topics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conference Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The conference will cover access to essential healthcare products, technology, and innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {conferenceTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Alignment */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Aligned with Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              The MACE Conference is in line with Med-Vical International's mission to provide sustainable 
              access to quality and affordable healthcare products and technology, ultimately improving health 
              delivery across communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">
              Join Us at MACE Conference
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative">
              Be part of the conversation on sustainable access to healthcare products and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  Register Interest
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/upcoming-events">
                <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Event Details
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
