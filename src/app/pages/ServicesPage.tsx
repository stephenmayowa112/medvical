import {
  Stethoscope, Package, ArrowRight, Phone, ShoppingCart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const serviceDivisions = [
  {
    icon: Stethoscope,
    title: 'Med-Vical Medical Centre',
    description:
      'Comprehensive healthcare services — from basic health checks and screening to specialty out-patient clinics, walk-in clinics, diagnostic services and 24/7 emergency care.',
    highlights: [
      'Health check & screening',
      'Specialty out-patient clinics',
      'Diagnostic & lab services',
      '24/7 emergency care',
      'Walk-in clinics',
      'Antenatal & obstetric care',
    ],
    link: '/services/medical-centre',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Package,
    title: 'Med-Vical Supplies',
    description:
      'The wholesale, distribution and supply division — quality pharmaceuticals, medical devices, hospital and laboratory equipment and consumables at competitive wholesale prices with nationwide delivery.',
    highlights: [
      'Pharmaceuticals',
      'Surgicals & dressings',
      'Medical devices',
      'Hospital & lab equipment',
      'Consumables',
      'Nationwide delivery',
    ],
    link: '/services/medical-supplies',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: ShoppingCart,
    title: 'Med-Vical Store',
    description:
      'Shop our wide range of personal healthcare products, wellness items, and daily consumer goods directly online. Enjoy secure checkout and quick delivery for all your health and lifestyle needs.',
    highlights: [
      'Personal healthcare',
      'Wellness products',
      'Daily consumer goods',
      'Secure online checkout',
      'Quick nationwide delivery',
      'Verified quality products',
    ],
    link: '/store',
    image:
      'https://images.unsplash.com/photo-1576602976047-174e57a47881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-violet-500 to-purple-500',
    glow: 'rgba(139,92,246,0.25)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
            src="/images/Regenerate_Video_With_Black_People.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Comprehensive Healthcare &amp; Supply Solutions
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Med-Vical International operates two key service divisions — our Medical Centre providing
              clinical healthcare, and our Supply division distributing quality medical products nationwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Divisions */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {serviceDivisions.map((division, index) => {
            const Icon = division.icon;
            const isReversed = index % 2 !== 0;
            return (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 25px 50px -12px ${division.glow}` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="overflow-hidden border border-white/20 bg-white/70 backdrop-blur-sm shadow-lg">
                    <div className={`grid md:grid-cols-2 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                      <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                        <motion.img
                          src={division.image}
                          alt={division.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                      <CardContent className={`p-6 md:p-10 flex flex-col justify-center ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.accent} flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h2 className="text-2xl md:text-3xl">{division.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{division.description}</p>

                        <ul className="grid grid-cols-2 gap-2 mb-6">
                          {division.highlights.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.06 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        <Link to={division.link} className="w-fit">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Button className="bg-blue-600 hover:bg-blue-700 group/btn">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            className="text-2xl md:text-3xl mb-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Health Is Our Priority
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you need clinical care or quality medical supplies, Med-Vical International is your trusted partner.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/clinic-registration">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  Register as Patient
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+2349018911685">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
